"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

export type ContentActionResult = {
  ok: boolean;
  message?: string;
  slug?: string;
  id?: string;
};

import { normalizeDriveUrl } from "@/lib/utils/drive";

const STATUS_VALUES = ["draft", "published", "archived"] as const;
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function jsonField(formData: FormData, key: string, fallback: unknown): unknown {
  const raw = formData.get(key);
  if (typeof raw !== "string" || raw.trim() === "") return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function canEdit(role: string): boolean {
  return ["super_admin", "content_admin", "marketing_admin"].includes(role);
}

// ---------------------------------------------------------------------
// Insights
// ---------------------------------------------------------------------
const insightSchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().regex(SLUG_REGEX, "Slug: lowercase letters, digits, dashes only"),
  title: z.string().min(3).max(200),
  excerpt: z.string().min(10).max(500),
  category: z.string().min(2).max(80),
  metaDescription: z.string().min(20).max(300),
  heroImageUrl: z.string().url().or(z.literal("")),
  heroImageAlt: z.string().max(200).optional().or(z.literal("")),
  publishDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD"),
  readTimeMin: z.coerce.number().int().min(1).max(120),
  authorName: z.string().min(2).max(120),
  authorRole: z.string().min(2).max(120),
  authorInitials: z.string().min(1).max(6),
  status: z.enum(STATUS_VALUES),
  tldr: z.array(z.string()),
  sections: z.array(z.unknown()),
  relatedSlugs: z.array(z.string()),
});

export async function upsertInsight(formData: FormData): Promise<ContentActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const tldr = jsonField(formData, "tldr", []);
  const sections = jsonField(formData, "sections", []);
  const relatedSlugs = jsonField(formData, "relatedSlugs", []);
  if (tldr === undefined) return { ok: false, message: "TLDR must be valid JSON array" };
  if (sections === undefined) return { ok: false, message: "Sections must be valid JSON array" };
  if (relatedSlugs === undefined) return { ok: false, message: "Related slugs must be valid JSON array" };

  const parsed = insightSchema.safeParse({
    id: (formData.get("id") as string) || undefined,
    slug: formData.get("slug"),
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    category: formData.get("category"),
    metaDescription: formData.get("metaDescription"),
    heroImageUrl: normalizeDriveUrl((formData.get("heroImageUrl") as string) || ""),
    heroImageAlt: (formData.get("heroImageAlt") as string) || "",
    publishDate: formData.get("publishDate"),
    readTimeMin: formData.get("readTimeMin"),
    authorName: formData.get("authorName"),
    authorRole: formData.get("authorRole"),
    authorInitials: formData.get("authorInitials"),
    status: formData.get("status"),
    tldr,
    sections,
    relatedSlugs,
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
    title: parsed.data.title,
    excerpt: parsed.data.excerpt,
    category: parsed.data.category,
    meta_description: parsed.data.metaDescription,
    hero_image_url: parsed.data.heroImageUrl || null,
    hero_image_alt: parsed.data.heroImageAlt || null,
    publish_date: parsed.data.publishDate,
    read_time_min: parsed.data.readTimeMin,
    author_name: parsed.data.authorName,
    author_role: parsed.data.authorRole,
    author_initials: parsed.data.authorInitials,
    status: parsed.data.status,
    tldr: parsed.data.tldr,
    sections: parsed.data.sections,
    related_slugs: parsed.data.relatedSlugs,
    updated_by: profile.id,
  };

  let result;
  if (parsed.data.id) {
    result = await sb
      .from("insights")
      .update(row)
      .eq("id", parsed.data.id)
      .select("id, slug")
      .single();
  } else {
    result = await sb
      .from("insights")
      .insert({ ...row, created_by: profile.id })
      .select("id, slug")
      .single();
  }

  if (result.error) return { ok: false, message: result.error.message };

  revalidatePath("/insights");
  revalidatePath(`/insights/${result.data.slug}`);
  revalidatePath("/admin/content/insights");
  return { ok: true, message: parsed.data.id ? "Updated" : "Created", id: result.data.id, slug: result.data.slug };
}

export async function deleteInsight(formData: FormData): Promise<ContentActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const id = formData.get("id");
  if (typeof id !== "string") return { ok: false, message: "Missing id" };

  const sb = createAdminClient();
  const { data: existing } = await sb.from("insights").select("slug").eq("id", id).maybeSingle();
  const { error } = await sb.from("insights").delete().eq("id", id);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/insights");
  if (existing?.slug) revalidatePath(`/insights/${existing.slug}`);
  revalidatePath("/admin/content/insights");
  return { ok: true, message: "Deleted" };
}

// ---------------------------------------------------------------------
// Case studies
// ---------------------------------------------------------------------
const caseStudySchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().regex(SLUG_REGEX),
  industry: z.string().min(2).max(80),
  industryLabel: z.string().min(2).max(120),
  outcomeHeadline: z.string().min(5).max(200),
  shortDescription: z.string().min(10).max(500),
  metaDescription: z.string().min(20).max(300),
  heroImageUrl: z.string().url().or(z.literal("")),
  heroImageAlt: z.string().max(200).optional().or(z.literal("")),
  pax: z.string().min(1).max(60),
  duration: z.string().min(1).max(60),
  location: z.string().min(1).max(120),
  budgetTier: z.string().min(1).max(60),
  serviceSlug: z.string().min(1).max(120),
  status: z.enum(STATUS_VALUES),
  challenge: z.array(z.string()),
  approach: z.array(z.string()),
  execution: z.array(z.string()),
  outcome: z.array(z.string()),
  metrics: z.array(z.unknown()),
  testimonial: z.unknown(),
  relatedServiceSlugs: z.array(z.string()),
  gallery: z.array(z.unknown()),
});

export async function upsertCaseStudy(formData: FormData): Promise<ContentActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const challenge = jsonField(formData, "challenge", []);
  const approach = jsonField(formData, "approach", []);
  const execution = jsonField(formData, "execution", []);
  const outcome = jsonField(formData, "outcome", []);
  const metrics = jsonField(formData, "metrics", []);
  const testimonial = jsonField(formData, "testimonial", {});
  const relatedServiceSlugs = jsonField(formData, "relatedServiceSlugs", []);
  const gallery = jsonField(formData, "gallery", []);

  for (const [k, v] of Object.entries({ challenge, approach, execution, outcome, metrics, testimonial, relatedServiceSlugs, gallery })) {
    if (v === undefined) return { ok: false, message: `${k} must be valid JSON` };
  }

  const parsed = caseStudySchema.safeParse({
    id: (formData.get("id") as string) || undefined,
    slug: formData.get("slug"),
    industry: formData.get("industry"),
    industryLabel: formData.get("industryLabel"),
    outcomeHeadline: formData.get("outcomeHeadline"),
    shortDescription: formData.get("shortDescription"),
    metaDescription: formData.get("metaDescription"),
    heroImageUrl: normalizeDriveUrl((formData.get("heroImageUrl") as string) || ""),
    heroImageAlt: (formData.get("heroImageAlt") as string) || "",
    pax: formData.get("pax"),
    duration: formData.get("duration"),
    location: formData.get("location"),
    budgetTier: formData.get("budgetTier"),
    serviceSlug: formData.get("serviceSlug"),
    status: formData.get("status"),
    challenge,
    approach,
    execution,
    outcome,
    metrics,
    testimonial,
    relatedServiceSlugs,
    gallery,
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
    industry: parsed.data.industry,
    industry_label: parsed.data.industryLabel,
    outcome_headline: parsed.data.outcomeHeadline,
    short_description: parsed.data.shortDescription,
    meta_description: parsed.data.metaDescription,
    hero_image_url: parsed.data.heroImageUrl || null,
    hero_image_alt: parsed.data.heroImageAlt || null,
    pax: parsed.data.pax,
    duration: parsed.data.duration,
    location: parsed.data.location,
    budget_tier: parsed.data.budgetTier,
    service_slug: parsed.data.serviceSlug,
    status: parsed.data.status,
    challenge: parsed.data.challenge,
    approach: parsed.data.approach,
    execution: parsed.data.execution,
    outcome: parsed.data.outcome,
    metrics: parsed.data.metrics,
    testimonial: parsed.data.testimonial,
    related_service_slugs: parsed.data.relatedServiceSlugs,
    gallery: parsed.data.gallery,
    updated_by: profile.id,
  };

  let result;
  if (parsed.data.id) {
    result = await sb
      .from("case_studies")
      .update(row)
      .eq("id", parsed.data.id)
      .select("id, slug")
      .single();
  } else {
    result = await sb
      .from("case_studies")
      .insert({ ...row, created_by: profile.id })
      .select("id, slug")
      .single();
  }

  if (result.error) return { ok: false, message: result.error.message };

  revalidatePath("/case-studies");
  revalidatePath(`/case-studies/${result.data.slug}`);
  revalidatePath("/admin/content/case-studies");
  return { ok: true, message: parsed.data.id ? "Updated" : "Created", id: result.data.id, slug: result.data.slug };
}

export async function deleteCaseStudy(formData: FormData): Promise<ContentActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const id = formData.get("id");
  if (typeof id !== "string") return { ok: false, message: "Missing id" };

  const sb = createAdminClient();
  const { data: existing } = await sb.from("case_studies").select("slug").eq("id", id).maybeSingle();
  const { error } = await sb.from("case_studies").delete().eq("id", id);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/case-studies");
  if (existing?.slug) revalidatePath(`/case-studies/${existing.slug}`);
  revalidatePath("/admin/content/case-studies");
  return { ok: true, message: "Deleted" };
}
