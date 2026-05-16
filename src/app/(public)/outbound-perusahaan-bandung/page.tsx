import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Sparkle,
  Whatsapp,
} from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { IMAGES } from "@/lib/drive-images";
import { STATS, buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
  serviceSchema,
  organizationSchema,
  localBusinessSchema,
  howToSchema,
} from "@/lib/schema";

const SLUG = "/outbound-perusahaan-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Outbound Perusahaan Bandung 2026: 3 Tier Adventure, Safety Standards, dan Lokasi Outdoor Terbaik",
  description:
    "Outbound perusahaan Bandung — 3 tier adventure (Light/Medium/Extreme), safety certified, 8 lokasi outdoor, insurance peserta included. Rp 1,5–3,5 jt/pax. ⭐ 4.9/5 · Proposal gratis 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Outbound Perusahaan Bandung — Adventure dengan Safety Standards",
    description:
      "Outdoor adventure outbound untuk corporate dengan safety standards profesional.",
    url: URL,
    type: "article",
    publishedTime: "2026-05-12",
    modifiedTime: "2026-05-16",
    authors: [`${SITE.url}/team#tio-mahesa`],
    section: "Outbound Perusahaan",
    tags: ["outbound perusahaan bandung", "outbound corporate bandung", "adventure team building bandung", "outbound outdoor jawa barat"],
    images: [{ url: IMAGES.offroad1.src, width: 1200, height: 630, alt: IMAGES.offroad1.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outbound Perusahaan Bandung — 3 Tier Adventure 2026",
    description: "Outdoor adventure outbound corporate Bandung. Safety certified, 8 lokasi outdoor. Rp 1,5–3,5 jt/pax.",
    images: [IMAGES.offroad1.src],
  },
};

const FAQS = [
  {
    question: "Berapa biaya outbound perusahaan per pax di Bandung?",
    answer:
      "Range Rp 1,5-3,5 juta/pax tergantung tier adventure dan durasi. Tier 1 Light outbound (half-day, low-impact) mulai Rp 1,5 jt/pax. Tier 2 Medium (full-day, multi-station) Rp 2-2,8 jt/pax. Tier 3 Extreme (2D1N adventure dengan rafting/rappelling) Rp 3-4 jt/pax. Sudah include insurance, certified instructor, equipment, F&B, transport, medical standby.",
  },
  {
    question: "Apa beda outbound dengan team building?",
    answer:
      "Team building lebih luas — bisa outdoor (outbound), indoor (workshop), atau hybrid. Outbound khusus outdoor adventure dengan physical activity dominant. Outbound adalah subset team building yang fokus pada experience challenge fisik dan natural environment. Tidak semua team building outbound, tapi semua outbound adalah team building.",
  },
  {
    question: "3-tier classification outbound itu apa?",
    answer:
      "Sistem kategorisasi physical risk + intensity yang kami pakai: (1) Tier 1 Light — low-impact, family-friendly, semua umur. Contoh: trust games, problem solving outdoor, navigation challenge. (2) Tier 2 Medium — moderate intensity, butuh basic fitness. Contoh: high ropes course, paintball, ATV. (3) Tier 3 Extreme — adventure tinggi, butuh basic athletic ability. Contoh: rafting class 2-3, rappelling, mountain biking technical.",
  },
  {
    question: "Bagaimana safety standards untuk outbound?",
    answer:
      "5 layer safety: (1) Certified instructor per activity (minimum 3 sertifikat: P3K, first responder, activity-specific cert), (2) Equipment standard internasional (helmet, harness, ropes maintained dan inspected), (3) Insurance peserta wajib (coverage Rp 50-200 jt/peserta), (4) Medical standby on-site (paramedik + ambulance ready), (5) Activity briefing + risk assessment per peserta sebelum aktivitas.",
  },
  {
    question: "Activity outbound paling populer di Bandung?",
    answer:
      "Top 8: (1) High ropes course (flying fox, burma bridge, web crossing) — kombinasi adventure + trust, (2) Paintball tactical scenario, (3) Off-road ATV/jeep adventure, (4) White water rafting (Sungai Cikandang atau Cisangkuy), (5) Mountain biking trail, (6) Outbond Olympic (multi-station challenge), (7) War games strategi, (8) Outdoor team navigation (orienteering).",
  },
  {
    question: "Cocok untuk peserta yang first-timer outbound?",
    answer:
      "Iya, dengan Tier 1 Light. Activity di-design accessible untuk semua physical level, focus pada team interaction bukan athletic challenge. Setiap activity ada modification option untuk peserta yang punya kondisi khusus (knee issue, vertigo, dll). Pre-event medical questionnaire wajib untuk identify special needs.",
  },
  {
    question: "Berapa pax minimum dan maximum untuk outbound?",
    answer:
      "Minimum 20 pax (di bawah ini activity kurang engaging karena pacing-nya off). Maximum 250 pax single-stream. Untuk 250+ pax, kami pakai parallel tracks — peserta dibagi 4-5 grup paralel dengan 4-5 activity berbeda rotasi sepanjang hari. Setup ini di-coordinate dengan multiple instructor teams.",
  },
  {
    question: "Lokasi outbound terbaik di Bandung?",
    answer:
      "Top 8: (1) Cikole Jayagiri (Lembang) — premium outbound ground multi-zone, (2) Maribaya — accessible, hutan pinus, (3) Lembang Adventure Park, (4) Bandung Treetop Adventure Park, (5) Cikidang Hill — Ciwidey forest, (6) Cisangkuy River — rafting + adventure, (7) Cibodas outdoor camp, (8) Bukit Patenggang — Ciwidey panoramic. Detail per venue di-share saat proposal.",
  },
  {
    question: "Bagaimana penanganan kalau peserta cedera saat outbound?",
    answer:
      "5-step protocol: (1) Immediate first aid by certified instructor on-site, (2) Paramedik standby evaluate severity (selalu ada di lokasi tier 2-3), (3) Ambulance evacuation kalau perlu (selalu standby di lokasi), (4) Rumah sakit terdekat: RS Adventist Bandung atau RS Borromeus (15-30 min dari lokasi outbound utama), (5) Insurance claim handling oleh tim kami (peserta tidak deal dengan paperwork).",
  },
  {
    question: "Apakah outbound bisa di-custom dengan corporate branding?",
    answer:
      "Iya, sangat possible. Custom elements: branded t-shirt untuk peserta, branded headband/scarf untuk team identity, kategori activity di-rename sesuai company value, photo backdrop dengan logo, video summary dengan branding. Tambahan production cost Rp 5-15 jt tergantung scope custom.",
  },
];

const TIERS = [
  {
    tier: "Light",
    risk: "Low",
    fitness: "Anyone, all ages",
    pricePax: "Rp 1,5-2,2 jt",
    examples: "Trust games, problem solving outdoor, orienteering, simple obstacle, navigation",
    bestFor: "First-timer outbound, mixed-age groups, family day",
  },
  {
    tier: "Medium",
    risk: "Moderate",
    fitness: "Basic fitness required",
    pricePax: "Rp 2-2,8 jt",
    examples: "High ropes course, paintball, ATV/jeep adventure, archery, war games",
    bestFor: "Standard team outbound, young-medium age workforce",
  },
  {
    tier: "Extreme",
    risk: "High",
    fitness: "Athletic ability required",
    pricePax: "Rp 3-4 jt",
    examples: "White water rafting class 2-3, rappelling, mountain biking technical, climbing",
    bestFor: "Adventure enthusiasts, sales reward trip, leadership challenge",
  },
];

const SAFETY_LAYERS = [
  {
    name: "Certified Instructors",
    detail:
      "Minimum 3 sertifikat per instructor: P3K (first aid), responder, dan activity-specific certification (rope work, water rescue, dll). Ratio instructor:peserta minimum 1:8 untuk tier 1, 1:6 untuk tier 2, 1:4 untuk tier 3.",
  },
  {
    name: "International Equipment Standard",
    detail:
      "Helmet, harness, ropes, dan equipment lain wajib certified standard internasional (UIAA, CE, ANSI). Daily inspection sebelum activity. Replacement schedule strict (helmet max 5 tahun, harness max 7 tahun, ropes max 5 tahun tergantung usage).",
  },
  {
    name: "Insurance Coverage",
    detail:
      "Setiap peserta covered by insurance: minimum Rp 50 juta untuk Tier 1-2, minimum Rp 200 juta untuk Tier 3. Coverage include accident, medical, hospitalization, hingga emergency evacuation. Claim process kami yang handle, peserta tidak perlu deal dengan paperwork.",
  },
  {
    name: "Medical Standby On-Site",
    detail:
      "Paramedik certified standby di lokasi untuk Tier 2 dan Tier 3 wajib. Ambulance ready untuk evacuation kalau perlu. Rumah sakit terdekat (15-30 min dari lokasi outbound) sudah confirmed accept emergency dari kami.",
  },
  {
    name: "Pre-Activity Briefing + Risk Assessment",
    detail:
      "Setiap peserta isi medical questionnaire pre-event (kondisi kesehatan, allergy, physical limitation). Briefing safety mandatory 15-20 min sebelum setiap activity, include do's-don'ts, signal, dan emergency procedure. Opt-out option tersedia untuk peserta yang ingin observasi.",
  },
];

export default function OutboundPerusahaanBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline:
        "Outbound Perusahaan Bandung 2026: 3 Tier Adventure, Safety Standards, dan Lokasi Outdoor Terbaik",
      description:
        "Outdoor adventure outbound untuk corporate Indonesia dengan 3-tier classification, safety standards, dan lokasi recommended di Bandung.",
      image: IMAGES.offroad1.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: SLUG,
      author: { name: "Tio Mahesa", role: "Lead Field Operations Manager" },
      aboutService: "Outbound Perusahaan Bandung",
      keywords: ["outbound perusahaan bandung", "outbound kantor bandung", "outbound corporate bandung", "paket outbound bandung", "vendor outbound perusahaan bandung", "outbound team building lembang"],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        { type: "Service", name: "Team Building", url: `${SITE.url}/services/team-building`, id: `${SITE.url}/services/team-building#service` },
        { type: "WebPage", name: "Team Building Bandung", url: `${SITE.url}/team-building-bandung` },
        { type: "WebPage", name: "Outing Kantor Bandung", url: `${SITE.url}/outing-kantor-bandung` },
        { type: "Place", name: "Lembang, Jawa Barat" },
      ],
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Outbound Perusahaan Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Outbound Perusahaan Bandung",
      description:
        "Outbound adventure outdoor untuk corporate dengan safety standards profesional di Bandung & Jawa Barat. 3-tier classification.",
      priceRange: "Rp 1.500.000 - Rp 4.000.000 per pax",
      url: URL,
    }),
    faqPageSchema(FAQS, URL),
    howToSchema({
      name: "Cara Memilih Program Outbound Perusahaan yang Aman di Bandung",
      description: "5 langkah untuk memilih dan menjalankan outbound perusahaan yang fun sekaligus aman dan sesuai kondisi tim.",
      steps: [
        { name: "Klasifikasi Kondisi Fisik Peserta", text: "Minta peserta isi pre-event health form: kondisi kesehatan, keterbatasan fisik, obat rutin, dan riwayat cedera. Dari data ini, tentukan tier aktivitas yang appropriate — Tier 1 Light untuk mix audience, Tier 2 Medium untuk tim aktif, Tier 3 Intense untuk voluntary." },
        { name: "Pilih Tier Outbound yang Sesuai", text: "Tier 1 Light (low-risk: flying fox pendek, water game, trekking ringan) untuk semua audience. Tier 2 Medium (rafting Grade 2-3, paintball, high ropes) untuk peserta sehat tanpa kontraindikasi. Tier 3 Intense (canyoning, extreme challenge) hanya untuk program khusus adventure." },
        { name: "Verifikasi Safety SOP Vendor", text: "Minta vendor show: (1) sertifikasi instruktur per aktivitas, (2) rasio instruktur per peserta (minimal 1:10), (3) medical standby onsite, (4) protokol evakuasi, (5) checklist peralatan safety. Vendor tanpa dokumentasi ini adalah risiko liability bagi perusahaan." },
        { name: "Rancang Rundown dengan Buffer Safety", text: "Jangan padatkan jadwal. Buffer 15-20 menit antar aktivitas untuk transisi, hydration stop, dan briefing safety. Peak energy activities (high intensity) di pagi hari; bonding reflective di sore hari setelah makan siang." },
        { name: "Debrief & Capture Learning", text: "Setiap sesi outbound harus diakhiri dengan debrief 15-20 menit — hubungkan pengalaman lapangan dengan pesan team building yang relevan. Fasilitator harus bisa bridge: 'Gimana ini relate ke kerja kita sehari-hari?' Ini yang membedakan outbound meaningfully dari sekedar olahraga bersama." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />

      <main>
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.offroad1.src}
              alt="Outbound perusahaan di Bandung — adventure activity team building"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/95" />
          </div>

          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Outbound Perusahaan Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Adventure Guide · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Outbound Perusahaan Bandung 2026:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Adventure dengan safety standards.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                3-tier classification (Light, Medium, Extreme), 5-layer safety
                protocol, dan 8 lokasi outdoor recommended. Insurance + medical
                standby + certified instructor — semua include.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Outbound perusahaan di Bandung range{" "}
                <strong>Rp 1,5-3,5 juta/pax</strong> tergantung tier adventure.{" "}
                <strong>Tier 1 Light</strong> (low-impact, semua umur) mulai
                Rp 1,5 jt. <strong>Tier 2 Medium</strong> (high ropes,
                paintball, ATV) Rp 2-2,8 jt. <strong>Tier 3 Extreme</strong>{" "}
                (rafting, rappelling, mountain bike) Rp 3-4 jt. Semua tier
                include <strong>insurance, certified instructor, equipment,
                medical standby</strong>. Min pax 20, sweet spot 50-150.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 1,5-3,5 jt/pax</Tag>
                <Tag>Pax: 20-250</Tag>
                <Tag>Tier: Light · Medium · Extreme</Tag>
                <Tag>Safety: 5-layer protocol</Tag>
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request Free Proposal
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#tiers"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat 3 tier
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Table of contents</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#vs-tb", "Outbound vs team building"],
                ["#tiers", "3 tier outbound classification"],
                ["#safety", "5-layer safety protocol"],
                ["#activity", "Top 8 outbound activity"],
                ["#sample", "Sample rundown 1-day"],
                ["#locations", "8 lokasi outdoor recommended"],
                ["#budget", "Budget breakdown per tier"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-ink hover:text-brand-deep flex items-baseline gap-2"
                  >
                    <span className="text-slate-mute font-mono text-xs">↓</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Section
          id="vs-tb"
          eyebrow="Section 1"
          title="Outbound vs team building — clarification"
        >
          <p>
            Term sering digunakan interchangeable, tapi sebenarnya:{" "}
            <strong>outbound adalah subset team building</strong>. Team building
            adalah umbrella — bisa outdoor (outbound), indoor (workshop), atau
            hybrid. Outbound khusus mengacu pada outdoor adventure dengan
            physical activity dominant.
          </p>
          <p>
            Kalau perusahaan Anda butuh deep skill development atau strategic
            alignment, indoor workshop atau hybrid bisa lebih efektif.
            Kalau prioritas energi tinggi, memorability, dan bonding lewat
            shared physical challenge, outbound adalah formatnya.
          </p>
          <p>
            Most companies in Indonesia gunakan outbound 1-2x setahun karena
            unique factors-nya: outdoor, adrenaline, photogenic moments, dan
            level engagement yang sulit di-match indoor.
          </p>
        </Section>

        <Section
          id="tiers"
          eyebrow="Section 2"
          title="3-tier outbound classification — pilih sesuai demografi tim"
        >
          <p>
            Tidak ada one-size-fits-all. Demografi tim, fitness level, dan
            goal-nya menentukan tier mana yang fit. Kami selalu rekomendasi
            mix tier untuk grup besar — option opt-in untuk tier yang lebih
            advanced.
          </p>

          <div className="not-prose grid gap-5 mt-6">
            {TIERS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6 md:p-8"
              >
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-3">
                  <h3 className="font-display text-2xl text-ink">
                    Tier {i + 1}: {t.tier}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep tabular">
                    {t.pricePax}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <p className="text-xs text-slate-mute">Risk level</p>
                    <p className="text-ink font-medium">{t.risk}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-mute">Fitness req</p>
                    <p className="text-ink font-medium">{t.fitness}</p>
                  </div>
                </div>
                <p className="text-sm text-slate">
                  <strong className="text-ink">Activities:</strong> {t.examples}
                </p>
                <p className="mt-2 text-xs text-brand-deep font-medium">
                  → {t.bestFor}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="safety"
          eyebrow="Section 3"
          title="5-layer safety protocol — non-negotiable"
        >
          <p>
            Safety bukan checkbox compliance — bagian core service. Setelah
            handle 400+ events, kami zero-incident track record. Bukan luck,
            sistematis. 5 layer yang kami terapkan setiap event:
          </p>

          <div className="not-prose space-y-4 mt-6">
            {SAFETY_LAYERS.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl text-brand-deep tabular leading-none flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{s.name}</h3>
                    <p className="mt-2 text-sm md:text-base text-slate leading-relaxed">
                      {s.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6">
            <strong>Disclosure penting:</strong> Tidak semua vendor outbound
            di Indonesia maintain semua 5 layer ini. Sebagian skip insurance,
            sebagian pakai instructor non-certified. Selalu tanya safety
            standard secara spesifik — kalau vendor lain hesitate jawab
            detail, that&apos;s a red flag.
          </p>
        </Section>

        <Section
          id="activity"
          eyebrow="Section 4"
          title="Top 8 outbound activity di Bandung"
        >
          <div className="not-prose grid gap-3 mt-4 sm:grid-cols-2">
            {[
              { name: "High Ropes Course", desc: "Flying fox, burma bridge, web crossing — kombinasi trust + adventure", tier: "Tier 2" },
              { name: "Paintball Tactical", desc: "Team strategy game, multi-scenario, equipment full safety", tier: "Tier 2" },
              { name: "Off-road ATV/Jeep", desc: "Adventure terrain navigation, team challenge", tier: "Tier 2" },
              { name: "White Water Rafting", desc: "Sungai Cikandang atau Cisangkuy, class 2-3 rapids", tier: "Tier 3" },
              { name: "Mountain Biking Trail", desc: "Hutan pinus trail, intermediate technical level", tier: "Tier 3" },
              { name: "Outbond Olympic", desc: "Multi-station challenge, team relay format", tier: "Tier 1-2" },
              { name: "War Games Strategy", desc: "Outdoor tactical scenario, team coordination", tier: "Tier 2" },
              { name: "Outdoor Orienteering", desc: "Navigation challenge dengan kompas + map", tier: "Tier 1" },
            ].map((a, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-paper p-5"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-medium text-ink">{a.name}</h3>
                  <span className="text-xs text-brand-deep font-medium">
                    {a.tier}
                  </span>
                </div>
                <p className="text-sm text-slate">{a.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="sample"
          eyebrow="Section 5"
          title="Sample rundown outbound 1-day (full-day Tier 2)"
        >
          <div className="not-prose rounded-2xl border border-border bg-paper p-6 md:p-8">
            <ol className="space-y-2 text-sm text-slate">
              {[
                "07:30 — Pickup peserta di Bandung kota (multi-bus)",
                "09:00 — Arrival venue + welcome refreshment",
                "09:30 — Welcome briefing + safety induction (30 min)",
                "10:00 — Activity 1: Ice-breaker + warm-up (45 min)",
                "10:45 — Activity 2: Outbond Olympic Station A (high ropes) — 75 min",
                "12:00 — Lunch break + free interaction",
                "13:30 — Activity 3: Paintball tactical scenario (90 min)",
                "15:00 — Snack break + photo session",
                "15:30 — Activity 4: Team relay challenge (60 min)",
                "16:30 — Closing circle + reflection",
                "17:00 — Departure (group transport back)",
              ].map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-brand-deep">·</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-6">
            Rundown bisa di-modify: durasi tiap segment, pilihan activity, dan
            sequence-nya. Untuk grup besar (150+ pax), kami pakai parallel
            tracks — peserta dibagi 3-4 grup yang rotation antar activity
            station.
          </p>
        </Section>

        <Section
          id="locations"
          eyebrow="Section 6"
          title="8 lokasi outdoor recommended untuk outbound perusahaan"
        >
          <div className="not-prose grid gap-4">
            {[
              { name: "Cikole Jayagiri", area: "Lembang Utara", tiers: "Tier 1-2-3", note: "Premium outbound ground multi-zone, kapasitas hingga 300 pax, accessible 90 min dari Bandung kota" },
              { name: "Maribaya Adventure", area: "Lembang Timur", tiers: "Tier 1-2", note: "Hutan pinus + air terjun, mid-level challenge, photogenic backdrop" },
              { name: "Lembang Adventure Park", area: "Lembang", tiers: "Tier 2", note: "High ropes, paintball, ATV ground. Dengan villa/resort accommodation dekat" },
              { name: "Bandung Treetop Park", area: "Cikole", tiers: "Tier 2", note: "Aerial adventure course, premium equipment, certified ground" },
              { name: "Cikidang Hill", area: "Ciwidey", tiers: "Tier 1-2", note: "Forest setting deeper, cooler air, untuk grup yang mau experience natural" },
              { name: "Cisangkuy River", area: "Ciwidey selatan", tiers: "Tier 3", note: "White water rafting class 2-3, distance dari Bandung 2,5 jam" },
              { name: "Cibodas Outdoor Camp", area: "Lembang", tiers: "Tier 1-3", note: "Multi-activity site, glamping option, cocok 2D1N outbound" },
              { name: "Bukit Patenggang", area: "Ciwidey", tiers: "Tier 1", note: "Panoramic view, family-day friendly, easy access" },
            ].map((loc) => (
              <div
                key={loc.name}
                className="rounded-2xl border border-border bg-paper p-5"
              >
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                  <h3 className="font-display text-lg text-ink">{loc.name}</h3>
                  <span className="text-xs text-brand-deep font-medium">{loc.tiers}</span>
                </div>
                <p className="text-xs text-slate-mute mb-2">{loc.area}</p>
                <p className="text-sm text-slate">{loc.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="budget"
          eyebrow="Section 7"
          title="Budget breakdown outbound per tier"
        >
          <div className="not-prose overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Komponen</th>
                  <th className="px-4 py-3 font-medium">Tier 1 Light</th>
                  <th className="px-4 py-3 font-medium">Tier 2 Medium</th>
                  <th className="px-4 py-3 font-medium">Tier 3 Extreme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Venue rental + access fee", "Rp 200rb", "Rp 350rb", "Rp 500rb"],
                  ["Activity + equipment + facilitator", "Rp 400rb", "Rp 700rb", "Rp 1,2 jt"],
                  ["Insurance peserta", "Rp 80rb", "Rp 150rb", "Rp 350rb"],
                  ["F&B (2 meals + snack)", "Rp 350rb", "Rp 400rb", "Rp 500rb"],
                  ["Transport + logistics", "Rp 250rb", "Rp 300rb", "Rp 400rb"],
                  ["Documentation + medical", "Rp 200rb", "Rp 250rb", "Rp 350rb"],
                  ["Per pax total (full-day)", "Rp 1,5-2,2 jt", "Rp 2-2,8 jt", "Rp 3-4 jt"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-divider/60 ${
                      i === 6 ? "font-medium" : ""
                    }`}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-3 tabular ${
                          j === 0
                            ? "text-ink font-medium"
                            : i === 6
                            ? "text-ink font-medium"
                            : "text-slate"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            Untuk grup 100+ pax, economy of scale turunkan ke 85-90% dari
            harga di atas. Untuk 2D1N outbound (dengan accommodation), tambah
            Rp 800rb-1,5 jt/pax untuk lodging + dinner + breakfast.
          </p>
        </Section>

        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                ["0", "Safety incidents"],
                ["400+", "Outbound events"],
                ["8+", "Outdoor locations"],
                [STATS.repeatBookingRate, "Repeat booking"],
              ].map(([num, label]) => (
                <div key={label} className="text-center md:text-left">
                  <p className="font-display text-3xl md:text-4xl text-ink tabular leading-none">
                    {num}
                  </p>
                  <p className="mt-2 text-sm text-slate">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan HR">
          <div className="not-prose space-y-3 mt-4">
            {FAQS.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg text-ink leading-snug">
                    {item.question}
                  </h3>
                  <span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">
            Lihat juga:{" "}
            <Link href="/faq/formats" className="text-brand-deep hover:underline">FAQ Format & Aktivitas</Link>
            {" · "}
            <Link href="/faq/outcome" className="text-brand-deep hover:underline">FAQ ROI & Outcome</Link>
            {" · "}
            <Link href="/faq/logistics" className="text-brand-deep hover:underline">FAQ Logistik</Link>
          </p>
        </Section>

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["/panduan-corporate-outing-bandung", "Panduan Corporate Outing Bandung", "Master guide: jenis, budget, lokasi, vendor"],
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B — benefit vs generic EO"],
                ["/team-building-bandung", "Team Building Bandung", "Indoor + outdoor methodology"],
                ["/venue-gathering-bandung", "Venue Gathering Bandung", "Lokasi terbaik untuk outbound + gathering"],
              ].map(([href, title, desc]) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5"
                >
                  <h3 className="font-display text-lg text-ink leading-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">
                    Read guide
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Mau outbound dengan safety standard profesional?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Briefing call 15 menit → kami rekomendasi tier, activity mix,
              dan lokasi yang fit demografi tim Anda.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Request Proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("outbound perusahaan Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <RelatedCaseStudies
          serviceSlugs={["company-gathering", "leadership-camp"]}
          title="Outbound case studies — safety-first eksekusi."
        />

        <StickyProposalBar
          message="Cari vendor outbound bersafety standard? Free proposal 24 jam."
          context="outbound perusahaan Bandung"
        />
      </main>
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 md:py-24 border-t border-divider">
      <div className="container-1280">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow-brand">{eyebrow}</span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">{title}</h2>
        </div>
        <div className="max-w-3xl prose-content text-base md:text-lg text-slate leading-relaxed space-y-5 [&_p]:text-slate [&_strong]:text-ink">
          {children}
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-xs text-slate">
      {children}
    </span>
  );
}
