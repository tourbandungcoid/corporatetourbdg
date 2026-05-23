import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { FreshnessSignal } from "@/components/FreshnessSignal";
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

const SLUG = "/event-organizer-corporate-bandung";
const URL = `${SITE.url}${SLUG}`;
const TITLE = "Event Organizer Corporate Bandung — Specialist B2B, Bukan Generic EO";
const DESCRIPTION =
  "Event organizer corporate Bandung yang fokus B2B — bukan EO pernikahan, bukan travel agent. Specialist company gathering, team building, executive offsite, MICE. ⭐ 4.9/5 · 400+ events · Proposal 24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "Event Organizer Corporate Bandung — Specialist B2B 2026",
    description:
      "Specialist B2B corporate event di Bandung. Bukan generic EO. 400+ events, 100+ perusahaan Indonesia. Proposal dalam 24 jam.",
    url: URL,
    type: "article",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Apa yang membedakan corporate event organizer specialist dari generic EO?",
    answer:
      "7 perbedaan kritis: (1) Discovery brief — specialist demand briefing 60–90 menit sebelum quote; generic EO langsung kirim katalog. (2) Proposal format — specialist kasih breakdown line-item per komponen; generic EO kasih total lump-sum. (3) Risk register — specialist punya dokumentasi risk assessment; generic EO tidak. (4) Team continuity — specialist assign dedicated PM dari awal sampai akhir; generic EO pakai freelancer rotating. (5) Venue relationship — specialist punya direct partnership; generic EO adalah reseller dengan markup. (6) Post-event accountability — specialist kirim post-event report; generic EO tidak ada follow-up. (7) Specialization focus — specialist hanya B2B corporate; generic EO handle semua dari pernikahan sampai sunatan.",
  },
  {
    question: "Berapa biaya event organizer corporate di Bandung?",
    answer:
      "PM fee (project management fee) corporate event organizer di Bandung biasanya Rp 15–50 juta flat per event atau 8–15% dari total event budget. Untuk all-inclusive package (venue + F&B + activity + PM + dokumentasi), total event mulai Rp 1,2 jt/pax untuk team building half-day sampai Rp 7 jt/pax untuk executive offsite premium. Proposal kami selalu breakdown terpisah antara PM fee dan komponen event.",
  },
  {
    question: "Event apa saja yang bisa ditangani EO corporate Bandung?",
    answer:
      "10 format yang kami handle: (1) Corporate gathering / annual event (50–800 pax); (2) Team building outbound/indoor (20–300 pax); (3) Employee gathering & bonding (30–300 pax); (4) Executive offsite & C-suite strategy session (8–25 pax); (5) Leadership retreat & development (12–40 pax); (6) Corporate retreat strategic (10–80 pax); (7) Incentive trip & reward program (15–150 pax); (8) Annual company trip mass-scale (100–2.000 pax); (9) MICE — conference, exhibition, convention (100–500 pax); (10) Glamping corporate unique experience (20–80 pax).",
  },
  {
    question: "Bagaimana cara memverifikasi track record EO corporate sebelum booking?",
    answer:
      "5 hal yang wajib dicek: (1) Minta referensi klien 3 event terakhir yang mirip scale-nya — hubungi langsung, bukan hanya cek testimonial di website. (2) Cek Google Reviews (bukan hanya website testimonial) — rating, jumlah review, dan kualitas response terhadap review negatif. (3) Lihat proposal format — EO yang baik bisa kasih sample proposal dari project lain (dengan data dihapus). (4) Tanya tentang insurance peserta — certified EO punya coverage. (5) Cek physical office dan team — EO yang legitimate punya alamat jelas dan tim tetap, bukan hanya Instagram profile.",
  },
  {
    question: "Berapa lama lead time yang dibutuhkan untuk booking EO corporate?",
    answer:
      "Minimal lead time: Team building 1 hari (20–50 pax): 3–4 minggu. Corporate gathering 2D1N (100–300 pax): 6–8 minggu. Annual gathering besar 3D2N (300–500 pax): 10–12 minggu. MICE conference (200–500 pax): 8–12 minggu. Executive offsite premium (8–25 pax): 4–6 minggu. Peak season Q4 (Oktober–Desember): tambah 4 minggu dari semua estimasi di atas. Booking mendekati hari H masih bisa kami handle untuk beberapa format, tapi ada kompromi pada pilihan venue.",
  },
  {
    question: "Apakah EO corporate Bandung juga handle grup dari Jakarta?",
    answer:
      "Ya, mayoritas klien kami adalah perusahaan yang berkantor pusat di Jakarta. Kami atur seluruh logistik dari arrival Bandung — transportasi bus dari Jakarta opsional (Rp 3–8 jt per bus AC premium), koordinasi check-in, airport transfer untuk eksekutif yang terbang, hingga departure. Untuk grup 200+ pax dari Jakarta, kami biasa koordinasi multi-bus convoy dengan checkpoint dan safety briefing driver sebelum keberangkatan.",
  },
  {
    question: "Apakah bisa request proposal tanpa brief terlebih dahulu?",
    answer:
      "Kami tidak mengeluarkan proposal tanpa brief minimum — ini adalah prinsip kerja kami yang non-negotiable. Kenapa? Karena proposal tanpa brief adalah template katalog, bukan solusi untuk kebutuhan spesifik perusahaan Anda. Brief call bisa sesingkat 20–30 menit untuk scope yang sudah jelas, atau 60–90 menit untuk event yang lebih kompleks. Setelah brief, proposal dengan line-item breakdown kami kirim dalam 24–48 jam.",
  },
  {
    question: "Apakah ada kontrak formal dan apa yang tercover?",
    answer:
      "Iya, semua proyek menggunakan kontrak resmi yang mencakup: scope of work detail, timeline milestone, payment schedule (biasanya DP 30-50% konfirmasi, pelunasan 7 hari sebelum event), force majeure clause, change order procedure (perubahan scope selalu konfirmasi tertulis), cancellation policy, dan liability limitation. Untuk event dengan komponen confidential (executive offsite, strategy session), kontrak juga include NDA clause.",
  },
];

const SERVICES_LIST = [
  { slug: "/corporate-gathering-bandung", name: "Corporate Gathering", pax: "100–800 pax", price: "Rp 3,5–7 jt/pax" },
  { slug: "/team-building-bandung", name: "Team Building", pax: "20–300 pax", price: "Rp 1,2–4 jt/pax" },
  { slug: "/employee-gathering-bandung", name: "Employee Gathering", pax: "30–300 pax", price: "Rp 1,5–3,5 jt/pax" },
  { slug: "/outing-kantor-bandung", name: "Outing Kantor", pax: "20–500 pax", price: "Rp 2,5–5 jt/pax" },
  { slug: "/executive-offsite-bandung", name: "Executive Offsite", pax: "8–25 pax", price: "Rp 6,5–12 jt/pax" },
  { slug: "/leadership-retreat-jawa-barat", name: "Leadership Retreat", pax: "12–40 pax", price: "Rp 5–9 jt/pax" },
  { slug: "/company-retreat-bandung", name: "Corporate Retreat", pax: "10–80 pax", price: "Rp 3,5–8 jt/pax" },
  { slug: "/incentive-trip-bandung", name: "Incentive Trip", pax: "15–150 pax", price: "Rp 3,5–9 jt/pax" },
  { slug: "/mice-organizer-bandung", name: "MICE", pax: "100–500 pax", price: "Rp 3–6 jt/pax" },
  { slug: "/glamping-corporate-bandung", name: "Glamping Corporate", pax: "20–80 pax", price: "Rp 2,5–5,5 jt/pax" },
];

const DIFFERENTIATORS = [
  {
    title: "Discovery brief wajib sebelum quote",
    desc: "Kami tidak kirim proposal sebelum brief 20–90 menit. Ini bukan prosedur — ini cara kami memastikan event Anda di-design untuk objective nyata, bukan dari template katalog.",
  },
  {
    title: "Senior PM dari awal sampai akhir",
    desc: "Satu PM senior (bukan assistant, bukan freelancer) yang terlibat dari brief pertama sampai post-event report. Anda punya satu point of contact yang tahu seluruh konteks.",
  },
  {
    title: "Line-item proposal yang transparent",
    desc: "Setiap rupiah di proposal ada breakdown-nya: venue, F&B per meal, activity, transport, PM fee, dokumentasi, contingency. Tidak ada angka tersembunyi di balik 'miscellaneous'.",
  },
  {
    title: "Direct venue partnership — bukan reseller",
    desc: "60+ venue partner di Bandung & Jawa Barat dengan direct relationship. Tidak ada markup reseller layer. Anda dapat harga lebih baik dan prioritas availability.",
  },
  {
    title: "Risk register terdokumentasi",
    desc: "Setiap event memiliki risk register: cuaca, akomodasi, medical, transport, contingency plan. Di-share ke klien sebelum event. Generic EO tidak punya ini.",
  },
  {
    title: "Post-event report dalam 5 hari kerja",
    desc: "Laporan lengkap: attendance, satisfaction survey, budget realization vs estimate, video highlight, foto, dan rekomendasi untuk event berikutnya. Accountable end-to-end.",
  },
  {
    title: "Insurance peserta + crew covered",
    desc: "Setiap event kami menyertakan asuransi kecelakaan peserta dan crew. Certified first aid on-site untuk outdoor events. Ini bukan optional — ini standar kami.",
  },
];

export default function EventOrganizerCorporateBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: IMAGES.caseStudyLarge.src,
      datePublished: "2026-05-14",
      dateModified: "2026-05-14",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Event Organizer Corporate Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Event Organizer Corporate Bandung",
      description:
        "Specialist B2B corporate event organizer di Bandung — company gathering, team building, executive offsite, MICE. Bukan generic EO.",
      priceRange: "Rp 1.200.000 - Rp 12.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Bekerja dengan Event Organizer Corporate Bandung — 7 Langkah",
      description: "Proses kerja dari inquiry pertama hingga post-event report yang TourBandung Corporate jalankan untuk setiap event",
      steps: [
        { name: "Inquiry & Initial Response", text: "Kirim inquiry via form, WhatsApp, atau email. Tim kami response dalam 6 jam business hours untuk schedule brief call." },
        { name: "Discovery Brief Call", text: "20–90 menit brief call dengan senior PM: objective, timeline, pax, budget, dan constraint. Tidak ada quote tanpa tahap ini — ini yang membedakan specialist dari template vendor." },
        { name: "Proposal & Estimasi Budget", text: "Line-item proposal dengan 2 opsi venue, rundown draft, dan breakdown cost transparan dikirim dalam 24–48 jam setelah brief." },
        { name: "Revision & Confirmation", text: "1–3 putaran revisi. Setelah approval, DP 30–50% untuk lock venue dan kick off preparation." },
        { name: "Preparation & Coordination", text: "3–12 minggu prep: vendor coordination, content development, guest manifest, dietary mapping, dan risk register per event." },
        { name: "Execution On-Site", text: "Senior PM dan crew on-site dari setup H-1. Real-time coordination, contingency plan aktif, dan medical standby untuk event outdoor." },
        { name: "Post-Event Report", text: "Dalam 5 hari kerja: satisfaction survey, budget realization, video highlight, foto deliverables, dan rekomendasi untuk next event." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="EO corporate Bandung yang spesialis B2B — proposal dalam 24 jam."
        context="corporate event organizer Bandung"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.caseStudyLarge.src}
              alt="Corporate event di Bandung — large scale gathering 800 pax"
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
                <span className="text-paper/75">Event Organizer Corporate Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Specialist B2B · Bukan Generic EO</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Event Organizer Corporate
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Bandung yang fokus B2B.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Bukan EO pernikahan yang juga terima corporate. Bukan travel agent yang juga terima gathering.{" "}
                <strong className="text-paper">100% B2B corporate events</strong> — company gathering, team building, executive offsite, MICE, incentive trip. Sejak 2018.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
                >
                  Request Proposal — 24 Jam
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildWaLink("corporate event organizer di Bandung")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
                >
                  <Whatsapp size={16} />
                  Chat Dulu
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
                {[
                  { n: STATS.eventsDelivered, l: "Events delivered" },
                  { n: STATS.companiesTrusted, l: "Perusahaan" },
                  { n: "4.9 ★", l: "Google Reviews" },
                  { n: STATS.repeatBookingRate, l: "Repeat booking" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-xl text-paper">{s.n}</p>
                    <p className="text-xs text-paper/55 mt-0.5">{s.l}</p>
                  </div>
                ))}
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
                <p className="eyebrow-brand">Siapa Kami</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                TourBandung Corporate adalah unit <strong>specialist B2B corporate event</strong> dari 7Summits Travel, beroperasi sejak 2018 dengan fokus eksklusif pada perusahaan Indonesia. Tidak ada wedding, tidak ada family travel, tidak ada wisata retail.{" "}
                <strong>Hanya corporate events</strong> — dari team building 20 orang sampai annual gathering 2.000 pax. Dengan{" "}
                <strong>{STATS.eventsDelivered} events</strong> dan <strong>{STATS.companiesTrusted} klien korporat</strong>, kami adalah salah satu EO corporate paling berpengalaman di Bandung & Jawa Barat.
              </p>
              <FreshnessSignal
                dateUpdated="2026-05-22"
                googleReviewCount={105}
              />
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request Proposal Gratis
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

        {/* TOC */}
        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Daftar isi</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#beda", "Specialist vs generic EO — perbedaan nyata"],
                ["#layanan", "10 layanan corporate event yang kami handle"],
                ["#differentiator", "7 hal yang membedakan kami"],
                ["#portfolio", "Portfolio & track record"],
                ["#process", "Proses kerja dari brief ke report"],
                ["#case-studies", "Case studies corporate events"],
                ["#faq", "FAQ Event Organizer Corporate Bandung"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-ink hover:text-brand-deep flex items-baseline gap-2">
                    <span className="text-slate-mute font-mono text-xs">↓</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 1: Beda */}
        <Section id="beda" eyebrow="Section 1" title="Specialist B2B vs generic EO — 7 perbedaan yang perlu diketahui HR & procurement">
          <p>
            Semua vendor yang mengaku EO corporate belum tentu specialist. Ada perbedaan nyata antara vendor yang fokus B2B dan yang terima semua proyek — dan perbedaan ini terasa di kualitas eksekusi, transparansi, dan accountability.
          </p>
          <div className="not-prose mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="text-left px-4 py-3 rounded-tl-xl font-medium">Kriteria</th>
                  <th className="text-left px-4 py-3 font-medium">Corporate Specialist</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl font-medium">Generic EO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-divider">
                {[
                  { k: "Discovery process", s: "Brief 60–90 menit, questionnaire terstruktur", g: "Langsung kirim katalog atau tanya budget" },
                  { k: "Proposal format", s: "Line-item per komponen + contingency explicit", g: "Total lump-sum atau minimal breakdown" },
                  { k: "Team assignment", s: "Dedicated senior PM satu orang", g: "Rotating coordinator atau freelancer" },
                  { k: "Venue access", s: "Direct partnership 60+ venue", g: "Reseller / via platform dengan markup" },
                  { k: "Risk management", s: "Risk register terdokumentasi + Plan B explicit", g: "Improvisasi di lapangan" },
                  { k: "Insurance", s: "Coverage peserta + crew, medical standby outdoor", g: "Tidak standar / tidak disebutkan" },
                  { k: "Post-event", s: "Report dalam 5 hari: survey, budget realization, video", g: "Tidak ada follow-up" },
                ].map((row) => (
                  <tr key={row.k} className="hover:bg-cream/30">
                    <td className="px-4 py-3 font-medium text-ink">{row.k}</td>
                    <td className="px-4 py-3 text-brand">
                      <span className="flex items-start gap-1.5">
                        <Check size={13} className="mt-0.5 shrink-0" />
                        {row.s}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate">{row.g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Ingin cara mudah memverifikasi vendor sebelum booking? Baca panduan kami di{" "}
            <Link href="/specialist-vs-generic-eo" className="text-brand hover:underline">
              Specialist vs Generic EO — 12 Dimensi Comparison
            </Link>.
          </p>
        </Section>

        {/* Section 2: Layanan */}
        <Section id="layanan" eyebrow="Section 2" title="10 layanan corporate event yang kami handle di Bandung">
          <p>Semua layanan di bawah tersedia untuk perusahaan dari Jakarta, Bandung, dan kota lain di Indonesia. Grup dari luar kota — logistik transport bisa kami arrange.</p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-4">
            {SERVICES_LIST.map((svc) => (
              <Link
                key={svc.slug}
                href={svc.slug}
                className="group rounded-xl border border-border bg-paper hover:border-brand/30 hover:bg-brand/3 transition-all p-5 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-sm text-ink group-hover:text-brand transition-colors">{svc.name}</p>
                  <p className="text-xs text-slate mt-1">{svc.pax}</p>
                  <p className="text-xs font-medium text-brand mt-1">{svc.price}</p>
                </div>
                <ArrowRight size={16} className="text-slate group-hover:text-brand transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </Section>

        {/* Section 3: Differentiator */}
        <Section id="differentiator" eyebrow="Section 3" title="7 hal yang membuat kami berbeda dari EO lain di Bandung">
          <div className="not-prose mt-5 space-y-4">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} className="flex gap-5 rounded-2xl border border-border bg-paper p-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand">0{i + 1}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{d.title}</p>
                  <p className="text-sm text-slate mt-1.5">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 4: Portfolio */}
        <Section id="portfolio" eyebrow="Section 4" title="Track record — angka yang bisa diverifikasi">
          <div className="not-prose mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "400+", l: "Corporate events delivered", sub: "Sejak 2018" },
              { n: "100+", l: "Perusahaan Indonesia", sub: "BUMN, startup, swasta" },
              { n: "4.9/5", l: "Google Reviews", sub: "105 reviews" },
              { n: "92%", l: "Repeat booking rate", sub: "Klien kembali" },
              { n: "1.200", l: "Largest event (pax)", sub: "3-day program" },
              { n: "60+", l: "Venue partner direct", sub: "Tanpa reseller" },
              { n: "8+", l: "Industri yang pernah dilayani", sub: "Banking, tech, FMCG..." },
              { n: "0", l: "Major incident on-site", sub: "400+ events, zero" },
            ].map((stat) => (
              <div key={stat.l} className="rounded-xl border border-border bg-paper p-5">
                <p className="font-display text-2xl md:text-3xl text-brand">{stat.n}</p>
                <p className="text-xs font-medium text-ink mt-2">{stat.l}</p>
                <p className="text-xs text-slate mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 5: Process */}
        <Section id="process" eyebrow="Section 5" title="Proses kerja dari brief pertama ke post-event report">
          <div className="not-prose mt-5 space-y-3">
            {[
              { step: "01", name: "Inquiry & Initial Response", desc: "Dalam 6 jam dari inquiry (business hours), tim kami response untuk schedule brief call.", time: "Hari 1" },
              { step: "02", name: "Discovery Brief Call", desc: "20–90 menit brief call dengan senior PM: objective, timeline, pax, budget, constraint. Tidak ada quote tanpa ini.", time: "Hari 2–3" },
              { step: "03", name: "Proposal & Estimasi Budget", desc: "Line-item proposal dengan 2 opsi venue, rundown draft, dan breakdown cost transparan.", time: "24–48 jam setelah brief" },
              { step: "04", name: "Revision & Confirmation", desc: "1–3 putaran revisi. Setelah approval, DP 30–50% untuk lock venue dan kick off preparation.", time: "3–7 hari" },
              { step: "05", name: "Preparation & Coordination", desc: "3–12 minggu prep: vendor coordination, content development, guest manifest, dietary mapping, risk register.", time: "Sesuai timeline" },
              { step: "06", name: "Execution", desc: "Senior PM + crew on-site. Real-time coordination, contingency plan aktif, medical standby kalau outdoor.", time: "Hari H" },
              { step: "07", name: "Post-Event Report", desc: "Dalam 5 hari kerja: satisfaction survey, budget realization, video highlight, foto, dan rekomendasi.", time: "H+5" },
            ].map((step) => (
              <div key={step.step} className="flex gap-4 rounded-2xl border border-border bg-paper p-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand">{step.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-sm">{step.name}</p>
                    <span className="text-xs text-slate bg-cream px-2 py-0.5 rounded-full shrink-0">{step.time}</span>
                  </div>
                  <p className="text-sm text-slate mt-1.5">{step.desc}</p>
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
              Corporate events yang pernah kami execute.
            </h2>
            <RelatedCaseStudies serviceSlugs={["company-gathering", "team-building", "mice", "annual-company-trip"]} />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow text-slate mb-3">FAQ</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
                Pertanyaan paling sering tentang EO corporate Bandung.
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-border bg-paper p-6">
                    <h3 className="font-semibold text-sm text-ink mb-2">{faq.question}</h3>
                    <p className="text-sm text-slate leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container-1280 text-center">
            <p className="eyebrow text-brand mb-4">EO Corporate Bandung</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-2xl mx-auto">
              Cari EO corporate yang bisa dipertanggungjawabkan?
            </h2>
            <p className="text-paper/70 mb-8 max-w-lg mx-auto">
              Ceritakan kebutuhan event lo. Kami kirim proposal lengkap dengan line-item budget dalam 24 jam — setelah brief call singkat.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/proposal/request"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-13 font-medium hover:bg-brand-deep transition-all"
              >
                Request Proposal Gratis
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={buildWaLink("jasa EO corporate event di Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 text-paper px-8 h-13 font-medium hover:bg-paper hover:text-ink transition-colors"
              >
                <Whatsapp size={16} />
                Chat via WhatsApp
              </a>
            </div>
            <p className="mt-6 text-xs text-paper/40">
              Lihat detail layanan:{" "}
              <Link href="/corporate-gathering-bandung" className="underline hover:text-paper/70">Gathering</Link>
              {" · "}
              <Link href="/team-building-bandung" className="underline hover:text-paper/70">Team Building</Link>
              {" · "}
              <Link href="/mice-organizer-bandung" className="underline hover:text-paper/70">MICE</Link>
              {" · "}
              <Link href="/executive-offsite-bandung" className="underline hover:text-paper/70">Executive Offsite</Link>
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
