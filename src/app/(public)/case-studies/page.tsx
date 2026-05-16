import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { getCaseStudiesList } from "@/lib/case-studies-data";
import { ArrowRight } from "@/components/icons/Icons";
import { SITE, STATS } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  articleSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case Studies Corporate Event Bandung — 6 Real Company, Outcome Terukur",
  description:
    "Real events untuk real companies — challenge, approach, eksekusi, dan outcome terukur. 6 case study dari tech unicorn sampai BUMN bank.",
  alternates: { canonical: `${SITE.url}/case-studies` },
  openGraph: {
    title: "Case Studies Corporate Event Bandung — 6 Real Company, Outcome Terukur",
    description:
      "6 real corporate event case studies di Bandung — tech unicorn, BUMN bank, FMCG, telco, manufacturing.",
    url: `${SITE.url}/case-studies`,
    type: "website",
    images: [{ url: IMAGES.caseStudyLarge.src, width: 1200, height: 630, alt: IMAGES.caseStudyLarge.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies Corporate Event Bandung — 6 Real Company",
    description: "6 real case studies: tech unicorn, BUMN bank, FMCG, telco. Challenge, approach & outcome terukur.",
    images: [IMAGES.caseStudyLarge.src],
  },
};

type SearchParams = Promise<{ industry?: string }>;

export default async function CaseStudiesIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { industry } = await searchParams;
  const all = await getCaseStudiesList();

  // Build industry filter chips from data
  const industries = Array.from(
    new Map(all.map((cs) => [cs.industry, cs.industryLabel.split(" · ")[0]])).entries()
  );

  const filtered = industry
    ? all.filter((cs) => cs.industry === industry)
    : all;

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Case Studies", url: `${SITE.url}/case-studies` },
    ]),
    articleSchema({
      headline: "Case Studies Corporate Event Bandung — 6 Real Company, Outcome Terukur",
      description: "Real events untuk real companies — challenge, approach, eksekusi, dan outcome terukur. 6 case study dari tech unicorn sampai BUMN bank di Bandung & Jawa Barat.",
      image: IMAGES.caseStudyLarge.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/case-studies",
      aboutService: "B2B Corporate Event Specialist Bandung",
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        "case study corporate event bandung",
        "portfolio event organizer corporate bandung",
        "contoh event outing perusahaan bandung",
        "corporate gathering bumn jawa barat",
        "hasil team building perusahaan bandung",
        "referensi vendor corporate outing bandung",
      ],
    }),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE.url}/case-studies#webpage`,
      name: "Corporate Event Case Studies",
      url: `${SITE.url}/case-studies`,
      inLanguage: "id-ID",
      isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url },
      mainEntity: {
        "@type": "ItemList",
        "@id": `${SITE.url}/case-studies#itemlist`,
        numberOfItems: all.length,
        itemListElement: all.map((cs, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Article",
            "@id": `${SITE.url}/case-studies/${cs.slug}#article`,
            headline: cs.outcomeHeadline,
            url: `${SITE.url}/case-studies/${cs.slug}`,
            description: cs.shortDescription,
            author: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: "7Summits Travel", url: SITE.url },
            about: { "@type": "Thing", name: cs.industryLabel },
          },
        })),
      },
    }
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="Case Studies"
        title="Real events. Real companies. Real outcomes."
        description="Cerita lengkap event yang kami handle untuk corporate client — dari tech unicorn pasca-merger sampai BUMN bank annual gathering. Challenge, approach, dan hasil terukur."
      />

      <section className="bg-paper border-b border-divider py-12">
        <div className="container-1280">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              [STATS.eventsDelivered, "Events delivered"],
              [STATS.companiesTrusted, "Companies trusted"],
              [STATS.repeatBookingRate, "Repeat booking"],
              [STATS.largestEventPax, "Largest event"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-3xl text-ink tabular leading-none">{num}</p>
                <p className="mt-2 text-sm text-slate">{label}</p>
              </div>
            ))}
          </div>
          <GoogleReviewsBadge variant="compact" />
        </div>
      </section>

      {/* Industry filter chips */}
      <section className="bg-bone/50 border-b border-divider py-6 sticky top-20 z-10 backdrop-blur">
        <div className="container-1280">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-slate-mute font-medium mr-2">
              Filter by industry:
            </span>
            <Link
              href="/case-studies"
              className={`inline-flex items-center rounded-full px-3 h-8 text-xs font-medium transition ${
                !industry
                  ? "bg-ink text-paper"
                  : "border border-border bg-paper text-slate hover:bg-cream"
              }`}
            >
              All ({all.length})
            </Link>
            {industries.map(([key, label]) => {
              const count = all.filter((cs) => cs.industry === key).length;
              const active = industry === key;
              return (
                <Link
                  key={key}
                  href={`/case-studies?industry=${key}`}
                  className={`inline-flex items-center rounded-full px-3 h-8 text-xs font-medium transition ${
                    active
                      ? "bg-ink text-paper"
                      : "border border-border bg-paper text-slate hover:bg-cream"
                  }`}
                >
                  {label} ({count})
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-1280">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
              Belum ada case study untuk industry ini.{" "}
              <Link href="/case-studies" className="text-brand-deep underline">
                Lihat semua case studies →
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filtered.map((cs) => (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group relative overflow-hidden rounded-3xl bg-paper border border-border hover:border-ink-soft transition-all hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,31,26,0.08)]">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-forest to-ink">
                    <Image src={cs.heroImage.src} alt={cs.heroImage.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center rounded-full bg-paper/90 backdrop-blur px-3 py-1 text-xs font-medium text-ink">{cs.industryLabel}</span>
                    </div>
                  </div>
                  <div className="p-7 md:p-8">
                    <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight">&ldquo;{cs.outcomeHeadline}&rdquo;</h2>
                    <p className="mt-4 text-sm text-slate leading-relaxed line-clamp-2">{cs.shortDescription}</p>
                    <div className="mt-5 pt-5 border-t border-divider flex flex-wrap items-center gap-3 text-xs text-slate">
                      <span className="tabular">{cs.pax}</span>
                      <span className="h-1 w-1 rounded-full bg-divider" />
                      <span>{cs.duration}</span>
                      <span className="h-1 w-1 rounded-full bg-divider" />
                      <span>{cs.location}</span>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink/85">Read full story<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="container-1280 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">Mau tim Anda jadi case study berikutnya?</h2>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">Free proposal dalam 24 jam. Briefing call 15 menit untuk align scope, timeline, dan outcome.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">Request Proposal<ArrowRight size={16} /></Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">Browse services</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
