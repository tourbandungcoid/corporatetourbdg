import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
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
import { getTestimonialsList } from "@/lib/testimonials-data";

export const metadata: Metadata = {
  title: "Klien TourBandung Corporate — 100+ Perusahaan Indonesia dari BUMN hingga MNC",
  description:
    "100+ perusahaan Indonesia memilih TourBandung Corporate — dari tech unicorn, BUMN bank, FMCG global, telco, manufacturing, hingga banking premium. Confidentiality protocol aktif per NDA convention.",
  alternates: { canonical: `${SITE.url}/clients` },
  openGraph: {
    title: "Klien TourBandung Corporate — 100+ Perusahaan, 8+ Industri",
    description:
      "Tech unicorn · BUMN banking · FMCG global · Telco · Manufacturing MNC — corporate event di Bandung & Jawa Barat. Confidentiality protocol aktif.",
    url: `${SITE.url}/clients`,
    type: "website",
  },
};

// Client logos — masked anonymized per NDA convention.
// Phase 7 CMS will replace with real client logos via admin/content/clients.
const CLIENTS_BY_INDUSTRY: { industry: string; clients: { name: string; descriptor?: string }[] }[] = [
  {
    industry: "Technology",
    clients: [
      { name: "Tech Unicorn A", descriptor: "Series D, 800+ employees" },
      { name: "Fintech Series B", descriptor: "Payment infrastructure" },
      { name: "SaaS Scaleup", descriptor: "B2B platform, 200+ employees" },
      { name: "E-commerce Marketplace", descriptor: "Top 5 Indonesia" },
      { name: "Logistics Tech", descriptor: "On-demand delivery" },
      { name: "EdTech Series A", descriptor: "K-12 platform" },
      { name: "HealthTech Startup", descriptor: "Telemedicine" },
      { name: "AgriTech Series A", descriptor: "Supply chain solution" },
    ],
  },
  {
    industry: "Banking & Finance",
    clients: [
      { name: "BUMN Bank Top 5", descriptor: "State-owned bank" },
      { name: "Private Banking", descriptor: "Wealth management division" },
      { name: "Multifinance Group", descriptor: "Consumer finance" },
      { name: "Securities Firm", descriptor: "Top 10 brokerage" },
      { name: "Sharia Bank", descriptor: "Islamic finance" },
      { name: "Insurance MNC", descriptor: "Life + general insurance" },
    ],
  },
  {
    industry: "BUMN & Government",
    clients: [
      { name: "BUMN Energy", descriptor: "Oil & gas subsidiary" },
      { name: "BUMN Telco", descriptor: "Telecommunications" },
      { name: "BUMN Construction", descriptor: "Infrastructure" },
      { name: "Ministry Division", descriptor: "Internal training & retreat" },
      { name: "SOE Holding", descriptor: "Investment management" },
    ],
  },
  {
    industry: "FMCG & Manufacturing",
    clients: [
      { name: "FMCG Global", descriptor: "Top 3 personal care" },
      { name: "Food & Beverage MNC", descriptor: "Beverage brand" },
      { name: "Pharma MNC", descriptor: "Pharmaceutical regional HQ" },
      { name: "Automotive MNC", descriptor: "Manufacturing plant" },
      { name: "Consumer Goods", descriptor: "Top 10 distribution" },
      { name: "Cosmetics Brand", descriptor: "Premium retail" },
    ],
  },
  {
    industry: "Retail & Hospitality",
    clients: [
      { name: "Retail Chain", descriptor: "200+ outlets nationwide" },
      { name: "Hotel Group", descriptor: "Indonesian premium chain" },
      { name: "F&B Restaurant Group", descriptor: "Multi-brand" },
      { name: "Fashion Retail", descriptor: "Department store" },
    ],
  },
  {
    industry: "Telco & Media",
    clients: [
      { name: "Telco Provider", descriptor: "Top 3 cellular" },
      { name: "Media House", descriptor: "Digital + traditional media" },
      { name: "Broadcasting Network", descriptor: "TV + content production" },
    ],
  },
  {
    industry: "Education & Healthcare",
    clients: [
      { name: "University", descriptor: "Private university" },
      { name: "Hospital Group", descriptor: "Premium hospital chain" },
      { name: "Education Foundation", descriptor: "K-12 multi-campus" },
      { name: "Pharma Distribution", descriptor: "Healthcare logistics" },
    ],
  },
];

export default async function ClientsPage() {
  const totalClients = CLIENTS_BY_INDUSTRY.reduce((sum, group) => sum + group.clients.length, 0);
  const TESTIMONIALS = (await getTestimonialsList()).slice(0, 3).map((t) => ({
    quote: t.quote,
    name: t.clientName,
    role: t.role ?? "",
    company: t.company,
  }));

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Clients", url: `${SITE.url}/clients` },
    ]),
    articleSchema({
      headline: "Klien TourBandung Corporate — 100+ Perusahaan Indonesia dari BUMN hingga MNC",
      description: "100+ perusahaan Indonesia memilih TourBandung Corporate untuk corporate event di Bandung & Jawa Barat sejak 2018 — tech unicorn, BUMN bank, FMCG global, telco, manufacturing.",
      image: IMAGES.caseStudyLarge.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: "/clients",
      aboutService: "B2B Corporate Event Specialist Bandung",
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="Our clients"
        title="100+ perusahaan Indonesia memilih kami."
        description="Dari startup unicorn hingga BUMN nasional, dari banking premium hingga manufacturing MNC — corporate event di Bandung & Jawa Barat. Confidentiality protocol: nama spesifik di-anonymize per NDA convention."
      />

      {/* Stats strip */}
      <section className="bg-paper border-b border-divider py-12">
        <div className="container-1280">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              [STATS.companiesTrusted, "Companies trusted"],
              [STATS.eventsDelivered, "Events delivered"],
              [STATS.repeatBookingRate, "Repeat booking"],
              [`${totalClients}+`, "Industries served"],
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

      {/* Clients by industry */}
      <section className="py-16 md:py-20">
        <div className="container-1280">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow-brand">By Industry</span>
            <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
              Corporate clients spanning 8+ industries.
            </h2>
            <p className="mt-4 text-base text-slate leading-relaxed">
              Industry diversity ini reflect track record kami handling
              complexity yang berbeda. Beberapa client tidak di-publish per
              NDA convention — descriptor di-substitute dengan industry context.
            </p>
          </div>

          <div className="space-y-12">
            {CLIENTS_BY_INDUSTRY.map((group) => (
              <div key={group.industry}>
                <h3 className="eyebrow-brand mb-5">{group.industry}</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.clients.map((c, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-paper p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-mute mb-1">
                        {group.industry}
                      </p>
                      <p className="font-display text-base text-ink leading-tight">
                        {c.name}
                      </p>
                      {c.descriptor && (
                        <p className="mt-1 text-xs text-slate">{c.descriptor}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality note */}
      <section className="py-12 border-t border-divider bg-cream/40">
        <div className="container-1280">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-paper p-6 md:p-8">
            <p className="eyebrow-brand mb-3">On confidentiality</p>
            <p className="text-base text-slate leading-relaxed">
              Banyak corporate client kami operate di banking, BUMN, atau
              kategori sensitive lain yang demand NDA. Nama company tidak
              di-publish secara spesifik — descriptor di-substitute dengan
              industry context. Untuk verifikasi specific kredensial, briefing
              call dengan senior planner kami akan share relevant case study
              sesuai industry Anda (subject to NDA jika perlu).
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 border-t border-divider">
        <div className="container-1280">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow-brand">Voices</span>
            <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
              Dengar langsung dari HR yang pernah kerja bareng kami.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-7">
                <span className="text-3xl text-brand-deep font-display leading-none">&ldquo;</span>
                <p className="mt-3 text-base text-ink leading-relaxed">{t.quote}</p>
                <div className="mt-6 pt-5 border-t border-divider flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-deep font-display text-sm">
                    {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-slate">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="container-1280 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
            Mau jadi client berikutnya?
          </h2>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
            Free proposal dalam 24 jam. Briefing call 15 menit untuk align scope.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">
              Request Proposal<ArrowRight size={16} />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">
              Lihat case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
