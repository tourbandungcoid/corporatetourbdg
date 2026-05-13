"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createManualLead } from "@/lib/actions/lead-actions";

const SOURCE_OPTIONS = [
  { value: "manual", label: "Manual / direct" },
  { value: "whatsapp_inbound", label: "WhatsApp inbound" },
  { value: "phone_inbound", label: "Phone inbound" },
  { value: "referral", label: "Referral" },
  { value: "event_in_person", label: "Event / in-person" },
] as const;

export function QuickAddLead() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    kind: "ok" | "error";
    text: string;
  } | null>(null);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await createManualLead(formData);
      setMessage({
        kind: result.ok ? "ok" : "error",
        text: result.message ?? "",
      });
      if (result.ok && result.leadId) {
        setOpen(false);
        router.refresh();
        router.push(`/admin/leads/${result.leadId}`);
      } else {
        setTimeout(() => setMessage(null), 5000);
      }
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-4 h-10 text-sm font-medium hover:bg-brand-deep transition"
      >
        + Add lead
      </button>

      {message && (
        <div
          className={`mt-3 rounded-2xl border p-3 text-sm ${
            message.kind === "ok"
              ? "border-success/30 bg-success/5 text-success"
              : "border-error/30 bg-error/5 text-error"
          }`}
        >
          {message.text}
        </div>
      )}

      {open && (
        <form
          action={handleSubmit}
          className="mt-3 rounded-2xl border border-border bg-paper p-5 space-y-4"
        >
          <p className="font-display text-lg text-ink">Quick add lead</p>
          <p className="text-xs text-slate -mt-3">
            Sales call, walk-in, atau referral yang belum submit form. Lead
            auto-assigned ke lo.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="label" htmlFor="fullName">Full name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                minLength={2}
                placeholder="Nama lengkap"
                className="input"
                disabled={isPending}
              />
            </div>
            <div>
              <label className="label" htmlFor="workEmail">Work email *</label>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                required
                placeholder="contact@perusahaan.com"
                className="input"
                disabled={isPending}
              />
            </div>
            <div>
              <label className="label" htmlFor="whatsapp">WhatsApp</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="+62812…"
                className="input"
                disabled={isPending}
              />
            </div>
            <div>
              <label className="label" htmlFor="companyName">Company *</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                placeholder="Nama perusahaan"
                className="input"
                disabled={isPending}
              />
            </div>
            <div>
              <label className="label" htmlFor="source">Source</label>
              <select
                id="source"
                name="source"
                defaultValue="manual"
                className="select"
                disabled={isPending}
              >
                {SOURCE_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="label" htmlFor="initialNote">Initial note</label>
            <textarea
              id="initialNote"
              name="initialNote"
              rows={3}
              maxLength={2000}
              placeholder="Brief dari call, scope rough, atau urgency…"
              className="textarea w-full"
              disabled={isPending}
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
            >
              {isPending ? "Creating…" : "Create lead"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              disabled={isPending}
              className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-5 h-10 text-sm text-slate hover:bg-cream transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
}
