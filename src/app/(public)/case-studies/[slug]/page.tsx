import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/case-studies-data";
import { getService } from "@/lib/services-data";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  articleSchema,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
} from "@/lib/schema";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) return { title: "Case study not found" };
  const url = `${SITE.url}/case-studies/${cs.slug}`;
  return {
    title: cs.outcomeHeadline,
    description: cs.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: cs.outcomeHeadline,
      description: cs.metaDescription,
      url,
      type: "article",
      publishedTime: "2026-05-12",
      modifiedTime: "2026-05-16",
      authors: [`${SITE.url}/team#andre-pratama`],
      section: cs.industryLabel,
      tags: ["case study corporate event bandung", cs.industryLabel.toLowerCase(), "corporate outing bandung"],
      images: [{ url: cs.heroImage.src, width: 1200, height: 630, alt: cs.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: cs.outcomeHeadline,
      description: cs.metaDescription,
      images: [cs.heroImage.src],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  const url = `${SITE.url}/case-studies/${cs.slug}`;
  const relatedService = getService(cs.serviceSlug);

  // Map service slugs → author
  const SERVICE_AUTHORS: Record<string, { name: string; role: string }> = {
    "company-gathering":   { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
    "team-building":       { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
    "employee-gathering":  { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
    "corporate-retreat":   { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
    "leadership-camp":     { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
    "executive-offsite":   { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
    "incentive-trip":      { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
    "annual-company-trip": { name: "Tio Mahesa", role: "Lead Field Operations Manager" },
    "mice":                { name: "Raden Bagus Wicaksono", role: "Head of Operations & Risk" },
    "glamping-corporate":  { name: "Amelia Chandra", role: "Senior Program Designer" },
  };

  const SERVICE_KEYWORDS: Record<string, string[]> = {
    "company-gathering":   ["case study company gathering bandung", "contoh annual gathering perusahaan bandung", "referensi company gathering corporate"],
    "team-building":       ["case study team building bandung", "contoh program team building perusahaan", "hasil team building corporate bandung"],
    "employee-gathering":  ["case study employee gathering bandung", "contoh employee gathering karyawan", "program employee gathering berhasil"],
    "corporate-retreat":   ["case study corporate retreat bandung", "contoh strategic retreat perusahaan", "referensi corporate retreat jawa barat"],
    "leadership-camp":     ["case study leadership camp bandung", "contoh program leadership development corporate", "referensi leadership retreat jawa barat"],
    "executive-offsite":   ["case study executive offsite bandung", "contoh c-suite offsite event", "referensi executive strategy session"],
    "incentive-trip":      ["case study incentive trip bandung", "contoh incentive travel top performer", "referensi incentive program corporate"],
    "annual-company-trip": ["case study annual company trip", "contoh outing kantor perusahaan besar", "referensi corporate outing massal bandung"],
    "mice":                ["case study mice corporate bandung", "contoh conference perusahaan bandung", "referensi mice event organizer bandung"],
    "glamping-corporate":  ["case study glamping corporate bandung", "contoh glamping team building", "referensi glamping outing kantor ciwidey"],
  };

  // Map service slugs → primary money page
  const SERVICE_TO_MONEY_PAGE: Record<string, { href: string; label: string }> = {
    "company-gathering":  { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung" },
    "team-building":      { href: "/team-building-bandung", label: "Team Building Bandung" },
    "employee-gathering": { href: "/employee-gathering-bandung", label: "Employee Gathering Bandung" },
    "corporate-retreat":  { href: "/company-retreat-bandung", label: "Company Retreat Bandung" },
    "leadership-camp":    { href: "/leadership-retreat-jawa-barat", label: "Leadership Retreat Jawa Barat" },
    "executive-offsite":  { href: "/executive-offsite-bandung", label: "Executive Offsite Bandung" },
    "incentive-trip":     { href: "/incentive-trip-bandung", label: "Incentive Trip Bandung" },
    "annual-company-trip":{ href: "/outing-kantor-bandung", label: "Outing Kantor Bandung" },
    "mice":               { href: "/mice-organizer-bandung", label: "MICE Organizer Bandung" },
    "glamping-corporate": { href: "/glamping-corporate-bandung", label: "Glamping Corporate Bandung" },
  };
  const moneyPage = SERVICE_TO_MONEY_PAGE[cs.serviceSlug] ?? null;

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: cs.outcomeHeadline,
      alternativeHeadline: `Case Study ${cs.pax} Pax ${cs.industryLabel} — ${relatedService?.title ?? "Corporate Event"} Bandung, Outcome Terukur`,
      description: cs.metaDescription,
      image: cs.heroImage.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: `/case-studies/${cs.slug}`,
      aboutService: relatedService?.title ?? "Corporate Event Bandung",
      aboutServiceUrl: moneyPage ? `${SITE.url}${moneyPage.href}` : undefined,
      author: SERVICE_AUTHORS[cs.serviceSlug] ?? { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        ...(SERVICE_KEYWORDS[cs.serviceSlug] ?? ["case study corporate event bandung", "referensi event perusahaan bandung"]),
        `corporate event ${cs.industry.toLowerCase()} bandung`,
        `${cs.pax} pax corporate event jawa barat`,
      ],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        ...(relatedService ? [{ type: "Service", name: relatedService.title, url: `${SITE.url}/services/${relatedService.slug}`, id: `${SITE.url}/services/${relatedService.slug}#service` }] : []),
        ...(moneyPage ? [{ type: "WebPage", name: moneyPage.label, url: `${SITE.url}${moneyPage.href}` }] : []),
        { type: "Place", name: cs.location },
      ],
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Case Studies", url: `${SITE.url}/case-studies` },
      { name: cs.outcomeHeadline, url },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: cs.outcomeHeadline,
      description: cs.shortDescription,
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      eventStatus: "https://schema.org/EventCompleted",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: cs.location,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bandung",
          addressRegion: "Jawa Barat",
          addressCountry: "ID",
        },
      },
      organizer: {
        "@type": "Organization",
        "@id": `${SITE.url}#organization`,
        name: SITE.legalName,
        url: SITE.url,
      },
      typicalAgeRange: "22-55",
      audience: {
        "@type": "BusinessAudience",
        audienceType: cs.industryLabel,
      },
    }
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image src={cs.heroImage.src} alt={cs.heroImage.alt} fill priority sizes="100vw" className="object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/55 to-ink/95" />
          </div>
          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/case-studies" className="hover:text-paper">Case Studies</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">{cs.industryLabel}</span>
              </nav>

              <span className="inline-flex items-center rounded-full bg-paper/15 border border-paper/25 backdrop-blur px-3 py-1 text-xs font-medium text-paper">
                {cs.industryLabel}
              </span>

              <h1 className="font-display mt-6 text-paper leading-[1.04] tracking-[-0.02em] text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                &ldquo;{cs.outcomeHeadline}&rdquo;
              </h1>

              {/* Snapshot strip */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
                <Snap label="Peserta" value={cs.pax} />
                <Snap label="Durasi" value={cs.duration} />
                <Snap label="Lokasi" value={cs.location} />
                <Snap label="Tier" value={cs.budgetTier} />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics strip */}
        <section className="bg-cream/40 border-b border-divider py-10 md:py-12">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Outcome metrics</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl md:text-4xl text-ink tabular leading-none">{m.value}</p>
                  <p className="mt-2 text-sm text-slate">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative — Challenge */}
        <NarrativeSection title="The challenge" eyebrow="01" paragraphs={cs.challenge} />

        {/* Narrative — Approach */}
        <NarrativeSection title="Our approach" eyebrow="02" paragraphs={cs.approach} />

        {/* Narrative — Execution */}
        <NarrativeSection title="Execution" eyebrow="03" paragraphs={cs.execution} />

        {/* Narrative — Outcome */}
        <NarrativeSection title="The outcome" eyebrow="04" paragraphs={cs.outcome} />

        {/* Testimonial */}
        <section className="py-16 md:py-20 border-t border-divider bg-bone">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl text-brand-deep font-display leading-none">&ldquo;</span>
              <blockquote className="font-display mt-3 text-2xl md:text-3xl lg:text-4xl text-ink leading-[1.15]">
                {cs.testimonial.quote}
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-deep font-display text-base">
                  {cs.testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div className="text-left">
                  <p className="font-medium text-ink">{cs.testimonial.name}</p>
                  <p className="text-sm text-slate">{cs.testimonial.role} · {cs.testimonial.company}</p>
                </div>
              </div>
              <div className="mt-8">
                <GoogleReviewsBadge variant="compact" />
              </div>
            </div>
          </div>
        </section>

        {/* Related service CTA */}
        {relatedService && (
          <section className="py-14 bg-cream/40 border-t border-divider">
            <div className="container-1280">
              <Link href={`/services/${relatedService.slug}`} className="rounded-3xl border border-border bg-paper p-7 md:p-10 flex flex-wrap items-center justify-between gap-4 hover:border-ink-soft transition group">
                <div>
                  <p className="eyebrow-brand">Replicate this experience</p>
                  <h2 className="font-display mt-2 text-2xl md:text-3xl text-ink leading-tight">
                    Layanan: {relatedService.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate">{relatedService.heroDescription.slice(0, 150)}...</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium group-hover:bg-brand-deep transition flex-shrink-0">
                  Lihat detail<ArrowRight size={14} />
                </span>
              </Link>
              {moneyPage && (
                <p className="mt-4 text-sm text-slate">
                  Lihat juga:{" "}
                  <Link href={moneyPage.href} className="text-brand-deep hover:underline font-medium">
                    {moneyPage.label}
                  </Link>
                  {" "}— panduan lengkap, paket, dan harga.
                </p>
              )}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Replicate experience ini untuk tim Anda?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Briefing call 15 menit → custom proposal yang fit goal Anda dalam 24 jam.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">Request Proposal<ArrowRight size={16} /></Link>
              <a href={buildWaLink(`Replicate ${cs.outcomeHeadline.slice(0, 60)}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"><Whatsapp size={16} />WhatsApp</a>
            </div>
          </div>
        </section>

        <StickyProposalBar message="Ingin event seperti ini? Free proposal dalam 24 jam." context={`replicate ${cs.industry} case study`} />
      </main>
    </>
  );
}

function Snap({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.18em] uppercase text-paper/50 mb-1">{label}</p>
      <p className="font-display text-lg md:text-xl text-paper">{value}</p>
    </div>
  );
}

function NarrativeSection({ eyebrow, title, paragraphs }: { eyebrow: string; title: string; paragraphs: string[] }) {
  return (
    <section className="py-16 md:py-20 border-t border-divider">
      <div className="container-1280">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-5xl md:text-6xl text-brand-deep tabular leading-none">{eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl md:text-4xl text-ink leading-tight">{title}</h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-base md:text-lg text-slate leading-relaxed">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
