"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

export type AppSettingsActionResult = {
  ok: boolean;
  message?: string;
};

function canEdit(role: string): boolean {
  return ["super_admin", "marketing_admin"].includes(role);
}

const contactSchema = z.object({
  whatsapp: z.string().max(40),
  phone_display: z.string().max(40),
  email: z.string().email(),
  office_hours: z.string().max(120),
  address_street: z.string().max(200),
  address_city: z.string().max(80),
  address_region: z.string().max(80),
  address_postal: z.string().max(20),
  address_country: z.string().max(4),
  address_full: z.string().max(400),
  maps_url: z.string().url().or(z.literal("")),
});

const socialSchema = z.object({
  linkedin: z.string().url().or(z.literal("")),
  instagram: z.string().url().or(z.literal("")),
  youtube: z.string().url().or(z.literal("")),
  tiktok: z.string().url().or(z.literal("")),
  facebook: z.string().url().or(z.literal("")),
});

const analyticsSchema = z.object({
  ga4_id: z.string().max(40),
  meta_pixel_id: z.string().max(40),
  gtm_id: z.string().max(40),
  hotjar_id: z.string().max(40),
  clarity_id: z.string().max(40),
});

const seoSchema = z.object({
  default_title: z.string().min(5).max(200),
  default_description: z.string().min(20).max(400),
});

const reviewsSchema = z.object({
  google_rating: z.coerce.number().min(0).max(5),
  google_review_count: z.coerce.number().int().min(0),
  google_maps_url: z.string().url().or(z.literal("")),
});

const statsSchema = z.object({
  events_delivered: z.string().max(20),
  years_operating: z.string().max(40),
  repeat_booking_rate: z.string().max(20),
  avg_response_time: z.string().max(20),
  companies_trusted: z.string().max(20),
  largest_event_pax: z.string().max(20),
  venue_partners: z.string().max(20),
  industries_served: z.string().max(20),
});

const ALL_GROUPS = ["contact", "social", "analytics", "seo", "reviews", "stats"] as const;
type Group = (typeof ALL_GROUPS)[number];

function getSchema(group: Group) {
  switch (group) {
    case "contact":   return contactSchema;
    case "social":    return socialSchema;
    case "analytics": return analyticsSchema;
    case "seo":       return seoSchema;
    case "reviews":   return reviewsSchema;
    case "stats":     return statsSchema;
  }
}

export async function updateAppSettingsGroup(
  group: Group,
  formData: FormData
): Promise<AppSettingsActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role))
    return { ok: false, message: "Only super_admin / marketing_admin" };

  const schema = getSchema(group);
  if (!schema) return { ok: false, message: "Unknown group" };

  // Convert FormData to plain object
  const payload: Record<string, unknown> = {};
  for (const [k, v] of formData.entries()) {
    if (typeof v === "string") payload[k] = v;
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
    };
  }

  const sb = createAdminClient();
  const update: Record<string, unknown> = {
    [group]: parsed.data,
    updated_by: profile.id,
  };

  // Upsert with id=1 (singleton)
  const { error } = await sb
    .from("app_settings")
    .upsert({ id: 1, ...update }, { onConflict: "id" });

  if (error) return { ok: false, message: error.message };

  // Revalidate everything that consumes settings
  revalidatePath("/");
  revalidatePath("/contact");
  revalidatePath("/clients");
  revalidatePath("/admin/settings");

  return { ok: true, message: `${group} updated` };
}

export async function updateContact(formData: FormData) {
  return updateAppSettingsGroup("contact", formData);
}
export async function updateSocial(formData: FormData) {
  return updateAppSettingsGroup("social", formData);
}
export async function updateAnalytics(formData: FormData) {
  return updateAppSettingsGroup("analytics", formData);
}
export async function updateSeoDefaults(formData: FormData) {
  return updateAppSettingsGroup("seo", formData);
}
export async function updateReviewsSettings(formData: FormData) {
  return updateAppSettingsGroup("reviews", formData);
}
export async function updateStatsSettings(formData: FormData) {
  return updateAppSettingsGroup("stats", formData);
}
