"use server";

/**
 * Lead Capture Server Actions
 *
 * Public forms (RFP, Quick Quote, Sample, Lead Magnet) call these to save
 * directly into the `leads` table. RLS policy allows anonymous INSERT.
 *
 * Lead scoring is computed by a Postgres trigger (see migration 05),
 * so we just send raw data and let the DB compute the score.
 */

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export type LeadSource =
  | "rfp_form"
  | "quick_quote"
  | "sample_request"
  | "lead_magnet"
  | "consultation"
  | "whatsapp"
  | "manual";

export type LeadPayload = {
  source: LeadSource;
  // Contact
  contact_name: string;
  contact_position?: string;
  email?: string;
  phone?: string;
  // Company
  company_name?: string;
  industry?: string;
  company_size?: string;
  // Inquiry detail
  event_type?: string;
  objective?: string;
  pax_count?: number;
  duration?: string;
  preferred_dates?: string;
  destination?: string;
  custom_needs?: string;
  budget_range?: string;
  budget_min_idr?: number;
  budget_max_idr?: number;
  decision_timeline?: string;
  // Raw form data (audit trail)
  raw_payload?: Record<string, unknown>;
};

export type SubmitLeadResult =
  | { ok: true; leadNumber: string; leadId: string }
  | { ok: false; error: string };

export async function submitLead(
  payload: LeadPayload
): Promise<SubmitLeadResult> {
  if (!payload.contact_name?.trim()) {
    return { ok: false, error: "Nama kontak wajib diisi." };
  }
  if (!payload.email && !payload.phone) {
    return { ok: false, error: "Email atau nomor WhatsApp wajib diisi." };
  }

  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("leads")
      .insert({
        source: payload.source,
        contact_name: payload.contact_name.trim(),
        contact_position: payload.contact_position?.trim() || null,
        email: payload.email?.trim().toLowerCase() || null,
        phone: payload.phone?.trim() || null,
        company_name: payload.company_name?.trim() || null,
        industry: payload.industry || null,
        company_size: payload.company_size || null,
        event_type: payload.event_type || null,
        objective: payload.objective?.trim() || null,
        pax_count: payload.pax_count || null,
        duration: payload.duration || null,
        preferred_dates: payload.preferred_dates?.trim() || null,
        destination: payload.destination || null,
        custom_needs: payload.custom_needs?.trim() || null,
        budget_range: payload.budget_range || null,
        budget_min_idr: payload.budget_min_idr || null,
        budget_max_idr: payload.budget_max_idr || null,
        decision_timeline: payload.decision_timeline || null,
        raw_payload: payload.raw_payload || null,
      })
      .select("id, lead_number")
      .single();

    if (error) {
      console.error("Lead submission error:", error);
      // During early launch / debugging, expose specific error to help user diagnose.
      // After stable, replace with generic message.
      const detail =
        error.code === "42P01"
          ? "Tabel leads belum dibuat. Jalankan migration 05."
          : error.code === "42501"
          ? "Permission denied. RLS policy belum mengizinkan insert."
          : error.message;
      return {
        ok: false,
        error: `Gagal menyimpan inquiry: ${detail}`,
      };
    }

    // Revalidate admin pages so dashboard counter + leads list refresh
    revalidatePath("/admin");
    revalidatePath("/admin/leads");

    return {
      ok: true,
      leadNumber: data.lead_number,
      leadId: data.id,
    };
  } catch (e) {
    console.error("Lead submission unexpected error:", e);
    return {
      ok: false,
      error: "Terjadi kesalahan tak terduga. Coba lagi.",
    };
  }
}
