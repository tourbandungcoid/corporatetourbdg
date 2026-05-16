import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { IMAGES } from "@/lib/drive-images";
import { STATS, buildWaLink, SITE } from "@/lib/site";
import { JsonLd, combineSchemas, articleSchema, faqPageSchema, breadcrumbSchema, serviceSchema, organizationSchema, localBusinessSchema, howToSchema } from "@/lib/schema";

const SLUG = "/company-retreat-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: "Company Retreat Bandung 2026: Strategic Multi-Day untuk Deep Work & Cultural Reset",
  description:
    "Company retreat Bandung — strategic planning, cultural reset, post-merger integration. Venue private exclusive, facilitator senior bersertifikat. Rp 3,5–8 jt/pax. ⭐ 4.9/5 · Proposal gratis 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Company Retreat Bandung — Strategic Multi-Day Premium Retreat",
    description: "Multi-day company retreat untuk strategic deep work di Bandung & Jawa Barat.",
    url: URL,
    type: "article",
    publishedTime: "2026-05-12",
    modifiedTime: "2026-05-16",
    authors: [`${SITE.url}/team#sinta-rahmadhani`],
    section: "Company Retreat",
    tags: ["company retreat bandung", "corporate retreat jawa barat", "strategic retreat", "multi-day retreat bandung"],
    images: [{ url: IMAGES.packageExecutiveOffsite.src, width: 1200, height: 630, alt: IMAGES.packageExecutiveOffsite.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Retreat Bandung — Strategic Multi-Day Premium Retreat",
    description: "Multi-day company retreat Bandung. Strategic planning, cultural reset, post-merger. Rp 3,5–8 jt/pax.",
    images: [IMAGES.packageExecutiveOffsite.src],
  },
};

const FAQS = [
  {
    question: "Berapa biaya company retreat per pax di Bandung?",
    answer:
      "Range Rp 3,5–8 juta/pax tergantung durasi dan tier. 2D1N standard Rp 3,5–4,5 jt/pax. 3D2N premium Rp 5–6 jt/pax. 5D4N immersive bespoke Rp 7–10 jt/pax. Sudah include venue private (villa/resort), F&B premium, facilitator senior, equipment + materials, transportation, dan project management. Bespoke retreat dengan certified executive coach tambah Rp 30-80 jt flat fee.",
  },
  {
    question: "Kapan perusahaan butuh company retreat (vs gathering atau outing)?",
    answer:
      "6 scenario yang clear-cut: (1) Strategic planning untuk fiscal year baru, (2) Post-merger atau acquisition integration, (3) Cultural reset (visi/misi refresh, value re-articulation), (4) Leadership development cohort, (5) Major pivot strategic preparation, (6) Founders/exec team alignment annual. Kalau goal-nya refresh + bonding casual, pilih outing atau gathering — retreat overkill.",
  },
  {
    question: "Format multi-day retreat: 2D1N, 3D2N, atau 5D4N?",
    answer:
      "2D1N: surface-level alignment, focused single topic. 3D2N: deeper exploration, can cover 2-3 substantive topics, time for reflection. 5D4N: bespoke immersive, full strategic year planning atau deep cultural transformation work. Untuk most company retreat, 3D2N adalah sweet spot — meaningful depth tanpa burnout peserta.",
  },
  {
    question: "Apakah company retreat butuh certified facilitator?",
    answer:
      "Iya, kalau goal-nya substantive (strategic planning, transformation work). Certified facilitator (Strategy & Innovation, OD, atau Leadership Coach) memastikan session productive, hasil actionable, dan dynamics tim healthy. Kami partner dengan 6+ certified facilitator senior — fee Rp 30-80 jt flat per retreat tergantung profil. Untuk retreat lighter, internal facilitation by senior planner kami cukup.",
  },
  {
    question: "Venue terbaik untuk company retreat di Bandung?",
    answer:
      "5 venue tier-1: (1) Premium mountain villa di Lembang/Pangalengan — private estate 60-100 pax. (2) Boutique resort di Ciwidey — quiet, scenic, dedicated meeting facilities. (3) Eco-lodge di Bukit Patenggang — untuk retreat yang prefer immersive nature. (4) Heritage villa di Bandung Utara — Sundanese architecture, premium service. (5) Private mountain estate Pangalengan — paling secluded, paling premium. Detail per venue di-share saat proposal.",
  },
  {
    question: "Apa saja komponen wajib di company retreat strategic?",
    answer:
      "5 komponen core: (1) Pre-retreat preparation (briefing, pre-read material, individual assessment kalau perlu). (2) Opening session dengan tone-setting (CEO/founder remark, ground rules, psychological safety). (3) Substantive working session (2-4 jam blocks dengan structured methodology). (4) Reflective time (informal interaction, individual journaling, nature exposure). (5) Closing dengan commitment + follow-up plan.",
  },
  {
    question: "Berapa pax ideal untuk company retreat?",
    answer:
      "Sweet spot 10-40 pax untuk substantive depth. Di bawah 8 pax, dynamics tim kurang ada. Di atas 50 pax, susah maintain intimacy dan working session efficiency drops. Untuk leadership group, 12-25 pax adalah classic size. Untuk founders/exec team, 6-15 pax. Untuk department alignment retreat, 15-30 pax.",
  },
  {
    question: "Bagaimana mengukur outcome company retreat?",
    answer:
      "Tergantung tipe retreat. Strategic planning retreat: jumlah strategic decision di-buat, alignment level (vote 1-10), commitment letter signed. Cultural reset retreat: pre-post culture survey, value internalization score. Leadership retreat: 360-feedback delta 3 months later, individual development plan progress. Kami siapkan measurement framework custom sesuai goal di briefing.",
  },
  {
    question: "Berapa lama prep company retreat Bandung?",
    answer:
      "Minimum 8-10 minggu. Substansi retreat butuh planning matang — pre-retreat assessment (4-6 minggu sebelumnya), facilitator briefing + agenda design (3-4 minggu), venue lock + logistics (2-3 minggu), pre-read material prep (1-2 minggu). Rush retreat (3-4 minggu prep) possible tapi akan kompromi depth dan facilitator availability.",
  },
  {
    question: "Bisakah retreat dikombinasikan dengan kebijakan privacy & confidentiality?",
    answer:
      "Iya, sangat possible. Kami sign NDA dengan client untuk sensitive retreat (strategic planning, post-merger, executive level). Venue private (villa exclusive, bukan share dengan tamu lain), staff yang on-site signed NDA, photo/video opt-in only, dan dedicated discretion protocol. Beberapa client kami tidak post retreat di social media — kami respect that.",
  },
];

const COMPONENTS = [
  { name: "Pre-Retreat Preparation", description: "Briefing call participants, pre-read material distribution, individual assessment kalau perlu (DiSC, leadership index, strategic input). Memastikan peserta arrive prepared.", duration: "2-6 minggu sebelumnya" },
  { name: "Opening Session — Tone Setting", description: "CEO/Founder opening remarks, ground rules establishment, psychological safety creation. Critical untuk authentic engagement.", duration: "60-90 min Day 1" },
  { name: "Substantive Working Session", description: "Structured methodology — strategic planning canvas, cultural assessment, OD workshop, dll. 2-4 jam working blocks dengan facilitator guide.", duration: "Multiple blocks 2-4 jam" },
  { name: "Reflective Time + Informal Interaction", description: "Buffer time antara session formal. Walking discussion, individual journaling, nature exposure. Bagian critical — insight muncul di pause.", duration: "1-2 jam per hari" },
  { name: "Closing — Commitment + Follow-up", description: "Decision capture, individual commitment, 30/60/90 day follow-up plan. Tanpa ini, retreat insights menguap.", duration: "90-120 min last day" },
];

export default function CompanyRetreatBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: "Company Retreat Bandung 2026: Strategic Multi-Day Premium Retreat",
      description: "Multi-day company retreat untuk strategic planning, cultural reset, atau leadership development di Bandung.",
      image: IMAGES.packageExecutiveOffsite.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: SLUG,
      author: { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
      aboutService: "Company Retreat Bandung",
      keywords: ["company retreat bandung", "corporate retreat bandung", "paket retreat perusahaan bandung", "team retreat bandung", "strategy retreat perusahaan jawa barat", "company retreat lembang"],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        { type: "Service", name: "Corporate Retreat", url: `${SITE.url}/services/corporate-retreat`, id: `${SITE.url}/services/corporate-retreat#service` },
        { type: "WebPage", name: "Executive Offsite Bandung", url: `${SITE.url}/executive-offsite-bandung` },
        { type: "WebPage", name: "Villa Gathering Bandung", url: `${SITE.url}/villa-gathering-bandung` },
        { type: "WebPage", name: "Venue Gathering Bandung", url: `${SITE.url}/venue-gathering-bandung` },
      ],
    }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Company Retreat Bandung", url: URL }]),
    serviceSchema({
      name: "Company Retreat Bandung",
      description: "Premium multi-day strategic retreat untuk perusahaan di Bandung & Jawa Barat.",
      priceRange: "Rp 3.500.000 - Rp 8.000.000 per pax",
      url: URL,
    }),
    faqPageSchema(FAQS, URL),
    howToSchema({
      pageUrl: URL,
      name: "Cara Merencanakan Company Retreat di Bandung",
      description: "5 langkah untuk merancang company retreat multi-hari yang produktif dan impactful di Bandung & Jawa Barat.",
      steps: [
        { name: "Tentukan Tujuan & Format Retreat", text: "Definisikan apakah retreat ini untuk strategic planning, cultural reset, leadership development, atau team cohesion. Format menentukan segalanya: 2D1N focus sprint vs 3D2N immersive retreat punya struktur program yang sangat berbeda." },
        { name: "Pilih Venue yang Mendukung Deep Work", text: "Retreat butuh venue yang mengisolasi peserta dari distraksi kantor: no-signal area atau quiet zone policy. Pilihan Bandung: eco-lodge Pangalengan, heritage villa Lembang, atau private resort Ciwidey. Pastikan ada ruang pleno + ruang breakout terpisah." },
        { name: "Rancang Agenda Kerja yang Seimbang", text: "Mix sesi strategis (60-70% waktu) dengan active recovery (20%) dan social bonding (10-20%). Hindari agenda meeting biasa yang dipindahkan ke luar kota — retreat harus punya format yang berbeda dari meeting rutin." },
        { name: "Siapkan Fasilitator untuk Sesi Kritis", text: "Sesi yang perlu keputusan penting atau membahas konflik tim butuh fasilitator eksternal yang netral — bukan pemimpin internal yang juga peserta diskusi. Fasilitator certified membantu navigate dynamic antar pemimpin lebih efektif." },
        { name: "Capture Output & Assign Action Items", text: "Setiap sesi harus berakhir dengan documented decisions dan assigned action items dengan owner + deadline. Post-retreat, kirim summary dalam 48 jam dan jadwalkan follow-up review 30 hari kemudian untuk track implementasi." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image src={IMAGES.packageExecutiveOffsite.src} alt="Company retreat di Bandung — strategic multi-day premium" fill priority sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/95" />
          </div>
          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Company Retreat Bandung</span>
              </nav>
              <span className="eyebrow text-brand-light/70">Strategic Retreat Guide · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Company Retreat Bandung 2026:</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">Multi-day untuk deep work.</span>
              </h1>
              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Strategic planning, cultural reset, atau leadership cohort — premium retreat 2D1N hingga 5D4N dengan facilitator senior dan venue private.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4"><Sparkle size={16} className="text-brand" /><p className="eyebrow-brand">Quick Answer</p></div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Company retreat di Bandung untuk <strong>2D1N range Rp 3,5–4,5 jt/pax</strong>, <strong>3D2N Rp 5–6 jt/pax</strong>, dan <strong>5D4N immersive Rp 7–10 jt/pax</strong>. Sudah include venue private (villa/resort eksklusif), F&amp;B premium, facilitator senior, dan materials. Sweet spot pax <strong>10-40 orang</strong> untuk substantive depth. Min prep <strong>8-10 minggu</strong>. Cocok untuk strategic planning, post-merger integration, cultural reset, atau leadership development.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 3,5-8 jt/pax</Tag>
                <Tag>Pax: 10-40</Tag>
                <Tag>Durasi: 2D1N – 5D4N</Tag>
                <Tag>Facilitator: certified senior</Tag>
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link href="/proposal/request" className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition">Request Free Proposal<ArrowRight size={14} /></Link>
                <Link href="#scenarios" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition">6 scenario retreat</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Table of contents</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[["#what-is-retreat", "Retreat vs gathering vs outing"], ["#scenarios", "6 scenario yang butuh retreat"], ["#format", "2D1N / 3D2N / 5D4N format"], ["#components", "5 komponen wajib retreat strategic"], ["#facilitator", "Facilitator senior vs internal"], ["#venues", "5 venue retreat recommended"], ["#measure", "Measure outcome retreat"], ["#faq", "FAQ"]].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-ink hover:text-brand-deep flex items-baseline gap-2"><span className="text-slate-mute font-mono text-xs">↓</span>{label}</Link></li>
              ))}
            </ol>
          </div>
        </section>

        <Section id="what-is-retreat" eyebrow="Section 1" title="Company retreat ≠ gathering ≠ outing">
          <p>Term ini sering dipakai interchangeable, tapi format dan outcome sangat berbeda. Pilih kata yang tepat = pilih format yang fit.</p>
          <div className="not-prose overflow-x-auto -mx-6 md:mx-0 mt-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40"><th className="px-4 py-3 font-medium">Aspek</th><th className="px-4 py-3 font-medium">Retreat</th><th className="px-4 py-3 font-medium">Gathering</th><th className="px-4 py-3 font-medium">Outing</th></tr></thead>
              <tbody className="text-sm">
                {[["Goal primary", "Strategic / cultural work", "Celebration + awarding", "Refresh + bonding"], ["Format", "Working session deep", "Ceremony + entertainment", "Activity-based"], ["Pax ideal", "10-40", "100-500", "30-300"], ["Durasi", "2D1N – 5D4N", "2D1N – 3D2N", "1D – 2D1N"], ["Budget/pax", "Rp 3,5-8 jt", "Rp 3-7 jt", "Rp 1,5-4 jt"], ["Facilitator", "Senior, often certified", "Production team", "Activity guide"]].map((row, i) => (
                  <tr key={i} className="border-b border-divider/60">{row.map((cell, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-ink" : "text-slate"}`}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6"><strong>Rule of thumb:</strong> kalau output retreat adalah deliverable (strategic plan, alignment doc, leadership development plan), pilih retreat. Kalau output adalah experience (memorable moment, energy boost, recognition), pilih gathering atau outing.</p>
        </Section>

        <Section id="scenarios" eyebrow="Section 2" title="6 scenario yang butuh company retreat (bukan gathering)">
          <ol className="not-prose space-y-3 mt-2">
            {[
              { t: "Strategic planning untuk fiscal year baru", d: "Annual strategy session 2-3 hari. Output: prioritas tahun, OKR alignment, resource allocation framework." },
              { t: "Post-merger atau acquisition integration", d: "Cultural integration 2 tim/perusahaan, dynamics building, conflict-mitigation preemptive. 3D2N format paling efektif." },
              { t: "Cultural reset", d: "Visi/misi refresh, value re-articulation, culture audit. Output: new culture playbook, behavior expectations." },
              { t: "Leadership development cohort", d: "Senior leadership 12-25 orang dengan facilitator certified. 360-feedback integration, individual development plan." },
              { t: "Major pivot strategic preparation", d: "Pre-pivot alignment untuk founders/exec team. High-stakes work, demand confidentiality." },
              { t: "Founders/exec team alignment annual", d: "Founders ritual yearly untuk realign visi + commitment. Smaller group (6-15), more intimate." },
            ].map((s, i) => (
              <li key={i} className="rounded-2xl border border-border bg-paper p-5"><p className="font-medium text-ink">{i + 1}. {s.t}</p><p className="mt-1 text-sm text-slate">{s.d}</p></li>
            ))}
          </ol>
        </Section>

        <Section id="format" eyebrow="Section 3" title="2D1N vs 3D2N vs 5D4N — pilih durasi yang fit">
          <div className="not-prose space-y-4 mt-2">
            {[
              { f: "2D1N — Surface alignment", d: "Single substantive topic atau quick alignment. 4-6 working hours total. Untuk simple decisions atau warm-up retreat.", price: "Rp 3,5-4,5 jt/pax" },
              { f: "3D2N — Sweet spot depth", d: "2-3 substantive topics, time untuk reflection. 8-12 working hours total. Format paling sering kami deliver — meaningful depth tanpa burnout.", price: "Rp 5-6 jt/pax" },
              { f: "5D4N — Bespoke immersive", d: "Full strategic year planning atau deep transformation work. 20+ working hours. Untuk leadership cohort atau founders ritual.", price: "Rp 7-10 jt/pax" },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-6">
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-2"><h3 className="font-display text-xl text-ink">{p.f}</h3><span className="text-sm text-brand-deep font-medium tabular">{p.price}</span></div>
                <p className="text-sm md:text-base text-slate">{p.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="components" eyebrow="Section 4" title="5 komponen wajib di company retreat strategic">
          <div className="not-prose space-y-4 mt-2">
            {COMPONENTS.map((c, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-6">
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-2"><h3 className="font-display text-xl text-ink">{i + 1}. {c.name}</h3><span className="text-xs text-slate-mute font-medium">{c.duration}</span></div>
                <p className="text-sm md:text-base text-slate">{c.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="facilitator" eyebrow="Section 5" title="Facilitator senior — internal kami atau certified eksternal?">
          <p>Untuk retreat substantive, choice facilitator menentukan 50% outcome. 2 tier facilitation yang kami offer:</p>
          <div className="not-prose grid gap-5 mt-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-xl text-ink mb-3">Internal Senior Planner</h3>
              <p className="text-sm text-slate mb-4">Senior planner kami dengan 5+ tahun experience corporate event + retreat. Sudah handle 50+ retreat.</p>
              <p className="text-xs text-brand-deep font-medium mb-2">Best for:</p>
              <ul className="space-y-1 text-sm text-slate"><li>Cultural reset, team alignment</li><li>Quarterly leadership session</li><li>Department offsite</li><li>Retreat 2D1N format</li></ul>
              <p className="text-xs text-slate-mute font-medium mt-4">Fee: termasuk di package</p>
            </div>
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-xl text-ink mb-3">Certified Senior Coach</h3>
              <p className="text-sm text-slate mb-4">Partner kami: certified executive coach atau OD practitioner. Profile setara Stanford GSB, IMD, INSEAD alumni.</p>
              <p className="text-xs text-brand-deep font-medium mb-2">Best for:</p>
              <ul className="space-y-1 text-sm text-slate"><li>Strategic planning C-level</li><li>Post-merger integration</li><li>Major transformation work</li><li>3D2N+ retreat formats</li></ul>
              <p className="text-xs text-slate-mute font-medium mt-4">Fee: Rp 30-80 jt flat per retreat</p>
            </div>
          </div>
        </Section>

        <Section id="venues" eyebrow="Section 6" title="5 venue retreat recommended di Bandung & Jawa Barat">
          <div className="not-prose grid gap-4">
            {[
              { n: "Premium Mountain Villa Lembang", t: "Tier 1", d: "Private estate kapasitas 30-80 pax, infinity pool, mountain view, premium service. Most popular untuk retreat 3D2N." },
              { n: "Boutique Resort Ciwidey", t: "Tier 1", d: "Dedicated meeting facilities, quiet setting, scenic. Cocok 25-50 pax." },
              { n: "Eco-Lodge Bukit Patenggang", t: "Tier 1-2", d: "Immersive nature untuk retreat yang prefer outdoor feel. 20-40 pax, untuk leadership retreat dengan reflective angle." },
              { n: "Heritage Villa Bandung Utara", t: "Tier 1", d: "Sundanese architecture authentic, premium service. Untuk retreat yang appreciate culture. 25-40 pax." },
              { n: "Private Mountain Estate Pangalengan", t: "Bespoke", d: "Paling secluded, paling premium. Untuk C-suite retreat dengan confidentiality concern tinggi. 8-20 pax." },
            ].map((v) => (
              <div key={v.n} className="rounded-2xl border border-border bg-paper p-5"><div className="flex items-baseline justify-between flex-wrap gap-2 mb-1"><h3 className="font-display text-lg text-ink">{v.n}</h3><span className="text-xs text-brand-deep font-medium">{v.t}</span></div><p className="text-sm text-slate">{v.d}</p></div>
            ))}
          </div>
        </Section>

        <Section id="measure" eyebrow="Section 7" title="Measure outcome — angka yang bisa di-justify ke board">
          <p>Beda dari gathering yang focus engagement metric, retreat outcome di-ukur dari deliverable yang concrete:</p>
          <ol className="not-prose space-y-3 mt-5">
            {[
              { t: "Strategic planning retreat", m: "Jumlah strategic decision di-buat + signed, OKR finalization, resource allocation locked, alignment vote score (1-10)" },
              { t: "Cultural reset retreat", m: "Pre-post culture survey delta, value internalization score, behavior expectation document" },
              { t: "Leadership development cohort", m: "Individual development plan progress (30/60/90 day), 360-feedback delta 3 month, peer coaching pairs setup" },
              { t: "Post-merger integration retreat", m: "Cultural integration index, conflict frequency reduction, joint OKR setup, leadership trust survey" },
            ].map((m, i) => <li key={i} className="rounded-2xl border border-border bg-paper p-5"><p className="font-medium text-ink">{m.t}</p><p className="mt-1 text-sm text-slate">{m.m}</p></li>)}
          </ol>
        </Section>

        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[[STATS.eventsDelivered, "Events delivered"], ["50+", "Strategic retreats"], [STATS.repeatBookingRate, "Repeat booking"], [STATS.avgResponseTime, "Avg response"]].map(([num, label]) => (
                <div key={label} className="text-center md:text-left"><p className="font-display text-3xl md:text-4xl text-ink tabular leading-none">{num}</p><p className="mt-2 text-sm text-slate">{label}</p></div>
              ))}
            </div>
          </div>
        </section>

        <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan executive">
          <div className="not-prose space-y-3 mt-4">
            {FAQS.map((item, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors">
                <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4"><h3 className="font-display text-lg text-ink leading-snug">{item.question}</h3><span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg></span></summary>
                <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">{item.answer}</div>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">
            Lihat juga:{" "}
            <Link href="/faq/budget" className="text-brand-deep hover:underline">FAQ Budget & Investasi</Link>
            {" · "}
            <Link href="/faq/formats" className="text-brand-deep hover:underline">FAQ Format & Aktivitas</Link>
            {" · "}
            <Link href="/faq/location" className="text-brand-deep hover:underline">FAQ Lokasi & Venue</Link>
          </p>
        </Section>

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[["/panduan-corporate-outing-bandung", "Panduan Corporate Outing Bandung", "Master guide: jenis, budget, lokasi, vendor"], ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B untuk retreat perusahaan"], ["/executive-offsite-bandung", "Executive Offsite", "C-level intensive 1-2 day"], ["/incentive-trip-bandung", "Incentive Trip Bandung", "Program reward top performers"]].map(([href, title, desc]) => (
                <Link key={href} href={href} className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5"><h3 className="font-display text-lg text-ink leading-tight">{title}</h3><p className="mt-2 text-sm text-slate">{desc}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">Read guide<ArrowRight size={12} className="transition-transform group-hover:translate-x-1" /></span></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">Mau strategic retreat yang substantive?</h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">Briefing call 15 menit dengan senior planner — kami match facilitator + venue yang fit goal retreat Anda.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">Request Proposal<ArrowRight size={16} /></Link>
              <a href={buildWaLink("company retreat Bandung")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"><Whatsapp size={16} />WhatsApp</a>
            </div>
          </div>
        </section>

        <RelatedCaseStudies
          serviceSlugs={["corporate-retreat", "executive-offsite"]}
          title="Company retreat case studies."
        />

        <StickyProposalBar message="Strategic retreat untuk perusahaan Anda? Free planning consultation." context="company retreat Bandung" />
      </main>
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 md:py-24 border-t border-divider">
      <div className="container-1280">
        <div className="max-w-3xl mb-10"><span className="eyebrow-brand">{eyebrow}</span><h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">{title}</h2></div>
        <div className="max-w-3xl prose-content text-base md:text-lg text-slate leading-relaxed space-y-5 [&_p]:text-slate [&_strong]:text-ink">{children}</div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) { return <span className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-xs text-slate">{children}</span>; }
