"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { editLeadContact } from "@/lib/actions/lead-actions";

type Props = {
  leadId: string;
  initial: {
    fullName: string;
    workEmail: string;
    whatsapp: string | null;
    companyName: string;
    industry: string | null;
    jobRole: string | null;
  };
};

export function EditContactDialog({ leadId, initial }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  function handle(formData: FormData) {
    startTransition(async () => {
      const result = await editLeadContact(formData);
      setMessage(result.message ?? "");
      if (result.ok) {
        setOpen(false);
        router.refresh();
      }
      setTimeout(() => setMessage(null), 4000);
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-4 h-10 text-sm text-ink hover:bg-cream transition"
      >
        Edit contact
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <form
            action={handle}
            className="w-full max-w-lg rounded-3xl bg-paper p-6 md:p-8 shadow-[0_24px_64px_rgba(15,31,26,0.2)] max-h-[90vh] overflow-y-auto"
          >
            <input type="hidden" name="leadId" value={leadId} />

            <div className="mb-5">
              <p className="eyebrow-brand">Edit</p>
              <h2 className="font-display text-2xl text-ink mt-2">
                Contact details
              </h2>
              <p className="text-sm text-slate mt-1">
                Fix typo atau update info. Perubahan ke-log di activity.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="label" htmlFor="fullName">Full name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  defaultValue={initial.fullName}
                  className="input"
                  disabled={isPending}
                />
              </div>
              <div>
                <label className="label" htmlFor="workEmail">Email *</label>
                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  required
                  defaultValue={initial.workEmail}
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
                  defaultValue={initial.whatsapp ?? ""}
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
                  defaultValue={initial.companyName}
                  className="input"
                  disabled={isPending}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label" htmlFor="industry">Industry</label>
                  <input
                    id="industry"
                    name="industry"
                    type="text"
                    defaultValue={initial.industry ?? ""}
                    placeholder="Tech, Banking, FMCG…"
                    className="input"
                    disabled={isPending}
                  />
                </div>
                <div>
                  <label className="label" htmlFor="jobRole">Job role</label>
                  <input
                    id="jobRole"
                    name="jobRole"
                    type="text"
                    defaultValue={initial.jobRole ?? ""}
                    placeholder="HR Manager, etc."
                    className="input"
                    disabled={isPending}
                  />
                </div>
              </div>
            </div>

            {message && (
              <div className="mt-4 rounded-xl border border-border bg-cream/60 p-3 text-sm text-ink">
                {message}
              </div>
            )}

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={isPending}
                className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-5 h-10 text-sm text-slate hover:bg-cream transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
              >
                {isPending ? "Saving…" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
