"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@/components/Icon";
import { SITE } from "@/lib/site";

export default function QuickQuotePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    router.push("/proposal/thank-you?source=quick");
  };

  return (
    <section className="pt-[120px] lg:pt-[160px] pb-32">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12 max-w-[1080px] mx-auto">
          <div className="lg:col-span-5">
            <p className="eyebrow-gold mb-5">Quick Quote</p>
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
                    Email atau WhatsApp <span className="text-[var(--color-gold)]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="anda@perusahaan.com atau +628..."
                    className="input"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label">
                      Tipe event <span className="text-[var(--color-gold)]">*</span>
                    </label>
                    <select required className="select">
                      <option value="" disabled selected>
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
                      Jumlah peserta <span className="text-[var(--color-gold)]">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      placeholder="100"
                      className="input"
                    />
                  </div>
                </div>
                <div>
                  <label className="label">
                    Tanggal target <span className="text-[var(--color-gold)]">*</span>
                  </label>
                  <input
                    required
                    type="text"
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

              <p className="text-[12px] text-[var(--color-slate)] mt-4 text-center">
                Estimasi via {" "}
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
