"use server";

import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { redirect } from "next/navigation";
import { notifyNewLead } from "@/lib/email/send";

function priorityFromScore(score: number): "hot" | "warm" | "medium" | "cool" | "cold" {
  if (score >= 90) return "hot";
  if (score >= 70) return "warm";
  if (score >= 50) return "medium";
  if (score >= 30) return "cool";
  return "cold";
}

const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "live.com",
  "aol.com",
];

export type SubmitState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: Record<string, string[]>;
  refCode?: string;
};

// ---------------------------------------------------------------------
// Quick Quote — 4 field micro-form
// ---------------------------------------------------------------------
const quickQuoteSchema = z.object({
  event_type: z.string().min(1, "Pilih event type"),
  pax_estimated: z.coerce.number().int().min(5).max(5000),
  target_quarter: z.string().min(1),
  work_email: z.string().email(),
  full_name: z.string().min(2).max(100),
  company_name: z.string().min(2).max(100).optional().or(z.literal("")),
});

export async function submitQuickQuote(
  _prev: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const raw = {
    event_type: formData.get("event_type"),
    pax_estimated: formData.get("pax_estimated"),
    target_quarter: formData.get("target_quarter"),
    work_email: formData.get("work_email"),
    full_name: formData.get("full_name"),
    company_name: formData.get("company_name") || "",
  };
  const parsed = quickQuoteSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Periksa kembali isian.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }
  const input = parsed.data;
  const score = 30 + (PERSONAL_EMAIL_DOMAINS.includes((input.work_email.split("@")[1] ?? "").toLowerCase()) ? 0 : 5);

  const sb = createAdminClient();
  const { data: lead, error } = await sb
    .from("leads")
    .insert({
      source: "quick_quote",
      source_url: "/proposal/quick-quote",
      full_name: input.full_name,
      work_email: input.work_email,
      company_name: input.company_name || "Not specified",
      lead_score: score,
      lead_score_breakdown: { base: 30, corp_email: score - 30 },
    })
    .select("id, ref_code")
    .single();

  if (error || !lead) {
    return { status: "error", message: "Submit error. Try again or WhatsApp us." };
  }

  await sb.from("lead_qualifications").insert({
    lead_id: lead.id,
    event_types: [input.event_type],
    pax_estimated: input.pax_estimated,
    target_date_flexible_quarter: input.target_quarter,
  });

  await sb.from("lead_activities").insert({
    lead_id: lead.id,
    activity_type: "created",
    actor_type: "public_form",
    details: { source: "quick_quote" },
  });

  await notifyNewLead({
    refCode: lead.ref_code,
    leadId: lead.id,
    fullName: input.full_name,
    workEmail: input.work_email,
    companyName: input.company_name || "Not specified",
    source: "quick_quote",
    score,
    priority: priorityFromScore(score),
  });

  redirect(`/proposal/thank-you/${lead.ref_code}`);
}

// ---------------------------------------------------------------------
// Book Consultation — 6 field
// ---------------------------------------------------------------------
const consultationSchema = z.object({
  full_name: z.string().min(2).max(100),
  work_email: z.string().email(),
  whatsapp: z.string().min(8).max(20),
  company_name: z.string().min(2).max(100),
  event_types: z.array(z.string()).min(1),
  preferred_time: z.string().min(1),
  notes: z.string().max(1000).optional(),
});

export async function submitConsultation(
  _prev: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const raw = {
    full_name: formData.get("full_name"),
    work_email: formData.get("work_email"),
    whatsapp: formData.get("whatsapp"),
    company_name: formData.get("company_name"),
    event_types: formData.getAll("event_types").map(String),
    preferred_time: formData.get("preferred_time"),
    notes: formData.get("notes") || "",
  };

  const parsed = consultationSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Periksa kembali isian.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }
  const input = parsed.data;

  const score = 85; // High-intent
  const sb = createAdminClient();
  const { data: lead, error } = await sb
    .from("leads")
    .insert({
      source: "book_consultation",
      source_url: "/proposal/book-consultation",
      full_name: input.full_name,
      work_email: input.work_email,
      whatsapp: input.whatsapp,
      whatsapp_preferred: true,
      company_name: input.company_name,
      lead_score: score,
      lead_score_breakdown: { base: 85, note: "Book consultation = high intent" },
    })
    .select("id, ref_code")
    .single();

  if (error || !lead) {
    return { status: "error", message: "Submit error. Try again or WhatsApp us." };
  }

  await sb.from("lead_qualifications").insert({
    lead_id: lead.id,
    event_types: input.event_types,
    additional_notes: `Preferred consultation time: ${input.preferred_time}\n\n${input.notes || ""}`,
  });

  await sb.from("lead_activities").insert({
    lead_id: lead.id,
    activity_type: "created",
    actor_type: "public_form",
    details: { source: "book_consultation", preferred_time: input.preferred_time },
  });

  await notifyNewLead({
    refCode: lead.ref_code,
    leadId: lead.id,
    fullName: input.full_name,
    workEmail: input.work_email,
    whatsapp: input.whatsapp,
    companyName: input.company_name,
    source: "book_consultation",
    score,
    priority: priorityFromScore(score),
  });

  redirect(`/proposal/thank-you/${lead.ref_code}`);
}

// ---------------------------------------------------------------------
// Lead Magnet — Sample download
// ---------------------------------------------------------------------
const leadMagnetSchema = z.object({
  full_name: z.string().min(2).max(100),
  work_email: z.string().email(),
  company_name: z.string().min(2).max(100),
});

export async function submitLeadMagnet(
  _prev: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const raw = {
    full_name: formData.get("full_name"),
    work_email: formData.get("work_email"),
    company_name: formData.get("company_name"),
  };
  const parsed = leadMagnetSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Periksa kembali isian.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }
  const input = parsed.data;
  const score = 20;
  const sb = createAdminClient();
  const { data: lead, error } = await sb
    .from("leads")
    .insert({
      source: "lead_magnet",
      source_url: "/proposal/sample",
      full_name: input.full_name,
      work_email: input.work_email,
      company_name: input.company_name,
      lead_score: score,
      lead_score_breakdown: { base: 20 },
    })
    .select("id, ref_code")
    .single();

  if (error || !lead) {
    return { status: "error", message: "Submit error. Try again or WhatsApp us." };
  }

  await sb.from("lead_activities").insert({
    lead_id: lead.id,
    activity_type: "created",
    actor_type: "public_form",
    details: { source: "lead_magnet", lead_magnet: "sample-proposal-200pax" },
  });

  await notifyNewLead({
    refCode: lead.ref_code,
    leadId: lead.id,
    fullName: input.full_name,
    workEmail: input.work_email,
    companyName: input.company_name,
    source: "lead_magnet",
    score,
    priority: priorityFromScore(score),
  });

  redirect(`/proposal/thank-you/${lead.ref_code}?source=sample`);
}

// ---------------------------------------------------------------------
// Exit-intent capture — minimal (email only)
// ---------------------------------------------------------------------
// Fires when an exit-intent modal email is submitted. Inserts a low-
// score lead so sales can follow up, then returns success so the modal
// can render an inline "check your email" confirmation without a
// full page redirect (less disruptive than the other lead flows).
const exitIntentSchema = z.object({
  work_email: z.string().email(),
  source_url: z.string().max(200).optional(),
});

export type ExitIntentState = {
  status: "idle" | "error" | "success";
  message?: string;
};

export async function submitExitIntent(
  _prev: ExitIntentState,
  formData: FormData
): Promise<ExitIntentState> {
  const raw = {
    work_email: formData.get("work_email"),
    source_url: (formData.get("source_url") as string) || "/exit_intent",
  };
  const parsed = exitIntentSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Email belum valid — coba lagi ya.",
    };
  }
  const input = parsed.data;
  const score = 15;

  try {
    const sb = createAdminClient();
    const { data: lead, error } = await sb
      .from("leads")
      .insert({
        source: "lead_magnet",
        source_url: input.source_url,
        full_name: "Anonymous (Exit Intent)",
        work_email: input.work_email,
        company_name: "Unknown",
        lead_score: score,
        lead_score_breakdown: { base: score, channel: "exit_intent" },
      })
      .select("id, ref_code")
      .single();

    if (error || !lead) {
      console.error("[submitExitIntent] Lead insert failed:", error);
      return {
        status: "error",
        message: "Gagal nge-save email. Coba lagi atau langsung ke /proposal/sample.",
      };
    }

    // Fire-and-forget sales notification — no client confirmation (less spammy)
    notifyNewLead({
      refCode: lead.ref_code,
      leadId: lead.id,
      fullName: "Anonymous (Exit Intent)",
      workEmail: input.work_email,
      whatsapp: null,
      companyName: "Unknown",
      source: "lead_magnet",
      score,
      priority: priorityFromScore(score),
    }).catch((e) => console.error("[submitExitIntent] notifyNewLead:", e));

    return {
      status: "success",
      message:
        "Thanks! Sample proposal akan kami kirim ke email lo dalam 1×24 jam.",
    };
  } catch (e) {
    console.error("[submitExitIntent] unexpected:", e);
    return {
      status: "error",
      message: "Server error. Coba refresh halaman dulu.",
    };
  }
}
