"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

export type FaqActionResult = {
  ok: boolean;
  message?: string;
  slug?: string;
  id?: string;
};

const STATUS_VALUES = ["draft", "published", "archived"] as const;
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function canEdit(role: string): boolean {
  return ["super_admin", "content_admin", "marketing_admin"].includes(role);
}

function jsonField(formData: FormData, key: string, fallback: unknown): unknown {
  const raw = formData.get(key);
  if (typeof raw !== "string" || raw.trim() === "") return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

// ---------------------------------------------------------------------
// FAQ Categories
// ---------------------------------------------------------------------
const categorySchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().regex(SLUG_REGEX),
  eyebrow: z.string().min(2).max(120),
  title: z.string().min(5).max(200),
  intro: z.string().min(20).max(1000),
  metaDescription: z.string().min(20).max(300),
  displayOrder: z.coerce.number().int(),
  status: z.enum(STATUS_VALUES),
});

export async function upsertFaqCategory(formData: FormData): Promise<FaqActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const parsed = categorySchema.safeParse({
    id: (formData.get("id") as string) || undefined,
    slug: formData.get("slug"),
    eyebrow: formData.get("eyebrow"),
    title: formData.get("title"),
    intro: formData.get("intro"),
    metaDescription: formData.get("metaDescription"),
    displayOrder: formData.get("displayOrder"),
    status: formData.get("status"),
  });
  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
    };
  }

  const sb = createAdminClient();
  const row = {
    slug: parsed.data.slug,
    eyebrow: parsed.data.eyebrow,
    title: parsed.data.title,
    intro: parsed.data.intro,
    meta_description: parsed.data.metaDescription,
    display_order: parsed.data.displayOrder,
    status: parsed.data.status,
    updated_by: profile.id,
  };

  let result;
  if (parsed.data.id) {
    result = await sb
      .from("faq_categories")
      .update(row)
      .eq("id", parsed.data.id)
      .select("id, slug")
      .single();
  } else {
    result = await sb
      .from("faq_categories")
      .insert({ ...row, created_by: profile.id })
      .select("id, slug")
      .single();
  }

  if (result.error) return { ok: false, message: result.error.message };

  revalidatePath("/faq");
  revalidatePath(`/faq/${result.data.slug}`);
  revalidatePath("/admin/content/faq");
  return { ok: true, message: parsed.data.id ? "Updated" : "Created", id: result.data.id, slug: result.data.slug };
}

export async function deleteFaqCategory(formData: FormData): Promise<FaqActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const id = formData.get("id");
  if (typeof id !== "string") return { ok: false, message: "Missing id" };

  const sb = createAdminClient();
  const { data: existing } = await sb
    .from("faq_categories")
    .select("slug")
    .eq("id", id)
    .maybeSingle();
  const { error } = await sb.from("faq_categories").delete().eq("id", id);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/faq");
  if (existing?.slug) revalidatePath(`/faq/${existing.slug}`);
  revalidatePath("/admin/content/faq");
  return { ok: true, message: "Deleted (semua pertanyaan di kategori ini juga terhapus)" };
}

// ---------------------------------------------------------------------
// FAQ Questions
// ---------------------------------------------------------------------
const questionSchema = z.object({
  id: z.string().uuid().optional(),
  categoryId: z.string().uuid(),
  slug: z.string().regex(SLUG_REGEX),
  question: z.string().min(5).max(500),
  answer: z.string().min(10).max(2000),
  detail: z.string().max(5000).optional().or(z.literal("")),
  tags: z.array(z.string()),
  isFeatured: z
    .union([z.literal("on"), z.literal("true"), z.literal("false"), z.null(), z.undefined()])
    .transform((v) => v === "on" || v === "true"),
  displayOrder: z.coerce.number().int(),
  status: z.enum(STATUS_VALUES),
});

export async function upsertFaqQuestion(formData: FormData): Promise<FaqActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const tags = jsonField(formData, "tags", []);
  if (tags === undefined) return { ok: false, message: "Tags must be valid JSON array" };

  const parsed = questionSchema.safeParse({
    id: (formData.get("id") as string) || undefined,
    categoryId: formData.get("categoryId"),
    slug: formData.get("slug"),
    question: formData.get("question"),
    answer: formData.get("answer"),
    detail: (formData.get("detail") as string) || "",
    tags,
    isFeatured: formData.get("isFeatured"),
    displayOrder: formData.get("displayOrder"),
    status: formData.get("status"),
  });
  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
    };
  }

  const sb = createAdminClient();
  const row = {
    category_id: parsed.data.categoryId,
    slug: parsed.data.slug,
    question: parsed.data.question,
    answer: parsed.data.answer,
    detail: parsed.data.detail || null,
    tags: parsed.data.tags,
    is_featured: parsed.data.isFeatured,
    display_order: parsed.data.displayOrder,
    status: parsed.data.status,
    updated_by: profile.id,
  };

  let result;
  if (parsed.data.id) {
    result = await sb
      .from("faq_questions")
      .update(row)
      .eq("id", parsed.data.id)
      .select("id, slug, category_id")
      .single();
  } else {
    result = await sb
      .from("faq_questions")
      .insert({ ...row, created_by: profile.id })
      .select("id, slug, category_id")
      .single();
  }

  if (result.error) return { ok: false, message: result.error.message };

  // Resolve category slug for revalidation
  const { data: cat } = await sb
    .from("faq_categories")
    .select("slug")
    .eq("id", result.data.category_id)
    .maybeSingle();

  revalidatePath("/faq");
  if (cat?.slug) revalidatePath(`/faq/${cat.slug}`);
  revalidatePath("/admin/content/faq");
  return { ok: true, message: parsed.data.id ? "Updated" : "Created", id: result.data.id, slug: result.data.slug };
}

export async function deleteFaqQuestion(formData: FormData): Promise<FaqActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const id = formData.get("id");
  if (typeof id !== "string") return { ok: false, message: "Missing id" };

  const sb = createAdminClient();
  const { data: existing } = await sb
    .from("faq_questions")
    .select("category_id, faq_categories(slug)")
    .eq("id", id)
    .maybeSingle();
  const { error } = await sb.from("faq_questions").delete().eq("id", id);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/faq");
  const catSlug = (existing as unknown as { faq_categories?: { slug?: string } })?.faq_categories?.slug;
  if (catSlug) revalidatePath(`/faq/${catSlug}`);
  revalidatePath("/admin/content/faq");
  return { ok: true, message: "Deleted" };
}

// ---------------------------------------------------------------------
// Quick reorder action (drag-drop or buttons → just set new display_order)
// ---------------------------------------------------------------------
export async function reorderFaqQuestion(
  id: string,
  newOrder: number
): Promise<FaqActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const sb = createAdminClient();
  const { error } = await sb
    .from("faq_questions")
    .update({ display_order: newOrder, updated_by: profile.id })
    .eq("id", id);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/faq");
  revalidatePath("/admin/content/faq");
  return { ok: true };
}
