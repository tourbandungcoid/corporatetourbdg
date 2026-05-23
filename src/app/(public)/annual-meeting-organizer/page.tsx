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

const SLUG = "/annual-meeting-organizer";
const URL = `${SITE.url}${SLUG}`;
const TITLE =
  "Annual Meeting Organizer Bandung 2026: Rapat Tahunan & AGM Perusahaan Professional";
const DESCRIPTION =
  "Annual meeting organizer Bandung — AGM, rapat tahunan direksi, dan annual general meeting untuk perusahaan 50–1.000 pax. AV profesional, simultaneous translation, notulen digital. ⭐ 4.9/5 · Proposal 24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  keywords: [
    "annual meeting organizer",
    "annual meeting organizer bandung",
    "rapat tahunan perusahaan bandung",
    "AGM organizer bandung",
    "annual general meeting bandung",
    "rapat direksi organizer bandung",
    "corporate meeting organizer bandung",
    "jasa annual meeting bandung",
  ],
  openGraph: {
    title: "Annual Meeting Organizer Bandung — AGM & Rapat Tahunan 2026",
    description:
      "Specialist annual meeting & AGM di Bandung. AV profesional, SI translation, dokumentasi lengkap. 400+ events delivered · Proposal 24 jam.",
    url: URL,
    type: "article",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Apa itu annual meeting dan apa bedanya dengan AGM?",
    answer:
      "Annual meeting adalah rapat tahunan internal perusahaan — bisa berupa review kinerja, strategic planning, atau all-hands meeting. AGM (Annual General Meeting) adalah rapat umum pemegang saham yang bersifat legal-formal sesuai regulasi OJK/Kemenkumham. Annual meeting internal lebih fleksibel dalam format; AGM punya protokol hukum yang ketat termasuk quorum, voting, dan notulen yang disahkan. Keduanya butuh setup AV profesional dan dokumentasi yang akurat.",
  },
  {
    question: "Berapa biaya annual meeting organizer di Bandung?",
    answer:
      "Biaya annual meeting organizer Bandung: single-day meeting 50–200 pax Rp 1,5–3 jt/pax (termasuk venue, AV setup, F&B, dan PM fee). Multi-day annual meeting 200–500 pax dengan gala dinner Rp 3–5 jt/pax. AGM formal dengan simultaneous translation dan voting system: Rp 4–7 jt/pax. PM fee EO standalone (tanpa venue dan F&B): Rp 20–60 jt flat tergantung kompleksitas.",
  },
  {
    question: "Hotel venue terbaik untuk annual meeting di Bandung?",
    answer:
      "6 venue annual meeting terbaik Bandung: (1) Pullman Bandung Grand Central — fasilitas meeting terlengkap, kapasitas theater 1.500; (2) Hilton Bandung — 6 breakout rooms untuk parallel session; (3) Trans Luxury Hotel — AV in-house terbaik di Bandung; (4) Intercontinental Bandung Dago — ideal untuk delegasi internasional; (5) Sheraton Bandung Hotel & Convention Center; (6) Padma Hotel Lembang — outdoor meeting dengan mountain view. Semua venue kami punya direct partnership dan harga negosiasi.",
  },
  {
    question: "Apakah annual meeting bisa hybrid (online + offline)?",
    answer:
      "Iya. Hybrid annual meeting kami support penuh: multi-camera live switching, platform streaming (Zoom Webinar / Microsoft Teams Live / StreamYard), virtual audience Q&A management, dan on-site experience terpisah. Untuk AGM hybrid dengan peserta yang hak suaranya harus diverifikasi, kami integrate dengan sistem e-voting yang comply regulasi. Cost tambahan hybrid: Rp 50–150 jt tergantung setup.",
  },
  {
    question: "Apakah ada support simultaneous interpretation untuk peserta asing?",
    answer:
      "Iya. Untuk annual meeting dengan peserta ekspatriat atau board internasional, kami provide: interpreter bersertifikat (English-Indonesian atau multi-bahasa), isolated SI booth, receiver + earphone untuk peserta, dan audio routing terpisah dari main sound. Biaya tambahan Rp 25–60 juta tergantung jumlah bahasa dan durasi meeting.",
  },
  {
    question: "Apa saja yang termasuk dalam dokumentasi annual meeting?",
    answer:
      "Deliverables standar: (1) Notulen rapat digital (editable, dalam 2 hari kerja); (2) Recording video multi-kamera (full session + highlight summary); (3) Foto dokumentasi profesional; (4) Attendance report dengan sign-in digital; (5) Materi presentasi compiled (kalau termasuk scope); (6) Post-meeting survey peserta. Untuk AGM formal: notulen dalam format yang comply dengan persyaratan hukum korporasi.",
  },
  {
    question: "Berapa lama persiapan untuk annual meeting 300 pax?",
    answer:
      "Minimum 6–8 minggu untuk annual meeting 300 pax. Timeline: Minggu 1–2: brief, concept, venue lock, agenda draft; Minggu 3–4: AV design, speaker briefing, material collection; Minggu 5–6: rundown final, technical rehearsal, registration setup; H-1: full rehearsal + AV check; Hari-H: eksekusi dengan dedicated PM + crew. Peak season Q4 (Oktober–Desember): lock venue minimal 12 minggu sebelumnya.",
  },
  {
    question: "Apakah bisa kelola Q&A sesi untuk annual meeting skala besar?",
    answer:
      "Iya. Untuk annual meeting 200+ pax, kami recommend sistem Q&A digital: peserta submit pertanyaan via aplikasi/web form, moderator filter dan kurasikan pertanyaan relevan, lalu disampaikan ke speaker/panel. Alternatif: floor microphone dengan 2–3 wireless roving mic untuk Q&A langsung. Untuk AGM: Q&A perlu dokumentasi formal karena menjadi bagian dari rekaman keputusan pemegang saham.",
  },
];

const MEETING_FORMATS = [
  {
    name: "Annual General Meeting (AGM)",
    icon: "⚖️",
    pax: "50–500 pax",
    desc: "Rapat umum pemegang saham yang bersifat legal. Membutuhkan quorum, voting system, dan notulen yang disahkan sesuai regulasi.",
    includes: [
      "Venue ballroom dengan akustik baik",
      "Voting system digital / fisik",
      "Simultaneous interpretation (jika ada peserta asing)",
      "Notulen digital comply hukum",
      "Recording multi-kamera full session",
      "Dedicated sekretaris meeting",
    ],
    priceFrom: "Rp 4 jt/pax",
  },
  {
    name: "Annual Strategic Meeting",
    icon: "🎯",
    pax: "20–200 pax",
    desc: "Rapat tahunan internal untuk strategic review, goal-setting, dan alignment seluruh leadership atau divisi.",
    includes: [
      "Venue meeting room premium",
      "AV setup + whiteboard digital",
      "Fasilitator terstruktur (opsional)",
      "Breakout session management",
      "Dokumentasi output + action items",
      "F&B all-day",
    ],
    priceFrom: "Rp 2 jt/pax",
  },
  {
    name: "All-Hands Annual Meeting",
    icon: "🏢",
    pax: "100–1.000 pax",
    desc: "Company-wide meeting untuk komunikasi visi, review tahunan, dan recognition karyawan dari CEO.",
    includes: [
      "Ballroom + stage produksi",
      "Live streaming untuk cabang remote",
      "Presentasi multi-speaker",
      "Segment awarding / recognition",
      "MC profesional",
      "Town hall Q&A",
    ],
    priceFrom: "Rp 2,5 jt/pax",
  },
  {
    name: "Board Meeting & Direksi",
    icon: "👔",
    pax: "8–30 pax",
    desc: "Rapat direksi atau komisaris dengan setup formal, kerahasiaan tinggi, dan dokumentasi legal.",
    includes: [
      "Private meeting room eksklusif",
      "Catering premium",
      "Dokumentasi ketat + NDA crew",
      "Notulen format legal",
      "Simultaneous interpretation",
      "Security arrangement",
    ],
    priceFrom: "Rp 5 jt/pax",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Brief & Scoping",
    desc: "Kami align tipe meeting (AGM / strategic / all-hands), agenda, pax, format (in-person / hybrid), kebutuhan SI translation, dan deliverables yang dibutuhkan.",
  },
  {
    step: "02",
    name: "Venue & AV Proposal",
    desc: "2 rekomendasi venue dengan kapasitas, fasilitas AV, dan harga negosiasi. Layout ruang, AV setup plan, dan estimate budget dalam 24–48 jam.",
  },
  {
    step: "03",
    name: "Agenda & Rundown",
    desc: "Finalisasi agenda meeting, rundown detail per sesi, speaker brief sheet, AV cue sheet, dan allocation waktu (termasuk buffer untuk Q&A dan transisi).",
  },
  {
    step: "04",
    name: "Technical Rehearsal",
    desc: "H-1: tech rehearsal lengkap — slide check per speaker, mic test, streaming platform test (jika hybrid), dan si booth test. Zero technical surprise di hari-H.",
  },
  {
    step: "05",
    name: "Eksekusi On-site",
    desc: "PM senior + AV crew on-site dari setup sampai wrap-up. Registration management, speaker greenroom, dan real-time troubleshooting.",
  },
  {
    step: "06",
    name: "Dokumentasi & Notulen",
    desc: "Notulen digital siap dalam 2 hari kerja. Recording full session + highlight, foto dokumentasi, dan attendance report dalam 5 hari kerja.",
  },
];

export default function AnnualMeetingOrganizerPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: IMAGES.packageAnnualGathering.src,
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Annual Meeting Organizer", url: URL },
    ]),
    serviceSchema({
      name: "Annual Meeting Organizer Bandung",
      description:
        "Specialist annual meeting dan AGM organizer di Bandung — AGM formal, strategic annual meeting, all-hands meeting, board meeting. AV profesional, simultaneous translation, dokumentasi legal.",
      priceRange: "Rp 1.500.000 - Rp 7.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Merencanakan Annual Meeting Perusahaan yang Efektif",
      description:
        "6 langkah untuk merencanakan dan mengeksekusi annual meeting perusahaan yang berjalan lancar — dari scoping hingga dokumentasi.",
      steps: [
        {
          name: "Definisikan Tipe dan Tujuan Meeting",
          text: "Bedakan AGM (legal, quorum, voting) vs strategic annual meeting (internal, no legal requirement) vs all-hands (town hall besar). Setiap tipe punya requirement venue, AV, dan dokumentasi yang berbeda.",
        },
        {
          name: "Lock Venue dan Tanggal Minimal 8 Minggu Sebelumnya",
          text: "Venue ballroom kualitas baik di Bandung sudah penuh di Q4. Untuk AGM, tanggal sering ditentukan oleh jadwal regulasi — pastikan venue konfirmasi availability sebelum announce ke pemegang saham.",
        },
        {
          name: "Susun Agenda dan Speaker Lineup",
          text: "Agenda annual meeting yang efektif: pembukaan (15 menit), laporan tahunan / presentasi utama (60–90 menit), Q&A terstruktur (30–45 menit), dan penutupan (15 menit). Untuk AGM: tambahkan segmen voting dan pengesahan keputusan.",
        },
        {
          name: "Setup AV dan Platform Hybrid (jika perlu)",
          text: "Annual meeting dengan 100+ pax butuh: sound system multi-zone, confidence monitor untuk speaker, recording minimal 2 kamera. Jika hybrid: dedicated streaming engineer, platform stable (Zoom Webinar atau Teams Live), dan pre-event tech rehearsal dengan speaker remote.",
        },
        {
          name: "Briefing Semua Speaker Sebelum Hari-H",
          text: "Kirim deck template branded, batas slide count, dan timing per segmen minimal 2 minggu sebelum acara. Lakukan tech rehearsal H-1 untuk cek slide, mic level, dan timing aktual. Speaker yang tidak di-brief cenderung overtime dan ganggu schedule seluruh acara.",
        },
        {
          name: "Siapkan Dokumentasi Legal dan Operasional",
          text: "Untuk AGM: siapkan notulensi dalam format yang comply UU PT atau regulasi OJK. Untuk semua annual meeting: sign-in sheet digital, recording multi-kamera, dan action item tracker yang di-distribute ke semua peserta dalam 2 hari kerja setelah meeting.",
        },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="Annual meeting organizer Bandung — proposal dalam 24 jam."
        context="annual meeting / AGM Bandung"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.packageAnnualGathering.src}
              alt="Annual meeting organizer Bandung — setup profesional untuk rapat tahunan perusahaan"
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
                <Link href="/" className="hover:text-paper">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href="/corporate-event-bandung"
                  className="hover:text-paper"
                >
                  Corporate Event Bandung
                </Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Annual Meeting Organizer</span>
              </nav>

              <span className="eyebrow text-brand-light/70">
                AGM & Rapat Tahunan · Update 2026
              </span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Annual Meeting Organizer Bandung:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  AGM, Rapat Tahunan & Strategic Meeting Profesional.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Dari AGM formal dengan protokol hukum hingga all-hands annual
                meeting 1.000 pax — kami provide venue, AV setup, simultaneous
                interpretation, dokumentasi legal, dan project management
                end-to-end.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
                >
                  Request Proposal Annual Meeting
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={buildWaLink("annual meeting / AGM di Bandung")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
                >
                  <Whatsapp size={16} />
                  Chat Langsung
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/60">
                <span>⭐ 4.9/5 Google Reviews</span>
                <span>{STATS.eventsDelivered} events delivered</span>
                <span>Proposal dalam 24 jam</span>
                <span>Sejak 2018</span>
              </div>
            </div>
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
                <strong>Annual meeting organizer Bandung</strong> untuk{" "}
                <strong>50–500 pax</strong> mulai{" "}
                <strong>Rp 1,5–5 jt/pax</strong> tergantung format (AGM /
                strategic / all-hands) dan kelengkapan produksi. Kami handle
                full scope:{" "}
                <strong>venue, AV profesional, simultaneous interpretation</strong>
                , notulen legal, hybrid streaming, dan dokumentasi dalam 5 hari
                kerja.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 1,5–7 jt/pax</Tag>
                <Tag>Pax: 8–1.000</Tag>
                <Tag>Hybrid: Tersedia</Tag>
                <Tag>SI Translation: Tersedia</Tag>
                <Tag>Notulen Legal: Tersedia</Tag>
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request Proposal Sekarang
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#format"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat format meeting
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TOC */}
        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Daftar isi</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#format", "4 format annual meeting yang kami handle"],
                ["#budget", "Estimasi biaya annual meeting 2026"],
                ["#venue", "Venue annual meeting terbaik di Bandung"],
                ["#hybrid", "Annual meeting hybrid (online + offline)"],
                ["#proses", "Proses kerja kami"],
                ["#case-studies", "Case studies"],
                ["#faq", "FAQ Annual Meeting Organizer Bandung"],
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

        {/* Section 1: Format */}
        <Section
          id="format"
          eyebrow="Section 1"
          title="4 format annual meeting yang kami handle"
        >
          <p>
            Setiap format annual meeting punya requirement yang sangat berbeda —
            dari protokol hukum AGM sampai town hall all-hands ribuan peserta.
            Kami customize setup, AV, dan dokumentasi sesuai kebutuhan spesifik.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-5">
            {MEETING_FORMATS.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl bg-paper border border-border p-6"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-2xl">{f.icon}</span>
                    <h3 className="font-semibold text-base mt-1">{f.name}</h3>
                  </div>
                  <span className="text-xs text-slate bg-cream px-2.5 py-1 rounded-full shrink-0">
                    {f.pax}
                  </span>
                </div>
                <p className="text-sm text-slate mb-4">{f.desc}</p>
                <ul className="space-y-1 mb-4">
                  {f.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-ink">
                      <Check size={12} className="text-brand shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-brand">
                  {f.priceFrom}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 2: Budget */}
        <Section
          id="budget"
          eyebrow="Section 2"
          title="Estimasi biaya annual meeting organizer Bandung 2026"
        >
          <p>
            Breakdown estimasi biaya annual meeting di Bandung berdasarkan
            format dan skala. Proposal kami selalu line-item — tidak ada biaya
            tersembunyi.
          </p>
          <div className="not-prose mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="text-left px-4 py-3 rounded-tl-xl font-medium">Format</th>
                  <th className="text-left px-4 py-3 font-medium">Pax</th>
                  <th className="text-left px-4 py-3 font-medium">Durasi</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl font-medium">Estimasi /pax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-divider">
                {[
                  { format: "Board meeting / direksi", pax: "8–30", dur: "Half-day–1D", price: "Rp 3–6 jt" },
                  { format: "AGM formal (50–200 pax)", pax: "50–200", dur: "1D", price: "Rp 4–6 jt" },
                  { format: "AGM formal (200–500 pax)", pax: "200–500", dur: "1D", price: "Rp 3–5 jt" },
                  { format: "Strategic annual meeting", pax: "20–200", dur: "1D–2D1N", price: "Rp 2–4 jt" },
                  { format: "All-hands annual meeting", pax: "100–500", dur: "1D", price: "Rp 2–3,5 jt" },
                  { format: "All-hands + gala malam", pax: "100–1.000", dur: "1D+malam", price: "Rp 3–5 jt" },
                  { format: "Hybrid meeting (tambah)", pax: "Semua", dur: "Semua", price: "+Rp 50–150 jt (flat)" },
                  { format: "SI translation (tambah)", pax: "Semua", dur: "Semua", price: "+Rp 25–60 jt (flat)" },
                ].map((row) => (
                  <tr key={row.format} className="hover:bg-cream/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-ink">{row.format}</td>
                    <td className="px-4 py-3 text-slate">{row.pax}</td>
                    <td className="px-4 py-3 text-slate">{row.dur}</td>
                    <td className="px-4 py-3 font-semibold text-brand">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate mt-4">
            * Belum termasuk PPN 11%. PM fee biasanya Rp 20–60 jt flat atau
            8–15% dari total budget.
          </p>
        </Section>

        {/* Section 3: Venue */}
        <Section
          id="venue"
          eyebrow="Section 3"
          title="Venue annual meeting terbaik di Bandung"
        >
          <p>
            Annual meeting membutuhkan venue dengan akustik baik, AV setup yang
            proper, dan kapasitas yang sesuai. Kami punya direct partnership
            dengan venue-venue berikut — negosiasi harga langsung, bukan melalui
            reseller.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Pullman Bandung Grand Central",
                cap: "Theater 1.500 · Meeting rooms 10+",
                loc: "Pusat Kota",
                notes: "Pilihan utama untuk AGM skala besar. Akses tol paling mudah di Bandung.",
              },
              {
                name: "Hilton Bandung",
                cap: "Theater 800 · 6 breakout rooms",
                loc: "Pusat Kota",
                notes: "Ideal untuk annual meeting dengan parallel breakout session divisi.",
              },
              {
                name: "Trans Luxury Hotel",
                cap: "Grand Ballroom 1.000 pax",
                loc: "Pasteur",
                notes: "AV in-house terbaik di Bandung. Pilihan premium untuk high-production annual meeting.",
              },
              {
                name: "Intercontinental Bandung Dago",
                cap: "Theater 600 · 7 meeting rooms",
                loc: "Dago",
                notes: "Venue pilihan untuk annual meeting dengan delegasi internasional dan kebutuhan SI.",
              },
              {
                name: "Sheraton Bandung Hotel & Convention",
                cap: "Ballroom 800 · Convention center",
                loc: "Dago",
                notes: "Convention facility dengan ruang terpisah untuk registration dan breakout session.",
              },
              {
                name: "Padma Hotel Lembang",
                cap: "Indoor 500 + outdoor area",
                loc: "Lembang",
                notes: "Untuk strategic annual meeting yang ingin suasana berbeda. Mountain view exclusive.",
              },
            ].map((v) => (
              <div key={v.name} className="rounded-xl border border-border bg-paper p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm">{v.name}</h3>
                  <span className="text-xs text-slate bg-cream px-2 py-0.5 rounded-full shrink-0">
                    {v.loc}
                  </span>
                </div>
                <p className="text-xs text-brand font-medium mt-1.5">{v.cap}</p>
                <p className="text-xs text-slate mt-2">{v.notes}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 4: Hybrid */}
        <Section
          id="hybrid"
          eyebrow="Section 4"
          title="Annual meeting hybrid — peserta hadir online dan offline"
        >
          <p>
            Perusahaan dengan cabang di banyak kota atau peserta internasional
            butuh hybrid annual meeting yang proper — bukan sekadar pasang Zoom
            di proyektor. Full hybrid setup kami:
          </p>
          <div className="not-prose mt-5 grid sm:grid-cols-2 gap-3">
            {[
              { title: "Multi-camera live switching", desc: "Minimal 3 kamera — stage wide, speaker close-up, dan audience. Switched live oleh dedicated vision mixer." },
              { title: "Platform streaming profesional", desc: "Zoom Webinar, Microsoft Teams Live, YouTube Private, atau custom RTMP. Pre-event platform testing dengan semua peserta remote." },
              { title: "E-voting untuk AGM hybrid", desc: "Sistem voting digital yang terverifikasi identitas peserta, comply regulasi OJK untuk RUPS. Hasil real-time dengan audit trail." },
              { title: "Virtual Q&A management", desc: "Sistem submit pertanyaan dari peserta online, dikurasi moderator, dan disampaikan ke speaker — sama dengan floor Q&A." },
              { title: "Broadcast-quality audio", desc: "Mix audio terpisah untuk online (bersih, no room reverb) dan on-site. Berbeda setup, berbeda output — standar broadcast." },
              { title: "Notulen real-time", desc: "Live note-taking dengan notulen digital yang di-share ke semua peserta setelah meeting — bukan 2 minggu kemudian." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-paper p-4">
                <p className="font-semibold text-sm text-ink">{item.title}</p>
                <p className="text-xs text-slate mt-1.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 5: Process */}
        <Section
          id="proses"
          eyebrow="Section 5"
          title="Proses kerja annual meeting organizer kami"
        >
          <p>
            Annual meeting yang molor, AV yang bermasalah, atau notulen yang
            tidak lengkap — semua itu terjadi karena persiapan yang kurang.
            Berikut proses standar kami:
          </p>
          <div className="not-prose mt-6 space-y-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-2xl border border-border bg-paper p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand">{step.step}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{step.name}</p>
                  <p className="text-sm text-slate mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Case Studies */}
        <section
          id="case-studies"
          className="py-16 md:py-20 border-t border-divider"
        >
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Case Studies</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
              Annual meeting & AGM yang pernah kami handle.
            </h2>
            <RelatedCaseStudies
              serviceSlugs={["mice", "company-gathering", "annual-company-trip"]}
            />
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-16 md:py-20 border-t border-divider bg-cream/30"
        >
          <div className="container-1280">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow text-slate mb-3">FAQ</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
                Pertanyaan paling sering tentang annual meeting organizer.
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-border bg-paper p-6"
                  >
                    <h3 className="font-semibold text-sm text-ink mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-14 border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Layanan terkait</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/mice-organizer-bandung",
                  label: "MICE Organizer Bandung",
                  desc: "Meeting, conference, incentive, exhibition skala besar",
                },
                {
                  href: "/corporate-gathering-bandung",
                  label: "Corporate Gathering Bandung",
                  desc: "Annual event dengan awarding night dan gala dinner",
                },
                {
                  href: "/corporate-event-bandung",
                  label: "Corporate Event Bandung",
                  desc: "Overview semua format corporate event B2B",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-border bg-paper p-5 hover:border-brand/40 transition-all"
                >
                  <p className="font-semibold text-sm text-ink group-hover:text-brand-deep transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-slate mt-1">{link.desc}</p>
                  <ArrowRight
                    size={14}
                    className="text-brand mt-3 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container-1280 text-center">
            <p className="eyebrow text-brand mb-4">Annual Meeting Organizer Bandung</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-2xl mx-auto">
              Siap plan annual meeting perusahaan Anda?
            </h2>
            <p className="text-paper/70 mb-8 max-w-xl mx-auto">
              Ceritakan format meeting (AGM / strategic / all-hands), jumlah
              pax, dan tanggal target — kami kirim proposal dan rekomendasi venue
              dalam 24 jam.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/proposal/request"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-13 font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
              >
                Request Proposal Sekarang
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={buildWaLink("annual meeting / AGM di Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 text-paper px-8 h-13 font-medium hover:bg-paper hover:text-ink transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

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
    <section id={id} className="py-16 md:py-20 border-t border-divider">
      <div className="container-1280">
        <div className="max-w-4xl">
          <p className="eyebrow text-slate mb-3">{eyebrow}</p>
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
            {title}
          </h2>
          <div className="prose prose-slate max-w-none">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}
