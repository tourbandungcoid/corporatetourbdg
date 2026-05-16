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

const SLUG = "/outing-kantor-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Outing Kantor Bandung 2026: Panduan Budget, Itinerary & Vendor Recommended",
  description:
    "Outing kantor Bandung Rp 2,5–5 jt/pax untuk 2D1N. Budget breakdown, sample itinerary, 5 lokasi top, checklist vendor 7-poin. ⭐ 4.9/5 · 400+ events · Proposal gratis dalam 24 jam — hubungi kami sekarang.",
  alternates: { canonical: URL },
  openGraph: {
    title:
      "Outing Kantor Bandung 2026 — Panduan Lengkap Budget, Itinerary, Vendor",
    description:
      "Custom-designed corporate outing untuk perusahaan Indonesia. 400+ events delivered sejak 2018.",
    url: URL,
    type: "article",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outing Kantor Bandung 2026 — Budget, Itinerary & Vendor",
    description: "Custom-designed corporate outing Bandung. 400+ events delivered sejak 2018. Proposal gratis 24 jam.",
    images: [IMAGES.heroMain.src],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question:
      "Berapa estimasi budget outing kantor untuk tim 100 pax di Bandung?",
    answer:
      "Budget outing kantor 100 pax di Bandung untuk paket 2D1N standar berkisar Rp 2,5–5 juta per orang, atau total Rp 250–500 juta untuk grup. Range mencakup venue, F&B 3x, activity, transportation lokal, project management, dan contingency 8%.",
  },
  {
    question: "Tipe outing kantor apa yang paling populer di Bandung?",
    answer:
      "Yang paling sering kami handle: (1) Annual Company Gathering 2D1N – 3D2N, (2) Team Building 1 Day – 2D1N, (3) Glamping Corporate 1D2N, (4) Executive Offsite 2D1N untuk tim leadership, dan (5) Department-level Bonding Trip.",
  },
  {
    question: "Berapa lama prep outing kantor Bandung yang ideal?",
    answer:
      "Standard prep timeline: 3–4 minggu untuk grup 50–200 pax. Untuk 500+ pax atau peak season (Oktober–Desember, Maret–Mei), lock venue minimum 6–8 minggu. Urgent prep 1–2 minggu masih bisa, tergantung availability venue.",
  },
  {
    question:
      "Apa bedanya outing kantor dan corporate gathering?",
    answer:
      "Outing kantor adalah aktivitas refreshing + team bonding informal, biasanya 1–2 hari, vibe relaxed. Corporate gathering adalah formal annual event dengan ceremony, awarding, dan company update — durasi 2–3 hari di venue premium. Budget gathering biasanya 1,5–2x outing standard.",
  },
  {
    question: "Lokasi outing kantor terbaik di Bandung untuk grup 200+?",
    answer:
      "Lembang area paling populer karena akses 1–1,5 jam dari Bandung kota dengan hawa sejuk dan banyak villa + resort ballroom. Ciwidey cocok untuk adventure outbound (Kawah Putih, Situ Patenggang). Pangalengan untuk experience tea plantation. Subang untuk tematik geothermal + outbound.",
  },
  {
    question: "Apakah harga sudah include PPN dan transportasi?",
    answer:
      "Proposal kami transparent line-item: venue, F&B, activity, transportation lokal, talent/MC, dokumentasi, contingency, dan PPN 11% terpisah. Transportasi origin (Jakarta → Bandung kalau perlu) bisa kami atur dengan biaya tambahan, atau Anda atur sendiri.",
  },
  {
    question: "Bagaimana penanganan cuaca buruk saat outing outdoor?",
    answer:
      "Setiap program siapkan Plan A & Plan B. Plan B mencakup: indoor backup activity, alternative venue di-standby, dan flexibility shifting itinerary. Contingency budget 5–8% sudah include. Force majeure full cancel: refund 70–100% tergantung notice period (di-define di contract).",
  },
  {
    question:
      "Apakah ada hidden cost mendekati hari H?",
    answer:
      "Tidak ada. Proposal kami detailed breakdown — yang muncul di invoice = yang ada di proposal yang Anda approve. Add-on (jika Anda request mid-prep) selalu konfirmasi tertulis dengan unit price yang transparent.",
  },
  {
    question: "Bagaimana cara request proposal yang efisien?",
    answer:
      "3 jalur: (1) Full proposal request via /proposal/request — 5 menit form, 10 fields, proposal lengkap dalam 24 jam. (2) Quick quote — 4 fields, estimate dalam 2 jam. (3) Briefing call 15 menit — pick slot di /proposal/book-consultation, kami align scope sebelum proposal.",
  },
  {
    question:
      "Apakah Tour Bandung Corporate menerima group dari luar Bandung?",
    answer:
      "Iya. Mayoritas client kami dari Jakarta, dan kami juga handle group dari Surabaya, Semarang, Bali, dan luar negeri. Kami atur transportasi cross-city kalau perlu. Headquartered di Bandung memberi advantage: akses langsung ke 60+ venue lokal tanpa calo.",
  },
  {
    question: "Berapa pax minimum dan maximum yang bisa kami handle?",
    answer:
      "Minimum 8 pax untuk executive offsite. Standard team building bisa dari 20 pax. Pernah handle event terbesar 1.200 pax (3-day program). Untuk 2.000+ pax, kami pisah ke multi-batch atau multi-venue parallel coordination.",
  },
  {
    question:
      "Apa yang membedakan vendor outing kantor di Bandung satu sama lain?",
    answer:
      "4 differentiator utama: (1) Methodology — strategic experience design vs sekadar booking forwarding. (2) Senior team retention — dedicated PM 4+ tahun vs rotating freelancer. (3) Direct venue relationships — 60+ partnership langsung vs reseller. (4) Pricing transparency — detailed breakdown vs lumped total dengan markup hidden.",
  },
];

const SAMPLE_ITINERARIES = [
  {
    name: "Day Trip 1D — Team Building Ringan",
    pax: "30–80 pax",
    schedule: [
      "08:00 — Pickup Bandung kota / arrival venue",
      "10:00 — Welcome session + ice-breaker (45 min)",
      "11:00 — Outbound activity blok 1 (problem solving)",
      "12:30 — Lunch + free interaction",
      "14:00 — Outbound activity blok 2 (team challenge)",
      "16:00 — Reflection circle + closing",
      "17:00 — Departure / drop-off",
    ],
    priceFrom: "Rp 1.2 jt/pax",
  },
  {
    name: "Standard 2D1N — Outing + Bonding",
    pax: "60–200 pax",
    schedule: [
      "Day 1: 14:00 arrival, welcome drink, ice-breaker",
      "Day 1: 16:30 free time + venue exploration",
      "Day 1: 18:00 welcome dinner + entertainment",
      "Day 1: 21:00 bonfire night + casual bonding",
      "Day 2: 07:00 breakfast, 08:30 team activity 3 jam",
      "Day 2: 12:00 lunch, 13:30 closing session",
      "Day 2: 15:00 departure",
    ],
    priceFrom: "Rp 2.5 jt/pax",
  },
  {
    name: "Premium 3D2N — Annual Gathering",
    pax: "100–500 pax",
    schedule: [
      "Day 1: arrival, opening ceremony, welcome dinner",
      "Day 1: night entertainment + casual networking",
      "Day 2: morning team activity (parallel tracks)",
      "Day 2: afternoon CSR / cultural workshop",
      "Day 2: evening — gala dinner + awarding night",
      "Day 3: morning recap session + group photo",
      "Day 3: lunch + departure",
    ],
    priceFrom: "Rp 4 jt/pax",
  },
];

const LOCATIONS = [
  {
    name: "Lembang",
    elevation: "1.200 m",
    travelFromBdg: "60–90 min",
    bestFor: "Cooler vibe, villa premium, ballroom besar",
    venues: "Hotel resort, private villa, glamping",
  },
  {
    name: "Ciwidey",
    elevation: "1.000–1.600 m",
    travelFromBdg: "75–110 min",
    bestFor: "Adventure outbound, hot spring, Kawah Putih",
    venues: "Glamping site, outdoor camp, villa",
  },
  {
    name: "Pangalengan",
    elevation: "1.400 m",
    travelFromBdg: "100–130 min",
    bestFor: "Tea plantation experience, quiet retreat",
    venues: "Eco-resort, plantation lodge, villa",
  },
  {
    name: "Subang / Tangkuban Perahu",
    elevation: "850–1.500 m",
    travelFromBdg: "75–100 min",
    bestFor: "Geothermal experience, outbound spot luas",
    venues: "Resort, outdoor adventure ground",
  },
  {
    name: "Bandung City",
    elevation: "750 m",
    travelFromBdg: "0",
    bestFor: "Hybrid event, hotel ballroom + MICE",
    venues: "Hotel bintang 4–5, ballroom premium",
  },
];

const VENDOR_CHECKLIST = [
  "Specialist B2B corporate, bukan travel agent retail",
  "Senior planner dedicated, bukan rotating freelancer",
  "Direct relationship dengan venue (cek list partner-nya)",
  "Detailed proposal breakdown line-item, bukan lumped total",
  "Force majeure & change policy tertulis di contract",
  "Track record event scale serupa dengan kebutuhan Anda",
  "Insurance coverage untuk peserta + crew on-site",
];

export default function OutingKantorBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline:
        "Outing Kantor Bandung 2026: Panduan Lengkap, Estimasi Budget, dan Vendor Recommended",
      description:
        "Comprehensive guide outing kantor di Bandung — budget per pax, sample itinerary, 5 lokasi favorit, dan vendor selection checklist.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: SLUG,
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      aboutService: "Outing Kantor Bandung",
      keywords: ["outing kantor bandung", "harga outing kantor bandung", "paket outing kantor bandung", "vendor outing kantor bandung", "outing perusahaan bandung", "corporate outing bandung", "outing kantor lembang", "outbound kantor bandung"],
      mentions: [
        { type: "Service", name: "Team Building Bandung", url: `${SITE.url}/services/team-building`, id: `${SITE.url}/team-building-bandung#service` },
        { type: "Service", name: "Corporate Gathering Bandung", url: `${SITE.url}/corporate-gathering-bandung`, id: `${SITE.url}/corporate-gathering-bandung#service` },
        { type: "Place", name: "Lembang, Kabupaten Bandung Barat", url: `${SITE.url}/venue-gathering-bandung` },
        { type: "Place", name: "Ciwidey, Kabupaten Bandung", url: `${SITE.url}/venue-gathering-bandung` },
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
      ],
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Outing Kantor Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Outing Kantor Bandung",
      description:
        "Custom-designed corporate outing untuk perusahaan di Bandung & Jawa Barat — annual gathering, team building, employee bonding.",
      priceRange: "Rp 1.500.000 - Rp 7.000.000 per pax",
      url: URL,
    }),
    faqPageSchema(FAQS, URL),
    howToSchema({
      name: "Cara Merencanakan Outing Kantor di Bandung",
      description: "5 langkah dari awal brief hingga eksekusi outing kantor yang outcome-driven di Bandung.",
      steps: [
        { name: "Tentukan Objective & Skala Pax", text: "Artikulasikan tujuan event: bonding casual, engagement boost, cultural reinforcement, atau strategic alignment. Hitung estimasi jumlah peserta — ini menentukan venue capacity dan format yang tersedia." },
        { name: "Pilih Tier Budget yang Sesuai", text: "Match budget ke tier yang fit: Foundation Rp 1.5–2.5 jt/pax (casual refresh 30-80 pax), Elevated Rp 2.5–4.5 jt/pax (annual outing 100-300 pax), Signature Rp 4.5–7 jt/pax (marquee event), Bespoke Rp 7 jt+ (C-suite/executive)." },
        { name: "Seleksi Venue & Lock Tanggal", text: "Pilih venue berdasarkan objective dan audience. Lembang untuk intimate bonding 50-300 pax, Ciwidey untuk adventure, Bandung kota untuk hybrid/MICE. Booking venue minimal 4-6 minggu sebelum tanggal pelaksanaan." },
        { name: "Rancang Program & Rundown", text: "Desain activity mix yang seimbang — tidak back-to-back high intensity, accommodate kebutuhan dietary dan religi, sertakan buffer time. Rundown harus include waktu registrasi, makan, ibadah, dan wrap-up." },
        { name: "Brief Vendor + Finalkan Proposal", text: "Minta proposal dengan line-item breakdown dari vendor. Konfirmasi: dedicated senior planner, risk register, dan post-event report. Deposit 30-50% setelah tanda tangan kontrak untuk lock date dan vendor." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />

      <main>
        {/* Hero — page-specific (smaller than home hero) */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.heroMain.src}
              alt="Outing kantor di Bandung — momentum bonding tim"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink/95" />
          </div>

          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Outing Kantor Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Guide · Update 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Outing Kantor Bandung 2026:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Panduan budget, itinerary, dan vendor recommended.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Range biaya, sample itinerary 1D/2D1N/3D2N, 5 lokasi top di
                Bandung &amp; sekitarnya, dan checklist 7-poin pilih vendor.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Answer Box — featured snippet bait */}
        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Outing kantor di Bandung biasanya menghabiskan{" "}
                <strong>Rp 2,5–5 juta per pax untuk paket 2D1N standar</strong>{" "}
                (sudah include venue, F&amp;B 3x, transportation lokal, activity,
                project management). Durasi paling umum: <strong>2D1N atau 3D2N</strong>.
                Lokasi favorit: <strong>Lembang</strong> (cool, scenic) atau{" "}
                <strong>Ciwidey</strong> (adventure, Kawah Putih). Booking
                minimum <strong>3–4 minggu sebelum hari H</strong>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 1,8–7 jt/pax</Tag>
                <Tag>Pax: 20–2.000</Tag>
                <Tag>Durasi: 1D – 3D2N</Tag>
                <Tag>Lokasi: Lembang · Ciwidey · Pangalengan</Tag>
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
                  href="#budget"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat budget breakdown
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Table of contents</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#why-bandung", "Mengapa Bandung untuk outing kantor"],
                ["#types", "Tipe outing kantor"],
                ["#budget", "Estimasi budget per pax"],
                ["#duration", "1D vs 2D1N vs 3D2N"],
                ["#itinerary", "Sample itinerary"],
                ["#locations", "5 lokasi top"],
                ["#vendor", "Cara pilih vendor"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-ink hover:text-brand-deep flex items-baseline gap-2"
                  >
                    <span className="text-slate-mute font-mono text-xs">
                      ↓
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 1: Why Bandung */}
        <Section id="why-bandung" eyebrow="Section 1" title="Mengapa Bandung pilihan top untuk outing kantor?">
          <p>
            Bandung jadi destinasi paling sering di-pick untuk corporate outing
            dari Jakarta dan kota besar lainnya karena 4 alasan kombinatif:
            akses cepat, hawa sejuk, infrastruktur venue matang, dan ragam
            aktivitas dalam radius 2 jam.
          </p>
          <p>
            <strong>Akses:</strong> 2–3 jam dari Jakarta via tol Cipularang.
            Bandara Husein Sastranegara untuk client dari luar Jawa. Untuk grup
            besar (200+ pax), kami biasa atur multi-bus convoy dengan
            checkpoint stop di KM 42 (rest area Cipali) atau langsung ke venue.
          </p>
          <p>
            <strong>Hawa:</strong> Suhu rata-rata 18–24°C di area Lembang/Ciwidey,
            ideal untuk outdoor activity tanpa peserta exhausted karena panas.
            Beda dengan venue Puncak yang sering hujan sore, atau Anyer/Carita
            yang lembab.
          </p>
          <p>
            <strong>Venue density:</strong> Dalam radius 90 menit dari pusat
            Bandung, ada 60+ venue corporate-ready — villa private (capacity
            10–200), resort dengan ballroom (kapasitas 300–800), glamping site,
            dan outdoor activity ground. Kami punya direct partnership dengan
            mereka, bukan reseller.
          </p>
          <p>
            <strong>Activity mix:</strong> Outbound adventure (Maribaya,
            Cikole), hot spring (Ciater), Kawah Putih, tea plantation
            (Pangalengan), sky-walk Tebing Keraton, dan workshop budaya
            (angklung Saung Mang Udjo, Saung Mas Mansyur). Satu trip 2D1N bisa
            cover 3–4 spot tanpa harus mengarahkan ke arah berlawanan.
          </p>
        </Section>

        {/* Section 2: Types */}
        <Section id="types" eyebrow="Section 2" title="6 tipe outing kantor yang paling sering kami handle">
          <ol className="not-prose space-y-3">
            {[
              {
                t: "Annual Company Gathering (2D1N – 3D2N)",
                d: "Marquee event tahunan untuk seluruh perusahaan — opening ceremony, awarding night, team activity, gala dinner. Pax 100–800.",
              },
              {
                t: "Team Building (Half Day – 2D1N)",
                d: "Fokus team outcomes specific: komunikasi, problem solving, alignment. Format outbound, indoor workshop, atau hybrid. Pax 20–300.",
              },
              {
                t: "Department / Squad Bonding (1D – 1D2N)",
                d: "Smaller scale, lebih intimate. Tim department atau cross-functional squad. Vibe casual + 1 substantive activity.",
              },
              {
                t: "Executive Offsite (1D – 2D1N)",
                d: "C-level atau senior leadership. Discreet venue (private villa), boardroom-style agenda dengan recreation di antaranya. Pax 8–30.",
              },
              {
                t: "Glamping Corporate (1D2N)",
                d: "Unique outdoor experience tanpa kompromi kenyamanan. Cocok untuk team yang mau differentiator dari hotel/villa biasa. Pax 30–80.",
              },
              {
                t: "Family Day Corporate (1D)",
                d: "Tim + keluarga + anak. Multi-aktivitas paralel (anak-anak vs dewasa), F&B yang accommodate semua, photo moments. Pax 100–1.000.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="rounded-2xl border border-border bg-paper p-5"
              >
                <p className="font-medium text-ink">{item.t}</p>
                <p className="mt-1 text-sm text-slate">{item.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Section 3: Budget */}
        <Section
          id="budget"
          eyebrow="Section 3"
          title="Estimasi budget outing kantor Bandung per pax (2D1N standar)"
        >
          <p>
            Range pricing di bawah ini untuk paket 2D1N standar (50–200 pax),
            sudah include venue, F&amp;B 3x, transportation lokal, activity,
            project management, dan contingency 8%. Berbeda tier = berbeda
            kualitas venue dan kompleksitas activity.
          </p>

          <div className="not-prose overflow-x-auto -mx-6 md:mx-0 mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Tier</th>
                  <th className="px-4 py-3 font-medium">Per pax</th>
                  <th className="px-4 py-3 font-medium">Total (100 pax)</th>
                  <th className="px-4 py-3 font-medium">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Conservative", "Rp 1,8–2,5 jt", "Rp 180–250 jt", "Budget-conscious quarterly outing"],
                  ["Standard", "Rp 2,5–4,5 jt", "Rp 250–450 jt", "Annual gathering, sweet spot"],
                  ["Premium", "Rp 4,5–7 jt", "Rp 450–700 jt", "Marquee annual event"],
                  ["Bespoke", "Rp 7 jt+", "Rp 700 jt+", "C-suite offsite, fully custom"],
                ].map(([tier, perPax, total, bestFor], i) => (
                  <tr key={i} className="border-b border-divider/60">
                    <td className="px-4 py-3 font-medium text-ink">{tier}</td>
                    <td className="px-4 py-3 text-slate tabular">{perPax}</td>
                    <td className="px-4 py-3 text-slate tabular">{total}</td>
                    <td className="px-4 py-3 text-slate">{bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            <strong>Breakdown komponen (proporsi typical):</strong> Venue
            30–40%, F&amp;B 25–30%, Activity 15–20%, Transportation 5–10%,
            Talent/Production 5–10%, Contingency 5–8%, Project Management
            included. Untuk grup &gt; 300 pax, ekonomi skala turun ke
            Rp 2–4 jt/pax untuk tier standard karena negotiation power dengan
            venue.
          </p>
        </Section>

        {/* Section 4: Duration */}
        <Section
          id="duration"
          eyebrow="Section 4"
          title="1 Day vs 2D1N vs 3D2N — durasi mana yang fit?"
        >
          <div className="not-prose overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Aspek</th>
                  <th className="px-4 py-3 font-medium">1 Day</th>
                  <th className="px-4 py-3 font-medium">2D1N</th>
                  <th className="px-4 py-3 font-medium">3D2N</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Best for", "Quarterly refresh", "Annual outing", "Marquee event"],
                  ["Bonding depth", "Surface-level", "Real bonding", "Deep + complete arc"],
                  ["Budget index", "1x", "2,5x", "4x"],
                  ["Logistics complexity", "Low", "Medium", "High"],
                  ["Pax sweet spot", "Up to 200", "50–500", "100–1.500"],
                  ["Recovery vibe", "Tired", "Refreshed", "Properly reset"],
                ].map(([aspect, d1, d2, d3], i) => (
                  <tr key={i} className="border-b border-divider/60">
                    <td className="px-4 py-3 font-medium text-ink">{aspect}</td>
                    <td className="px-4 py-3 text-slate">{d1}</td>
                    <td className="px-4 py-3 text-slate">{d2}</td>
                    <td className="px-4 py-3 text-slate">{d3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            <strong>Rule of thumb:</strong> Quarterly bonding cukup 1 day.
            Annual outing default ke 2D1N. Marquee event (anniversary, hari
            jadi 5/10 tahun, post-IPO, post-acquisition) layakkan 3D2N untuk
            arc cerita yang complete.
          </p>
        </Section>

        {/* Section 5: Sample Itineraries */}
        <Section
          id="itinerary"
          eyebrow="Section 5"
          title="Sample itinerary — 3 format paling sering di-deliver"
        >
          <div className="not-prose grid gap-5 mt-4">
            {SAMPLE_ITINERARIES.map((itin, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl text-ink">
                      {itin.name}
                    </h3>
                    <p className="text-sm text-slate mt-1">{itin.pax}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                    Mulai {itin.priceFrom}
                  </span>
                </div>
                <ol className="space-y-2">
                  {itin.schedule.map((step, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate">
                      <span className="text-brand-deep flex-shrink-0">·</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 6: Locations */}
        <Section
          id="locations"
          eyebrow="Section 6"
          title="5 lokasi top outing kantor di Bandung & sekitarnya"
        >
          <div className="not-prose overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Area</th>
                  <th className="px-4 py-3 font-medium">Elevasi</th>
                  <th className="px-4 py-3 font-medium">Dari Bandung</th>
                  <th className="px-4 py-3 font-medium">Best for</th>
                  <th className="px-4 py-3 font-medium">Tipe venue</th>
                </tr>
              </thead>
              <tbody>
                {LOCATIONS.map((loc) => (
                  <tr key={loc.name} className="border-b border-divider/60">
                    <td className="px-4 py-3 font-medium text-ink">{loc.name}</td>
                    <td className="px-4 py-3 text-slate tabular">{loc.elevation}</td>
                    <td className="px-4 py-3 text-slate tabular">{loc.travelFromBdg}</td>
                    <td className="px-4 py-3 text-slate">{loc.bestFor}</td>
                    <td className="px-4 py-3 text-slate">{loc.venues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            Untuk grup pertama kali outing di Bandung, kami biasanya rekomendasi{" "}
            <strong>Lembang</strong> (variasi venue paling banyak) atau{" "}
            <strong>Ciwidey</strong> (kalau prioritas adventure outbound).
          </p>
        </Section>

        {/* Section 7: Vendor checklist */}
        <Section
          id="vendor"
          eyebrow="Section 7"
          title="Cara pilih vendor outing kantor: 7-point checklist"
        >
          <p>
            Vendor outing di Bandung banyak — dari corporate specialist sampai
            travel agent retail yang nyambi corporate. Berikut 7 hal yang harus
            di-cek sebelum sign contract:
          </p>

          <ul className="not-prose space-y-3 mt-5">
            {VENDOR_CHECKLIST.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-paper p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-paper text-xs font-medium flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-ink">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-slate-mute italic">
            Disclosure: kami check semua 7 — itulah kenapa kami nulis list-nya.
            Bandingin dengan vendor lain sebelum decide.
          </p>
        </Section>

        {/* Trust strip */}
        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                [STATS.eventsDelivered, "Events delivered"],
                [STATS.companiesTrusted, "Companies trusted"],
                [STATS.repeatBookingRate, "Repeat booking"],
                [STATS.avgResponseTime, "Avg response time"],
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

        {/* FAQ */}
        <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan HR sebelum booking">
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">
                  {item.answer}
                </div>
              </details>
            ))}
            <p className="mt-6 text-sm text-slate">
              Lihat juga:{" "}
              <Link href="/faq/budget" className="text-brand-deep hover:underline">FAQ Budget & Investasi</Link>
              {" · "}
              <Link href="/faq/location" className="text-brand-deep hover:underline">FAQ Lokasi & Venue</Link>
              {" · "}
              <Link href="/faq/vendor" className="text-brand-deep hover:underline">FAQ Vendor Selection</Link>
            </p>
          </div>
        </Section>

        {/* Related pages */}
        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "/panduan-corporate-outing-bandung",
                  "Panduan Corporate Outing Bandung",
                  "Master guide: semua jenis, budget, lokasi & vendor",
                ],
                [
                  "/event-organizer-corporate-bandung",
                  "Event Organizer Corporate Bandung",
                  "Specialist B2B vs generic EO — beda hasilnya",
                ],
                [
                  "/team-building-bandung",
                  "Team Building Bandung",
                  "Outbound, indoor, methodology framework",
                ],
                [
                  "/venue-gathering-bandung",
                  "Venue Gathering Bandung",
                  "20 rekomendasi hotel, villa & resort terbaik",
                ],
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
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <RelatedCaseStudies
          serviceSlugs={["company-gathering", "annual-company-trip"]}
          title="Outing kantor yang udah kami eksekusi."
          description="Lihat bagaimana kami handle outing 800 pax sampai intimate retreat — lengkap dengan brief, scope, hasil."
        />

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Ready bikin outing kantor di Bandung?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Briefing call 15 menit → proposal lengkap dengan breakdown,
              sample itinerary, dan 2 alternatif venue dalam 24 jam.
            </p>
            <ul className="mt-8 inline-grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Free proposal
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> No commitment
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> 0% hidden fees
              </li>
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
                href={buildWaLink("outing kantor Bandung")}
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
          message="Mau outing kantor Bandung untuk tim Anda? Free proposal dalam 24 jam."
          context="outing kantor Bandung"
        />
      </main>
    </>
  );
}

// ---------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------
function Section({
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-xs text-slate">
      {children}
    </span>
  );
}
