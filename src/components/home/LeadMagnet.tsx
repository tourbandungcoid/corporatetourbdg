"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "../Icon";
import { submitLead } from "@/lib/actions/leads";

export function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const result = await submitLead({
      source: "lead_magnet",
      contact_name: "Budget Calculator Lead",
      email,
      company_name: company,
      raw_payload: { email, company, magnet: "budget_calculator_2026" },
    });

    setSubmitting(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="section-sm bg-[var(--color-ink)] text-[var(--color-bone)]">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow-gold mb-6">Free tool</p>
            <h2 className="font-display text-[32px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
              Budget Calculator untuk{" "}
              <span className="font-display-italic text-[var(--color-gold)]">
                Corporate Outing 2026.
              </span>
            </h2>
            <p className="mt-5 text-[16px] text-white/70 max-w-[480px]">
              Digunakan oleh 1.200+ HR untuk estimasi budget cepat — 30+ format
              program tercakup. Hasil instan, gratis selamanya.
            </p>
          </div>

          <div className="lg:col-span-6">
            {!submitted ? (
              <form
                onSubmit={onSubmit}
                className="bg-white/[0.04] border border-white/10 rounded-sm p-7 lg:p-9 backdrop-blur"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-medium text-white/80 mb-2">
                      Email kantor
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="anda@perusahaan.com"
                      className="w-full h-12 bg-white/[0.06] border border-white/15 rounded-md px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-white/80 mb-2">
                      Nama perusahaan
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="PT Contoh Indonesia"
                      className="w-full h-12 bg-white/[0.06] border border-white/15 rounded-md px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full btn btn-primary"
                >
                  {submitting ? "Mengirim..." : "Get the Calculator"}
                  {!submitting && <ArrowRight size={16} className="arrow" />}
                </button>
                {error && (
                  <div className="mt-4 rounded-md bg-white/10 border border-white/20 px-4 py-3 text-[13px] text-white/90">
                    ⚠ {error}
                  </div>
                )}
                <p className="mt-4 text-[12px] text-white/50">
                  🔒 Digunakan hanya untuk mengirim calculator. Tanpa spam, tanpa
                  sales call.
                </p>
              </form>
            ) : (
              <div className="bg-white/[0.04] border border-[var(--color-gold)]/30 rounded-sm p-7 lg:p-9">
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center mb-4">
                  <Check size={20} className="text-[var(--color-gold)]" />
                </div>
                <h3 className="font-display text-[24px] mb-2">
                  Cek inbox Anda dalam 1–2 menit.
                </h3>
                <p className="text-[15px] text-white/70">
                  Calculator dikirim ke <strong>{email}</strong>. Kalau tidak
                  muncul, cek folder spam atau hubungi kami.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
