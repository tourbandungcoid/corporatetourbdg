import type { ReactNode } from "react";

type Priority = "hot" | "warm" | "medium" | "cool" | "cold" | null;
type Status = string;

const PRIORITY_STYLES: Record<NonNullable<Priority>, string> = {
  hot: "bg-error/10 text-error border-error/30",
  warm: "bg-warm/15 text-warm border-warm/30",
  medium: "bg-brand-light text-brand-deep border-brand/30",
  cool: "bg-sage/15 text-sage border-sage/30",
  cold: "bg-divider text-slate border-border",
};

const PRIORITY_EMOJI: Record<NonNullable<Priority>, string> = {
  hot: "🔥",
  warm: "🟠",
  medium: "🟡",
  cool: "🟢",
  cold: "⚪",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  if (!priority) return <Badge className="bg-divider text-slate border-border">—</Badge>;
  return (
    <Badge className={PRIORITY_STYLES[priority]}>
      {PRIORITY_EMOJI[priority]} {priority.toUpperCase()}
    </Badge>
  );
}

const STATUS_LABEL: Record<string, string> = {
  submitted: "Submitted",
  under_review: "Under Review",
  drafting: "Drafting",
  internal_qa: "Internal QA",
  sent: "Proposal Sent",
  feedback_requested: "Feedback Requested",
  revising: "Revising",
  approved: "Approved",
  declined: "Declined",
  archived: "Archived",
  won: "Won",
  lost: "Lost",
  no_response: "No Response",
  cooled: "Cooled",
};

const STATUS_STYLES: Record<string, string> = {
  submitted: "bg-brand-light text-brand-deep border-brand/30",
  under_review: "bg-warm/15 text-warm border-warm/30",
  drafting: "bg-warm/15 text-warm border-warm/30",
  internal_qa: "bg-warm/15 text-warm border-warm/30",
  sent: "bg-sage/15 text-sage border-sage/30",
  feedback_requested: "bg-warm/15 text-warm border-warm/30",
  revising: "bg-warm/15 text-warm border-warm/30",
  approved: "bg-success/15 text-success border-success/30",
  won: "bg-success/20 text-success border-success/40",
  declined: "bg-error/10 text-error border-error/30",
  lost: "bg-error/10 text-error border-error/30",
  archived: "bg-divider text-slate-mute border-border",
  no_response: "bg-divider text-slate-mute border-border",
  cooled: "bg-divider text-slate-mute border-border",
};

export function StatusBadge({ status }: { status: Status }) {
  const label = STATUS_LABEL[status] ?? status;
  const className = STATUS_STYLES[status] ?? "bg-divider text-slate border-border";
  return <Badge className={className}>{label}</Badge>;
}

function Badge({ children, className }: { children: ReactNode; className: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
