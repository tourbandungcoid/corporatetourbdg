import Link from "next/link";
import type { Metadata } from "next";
import { ServiceIcon, ArrowUpRight, ArrowRight } from "@/components/Icon";
import { SERVICES, SITE } from "@/lib/site";

const ICON_LOOKUP = {
  "outing-kantor": "compass",
  "team-building": "users",
  "company-gathering": "stars",
  "mice-bandung": "presentation",
  "corporate-retreat": "mountain",
  "leadership-camp": "flag",
  "executive-offsite": "briefcase",
  "incentive-trip": "trophy",
} as const;

export const metadata: Metadata = {
  title: "Layanan Corporate Experience — Outing, Team Building, MICE, Retreat",
  description:
    "Delapan format experience corporate untuk enterprise Indonesia: outing kantor, team building, MICE, corporate retreat, leadership camp, executive offsite, dan incentive trip.",
  alternates: { canonical: `${SITE.url}/services` },
};

export default function ServicesIndex() {
  return (
    <>
      <section className="pt-[140px] lg:pt-[180px] pb-16">
        <div className="container-1280">
          <p className="eyebrow-gold mb-6">Layanan</p>
          <h1 className="font-display text-[48px] sm:text-[64px] lg:text-[88px] leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)] max-w-[1100px]">
            Delapan format experience,{" "}
            <span className="font-display-italic">
              didesain untuk dampak yang terukur.
            </span>
          </h1>
          <p className="mt-8 max-w-[640px] text-[17px] lg:text-[19px] leading-[1.55] text-[var(--color-slate)]">
            Setiap format adalah starting point. Dari sini, kami merancang
            program yang spesifik untuk objective, budget, dan profile tim Anda.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-1280">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card card-hover p-8 group flex flex-col"
              >
                <div className="text-[var(--color-gold)] mb-6">
                  <ServiceIcon
                    name={ICON_LOOKUP[s.slug as keyof typeof ICON_LOOKUP]}
                    size={32}
                  />
                </div>
                <h2 className="font-display text-[26px] lg:text-[28px] leading-tight text-[var(--color-ink)] mb-3">
                  {s.title}
                </h2>
                <p className="text-[14px] leading-relaxed text-[var(--color-slate)] mb-6 flex-1">
                  {s.short}
                </p>
                <div className="pt-5 border-t border-[var(--color-divider)] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[var(--color-slate-mute)]">
                      Mulai dari
                    </p>
                    <p className="text-[14px] font-medium text-[var(--color-ink)] tabular">
                      {s.priceFrom}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-1280 text-center">
          <h2 className="font-display text-[40px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] max-w-[800px] mx-auto">
            Tidak yakin format mana yang{" "}
            <span className="font-display-italic">paling cocok?</span>
          </h2>
          <p className="mt-6 text-[16px] text-[var(--color-slate)] max-w-[500px] mx-auto">
            15 menit konsultasi gratis dengan senior account director.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/proposal/book-consultation"
              className="btn btn-primary btn-lg"
            >
              Schedule Consultation
              <ArrowRight size={16} className="arrow" />
            </Link>
            <Link href="/proposal/request" className="btn btn-secondary btn-lg">
              Request Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
