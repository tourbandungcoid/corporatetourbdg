"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

export type BrandActionResult = {
  ok: boolean;
  message?: string;
};

function canEdit(role: string): boolean {
  return ["super_admin", "marketing_admin"].includes(role);
}

const hex = z.string().regex(/^#[0-9a-fA-F]{3,8}$/, "Hex color e.g. #6BA239");

const colorsSchema = z.object({
  color_ink: hex,
  color_brand: hex,
  color_brand_deep: hex,
  color_brand_darker: hex,
  color_brand_light: hex,
  color_forest: hex,
  color_warm: hex,
  color_bone: hex,
  color_cream: hex,
  color_paper: hex,
});

const typoSchema = z.object({
  font_sans: z.string().min(2).max(80),
  font_display: z.string().min(2).max(80),
});

const logoSchema = z.object({
  logo_primary_url: z.string().url().or(z.literal("")),
  logo_dark_url: z.string().url().or(z.literal("")),
  logo_favicon_url: z.string().url().or(z.literal("")),
});

const copySchema = z.object({
  copy_overrides: z.string(), // raw JSON string
});

async function updateBrandRow(
  patch: Record<string, unknown>,
  profileId: string
): Promise<BrandActionResult> {
  const sb = createAdminClient();
  const { error } = await sb
    .from("brand_settings")
    .upsert({ id: 1, ...patch, updated_by: profileId }, { onConflict: "id" });
  if (error) return { ok: false, message: error.message };

  revalidatePath("/", "layout");
  revalidatePath("/admin/settings/brand");
  return { ok: true, message: "Brand settings updated" };
}

export async function updateBrandColors(formData: FormData): Promise<BrandActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const payload: Record<string, unknown> = {};
  for (const [k, v] of formData.entries()) {
    if (typeof v === "string") payload[k] = v;
  }
  const parsed = colorsSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
    };
  }
  return updateBrandRow(parsed.data, profile.id);
}

export async function updateBrandTypography(formData: FormData): Promise<BrandActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const payload: Record<string, unknown> = {};
  for (const [k, v] of formData.entries()) {
    if (typeof v === "string") payload[k] = v;
  }
  const parsed = typoSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
    };
  }
  return updateBrandRow(parsed.data, profile.id);
}

export async function updateBrandLogos(formData: FormData): Promise<BrandActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const payload: Record<string, unknown> = {};
  for (const [k, v] of formData.entries()) {
    if (typeof v === "string") payload[k] = v;
  }
  const parsed = logoSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
    };
  }
  // Convert empty strings → null so fallback kicks in
  return updateBrandRow(
    {
      logo_primary_url: parsed.data.logo_primary_url || null,
      logo_dark_url: parsed.data.logo_dark_url || null,
      logo_favicon_url: parsed.data.logo_favicon_url || null,
    },
    profile.id
  );
}

export async function updateBrandCopy(formData: FormData): Promise<BrandActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const raw = formData.get("copy_overrides");
  const parsed = copySchema.safeParse({ copy_overrides: raw });
  if (!parsed.success) return { ok: false, message: "Invalid input" };

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(parsed.data.copy_overrides);
  } catch {
    return { ok: false, message: "copy_overrides must be valid JSON object" };
  }
  if (!parsedJson || typeof parsedJson !== "object" || Array.isArray(parsedJson)) {
    return { ok: false, message: "copy_overrides must be a JSON object" };
  }
  // Coerce all values to string
  const cleaned: Record<string, string> = {};
  for (const [k, v] of Object.entries(parsedJson as Record<string, unknown>)) {
    cleaned[k] = String(v);
  }

  return updateBrandRow({ copy_overrides: cleaned }, profile.id);
}
