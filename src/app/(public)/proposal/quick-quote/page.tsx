"use client";

import { useActionState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { submitQuickQuote, type SubmitState } from "@/lib/actions/submit-secondary-forms";
import { ArrowRight } from "@/components/icons/Icons";

const initial: SubmitState = { status: "idle" };

const EVENT_TYPES = [
  "Company Gathering",
  "Team Building",
  "Employee Gathering",
  "Corporate Retreat",
  "Leadership Camp",
  "Executive Offsite",
  "Incentive Trip",
  "Annual Company Trip",
  "MICE Event",
  "Glamping Corporate",
  "Belum decide",
];

const QUARTERS = [
  "Q1 2026",
  "Q2 2026",
  "Q3 2026",
  "Q4 2026",
  "Q1 2027",
  "Q2 2027",
  "Flexible — within 3-6 months",
];

export default function QuickQuotePage() {
  const [state, action, isPending] = useActionState(submitQuickQuote, initial);
  const err = (key: string) => state.fieldErrors?.[key]?.[0];

  return (
    <main>
      <PageHero
        eyebrow="Quick estimate"
        title="Ballpark estimate dalam 2 jam."
        description="4 pertanyaan singkat. Email kasar estimate sampai dalam 2 jam working hours. Kalau cocok, lo bisa upgrade ke full proposal kapan aja."
      />

      <section className="pb-24 -mt-8">
        <div className="container-1280">
          <div className="max-w-2xl mx-auto rounded-3xl border border-border bg-paper p-6 md:p-10 shadow-[0_24px_56px_rgba(15,31,26,0.06)]">
            <form action={action} className="space-y-5">
              <div>
                <label className="label">Event type *</label>
                <select name="event_type" required defaultValue="" className={`select ${err("event_type") ? "border-error" : ""}`}>
                  <option value="" disabled>Pilih satu...</option>
                  {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {err("event_type") && <p className="helper text-error">{err("event_type")}</p>}
              </div>

              <div>
                <label className="label">Estimasi pax *</label>
                <input name="pax_estimated" type="number" min="5" required placeholder="80" className={`input ${err("pax_estimated") ? "border-error" : ""}`} />
                <p className="helper">Range OK. Tepat sekalipun ga harus.</p>
              </div>

              <div>
                <label className="label">Target waktu event *</label>
                <select name="target_quarter" required defaultValue="" className={`select ${err("target_quarter") ? "border-error" : ""}`}>
                  <option value="" disabled>Pilih...</option>
                  {QUARTERS.map((q) => <option key={q} value={q}>{q}</option>)}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="label">Nama *</label>
                  <input name="full_name" required placeholder="Nama lengkap" className={`input ${err("full_name") ? "border-error" : ""}`} />
                </div>
                <div>
                  <label className="label">Work email *</label>
                  <input name="work_email" type="email" required placeholder="kamu@perusahaan.com" className={`input ${err("work_email") ? "border-error" : ""}`} />
                  <p className="helper">Email perusahaan ya — biar gampang track</p>
                </div>
              </div>

              <div>
                <label className="label">Perusahaan</label>
                <input name="company_name" placeholder="PT/CV (optional)" className="input" />
              </div>

              {state.status === "error" && state.message && (
                <div className="rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">{state.message}</div>
              )}

              <div className="pt-4 border-t border-divider">
                <button type="submit" disabled={isPending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60">
                  {isPending ? "Sending…" : "Dapat Estimate dalam 2 Jam"}<ArrowRight size={14} />
                </button>
                <p className="mt-3 text-xs text-slate text-center">
                  Mau full proposal langsung? <Link href="/proposal/request" className="link-underline text-ink">Request full proposal →</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
