"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@/components/Icon";
import { SITE } from "@/lib/site";
import { submitLead } from "@/lib/actions/leads";

export default function QuickQuotePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [contact, setContact] = useState("");
  const [eventType, setEventType] = useState("");
  const [paxCount, setPaxCount] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // Heuristic: if contact starts with + or contains digits-only, treat as phone
    const isPhone = /^[\+\d\s\-()]+$/.test(contact.trim());
    const payload = {
      source: "quick_quote" as const,
      contact_name: "Quick Quote Lead",
      email: isPhone ? undefined : contact.trim(),
      phone: isPhone ? contact.trim() : undefined,
      event_type: eventType,
      pax_count: paxCount ? parseInt(paxCount, 10) : undefined,
      preferred_dates: targetDate,
      raw_payload: { contact, eventType, paxCount, targetDate },
    };

    const result = await submitLead(payload);

    if (!result.ok) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    router.push(`/proposal/thank-you?source=quick&lead=${result.leadNumber}`);
  };

  return (
    <section className="pt-[120px] lg:pt-[160px] pb-32">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12 max-w-[1080px] mx-auto">
          <div className="lg:col-span-5">
            <p className="eyebrow-brand mb-5">Quick Quote</p>
            <h1 className="font-display text-[40px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              4 fields.{" "}
              <span className="font-display-italic">Estimasi cepat dalam 1 jam.</span>
            </h1>
            <p className="mt-6 text-[16px] text-[var(--color-slate)] max-w-[400px]">
              Untuk Anda yang butuh angka cepat sebelum decision. Kami kirim
              estimasi range via WhatsApp atau email dalam <strong>1 jam jam kerja</strong>.
            </p>

            <div className="mt-10 hidden lg:block">
              <p className="eyebrow mb-3">Butuh proposal lengkap?</p>
              <Link href="/proposal/request" className="link-underline text-[14px]">
                Multi-step RFP → 24 jam response
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-sm p-8 lg:p-10"
            >
              <div className="space-y-5">
                <div>
                  <label className="label">
                    Email atau WhatsApp <span className="text-[var(--color-brand)]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="anda@perusahaan.com atau +628..."
                    className="input"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label">
                      Tipe event <span className="text-[var(--color-brand)]">*</span>
                    </label>
                    <select
                      required
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="select"
                    >
                      <option value="" disabled>
                        Pilih...
                      </option>
                      <option>Company Outing</option>
                      <option>Team Building</option>
                      <option>MICE</option>
                      <option>Retreat / Offsite</option>
                      <option>Gathering</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      Jumlah peserta <span className="text-[var(--color-brand)]">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      value={paxCount}
                      onChange={(e) => setPaxCount(e.target.value)}
                      placeholder="100"
                      className="input"
                    />
                  </div>
                </div>
                <div>
                  <label className="label">
                    Tanggal target <span className="text-[var(--color-brand)]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    placeholder="Contoh: Maret 2026, atau fleksibel"
                    className="input"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-full mt-7 btn-lg"
              >
                {submitting ? "Mengirim..." : "Kirim untuk Quick Quote"}
                {!submitting && <ArrowRight size={16} className="arrow" />}
              </button>

              {error && (
                <div className="mt-5 rounded-md bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 px-4 py-3 text-[13px] text-[var(--color-error)]">
                  ⚠ {error}
                </div>
              )}

              <p className="text-[12px] text-[var(--color-slate)] mt-4 text-center">
                Estimasi via{" "}
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  WhatsApp
                </a>{" "}
                atau email dalam 1 jam kerja.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
