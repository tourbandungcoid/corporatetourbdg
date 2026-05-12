"use client";

import { useActionState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { submitConsultation, type SubmitState } from "@/lib/actions/submit-secondary-forms";
import { ArrowRight } from "@/components/icons/Icons";

const initial: SubmitState = { status: "idle" };

const EVENT_TYPES = [
  { value: "company_gathering", label: "Company Gathering" },
  { value: "team_building", label: "Team Building" },
  { value: "employee_gathering", label: "Employee Gathering" },
  { value: "corporate_retreat", label: "Corporate Retreat" },
  { value: "leadership_camp", label: "Leadership Camp" },
  { value: "executive_offsite", label: "Executive Offsite" },
  { value: "incentive_trip", label: "Incentive Trip" },
  { value: "annual_company_trip", label: "Annual Company Trip" },
  { value: "mice", label: "MICE Event" },
  { value: "glamping_corporate", label: "Glamping Corporate" },
  { value: "not_sure", label: "Belum decide — perlu konsultasi" },
];

const TIME_SLOTS = [
  "Pagi (09:00-11:00)",
  "Siang (13:00-15:00)",
  "Sore (15:00-17:00)",
  "Flexible — kasih opsi via WhatsApp",
];

export default function BookConsultationPage() {
  const [state, action, isPending] = useActionState(submitConsultation, initial);
  const err = (key: string) => state.fieldErrors?.[key]?.[0];

  return (
    <main>
      <PageHero
        eyebrow="Free briefing call"
        title="15 menit bareng senior planner."
        description="Bukan sales pitch — call ini buat align expectation soal scope, budget, dan timeline. Setelah call, kami kirim proposal yang bener-bener fit."
      />

      <section className="pb-24 -mt-8">
        <div className="container-1280">
          <div className="max-w-2xl mx-auto rounded-3xl border border-border bg-paper p-6 md:p-10 shadow-[0_24px_56px_rgba(15,31,26,0.06)]">
            <form action={action} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="label">Nama lengkap *</label>
                  <input name="full_name" required placeholder="Nama lo" className={`input ${err("full_name") ? "border-error" : ""}`} />
                </div>
                <div>
                  <label className="label">Work email *</label>
                  <input name="work_email" type="email" required placeholder="kamu@perusahaan.com" className={`input ${err("work_email") ? "border-error" : ""}`} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="label">WhatsApp *</label>
                  <input name="whatsapp" required placeholder="+62 812 3456 7890" className={`input ${err("whatsapp") ? "border-error" : ""}`} />
                  <p className="helper">Untuk schedule call</p>
                </div>
                <div>
                  <label className="label">Perusahaan *</label>
                  <input name="company_name" required placeholder="PT / CV / perusahaan lo" className={`input ${err("company_name") ? "border-error" : ""}`} />
                </div>
              </div>

              <div>
                <label className="label">Event type yang mau di-discuss *</label>
                <div className="grid sm:grid-cols-2 gap-2 mt-1">
                  {EVENT_TYPES.map((t) => (
                    <label key={t.value} className="relative cursor-pointer rounded-xl border border-border bg-paper px-4 py-2.5 hover:border-ink-soft transition has-[:checked]:border-ink has-[:checked]:bg-brand-light/40 flex items-center gap-2 text-sm">
                      <input type="checkbox" name="event_types" value={t.value} className="accent-brand" />
                      <span className="text-ink">{t.label}</span>
                    </label>
                  ))}
                </div>
                {err("event_types") && <p className="helper text-error">{err("event_types")}</p>}
              </div>

              <div>
                <label className="label">Preferensi waktu call *</label>
                <select name="preferred_time" required defaultValue="" className={`select ${err("preferred_time") ? "border-error" : ""}`}>
                  <option value="" disabled>Pilih...</option>
                  {TIME_SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <p className="helper">Kami WhatsApp untuk lock date specific</p>
              </div>

              <div>
                <label className="label">Brief notes (optional)</label>
                <textarea name="notes" rows={3} placeholder="Anything specific yang mau di-discuss saat call?" className="textarea" />
              </div>

              {state.status === "error" && state.message && (
                <div className="rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">{state.message}</div>
              )}

              <div className="pt-4 border-t border-divider">
                <button type="submit" disabled={isPending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60">
                  {isPending ? "Booking…" : "Book Free Consultation"}<ArrowRight size={14} />
                </button>
                <p className="mt-3 text-xs text-slate text-center">
                  Mau langsung proposal? <Link href="/proposal/request" className="link-underline text-ink">Request proposal →</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
