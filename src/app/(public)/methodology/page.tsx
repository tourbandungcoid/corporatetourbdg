import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { IMAGES } from "@/lib/drive-images";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  articleSchema,
  howToSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Methodology — 3 Framework Corporate Outing Design TourBandung",
  description:
    "3 named framework yang kami pakai untuk design corporate outing outcome-driven: 5-Pillar Design™, Bandung Outing Tier System™ (BOTS), dan Outcome ROI Framework. Sequential, transparent, measurable.",
  alternates: { canonical: `${SITE.url}/methodology` },
  openGraph: {
    title: "Methodology — TourBandung Corporate",
    description:
      "Framework yang kami pakai untuk design corporate outing outcome-driven. 5-Pillar Design™ + Bandung Outing Tier System™ + ROI Framework.",
    url: `${SITE.url}/methodology`,
    type: "article",
    publishedTime: "2026-05-12",
    modifiedTime: "2026-05-16",
    authors: [`${SITE.url}/team#andre-pratama`],
    section: "Methodology",
    tags: ["methodology corporate outing bandung", "5-pillar design framework", "outcome-driven corporate event", "bots bandung outing tier system"],
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Methodology — 3 Framework Corporate Outing Design TourBandung",
    description: "5-Pillar Design™, BOTS, dan ROI Framework. Sequential, transparent, measurable. TourBandung Corporate.",
    images: [IMAGES.heroMain.src],
  },
};

const PILLARS = [
  {
    n: "01",
    name: "Objective Alignment",
    owner: "Sinta — Head of Strategy",
    summary: "Translate vague brief (\"bonding seru\") jadi articulated objective dengan measurable outcome.",
    deliverables: ["Discovery brief 60–90 menit", "Stakeholder alignment doc", "Pre-event baseline survey"],
  },
  {
    n: "02",
    name: "Audience Mapping",
    owner: "Sinta + Amelia",
    summary: "Demographic, fitness/mobility, dietary, religious, cultural diversity, first-timer vs repeat.",
    deliverables: ["Audience profile matrix", "Parallel activity track plan", "Dietary + accessibility plan"],
  },
  {
    n: "03",
    name: "Venue & Logistics Curation",
    owner: "Tio — Field Ops Lead",
    summary: "Venue picked by objective+audience, bukan dari katalog. Logistics + risk + medical proximity built-in.",
    deliverables: ["2 alternative venue dengan trade-off matrix", "Logistic flow doc", "Risk register"],
  },
  {
    n: "04",
    name: "Activity Architecture",
    owner: "Amelia — Senior Program Designer",
    summary: "Activity di-frame untuk hit outcome — bukan random fun. Energy curve + parallel tracks by audience.",
    deliverables: ["Program flow 30-min granularity", "MC + facilitator brief", "Backup indoor plan"],
  },
  {
    n: "05",
    name: "Outcome Measurement",
    owner: "Putri — Client Success Lead",
    summary: "Pre-event baseline + post-event 1-week survey + 6-month retention check. ROI delta yang CFO bisa relate.",
    deliverables: ["Post-event report", "NPS + engagement delta", "ROI reconciliation untuk HR → finance"],
  },
];

const TIERS = [
  {
    name: "Foundation",
    range: "Rp 1.5–2.5 jt/pax",
    fit: "Quarterly bonding 30–80 pax, 1-day refresh, team building basic",
    venue: "Villa standard, outdoor camp Lembang/Ciwidey",
    notNotInclude: "Premium F&B, video documentation, branded merch",
  },
  {
    name: "Elevated",
    range: "Rp 2.5–4.5 jt/pax",
    fit: "Annual employee gathering 80–200 pax, 2D1N standard",
    venue: "Resort tier-2/3, villa premium, eco-lodge",
    notNotInclude: "Professional MC, photo+video, themed dinner, awarding",
  },
  {
    name: "Signature",
    range: "Rp 4.5–7 jt/pax",
    fit: "Corporate gathering premium 100–300 pax, 3D2N",
    venue: "Hotel berbintang Lembang, premium villa cluster",
    notNotInclude: "Live band, gala dinner, customized swag, drone aerial",
  },
  {
    name: "Bespoke",
    range: "Rp 7 jt+/pax",
    fit: "Executive offsite C-suite 8–25 pax, leadership retreat",
    venue: "Heritage villa private, eco-lodge eksklusif, helicopter access",
    notNotInclude: "Private chef, executive coach, white-glove concierge",
  },
];

export default function MethodologyPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Methodology", url: `${SITE.url}/methodology` },
    ]),
    articleSchema({
      headline: "Methodology — 3 Named Framework dari 400+ Events",
      description:
        "5-Pillar Corporate Outing Design™, Bandung Outing Tier System™ (BOTS), dan Outcome ROI Framework yang kami pakai untuk setiap engagement.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/methodology",
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      aboutService: "Corporate Event Design Methodology Bandung",
      keywords: ["metodologi corporate event bandung", "framework corporate outing design", "5-pillar corporate outing", "bandung outing tier system BOTS", "ROI framework corporate event"],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        { type: "WebPage", name: "5-Pillar Corporate Outing Design™", url: `${SITE.url}/insights/5-pillar-corporate-outing-design` },
        { type: "WebPage", name: "Bandung Outing Tier System™", url: `${SITE.url}/insights/bandung-outing-tier-system` },
        { type: "WebPage", name: "Cara Justify Budget Outing ke Finance", url: `${SITE.url}/insights/justify-outing-budget-to-finance` },
        { type: "Person", name: "Andre Pratama", id: `${SITE.url}/team#andre-pratama`, url: `${SITE.url}/team#andre-pratama` },
        { type: "Person", name: "Sinta Rahmadhani", id: `${SITE.url}/team#sinta-rahmadhani`, url: `${SITE.url}/team#sinta-rahmadhani` },
      ],
    }),
    howToSchema({
      name: "Cara merancang corporate outing yang outcome-driven dengan 3 framework TourBandung",
      description:
        "3-framework approach yang kami pakai untuk setiap engagement corporate: dari objective alignment hingga ROI measurement post-event.",
      steps: [
        {
          name: "Framework 1 — 5-Pillar Corporate Outing Design™: Define objective",
          text: "Mulai dari objective alignment (bukan venue atau activity). 5 pilar sequential: Objective → Audience Profile → Venue & Logistics → Activity Architecture → Outcome Measurement. Tanpa objective yang clear, 4 pillar lain hanya opinion.",
        },
        {
          name: "Framework 2 — Bandung Outing Tier System™ (BOTS): Pilih tier budget",
          text: "4 tier pricing transparan: Foundation (Rp 1.5–2.5 jt/pax), Standard (Rp 2.5–4 jt/pax), Premium (Rp 4–6.5 jt/pax), Bespoke (Rp 6.5 jt+/pax). Setiap tier punya venue, F&B, activity, dan support level yang terdefinisi — bukan angka random.",
        },
        {
          name: "Framework 3 — Outcome ROI Framework: Measure dan justify investment",
          text: "3-layer ROI: Employee Retention (biaya rekrutmen yang dihindari), Productivity (engagement correlation), dan Collaboration (NPS internal pre/post). Output: post-event report dengan data siap dibawa ke CFO.",
        },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Methodology"
          title="3 framework yang membuat output kami repeatable."
          description="Setiap engagement masuk 3 framework yang sama — bukan ad-hoc per event. 5-Pillar Design™ untuk struktur, BOTS™ untuk pricing transparency, dan Outcome ROI Framework untuk justifikasi budget ke management."
        />

        {/* Stat strip */}
        <section className="bg-paper border-b border-divider py-8">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate">
              <span><strong className="text-ink tabular">3</strong> named framework</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline"><strong className="text-ink tabular">400+</strong> events validated</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Sequential, bukan parallel</span>
            </div>
            <GoogleReviewsBadge variant="compact" />
          </div>
        </section>

        {/* Framework 1: 5-Pillar */}
        <section className="py-16 md:py-24 border-b border-divider">
          <div className="container-1280">
            <div className="grid gap-10 lg:grid-cols-3 mb-12">
              <div className="lg:col-span-1">
                <span className="eyebrow-brand">Framework 01</span>
                <h2 className="font-display mt-3 text-3xl md:text-5xl text-ink leading-[1.05]">
                  5-Pillar Corporate Outing Design™
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 text-base md:text-lg text-slate leading-relaxed">
                <p>
                  Framework sequential 5-tahap untuk men-translate brief HR jadi corporate event yang outcome-driven. Setiap pilar adalah <em>prerequisite</em> untuk pilar berikutnya — tidak bisa skip ke venue (Pillar 3) tanpa objective (Pillar 1) clear dulu.
                </p>
                <p>
                  Tiap pilar punya owner internal — single point of accountability. Kalau ada gap di Pillar 5 (measurement), bukan finger-pointing antara field ops vs program designer.
                </p>
                <Link
                  href="/insights/5-pillar-corporate-outing-design"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep hover:text-brand"
                >
                  Baca artikel framework lengkap <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            <ol className="space-y-3">
              {PILLARS.map((p) => (
                <li
                  key={p.n}
                  className="rounded-2xl border border-border bg-paper p-6 md:p-7 hover:border-ink-soft transition-colors"
                >
                  <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] items-start">
                    <span className="font-display text-4xl md:text-5xl text-brand-deep tabular leading-none">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-slate leading-relaxed">
                        {p.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.deliverables.map((d) => (
                          <span
                            key={d}
                            className="inline-flex items-center rounded-full border border-border bg-cream/50 px-2.5 py-1 text-xs text-slate"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:text-right">
                      <p className="text-xs uppercase tracking-wider text-slate-mute mb-1">Owner</p>
                      <p className="text-sm text-ink font-medium">{p.owner}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Framework 2: BOTS */}
        <section className="py-16 md:py-24 border-b border-divider bg-cream/30">
          <div className="container-1280">
            <div className="grid gap-10 lg:grid-cols-3 mb-12">
              <div className="lg:col-span-1">
                <span className="eyebrow-brand">Framework 02</span>
                <h2 className="font-display mt-3 text-3xl md:text-5xl text-ink leading-[1.05]">
                  Bandung Outing Tier System™
                </h2>
                <p className="mt-3 text-sm font-mono text-slate-mute">BOTS</p>
              </div>
              <div className="lg:col-span-2 space-y-4 text-base md:text-lg text-slate leading-relaxed">
                <p>
                  Market corporate outing Bandung tidak transparent soal tier. Vendor advertise &quot;paket murah&quot; tanpa context — apakah Rp 1.2 jt/pax atau Rp 2.4 jt/pax sama-sama &quot;murah&quot;?
                </p>
                <p>
                  BOTS adalah 4-tier classification dari 400+ event yang kami delivered. Bukan &quot;tier lebih tinggi = lebih baik&quot; — tier yang <em>fit kebutuhan</em> = optimal. Quarterly refresh 50 pax di Bespoke = waste budget. Executive offsite 12 C-suite di Foundation = under-deliver.
                </p>
                <Link
                  href="/insights/bandung-outing-tier-system"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep hover:text-brand"
                >
                  Detail tier breakdown lengkap <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {TIERS.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-border bg-paper p-7 hover:border-ink-soft transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <h3 className="font-display text-2xl text-ink leading-tight">{t.name}</h3>
                    <span className="text-sm font-mono text-brand-deep tabular">{t.range}</span>
                  </div>
                  <p className="text-sm text-slate leading-relaxed mb-4">
                    <strong className="text-ink">Fit:</strong> {t.fit}
                  </p>
                  <div className="space-y-2 text-xs">
                    <p className="text-slate">
                      <span className="text-slate-mute">Venue typical: </span>{t.venue}
                    </p>
                    <p className="text-slate">
                      <span className="text-slate-mute">Includes signature: </span>{t.notNotInclude}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Framework 3: ROI */}
        <section className="py-16 md:py-24 border-b border-divider">
          <div className="container-1280">
            <div className="grid gap-10 lg:grid-cols-3 mb-12">
              <div className="lg:col-span-1">
                <span className="eyebrow-brand">Framework 03</span>
                <h2 className="font-display mt-3 text-3xl md:text-5xl text-ink leading-[1.05]">
                  Outcome ROI Framework
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 text-base md:text-lg text-slate leading-relaxed">
                <p>
                  Pertanyaan paling sering HR dapat dari finance/CFO: &quot;Why corporate outing 250 juta?&quot; Tanpa framework justifikasi, jawaban biasanya soft (&quot;bonding tim&quot;, &quot;engagement&quot;) yang gak quantifiable.
                </p>
                <p>
                  Framework ini convert soft outcome jadi financial impact yang CFO bisa relate.
                </p>
                <Link
                  href="/insights/justify-outing-budget-to-finance"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep hover:text-brand"
                >
                  Artikel lengkap dengan case calculation <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-paper p-8 md:p-12">
              <p className="text-xs uppercase tracking-wider text-slate-mute font-medium mb-6">
                Sample ROI calculation — 100 pax annual gathering
              </p>
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Stat label="Event investment" value="Rp 250 jt" sub="Elevated tier · 2D1N" />
                <Stat label="Attrition reduction" value="10%" sub="Pre vs post 12-month" />
                <Stat label="Retention saving" value="Rp 720 jt" sub="10% × 100 × Rp 8 jt × 9 bulan" />
              </div>
              <div className="pt-6 border-t border-divider">
                <p className="text-sm text-slate-mute mb-2">Net ROI</p>
                <p className="font-display text-4xl md:text-5xl text-brand-deep tabular leading-none">
                  2.9×
                </p>
                <p className="mt-3 text-sm text-slate max-w-xl leading-relaxed">
                  Itu angka yang bisa di-report ke CFO. Bukan &quot;tim seru&quot;.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sequential note */}
        <section className="py-14 bg-ink text-cream">
          <div className="container-1280">
            <div className="max-w-3xl">
              <p className="eyebrow-brand text-brand/90">Penting</p>
              <h2 className="font-display mt-3 text-2xl md:text-3xl text-paper leading-tight">
                Sequential, bukan parallel.
              </h2>
              <p className="mt-4 text-base md:text-lg text-cream/80 leading-relaxed">
                Vendor lain biasa skip Pillar 1 (objective) dan langsung ke Pillar 3 (venue) karena venue adalah yang HR tanya pertama. Hasilnya: venue cantik, activity random, outcome zero. Kami menolak design event tanpa briefing objective dulu — walaupun client urgent.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.02]">
              Brief lo mau lewat framework ini?
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate leading-relaxed">
              Free 15-menit discovery call. Kami brief lewat 5-Pillar, suggest tier yang fit, dan kasih draft ROI framework — semua sebelum kontrak.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-8 h-14 text-base font-medium hover:bg-brand-deep transition-colors"
              >
                Request Proposal <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("methodology")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-8 h-14 text-base font-medium hover:opacity-90 transition-opacity"
              >
                <Whatsapp size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        <StickyProposalBar
          message="Brief lewat 5-Pillar Design™ + ROI Framework — free, no commitment."
          context="methodology"
        />
      </main>
    </>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-slate-mute font-medium">{label}</p>
      <p className="mt-1 font-display text-3xl md:text-4xl text-ink tabular leading-none">{value}</p>
      <p className="mt-2 text-xs text-slate">{sub}</p>
    </div>
  );
}
