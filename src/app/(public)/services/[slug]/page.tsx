import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Whatsapp } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { getAllServiceSlugs, getService } from "@/lib/services-data";
import { buildWaLink, SITE, STATS } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
  serviceSchema,
  organizationSchema,
  localBusinessSchema,
} from "@/lib/schema";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

const SERVICE_OG_TAGS: Record<string, string[]> = {
  "company-gathering":    ["company gathering bandung", "annual gathering perusahaan", "jasa company gathering bandung"],
  "team-building":        ["team building bandung", "outbound team building corporate bandung", "program team building perusahaan"],
  "employee-gathering":   ["employee gathering bandung", "gathering karyawan bandung", "hr event employee gathering"],
  "corporate-retreat":    ["corporate retreat bandung", "retreat perusahaan jawa barat", "strategic retreat corporate"],
  "leadership-camp":      ["leadership camp bandung", "leadership development senior management", "executive leadership jawa barat"],
  "executive-offsite":    ["executive offsite bandung", "c-suite offsite bandung", "strategy session direksi bandung"],
  "incentive-trip":       ["incentive trip bandung", "reward trip top performer bandung", "incentive program karyawan"],
  "annual-company-trip":  ["annual company trip bandung", "company trip tahunan perusahaan", "corporate trip massal jawa barat"],
  "mice":                 ["mice organizer bandung", "conference corporate bandung", "meeting incentive conference exhibition"],
  "glamping-corporate":   ["glamping corporate bandung", "glamping lembang corporate", "outdoor corporate event glamping"],
};

const SERVICE_AUTHOR_IDS: Record<string, string> = {
  "company-gathering":  `${SITE.url}/team#andre-pratama`,
  "team-building":      `${SITE.url}/team#sinta-rahmadhani`,
  "employee-gathering": `${SITE.url}/team#sinta-rahmadhani`,
  "corporate-retreat":  `${SITE.url}/team#sinta-rahmadhani`,
  "leadership-camp":    `${SITE.url}/team#andre-pratama`,
  "executive-offsite":  `${SITE.url}/team#andre-pratama`,
  "incentive-trip":     `${SITE.url}/team#andre-pratama`,
  "annual-company-trip":`${SITE.url}/team#tio-mahesa`,
  "mice":               `${SITE.url}/team#raden-bagus-wicaksono`,
  "glamping-corporate": `${SITE.url}/team#amelia-chandra`,
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  const url = `${SITE.url}/services/${service.slug}`;
  return {
    title: `${service.title} Bandung`,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} — TourBandung Corporate`,
      description: service.metaDescription,
      url,
      type: "article",
      publishedTime: "2026-05-12",
      modifiedTime: "2026-05-16",
      authors: [SERVICE_AUTHOR_IDS[slug] ?? `${SITE.url}/team#andre-pratama`],
      section: service.title,
      tags: SERVICE_OG_TAGS[slug] ?? ["corporate event bandung", "jawa barat"],
      images: [{ url: service.heroImage.src, width: 1200, height: 630, alt: service.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} — TourBandung Corporate`,
      description: service.metaDescription,
      images: [service.heroImage.src],
    },
  };
}

const SERVICE_AUTHORS: Record<string, { name: string; role: string }> = {
  "company-gathering": { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
  "team-building": { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
  "employee-gathering": { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
  "corporate-retreat": { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
  "leadership-camp": { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
  "executive-offsite": { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
  "incentive-trip": { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
  "annual-company-trip": { name: "Tio Mahesa", role: "Lead Field Operations Manager" },
  "mice": { name: "Raden Bagus Wicaksono", role: "Head of Operations & Risk" },
  "glamping-corporate": { name: "Amelia Chandra", role: "Senior Program Designer" },
};

const SERVICE_KEYWORDS: Record<string, string[]> = {
  "company-gathering":    ["company gathering bandung", "annual gathering perusahaan bandung", "jasa company gathering jawa barat", "vendor company gathering 50-800 pax bandung"],
  "team-building":        ["team building bandung", "program team building perusahaan bandung", "fasilitator team building jawa barat", "outbound team building corporate bandung"],
  "employee-gathering":   ["employee gathering bandung", "gathering karyawan bandung", "jasa employee gathering jawa barat", "program employee gathering corporate"],
  "corporate-retreat":    ["corporate retreat bandung", "retreat perusahaan jawa barat", "strategic retreat corporate bandung", "program retreat eksekutif bandung"],
  "leadership-camp":      ["leadership camp bandung", "leadership development corporate jawa barat", "program leadership senior management bandung", "executive coach corporate bandung"],
  "executive-offsite":    ["executive offsite bandung", "c-suite offsite jawa barat", "program strategy alignment eksekutif bandung", "private executive event bandung"],
  "incentive-trip":       ["incentive trip bandung", "incentive program karyawan bandung", "reward trip top performer jawa barat", "incentive travel corporate indonesia"],
  "annual-company-trip":  ["annual company trip bandung", "company trip tahunan perusahaan", "corporate trip massal bandung jawa barat", "program company trip 100-2000 pax"],
  "mice":                 ["mice organizer bandung", "conference corporate bandung", "event mice jawa barat", "meeting incentive conference exhibition bandung"],
  "glamping-corporate":   ["glamping corporate bandung", "corporate glamping jawa barat", "glamping team building perusahaan ciwidey", "premium glamping outing kantor bandung"],
};

const SERVICE_MONEY_PAGES: Record<string, string> = {
  "company-gathering":  "/corporate-gathering-bandung",
  "team-building":      "/team-building-bandung",
  "employee-gathering": "/employee-gathering-bandung",
  "corporate-retreat":  "/company-retreat-bandung",
  "leadership-camp":    "/leadership-retreat-jawa-barat",
  "executive-offsite":  "/executive-offsite-bandung",
  "incentive-trip":     "/incentive-trip-bandung",
  "annual-company-trip":"/outing-kantor-bandung",
  "mice":               "/mice-organizer-bandung",
  "glamping-corporate": "/glamping-corporate-bandung",
};

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE.url}/services/${service.slug}`;

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: `${service.title} di Bandung — ${service.heroDescription.slice(0, 100)}`,
      description: service.metaDescription,
      image: service.heroImage.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: `/services/${service.slug}`,
      aboutService: `${service.title} Bandung`,
      author: SERVICE_AUTHORS[service.slug] ?? { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: SERVICE_KEYWORDS[service.slug] ?? [`${service.title.toLowerCase()} bandung`, "corporate event jawa barat", "vendor event perusahaan bandung"],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        ...(SERVICE_MONEY_PAGES[service.slug] ? [{ type: "WebPage", name: service.title, url: `${SITE.url}${SERVICE_MONEY_PAGES[service.slug]}` }] : []),
        { type: "WebPage", name: "Panduan Corporate Outing Bandung", url: `${SITE.url}/panduan-corporate-outing-bandung` },
      ],
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Services", url: `${SITE.url}/services` },
      { name: service.title, url },
    ]),
    serviceSchema({
      name: `${service.title} Bandung`,
      description: service.heroDescription,
      priceRange: `${service.priceFrom} - up`,
      url,
    }),
    faqPageSchema(service.faqs, url)
  );

  const relatedServices = service.relatedSlugs.map(getService).filter(Boolean);

  return (
    <>
      <JsonLd data={schema} />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image src={service.heroImage.src} alt={service.heroImage.alt} fill priority sizes="100vw" className="object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/55 to-ink/95" />
          </div>
          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-paper">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">{service.title}</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-paper">
                  <service.Icon size={22} />
                </span>
                <span className="eyebrow text-brand-light/70">{service.eyebrow}</span>
              </div>

              <h1 className="font-display text-paper leading-[1.04] tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {service.title} Bandung
              </h1>
              <p className="mt-6 text-base md:text-lg text-paper/75 max-w-2xl leading-relaxed">{service.heroDescription}</p>

              {/* Quick specs */}
              <div className="mt-10 flex flex-wrap gap-2">
                <Spec label="Pax">{service.paxRange}</Spec>
                <Spec label="Duration">{service.durationOptions.join(" · ")}</Spec>
                <Spec label="Mulai">{service.priceFrom}</Spec>
                {service.vibeTags.map((v) => <Spec key={v}>{v}</Spec>)}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition">
                  Request Proposal<ArrowRight size={14} />
                </Link>
                <a href={buildWaLink(`${service.title} Bandung`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/5 text-paper px-7 h-12 text-sm font-medium hover:bg-paper/10 transition">
                  <Whatsapp size={14} />WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section className="py-16 md:py-20 border-b border-divider">
          <div className="container-1280">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="eyebrow-brand">What&apos;s included</span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">Yang sudah include di paket.</h2>
                <p className="mt-4 text-base text-slate leading-relaxed">Transparent breakdown — semua yang tertulis di proposal sama dengan invoice. No hidden cost.</p>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
                {service.inclusions.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 rounded-xl border border-border bg-paper p-4">
                    <span className="mt-0.5 text-brand"><Check size={16} /></span>
                    <span className="text-sm text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sample Programs */}
        <section className="py-16 md:py-20 border-b border-divider bg-cream/40">
          <div className="container-1280">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-brand">Sample programs</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">3 sample untuk reference.</h2>
              <p className="mt-4 text-base text-slate">Setiap proposal custom — sample di bawah adalah starting point.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {service.samples.map((s, i) => (
                <div key={i} className="rounded-2xl border border-border bg-paper p-7 flex flex-col">
                  <h3 className="font-display text-xl text-ink leading-tight">{s.name}</h3>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-mute">
                    <span>{s.pax}</span>
                    <span className="h-1 w-1 rounded-full bg-divider" />
                    <span>{s.duration}</span>
                  </div>
                  <p className="mt-4 text-sm text-slate flex-1">{s.highlight}</p>
                  <p className="mt-6 pt-5 border-t border-divider text-sm font-medium text-brand-deep tabular">{s.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 border-b border-divider">
          <div className="container-1280">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-brand">How we work</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">{service.process.length} langkah dari brief ke event day.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {service.process.map((p, i) => (
                <div key={i} className="rounded-2xl border border-border bg-paper p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-2xl text-brand-deep tabular leading-none">0{i + 1}</span>
                    <h3 className="font-medium text-ink">{p.step}</h3>
                  </div>
                  <p className="text-sm text-slate leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust / Reviews */}
        <section className="py-14 bg-bone border-b border-divider">
          <div className="container-1280">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <span className="eyebrow-brand">Why companies trust us</span>
                <h2 className="font-display mt-3 text-2xl md:text-3xl text-ink leading-tight">100+ companies. 400+ events. 92% repeat booking.</h2>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div><p className="font-display text-2xl text-ink tabular">{STATS.eventsDelivered}</p><p className="text-xs text-slate mt-1">Events delivered</p></div>
                  <div><p className="font-display text-2xl text-ink tabular">{STATS.repeatBookingRate}</p><p className="text-xs text-slate mt-1">Repeat booking</p></div>
                </div>
              </div>
              <GoogleReviewsBadge variant="expanded" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 border-b border-divider">
          <div className="container-1280">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="eyebrow-brand">FAQ</span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">Pertanyaan khusus {service.title.toLowerCase()}.</h2>
              </div>
              <div className="lg:col-span-8 space-y-3">
                {service.faqs.map((item, i) => (
                  <details key={i} className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors">
                    <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                      <h3 className="font-display text-lg text-ink leading-snug">{item.question}</h3>
                      <span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Money Page CTA (if available) */}
        {service.relatedMoneyPage && (
          <section className="py-14 bg-cream/40 border-b border-divider">
            <div className="container-1280">
              <Link href={service.relatedMoneyPage.href} className="rounded-3xl border border-border bg-paper p-7 md:p-10 flex flex-wrap items-center justify-between gap-4 hover:border-ink-soft transition group">
                <div>
                  <p className="eyebrow-brand">Deep guide</p>
                  <h2 className="font-display mt-2 text-2xl md:text-3xl text-ink leading-tight">{service.relatedMoneyPage.label}</h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium group-hover:bg-brand-deep transition">
                  Read guide<ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 md:py-20 border-b border-divider">
            <div className="container-1280">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div>
                  <span className="eyebrow-brand">Related services</span>
                  <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">Often combined with...</h2>
                </div>
                <Link href="/services" className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 h-11 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition">
                  All services<ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedServices.map((r) => r && (
                  <Link key={r.slug} href={`/services/${r.slug}`} className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light/70 text-brand-deep mb-4">
                      <r.Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg text-ink leading-tight">{r.title}</h3>
                    <p className="mt-2 text-sm text-slate line-clamp-2">{r.heroDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">Lihat detail<ArrowRight size={12} className="transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">Ready bikin {service.title.toLowerCase()}?</h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">Briefing call 15 menit dengan senior planner → custom proposal dalam 24 jam.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">Request Proposal<ArrowRight size={16} /></Link>
              <a href={buildWaLink(service.title + " Bandung")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"><Whatsapp size={16} />WhatsApp</a>
            </div>
          </div>
        </section>

        <StickyProposalBar message={`Cari vendor ${service.title.toLowerCase()} di Bandung? Free proposal 24 jam.`} context={service.title + " Bandung"} />
      </main>
    </>
  );
}

function Spec({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/10 border border-paper/20 px-3 py-1.5 text-xs text-paper/90">
      {label && <span className="text-paper/55">{label}:</span>}
      <span className="font-medium">{children}</span>
    </span>
  );
}
