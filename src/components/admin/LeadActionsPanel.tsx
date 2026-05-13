"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  updateLeadStatus,
  addLeadNote,
  assignLead,
  sendProposalReady,
  type AdminUserOption,
} from "@/lib/actions/lead-actions";
import { ArrowRight } from "@/components/icons/Icons";

const STATUS_OPTIONS = [
  { value: "submitted", label: "Submitted" },
  { value: "under_review", label: "Under Review" },
  { value: "drafting", label: "Drafting" },
  { value: "internal_qa", label: "Internal QA" },
  { value: "sent", label: "Proposal Sent" },
  { value: "feedback_requested", label: "Feedback Requested" },
  { value: "revising", label: "Revising" },
  { value: "approved", label: "Approved" },
  { value: "won", label: "Won" },
  { value: "declined", label: "Declined" },
  { value: "lost", label: "Lost" },
  { value: "archived", label: "Archived" },
  { value: "no_response", label: "No Response" },
  { value: "cooled", label: "Cooled" },
] as const;

type Props = {
  leadId: string;
  currentStatus: string;
  currentAssignedTo: string | null;
  adminUsers: AdminUserOption[];
};

export function LeadActionsPanel({
  leadId,
  currentStatus,
  currentAssignedTo,
  adminUsers,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [note, setNote] = useState("");
  const router = useRouter();

  function showMessage(kind: "ok" | "error", text: string) {
    setMessage({ kind, text });
    setTimeout(() => setMessage(null), 4000);
  }

  function handleStatus(formData: FormData) {
    startTransition(async () => {
      const result = await updateLeadStatus(formData);
      showMessage(result.ok ? "ok" : "error", result.message ?? "");
      if (result.ok) router.refresh();
    });
  }

  function handleAssign(formData: FormData) {
    startTransition(async () => {
      const result = await assignLead(formData);
      showMessage(result.ok ? "ok" : "error", result.message ?? "");
      if (result.ok) router.refresh();
    });
  }

  function handleNote(formData: FormData) {
    startTransition(async () => {
      const result = await addLeadNote(formData);
      showMessage(result.ok ? "ok" : "error", result.message ?? "");
      if (result.ok) {
        setNote("");
        router.refresh();
      }
    });
  }

  function handleProposalReady(formData: FormData) {
    if (!confirm("Send 'Proposal ready' email ke lead ini sekarang?")) return;
    startTransition(async () => {
      const result = await sendProposalReady(formData);
      showMessage(result.ok ? "ok" : "error", result.message ?? "");
      if (result.ok) router.refresh();
    });
  }

  return (
    <div className="space-y-5">
      {message && (
        <div
          className={`rounded-xl border p-3 text-sm ${
            message.kind === "ok"
              ? "border-success/30 bg-success/5 text-success"
              : "border-error/30 bg-error/5 text-error"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Status update */}
      <form action={handleStatus}>
        <input type="hidden" name="leadId" value={leadId} />
        <label className="text-xs uppercase tracking-wider text-slate-mute block mb-2">
          Update status
        </label>
        <div className="flex gap-2">
          <select
            name="status"
            defaultValue={currentStatus}
            disabled={isPending}
            className="select flex-1"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center h-14 px-5 rounded-lg bg-ink text-paper text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
          >
            Update
          </button>
        </div>
      </form>

      {/* Assign */}
      <form action={handleAssign}>
        <input type="hidden" name="leadId" value={leadId} />
        <label className="text-xs uppercase tracking-wider text-slate-mute block mb-2">
          Assigned to
        </label>
        <div className="flex gap-2">
          <select
            name="assignTo"
            defaultValue={currentAssignedTo ?? ""}
            disabled={isPending}
            className="select flex-1"
          >
            <option value="">— Unassigned —</option>
            {adminUsers.map((u) => (
              <option key={u.id} value={u.id}>
                {u.fullName ?? u.email} ({u.role})
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center h-14 px-5 rounded-lg bg-ink text-paper text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
          >
            Assign
          </button>
        </div>
      </form>

      {/* Send proposal-ready email */}
      <form action={handleProposalReady}>
        <input type="hidden" name="leadId" value={leadId} />
        <label className="text-xs uppercase tracking-wider text-slate-mute block mb-2">
          Quick email
        </label>
        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-paper px-4 h-11 text-sm font-medium text-ink hover:bg-cream transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Send &quot;Proposal Ready&quot; email
          <ArrowRight size={12} />
        </button>
        <p className="mt-1.5 text-xs text-slate-mute">
          Notifies lead that proposal is ready + auto-bumps status to Sent.
        </p>
      </form>

      {/* Add note */}
      <form action={handleNote}>
        <input type="hidden" name="leadId" value={leadId} />
        <label className="text-xs uppercase tracking-wider text-slate-mute block mb-2">
          Add note
        </label>
        <textarea
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          required
          maxLength={2000}
          disabled={isPending}
          placeholder="Internal note (e.g. customer requested venue change, follow-up Tuesday)…"
          className="textarea w-full"
        />
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-xs text-slate-mute">{note.length}/2000</span>
          <button
            type="submit"
            disabled={isPending || note.trim().length === 0}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Add note
            <ArrowRight size={12} />
          </button>
        </div>
      </form>
    </div>
  );
}
