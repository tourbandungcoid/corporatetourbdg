import Link from "next/link";
import Image from "next/image";
import { getCaseStudiesList } from "@/lib/case-studies-data";
import { ArrowRight } from "@/components/icons/Icons";

/**
 * Renders up to 3 related case studies as cards.
 * Filters by serviceSlug or industry to keep the related list contextual.
 * Falls back to the most recent case studies if nothing matches.
 */
type Props = {
  serviceSlugs?: string[];
  industries?: string[];
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export async function RelatedCaseStudies({
  serviceSlugs = [],
  industries = [],
  limit = 3,
  eyebrow = "Bukti hasil",
  title = "Case studies yang relevan.",
  description = "Bagaimana kami eksekusi event sejenis untuk perusahaan lain — lengkap dengan brief, scope, dan outcome.",
}: Props) {
  const all = await getCaseStudiesList();
  if (all.length === 0) return null;

  const matched = all.filter(
    (cs) =>
      (serviceSlugs.length === 0 ||
        serviceSlugs.includes(cs.serviceSlug ?? "")) ||
      (industries.length > 0 && industries.includes(cs.industry ?? ""))
  );

  // Prefer matched; if too few, top up with the rest by recency.
  const seen = new Set(matched.map((cs) => cs.slug));
  const fallback = all.filter((cs) => !seen.has(cs.slug));
  const picked = [...matched, ...fallback].slice(0, limit);

  if (picked.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-paper border-t border-divider">
      <div className="container-1280">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
          <div className="max-w-2xl">
            <span className="eyebrow-brand">{eyebrow}</span>
            <h2 className="font-display mt-4 text-3xl md:text-4xl text-ink leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-sm md:text-base text-slate leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-deep transition self-start md:self-auto"
          >
            All case studies
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {picked.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-paper transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_56px_rgba(15,31,26,0.08)] hover:border-ink-soft"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-forest to-ink">
                <Image
                  src={cs.heroImage?.src ?? ""}
                  alt={cs.heroImage?.alt ?? cs.slug}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                {cs.industryLabel && (
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-paper/90 backdrop-blur px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-medium text-ink">
                    {cs.industryLabel}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg md:text-xl text-ink leading-snug line-clamp-3">
                  {cs.outcomeHeadline}
                </h3>
                <p className="mt-3 text-xs text-slate-mute">
                  {cs.pax} · {cs.duration} · {cs.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
