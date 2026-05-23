"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";
import { normalizeDriveUrl } from "@/lib/utils/drive";

export type ServiceActionResult = { ok: boolean; message?: string };

function canEdit(role: string) {
  return ["super_admin", "marketing_admin"].includes(role);
}

function parseLines(val: FormDataEntryValue | null): string[] {
  if (typeof val !== "string") return [];
  return val.split("\n").map((s) => s.trim()).filter(Boolean);
}

function parseJson(val: FormDataEntryValue | null, fallback: unknown[] = []): unknown[] {
  if (typeof val !== "string" || !val.trim()) return fallback;
  try {
    const parsed = JSON.parse(val);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

export async function upsertService(formData: FormData): Promise<ServiceActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const slug = (formData.get("slug") as string)?.trim();
  if (!slug) return { ok: false, message: "Slug is required" };

  const heroImageUrl = normalizeDriveUrl((formData.get("heroImageUrl") as string) || "");

  const row = {
    slug,
    title:            (formData.get("title")           as string) || null,
    eyebrow:          (formData.get("eyebrow")          as string) || null,
    hero_description: (formData.get("heroDescription")  as string) || null,
    hero_image_url:   heroImageUrl || null,
    hero_image_alt:   (formData.get("heroImageAlt")     as string) || null,
    meta_description: (formData.get("metaDescription")  as string) || null,
    pax_range:        (formData.get("paxRange")         as string) || null,
    price_from:       (formData.get("priceFrom")        as string) || null,
    duration_options: parseLines(formData.get("durationOptions")),
    vibe_tags:        parseLines(formData.get("vibeTags")),
    inclusions:       parseLines(formData.get("inclusions")),
    samples:          parseJson(formData.get("samples")),
    process_steps:    parseJson(formData.get("processSteps")),
    faqs:             parseJson(formData.get("faqs")),
    updated_at:       new Date().toISOString(),
  };

  const sb = createAdminClient();
  const { error } = await sb
    .from("services")
    .upsert(row, { onConflict: "slug" });

  if (error) return { ok: false, message: error.message };

  revalidatePath("/services", "layout");
  revalidatePath(`/services/${slug}`);
  revalidatePath("/admin/content/services");
  return { ok: true, message: "Service saved" };
}
