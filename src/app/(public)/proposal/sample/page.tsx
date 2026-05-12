"use client";

import { useActionState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { submitLeadMagnet, type SubmitState } from "@/lib/actions/submit-secondary-forms";
import { ArrowRight, Check } from "@/components/icons/Icons";

const initial: SubmitState = { status: "idle" };

const VALUE_ITEMS = [
  "Real sample (bukan template)",
  "Detailed cost breakdown line-item",
  "Sample itinerary 2D1N untuk 200 pax",
  "Contract clauses + terms checklist",
];

export default function SampleProposalPage() {
  const [state, action, isPending] = useActionState(submitLeadMagnet, initial);
  const err = (key: string) => state.fieldErrors?.[key]?.[0];

  return (
    <main>
      <PageHero
        eyebrow="Free download"
        title="Sample proposal untuk outing kantor 200 pax."
        description="Real proposal yang kami kirim ke klien tech unicorn tahun lalu (data sensitive sudah di-redact). 12 halaman PDF — detailed cost breakdown, sample itinerary 2D1N, contract clauses."
      />

      <section className="pb-24 -mt-8">
        <div className="container-1280">
          <div className="max-w-2xl mx-auto rounded-3xl bg-ink text-paper border border-ink-soft p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 100% 0%, rgba(107, 162, 57, 0.25) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(184, 146, 76, 0.15) 0%, transparent 50%)" }} />

            <div className="relative">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/15 border border-brand/30 px-3 py-1.5 text-xs font-medium text-brand backdrop-blur">
                Free Download
              </span>

              <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                {VALUE_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-paper/85">
                    <span className="mt-0.5 text-brand"><Check size={14} /></span>
                    {item}
                  </li>
                ))}
              </ul>

              <form action={action} className="mt-8 space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.16em] text-paper/55 block mb-2">Nama *</label>
                  <input name="full_name" required placeholder="Nama lengkap lo" className={`w-full rounded-full bg-paper/10 border px-5 h-12 text-paper placeholder:text-paper/40 focus:outline-none focus:border-brand focus:bg-paper/15 transition ${err("full_name") ? "border-error/60" : "border-paper/20"}`} />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.16em] text-paper/55 block mb-2">Email perusahaan *</label>
                  <input name="work_email" type="email" required placeholder="kamu@perusahaan.com" className={`w-full rounded-full bg-paper/10 border px-5 h-12 text-paper placeholder:text-paper/40 focus:outline-none focus:border-brand focus:bg-paper/15 transition ${err("work_email") ? "border-error/60" : "border-paper/20"}`} />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.16em] text-paper/55 block mb-2">Perusahaan *</label>
                  <input name="company_name" required placeholder="PT / CV / perusahaan" className={`w-full rounded-full bg-paper/10 border px-5 h-12 text-paper placeholder:text-paper/40 focus:outline-none focus:border-brand focus:bg-paper/15 transition ${err("company_name") ? "border-error/60" : "border-paper/20"}`} />
                </div>

                {state.status === "error" && state.message && (
                  <div className="rounded-2xl border border-error/40 bg-error/10 p-4 text-sm text-error">{state.message}</div>
                )}

                <button type="submit" disabled={isPending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60">
                  {isPending ? "Sending…" : "Email Me the Sample"}<ArrowRight size={14} />
                </button>

                <p className="mt-3 text-xs text-paper/50 text-center">
                  🔒 800+ HR sudah download. No spam — kami kirim sekali + 1 follow-up 3 hari kemudian.
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-paper/10 text-center text-xs text-paper/60">
                Atau langsung <Link href="/proposal/request" className="text-paper hover:text-brand underline-offset-2 hover:underline">request custom proposal →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
