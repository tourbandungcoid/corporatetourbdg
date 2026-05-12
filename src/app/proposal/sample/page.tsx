"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "@/components/Icon";

const PROPOSAL_INCLUDES = [
  "Strategic narrative & event objective framing",
  "Day-by-day itinerary terstruktur",
  "Transparent line-item budget breakdown",
  "Vendor & venue specification detail",
  "Risk plan & contingency protocol",
  "Post-event measurement framework",
];

export default function SampleProposalPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    router.push("/proposal/thank-you?source=sample");
  };

  return (
    <section className="pt-[120px] lg:pt-[160px] pb-32">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12 max-w-[1080px] mx-auto">
          <div className="lg:col-span-6">
            <p className="eyebrow-gold mb-5">Sample proposal</p>
            <h1 className="font-display text-[40px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              Lihat persis apa yang{" "}
              <span className="font-display-italic">akan Anda terima.</span>
            </h1>
            <p className="mt-6 text-[16px] text-[var(--color-slate)] max-w-[440px]">
              Sample proposal anonymized — cocok untuk internal review dengan
              procurement atau decision maker sebelum Anda submit RFP formal.
            </p>

            <div className="mt-10">
              <p className="eyebrow mb-4">Yang akan Anda dapat:</p>
              <ul className="space-y-3">
                {PROPOSAL_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-[var(--color-gold)] mt-1 flex-shrink-0"
                    />
                    <span className="text-[14px] text-[var(--color-ink)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Visual proposal preview */}
            <div className="relative mb-8">
              <div className="absolute inset-0 rotate-2 bg-[var(--color-cream)] rounded-sm"></div>
              <div className="relative bg-[var(--color-paper)] border border-[var(--color-border)] rounded-sm p-6 shadow-lg">
                <div className="text-[10px] uppercase tracking-wider text-[var(--color-gold)] mb-3">
                  Proposal Document · 28 halaman
                </div>
                <div className="font-display text-[20px] text-[var(--color-ink)] mb-4 leading-tight">
                  Corporate Outing Proposal:
                  <br />
                  [Sample Client Company]
                </div>
                <div className="space-y-2 text-[12px] text-[var(--color-slate)]">
                  <div className="flex justify-between border-b pb-2">
                    <span>1. Strategic Narrative</span>
                    <span>p.3</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>2. Day-by-day Itinerary</span>
                    <span>p.7</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>3. Venue & Logistics</span>
                    <span>p.14</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>4. Budget Breakdown</span>
                    <span>p.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5. Risk & Measurement</span>
                    <span>p.25</span>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="bg-[var(--color-ink)] text-[var(--color-bone)] rounded-sm p-7 lg:p-9"
            >
              <h2 className="font-display text-[22px] mb-5">
                Download sample proposal (PDF)
              </h2>
              <div className="space-y-4">
                <div>
                  <input
                    required
                    type="email"
                    placeholder="Email kantor Anda"
                    className="w-full h-12 bg-white/[0.06] border border-white/15 rounded-md px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--color-gold)]"
                  />
                </div>
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Nama perusahaan"
                    className="w-full h-12 bg-white/[0.06] border border-white/15 rounded-md px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--color-gold)]"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-full mt-5"
              >
                {submitting ? "Mengirim..." : "Download Sample (PDF)"}
                {!submitting && <ArrowRight size={14} className="arrow" />}
              </button>
              <p className="text-[12px] text-white/60 mt-4">
                🔒 PDF dikirim ke email. Tanpa spam, tanpa sales call yang tidak
                relevan.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
