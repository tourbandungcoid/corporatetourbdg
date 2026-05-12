import Link from "next/link";
import { ServiceIcon } from "../Icon";
import { ArrowUpRight } from "../Icon";
import { SERVICES } from "@/lib/site";

const ICON_LOOKUP: Record<string, "compass" | "users" | "stars" | "presentation" | "mountain" | "flag" | "briefcase" | "trophy"> = {
  "outing-kantor": "compass",
  "team-building": "users",
  "company-gathering": "stars",
  "mice-bandung": "presentation",
  "corporate-retreat": "mountain",
  "leadership-camp": "flag",
  "executive-offsite": "briefcase",
  "incentive-trip": "trophy",
};

export function ServicePillars() {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container-1280">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div className="max-w-[680px]">
            <p className="eyebrow-gold mb-6">Apa yang kami desain</p>
            <h2 className="font-display text-[36px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              Delapan format experience,{" "}
              <span className="font-display-italic">tak terbatas kustomisasi.</span>
            </h2>
          </div>
          <p className="text-[15px] text-[var(--color-slate)] max-w-[320px]">
            Setiap format adalah titik mulai. Dari sini kami merancang yang
            spesifik untuk tim Anda — bukan template.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-sm overflow-hidden">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-[var(--color-paper)] p-7 lg:p-8 hover:bg-[var(--color-bone)] transition-colors duration-300 relative flex flex-col"
            >
              <div className="text-[var(--color-gold)] mb-6">
                <ServiceIcon name={ICON_LOOKUP[s.slug]} size={28} />
              </div>
              <h3 className="font-display text-[22px] lg:text-[24px] leading-tight text-[var(--color-ink)] mb-2">
                {s.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--color-slate)] mb-6 flex-1">
                {s.short}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-divider)]">
                <span className="text-[12px] text-[var(--color-slate-mute)]">
                  {s.priceFrom}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--color-ink)] group-hover:text-[var(--color-gold)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
