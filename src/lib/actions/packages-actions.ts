"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";
import { normalizeDriveUrl } from "@/lib/utils/drive";

export type PackageActionResult = { ok: boolean; message?: string };

function canEdit(role: string) {
  return ["super_admin", "marketing_admin"].includes(role);
}

function parseLines(val: FormDataEntryValue | null): string[] {
  if (typeof val !== "string") return [];
  return val.split("\n").map((s) => s.trim()).filter(Boolean);
}

export async function upsertPackage(formData: FormData): Promise<PackageActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const slug = (formData.get("slug") as string)?.trim();
  if (!slug) return { ok: false, message: "Slug is required" };

  const heroImageUrl = normalizeDriveUrl((formData.get("heroImageUrl") as string) || "");
  const priceNumericRaw = parseFloat(formData.get("priceNumeric") as string);

  const row = {
    slug,
    title:          (formData.get("title")          as string) || null,
    subtitle:       (formData.get("subtitle")        as string) || null,
    description:    (formData.get("description")     as string) || null,
    pax_range:      (formData.get("paxRange")        as string) || null,
    duration:       (formData.get("duration")        as string) || null,
    vibe_tags:      parseLines(formData.get("vibeTags")),
    starting_price: (formData.get("startingPrice")   as string) || null,
    price_numeric:  isNaN(priceNumericRaw) ? null : priceNumericRaw,
    inclusions:     parseLines(formData.get("inclusions")),
    featured:       formData.get("featured") === "on",
    service_slug:   (formData.get("serviceSlug")     as string) || null,
    hero_image_url: heroImageUrl || null,
    hero_image_alt: (formData.get("heroImageAlt")    as string) || null,
    updated_at:     new Date().toISOString(),
  };

  const sb = createAdminClient();
  const { error } = await sb
    .from("packages")
    .upsert(row, { onConflict: "slug" });

  if (error) return { ok: false, message: error.message };

  revalidatePath("/packages", "layout");
  revalidatePath(`/packages/${slug}`);
  revalidatePath("/admin/content/packages");
  return { ok: true, message: "Package saved" };
}
