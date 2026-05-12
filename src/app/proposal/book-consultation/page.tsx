import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Check } from "@/components/Icon";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule 15-min Discovery Call",
  description:
    "Booking 15 menit konsultasi gratis dengan senior account director. Untuk HR/GA/People & Culture yang ingin diskusi sebelum request proposal formal.",
  alternates: { canonical: `${SITE.url}/proposal/book-consultation` },
};

const TOPICS = [
  "Memvalidasi budget untuk event yang sedang direncanakan",
  "Mengeksplorasi format event yang paling cocok",
  "Mendapatkan benchmark dari case study industri serupa",
  "Diskusi feasibility untuk timeline yang ambisius",
  "Konsultasi vendor selection criteria",
];

export default function BookConsultationPage() {
  return (
    <section className="pt-[120px] lg:pt-[160px] pb-32">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12 max-w-[1100px] mx-auto">
          <div className="lg:col-span-6">
            <p className="eyebrow-gold mb-5">Discovery call</p>
            <h1 className="font-display text-[40px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              15 menit dengan{" "}
              <span className="font-display-italic">senior account director.</span>
            </h1>
            <p className="mt-6 text-[16px] text-[var(--color-slate)] max-w-[440px]">
              Gratis, tidak ada commitment. Untuk Anda yang ingin diskusi
              feasibility, budget benchmark, atau format event sebelum siap
              request proposal formal.
            </p>

            <div className="mt-10">
              <p className="eyebrow mb-4">Cocok untuk diskusi:</p>
              <ul className="space-y-3">
                {TOPICS.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check size={16} className="text-[var(--color-gold)] mt-1 flex-shrink-0" />
                    <span className="text-[14px] text-[var(--color-ink)]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--color-divider)] flex flex-col gap-3">
              <p className="eyebrow text-[var(--color-slate)]">Alternatif</p>
              <Link href="/proposal/request" className="link-underline text-[14px]">
                Skip the call, langsung kirim brief →
              </Link>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[14px]"
              >
                Chat WhatsApp untuk respon instan →
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-sm p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center">
                  <Calendar size={20} className="text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="font-display text-[20px] text-[var(--color-ink)]">
                    Calendly atau Google Calendar
                  </p>
                  <p className="text-[13px] text-[var(--color-slate)]">
                    Pilih slot yang available
                  </p>
                </div>
              </div>

              {/* Placeholder calendar UI */}
              <div className="border border-[var(--color-divider)] rounded-md p-5">
                <p className="text-[14px] text-[var(--color-slate)] mb-4">
                  Slot available 7 hari ke depan:
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    "Sen 10:00",
                    "Sen 14:00",
                    "Sel 09:30",
                    "Rab 11:00",
                    "Rab 15:00",
                    "Kam 10:30",
                    "Jum 14:30",
                    "Jum 16:00",
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className="px-3 py-2.5 text-[13px] text-[var(--color-ink)] border border-[var(--color-border)] rounded-md hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/5 transition-colors text-left"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <p className="text-[12px] text-[var(--color-slate-mute)] mb-5">
                  Semua waktu dalam WIB.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="label">Nama</label>
                  <input type="text" placeholder="Andini" className="input" />
                </div>
                <div>
                  <label className="label">Email kantor</label>
                  <input type="email" placeholder="anda@perusahaan.com" className="input" />
                </div>
              </div>

              <button className="btn btn-primary w-full mt-7">
                Confirm slot
                <ArrowRight size={14} className="arrow" />
              </button>
              <p className="text-[12px] text-[var(--color-slate)] mt-3 text-center">
                Konfirmasi calendar invite akan dikirim ke email Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
