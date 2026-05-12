import Link from "next/link";
import { INDUSTRIES } from "@/lib/site";

export function IndustryGrid() {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container-1280">
        <div className="max-w-[720px] mb-14">
          <p className="eyebrow-gold mb-6">Industry expertise</p>
          <h2 className="font-display text-[36px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
            Kami bicara bahasa{" "}
            <span className="font-display-italic">industri Anda.</span>
          </h2>
          <p className="mt-5 text-[16px] text-[var(--color-slate)] max-w-[560px]">
            Vertikal-spesifik framing — case study, fasilitator, dan agenda
            disesuaikan dengan context industri klien.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-sm overflow-hidden">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group bg-[var(--color-paper)] p-7 hover:bg-[var(--color-bone)] transition-colors relative flex flex-col justify-between aspect-[4/3]"
            >
              <span className="text-[11px] uppercase tracking-wider text-[var(--color-slate-mute)] group-hover:text-[var(--color-gold)] transition-colors">
                Industry
              </span>
              <span className="font-display text-[24px] lg:text-[26px] leading-tight text-[var(--color-ink)]">
                {ind.label}
              </span>
              <div className="h-px w-8 bg-[var(--color-ink)] group-hover:bg-[var(--color-gold)] group-hover:w-16 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
