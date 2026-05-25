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

const SLUG = "/corporate-event-bandung";
const URL = `${SITE.url}${SLUG}`;
const TITLE =
  "Corporate Event Bandung 2026: Provider Specialist B2B untuk 50–1.500 Pax";
const DESCRIPTION =
  "Provider corporate event Bandung specialist B2B — outing kantor, company gathering, team building, MICE, incentive trip, executive offsite. ⭐ 4.9/5 · 400+ events sejak 2018 · Proposal gratis 24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  keywords: [
    "corporate event bandung",
    "provider corporate event bandung",
    "EO corporate bandung",
    "event organizer corporate bandung",
    "jasa corporate event bandung",
    "corporate event organizer bandung",
    "perusahaan event organizer bandung",
  ],
  openGraph: {
    title: "Corporate Event Bandung — Provider B2B Specialist 2026",
    description:
      "Specialist B2B corporate event di Bandung: outing, gathering, team building, MICE, incentive trip. 400+ events delivered · ⭐ 4.9/5 · Proposal 24 jam.",
    url: URL,
    type: "article",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question:
      "Apa itu corporate event dan apa saja jenis-jenisnya di Bandung?",
    answer:
      "Corporate event adalah program event terstruktur untuk kebutuhan B2B perusahaan. Jenisnya di Bandung: outing kantor (refresh 1–2 hari), corporate gathering / annual event (seremonial + awarding), team building (pengembangan tim terstruktur), MICE (meeting, incentive, conference, exhibition), incentive trip (reward top performer), executive offsite (strategic session C-suite), dan leadership retreat. Setiap format punya tujuan, skala, dan budget yang berbeda.",
  },
  {
    question: "Berapa biaya corporate event di Bandung per pax?",
    answer:
      "Range biaya corporate event Bandung: outing 1 hari Rp 1,2–2,5 jt/pax, outing 2D1N Rp 2,5–5 jt/pax, corporate gathering 2D1N Rp 3,5–7 jt/pax, MICE conference Rp 3–6 jt/pax, incentive trip 3D2N Rp 5–8 jt/pax, executive offsite bespoke Rp 7 jt+/pax. Semua tergantung format, jumlah pax, venue, dan kelengkapan produksi.",
  },
  {
    question:
      "Apa perbedaan provider corporate event dengan event organizer biasa?",
    answer:
      "Provider corporate event specialist fokus eksklusif B2B — tidak handle pernikahan atau event personal. Perbedaan kritis: (1) Discovery brief 60–90 menit sebelum quote, bukan langsung kirim harga; (2) Proposal line-item transparan per komponen, bukan lump-sum; (3) Risk register terdokumentasi; (4) Dedicated project manager dari awal sampai post-event; (5) Post-event report dengan metrics. Generic EO biasanya skip semua ini.",
  },
  {
    question:
      "Berapa minimum pax untuk corporate event di Bandung?",
    answer:
      "Minimum 20 pax untuk engagement kami. Sweet spot operasional kami: 50–500 pax. Pernah handle single event hingga 1.200 pax. Di bawah 20 pax lebih cocok executive offsite atau leadership retreat format intimasi.",
  },
  {
    question: "Berapa lama persiapan untuk corporate event Bandung?",
    answer:
      "Minimum prep time: outing 1 hari → 2–3 minggu; outing 2D1N → 3–4 minggu; gathering dengan awarding → 6–8 minggu; MICE conference 200+ pax → 8–12 minggu; incentive trip → 8–10 minggu. Peak season Oktober–Desember dan Januari–Maret, booking venue minimal 2–3 bulan sebelumnya.",
  },
  {
    question: "Apa saja venue corporate event terbaik di Bandung?",
    answer:
      "Venue corporate event Bandung berdasarkan kategori: Hotel ballroom (Pullman, Hilton, Trans Luxury, Intercontinental, Sheraton) untuk gathering & MICE; Villa resort (Lembang, Ciwidey, Pangalengan) untuk outing & retreat; Outdoor camp & adventure area (Tangkuban Perahu, Ciater, Cimahi) untuk team building outbound; Eco-lodge & private villa untuk executive offsite. Kami punya direct partnership 60+ venue tanpa markup reseller.",
  },
  {
    question:
      "Bagaimana cara memilih provider corporate event yang tepat di Bandung?",
    answer:
      "7 kriteria seleksi: (1) Track record scale yang mirip — minta referensi 3 event terakhir; (2) Proposal format — specialist kirim line-item, bukan total; (3) Google Reviews (minimal 4.5/5 dengan 50+ reviews); (4) Physical office & tim tetap — bukan hanya Instagram; (5) Discovery brief — vendor yang langsung kasih harga tanpa brief, red flag; (6) Post-event deliverables — video highlight, laporan peserta, survey; (7) Insurance peserta — vendor profesional punya coverage.",
  },
  {
    question:
      "Apakah TourBandung Corporate bisa handle corporate event di luar Bandung?",
    answer:
      "Fokus operasional kami di Bandung dan Jawa Barat (Lembang, Ciwidey, Pangalengan, Subang). Untuk klien Jakarta, transportasi grup PP bisa diinclude dalam scope. MICE dan incentive trip: kami juga handle Bali, Lombok, Labuan Bajo, dan destinasi internasional (Singapore, Bangkok). Outside Jawa Barat case-by-case basis.",
  },
];

const SERVICES = [
  {
    slug: "/outing-kantor-bandung",
    name: "Outing Kantor",
    pax: "20–500 pax",
    duration: "1D / 2D1N",
    priceFrom: "Rp 1,2 jt/pax",
    desc: "Program refresh dan team bonding casual. Villa, resort, atau outdoor camp di Lembang, Ciwidey, Pangalengan.",
  },
  {
    slug: "/corporate-gathering-bandung",
    name: "Corporate Gathering",
    pax: "100–800 pax",
    duration: "2D1N / 3D2N",
    priceFrom: "Rp 3,5 jt/pax",
    desc: "Annual event formal dengan opening ceremony, awarding night, gala dinner, dan multi-track activity.",
  },
  {
    slug: "/team-building-bandung",
    name: "Team Building",
    pax: "20–300 pax",
    duration: "Half-day / 1D",
    priceFrom: "Rp 1,5 jt/pax",
    desc: "Program berbasis methodology (Tuckman, DiSC, Belbin) untuk pengembangan tim yang outcome-driven.",
  },
  {
    slug: "/mice-organizer-bandung",
    name: "MICE Organizer",
    pax: "50–500 pax",
    duration: "1D / 2D1N",
    priceFrom: "Rp 3 jt/pax",
    desc: "Full production meeting, conference, incentive, dan exhibition — stage AV profesional, hybrid capability.",
  },
  {
    slug: "/incentive-trip-bandung",
    name: "Incentive Trip",
    pax: "20–200 pax",
    duration: "2D1N / 3D2N",
    priceFrom: "Rp 3,5 jt/pax",
    desc: "Program reward top performer dengan destination experience premium dan recognition ceremony berkesan.",
  },
  {
    slug: "/employee-gathering-bandung",
    name: "Employee Gathering",
    pax: "30–300 pax",
    duration: "1D / 2D1N",
    priceFrom: "Rp 2 jt/pax",
    desc: "Gathering divisi atau cross-team untuk bonding dan engagement boost di luar kantor.",
  },
  {
    slug: "/executive-offsite-bandung",
    name: "Executive Offsite",
    pax: "8–25 pax",
    duration: "2D1N / 3D2N",
    priceFrom: "Rp 7 jt/pax",
    desc: "Strategic session C-suite di venue premium privat. Focus: clarity, alignment, dan decision-making.",
  },
  {
    slug: "/leadership-retreat-jawa-barat",
    name: "Leadership Retreat",
    pax: "12–40 pax",
    duration: "2D1N / 3D2N",
    priceFrom: "Rp 5 jt/pax",
    desc: "Program pengembangan senior leadership dengan facilitator bersertifikat dan refleksi terstruktur.",
  },
  {
    slug: "/company-retreat-bandung",
    name: "Company Retreat",
    pax: "10–80 pax",
    duration: "2D1N / 3D2N",
    priceFrom: "Rp 4 jt/pax",
    desc: "Retreat strategis multi-hari untuk deep work, culture reset, atau mid-year review away dari kantor.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discovery Brief",
    desc: "Briefing call 60–90 menit. Kami align objective, pax, format, budget range, timeline, dan constraint khusus. Tidak ada quote tanpa brief.",
  },
  {
    step: "02",
    name: "Proposal 24 Jam",
    desc: "Proposal lengkap: tema konsep, 2 rekomendasi venue dengan pro/con, rundown draft, dan line-item budget breakdown — dalam 24–48 jam.",
  },
  {
    step: "03",
    name: "Finalisasi & Lock",
    desc: "Revisi proposal 1–2 putaran. Lock venue dengan deposit 30%. PM senior di-assign sebagai single point of contact.",
  },
  {
    step: "04",
    name: "Production Planning",
    desc: "3–12 minggu persiapan: vendor coordination, rundown final, risk register, logistics, dan material production.",
  },
  {
    step: "05",
    name: "Eksekusi On-site",
    desc: "PM senior + crew on-site. Radio coordination, contingency plan aktif, dan real-time problem solving.",
  },
  {
    step: "06",
    name: "Post-Event Report",
    desc: "Highlight video (48 jam), foto dokumentasi, attendance report, dan survey peserta dalam 5 hari kerja.",
  },
];

export default function CorporateEventBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      authorName: "Andre Pratama",
      authorJobTitle: "Founder & Lead Corporate Strategist",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Corporate Event Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Corporate Event Bandung",
      description:
        "Provider specialist B2B corporate event di Bandung — outing kantor, corporate gathering, team building, MICE, incentive trip, executive offsite, dan leadership retreat untuk perusahaan 50–1.500 pax.",
      priceRange: "Rp 1.200.000 - Rp 10.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Memilih Provider Corporate Event Bandung yang Tepat",
      description:
        "7 langkah untuk memilih dan bekerja dengan provider corporate event Bandung yang capable — dari brief pertama sampai eksekusi.",
      steps: [
        {
          name: "Definisikan Tujuan Event",
          text: "Tentukan objective spesifik: refreshing tim, bonding post-merger, cultural reinforcement, pengembangan leadership, atau reward top performer. Tujuan yang clear menentukan format event yang tepat dan vendor kapabilitas yang dibutuhkan.",
        },
        {
          name: "Tentukan Skala dan Format",
          text: "Hitung pax aktual (bukan estimasi), tentukan durasi (half-day / 1D / 2D1N / 3D2N), dan pilih format utama: outing casual, gathering formal, team building terstruktur, atau MICE production. Format yang salah = budget terbuang.",
        },
        {
          name: "Verifikasi Track Record Vendor",
          text: "Minta case study eksplisit dengan pax dan format serupa. Hubungi referensi klien langsung, bukan hanya baca testimoni di website. Cek Google Reviews — angka review dan kualitas response terhadap review negatif adalah indikator kredibilitas.",
        },
        {
          name: "Evaluasi Proposal Format",
          text: "Vendor yang kompeten kirim proposal dengan breakdown line-item per komponen: venue, F&B, activity, AV/produksi, transport, PM fee, dan contingency. Vendor yang kirim total lump-sum tanpa breakdown — red flag besar.",
        },
        {
          name: "Pastikan Ada Dedicated Project Manager",
          text: "Event yang sukses butuh satu PM yang tahu seluruh context dari awal sampai akhir. Vendor yang pakai freelancer rotating atau tim yang berganti-ganti PM di tengah persiapan berisiko tinggi untuk event Anda.",
        },
        {
          name: "Konfirmasi Deliverables Post-Event",
          text: "Vendor profesional deliver: highlight video dalam 48 jam, foto dokumentasi full, attendance & survey report, dan post-event debrief. Tanpa deliverables ini, Anda tidak punya bukti untuk justify investment ke management tahun depan.",
        },
        {
          name: "Cek Insurance Peserta",
          text: "Event dengan aktivitas fisik (outbound, hiking, water sports) wajib punya accident insurance untuk peserta. Vendor yang tidak bisa tunjukkan coverage ini berisiko menanggung biaya di luar proposal kalau terjadi insiden.",
        },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="Butuh provider corporate event Bandung? Proposal lengkap dalam 24 jam."
        context="corporate event Bandung"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.heroMain.src}
              alt="Corporate event Bandung — provider specialist B2B untuk perusahaan Indonesia"
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
                <span className="text-paper/75">Corporate Event Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">
                Provider Specialist B2B · Update 2026
              </span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Corporate Event Bandung:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Provider B2B Specialist untuk 50–1.500 Pax.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Kami bukan travel agent. Kami bukan EO pernikahan. Kami adalah{" "}
                <strong className="text-paper/90">
                  specialist corporate event B2B
                </strong>{" "}
                — outing kantor, gathering, team building, MICE, incentive trip,
                dan executive offsite — khusus untuk perusahaan Indonesia.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
                >
                  Request Proposal Gratis
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={buildWaLink("corporate event di Bandung")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
                >
                  <Whatsapp size={16} />
                  Chat Langsung
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/60">
                <span>⭐ {STATS.eventsDelivered} events delivered</span>
                <span>100+ perusahaan Indonesia</span>
                <span>Sejak 2018</span>
                <span>Proposal dalam 24 jam</span>
                <span>4.9/5 Google Reviews</span>
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
                <strong>Provider corporate event Bandung</strong> specialist B2B
                yang kami tawarkan mencakup{" "}
                <strong>9 format event</strong> untuk{" "}
                <strong>20–1.500 pax</strong>. Harga mulai{" "}
                <strong>Rp 1,2 jt/pax</strong> (team building half-day) sampai{" "}
                <strong>Rp 10 jt+/pax</strong> (executive offsite bespoke).
                Proposal lengkap dengan breakdown line-item dan 2 rekomendasi
                venue dalam <strong>24 jam</strong> setelah briefing call.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Pax: 20–1.500</Tag>
                <Tag>9 format event</Tag>
                <Tag>Proposal 24 jam</Tag>
                <Tag>Sejak 2018</Tag>
                <Tag>60+ venue partner</Tag>
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
                  href="#layanan"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat semua layanan
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
                ["#layanan", "9 format corporate event yang kami handle"],
                ["#kenapa-specialist", "Kenapa pilih specialist B2B, bukan generic EO"],
                ["#budget", "Estimasi budget per format 2026"],
                ["#venue", "Venue corporate event terbaik di Bandung"],
                ["#proses", "Proses kerja — dari brief ke post-event report"],
                ["#case-studies", "Case studies"],
                ["#faq", "FAQ corporate event Bandung"],
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

        {/* Section 1: Layanan */}
        <Section
          id="layanan"
          eyebrow="Section 1"
          title="9 format corporate event yang kami handle"
        >
          <p>
            Setiap format corporate event punya objective, skala, dan requirement
            yang berbeda. Kami tidak menggunakan template — setiap event
            di-design dari awal berdasarkan brief dan tujuan spesifik klien.
          </p>
          <div className="not-prose mt-7 grid md:grid-cols-3 gap-4">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={svc.slug}
                className="group rounded-2xl border border-border bg-paper p-5 hover:border-brand/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm text-ink group-hover:text-brand-deep transition-colors">
                    {svc.name}
                  </h3>
                  <ArrowRight
                    size={14}
                    className="text-slate shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform"
                  />
                </div>
                <p className="text-xs text-slate mb-3">{svc.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs bg-cream text-slate px-2 py-0.5 rounded-full">
                    {svc.pax}
                  </span>
                  <span className="text-xs bg-cream text-slate px-2 py-0.5 rounded-full">
                    {svc.duration}
                  </span>
                  <span className="text-xs bg-brand/10 text-brand font-medium px-2 py-0.5 rounded-full">
                    {svc.priceFrom}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate mt-5">
            Tidak yakin format mana yang cocok? Hubungi kami via{" "}
            <a
              href={buildWaLink("corporate event Bandung — konsultasi format")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline hover:text-brand-deep"
            >
              WhatsApp
            </a>{" "}
            atau{" "}
            <Link
              href="/proposal/request"
              className="text-brand underline hover:text-brand-deep"
            >
              isi form brief
            </Link>{" "}
            — kami akan rekomendasikan format yang paling sesuai dengan
            objective, pax, dan budget.
          </p>
        </Section>

        {/* Section 2: Kenapa Specialist */}
        <Section
          id="kenapa-specialist"
          eyebrow="Section 2"
          title="Kenapa pilih specialist B2B — bukan generic EO atau travel agent?"
        >
          <p>
            Ada ratusan event organizer di Bandung. Yang membedakan corporate
            event specialist dari generic EO atau travel agent yang &quot;bisa corporate
            juga&quot; bukan hanya klaim — ada perbedaan sistemik dalam cara kerja.
          </p>
          <div className="not-prose mt-6 grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Corporate Event Specialist (Kami)",
                items: [
                  "Discovery brief 60–90 menit sebelum quote — tidak langsung harga",
                  "Proposal line-item transparan: venue, F&B, AV, PM, contingency terpisah",
                  "Risk register terdokumentasi per event",
                  "Dedicated PM senior dari brief sampai post-event",
                  "Direct partnership 60+ venue — bukan reseller markup",
                  "Post-event report: video, foto, attendance, survey dalam 5 hari",
                  "Insurance peserta aktif untuk semua event outdoor",
                  "Fokus 100% B2B — tidak handle pernikahan atau event personal",
                ],
                accent: true,
              },
              {
                label: "Generic EO / Travel Agent",
                items: [
                  "Quote langsung tanpa briefing mendalam",
                  "Harga total lump-sum tanpa breakdown komponen",
                  "Tidak ada risk assessment atau contingency plan",
                  "Rotating freelancer coordinator — ganti-ganti PIC",
                  "Reseller venue dengan markup tidak transparan",
                  "Tidak ada post-event documentation terstruktur",
                  "Insurance sering tidak include atau tidak jelas coverage",
                  "Handle semua event — dari sunatan sampai corporate retreat",
                ],
                accent: false,
              },
            ].map((col) => (
              <div
                key={col.label}
                className={`rounded-2xl p-5 border ${
                  col.accent
                    ? "bg-brand/5 border-brand/20"
                    : "bg-cream/60 border-border"
                }`}
              >
                <p className="font-semibold text-sm mb-3">{col.label}</p>
                <ul className="space-y-1.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          col.accent ? "text-brand" : "text-slate-mute"
                        }`}
                      />
                      <span
                        className={col.accent ? "text-ink" : "text-slate"}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5">
            Untuk perbandingan lebih lengkap, baca:{" "}
            <Link
              href="/specialist-vs-generic-eo"
              className="text-brand underline hover:text-brand-deep"
            >
              Specialist vs Generic EO — 12 Perbedaan Kritis
            </Link>
          </p>
        </Section>

        {/* Section 3: Budget */}
        <Section
          id="budget"
          eyebrow="Section 3"
          title="Estimasi budget corporate event Bandung 2026"
        >
          <p>
            Breakdown biaya corporate event di Bandung berdasarkan format dan
            skala. Angka ini adalah{" "}
            <strong>panduan estimasi — bukan penawaran final</strong>. Proposal
            kami selalu line-item dengan breakdown per komponen.
          </p>
          <div className="not-prose mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="text-left px-4 py-3 rounded-tl-xl font-medium">
                    Format Event
                  </th>
                  <th className="text-left px-4 py-3 font-medium">Pax</th>
                  <th className="text-left px-4 py-3 font-medium">Durasi</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl font-medium">
                    Estimasi /pax
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-divider">
                {[
                  {
                    format: "Team building / outbound (half-day)",
                    pax: "20–200",
                    dur: "4–5 jam",
                    price: "Rp 1,2–2 jt",
                  },
                  {
                    format: "Outing kantor (1 hari)",
                    pax: "20–300",
                    dur: "1D",
                    price: "Rp 1,5–2,5 jt",
                  },
                  {
                    format: "Outing kantor / employee gathering",
                    pax: "50–500",
                    dur: "2D1N",
                    price: "Rp 2,5–5 jt",
                  },
                  {
                    format: "Corporate gathering / annual event",
                    pax: "100–800",
                    dur: "2D1N",
                    price: "Rp 3,5–7 jt",
                  },
                  {
                    format: "MICE conference",
                    pax: "100–500",
                    dur: "1D–2D1N",
                    price: "Rp 3–6 jt",
                  },
                  {
                    format: "Incentive trip",
                    pax: "20–200",
                    dur: "2D1N–3D2N",
                    price: "Rp 3,5–8 jt",
                  },
                  {
                    format: "Company retreat / leadership retreat",
                    pax: "10–80",
                    dur: "2D1N–3D2N",
                    price: "Rp 4–8 jt",
                  },
                  {
                    format: "Executive offsite (bespoke)",
                    pax: "8–25",
                    dur: "2D1N–3D2N",
                    price: "Rp 7 jt+",
                  },
                ].map((row) => (
                  <tr
                    key={row.format}
                    className="hover:bg-cream/40 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-ink">
                      {row.format}
                    </td>
                    <td className="px-4 py-3 text-slate">{row.pax}</td>
                    <td className="px-4 py-3 text-slate">{row.dur}</td>
                    <td className="px-4 py-3 font-semibold text-brand">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate mt-4">
            * Belum termasuk PPN 11%. Harga tergantung venue choice, F&B
            standard, kelengkapan AV/produksi, dan kebutuhan dokumentasi. Lihat{" "}
            <Link
              href="/pricing"
              className="text-brand underline hover:text-brand-deep"
            >
              halaman pricing lengkap
            </Link>{" "}
            untuk breakdown 4-tier (Foundation → Bespoke).
          </p>
        </Section>

        {/* Section 4: Venue */}
        <Section
          id="venue"
          eyebrow="Section 4"
          title="Venue corporate event terbaik di Bandung"
        >
          <p>
            Bandung dan Jawa Barat punya ekosistem venue corporate event yang
            sangat kaya — dari hotel bintang 5 dengan ballroom besar sampai villa
            privat di pegunungan Lembang. Kami punya direct partnership dengan{" "}
            <strong>60+ venue</strong> — bukan reseller, bukan markup.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-5">
            {[
              {
                category: "Hotel & Ballroom (Gathering, MICE, Conference)",
                venues: [
                  "Pullman Bandung Grand Central — ballroom 1.500 pax",
                  "Hilton Bandung — 6 meeting rooms, theater 800",
                  "Trans Luxury Hotel — grand ballroom 1.000 pax",
                  "Intercontinental Bandung Dago — 7 meeting rooms",
                  "Padma Hotel Lembang — indoor 500 + outdoor",
                  "Sheraton Bandung Hotel & Convention Center",
                ],
              },
              {
                category: "Villa & Resort (Outing, Retreat, Gathering)",
                venues: [
                  "Lembang area — 50+ villa privat, 50–500 pax",
                  "Ciwidey — eco-lodge & adventure, 30–200 pax",
                  "Pangalengan — quiet retreat, 20–100 pax",
                  "Subang — outbound + jungle camp",
                  "Padalarang — golf resort + convention",
                  "Garut / Tasikmalaya — extended retreat destination",
                ],
              },
              {
                category: "Outdoor & Adventure (Team Building, Outbound)",
                venues: [
                  "Tangkuban Perahu area — outdoor adventure camp",
                  "Ciater Hot Springs — team building + leisure",
                  "Cimahi — military outbound track",
                  "Kawah Putih Ciwidey — nature + adventure",
                  "Observatorium Bosscha — unique experience",
                  "Curug Cilengkrang — hiking + camp",
                ],
              },
              {
                category: "Unique / Premium (Incentive, Executive Offsite)",
                venues: [
                  "Heritage villa Dago private — 8–20 pax",
                  "Glamping premium Lembang — 20–80 pax",
                  "Private tea estate Bandung Selatan",
                  "Luxury treehouse Bandung — exclusive retreat",
                  "Private pool villa Ciwidey — 15–50 pax",
                  "Boutique resort pegunungan Pangalengan",
                ],
              },
            ].map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl border border-border bg-paper p-5"
              >
                <h3 className="font-semibold text-sm text-ink mb-3">
                  {cat.category}
                </h3>
                <ul className="space-y-1.5">
                  {cat.venues.map((v) => (
                    <li key={v} className="flex items-start gap-2 text-sm">
                      <Check size={13} className="text-brand mt-0.5 shrink-0" />
                      <span className="text-slate">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate mt-4">
            Dalam setiap proposal, kami rekomendasikan{" "}
            <strong>2 alternatif venue</strong> dengan pro/con masing-masing —
            kapasitas, harga negosiasi, aksesibilitas, dan slot tanggal. Lihat
            juga:{" "}
            <Link
              href="/venue-gathering-bandung"
              className="text-brand underline hover:text-brand-deep"
            >
              Venue Gathering Bandung — panduan lengkap
            </Link>
          </p>
        </Section>

        {/* Section 5: Process */}
        <Section
          id="proses"
          eyebrow="Section 5"
          title="Proses kerja — dari brief pertama sampai post-event report"
        >
          <p>
            Transparansi proses adalah standar kami, bukan marketing copy. Ini
            yang benar-benar kami kerjakan dari awal sampai akhir:
          </p>
          <div className="not-prose mt-6 space-y-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-2xl border border-border bg-paper p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand">
                    {step.step}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{step.name}</p>
                  <p className="text-sm text-slate mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6">
            Untuk detail proses per format:{" "}
            <Link
              href="/methodology"
              className="text-brand underline hover:text-brand-deep"
            >
              Methodology & framework yang kami gunakan →
            </Link>
          </p>
        </Section>

        {/* Internal Links Hub */}
        <section className="py-14 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Semua layanan</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
              Pilih format corporate event yang sesuai kebutuhan.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", sub: "Refresh + bonding tim 1–2 hari" },
                { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", sub: "Annual event + awarding ceremony" },
                { href: "/team-building-bandung", label: "Team Building Bandung", sub: "Program pengembangan tim terstruktur" },
                { href: "/employee-gathering-bandung", label: "Employee Gathering Bandung", sub: "Gathering divisi atau cross-team" },
                { href: "/mice-organizer-bandung", label: "MICE Organizer Bandung", sub: "Meeting, conference, exhibition" },
                { href: "/incentive-trip-bandung", label: "Incentive Trip Bandung", sub: "Reward top performer premium" },
                { href: "/outbound-perusahaan-bandung", label: "Outbound Perusahaan Bandung", sub: "Adventure outbound outdoor" },
                { href: "/executive-offsite-bandung", label: "Executive Offsite Bandung", sub: "Strategic session C-suite" },
                { href: "/leadership-retreat-jawa-barat", label: "Leadership Retreat Jawa Barat", sub: "Program senior leadership" },
                { href: "/company-retreat-bandung", label: "Company Retreat Bandung", sub: "Retreat strategis multi-hari" },
                { href: "/villa-gathering-bandung", label: "Villa Gathering Bandung", sub: "Format villa privat 50–300 pax" },
                { href: "/glamping-corporate-bandung", label: "Glamping Corporate Bandung", sub: "Outdoor premium experience" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-paper p-4 hover:border-brand/40 hover:shadow-sm transition-all"
                >
                  <div>
                    <p className="font-medium text-sm text-ink group-hover:text-brand-deep transition-colors">
                      {link.label}
                    </p>
                    <p className="text-xs text-slate mt-0.5">{link.sub}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-slate shrink-0 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section
          id="case-studies"
          className="py-16 md:py-20 border-t border-divider"
        >
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Case Studies</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
              Corporate event yang pernah kami deliver.
            </h2>
            <RelatedCaseStudies
              serviceSlugs={[
                "company-gathering",
                "team-building",
                "annual-company-trip",
                "mice",
              ]}
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
                Pertanyaan paling sering tentang corporate event Bandung.
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
              <p className="mt-6 text-sm text-slate">
                Pertanyaan lebih spesifik?{" "}
                <Link
                  href="/faq"
                  className="text-brand underline hover:text-brand-deep"
                >
                  Lihat FAQ lengkap →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container-1280 text-center">
            <p className="eyebrow text-brand mb-4">
              Provider Corporate Event Bandung
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-2xl mx-auto">
              Siap diskusi corporate event perusahaan Anda?
            </h2>
            <p className="text-paper/70 mb-8 max-w-xl mx-auto">
              Ceritakan format event, jumlah pax, dan target tanggal — kami
              kirim proposal dengan estimasi budget dan rekomendasi venue dalam
              24 jam. Tanpa komitmen.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/proposal/request"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-13 font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
              >
                Request Proposal Gratis
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={buildWaLink("corporate event Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 text-paper px-8 h-13 font-medium hover:bg-paper hover:text-ink transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp Sekarang
              </a>
            </div>
            <p className="mt-6 text-xs text-paper/40">
              Atau explore layanan:{" "}
              <Link
                href="/event-organizer-corporate-bandung"
                className="underline hover:text-paper/70"
              >
                Event Organizer Corporate
              </Link>
              {" · "}
              <Link
                href="/outing-kantor-bandung"
                className="underline hover:text-paper/70"
              >
                Outing Kantor
              </Link>
              {" · "}
              <Link
                href="/specialist-vs-generic-eo"
                className="underline hover:text-paper/70"
              >
                Specialist vs Generic EO
              </Link>
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
