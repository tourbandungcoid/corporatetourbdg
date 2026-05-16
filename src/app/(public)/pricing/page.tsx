import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { ArrowRight, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  articleSchema,
  serviceSchema,
  faqPageSchema,
  howToSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Harga Corporate Outing Bandung 2026 — 4 Tier Pricing Transparent dengan Breakdown",
  description:
    "Pricing transparent corporate outing Bandung — 4 tier (Foundation Rp 1.5jt/pax, Elevated Rp 2.5jt, Signature Rp 4.5jt, Bespoke Rp 7jt+) dengan line-item breakdown lengkap. Bukan paket murah misterius.",
  alternates: { canonical: `${SITE.url}/pricing` },
  openGraph: {
    title: "Harga Corporate Outing Bandung 2026 — 4 Tier Pricing Transparent",
    description:
      "4 tier pricing transparent untuk corporate outing Bandung. Line-item breakdown.",
    url: `${SITE.url}/pricing`,
    type: "article",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Corporate Outing Bandung 2026 — 4 Tier Transparent",
    description: "4 tier pricing corporate outing Bandung dengan line-item breakdown. Foundation Rp 1,5 jt — Bespoke Rp 7 jt+.",
    images: [IMAGES.heroMain.src],
  },
};

type Tier = {
  name: string;
  rangeLow: number;
  rangeHigh: number;
  rangeLabel: string;
  whoFor: string;
  paxRange: string;
  duration: string;
  venueExamples: string[];
  includes: string[];
  notIncludes: string[];
  whenNotFit: string;
};

const TIERS: Tier[] = [
  {
    name: "Foundation",
    rangeLow: 1.5,
    rangeHigh: 2.5,
    rangeLabel: "Rp 1.5–2.5 jt/pax",
    whoFor:
      "Quarterly bonding rutin, 1-day refresh, team building basic. Cocok untuk grup yang sudah saling kenal.",
    paxRange: "30–80 pax",
    duration: "1-day atau 1D1N",
    venueExamples: [
      "Villa standar Lembang / Ciwidey",
      "Outdoor camp dengan canopy + lapangan",
      "Resort budget di area pegunungan",
    ],
    includes: [
      "Venue rental (8–10 jam)",
      "F&B 3x: welcome snack + lunch + coffee break",
      "Activity standar (1–2 sesi outbound atau team game)",
      "MC + sound system basic",
      "Transportation lokal (shuttle bus)",
      "First aid + safety crew on-site",
      "Insurance personal accident basic",
      "Project management 7Summits team",
    ],
    notIncludes: [
      "Hotel berbintang / villa premium",
      "Live band atau DJ",
      "Awarding ceremony dengan stage premium",
      "Professional photo + video documentation",
      "Branded merch (kaos, swag bag)",
      "Drone aerial footage",
    ],
    whenNotFit:
      "Tidak cocok untuk annual gathering formal, celebration milestone besar, atau executive offsite premium.",
  },
  {
    name: "Elevated",
    rangeLow: 2.5,
    rangeHigh: 4.5,
    rangeLabel: "Rp 2.5–4.5 jt/pax",
    whoFor:
      "Annual employee gathering standar, kick-off meeting, mid-year team event. Sweet spot untuk grup mainstream.",
    paxRange: "80–200 pax",
    duration: "2D1N",
    venueExamples: [
      "Resort tier-2 / tier-3 Lembang",
      "Villa premium cluster (2–4 villa)",
      "Eco-lodge dengan ballroom",
    ],
    includes: [
      "Semua dari Foundation",
      "Akomodasi 1 malam (2–3 pax per kamar)",
      "F&B 5x: welcome + lunch + dinner + breakfast + snack",
      "Professional MC + sound system premium",
      "Photo + video dokumentasi (1 fotografer + 1 videographer)",
      "Themed dinner concept (1 tema curated)",
      "Awarding segment dengan stage + lighting",
      "Branded printed materials (banner, ID card)",
      "Insurance event dengan coverage personal accident",
    ],
    notIncludes: [
      "Hotel berbintang 4/5",
      "Live band profesional",
      "Drone aerial dokumentasi",
      "Customized swag merchandise",
      "Private chef / curated F&B",
    ],
    whenNotFit:
      "Kalau audience expect hotel berbintang dengan brand premium recognition, naik ke Signature tier.",
  },
  {
    name: "Signature",
    rangeLow: 4.5,
    rangeHigh: 7,
    rangeLabel: "Rp 4.5–7 jt/pax",
    whoFor:
      "Corporate gathering premium tahunan, anniversary perusahaan, awarding night untuk top performer.",
    paxRange: "100–300 pax",
    duration: "3D2N",
    venueExamples: [
      "Hotel berbintang Lembang",
      "Premium villa cluster (4+ villa heritage)",
      "Eco-lodge premium dengan facility resort",
    ],
    includes: [
      "Semua dari Elevated",
      "Akomodasi 2 malam (2 pax per kamar premium)",
      "F&B 8x: gala dinner formal + curated breakfast",
      "Live band profesional 1 malam + DJ 1 malam",
      "Stage gala lengkap dengan lighting + LED screen",
      "Drone aerial dokumentasi (highlight reel + group shot)",
      "Customized swag merchandise (kaos premium + bag)",
      "Activity premium (cooking class chef, cultural workshop)",
      "Insurance event dengan coverage extended",
    ],
    notIncludes: [
      "Private chef tasting menu kurasi",
      "Helicopter or special access transport",
      "Executive coaching session 1-on-1",
      "White-glove concierge per peserta",
    ],
    whenNotFit:
      "Untuk C-suite intimate retreat 8–25 pax dengan privacy guarantee, naik ke Bespoke.",
  },
  {
    name: "Bespoke",
    rangeLow: 7,
    rangeHigh: 15,
    rangeLabel: "Rp 7 jt+/pax",
    whoFor:
      "Executive offsite C-suite, leadership retreat, atau strategic planning intimate session.",
    paxRange: "8–25 pax",
    duration: "2D1N atau 3D2N",
    venueExamples: [
      "Heritage villa private eksklusif",
      "Eco-lodge premium di Pangalengan / Ciwidey",
      "Private estate dengan staff exclusive use",
    ],
    includes: [
      "Semua dari Signature",
      "Akomodasi 1 pax per kamar (privacy guarantee)",
      "Private chef tasting menu (3 course minimum)",
      "Executive coach / facilitator profesional sertifikasi",
      "White-glove concierge service",
      "Strategic workshop facility (whiteboard, breakout room)",
      "Premium ground transport (sedan eksekutif)",
      "Photographer + videographer dedicated full-time",
      "Bespoke welcome amenity + departure gift",
      "Confidentiality NDA + privacy protocol",
    ],
    notIncludes: [
      "International venue (kami fokus Jawa Barat)",
      "Multi-week residential program (max 5 hari)",
    ],
    whenNotFit:
      "Tidak cocok untuk grup besar 100+ pax. Untuk grup besar premium, Signature tier lebih efisien per-pax.",
  },
];

const FAQS = [
  {
    question: "Kenapa range pricing-nya cukup lebar di setiap tier?",
    answer:
      "Karena variabel utama: pax size, venue specific yang dipick (premium vs standar di tier yang sama), duration, dan musim (high season vs low). Setelah discovery brief, kami quote di titik spesifik dalam range — bukan generic.",
  },
  {
    question: "Apa termasuk transportasi dari Jakarta ke Bandung?",
    answer:
      "Tipikal include transportasi lokal di Bandung (shuttle antar venue). Untuk transportasi Jakarta–Bandung pulang-pergi, biasanya add-on tergantung mode (bus charter, kereta, atau peserta bawa kendaraan sendiri).",
  },
  {
    question: "Apakah pricing ini sudah include PPN?",
    answer:
      "Tidak — pricing exclude PPN 11%. PPN ditambahkan terpisah dalam invoice untuk transparency cost dan kemudahan tax reconciliation di sisi corporate client.",
  },
  {
    question: "Bagaimana kalau saya butuh tier hybrid (mix antara dua tier)?",
    answer:
      "Sangat memungkinkan. Misal: Elevated tier dengan upgrade venue ke Signature, atau Signature dengan downgrade F&B ke Elevated. Diskusi via discovery brief, kami custom.",
  },
  {
    question: "Apakah ada early bird discount atau group discount?",
    answer:
      "Kami tidak operate dengan model discount karena pricing kami sudah transparent line-item — discount berarti potong service tertentu, bukan markup misterius. Kalau lo butuh efisiensi, ambil tier yang lebih fit (misal Elevated daripada Signature) atau kompres scope.",
  },
];

export default function PricingPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Pricing", url: `${SITE.url}/pricing` },
    ]),
    articleSchema({
      headline: "Pricing & Transparent Breakdown — Corporate Outing Bandung",
      description:
        "4 tier pricing transparent untuk corporate outing di Bandung dengan line-item breakdown.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: "/pricing",
    }),
    serviceSchema({
      name: "Corporate Outing Bandung — Transparent Pricing",
      description:
        "Layanan corporate outing di Bandung dengan 4 tier pricing transparan dan line-item breakdown per komponen. Foundation Rp 1,5–2,5 jt/pax hingga Bespoke Rp 7 jt+/pax.",
      priceRange: "Rp 1.500.000 - Rp 15.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Menentukan Budget Corporate Outing yang Tepat",
      description:
        "4 langkah untuk memilih tier budget corporate outing yang sesuai dengan skala, objective, dan kapasitas finansial perusahaan.",
      steps: [
        {
          name: "Tentukan Skala Pax dan Format Event",
          text: "Hitung jumlah peserta realistis (bukan undangan maksimal) dan format: 1 Day, 2D1N, atau 3D2N. Skala pax dan durasi adalah dua variable terbesar dalam total budget.",
        },
        {
          name: "Pilih Tier Berdasarkan Outcome yang Diharapkan",
          text: "Foundation (Rp 1,5–2,5 jt/pax): casual refresh 30–80 pax. Elevated (Rp 2,5–4,5 jt/pax): annual outing sweet spot. Signature (Rp 4,5–7 jt/pax): marquee production event. Bespoke (Rp 7 jt+): executive offsite fully custom.",
        },
        {
          name: "Hitung Total dengan Contingency dan PPN",
          text: "Formula: (cost/pax × jumlah pax) + 8% contingency + 11% PPN. Contoh: 100 pax × Rp 3 jt = Rp 300 jt base + Rp 24 jt contingency + PPN ≈ total Rp 358 juta.",
        },
        {
          name: "Bandingkan Budget dengan Cost Turnover sebagai Justifikasi ROI",
          text: "Cost replace 1 karyawan = 50–200% annual salary. Jika outing mencegah 1–2 resignation, ROI sudah break-even. Frame ini untuk presentasi ke CFO atau direksi yang skeptis terhadap budget outing.",
        },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Pricing transparent. Bukan paket misterius."
          description="4 tier dengan line-item breakdown — apa yang termasuk + apa yang tidak. Pricing range per-pax + scope eksplisit. Tidak ada markup tersembunyi."
        />

        {/* Stat strip */}
        <section className="bg-paper border-b border-divider py-8">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate">
              <span><strong className="text-ink tabular">4</strong> tier</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Rp 1.5 jt–Rp 15 jt+/pax</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Bandung &amp; Jawa Barat</span>
            </div>
            <GoogleReviewsBadge variant="compact" />
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Corporate outing di Bandung tersedia dalam{" "}
                <strong>4 tier pricing</strong>: Foundation{" "}
                <strong>Rp 1,5–2,5 jt/pax</strong> (casual 1-day, 30–80 pax),
                Elevated <strong>Rp 2,5–4,5 jt/pax</strong> (annual outing
                2D1N, sweet spot mayoritas klien), Signature{" "}
                <strong>Rp 4,5–7 jt/pax</strong> (marquee event dengan
                production), Bespoke <strong>Rp 7 jt+/pax</strong> (executive
                offsite fully custom). Semua harga{" "}
                <strong>exclude PPN 11%</strong>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {[
                  "Foundation: Rp 1,5–2,5 jt/pax",
                  "Elevated: Rp 2,5–4,5 jt/pax",
                  "Signature: Rp 4,5–7 jt/pax",
                  "Bespoke: Rp 7 jt+/pax",
                  "Exclude PPN 11%",
                ].map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-slate">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/quick-quote"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Hitung estimasi budget
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/faq/budget"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  FAQ budget lengkap →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why transparent */}
        <section className="py-14 md:py-16 border-b border-divider">
          <div className="container-1280">
            <div className="grid gap-10 lg:grid-cols-3 items-start">
              <div className="lg:col-span-1">
                <span className="eyebrow-brand">Why transparent</span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                  Vendor menyembunyikan biaya. Itu masalahnya.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 text-base md:text-lg text-slate leading-relaxed">
                <p>
                  Mayoritas vendor quote total package tanpa breakdown. &quot;All included&quot;. Hasilnya: HR susah justify ke finance + susah compare vendor lain apel-ke-apel.
                </p>
                <p>
                  Kami publish range pricing + scope line-item di sini biar lo bisa estimate sebelum bahkan ngomong sama kami. Setelah discovery brief, kami quote di titik spesifik dalam range — dengan breakdown line-item yang sama transparent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tier cards */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="space-y-6">
              {TIERS.map((t, i) => (
                <article
                  key={t.name}
                  id={t.name.toLowerCase()}
                  className="scroll-mt-32 rounded-3xl border border-border bg-paper p-7 md:p-10 hover:border-ink-soft transition-colors"
                >
                  <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
                    {/* Left: Header */}
                    <div>
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="font-display text-3xl md:text-4xl text-brand-deep tabular leading-none">
                          {(i + 1).toString().padStart(2, "0")}
                        </span>
                        <p className="eyebrow-brand">Tier {i + 1}</p>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                        {t.name}
                      </h3>
                      <p className="mt-3 font-mono text-base text-brand-deep tabular">
                        {t.rangeLabel}
                      </p>
                      <div className="mt-5 space-y-2 text-sm">
                        <p>
                          <span className="text-slate-mute">Pax: </span>
                          <span className="text-ink">{t.paxRange}</span>
                        </p>
                        <p>
                          <span className="text-slate-mute">Duration: </span>
                          <span className="text-ink">{t.duration}</span>
                        </p>
                      </div>
                      <p className="mt-5 text-sm text-slate leading-relaxed">
                        {t.whoFor}
                      </p>
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-mute font-medium mb-3">
                          Venue tipikal
                        </p>
                        <ul className="grid gap-1.5 sm:grid-cols-2 text-sm text-slate">
                          {t.venueExamples.map((v) => (
                            <li key={v} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-warm flex-shrink-0" />
                              <span>{v}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-brand-deep font-medium mb-3">
                            ✓ Includes
                          </p>
                          <ul className="space-y-1.5 text-sm text-slate">
                            {t.includes.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-brand flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-mute font-medium mb-3">
                            × Tidak include
                          </p>
                          <ul className="space-y-1.5 text-sm text-slate">
                            {t.notIncludes.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-mute flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-cream/40 border border-divider p-4">
                        <p className="text-xs uppercase tracking-wider text-slate-mute font-medium mb-1.5">
                          Kapan tier ini NOT fit
                        </p>
                        <p className="text-sm text-slate leading-relaxed">
                          {t.whenNotFit}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What's always included */}
        <section className="py-14 md:py-16 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="eyebrow-brand">Always included</span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                  Selalu termasuk — semua tier.
                </h2>
                <p className="mt-4 text-base text-slate leading-relaxed max-w-2xl mx-auto">
                  Beberapa hal yang vendor lain charge sebagai &quot;add-on premium&quot; — kami include sebagai baseline professional standard.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 mb-8">
                {[
                  ["Discovery brief 60–90 menit", "Sebelum quoting, kami brief intensive untuk articulate objective."],
                  ["Risk register terdokumentasi", "Risk 3-tier classification + RS partner + indoor backup plan."],
                  ["Pricing breakdown line-item", "Setiap line cost di-disclose. Markup transparent."],
                  ["Post-event report", "Attendance, NPS, photo deliverables, invoice reconciliation."],
                  ["Single point of contact", "Field commander sama dari brief sampai closing — bukan rotating freelance."],
                  ["Contract dengan force majeure clause", "Refund schedule + SLA komunikasi explicit."],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border bg-paper p-5"
                  >
                    <p className="font-display text-base text-ink mb-1">✓ {title}</p>
                    <p className="text-sm text-slate leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-brand">Pricing FAQ</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                Pertanyaan paling sering soal pricing.
              </h2>
            </div>
            <div className="max-w-4xl space-y-3">
              {FAQS.map((q, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors"
                >
                  <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg md:text-xl text-ink leading-snug">
                      {q.question}
                    </h3>
                    <span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate leading-relaxed">{q.answer}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate">
              Lihat juga:{" "}
              <Link href="/faq/budget" className="text-brand-deep hover:underline">FAQ Budget & Investasi</Link>
              {" · "}
              <Link href="/faq/outcome" className="text-brand-deep hover:underline">FAQ ROI & Outcome</Link>
              {" · "}
              <Link href="/faq/vendor" className="text-brand-deep hover:underline">FAQ Vendor Selection</Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Mau quote exact untuk scope lo?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Free 15-menit discovery brief. Setelahnya, lo dapat proposal dengan breakdown line-item — pricing spesifik dalam tier range, bukan generic.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Request Proposal <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("pricing question")}
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
          message="Quote exact dengan line-item breakdown — free 15 menit discovery brief."
          context="pricing"
        />
      </main>
    </>
  );
}
