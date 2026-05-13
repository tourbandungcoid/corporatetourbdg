"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PriorityBadge, StatusBadge } from "@/components/admin/LeadBadges";
import {
  bulkUpdateLeads,
  type AdminUserOption,
} from "@/lib/actions/lead-actions";

export type LeadRow = {
  id: string;
  ref_code: string;
  full_name: string;
  work_email: string;
  company_name: string;
  status: string;
  priority: string | null;
  lead_score: number;
  source: string;
  assigned_to: string | null;
  created_at: string;
};

const BULK_STATUSES = [
  "under_review",
  "drafting",
  "internal_qa",
  "sent",
  "feedback_requested",
  "revising",
  "approved",
  "won",
  "lost",
  "declined",
  "archived",
  "no_response",
  "cooled",
];

type Props = {
  leads: LeadRow[];
  userMap: Record<string, string>;
  adminUsers: AdminUserOption[];
};

export function LeadsTable({ leads, userMap, adminUsers }: Props) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [bulkStatus, setBulkStatus] = useState("");
  const [bulkAssign, setBulkAssign] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  const allSelected = useMemo(
    () => leads.length > 0 && leads.every((l) => selected.has(l.id)),
    [leads, selected]
  );
  const someSelected = selected.size > 0;

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(leads.map((l) => l.id)));
    }
  }

  function toggleOne(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function applyBulk() {
    if (selected.size === 0) return;
    const ids = Array.from(selected);
    if (!bulkStatus && bulkAssign === undefined) return;
    if (!confirm(`Apply changes to ${ids.length} lead${ids.length > 1 ? "s" : ""}?`)) return;

    startTransition(async () => {
      const result = await bulkUpdateLeads({
        leadIds: ids,
        status: bulkStatus || undefined,
        assignTo: bulkAssign,
      });
      setMessage({
        kind: result.ok ? "ok" : "error",
        text: result.message ?? "",
      });
      if (result.ok) {
        setSelected(new Set());
        setBulkStatus("");
        setBulkAssign(undefined);
        router.refresh();
      }
      setTimeout(() => setMessage(null), 5000);
    });
  }

  return (
    <>
      {/* Bulk toolbar — visible when items selected */}
      {someSelected && (
        <div className="mb-3 rounded-2xl border border-brand/30 bg-brand/5 p-4 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-ink">
            {selected.size} selected
          </span>
          <span className="text-slate-mute">·</span>
          <select
            value={bulkStatus}
            onChange={(e) => setBulkStatus(e.target.value)}
            className="select py-1.5 text-sm"
            disabled={isPending}
          >
            <option value="">Set status…</option>
            {BULK_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.replace(/_/g, " ")}
              </option>
            ))}
          </select>
          <select
            value={bulkAssign ?? ""}
            onChange={(e) =>
              setBulkAssign(e.target.value === "__noop" ? undefined : e.target.value)
            }
            className="select py-1.5 text-sm"
            disabled={isPending}
          >
            <option value="__noop">Assign… (no change)</option>
            <option value="">— Unassign —</option>
            {adminUsers.map((u) => (
              <option key={u.id} value={u.id}>
                {u.fullName ?? u.email}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={applyBulk}
            disabled={isPending || (!bulkStatus && bulkAssign === undefined)}
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-4 h-9 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? "Applying…" : "Apply"}
          </button>
          <button
            type="button"
            onClick={() => setSelected(new Set())}
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-4 h-9 text-sm text-slate hover:bg-cream transition"
          >
            Clear
          </button>
        </div>
      )}

      {message && (
        <div
          className={`mb-3 rounded-2xl border p-3 text-sm ${
            message.kind === "ok"
              ? "border-success/30 bg-success/5 text-success"
              : "border-error/30 bg-error/5 text-error"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="rounded-2xl border border-border bg-paper overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                <th className="px-4 py-3 font-medium w-10">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    className="accent-ink h-4 w-4 align-middle cursor-pointer"
                    aria-label="Select all visible leads"
                  />
                </th>
                <th className="px-4 py-3 font-medium">Ref</th>
                <th className="px-4 py-3 font-medium">Contact</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Assigned</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Priority</th>
                <th className="px-4 py-3 font-medium tabular text-right">Score</th>
                <th className="px-4 py-3 font-medium text-right">Created</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className={`border-b border-divider/60 transition ${
                    selected.has(lead.id) ? "bg-brand/5" : "hover:bg-cream/40"
                  }`}
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selected.has(lead.id)}
                      onChange={() => toggleOne(lead.id)}
                      className="accent-ink h-4 w-4 align-middle cursor-pointer"
                      aria-label={`Select ${lead.ref_code}`}
                    />
                  </td>
                  <td className="px-4 py-4 tabular text-xs">
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="font-medium text-ink hover:text-brand-deep"
                    >
                      {lead.ref_code}
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <Link href={`/admin/leads/${lead.id}`} className="block">
                      <p className="font-medium text-ink">{lead.full_name}</p>
                      <p className="text-xs text-slate">{lead.work_email}</p>
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-slate">{lead.company_name}</td>
                  <td className="px-4 py-4 text-xs text-slate">
                    {lead.assigned_to ? (
                      userMap[lead.assigned_to] ?? "—"
                    ) : (
                      <span className="text-slate-mute italic">unassigned</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-xs text-slate">{lead.source}</td>
                  <td className="px-4 py-4">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="px-4 py-4">
                    <PriorityBadge
                      priority={
                        (lead.priority as
                          | "hot"
                          | "warm"
                          | "medium"
                          | "cool"
                          | "cold"
                          | null) ?? null
                      }
                    />
                  </td>
                  <td className="px-4 py-4 tabular text-right font-medium">
                    {lead.lead_score}
                  </td>
                  <td className="px-4 py-4 text-xs text-slate text-right tabular">
                    {new Date(lead.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
