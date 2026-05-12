import Link from "next/link";
import { ArrowUpRight } from "../Icon";
import { PhotoFrame, PHOTOS } from "../PhotoFrame";
import { CASE_STUDIES_FEATURED } from "@/lib/site";

const CASE_PHOTOS = [PHOTOS.briefing, PHOTOS.workshop, PHOTOS.ceremonyWide];

export function CaseStudies() {
  return (
    <section className="section">
      <div className="container-1280">
        <div className="max-w-[820px] mb-14 lg:mb-20">
          <p className="eyebrow-gold mb-6">Proof of work</p>
          <h2 className="font-display text-[36px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
            Bagaimana enterprise mengukur{" "}
            <span className="font-display-italic">dampak nyata</span> setelah
            bekerja sama dengan kami.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {CASE_STUDIES_FEATURED.map((c, idx) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm bg-[var(--color-cream)]">
                <PhotoFrame
                  driveId={CASE_PHOTOS[idx]}
                  alt={c.headline}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="group-hover:scale-[1.04] transition-transform duration-[700ms] ease-out"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 text-[12px] uppercase tracking-wider text-[var(--color-slate)]">
                <span>{c.industry}</span>
                <span className="text-[var(--color-slate-mute)]">·</span>
                <span className="tabular">{c.paxCount} pax</span>
                <span className="text-[var(--color-slate-mute)]">·</span>
                <span>{c.duration}</span>
              </div>
              <h3 className="font-display text-[22px] lg:text-[24px] leading-tight text-[var(--color-ink)] mb-4">
                {c.headline}
              </h3>
              <blockquote className="text-[14px] leading-relaxed text-[var(--color-slate)] italic mb-3">
                &ldquo;{c.quote}&rdquo;
              </blockquote>
              <p className="text-[12px] text-[var(--color-slate-mute)] mb-5">
                — {c.quoteAuthor}, {c.quoteTitle}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">
                Read case study
                <ArrowUpRight
                  size={14}
                  className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[var(--color-divider)]">
          <Link href="/case-studies" className="link-underline">
            Explore 12+ case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
