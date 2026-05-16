import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  articleSchema,
  faqPageSchema,
} from "@/lib/schema";
import {
  ArrowRight,
  Sparkle,
  IconGathering,
  IconTeamBuilding,
  IconEmployee,
  IconRetreat,
  IconLeadership,
  IconExecutive,
  IconIncentive,
  IconAnnual,
  IconMice,
  IconGlamping,
} from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Corporate Event Services Bandung — Team Building, Gathering & Retreat",
  description:
    "10 program corporate event yang siap di-customize — company gathering, team building, executive offsite, dan lainnya di Bandung & Jawa Barat.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Corporate Event Services Bandung — Team Building, Gathering & Retreat",
    description:
      "10 corporate event services dengan pax range dan starting price transparent.",
    url: `${SITE.url}/services`,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Services Bandung — Team Building, Gathering & Retreat",
    description: "10 program corporate event Bandung — gathering, team building, executive offsite. Specialist B2B.",
    images: [IMAGES.heroMain.src],
  },
};

const SERVICES = [
  {
    slug: "company-gathering",
    title: "Company Gathering",
    short: "Annual gathering atau quarterly meetup untuk tim 50–800 pax.",
    long: "Marquee event untuk tim — agenda formal, casual moments, networking time, dan reward segments. Kami design alur acara, MC, talent, dan production untuk impact maximum.",
    Icon: IconGathering,
    paxRange: "50–800",
    duration: "1–3 days",
    priceFrom: "Rp 1.8 jt/pax",
  },
  {
    slug: "team-building",
    title: "Team Building",
    short: "Outbound, indoor, atau workshop-based — di-design dari objective tim.",
    long: "Bukan just games. Activity-nya di-frame untuk hit specific team outcomes — komunikasi, problem solving, trust, atau alignment. Format: outbound adventure, indoor workshop, atau hybrid.",
    Icon: IconTeamBuilding,
    paxRange: "20–500",
    duration: "Half / Full Day",
    priceFrom: "Rp 1.2 jt/pax",
  },
  {
    slug: "employee-gathering",
    title: "Employee Gathering",
    short: "Refreshing + team bonding di venue dengan vibe yang pas.",
    long: "Lebih casual dari company gathering — focus engagement dan bonding informal. Cocok untuk quarterly atau mid-year refresh. Tim balik ke kantor dengan energy berbeda.",
    Icon: IconEmployee,
    paxRange: "30–300",
    duration: "1D / 2D1N",
    priceFrom: "Rp 1.5 jt/pax",
  },
  {
    slug: "corporate-retreat",
    title: "Corporate Retreat",
    short: "Multi-day retreat untuk deep work atau cultural reset.",
    long: "Strategic planning, leadership alignment, atau post-merger integration. Setting tenang, schedule yang punya breathing room. Bukan event — proper retreat dengan structured time.",
    Icon: IconRetreat,
    paxRange: "10–80",
    duration: "2D1N – 4D3N",
    priceFrom: "Rp 3.5 jt/pax",
  },
  {
    slug: "leadership-camp",
    title: "Leadership Camp",
    short: "Leadership development untuk middle-to-senior management.",
    long: "Program development dengan certified facilitator. Cohort experience untuk people manager, head, atau director. Kombinasi outdoor challenge + classroom + reflection.",
    Icon: IconLeadership,
    paxRange: "12–40",
    duration: "2D1N – 3D2N",
    priceFrom: "Rp 4 jt/pax",
  },
  {
    slug: "executive-offsite",
    title: "Executive Offsite",
    short: "C-level offsite di premium villa. Discreet, premium, focused.",
    long: "Boardroom strategi outside boardroom. Setting private, F&B premium, agenda fokus. Format paling sering: 1 day intensive atau 2D1N dengan dinner discussion.",
    Icon: IconExecutive,
    paxRange: "5–20",
    duration: "1D / 2D1N",
    priceFrom: "Rp 6.5 jt/pax",
  },
  {
    slug: "incentive-trip",
    title: "Incentive Trip",
    short: "Reward program untuk top performers — destination experience.",
    long: "Lebih dari reward perks — experience yang inget seumur hidup. Bandung exclusive accommodations, premium activities, F&B yang memorable. Pesan ke top performers: kami invest di kalian.",
    Icon: IconIncentive,
    paxRange: "20–150",
    duration: "2D1N – 3D2N",
    priceFrom: "Rp 4.5 jt/pax",
  },
  {
    slug: "annual-company-trip",
    title: "Annual Company Trip",
    short: "Big annual moment untuk seluruh perusahaan. Kami handle complexity.",
    long: "Logistically complex — multi-bus transport, group coordination, dietary mapping, parallel activity tracks. Kami sudah handle 1.200 pax 3-day. Skala tinggal nambah, methodology sama.",
    Icon: IconAnnual,
    paxRange: "100–2.000",
    duration: "2D1N – 4D3N",
    priceFrom: "Rp 2.2 jt/pax",
  },
  {
    slug: "mice",
    title: "MICE",
    short: "Meeting, Incentive, Conference, Exhibition — full-stack production.",
    long: "Conference dengan corporate angle — stage production, AV, simultaneous translation kalau perlu, multi-session room coordination. Bisa standalone atau gabung dengan corporate gathering format.",
    Icon: IconMice,
    paxRange: "100–500",
    duration: "1–3 days",
    priceFrom: "Rp 3 jt/pax",
  },
  {
    slug: "glamping-corporate",
    title: "Glamping Corporate",
    short: "Unique outdoor experience tanpa kompromi kenyamanan.",
    long: "Differentiator untuk tim yang mau experience berbeda. Tenda premium, F&B fine dining outdoor, bonfire dinner. Cocok untuk team bonding, leadership retreat, atau quarterly milestone celebration.",
    Icon: IconGlamping,
    paxRange: "20–80",
    duration: "1D2N",
    priceFrom: "Rp 2.5 jt/pax",
  },
];

export default function ServicesPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Services", url: `${SITE.url}/services` },
    ]),
    articleSchema({
      headline: "Corporate Event Services Bandung — Team Building, Gathering & Retreat",
      alternativeHeadline: "10 Layanan Corporate Event Bandung: Outing, Team Building, MICE, Glamping, Executive Offsite",
      description: "10 program corporate event yang siap di-customize — company gathering, team building, executive offsite, dan lainnya di Bandung & Jawa Barat. Specialist B2B sejak 2018.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/services",
      aboutService: "Corporate Event Services Bandung",
      aboutServiceUrl: `${SITE.url}/outing-kantor-bandung`,
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        "jasa corporate event bandung",
        "program team building bandung",
        "layanan company gathering jawa barat",
        "vendor executive offsite bandung",
        "paket outing kantor bandung",
        "mice corporate bandung",
        "glamping corporate jawa barat",
      ],
    }),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE.url}/services#webpage`,
      name: "Corporate Event Services",
      url: `${SITE.url}/services`,
      inLanguage: "id-ID",
      isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url },
      mainEntity: {
        "@type": "ItemList",
        "@id": `${SITE.url}/services#itemlist`,
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: SERVICES.length,
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            "@id": `${SITE.url}/services/${s.slug}#service`,
            name: s.title,
            url: `${SITE.url}/services/${s.slug}`,
            description: s.short,
            provider: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: "7Summits Travel", url: SITE.url },
          },
        })),
      },
    },
    faqPageSchema([
      { question: "Apa saja layanan corporate event yang tersedia di TourBandung Corporate?", answer: "10 program: (1) Company Gathering — annual event 50–800 pax. (2) Team Building — outbound, indoor, hybrid. (3) Employee Gathering — engagement-focused. (4) Corporate Retreat — strategic 2–3 hari. (5) Leadership Camp — leadership development program. (6) Executive Offsite — C-level private retreat. (7) Incentive Trip — top performer reward. (8) Annual Company Trip — large-scale year-end. (9) MICE — Meeting, Incentive, Conference, Exhibition. (10) Glamping Corporate — nature immersive di Bandung area." },
      { question: "Apakah semua program bisa dikustomisasi atau harus pakai paket yang tersedia?", answer: "Semua program bisa dikustomisasi — paket yang tersedia di katalog adalah starting point dan referensi budget, bukan menu fixed. Brief Anda menjadi dasar proposal custom: objective, pax, tanggal, budget range, dan constraint spesifik akan menentukan desain program yang unik untuk perusahaan Anda." },
      { question: "Berapa pax minimum dan maksimum yang bisa di-handle TourBandung Corporate?", answer: "Optimal dari 30 pax ke atas. Range paling umum: 50–500 pax. Untuk executive offsite atau leadership retreat yang lebih intimate: 15–50 pax. Maximum yang pernah di-handle: 800+ pax untuk annual employee gathering. Di bawah 30 pax, unit economics kurang optimal — konsultasi dahulu dengan senior planner." },
      { question: "Berapa harga layanan corporate event TourBandung Corporate?", answer: "4-tier pricing: Foundation (1D, Rp 1.5–2.5 jt/pax, 30–80 pax), Elevated (2D1N, Rp 2.5–4.5 jt/pax, 100–300 pax), Signature (2D1N–3D2N, Rp 4.5–7 jt/pax, 100–500 pax), Bespoke (3D2N+, Rp 7 jt+/pax, executive level). Semua termasuk venue, F&B, activity, transport lokal, PM, dan contingency. Detail breakdown di /pricing." },
    ], `${SITE.url}/services`)
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="What we do"
        title="10 program corporate yang siap di-customize."
        description="Dari intimate retreat 8 pax sampai mass gathering 2.000 pax — semua di-design dari brief tim lo, bukan paket template. Lihat scope, target tim, dan starting price untuk masing-masing program."
      />

      <section className="py-8 border-b border-divider bg-cream/30">
        <div className="container-1280">
          <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
            <div className="flex items-center gap-2 mb-4">
              <Sparkle size={16} className="text-brand" />
              <p className="eyebrow-brand">Quick Answer</p>
            </div>
            <p className="text-base md:text-lg text-ink leading-relaxed">
              TourBandung Corporate menyediakan <strong>10 program corporate event di Bandung</strong> — dari <strong>team building (mulai Rp 1,5 jt/pax)</strong> hingga <strong>executive offsite (Rp 5 jt+/pax)</strong>. Semua dapat di-customize berdasarkan pax, budget, dan objective tim. Spesialisasi B2B murni dengan dedicated project manager di setiap event.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-1280">
          <div className="grid gap-4 md:grid-cols-2">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative rounded-2xl border border-border bg-paper p-7 md:p-8 flex flex-col transition-all hover:border-ink-soft hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,31,26,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light/70 text-brand-deep">
                    <service.Icon size={22} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-mute mt-1">
                    {service.duration}
                  </p>
                </div>

                <h2 className="font-display mt-6 text-2xl md:text-3xl text-ink leading-tight">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm text-slate leading-relaxed flex-1">
                  {service.long}
                </p>

                <div className="mt-6 pt-5 border-t border-divider flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-mute">Pax · Mulai dari</span>
                    <span className="text-sm font-medium text-ink">
                      {service.paxRange} pax · {service.priceFrom}
                    </span>
                  </div>
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border group-hover:bg-ink group-hover:border-ink group-hover:text-paper transition-colors">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 md:py-24 bg-ink text-cream">
        <div className="container-1280 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
            Belum sure service mana yang fit?
          </h2>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
            Free briefing call 15 menit dengan senior planner. Kami align scope,
            timeline, dan budget — sebelum lo decide mana yang masuk.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/proposal/request"
              className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-7 h-12 text-sm font-medium hover:bg-brand hover:text-paper transition-colors"
            >
              Request Proposal
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/proposal/book-consultation"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper/15 transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
