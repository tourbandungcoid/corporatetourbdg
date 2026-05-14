"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";
import type { BrandActionResult } from "./brand-actions";

function canEdit(role: string): boolean {
  return ["super_admin", "marketing_admin"].includes(role);
}

async function mergeKeys(keys: string[], fd: FormData): Promise<BrandActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const sb = createAdminClient();
  const { data } = await sb
    .from("brand_settings")
    .select("copy_overrides")
    .eq("id", 1)
    .maybeSingle();

  const existing = (data?.copy_overrides as Record<string, string> | null) ?? {};
  const merged = { ...existing };
  for (const key of keys) {
    const val = fd.get(key);
    if (typeof val === "string") merged[key] = val;
  }

  const { error } = await sb
    .from("brand_settings")
    .upsert({ id: 1, copy_overrides: merged, updated_by: profile.id }, { onConflict: "id" });

  if (error) return { ok: false, message: error.message };

  revalidatePath("/", "layout");
  revalidatePath("/admin/settings/homepage");
  return { ok: true, message: "Tersimpan" };
}

export async function updateHeroCopy(fd: FormData) {
  return mergeKeys([
    "home.hero.eyebrow", "home.hero.line1", "home.hero.line2", "home.hero.line3",
    "home.hero.sub", "home.hero.cta_primary", "home.hero.cta_secondary",
  ], fd);
}

export async function updateServicesCopy(fd: FormData) {
  return mergeKeys(["home.services.eyebrow", "home.services.headline", "home.services.sub"], fd);
}

export async function updateWhyCopy(fd: FormData) {
  return mergeKeys([
    "home.why.eyebrow", "home.why.headline", "home.why.sub",
    "home.why.p1.title", "home.why.p1.body", "home.why.p1.proof",
    "home.why.p2.title", "home.why.p2.body", "home.why.p2.proof",
    "home.why.p3.title", "home.why.p3.body", "home.why.p3.proof",
    "home.why.p4.title", "home.why.p4.body", "home.why.p4.proof",
  ], fd);
}

export async function updateTrustCopy(fd: FormData) {
  return mergeKeys(["home.trust.eyebrow", "home.trust.sub"], fd);
}

export async function updateLeadCopy(fd: FormData) {
  return mergeKeys([
    "home.lead.badge", "home.lead.headline1", "home.lead.headline2",
    "home.lead.sub", "home.lead.item1", "home.lead.item2",
    "home.lead.item3", "home.lead.item4", "home.lead.cta", "home.lead.social_proof",
  ], fd);
}

export async function updateCtaCopy(fd: FormData) {
  return mergeKeys([
    "home.cta.eyebrow", "home.cta.line1", "home.cta.line2", "home.cta.line3",
    "home.cta.sub", "home.cta.primary", "home.cta.whatsapp",
  ], fd);
}
