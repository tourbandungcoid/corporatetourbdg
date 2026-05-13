"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

export type TestimonialActionResult = {
  ok: boolean;
  message?: string;
  id?: string;
};

const STATUS_VALUES = ["draft", "published", "archived"] as const;

function canEdit(role: string): boolean {
  return ["super_admin", "content_admin", "marketing_admin"].includes(role);
}

const schema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().max(160).optional().or(z.literal("")),
  clientName: z.string().min(2).max(120),
  company: z.string().min(1).max(200),
  role: z.string().max(120).optional().or(z.literal("")),
  quote: z.string().min(10).max(2000),
  eventType: z.string().max(80).optional().or(z.literal("")),
  industry: z.string().max(80).optional().or(z.literal("")),
  rating: z.coerce.number().int().min(1).max(5).optional().or(z.literal("")),
  photoUrl: z.string().url().optional().or(z.literal("")),
  isFeatured: z
    .union([z.literal("on"), z.literal("true"), z.literal("false"), z.null(), z.undefined()])
    .transform((v) => v === "on" || v === "true"),
  displayOrder: z.coerce.number().int(),
  caseStudySlug: z.string().max(160).optional().or(z.literal("")),
  status: z.enum(STATUS_VALUES),
});

export async function upsertTestimonial(formData: FormData): Promise<TestimonialActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const parsed = schema.safeParse({
    id: (formData.get("id") as string) || undefined,
    slug: (formData.get("slug") as string) || "",
    clientName: formData.get("clientName"),
    company: formData.get("company"),
    role: (formData.get("role") as string) || "",
    quote: formData.get("quote"),
    eventType: (formData.get("eventType") as string) || "",
    industry: (formData.get("industry") as string) || "",
    rating: formData.get("rating") || "",
    photoUrl: (formData.get("photoUrl") as string) || "",
    isFeatured: formData.get("isFeatured"),
    displayOrder: formData.get("displayOrder"),
    caseStudySlug: (formData.get("caseStudySlug") as string) || "",
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
    slug: parsed.data.slug || null,
    client_name: parsed.data.clientName,
    company: parsed.data.company,
    role: parsed.data.role || null,
    quote: parsed.data.quote,
    event_type: parsed.data.eventType || null,
    industry: parsed.data.industry || null,
    rating: typeof parsed.data.rating === "number" ? parsed.data.rating : null,
    photo_url: parsed.data.photoUrl || null,
    is_featured: parsed.data.isFeatured,
    display_order: parsed.data.displayOrder,
    case_study_slug: parsed.data.caseStudySlug || null,
    status: parsed.data.status,
    updated_by: profile.id,
  };

  let result;
  if (parsed.data.id) {
    result = await sb
      .from("testimonials")
      .update(row)
      .eq("id", parsed.data.id)
      .select("id")
      .single();
  } else {
    result = await sb
      .from("testimonials")
      .insert({ ...row, created_by: profile.id })
      .select("id")
      .single();
  }

  if (result.error) return { ok: false, message: result.error.message };

  // Revalidate public surfaces that consume testimonials
  revalidatePath("/");
  revalidatePath("/clients");
  if (parsed.data.caseStudySlug) revalidatePath(`/case-studies/${parsed.data.caseStudySlug}`);
  revalidatePath("/admin/content/testimonials");

  return {
    ok: true,
    message: parsed.data.id ? "Updated" : "Created",
    id: result.data.id,
  };
}

export async function deleteTestimonial(formData: FormData): Promise<TestimonialActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const id = formData.get("id");
  if (typeof id !== "string") return { ok: false, message: "Missing id" };

  const sb = createAdminClient();
  const { error } = await sb.from("testimonials").delete().eq("id", id);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/");
  revalidatePath("/clients");
  revalidatePath("/admin/content/testimonials");
  return { ok: true, message: "Deleted" };
}
