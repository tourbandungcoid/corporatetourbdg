"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { LeadStatus } from "@/types/database";

const STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: "new", label: "Baru" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "proposal_sent", label: "Proposal Sent" },
  { value: "negotiating", label: "Negotiating" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
];

export function LeadStatusUpdater({
  leadId,
  currentStatus,
}: {
  leadId: string;
  currentStatus: LeadStatus;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<LeadStatus>(currentStatus);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  const update = async (newStatus: LeadStatus) => {
    setSaving(true);
    setError(null);
    const supabase = createClient();

    const { error: updateError } = await supabase
      .from("leads")
      .update({
        status: newStatus,
        ...(newStatus === "qualified" && { qualified_at: new Date().toISOString() }),
        ...((newStatus === "won" || newStatus === "lost") && {
          closed_at: new Date().toISOString(),
        }),
      })
      .eq("id", leadId);

    if (updateError) {
      setError(updateError.message);
      setSaving(false);
      return;
    }

    // Log activity
    await supabase.from("lead_activities").insert({
      lead_id: leadId,
      type: "status_change",
      subject: `Status diubah ke ${STATUS_OPTIONS.find((s) => s.value === newStatus)?.label}`,
      content: `From ${currentStatus} → ${newStatus}`,
    });

    setStatus(newStatus);
    setSaving(false);
    setSavedAt(Date.now());
    router.refresh();
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="eyebrow text-[var(--color-slate)]">Status</span>
      <div className="flex flex-wrap gap-1.5">
        {STATUS_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            disabled={saving || status === opt.value}
            onClick={() => update(opt.value)}
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium border transition-colors ${
              status === opt.value
                ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)] cursor-default"
                : "bg-[var(--color-paper)] text-[var(--color-slate)] border-[var(--color-border)] hover:border-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {saving && (
        <span className="text-[11px] text-[var(--color-slate)]">Saving...</span>
      )}
      {savedAt && !saving && (
        <span className="text-[11px] text-[var(--color-success)]">✓ Saved</span>
      )}
      {error && (
        <span className="text-[11px] text-[var(--color-error)]">⚠ {error}</span>
      )}
    </div>
  );
}
