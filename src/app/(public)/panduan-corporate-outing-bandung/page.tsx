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
import { IMAGES } from "@/lib/drive-images";
import { STATS, SITE, REVIEWS, buildWaLink } from "@/lib/site";
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

const SLUG = "/panduan-corporate-outing-bandung";
const PAGE_URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Panduan Lengkap Corporate Outing Bandung 2026 — Budget, Jenis, Vendor & Lokasi",
  description:
    "Panduan komprehensif corporate outing di Bandung: definisi, 10 jenis event, estimasi budget per pax, 5 lokasi top, cara pilih vendor, checklist HR, dan FAQ 15 pertanyaan. ⭐ 4.9 · 400+ events — TourBandung Corporate.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Panduan Corporate Outing Bandung 2026 — Panduan Lengkap untuk HR & GA",
    description:
      "Satu halaman yang menjawab semua pertanyaan tentang corporate outing di Bandung — jenis event, budget, lokasi, vendor, dan proses.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panduan Corporate Outing Bandung 2026 — Budget, Vendor & Lokasi",
    description: "Panduan lengkap corporate outing Bandung: 10 jenis event, budget, lokasi, vendor. 400+ events delivered.",
    images: [IMAGES.heroMain.src],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Apa itu corporate outing dan apa bedanya dengan team building?",
    answer:
      "Corporate outing adalah aktivitas di luar kantor untuk mempererat tim, refresh energi, dan meningkatkan engagement karyawan — fokus pada rekreasi dan bonding. Team building adalah subset corporate outing yang dirancang dengan tujuan spesifik: meningkatkan komunikasi, problem-solving, atau alignment tim melalui aktivitas terstruktur. Semua team building adalah corporate outing, tapi tidak semua corporate outing adalah team building.",
  },
  {
    question: "Berapa biaya corporate outing di Bandung untuk 100 orang?",
    answer:
      "Untuk 100 pax paket 2D1N standar di Bandung: Conservative Rp 180–250 juta (Rp 1,8–2,5 jt/pax), Standard Rp 250–450 juta (Rp 2,5–4,5 jt/pax), Premium Rp 450–700 juta (Rp 4,5–7 jt/pax). Harga include venue, F&B 3x, transportasi lokal, aktivitas, project management, dan contingency 8%.",
  },
  {
    question: "Lokasi corporate outing terbaik di Bandung dan sekitarnya?",
    answer:
      "5 area utama: (1) Lembang — paling populer, hawa sejuk 18–22°C, villa dan resort berlimpah, kapasitas 30–800 pax. (2) Ciwidey — adventure dan outbound, Kawah Putih, hot spring. (3) Pangalengan — tea plantation experience, intimate retreat. (4) Subang/Tangkuban — geothermal, area outbound luas. (5) Bandung Kota — hotel ballroom untuk hybrid MICE.",
  },
  {
    question: "Berapa lama waktu persiapan corporate outing yang ideal?",
    answer:
      "Standard: 3–4 minggu untuk grup 50–200 pax. Untuk 500+ pax atau peak season (Oktober–Desember, Maret–Mei), booking venue minimum 6–8 minggu. Urgent dalam 1–2 minggu masih bisa tapi pilihan venue terbatas. Semakin awal lock tanggal, semakin baik pilihan venue dan harga.",
  },
  {
    question: "Durasi corporate outing mana yang paling direkomendasikan?",
    answer:
      "Tergantung tujuan: (1) 1 Day / Half Day — quarterly refresh, bonding ringan, cocok untuk departemen kecil. (2) 2D1N — sweet spot annual outing, bonding real, biaya efisien. (3) 3D2N — marquee event tahunan, complete arc, gala dinner + awarding. Mayoritas client kami pilih 2D1N sebagai format default.",
  },
  {
    question: "Pax minimum corporate outing di Bandung berapa?",
    answer:
      "Minimum 8 pax untuk executive offsite atau leadership retreat. Standard team building dari 20 pax. Gathering formal biasanya minimum 50 pax agar ekonomis. Tidak ada pax maximum — kami pernah handle 1.200 pax dalam satu program 3D2N.",
  },
  {
    question: "Apakah vendor corporate outing harus punya legal entity?",
    answer:
      "Untuk B2B perusahaan besar: ya, wajib. Finance butuh invoice resmi dengan NPWP untuk proses PO. Vendor freelance/individual tidak bisa di-PO. Cek PT/CV + NPWP sebelum lanjut. TourBandung Corporate beroperasi sebagai legal entity (7Summits Travel) dengan NPWP aktif.",
  },
  {
    question: "Bagaimana cara request proposal corporate outing?",
    answer:
      "3 jalur di TourBandung Corporate: (1) Full proposal request via /proposal/request — form 5 menit, proposal detail 24 jam. (2) Quick quote — 4 field, estimasi 2 jam. (3) Briefing call 15 menit — pick slot di /proposal/book-consultation, align scope lebih dulu. Semua gratis, no commitment.",
  },
  {
    question: "Apa saja yang termasuk dalam paket corporate outing?",
    answer:
      "Komponen standard: venue (akomodasi + meeting room), F&B (makan 3x + coffee break), transportasi lokal, program aktivitas (outbound, workshop, atau entertainment), project management, koordinasi on-site, dan contingency 8%. Opsional: transportasi origin (Jakarta–Bandung), MC/talent, fotografi/videografi, merchandise, dan souvenir.",
  },
  {
    question: "Bagaimana cara menghitung budget corporate outing?",
    answer:
      "Formula dasar: (Cost per pax) × (Jumlah pax) + 8% contingency + PPN 11%. Cost per pax tergantung tier dan durasi. Untuk 2D1N standard 100 pax: Rp 2,5–4,5 jt/pax × 100 = Rp 250–450 juta base, + contingency Rp 20–36 juta, + PPN ≈ total Rp 298–536 juta. Minta line-item breakdown dari vendor untuk transparansi.",
  },
  {
    question: "Apakah ada garansi force majeure atau cuaca buruk?",
    answer:
      "Vendor specialist siapkan Plan A + Plan B. Plan B: indoor backup activity, alternative venue di-standby, flexibility shift itinerary. Contingency budget 5–8% sudah cover ini. Force majeure full cancel: refund 70–100% tergantung notice period — di-define eksplisit di contract sebelum signing.",
  },
  {
    question: "Apa perbedaan corporate gathering dan employee gathering?",
    answer:
      "Corporate gathering adalah annual event formal seluruh perusahaan — opening ceremony, awarding, company update, gala dinner. Employee gathering lebih informal, fokus karyawan (tidak selalu ada C-level), vibe lebih kasual dan fun. Budget gathering biasanya 1,5–2x employee gathering.",
  },
  {
    question: "Bagaimana cara justify budget outing ke finance atau direksi?",
    answer:
      "Frame sebagai investment, bukan expense: (1) ROI langsung — produktivitas naik 15–25% pasca outing (studi Gallup). (2) Turnover cost — replace 1 karyawan ≈ 50–200% annual salary, outing reduce turnover. (3) Benchmark — biaya outing < 0,5% dari biaya payroll tahunan untuk tim 100 pax. (4) KPI tracking: NPS, satisfaction survey, 30-day post-event productivity check.",
  },
  {
    question: "Mana yang lebih baik: Lembang atau Ciwidey untuk corporate outing?",
    answer:
      "Lembang lebih baik untuk: bonding casual + makan-makan, venue dengan ballroom besar (300+ pax), glamping premium, atau tim yang prioritas kenyamanan. Ciwidey lebih baik untuk: adventure outbound, pengalaman alam authentic (Kawah Putih, hot spring), atau tim muda yang mau experience berbeda. Lembang = safe choice, Ciwidey = memorable choice.",
  },
  {
    question: "Apakah TourBandung Corporate bisa handle group dari luar Bandung?",
    answer:
      "Iya. Mayoritas klien kami dari Jakarta (2–3 jam via tol). Kami juga handle grup dari Surabaya, Semarang, Bali, dan luar negeri. Kami atur transportasi cross-city kalau dibutuhkan. Headquarter di Bandung memberi keunggulan: akses langsung ke 60+ venue lokal tanpa perantara — lebih cepat, lebih transparan, harga lebih baik.",
  },
];

const MONEY_PAGES = [
  { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", desc: "Panduan budget, itinerary & vendor" },
  { href: "/team-building-bandung", label: "Team Building Bandung", desc: "Outbound, indoor, methodology" },
  { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", desc: "Annual gathering 50–2.000 pax" },
  { href: "/employee-gathering-bandung", label: "Employee Gathering Bandung", desc: "Bonding kasual untuk semua level" },
  { href: "/outbound-perusahaan-bandung", label: "Outbound Perusahaan Bandung", desc: "Adventure + challenge outdoor" },
  { href: "/company-retreat-bandung", label: "Company Retreat Bandung", desc: "Strategic offline retreat" },
  { href: "/villa-gathering-bandung", label: "Villa Gathering Bandung", desc: "Private villa untuk 10–300 pax" },
  { href: "/glamping-corporate-bandung", label: "Glamping Corporate Bandung", desc: "Outdoor experience premium" },
  { href: "/leadership-retreat-jawa-barat", label: "Leadership Retreat Jawa Barat", desc: "Untuk tim leadership & C-level" },
  { href: "/executive-offsite-bandung", label: "Executive Offsite Bandung", desc: "C-suite retreat discreet & premium" },
  { href: "/venue-gathering-bandung", label: "Venue Gathering Bandung", desc: "20 rekomendasi venue terbaik" },
  { href: "/incentive-trip-bandung", label: "Incentive Trip Bandung", desc: "Reward program untuk top performer" },
  { href: "/mice-organizer-bandung", label: "MICE Organizer Bandung", desc: "Meeting, incentive, conference, expo" },
  { href: "/event-organizer-corporate-bandung", label: "EO Corporate Bandung", desc: "Specialist B2B vs generic EO" },
  { href: "/b2b-corporate-event-specialist-bandung", label: "B2B Corporate Event Specialist", desc: "7 kriteria vendor untuk procurement" },
];

const TOP_INSIGHTS = [
  { href: "/insights/5-pillar-corporate-outing-design", label: "5 Pilar Desain Corporate Outing" },
  { href: "/insights/bandung-outing-tier-system", label: "Bandung Outing Tier System™ — 4 Tier Pricing" },
  { href: "/insights/justify-outing-budget-to-finance", label: "Cara Justify Budget Outing ke Finance" },
  { href: "/insights/indoor-vs-outdoor-corporate-outing", label: "Indoor vs Outdoor: Decision Framework" },
  { href: "/insights/outing-lembang-vs-ciwidey", label: "Lembang vs Ciwidey — Mana yang Cocok?" },
  { href: "/insights/checklist-vendor-event-organizer-corporate", label: "Checklist 12 Poin Pilih Vendor EO" },
  { href: "/insights/contoh-rundown-outing-kantor-1-hari", label: "Contoh Rundown Outing Kantor 1 Hari" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Brief",
    desc: "30–60 menit call untuk memahami objective bisnis, audience, budget range, dan preferensi. Bukan sekadar tanya tanggal dan pax.",
  },
  {
    step: "02",
    title: "Proposal + Line-item Breakdown",
    desc: "Proposal detail dengan breakdown per komponen — venue, F&B, aktivitas, transportasi, PM fee, contingency, PPN. Dikirim dalam 24 jam.",
  },
  {
    step: "03",
    title: "Venue Survey & Konfirmasi",
    desc: "Site visit ke venue terpilih, konfirmasi kapasitas + fasilitas, negosiasi langsung tanpa markup reseller.",
  },
  {
    step: "04",
    title: "Program Design",
    desc: "Rundown detail, activity design, risk register, Plan B untuk cuaca, layout peserta, dan briefing tim eksekusi.",
  },
  {
    step: "05",
    title: "Eksekusi On-site",
    desc: "Dedicated senior planner dari awal briefing hadir on-site. Koordinasi real-time — peserta tidak merasakan chaos di belakang layar.",
  },
  {
    step: "06",
    title: "Post-Event Report",
    desc: "Rekap attendance, NPS/satisfaction survey, cost reconciliation, foto/video bank, dan rekomendasi untuk event berikutnya.",
  },
];

export default function PanduanCorporateOutingPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline:
        "Panduan Lengkap Corporate Outing Bandung 2026 — Budget, Jenis, Vendor & Lokasi",
      description:
        "Panduan komprehensif corporate outing di Bandung: definisi, 10 jenis event, estimasi budget, lokasi top, cara pilih vendor, dan FAQ.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-15",
      dateModified: "2026-05-16",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Panduan Corporate Outing Bandung", url: PAGE_URL },
    ]),
    serviceSchema({
      name: "Corporate Outing Bandung",
      description:
        "Layanan corporate outing, team building, dan executive offsite di Bandung & Jawa Barat — dirancang untuk outcome bisnis, bukan sekadar refreshing.",
      priceRange: "Rp 1.500.000 - Rp 7.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Merencanakan Corporate Outing di Bandung",
      description:
        "6 langkah dari brief awal hingga post-event report untuk corporate outing yang outcome-driven di Bandung.",
      steps: PROCESS_STEPS.map((s) => ({
        name: s.title,
        text: s.desc,
      })),
    }),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "15 Halaman Corporate Outing Bandung",
      description: "Panduan spesifik per jenis corporate event di Bandung & Jawa Barat",
      numberOfItems: 15,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Outing Kantor Bandung", url: `${SITE.url}/outing-kantor-bandung` },
        { "@type": "ListItem", position: 2, name: "Team Building Bandung", url: `${SITE.url}/team-building-bandung` },
        { "@type": "ListItem", position: 3, name: "Corporate Gathering Bandung", url: `${SITE.url}/corporate-gathering-bandung` },
        { "@type": "ListItem", position: 4, name: "Employee Gathering Bandung", url: `${SITE.url}/employee-gathering-bandung` },
        { "@type": "ListItem", position: 5, name: "Outbound Perusahaan Bandung", url: `${SITE.url}/outbound-perusahaan-bandung` },
        { "@type": "ListItem", position: 6, name: "Company Retreat Bandung", url: `${SITE.url}/company-retreat-bandung` },
        { "@type": "ListItem", position: 7, name: "Villa Gathering Bandung", url: `${SITE.url}/villa-gathering-bandung` },
        { "@type": "ListItem", position: 8, name: "Glamping Corporate Bandung", url: `${SITE.url}/glamping-corporate-bandung` },
        { "@type": "ListItem", position: 9, name: "Leadership Retreat Jawa Barat", url: `${SITE.url}/leadership-retreat-jawa-barat` },
        { "@type": "ListItem", position: 10, name: "Executive Offsite Bandung", url: `${SITE.url}/executive-offsite-bandung` },
        { "@type": "ListItem", position: 11, name: "B2B Corporate Event Specialist Bandung", url: `${SITE.url}/b2b-corporate-event-specialist-bandung` },
        { "@type": "ListItem", position: 12, name: "Event Organizer Corporate Bandung", url: `${SITE.url}/event-organizer-corporate-bandung` },
        { "@type": "ListItem", position: 13, name: "MICE Organizer Bandung", url: `${SITE.url}/mice-organizer-bandung` },
        { "@type": "ListItem", position: 14, name: "Incentive Trip Bandung", url: `${SITE.url}/incentive-trip-bandung` },
        { "@type": "ListItem", position: 15, name: "Venue Gathering Bandung", url: `${SITE.url}/venue-gathering-bandung` },
      ],
    }
  );

  return (
    <>
      <JsonLd data={schema} />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.heroMain.src}
              alt="Corporate outing di Bandung — tim bonding, team building, gathering"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/65 to-ink/95" />
          </div>

          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Panduan Corporate Outing Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Master Guide · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Panduan Corporate Outing
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Bandung 2026.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Satu halaman yang menjawab semua: definisi, jenis event, budget
                per pax, lokasi top, cara pilih vendor, dan 15 FAQ dari HR yang
                paling sering ditanya. Ditulis oleh tim yang sudah eksekusi{" "}
                <strong className="text-paper/90">{STATS.eventsDelivered} corporate events</strong> sejak
                2018.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-13 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request Free Proposal
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#panduan"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/8 backdrop-blur text-paper px-7 h-13 text-sm font-medium hover:bg-paper/15 transition"
                >
                  Baca panduan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Jawaban Cepat</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                <strong>Corporate outing di Bandung</strong> biasanya menghabiskan{" "}
                <strong>Rp 2,5–5 juta per orang untuk paket 2D1N</strong> (include venue, F&B, aktivitas, transportasi lokal). Durasi paling umum: 2D1N. Lokasi favorit:{" "}
                <strong>Lembang</strong> (sejuk, villa premium) atau{" "}
                <strong>Ciwidey</strong> (adventure, outbound). Persiapan ideal{" "}
                <strong>3–4 minggu</strong> sebelum hari H.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {[
                  "Budget: Rp 1,5–7 jt/pax",
                  "Pax: 8–2.000",
                  "Durasi: Half Day – 3D2N",
                  "Lokasi: Lembang · Ciwidey · Pangalengan",
                  "⭐ " + REVIEWS.googleRating + " · " + REVIEWS.googleReviewCount + " reviews",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request Proposal Gratis
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#budget"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat estimasi budget
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-10 border-b border-divider bg-paper">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                [STATS.eventsDelivered, "Events delivered"],
                [STATS.companiesTrusted, "Perusahaan klien"],
                [STATS.repeatBookingRate, "Repeat booking"],
                [STATS.venuePartners, "Venue partner"],
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

        {/* Table of contents */}
        <section id="panduan" className="py-12 border-b border-divider bg-bone">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-5">Isi panduan ini</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#definisi", "Apa itu corporate outing?"],
                ["#jenis", "10 jenis corporate outing"],
                ["#budget", "Estimasi budget per pax"],
                ["#lokasi", "5 lokasi top di Bandung"],
                ["#proses", "Proses dari brief ke eksekusi"],
                ["#vendor", "Cara pilih vendor yang tepat"],
                ["#layanan", "Layanan & paket kami"],
                ["#faq", "15 FAQ dari HR"],
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

        {/* Section: Definisi */}
        <GuideSection id="definisi" eyebrow="Bagian 1" title="Apa itu corporate outing?">
          <p>
            <strong>Corporate outing</strong> adalah aktivitas terorganisir di
            luar kantor untuk karyawan perusahaan — dirancang untuk mempererat
            tim, meningkatkan engagement, dan me-recharge energi kerja. Berbeda
            dari team building yang punya tujuan spesifik (komunikasi, problem
            solving), corporate outing lebih luas: mencakup refreshing, bonding,
            dan pengalaman bersama di luar rutinitas kerja.
          </p>
          <p>
            Dalam konteks B2B di Indonesia, corporate outing mencakup spektrum
            luas: dari <em>annual company gathering</em> 500 pax dengan gala
            dinner, hingga <em>executive offsite</em> 10 orang di villa private.
            Yang menyatukannya: semuanya dieksekusi di luar kantor, melibatkan
            karyawan sebagai peserta, dan memiliki outcome yang bisa diukur
            (engagement, kepuasan karyawan, produktivitas).
          </p>
          <p>
            <strong>Mengapa perusahaan rutin investasi di corporate outing?</strong>{" "}
            Data dari Gallup menunjukkan tim dengan engagement tinggi menghasilkan
            produktivitas 17–21% lebih baik dan turnover 43% lebih rendah.
            Corporate outing adalah salah satu mekanisme paling tangible untuk
            membangun engagement tersebut — terutama pasca-pandemic di mana
            remote/hybrid work memperlemah ikatan tim.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-3 gap-4">
            {[
              {
                term: "Corporate Outing",
                def: "Aktivitas off-site untuk bonding, refresh, dan engagement — format fleksibel, vibe kasual hingga semi-formal.",
              },
              {
                term: "Team Building",
                def: "Subset outing dengan tujuan spesifik (komunikasi, problem solving) melalui aktivitas terstruktur dengan debrief.",
              },
              {
                term: "Corporate Gathering",
                def: "Annual event formal seluruh perusahaan — ceremony, awarding, company update, dan entertainment.",
              },
            ].map((item) => (
              <div
                key={item.term}
                className="rounded-xl border border-border bg-paper p-5"
              >
                <p className="font-medium text-ink text-sm">{item.term}</p>
                <p className="mt-2 text-xs text-slate leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </GuideSection>

        {/* Section: Jenis */}
        <GuideSection id="jenis" eyebrow="Bagian 2" title="10 jenis corporate outing yang paling sering di Bandung">
          <div className="not-prose grid gap-3">
            {[
              {
                t: "Annual Company Gathering (2D1N – 3D2N)",
                d: "Marquee event tahunan seluruh perusahaan. Opening ceremony, awarding night, team activity, gala dinner. Pax 100–2.000.",
                href: "/corporate-gathering-bandung",
              },
              {
                t: "Team Building (Half Day – 2D1N)",
                d: "Outbound, indoor workshop, atau hybrid dengan objective spesifik. Pax 20–500.",
                href: "/team-building-bandung",
              },
              {
                t: "Employee Gathering (1D – 2D1N)",
                d: "Informal, fun, employee-centric. Company update + entertainment + bonding activity. Pax 50–500.",
                href: "/employee-gathering-bandung",
              },
              {
                t: "Outbound Perusahaan (Half Day – 2D1N)",
                d: "Adventure outdoor: flying fox, rafting, survival challenge, problem-solving game. Cocok untuk Ciwidey/Subang. Pax 30–300.",
                href: "/outbound-perusahaan-bandung",
              },
              {
                t: "Company Retreat (1D – 3D2N)",
                d: "Strategic offline session untuk planning, alignment, atau post-crisis recovery. Mix kerja + recreation. Pax 20–200.",
                href: "/company-retreat-bandung",
              },
              {
                t: "Executive Offsite (1D – 2D1N)",
                d: "C-level atau senior leadership. Venue private, boardroom-style agenda, discreet. Pax 8–30.",
                href: "/executive-offsite-bandung",
              },
              {
                t: "Leadership Retreat (2D1N – 3D2N)",
                d: "Tim leadership mid-to-senior. Mix development session + bonding outdoor. Pax 15–60.",
                href: "/leadership-retreat-jawa-barat",
              },
              {
                t: "Glamping Corporate (1D2N)",
                d: "Outdoor experience premium tanpa kompromi kenyamanan. Differentiator dari villa/hotel biasa. Pax 30–80.",
                href: "/glamping-corporate-bandung",
              },
              {
                t: "Incentive Trip (2D1N – 4D3N)",
                d: "Reward untuk top performer. Pengalaman premium, beda dari outing rutin. Pax 10–100.",
                href: "/incentive-trip-bandung",
              },
              {
                t: "Villa Gathering (1D – 2D1N)",
                d: "Private villa, atmosphere intimate, program fleksibel. Ideal untuk tim kecil atau C-suite. Pax 10–150.",
                href: "/villa-gathering-bandung",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-paper p-4 hover:border-ink-soft transition"
              >
                <div>
                  <p className="font-medium text-sm text-ink">{item.t}</p>
                  <p className="mt-1 text-xs text-slate">{item.d}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="flex-shrink-0 mt-0.5 text-slate group-hover:text-ink transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </GuideSection>

        {/* Section: Budget */}
        <GuideSection id="budget" eyebrow="Bagian 3" title="Estimasi budget corporate outing Bandung (2026)">
          <p>
            Range pricing di bawah untuk paket{" "}
            <strong>2D1N standar, 50–200 pax</strong> — sudah include venue,
            F&B 3x, transportasi lokal, aktivitas, project management, dan
            contingency 8%. Harga eksak tergantung tanggal, venue spesifik, dan
            complexity program.
          </p>

          <div className="not-prose overflow-x-auto -mx-6 md:mx-0 mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Tier</th>
                  <th className="px-4 py-3 font-medium">Per pax (2D1N)</th>
                  <th className="px-4 py-3 font-medium">Total (100 pax)</th>
                  <th className="px-4 py-3 font-medium">Karakteristik</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Conservative", "Rp 1,8–2,5 jt", "Rp 180–250 jt", "Villa standard, F&B buffet, outbound basic"],
                  ["Standard", "Rp 2,5–4,5 jt", "Rp 250–450 jt", "Resort mid-tier, program custom, dokumentasi"],
                  ["Premium", "Rp 4,5–7 jt", "Rp 450–700 jt", "Resort bintang 4–5, production stage, entertainment live"],
                  ["Bespoke", "Rp 7 jt+", "Rp 700 jt+", "Fully custom, private villa/resort eksklusif, C-suite"],
                ].map(([tier, perPax, total, char], i) => (
                  <tr key={i} className="border-b border-divider/60">
                    <td className="px-4 py-3 font-medium text-ink">{tier}</td>
                    <td className="px-4 py-3 text-slate tabular">{perPax}</td>
                    <td className="px-4 py-3 text-slate tabular">{total}</td>
                    <td className="px-4 py-3 text-slate text-xs">{char}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5">
            <strong>Breakdown komponen typical (2D1N standard):</strong> Venue
            akomodasi 30–35%, F&B 25–30%, Aktivitas 15–20%, Transportasi
            5–10%, Produksi/Talent 5–10%, Contingency 5–8%, Project Management
            included dalam harga total.
          </p>
          <p>
            Untuk referensi detail per format durasi, lihat panduan khusus:{" "}
            <Link href="/outing-kantor-bandung" className="text-brand-deep underline underline-offset-2">
              Outing Kantor Bandung — Estimasi Budget 2026
            </Link>.
          </p>
        </GuideSection>

        {/* Section: Lokasi */}
        <GuideSection id="lokasi" eyebrow="Bagian 4" title="5 area terbaik untuk corporate outing di Bandung">
          <div className="not-prose grid md:grid-cols-2 gap-4 mt-2">
            {[
              {
                area: "Lembang",
                elev: "1.200 mdpl",
                time: "60–90 menit dari Bandung kota",
                bestFor: "Venue paling beragam (villa hingga resort ballroom 800 pax), hawa sejuk 18–22°C, glamping premium.",
                cap: "30–800 pax",
                popular: true,
              },
              {
                area: "Ciwidey",
                elev: "1.000–1.600 mdpl",
                time: "75–110 menit dari Bandung kota",
                bestFor: "Adventure outbound, hot spring Ciwalini, Kawah Putih, Situ Patenggang. Pengalaman alam authentic.",
                cap: "30–300 pax",
                popular: false,
              },
              {
                area: "Pangalengan",
                elev: "1.400 mdpl",
                time: "100–130 menit dari Bandung kota",
                bestFor: "Tea plantation experience, suasana sejuk dan tenang. Ideal untuk retreat retreat dan executive offsite.",
                cap: "20–150 pax",
                popular: false,
              },
              {
                area: "Subang / Tangkuban Perahu",
                elev: "850–1.500 mdpl",
                time: "75–100 menit dari Bandung kota",
                bestFor: "Outbound ground luas, geothermal experience, lahan outdoor untuk program fisik intensif.",
                cap: "50–400 pax",
                popular: false,
              },
              {
                area: "Bandung Kota",
                elev: "750 mdpl",
                time: "Di kota Bandung",
                bestFor: "Hotel ballroom bintang 4–5, venue hybrid, MICE. Cocok jika peserta tidak perlu perjalanan jauh.",
                cap: "50–2.000 pax",
                popular: false,
              },
            ].map((loc) => (
              <div
                key={loc.area}
                className="rounded-xl border border-border bg-paper p-5"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display text-lg text-ink">{loc.area}</h3>
                  {loc.popular && (
                    <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-medium text-brand-deep">
                      Paling populer
                    </span>
                  )}
                </div>
                <dl className="space-y-1 text-xs text-slate">
                  <div className="flex gap-2">
                    <dt className="text-slate-mute w-16 flex-shrink-0">Elevasi</dt>
                    <dd>{loc.elev}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-slate-mute w-16 flex-shrink-0">Waktu</dt>
                    <dd>{loc.time}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-slate-mute w-16 flex-shrink-0">Kapasitas</dt>
                    <dd>{loc.cap}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs text-slate leading-relaxed">{loc.bestFor}</p>
              </div>
            ))}
          </div>
          <p className="mt-5">
            Untuk rekomendasi venue spesifik (hotel, villa, resort, glamping site),
            baca:{" "}
            <Link href="/venue-gathering-bandung" className="text-brand-deep underline underline-offset-2">
              20 Venue Gathering Bandung Terbaik 2026
            </Link>.
          </p>
        </GuideSection>

        {/* Section: Proses */}
        <GuideSection id="proses" eyebrow="Bagian 5" title="Proses dari brief ke eksekusi — 6 langkah">
          <div className="not-prose grid gap-4 mt-2">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-xl border border-border bg-paper p-5"
              >
                <span className="font-display text-2xl text-brand-deep/40 flex-shrink-0 leading-none pt-1">
                  {step.step}
                </span>
                <div>
                  <p className="font-medium text-sm text-ink">{step.title}</p>
                  <p className="mt-1 text-xs text-slate leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5">
            Detail framework kami:{" "}
            <Link href="/methodology" className="text-brand-deep underline underline-offset-2">
              Metodologi TourBandung Corporate — 3 Framework Terbukti
            </Link>.
          </p>
        </GuideSection>

        {/* Section: Vendor */}
        <GuideSection id="vendor" eyebrow="Bagian 6" title="Cara pilih vendor corporate outing yang tepat">
          <p>
            Banyak vendor corporate outing di Bandung — dari specialist B2B
            berpengalaman hingga travel agent retail yang nyambi corporate.
            Berikut 5 hal pembeda yang harus di-check sebelum sign kontrak:
          </p>
          <ul className="not-prose space-y-3 mt-4">
            {[
              {
                title: "Specialist B2B, bukan travel agent retail",
                detail:
                  "Corporate specialist punya SOP discovery → proposal → eksekusi → post-event report. Travel agent kirim paket dari katalog tanpa discovery.",
              },
              {
                title: "Dedicated senior planner dari brief sampai eksekusi",
                detail:
                  "Sumber #1 miscommunication: briefing dengan sales, eksekusi dengan crew berbeda yang tidak tahu konteks. Senior PM yang sama harus ada dari awal sampai akhir.",
              },
              {
                title: "Line-item proposal, bukan lump-sum",
                detail:
                  "Proposal detail per komponen memudahkan justifikasi ke finance dan mencegah surprise cost di belakang. Lump-sum = red flag.",
              },
              {
                title: "Legal entity + NPWP aktif",
                detail:
                  "Untuk PO ke finance perusahaan besar, vendor harus bisa issued invoice resmi dengan NPWP. Freelance/individual tidak bisa.",
              },
              {
                title: "Track record skala serupa",
                detail:
                  "Minta case study event dengan pax serupa. Vendor yang biasa 30 pax akan kewalahan di 300 pax — beda supply chain, koordinasi, dan risk management.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-paper p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-paper text-xs font-medium flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="mt-0.5 text-xs text-slate leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5">
            Checklist lengkap 12 poin:{" "}
            <Link href="/insights/checklist-vendor-event-organizer-corporate" className="text-brand-deep underline underline-offset-2">
              Checklist 12 Poin Pilih Vendor EO Corporate
            </Link>. Beda specialist vs generic:{" "}
            <Link href="/b2b-corporate-event-specialist-bandung" className="text-brand-deep underline underline-offset-2">
              B2B Corporate Event Specialist Bandung
            </Link>.
          </p>
        </GuideSection>

        {/* Section: Layanan & Paket */}
        <section id="layanan" className="py-16 md:py-24 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">Bagian 7</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
                Layanan & panduan per tipe event.
              </h2>
              <p className="mt-4 text-base text-slate">
                Setiap halaman di bawah adalah panduan mendalam untuk tipe event
                spesifik — budget, format, lokasi, dan cara kami eksekusi.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {MONEY_PAGES.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-paper p-5 hover:border-ink-soft hover:-translate-y-0.5 transition-all"
                >
                  <div>
                    <p className="font-medium text-sm text-ink">{page.label}</p>
                    <p className="mt-1 text-xs text-slate">{page.desc}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="flex-shrink-0 mt-0.5 text-slate transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Insights cluster */}
        <section className="py-14 md:py-20 border-t border-divider bg-paper">
          <div className="container-1280">
            <div className="max-w-3xl mb-8">
              <span className="eyebrow-brand">Insights & Framework</span>
              <h2 className="font-display mt-3 text-2xl md:text-3xl text-ink leading-tight">
                Bacaan lanjutan untuk HR & planner event.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {TOP_INSIGHTS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-paper px-5 py-4 hover:border-ink-soft transition"
                >
                  <span className="text-sm text-ink">{item.label}</span>
                  <ArrowRight
                    size={13}
                    className="flex-shrink-0 text-slate transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
              <Link
                href="/insights"
                className="group flex items-center justify-between gap-3 rounded-xl border border-dashed border-border px-5 py-4 hover:border-ink-soft transition"
              >
                <span className="text-sm text-slate">Lihat semua insights →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 border-t border-divider bg-bone">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">FAQ</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-[1.05]">
                15 pertanyaan yang paling sering ditanya HR.
              </h2>
            </div>
            <div className="max-w-3xl space-y-3">
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
            <div className="mt-10 pt-8 border-t border-divider">
              <p className="eyebrow text-slate mb-4">Explore FAQ by category</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["/faq/budget", "Budget & Investment", "Range harga, breakdown per komponen"],
                  ["/faq/comparison", "Comparison & Decision", "Outing vs gathering vs retreat"],
                  ["/faq/vendor", "Vendor Selection", "12 poin checklist pilih EO"],
                  ["/faq/location", "Lokasi & Venue", "Lembang vs Ciwidey vs kota"],
                  ["/faq/formats", "Format & Programs", "Outdoor, indoor, hybrid"],
                  ["/faq/logistics", "Process & Logistics", "Timeline dan koordinasi"],
                  ["/faq/outcome", "Outcome & ROI", "Cara justify ke Finance"],
                ].map(([href, label, desc]) => (
                  <Link key={href} href={href} className="group rounded-xl border border-border bg-paper p-4 hover:border-ink-soft transition-all hover:-translate-y-0.5">
                    <p className="font-medium text-sm text-ink group-hover:text-brand-deep transition-colors leading-snug">{label}</p>
                    <p className="mt-1 text-xs text-slate">{desc}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-ink/70">
                      Selengkapnya <ArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust + CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-paper/15 px-4 py-1.5 text-xs text-cream/70 mb-6">
              ⭐ {REVIEWS.googleRating}/5 · {REVIEWS.googleReviewCount} Google Reviews
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Siap plan corporate outing di Bandung?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Briefing call 15 menit → proposal detail dengan line-item
              breakdown, sample itinerary, dan 2 opsi venue dalam 24 jam.
              Gratis, no commitment.
            </p>
            <ul className="mt-8 inline-grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
              {[
                "Proposal gratis dalam 24 jam",
                "Line-item breakdown transparan",
                "Senior PM dedicated",
                "60+ venue partner langsung",
                "400+ events sejak 2018",
                "Legal entity + NPWP",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={13} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Request Proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("corporate outing Bandung")}
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

        <StickyProposalBar
          message="Mau corporate outing Bandung? Proposal gratis dalam 24 jam."
          context="corporate outing Bandung"
        />
      </main>
    </>
  );
}

// Subcomponent
function GuideSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24 border-t border-divider">
      <div className="container-1280">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow-brand">{eyebrow}</span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
            {title}
          </h2>
        </div>
        <div className="max-w-3xl prose-content text-base md:text-lg text-slate leading-relaxed space-y-5 [&_p]:text-slate [&_strong]:text-ink">
          {children}
        </div>
      </div>
    </section>
  );
}
