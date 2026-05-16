import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Whatsapp, Check } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { getAllInsightSlugs, getInsight, getInsightsList } from "@/lib/insights-data";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  articleSchema,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  howToSchema,
} from "@/lib/schema";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getAllInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getInsight(slug);
  if (!article) return { title: "Article not found" };
  const url = `${SITE.url}/insights/${article.slug}`;
  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.metaDescription, url, type: "article" },
  };
}

export default async function InsightDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await getInsight(slug);
  if (!article) notFound();

  const url = `${SITE.url}/insights/${article.slug}`;
  const allArticles = await getInsightsList();
  const relatedRaw = await Promise.all(
    (article.relatedSlugs ?? []).map((s) => getInsight(s))
  );
  const related = relatedRaw.filter((x): x is NonNullable<typeof x> => Boolean(x)).slice(0, 2);
  // Fallback fill with most recent if related < 2
  const fillCount = 2 - related.length;
  if (fillCount > 0) {
    const fallback = allArticles
      .filter((a) => a.slug !== article.slug && !related.find((r) => r?.slug === a.slug))
      .slice(0, fillCount);
    related.push(...fallback);
  }

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: article.title,
      description: article.metaDescription,
      image: article.heroImage.src,
      datePublished: article.publishDate,
      dateModified: article.publishDate,
      slug: `/insights/${article.slug}`,
      author: { name: article.author.name, role: article.author.role },
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Insights", url: `${SITE.url}/insights` },
      { name: article.title, url },
    ]),
    ...(article.howTo ? [howToSchema(article.howTo)] : [])
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-12 md:pt-44 md:pb-16 border-b border-divider">
          <div className="container-1280">
            <div className="max-w-3xl">
              <nav className="text-xs text-slate-mute mb-4">
                <Link href="/" className="hover:text-ink">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/insights" className="hover:text-ink">Insights</Link>
                <span className="mx-2">/</span>
                <span className="text-slate">{article.category}</span>
              </nav>
              <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">{article.category}</span>
              <h1 className="font-display mt-5 text-ink leading-[1.04] tracking-[-0.02em] text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {article.title}
              </h1>
              <p className="mt-6 text-base md:text-lg text-slate leading-relaxed">{article.excerpt}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand-deep font-medium text-xs">{article.author.initials}</span>
                  <div>
                    <p className="text-ink font-medium leading-tight">{article.author.name}</p>
                    <p className="text-xs text-slate-mute">{article.author.role}</p>
                  </div>
                </div>
                <span className="h-4 w-px bg-divider hidden md:block" />
                <span>{new Date(article.publishDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span className="h-1 w-1 rounded-full bg-divider" />
                <span>{article.readTimeMin} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="border-b border-divider">
          <div className="container-1280 py-8">
            <div className="rounded-3xl overflow-hidden aspect-[16/8] relative bg-gradient-to-br from-forest to-ink">
              <Image src={article.heroImage.src} alt={article.heroImage.alt} fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* TLDR */}
        {article.tldr && article.tldr.length > 0 && (
          <section className="py-12 md:py-16 border-b border-divider bg-cream/40">
            <div className="container-1280">
              <div className="max-w-3xl rounded-3xl bg-paper border border-border p-7 md:p-9">
                <p className="eyebrow-brand mb-5">TL;DR</p>
                <ul className="space-y-3">
                  {article.tldr.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-ink leading-relaxed">
                      <span className="mt-1 text-brand flex-shrink-0"><Check size={16} /></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Body */}
        <section className="py-12 md:py-16">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto space-y-12">
              {article.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-5">{section.heading}</h2>
                  )}
                  <div className="space-y-5 text-base md:text-lg text-slate leading-relaxed">
                    {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                  {section.numbered && (
                    <ol className="mt-5 space-y-3">
                      {section.numbered.map((item, j) => (
                        <li key={j} className="flex gap-3 rounded-xl border border-border bg-paper p-5">
                          <span className="font-display text-xl text-brand-deep tabular leading-none flex-shrink-0">{j + 1}.</span>
                          <span className="text-base text-ink leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.bullets && (
                    <ul className="mt-5 space-y-2">
                      {section.bullets.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-base text-slate leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.callout && (
                    <div className="mt-6 rounded-2xl border-l-4 border-brand bg-brand-light/30 p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-brand-deep font-medium mb-2">{section.callout.label}</p>
                      <p className="text-base text-ink leading-relaxed">{section.callout.text}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Internal links to related service pages */}
              {article.internalLinks && article.internalLinks.length > 0 && (
                <div className="rounded-2xl border border-brand/25 bg-brand-light/20 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-deep font-medium mb-4">Layanan terkait</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {article.internalLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="group flex items-start gap-2.5 rounded-xl border border-border bg-paper px-4 py-3 hover:border-brand/40 hover:shadow-sm transition">
                        <ArrowRight size={12} className="mt-1 text-brand flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                        <div>
                          <p className="text-sm font-medium text-ink group-hover:text-brand-deep transition-colors leading-snug">{link.label}</p>
                          <p className="text-xs text-slate-mute mt-0.5">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Author + CTA block */}
        <section className="py-12 md:py-16 border-t border-divider bg-bone">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand-deep font-display text-lg">{article.author.initials}</span>
                  <div>
                    <p className="font-medium text-ink">{article.author.name}</p>
                    <p className="text-sm text-slate">{article.author.role}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-base text-slate leading-relaxed">Need help apply ini ke corporate event Anda? Brief 15 menit dengan senior planner kami — free, no commitment.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link href="/proposal/request" className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition">Request Proposal<ArrowRight size={14} /></Link>
                    <a href={buildWaLink(article.title)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"><Whatsapp size={14} />WhatsApp</a>
                  </div>
                </div>
              </div>
              <div className="mt-7 pt-6 border-t border-divider">
                <GoogleReviewsBadge variant="compact" />
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-16 md:py-20 border-t border-divider">
            <div className="container-1280">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div>
                  <span className="eyebrow-brand">Related insights</span>
                  <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">Continue reading.</h2>
                </div>
                <Link href="/insights" className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 h-11 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition">All articles<ArrowRight size={14} /></Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {related.map((r) => r && (
                  <Link key={r.slug} href={`/insights/${r.slug}`} className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5">
                    <span className="inline-flex items-center rounded-full bg-brand-light/70 px-2.5 py-1 text-xs font-medium text-brand-deep">{r.category}</span>
                    <h3 className="font-display text-xl text-ink leading-tight mt-3">{r.title}</h3>
                    <p className="mt-2 text-sm text-slate line-clamp-2">{r.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">Read article<ArrowRight size={12} className="transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">Mau apply framework ini di tim Anda?</h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">Brief 15 menit, custom proposal dalam 24 jam.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">Request Proposal<ArrowRight size={16} /></Link>
              <a href={buildWaLink(article.title)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"><Whatsapp size={16} />WhatsApp</a>
            </div>
          </div>
        </section>

        <StickyProposalBar message={`Apply "${article.title.slice(0, 50)}..." ke event Anda?`} context={article.slug} />
      </main>
    </>
  );
}
