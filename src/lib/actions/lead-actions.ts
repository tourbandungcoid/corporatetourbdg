"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

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
