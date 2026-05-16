import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import {
  getGlossaryGroups,
  getAllGlossaryEntries,
  getEntrySlug,
} from "@/lib/glossary-data";
import { buildWaLink, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  faqPageSchema,
  definedTermSetSchema,
  articleSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Glossary Corporate Event Bandung — 40+ Istilah untuk HR & Procurement",
  description:
    "Glossary istilah corporate event Indonesia — annual gathering, BOTS, outbound, executive offsite, MICE, dan 40+ term lain yang sering dipakai HR Indonesia. Definitif & dipakai senior planner.",
  alternates: { canonical: `${SITE.url}/glossary` },
  openGraph: {
    title: "Glossary Corporate Event: 40+ Istilah MICE & Outing — TourBandung",
    description:
      "Glossary 40+ istilah corporate event yang sering dipakai HR Indonesia.",
    url: `${SITE.url}/glossary`,
    type: "article",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossary Corporate Event: 40+ Istilah MICE & Outing",
    description: "40+ istilah corporate event yang sering dipakai HR Indonesia. Definitif, dipakai senior planner.",
    images: [IMAGES.heroMain.src],
  },
};

export default function GlossaryPage() {
  const groups = getGlossaryGroups();
  const all = getAllGlossaryEntries();

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Glossary", url: `${SITE.url}/glossary` },
    ]),
    articleSchema({
      headline: "Glossary Corporate Event Bandung — 40+ Istilah untuk HR & Procurement",
      description: "Glossary istilah corporate event Indonesia — annual gathering, BOTS, outbound, executive offsite, MICE, dan 40+ term lain yang sering dipakai HR Indonesia. Definitif & dipakai senior planner.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/glossary",
      aboutService: "Corporate Event Education & Terminology",
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        "istilah corporate event indonesia",
        "glossary event organizer bandung",
        "definisi outing kantor team building mice",
        "arti annual gathering executive offsite",
        "terminologi event corporate hr procurement",
        "apa itu outbound perusahaan",
        "bots corporate event artinya",
      ],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        { type: "WebPage", name: "FAQ Corporate Outing Bandung", url: `${SITE.url}/faq` },
        { type: "WebPage", name: "Methodology — 3 Named Framework", url: `${SITE.url}/methodology` },
        { type: "WebPage", name: "Specialist vs Generic EO", url: `${SITE.url}/specialist-vs-generic-eo` },
      ],
    }),
    faqPageSchema(
      all.slice(0, 30).map((e) => ({
        question: `Apa itu ${e.term}?`,
        answer: e.long,
      })),
      `${SITE.url}/glossary`
    ),
    definedTermSetSchema({
      name: "Glossary Istilah Corporate Event Indonesia",
      description: "Definisi resmi istilah corporate event yang dipakai HR, procurement, dan event planner di Indonesia — disusun oleh senior planner TourBandung Corporate dari 400+ event delivered.",
      url: `${SITE.url}/glossary`,
      terms: all.map((e) => ({
        name: e.term,
        description: e.long,
        slug: getEntrySlug(e),
      })),
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Glossary"
          title="Istilah corporate event yang HR Indonesia perlu tahu."
          description={`${all.length} term yang sering muncul di brief / proposal / kontrak vendor — definitif, dipakai senior planner, bukan copy-paste dari Wikipedia.`}
        />

        {/* Letter index */}
        <section className="bg-paper border-b border-divider py-8 sticky top-20 z-10 backdrop-blur">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {groups.map((g) => (
                <a
                  key={g.letter}
                  href={`#letter-${g.letter}`}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border bg-paper text-xs font-medium text-slate hover:bg-cream hover:text-ink transition tabular"
                >
                  {g.letter}
                </a>
              ))}
            </div>
            <GoogleReviewsBadge variant="compact" />
          </div>
        </section>

        {/* Entries */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="max-w-4xl space-y-14">
              {groups.map((g) => (
                <div key={g.letter} id={`letter-${g.letter}`} className="scroll-mt-40">
                  <h2 className="font-display text-5xl md:text-6xl text-brand-deep tabular leading-none mb-8">
                    {g.letter}
                  </h2>
                  <dl className="space-y-8">
                    {g.entries.map((e) => {
                      const slug = getEntrySlug(e);
                      return (
                        <div key={slug} id={slug} className="scroll-mt-40">
                          <dt className="flex items-baseline gap-3 mb-2">
                            <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
                              {e.term}
                            </h3>
                            <a
                              href={`#${slug}`}
                              className="text-xs text-slate-mute hover:text-brand"
                              aria-label={`Anchor for ${e.term}`}
                            >
                              #
                            </a>
                          </dt>
                          <dd className="space-y-2 text-slate leading-relaxed">
                            <p className="text-base font-medium text-ink">{e.short}</p>
                            <p className="text-sm md:text-base">{e.long}</p>
                            {e.related && e.related.length > 0 && (
                              <p className="text-xs text-slate-mute pt-1">
                                Related:{" "}
                                {e.related.map((r, i) => (
                                  <span key={r}>
                                    <span className="text-slate">{r}</span>
                                    {i < e.related!.length - 1 && ", "}
                                  </span>
                                ))}
                              </p>
                            )}
                            {e.seeAlso && e.seeAlso.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-1">
                                {e.seeAlso.map((s) => (
                                  <Link key={s.href} href={s.href} className="inline-flex items-center gap-1 rounded-full bg-cream/60 border border-border px-3 py-1 text-xs text-brand-deep hover:bg-brand-light/30 transition-colors">
                                    {s.label} <ArrowRight size={10} />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Ada term yang belum di sini?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Chat langsung — kami extend glossary based on real questions dari HR Indonesia.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Browse FAQ <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("glossary question")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"
              >
                <Whatsapp size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        <StickyProposalBar
          message="Ada istilah event yang perlu di-clarify? Chat 15 menit free."
          context="glossary"
        />
      </main>
    </>
  );
}
