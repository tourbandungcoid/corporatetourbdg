"use server";

import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { redirect } from "next/navigation";
import { notifyNewLead } from "@/lib/email/send";

// ---------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------
const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "live.com",
  "aol.com",
];

const schema = z.object({
  // Step 1: company
  company_name: z.string().min(2).max(100),
  industry: z.string().min(1),
  company_size: z.enum(["startup", "sme", "midsize", "enterprise"]),
  job_role: z.string().min(1),

  // Step 2: event
  event_types: z.array(z.string()).min(1),
  pax_estimated: z.coerce.number().int().min(5).max(5000),
  budget_tier: z.enum([
    "conservative",
    "standard",
    "premium",
    "all_out",
    "help_me",
  ]),
  duration_preference: z.string().min(1),
  location_preferences: z.array(z.string()).min(1),

  // Step 3: timeline + contact
  target_date_flexible_quarter: z.string().optional(),
  urgency: z.enum(["urgent", "standard", "planning_ahead", "researching"]),
  full_name: z.string().min(2).max(100),
  work_email: z.string().email(),
  whatsapp: z.string().min(8).max(20).optional().or(z.literal("")),
  additional_notes: z.string().max(2000).optional(),
});

type ValidatedInput = z.infer<typeof schema>;

// ---------------------------------------------------------------------
// Lead scoring per Phase 5 strategy
// ---------------------------------------------------------------------
function computeLeadScore(
  source: "request_proposal",
  input: ValidatedInput
): { score: number; breakdown: Record<string, number> } {
  const breakdown: Record<string, number> = { base: 70 };

  if (
    ["technology", "banking", "bumn", "enterprise"].includes(
      input.industry.toLowerCase()
    )
  ) {
    breakdown.industry = 10;
  }
  if (input.company_size === "midsize" || input.company_size === "enterprise") {
    breakdown.size = 10;
  }
  if (
    /(director|c-level|founder|ceo|cto|coo)/i.test(input.job_role)
  ) {
    breakdown.role = 10;
  }
  if (input.budget_tier === "premium" || input.budget_tier === "all_out") {
    breakdown.budget = 10;
  }
  if (input.urgency === "urgent") {
    breakdown.urgency = 15;
  }
  if (input.target_date_flexible_quarter) {
    breakdown.date_specified = 5;
  }
  if (input.additional_notes && input.additional_notes.length > 20) {
    breakdown.notes = 5;
  }

  const emailDomain = input.work_email.split("@")[1]?.toLowerCase() ?? "";
  if (!PERSONAL_EMAIL_DOMAINS.includes(emailDomain)) {
    breakdown.corp_email = 5;
  }

  if (input.whatsapp && input.whatsapp.length > 0) {
    breakdown.whatsapp = 5;
  }

  if (input.event_types.length > 3) {
    breakdown.multiple_types = -5;
  }
  if (input.budget_tier === "help_me") {
    breakdown.budget_unsure = -10;
  }

  const score = Object.values(breakdown).reduce((a, b) => a + b, 0);
  return { score: Math.max(0, Math.min(100, score)), breakdown };
}

// ---------------------------------------------------------------------
// Result types
// ---------------------------------------------------------------------
export type LeadSubmitState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: Record<string, string[]>;
  refCode?: string;
};

// ---------------------------------------------------------------------
// Main action
// ---------------------------------------------------------------------
export async function submitLeadRequest(
  _prev: LeadSubmitState,
  formData: FormData
): Promise<LeadSubmitState> {
  // Collect array fields from FormData
  const event_types = formData.getAll("event_types").map(String);
  const location_preferences = formData
    .getAll("location_preferences")
    .map(String);

  const raw = {
    company_name: formData.get("company_name"),
    industry: formData.get("industry"),
    company_size: formData.get("company_size"),
    job_role: formData.get("job_role"),
    event_types,
    pax_estimated: formData.get("pax_estimated"),
    budget_tier: formData.get("budget_tier"),
    duration_preference: formData.get("duration_preference"),
    location_preferences,
    target_date_flexible_quarter:
      formData.get("target_date_flexible_quarter") || undefined,
    urgency: formData.get("urgency"),
    full_name: formData.get("full_name"),
    work_email: formData.get("work_email"),
    whatsapp: formData.get("whatsapp") || "",
    additional_notes: formData.get("additional_notes") || "",
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Periksa kembali field yang ditandai.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const input = parsed.data;
  const { score, breakdown } = computeLeadScore("request_proposal", input);

  const supabase = createAdminClient();

  // 1. Create lead
  const { data: lead, error: leadErr } = await supabase
    .from("leads")
    .insert({
      source: "request_proposal",
      source_url: "/proposal/request",
      full_name: input.full_name,
      work_email: input.work_email,
      whatsapp: input.whatsapp || null,
      whatsapp_preferred: !!input.whatsapp,
      company_name: input.company_name,
      industry: input.industry,
      company_size: input.company_size,
      job_role: input.job_role,
      lead_score: score,
      lead_score_breakdown: breakdown,
    })
    .select("id, ref_code")
    .single();

  if (leadErr || !lead) {
    console.error("Lead insert failed", leadErr);
    return {
      status: "error",
      message:
        "Maaf, terjadi error saat submit. Coba lagi atau WhatsApp kami langsung.",
    };
  }

  // 2. Create qualification (1:1)
  const { error: qualErr } = await supabase
    .from("lead_qualifications")
    .insert({
      lead_id: lead.id,
      event_types: input.event_types,
      pax_estimated: input.pax_estimated,
      budget_tier: input.budget_tier,
      duration_preference: input.duration_preference,
      location_preferences: input.location_preferences,
      target_date_flexible_quarter:
        input.target_date_flexible_quarter || null,
      urgency: input.urgency,
      additional_notes: input.additional_notes || null,
    });

  if (qualErr) {
    console.error("Qualification insert failed", qualErr);
    // continue — lead is captured, qualification can be reconstructed
  }

  // 3. Log creation activity
  await supabase.from("lead_activities").insert({
    lead_id: lead.id,
    activity_type: "created",
    actor_type: "public_form",
    details: {
      source: "request_proposal",
      score_breakdown: breakdown,
      computed_score: score,
    },
  });

  // 4. Fire-and-forget email notifications (await to ensure send completes
  //    before Vercel function shutdown, but don't fail submission on email errors)
  const priority =
    score >= 90 ? "hot" : score >= 70 ? "warm" : score >= 50 ? "medium" : score >= 30 ? "cool" : "cold";
  await notifyNewLead({
    refCode: lead.ref_code,
    fullName: input.full_name,
    workEmail: input.work_email,
    whatsapp: input.whatsapp || null,
    companyName: input.company_name,
    source: "request_proposal",
    score,
    priority,
  });

  // 5. Redirect to thank-you with ref code
  redirect(`/proposal/thank-you/${lead.ref_code}`);
}
