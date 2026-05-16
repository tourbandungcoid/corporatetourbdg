import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkle, Whatsapp } from "@/components/icons/Icons";
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

const SLUG = "/mice-organizer-bandung";
const URL = `${SITE.url}${SLUG}`;
const TITLE = "MICE Organizer Bandung 2026: Meeting, Incentive, Conference & Exhibition";
const DESCRIPTION =
  "MICE organizer Bandung — full-stack event production untuk meeting, incentive, conference, dan exhibition. Stage AV setup, multi-session coordination, hybrid capability. Rp 3–6 jt/pax. ⭐ 4.9/5 · Proposal 24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "MICE Organizer Bandung — Full Event Production 2026",
    description:
      "Specialist MICE Bandung: meeting, incentive, conference, exhibition. Stage AV, multi-session, hybrid. 400+ events delivered.",
    url: URL,
    type: "article",
    images: [{ url: IMAGES.packageAnnualGathering.src, width: 1200, height: 630, alt: IMAGES.packageAnnualGathering.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MICE Organizer Bandung — Meeting, Incentive, Conference, Exhibition",
    description: "Full-stack MICE production Bandung. Stage AV, multi-session, hybrid. Rp 3–6 jt/pax. 400+ events.",
    images: [IMAGES.packageAnnualGathering.src],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Apa itu MICE dan apa bedanya dengan corporate gathering biasa?",
    answer:
      "MICE adalah singkatan dari Meeting, Incentive, Conference, dan Exhibition — kategori event bisnis terstruktur yang biasanya lebih besar scope-nya. Bedanya dengan corporate gathering biasa: MICE punya komponen produksi yang lebih kompleks (stage AV profesional, multi-session room, speaker management, registration system), seringkali dengan elemen conferencing formal atau exhibition booth. Corporate gathering lebih berorientasi pada bonding dan celebration, MICE lebih ke knowledge sharing, business development, atau reward program terstruktur.",
  },
  {
    question: "Berapa biaya MICE organizer di Bandung per pax?",
    answer:
      "Range Rp 3–6 juta per pax untuk MICE di Bandung, tergantung format dan scope produksi. Single-day conference 100-300 pax mulai Rp 3 jt/pax. Multi-day conference 200-500 pax Rp 4-5 jt/pax. Conference + exhibition Rp 5-6 jt/pax. Sudah include venue (hotel ballroom premium), AV production, F&B, dokumentasi, dan project management. Hybrid streaming tambah Rp 80-200 jt untuk setup penuh.",
  },
  {
    question: "Hotel dan venue MICE terbaik di Bandung untuk 200-500 pax?",
    answer:
      "8 venue MICE premium Bandung: (1) Pullman Bandung Grand Central — ballroom 1.500 pax, fasilitas konferensi lengkap; (2) Hilton Bandung — 6 meeting room, kapasitas theater 800; (3) Trans Luxury Hotel — grand ballroom 1.000 pax; (4) Intercontinental Bandung Dago — 7 ruang meeting; (5) Padma Hotel Lembang — outdoor + indoor capability; (6) The Trans Resort Bandung; (7) Sheraton Bandung; (8) Holiday Inn Express Pasteur. Detail kapasitas dan ketersediaan kami share dalam proposal.",
  },
  {
    question: "Apakah bisa MICE hybrid (online + offline)?",
    answer:
      "Iya. Kami support full hybrid MICE production: multi-camera live switching, dedicated streaming engineer, platform (Zoom Webinar, StreamYard, atau custom), virtual audience Q&A management, dan on-site attendee experience terpisah. Cost tambahan Rp 80-200 juta untuk setup hybrid production penuh, tergantung jumlah kamera, bandwidth venue, dan fitur interaktif yang dibutuhkan.",
  },
  {
    question: "Berapa lama persiapan MICE conference 300 pax?",
    answer:
      "Minimum 8-10 minggu untuk conference 300 pax. 4 minggu pertama: brief, concept, venue lock, speaker lineup. 4 minggu berikutnya: content development, AV rehearsal, registration setup, material production. H-1: rehearsal penuh. Peak season (Q4 Oktober–Desember) lock venue minimal 14 minggu sebelumnya. Untuk MICE dengan komponen pameran/exhibition, tambah 2-4 minggu untuk booth design dan setup.",
  },
  {
    question: "Apakah MICE bisa dikombinasikan dengan company gathering?",
    answer:
      "Iya, ini adalah format yang paling sering kami handle: Conference di siang hari (knowledge sharing, panel diskusi, breakout session) + gathering evening (gala dinner, awarding, entertainment). Format 2D1N: Day 1 arrival + welcome dinner; Day 2 full conference + gala night. Format 3D2N: Day 1 workshop pre-conference; Day 2 full conference; Day 3 gathering activities + closing. Single venue yang bisa handle keduanya idealnya hotel bintang 4-5 dengan ballroom + outdoor.",
  },
  {
    question: "Apa saja komponen teknis AV yang wajib untuk conference profesional?",
    answer:
      "8 komponen AV esensial: (1) Stage design + backdrop custom; (2) LED screen atau proyektor HD dengan seamless switching; (3) Sound system profesional dengan wireless mic; (4) Lighting stage (key light, fill, color wash); (5) Recording setup (minimal 2 kamera); (6) Confidence monitor untuk speaker; (7) Prompter kalau dibutuhkan; (8) On-site AV engineer selama event. Untuk simultaneous translation: tambah booth + interpreter system + receiver untuk peserta.",
  },
  {
    question: "Bagaimana proses registrasi peserta untuk large-scale conference?",
    answer:
      "Kami menyediakan sistem registrasi digital end-to-end: (1) Landing page registrasi branded; (2) QR code check-in on-site (kurangi antrean); (3) Name badge auto-print; (4) Session capacity management; (5) Real-time attendance tracking; (6) Post-event survey digital. Untuk conference 200+ pax, dedicated registration crew 3-5 orang di pintu masuk. Integrasi dengan company HR system bisa kami arrange untuk corporate conference internal.",
  },
  {
    question: "Apakah ada support simultaneous translation untuk peserta internasional?",
    answer:
      "Iya. Kami support simultaneous translation (SI) untuk event dengan peserta campuran Indonesia-Inggris atau multi-bahasa. Komponen: interpreter profesional bersertifikat, booth SI isolated, receiver + earphone untuk peserta, audio routing ke system utama. Biaya tambahan Rp 30-80 juta per event tergantung jumlah bahasa dan durasi. Untuk high-stakes event (board meeting internasional, joint venture conference), kami rekomendasikan interpreter dengan pengalaman spesifik di industri klien.",
  },
  {
    question: "Apa beda MICE organizer specialist vs hotel AV package?",
    answer:
      "Hotel AV package hanya cover peralatan dasar yang ada di venue. MICE specialist memberikan: (1) Creative direction + stage concept yang aligned dengan tema event; (2) Konten visual (animasi, video bumper, PPT template branded); (3) Rehearsal management untuk speaker; (4) Real-time problem solving selama event; (5) Dokumentasi edit-siap dalam 48 jam; (6) Koordinasi lintas vendor (catering, decorator, entertainment). Hotel tidak akan manage koordinasi ini — MICE organizer yang jadi single point of contact.",
  },
];

const MICE_FORMATS = [
  {
    name: "Corporate Meeting",
    icon: "🤝",
    pax: "20–200 pax",
    desc: "Annual general meeting, board meeting, stakeholder briefing. Formal setup dengan dokumentasi keputusan.",
    includes: ["Meeting room premium", "AV setup dasar", "Notulen + dokumentasi", "F&B coffee break + lunch"],
    priceFrom: "Rp 2 jt/pax",
  },
  {
    name: "Conference & Seminar",
    icon: "🎤",
    pax: "100–500 pax",
    desc: "Single atau multi-track conference dengan speaker lineup, panel diskusi, dan networking session.",
    includes: ["Ballroom + stage produksi", "Multi-camera recording", "Registration system", "Moderator + MC", "Breakout sessions"],
    priceFrom: "Rp 3 jt/pax",
  },
  {
    name: "Incentive Program",
    icon: "🏆",
    pax: "30–200 pax",
    desc: "Reward trip premium untuk top performers — destination experience memorable dengan recognition ceremony.",
    includes: ["Premium accommodation", "Exclusive activities", "Recognition gala dinner", "Branded merchandise", "Photographer profesional"],
    priceFrom: "Rp 3,5 jt/pax",
  },
  {
    name: "Exhibition & Expo",
    icon: "🏛️",
    pax: "200–1000+ visitors",
    desc: "Booth design, layout venue, traffic flow management, dan brand activation untuk pameran korporat.",
    includes: ["Booth design + construction", "Venue layout + signage", "Traffic flow management", "Demo station setup", "Lead capture system"],
    priceFrom: "Custom quote",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discovery Brief",
    desc: "Briefing call 60–90 menit untuk align objective, target peserta, key message, scope produksi, dan budget. Kami tidak quote sebelum brief.",
  },
  {
    step: "02",
    name: "Concept & Proposal",
    desc: "Theme concept, venue rekomendasi (2 alternatif), rundown draft, dan line-item budget breakdown dalam 24–48 jam setelah brief.",
  },
  {
    step: "03",
    name: "Production Planning",
    desc: "8–12 minggu prep: speaker management, AV design, content development, vendor coordination, registration system setup.",
  },
  {
    step: "04",
    name: "Rehearsal",
    desc: "Full rehearsal H-1: speaker briefing, AV cue sheet, blocking stage, run of show final review. Zero surprise di hari H.",
  },
  {
    step: "05",
    name: "Execution",
    desc: "Senior PM + production crew + AV team on-site. Real-time coordination via radio. Contingency plan aktif selama event.",
  },
  {
    step: "06",
    name: "Post-Event Report",
    desc: "Video highlight (edit dalam 48 jam), attendance report, survey results, dan dokumentasi foto profesional dalam 5 hari kerja.",
  },
];

export default function MiceOrganizerBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: IMAGES.packageAnnualGathering.src,
      datePublished: "2026-05-14",
      dateModified: "2026-05-14",
      slug: SLUG,
      aboutService: "MICE Organizer Bandung",
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "MICE Organizer Bandung", url: URL },
    ]),
    serviceSchema({
      name: "MICE Organizer Bandung",
      description:
        "Full-stack MICE event production di Bandung — meeting, incentive, conference, exhibition. Stage AV setup profesional, multi-session coordination, hybrid capability.",
      priceRange: "Rp 3.000.000 - Rp 6.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Memilih MICE Organizer Bandung yang Tepat",
      description: "5 langkah untuk memilih dan bekerja dengan MICE organizer Bandung yang capable untuk event skala besar.",
      steps: [
        { name: "Definisikan Scope MICE Event", text: "MICE mencakup 4 kategori: Meeting (boardroom hingga 500 pax), Incentive (reward trip untuk top performer), Conference (multi-session dengan speaker), Exhibition (booth display + visitor management). Scope yang jelas menentukan vendor kapabilitas yang dibutuhkan." },
        { name: "Verifikasi Kapabilitas Teknis Venue & AV", text: "MICE skala medium-besar butuh: LED wall atau screen besar, sound system multi-zone, live streaming capability untuk hybrid, simultaneous interpretation booth (untuk conference internasional), dan back-of-house logistik untuk speaker + VIP." },
        { name: "Cek Track Record Skala Serupa", text: "Minta case study eksplisit: vendor pernah handle berapa pax maksimum, venue apa, format apa. Vendor yang hanya biasa handle 100 pax akan struggle di MICE 500 pax. Track record di angka pax dan kompleksitas serupa adalah indikator terkuat." },
        { name: "Pastikan Ada Dedicated Event Manager", text: "MICE dengan banyak sesi paralel butuh event manager per zone — bukan 1 orang yang handle semuanya. Minta vendor tunjukkan struktur tim onsite: berapa event manager, berapa crew lapangan, dan siapa yang jadi single point of contact untuk klien." },
        { name: "Plan Hybrid & Streaming dari Awal", text: "Jika ada peserta remote, hybrid setup harus di-plan dari design stage — bukan ditambahkan last-minute. Butuh: dedicated streaming crew, platform yang stable (Zoom Webinar, Microsoft Teams Live, atau custom streaming), dan pre-event tech rehearsal dengan speaker remote." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="Butuh MICE organizer Bandung? Proposal lengkap dalam 24 jam."
        context="MICE event production Bandung"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.packageAnnualGathering.src}
              alt="MICE conference event di Bandung — stage produksi profesional"
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
                <span className="text-paper/75">MICE Organizer Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Full Event Production · Update 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  MICE Organizer Bandung:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Meeting, Incentive, Conference & Exhibition.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Full-stack MICE production — stage AV profesional, multi-session
                coordination, hybrid capability, dan post-event report. Untuk
                perusahaan yang butuh lebih dari sekadar booking venue.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
                >
                  Request MICE Quote
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildWaLink("MICE event production di Bandung")}
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

        {/* Quick Answer Box */}
        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                MICE organizer Bandung untuk{" "}
                <strong>conference 100–500 pax</strong> mulai dari{" "}
                <strong>Rp 3–6 juta per pax</strong> tergantung format dan
                scope produksi. Kami handle end-to-end:{" "}
                <strong>venue, stage AV, speaker management</strong>,
                registration, dokumentasi, hingga post-event report. Hybrid
                event (online + offline) tersedia dengan tambahan setup Rp
                80–200 juta.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 3–6 jt/pax</Tag>
                <Tag>Pax: 50–500+</Tag>
                <Tag>Hybrid: Tersedia</Tag>
                <Tag>SI Translation: Tersedia</Tag>
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request MICE Proposal
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#format"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat format MICE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Daftar isi</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#apa-itu-mice", "Apa itu MICE dan kenapa butuh specialist"],
                ["#format", "4 format MICE yang kami handle"],
                ["#budget", "Estimasi biaya MICE Bandung 2026"],
                ["#venue", "Venue MICE terbaik di Bandung"],
                ["#hybrid", "MICE hybrid (online + offline)"],
                ["#process", "Proses kerja kami"],
                ["#case-studies", "Case studies"],
                ["#faq", "FAQ MICE Organizer Bandung"],
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

        {/* Section 1: Apa itu MICE */}
        <Section id="apa-itu-mice" eyebrow="Section 1" title="Apa itu MICE dan kenapa butuh specialist organizer?">
          <p>
            MICE adalah akronim dari <strong>Meeting, Incentive, Conference, dan Exhibition</strong> — empat kategori event bisnis yang membutuhkan level produksi dan koordinasi lebih kompleks dari corporate gathering standar.
          </p>
          <p>
            Kenapa butuh specialist, bukan generic EO atau hotel in-house? Karena MICE melibatkan banyak stakeholder sekaligus: speaker lineup, sponsor, exhibitor, peserta dengan segmentasi berbeda, dan requirement teknis yang tidak bisa dihandle oleh satu tim generalis. Satu koordinasi yang gagal — speaker tidak dibriefing tentang format stage, AV cue sheet tidak disiapkan, registration antre 45 menit — dan seluruh kesan event runtuh.
          </p>
          <p>
            Kami bukan hotel. Kami adalah MICE production specialist yang membawa{" "}
            <strong>creative direction, technical execution, dan single accountability</strong>{" "}
            untuk seluruh event. Dari brief pertama sampai post-event report, satu PM senior yang handle segalanya.
          </p>
          <div className="not-prose mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { label: "MICE Specialist", items: ["Discovery brief 60+ menit sebelum quote", "Line-item budget transparan", "AV creative direction", "Speaker management + rehearsal", "Post-event report dalam 5 hari kerja", "Single PM dari awal sampai akhir"] },
              { label: "Generic EO / Hotel In-House", items: ["Quote langsung tanpa brief mendalam", "Lump-sum tanpa breakdown komponen", "AV booking dari vendor eksternal tanpa brief", "Speaker briefing minimal / tidak ada", "Tidak ada post-event documentation", "Rotating freelancer coordinator"] },
            ].map((col) => (
              <div
                key={col.label}
                className={`rounded-2xl p-5 border ${col.label === "MICE Specialist" ? "bg-brand/5 border-brand/20" : "bg-cream/60 border-border"}`}
              >
                <p className="font-semibold text-sm mb-3">{col.label}</p>
                <ul className="space-y-1.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check size={14} className={`mt-0.5 shrink-0 ${col.label === "MICE Specialist" ? "text-brand" : "text-slate-mute"}`} />
                      <span className={col.label === "MICE Specialist" ? "text-ink" : "text-slate"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 2: Format MICE */}
        <Section id="format" eyebrow="Section 2" title="4 format MICE yang kami handle">
          <p>
            Setiap format MICE punya requirement yang berbeda. Kami tidak menggunakan template — setiap event di-design dari awal berdasarkan objective spesifik.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-5">
            {MICE_FORMATS.map((f) => (
              <div key={f.name} className="rounded-2xl bg-paper border border-border p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-2xl">{f.icon}</span>
                    <h3 className="font-semibold text-base mt-1">{f.name}</h3>
                  </div>
                  <span className="text-xs text-slate bg-cream px-2.5 py-1 rounded-full shrink-0">{f.pax}</span>
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
                <p className="text-xs font-semibold text-brand">{f.priceFrom}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 3: Budget */}
        <Section id="budget" eyebrow="Section 3" title="Estimasi biaya MICE Bandung 2026">
          <p>
            Breakdown biaya MICE di Bandung berdasarkan format dan skala. Angka ini adalah{" "}
            <strong>panduan estimasi</strong> — proposal final kami selalu line-item dengan breakdown per komponen.
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
                  { format: "Corporate Meeting (standard)", pax: "20–100", dur: "1D", price: "Rp 1,5–2,5 jt" },
                  { format: "Conference single-day", pax: "100–300", dur: "1D", price: "Rp 3–4 jt" },
                  { format: "Conference multi-day", pax: "200–500", dur: "2D1N", price: "Rp 4–5 jt" },
                  { format: "Conference + exhibition", pax: "300–500", dur: "2D1N–3D2N", price: "Rp 5–6 jt" },
                  { format: "Incentive trip standard", pax: "30–100", dur: "2D1N", price: "Rp 3,5–5 jt" },
                  { format: "Incentive trip premium", pax: "20–80", dur: "3D2N", price: "Rp 5–7 jt" },
                  { format: "Hybrid MICE (tambah)", pax: "Semua", dur: "Semua", price: "+Rp 80–200 jt (flat)" },
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
            * Harga belum termasuk PPN 11%. Proposal final kami breakdown per komponen: venue, AV production, F&B, speaker fee (jika ada), dokumentasi, PM fee, dan contingency 5–8%.
          </p>
        </Section>

        {/* Section 4: Venue */}
        <Section id="venue" eyebrow="Section 4" title="Venue MICE terbaik di Bandung untuk 100–500 pax">
          <p>
            Bandung memiliki beberapa hotel bintang 4–5 dengan fasilitas ballroom dan ruang konferensi yang memenuhi standar MICE profesional. Kami punya{" "}
            <strong>direct partnership</strong> dengan semua venue di bawah — bukan reseller — yang berarti akses prioritas ke slot, negosiasi harga langsung, dan koordinasi venue yang lebih smooth.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Pullman Bandung Grand Central",
                cap: "Theater 1.500 · Ballroom 1.200",
                loc: "Pusat Kota",
                notes: "Akses tol paling mudah. Standard tertinggi untuk MICE skala besar.",
              },
              {
                name: "Hilton Bandung",
                cap: "Theater 800 · 6 meeting rooms",
                loc: "Pusat Kota",
                notes: "Multi-room capability. Cocok untuk conference dengan parallel breakout sessions.",
              },
              {
                name: "Trans Luxury Hotel",
                cap: "Grand Ballroom 1.000 pax",
                loc: "Pasteur",
                notes: "Premium venue dengan AV in-house terbaik di Bandung. Cocok untuk high-production MICE.",
              },
              {
                name: "Intercontinental Bandung Dago",
                cap: "Theater 600 · 7 meeting rooms",
                loc: "Dago",
                notes: "Venue pilihan untuk MICE dengan delegasi internasional. Area lebih tenang.",
              },
              {
                name: "Padma Hotel Lembang",
                cap: "Indoor 500 + outdoor area",
                loc: "Lembang",
                notes: "MICE + gathering hybrid. Mountain view exclusive. 1 jam dari pusat Bandung.",
              },
              {
                name: "The Trans Resort Bandung",
                cap: "Ballroom 800 pax",
                loc: "Pasteur",
                notes: "Kombinasi terbaik untuk MICE + leisure. Kolam renang + area outdoor tersedia.",
              },
            ].map((v) => (
              <div key={v.name} className="rounded-xl border border-border bg-paper p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm">{v.name}</h3>
                  <span className="text-xs text-slate bg-cream px-2 py-0.5 rounded-full shrink-0">{v.loc}</span>
                </div>
                <p className="text-xs text-brand font-medium mt-1.5">{v.cap}</p>
                <p className="text-xs text-slate mt-2">{v.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate mt-4">
            Detail kapasitas spesifik, rate negosiasi, dan ketersediaan tanggal kami share dalam proposal. Kami biasanya rekomendasikan 2 alternatif venue dengan pro/con masing-masing.
          </p>
        </Section>

        {/* Section 5: Hybrid */}
        <Section id="hybrid" eyebrow="Section 5" title="MICE hybrid — menggabungkan peserta online dan offline">
          <p>
            Hybrid MICE bukan sekadar pasang Zoom di layar proyektor. Full hybrid production yang kami deliver mencakup:
          </p>
          <div className="not-prose mt-5 grid sm:grid-cols-2 gap-3">
            {[
              { title: "Multi-camera live switching", desc: "Minimal 3 kamera — stage wide, close-up speaker, dan audience reaction. Switched live oleh vision mixer." },
              { title: "Dedicated streaming engineer", desc: "Engineer terpisah yang handle streaming platform (Zoom Webinar, YouTube Live, StreamYard, atau custom RTMP)." },
              { title: "Virtual audience management", desc: "Q&A aggregator, polling terintegrasi, dan moderator virtual terpisah supaya online audience engaged — bukan sekadar menonton." },
              { title: "Broadcast-quality audio", desc: "Mix terpisah untuk online audience (tanpa room reverb) dan on-site (room acoustics). Beda setup, beda output." },
              { title: "Recording + post-production", desc: "Raw recording dari semua kamera + edit highlight 5–10 menit siap dalam 48 jam setelah event." },
              { title: "Connectivity failover", desc: "Backup koneksi internet (SIM card enterprise) kalau venue broadband drop. Standard protocol untuk semua MICE hybrid." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-paper p-4">
                <p className="font-semibold text-sm text-ink">{item.title}</p>
                <p className="text-xs text-slate mt-1.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm">
            <strong>Cost tambahan hybrid:</strong> Rp 80–200 juta (flat, bukan per pax) tergantung jumlah kamera, platform, dan fitur interaktif. Untuk event 200+ pax di mana 30%+ peserta virtual, hybrid biasanya ROI-positif vs venue yang lebih besar.
          </p>
        </Section>

        {/* Section 6: Process */}
        <Section id="process" eyebrow="Section 6" title="Proses kerja kami — dari brief sampai post-event report">
          <p>
            Kami tidak mengambil proyek tanpa discovery brief. Setiap detail di bawah adalah hal yang benar-benar kami kerjakan — bukan marketing copy.
          </p>
          <div className="not-prose mt-6 space-y-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="flex gap-5 rounded-2xl border border-border bg-paper p-5">
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
        <section id="case-studies" className="py-16 md:py-20 border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Case Studies</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
              MICE events yang pernah kami produksi.
            </h2>
            <RelatedCaseStudies serviceSlugs={["mice", "annual-company-trip", "company-gathering"]} />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow text-slate mb-3">FAQ</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
                Pertanyaan paling sering tentang MICE organizer Bandung.
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-border bg-paper p-6">
                    <h3 className="font-semibold text-sm text-ink mb-2">{faq.question}</h3>
                    <p className="text-sm text-slate leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate">
                Lihat juga:{" "}
                <Link href="/faq/logistics" className="text-brand-deep hover:underline">FAQ Logistik</Link>
                {" · "}
                <Link href="/faq/budget" className="text-brand-deep hover:underline">FAQ Budget & Investasi</Link>
                {" · "}
                <Link href="/faq/comparison" className="text-brand-deep hover:underline">FAQ Specialist vs Generic EO</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container-1280 text-center">
            <p className="eyebrow text-brand mb-4">MICE Organizer Bandung</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-2xl mx-auto">
              Siap diskusi MICE event lo?
            </h2>
            <p className="text-paper/70 mb-8 max-w-xl mx-auto">
              Ceritakan format, pax, dan timeline — kami kirim proposal dengan estimasi budget dan rekomendasi venue dalam 24 jam.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/proposal/request"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-13 font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
              >
                Request MICE Proposal
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={buildWaLink("MICE event production Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 text-paper px-8 h-13 font-medium hover:bg-paper hover:text-ink transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp Sekarang
              </a>
            </div>
            <p className="mt-6 text-xs text-paper/40">
              Atau lihat layanan terkait:{" "}
              <Link href="/corporate-gathering-bandung" className="underline hover:text-paper/70">Corporate Gathering</Link>
              {" · "}
              <Link href="/incentive-trip-bandung" className="underline hover:text-paper/70">Incentive Trip</Link>
              {" · "}
              <Link href="/event-organizer-corporate-bandung" className="underline hover:text-paper/70">Event Organizer Corporate</Link>
            </p>
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
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">{title}</h2>
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
