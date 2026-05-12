import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { getAllFaqCategorySlugs, getFaqCategory, getFaqCategoriesList } from "@/lib/faq-data";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
} from "@/lib/schema";

type Params = Promise<{ category: string }>;

export async function generateStaticParams() {
  return getAllFaqCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = await params;
  const cat = getFaqCategory(category);
  if (!cat) return { title: "FAQ category not found" };
  const url = `${SITE.url}/faq/${cat.slug}`;
  return {
    title: cat.title,
    description: cat.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: cat.title, description: cat.metaDescription, url, type: "article" },
  };
}

export default async function FaqCategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const cat = getFaqCategory(category);
  if (!cat) notFound();

  const allCats = getFaqCategoriesList();
  const otherCats = allCats.filter((c) => c.slug !== cat.slug);
  const url = `${SITE.url}/faq/${cat.slug}`;

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: cat.title,
      description: cat.metaDescription,
      image: `${SITE.url}/og-default.png`,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: `/faq/${cat.slug}`,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "FAQ", url: `${SITE.url}/faq` },
      { name: cat.eyebrow, url },
    ]),
    faqPageSchema(cat.questions.map((q) => ({ question: q.question, answer: q.answer })))
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow={cat.eyebrow}
          title={cat.title.split(" — ")[0]}
          description={cat.intro}
        />

        {/* Stat strip */}
        <section className="bg-paper border-b border-divider py-8">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate">
              <span><strong className="text-ink tabular">{cat.questions.length}</strong> questions answered</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Update May 2026</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Verified by senior planner</span>
            </div>
            <GoogleReviewsBadge variant="compact" />
          </div>
        </section>

        {/* Table of contents */}
        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Pertanyaan di kategori ini</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {cat.questions.map((q, i) => (
                <li key={i}>
                  <a
                    href={`#q${i + 1}`}
                    className="text-ink hover:text-brand-deep flex items-baseline gap-2"
                  >
                    <span className="text-slate-mute font-mono text-xs">{(i + 1).toString().padStart(2, "0")}</span>
                    {q.question}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Questions full content */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="max-w-4xl space-y-10">
              {cat.questions.map((q, i) => (
                <article key={i} id={`q${i + 1}`} className="scroll-mt-32">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-display text-3xl text-brand-deep tabular leading-none flex-shrink-0">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                      {q.question}
                    </h2>
                  </div>
                  <div className="pl-10 space-y-3 text-base md:text-lg text-slate leading-relaxed">
                    <p>{q.answer}</p>
                    {q.detail && <p className="text-sm md:text-base">{q.detail}</p>}
                  </div>
                  <div className="pl-10 mt-4 pt-3 border-t border-divider/60 text-xs text-slate-mute">
                    Last verified: 12 May 2026 · senior planner team
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Related FAQ categories */}
        <section className="py-14 bg-cream/40 border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Kategori FAQ lain</p>
            <div className="grid gap-4 md:grid-cols-3">
              {otherCats.map((c) => (
                <Link
                  key={c.slug}
                  href={`/faq/${c.slug}`}
                  className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5"
                >
                  <p className="eyebrow-brand">{c.eyebrow}</p>
                  <h3 className="font-display mt-2 text-lg text-ink leading-tight">{c.eyebrow}</h3>
                  <p className="mt-2 text-sm text-slate line-clamp-2">{c.intro}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">
                    {c.questions.length} questions
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Pertanyaan Anda belum ada di sini?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Chat langsung — kami respond avg 6 jam working hours. No template auto-reply.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">
                Request Proposal<ArrowRight size={16} />
              </Link>
              <a href={buildWaLink(`FAQ ${cat.eyebrow}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">
                <Whatsapp size={16} />WhatsApp
              </a>
            </div>
          </div>
        </section>

        <StickyProposalBar message="Pertanyaan lain soal corporate outing? Free briefing call 15 menit." context={`FAQ ${cat.slug}`} />
      </main>
    </>
  );
}
