"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";
import { sendProposalReadyEmail } from "@/lib/email/send";

export type ActionResult = {
  ok: boolean;
  message?: string;
};

const STATUS_VALUES = [
  "submitted",
  "under_review",
  "drafting",
  "internal_qa",
  "sent",
  "feedback_requested",
  "revising",
  "approved",
  "declined",
  "archived",
  "won",
  "lost",
  "no_response",
  "cooled",
] as const;

// ---------------------------------------------------------------------
// Update lead status
// ---------------------------------------------------------------------
const updateStatusSchema = z.object({
  leadId: z.string().uuid(),
  status: z.enum(STATUS_VALUES),
});

export async function updateLeadStatus(formData: FormData): Promise<ActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };

  const parsed = updateStatusSchema.safeParse({
    leadId: formData.get("leadId"),
    status: formData.get("status"),
  });
  if (!parsed.success) return { ok: false, message: "Invalid input" };

  const sb = createAdminClient();

  // Get old status for activity log
  const { data: oldLead } = await sb
    .from("leads")
    .select("status")
    .eq("id", parsed.data.leadId)
    .single();

  const { error } = await sb
    .from("leads")
    .update({ status: parsed.data.status })
    .eq("id", parsed.data.leadId);

  if (error) return { ok: false, message: error.message };

  await sb.from("lead_activities").insert({
    lead_id: parsed.data.leadId,
    activity_type: "status_changed",
    actor_id: profile.id,
    actor_type: "user",
    details: { from: oldLead?.status, to: parsed.data.status },
  });

  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
  revalidatePath("/admin/leads");
  revalidatePath("/admin");
  return { ok: true, message: "Status updated" };
}

// ---------------------------------------------------------------------
// Add note (writes to lead_activities)
// ---------------------------------------------------------------------
const addNoteSchema = z.object({
  leadId: z.string().uuid(),
  note: z.string().min(1).max(2000),
});

export async function addLeadNote(formData: FormData): Promise<ActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };

  const parsed = addNoteSchema.safeParse({
    leadId: formData.get("leadId"),
    note: formData.get("note"),
  });
  if (!parsed.success) return { ok: false, message: "Note required (max 2000 chars)" };

  const sb = createAdminClient();

  const { error } = await sb.from("lead_activities").insert({
    lead_id: parsed.data.leadId,
    activity_type: "note_added",
    actor_id: profile.id,
    actor_type: "user",
    details: {
      note: parsed.data.note,
      by_name: profile.full_name ?? profile.email,
    },
  });

  if (error) return { ok: false, message: error.message };

  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
  return { ok: true, message: "Note added" };
}

// ---------------------------------------------------------------------
// Assign lead to user
// ---------------------------------------------------------------------
const assignSchema = z.object({
  leadId: z.string().uuid(),
  assignTo: z.string().uuid().or(z.literal("")),
});

export async function assignLead(formData: FormData): Promise<ActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };

  const parsed = assignSchema.safeParse({
    leadId: formData.get("leadId"),
    assignTo: formData.get("assignTo"),
  });
  if (!parsed.success) return { ok: false, message: "Invalid input" };

  const sb = createAdminClient();
  const newAssignee = parsed.data.assignTo || null;

  const { data: oldLead } = await sb
    .from("leads")
    .select("assigned_to")
    .eq("id", parsed.data.leadId)
    .single();

  const { error } = await sb
    .from("leads")
    .update({
      assigned_to: newAssignee,
      assigned_at: newAssignee ? new Date().toISOString() : null,
    })
    .eq("id", parsed.data.leadId);

  if (error) return { ok: false, message: error.message };

  await sb.from("lead_activities").insert({
    lead_id: parsed.data.leadId,
    activity_type: "assigned",
    actor_id: profile.id,
    actor_type: "user",
    details: { from: oldLead?.assigned_to, to: newAssignee },
  });

  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
  revalidatePath("/admin/leads");
  return { ok: true, message: newAssignee ? "Assigned" : "Unassigned" };
}

// ---------------------------------------------------------------------
// Manually create a lead from the admin UI (phone call, walk-in, etc.)
// ---------------------------------------------------------------------
const manualLeadSchema = z.object({
  fullName: z.string().min(2).max(120),
  workEmail: z.string().email(),
  whatsapp: z.string().max(20).optional().or(z.literal("")),
  companyName: z.string().min(1).max(200),
  source: z.enum([
    "manual",
    "whatsapp_inbound",
    "phone_inbound",
    "referral",
    "event_in_person",
  ]),
  initialNote: z.string().max(2000).optional().or(z.literal("")),
});

export async function createManualLead(formData: FormData): Promise<ActionResult & { leadId?: string }> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!["super_admin", "sales_admin"].includes(profile.role)) {
    return { ok: false, message: "Only sales_admin / super_admin can create leads" };
  }

  const parsed = manualLeadSchema.safeParse({
    fullName: formData.get("fullName"),
    workEmail: (formData.get("workEmail") as string)?.toLowerCase().trim(),
    whatsapp: formData.get("whatsapp") ?? "",
    companyName: formData.get("companyName"),
    source: formData.get("source") ?? "manual",
    initialNote: formData.get("initialNote") ?? "",
  });
  if (!parsed.success) {
    return { ok: false, message: "Invalid input" };
  }

  const sb = createAdminClient();

  const { data: lead, error } = await sb
    .from("leads")
    .insert({
      full_name: parsed.data.fullName,
      work_email: parsed.data.workEmail,
      whatsapp: parsed.data.whatsapp || null,
      company_name: parsed.data.companyName,
      source: parsed.data.source,
      status: "submitted",
      lead_score: 30, // Base score for manually-entered lead
      priority: "medium",
      assigned_to: profile.id,
      assigned_at: new Date().toISOString(),
    })
    .select("id, ref_code")
    .single();

  if (error || !lead) {
    return { ok: false, message: error?.message ?? "Failed to create lead" };
  }

  const activities: {
    lead_id: string;
    activity_type: string;
    actor_id: string;
    actor_type: string;
    details: Record<string, unknown>;
  }[] = [
    {
      lead_id: lead.id,
      activity_type: "lead_created",
      actor_id: profile.id,
      actor_type: "user",
      details: { source: parsed.data.source, manual: true },
    },
    {
      lead_id: lead.id,
      activity_type: "assigned",
      actor_id: profile.id,
      actor_type: "user",
      details: { to: profile.id, auto: true },
    },
  ];

  if (parsed.data.initialNote && parsed.data.initialNote.trim().length > 0) {
    activities.push({
      lead_id: lead.id,
      activity_type: "note_added",
      actor_id: profile.id,
      actor_type: "user",
      details: {
        note: parsed.data.initialNote.trim(),
        by_name: profile.full_name ?? profile.email,
      },
    });
  }

  await sb.from("lead_activities").insert(activities);

  revalidatePath("/admin/leads");
  revalidatePath("/admin");

  return {
    ok: true,
    message: `Lead created: ${lead.ref_code}`,
    leadId: lead.id,
  };
}

// ---------------------------------------------------------------------
// Bulk update status / assignment for many leads
// ---------------------------------------------------------------------
const BULK_STATUS_VALUES = STATUS_VALUES;
const bulkSchema = z.object({
  leadIds: z.array(z.string().uuid()).min(1).max(200),
  status: z.enum(BULK_STATUS_VALUES).optional(),
  assignTo: z.string().uuid().or(z.literal("")).optional(),
});

export async function bulkUpdateLeads(input: {
  leadIds: string[];
  status?: string;
  assignTo?: string;
}): Promise<ActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };

  const parsed = bulkSchema.safeParse(input);
  if (!parsed.success) return { ok: false, message: "Invalid input" };

  if (!parsed.data.status && parsed.data.assignTo === undefined) {
    return { ok: false, message: "Nothing to update" };
  }

  const sb = createAdminClient();
  const patch: Record<string, unknown> = {};
  if (parsed.data.status) patch.status = parsed.data.status;
  if (parsed.data.assignTo !== undefined) {
    patch.assigned_to = parsed.data.assignTo || null;
    patch.assigned_at = parsed.data.assignTo ? new Date().toISOString() : null;
  }

  const { error } = await sb.from("leads").update(patch).in("id", parsed.data.leadIds);
  if (error) return { ok: false, message: error.message };

  // Bulk activity log (one row per lead)
  const activities = parsed.data.leadIds.flatMap((id) => {
    const rows: Record<string, unknown>[] = [];
    if (parsed.data.status) {
      rows.push({
        lead_id: id,
        activity_type: "status_changed",
        actor_id: profile.id,
        actor_type: "user",
        details: { to: parsed.data.status, bulk: true },
      });
    }
    if (parsed.data.assignTo !== undefined) {
      rows.push({
        lead_id: id,
        activity_type: "assigned",
        actor_id: profile.id,
        actor_type: "user",
        details: { to: parsed.data.assignTo || null, bulk: true },
      });
    }
    return rows;
  });

  if (activities.length > 0) {
    await sb.from("lead_activities").insert(activities);
  }

  revalidatePath("/admin/leads");
  revalidatePath("/admin");

  return {
    ok: true,
    message: `Updated ${parsed.data.leadIds.length} lead${parsed.data.leadIds.length > 1 ? "s" : ""}`,
  };
}

// ---------------------------------------------------------------------
// Send "Proposal ready" email to the lead
// ---------------------------------------------------------------------
const proposalReadySchema = z.object({
  leadId: z.string().uuid(),
});

export async function sendProposalReady(formData: FormData): Promise<ActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };

  const parsed = proposalReadySchema.safeParse({
    leadId: formData.get("leadId"),
  });
  if (!parsed.success) return { ok: false, message: "Invalid input" };

  const sb = createAdminClient();

  const { data: lead, error: leadErr } = await sb
    .from("leads")
    .select("ref_code, full_name, work_email, status")
    .eq("id", parsed.data.leadId)
    .single();

  if (leadErr || !lead) return { ok: false, message: "Lead not found" };

  const senderName = profile.full_name ?? profile.email;
  const result = await sendProposalReadyEmail({
    to: lead.work_email,
    fullName: lead.full_name,
    refCode: lead.ref_code,
    senderName,
  });

  if (!result.ok && !result.skipped) {
    return { ok: false, message: result.reason ?? "Email send failed" };
  }

  // Log activity
  await sb.from("lead_activities").insert({
    lead_id: parsed.data.leadId,
    activity_type: "email_sent",
    actor_id: profile.id,
    actor_type: "user",
    details: {
      kind: "proposal_ready",
      to: lead.work_email,
      sender: senderName,
      skipped: result.skipped ?? false,
    },
  });

  // Auto-bump status to "sent" if currently in earlier stage
  if (["drafting", "internal_qa", "under_review", "submitted"].includes(lead.status)) {
    await sb.from("leads").update({ status: "sent" }).eq("id", parsed.data.leadId);
    await sb.from("lead_activities").insert({
      lead_id: parsed.data.leadId,
      activity_type: "status_changed",
      actor_id: profile.id,
      actor_type: "user",
      details: { from: lead.status, to: "sent", auto: true },
    });
  }

  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
  revalidatePath("/admin/leads");
  revalidatePath("/admin");

  return {
    ok: true,
    message: result.skipped
      ? "Email logged (RESEND_API_KEY not configured — no email actually sent)"
      : "Proposal-ready email sent",
  };
}

// ---------------------------------------------------------------------
// Set / clear follow-up reminder
// ---------------------------------------------------------------------
const followUpSchema = z.object({
  leadId: z.string().uuid(),
  followUpAt: z.string().optional(),
});

export async function setLeadFollowUp(formData: FormData): Promise<ActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };

  const parsed = followUpSchema.safeParse({
    leadId: formData.get("leadId"),
    followUpAt: formData.get("followUpAt") ?? undefined,
  });
  if (!parsed.success) return { ok: false, message: "Invalid input" };

  const value = parsed.data.followUpAt ? parsed.data.followUpAt : null;
  let iso: string | null = null;
  if (value) {
    const d = new Date(value);
    if (isNaN(d.getTime())) return { ok: false, message: "Invalid date" };
    iso = d.toISOString();
  }

  const sb = createAdminClient();
  const { error } = await sb
    .from("leads")
    .update({ follow_up_at: iso })
    .eq("id", parsed.data.leadId);
  if (error) return { ok: false, message: error.message };

  await sb.from("lead_activities").insert({
    lead_id: parsed.data.leadId,
    activity_type: "note_added",
    actor_id: profile.id,
    actor_type: "user",
    details: {
      kind: "follow_up",
      follow_up_at: iso,
      note: iso ? `Follow-up scheduled for ${new Date(iso).toLocaleString("id-ID")}` : "Follow-up cleared",
    },
  });

  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
  revalidatePath("/admin/leads");
  revalidatePath("/admin");
  return { ok: true, message: iso ? "Follow-up scheduled" : "Follow-up cleared" };
}

// ---------------------------------------------------------------------
// Get all admin users (for assign dropdown)
// ---------------------------------------------------------------------
export type AdminUserOption = {
  id: string;
  fullName: string | null;
  email: string;
  role: string;
};

export async function getAdminUsers(): Promise<AdminUserOption[]> {
  const sb = createAdminClient();
  const { data } = await sb
    .from("profiles")
    .select("id, full_name, email, role")
    .in("role", ["super_admin", "sales_admin"])
    .eq("is_active", true)
    .order("full_name", { ascending: true });

  return (data ?? []).map((u) => ({
    id: u.id,
    fullName: u.full_name,
    email: u.email,
    role: u.role,
  }));
}
