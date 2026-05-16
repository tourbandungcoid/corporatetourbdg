import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { IMAGES } from "@/lib/drive-images";
import { STATS, buildWaLink, SITE } from "@/lib/site";
import { JsonLd, combineSchemas, articleSchema, faqPageSchema, breadcrumbSchema, serviceSchema, organizationSchema, localBusinessSchema, howToSchema } from "@/lib/schema";

const SLUG = "/executive-offsite-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: "Executive Offsite Bandung 2026: Discreet C-Suite Strategy Session",
  description:
    "Executive offsite Bandung untuk C-suite strategy session — discreet, venue private exclusive, NDA-bound. Rp 6,5–12 jt/pax, 8–20 pax. ⭐ 4.9/5 · Proposal konfidensial dalam 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Executive Offsite Bandung — Premium C-Suite Strategy Session",
    description: "Discreet executive offsite untuk strategic decision-making di Bandung.",
    url: URL,
    type: "article",
    publishedTime: "2026-05-12",
    modifiedTime: "2026-05-16",
    authors: [`${SITE.url}/team#andre-pratama`],
    section: "Executive Offsite",
    tags: ["executive offsite bandung", "c-suite strategy session", "corporate retreat premium jawa barat", "offsite bandung"],
    images: [{ url: IMAGES.packageExecutiveOffsite.src, width: 1200, height: 630, alt: IMAGES.packageExecutiveOffsite.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Offsite Bandung — Premium C-Suite Strategy Session",
    description: "Discreet executive offsite C-suite Bandung. Venue private, NDA-bound. Rp 6,5–12 jt/pax.",
    images: [IMAGES.packageExecutiveOffsite.src],
  },
};

const FAQS = [
  {
    question: "Berapa biaya executive offsite per pax untuk C-suite?",
    answer:
      "Range Rp 6,5-12 juta/pax untuk 2D1N premium di Bandung. 1D intensive Rp 5-7 jt/pax. 2D1N standard Rp 7-9 jt/pax. 2D1N bespoke dengan certified strategy facilitator Rp 10-15 jt/pax. Termasuk venue private exclusive (heritage villa atau private mountain estate), F&B fine-dining, dedicated facilitator, AV setup, dan documentation. Strategy consultant senior tambah Rp 50-150 jt flat per offsite.",
  },
  {
    question: "Apa kunci executive offsite yang efektif untuk C-suite?",
    answer:
      "5 element: (1) Discretion 100% — venue exclusive, staff NDA-bound, no social media expectation. (2) Substantive prep — pre-read material wajib, individual input pre-collected. (3) Quality facilitator — bukan event MC, tapi strategy consultant atau OD practitioner senior. (4) Right pax (8-20) — terlalu kecil dynamic limited, terlalu besar consensus susah. (5) Concrete deliverable — strategic decisions documented, accountability assigned.",
  },
  {
    question: "Beda dari leadership retreat?",
    answer:
      "Leadership retreat = development focus (12-30 pax middle-senior management, 3D2N+ structured curriculum). Executive offsite = strategy focus (8-20 pax C-suite, 1-2D intensive decision-making). Output retreat: individual leadership growth. Output offsite: strategic decisions, alignment, action plan. Tidak interchangeable.",
  },
  {
    question: "Format ideal untuk executive offsite?",
    answer:
      "Most common 3: (1) 1D Intensive — 8-10 jam strategic session, untuk quarterly C-suite alignment atau urgent decision. (2) 2D1N Standard — full day strategy + reflection dinner + half day decision capture. Sweet spot untuk annual strategic planning. (3) 2D1N Bespoke — dengan certified strategy consultant senior, full structured methodology (SWOT, scenario planning, OKR cascade).",
  },
  {
    question: "Venue executive offsite paling discreet di Bandung?",
    answer:
      "5 venue paling discreet: (1) Private heritage villa Bandung utara — Sundanese architecture, 100% private, 8-15 pax. (2) Private mountain estate Pangalengan — most secluded, signature option. (3) Premium villa Lembang dengan dedicated meeting room. (4) Boutique heritage hotel Bandung kota (untuk speed of access). (5) Private resort Ciwidey selatan. Semua venue ini accept NDA dan offer privacy-first service.",
  },
  {
    question: "Berapa pax ideal untuk executive offsite?",
    answer:
      "Sweet spot 8-15 pax. Untuk founder + direct C-suite, 6-10 ideal. Untuk extended exec team (C-suite + SVP/VP), 12-18. Di atas 20 pax, dynamics berubah — bukan lagi offsite intimate, lebih masuk ke leadership retreat format. Specifically untuk founders ritual: 4-8 pax (founder + co-founder).",
  },
  {
    question: "Apakah facilitator wajib untuk executive offsite?",
    answer:
      "Untuk substantive offsite (annual strategic planning, post-merger integration, major decision-making), facilitator senior strongly recommended. Tanpa facilitator, C-suite dynamics bisa get stuck — politik subtle, anchoring bias, atau dominant voice override. Facilitator certified mitigate ini dengan structured methodology + neutral perspective. Untuk informal offsite (quarterly check-in), internal facilitation enough.",
  },
  {
    question: "Bagaimana memastikan confidentiality?",
    answer:
      "Multiple layer: (1) NDA dengan kami (vendor) sign sebelum brief. (2) Venue exclusive booking (tidak ada tamu lain di area). (3) Staff venue + tim kami signed NDA individual. (4) No social media expectation — peserta opt-in only. (5) Document handling protocol — physical materials shredded, digital materials encrypted. (6) Discretion in branding — no obvious vendor signage at venue. Untuk highly sensitive offsite (M&A, restructuring), kami offer custom NDA scope.",
  },
  {
    question: "Berapa lama prep executive offsite?",
    answer:
      "Minimum 4-6 minggu untuk substantive offsite. Pre-work: (1) Stakeholder briefing call (week 1-2), (2) Pre-read material development (week 2-3), (3) Individual input collection (week 3-4), (4) Agenda design + facilitator briefing (week 4-5), (5) Logistics finalization (week 5-6). Urgent offsite 2 minggu masih bisa kalau venue available dan facilitator schedule fit.",
  },
  {
    question: "Apakah ada Executive Coaching sebagai add-on?",
    answer:
      "Iya. Beberapa client kami kombinasi offsite dengan individual executive coaching 1-on-1 untuk peserta C-suite. Format: pre-offsite 1-hour individual coaching (set goals), in-offsite group session, post-offsite 2-3 month follow-up 1-on-1. Cost tambahan Rp 25-50 jt per person tergantung coach profile. Beberapa CEO repeat client kami invest yearly di gabungan offsite + coaching package.",
  },
];

const PURPOSES = [
  { name: "Annual Strategic Planning", desc: "Fiscal year strategy setting, OKR cascade alignment, resource allocation, growth scenario planning. Format: 2D1N. Most common annual offsite.", duration: "2D1N" },
  { name: "Quarterly C-Suite Alignment", desc: "Quarterly business review, course correction, leadership team health check. Format: 1D intensive.", duration: "1D" },
  { name: "Post-Merger / Acquisition Integration", desc: "Combine leadership team alignment, cultural integration plan, joint OKR setup. Highly confidential. Format: 2D1N bespoke.", duration: "2D1N" },
  { name: "Major Strategic Pivot", desc: "Pre-pivot decision-making — discontinue product line, market shift, business model change. High-stakes, requires facilitation. Format: 2D1N.", duration: "2D1N" },
  { name: "Founders Annual Ritual", desc: "Founders (CEO + co-founder + early team) yearly alignment. Visi refresh, equity discussion, succession planning. Format: 2D1N intimate.", duration: "2D1N" },
  { name: "Crisis Response Strategy", desc: "Urgent strategic alignment after major external shock (market disruption, key customer loss, regulatory change). Format: 1D urgent.", duration: "1D urgent" },
];

export default function ExecutiveOffsiteBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: "Executive Offsite Bandung 2026: Discreet C-Suite Strategy Session",
      description: "Premium executive offsite untuk C-suite strategy session di Bandung — discreet, focused, dengan facilitator certified.",
      image: IMAGES.packageExecutiveOffsite.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: SLUG,
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      aboutService: "Executive Offsite Bandung",
      keywords: ["executive offsite bandung", "c-suite offsite bandung", "strategy offsite direksi bandung", "strategic retreat eksekutif bandung", "private offsite executive jawa barat"],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        { type: "Service", name: "Executive Offsite", url: `${SITE.url}/services/executive-offsite`, id: `${SITE.url}/services/executive-offsite#service` },
        { type: "WebPage", name: "Leadership Retreat Jawa Barat", url: `${SITE.url}/leadership-retreat-jawa-barat` },
        { type: "WebPage", name: "Company Retreat Bandung", url: `${SITE.url}/company-retreat-bandung` },
        { type: "Person", name: "Andre Pratama", id: `${SITE.url}/team#andre-pratama`, url: `${SITE.url}/team` },
      ],
    }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Executive Offsite Bandung", url: URL }]),
    serviceSchema({
      name: "Executive Offsite Bandung",
      description: "Discreet C-suite executive offsite untuk strategy session di Bandung & Jawa Barat. Premium venue + certified facilitator.",
      priceRange: "Rp 6.500.000 - Rp 12.000.000 per pax",
      url: URL,
    }),
    faqPageSchema(FAQS, URL),
    howToSchema({
      pageUrl: URL,
      name: "Cara Plan Executive Offsite C-Suite yang Efektif di Bandung",
      description: "5 langkah untuk merencanakan executive offsite yang produktif dan discreet — dari brief kerahasiaan hingga action items pasca-sesi.",
      steps: [
        { name: "Establish NDA & Brief Kerahasiaan", text: "Sebelum briefing apapun, tandatangani NDA dengan vendor. Tentukan scope kerahasiaan: nama peserta, topik strategis, venue, dan output sesi. Vendor specialist siap untuk requirement ini dari hari pertama." },
        { name: "Definisikan Tujuan Strategis Sesi", text: "Articulate deliverable konkret dari sesi: strategic decision yang harus diambil, alignment issue yang harus diselesaikan, atau leadership agenda yang perlu di-calibrate. Tujuan yang jelas menentukan agenda, fasilitator, dan durasi optimal." },
        { name: "Seleksi Venue Private yang Sesuai", text: "Executive offsite butuh venue yang menjamin privasi: private mountain estate, heritage villa eksklusif, atau resort premium dengan dedicated meeting space. Kapasitas ideal 8-25 pax, dengan ruang breakout terpisah untuk sub-session." },
        { name: "Siapkan Fasilitator Strategy Senior", text: "Fasilitator untuk C-suite bukan event MC biasa — butuh background konsultansi strategis atau coaching senior (ICF PCC/MCC). Mereka harus mampu hold conversation di level Board dan navigate political dynamic antar pemimpin." },
        { name: "Conduct Sesi + Capture Action Items", text: "Selama sesi: capture keputusan dan action items secara real-time. Post-sesi: vendor kirim summary tertulis (anonymous/coded sesuai NDA) dan action item tracker. Follow-up 30 hari kemudian untuk check progress implementation." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image src={IMAGES.packageExecutiveOffsite.src} alt="Executive offsite C-suite di Bandung — discreet strategy session" fill priority sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/95" />
          </div>
          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4"><Link href="/" className="hover:text-paper">Home</Link><span className="mx-2">/</span><span className="text-paper/75">Executive Offsite Bandung</span></nav>
              <span className="eyebrow text-brand-light/70">C-Suite Strategy · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Executive Offsite Bandung 2026:</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">Discreet C-suite strategy.</span>
              </h1>
              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">Untuk C-suite (8-20 pax) yang butuh strategic decision-making intensive di setting private. 100% discretion, certified facilitator, premium venue exclusive.</p>
            </div>
          </div>
        </section>

        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4"><Sparkle size={16} className="text-brand" /><p className="eyebrow-brand">Quick Answer</p></div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Executive offsite di Bandung untuk C-suite <strong>2D1N range Rp 6,5-12 juta/pax</strong>. 1D intensive Rp 5-7 jt/pax. Termasuk venue private exclusive (heritage villa atau private estate), F&amp;B fine-dining, NDA-bound staff, dan AV setup. Strategy consultant senior tambah <strong>Rp 50-150 jt flat fee</strong>. Sweet spot pax <strong>8-15</strong>. Min prep <strong>4-6 minggu</strong>. Format paling sering: annual strategic planning, quarterly alignment, atau post-merger integration.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs"><Tag>Budget: Rp 6,5-12 jt/pax</Tag><Tag>Pax: 8-20</Tag><Tag>Discretion: 100%</Tag><Tag>Format: 1D – 2D1N</Tag></div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link href="/proposal/request" className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition">Request Free Proposal<ArrowRight size={14} /></Link>
                <Link href="#purposes" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition">6 use cases</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Table of contents</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[["#what-distinguishes", "What distinguishes executive offsite"], ["#purposes", "6 use cases offsite"], ["#format", "Format 1D / 2D1N / Bespoke"], ["#discretion", "Discretion & confidentiality protocol"], ["#facilitator", "Strategy facilitator senior"], ["#venues", "5 venue paling discreet"], ["#prep", "Prep timeline 4-6 minggu"], ["#faq", "FAQ"]].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-ink hover:text-brand-deep flex items-baseline gap-2"><span className="text-slate-mute font-mono text-xs">↓</span>{label}</Link></li>
              ))}
            </ol>
          </div>
        </section>

        <Section id="what-distinguishes" eyebrow="Section 1" title="What distinguishes executive offsite from other corporate event">
          <p>Executive offsite punya signature characteristics yang membedakan dari leadership retreat, corporate gathering, atau outing:</p>
          <ul className="not-prose space-y-3 mt-5">
            {[
              { t: "Audience: C-suite only (8-20 pax)", d: "Founder, CEO, CXO, atau SVP-level. Bukan extended leadership." },
              { t: "Output: Strategic decisions documented", d: "Tidak ada awarding, tidak ada gathering casual. Output adalah deliverable concrete." },
              { t: "Discretion: 100% private", d: "Venue exclusive, NDA-bound, no social media. Sebagian client tidak ingin offsite di-post sama sekali." },
              { t: "Pace: Intensive but reflective", d: "Bukan back-to-back agenda. Buffer time untuk individual reflection dan informal dialogue." },
              { t: "Facilitator: Strategy senior, not event MC", d: "Substantive role — drive working session, manage dynamics, document decisions." },
            ].map((c, i) => <li key={i} className="rounded-2xl border border-border bg-paper p-5"><p className="font-medium text-ink">{c.t}</p><p className="mt-1 text-sm text-slate">{c.d}</p></li>)}
          </ul>
        </Section>

        <Section id="purposes" eyebrow="Section 2" title="6 use cases yang paling sering butuh executive offsite">
          <div className="not-prose grid gap-5 mt-4">
            {PURPOSES.map((p, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-6">
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-2"><h3 className="font-display text-xl text-ink">{i + 1}. {p.name}</h3><span className="text-xs text-brand-deep font-medium">{p.duration}</span></div>
                <p className="text-sm md:text-base text-slate">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="format" eyebrow="Section 3" title="Format 1D vs 2D1N vs Bespoke">
          <div className="not-prose grid gap-5 mt-2">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <div className="flex items-baseline justify-between flex-wrap gap-3 mb-2"><h3 className="font-display text-xl text-ink">1D Intensive</h3><span className="text-sm text-brand-deep font-medium tabular">Rp 5-7 jt/pax</span></div>
              <p className="text-sm text-slate mb-3">8-10 jam strategic session di venue private dekat Bandung kota (untuk quick access). Pre-work substantial — peserta arrive prepared.</p>
              <p className="text-xs text-brand-deep font-medium">→ Best for: Quarterly C-suite alignment, urgent strategic decision</p>
            </div>
            <div className="rounded-2xl border border-border bg-paper p-6">
              <div className="flex items-baseline justify-between flex-wrap gap-3 mb-2"><h3 className="font-display text-xl text-ink">2D1N Standard</h3><span className="text-sm text-brand-deep font-medium tabular">Rp 7-9 jt/pax</span></div>
              <p className="text-sm text-slate mb-3">Day 1 full day strategic session + reflective dinner. Day 2 half-day decision capture + accountability planning. Sweet spot untuk annual strategic planning.</p>
              <p className="text-xs text-brand-deep font-medium">→ Best for: Annual strategy, post-merger, major pivot</p>
            </div>
            <div className="rounded-2xl border border-border bg-paper p-6">
              <div className="flex items-baseline justify-between flex-wrap gap-3 mb-2"><h3 className="font-display text-xl text-ink">2D1N Bespoke</h3><span className="text-sm text-brand-deep font-medium tabular">Rp 10-15 jt/pax</span></div>
              <p className="text-sm text-slate mb-3">Dengan certified strategy consultant senior, full structured methodology (SWOT, scenario planning, OKR cascade), pre-engagement coaching, post-engagement follow-up.</p>
              <p className="text-xs text-brand-deep font-medium">→ Best for: High-stakes decision-making, transformation work</p>
            </div>
          </div>
        </Section>

        <Section id="discretion" eyebrow="Section 4" title="Discretion & confidentiality protocol — 6 layer">
          <p>Untuk C-suite offsite, discretion is the primary service. Protocol kami:</p>
          <ol className="not-prose space-y-3 mt-5">
            {[
              { t: "Vendor NDA", d: "Tour Bandung Corporate sign NDA dengan client sebelum brief detail. Standard untuk sensitive offsite." },
              { t: "Venue exclusive booking", d: "Venue rented full untuk durasi offsite. Tidak ada tamu lain. Staff venue limited yang punya akses." },
              { t: "Staff venue NDA", d: "Setiap staff venue (housekeeping, F&B service) yang touch offsite signed NDA individual." },
              { t: "Our team NDA", d: "Senior planner, coordinator, photographer (kalau ada), semua tim kami yang on-site signed NDA dengan client." },
              { t: "No social media expectation", d: "Peserta opt-in only untuk foto. Tidak ada photo wall, tidak ada banner. Sebagian client tidak mau apapun dishare." },
              { t: "Document handling protocol", d: "Physical materials shredded post-offsite. Digital files encrypted, accessible only by named persons. Whiteboard photos delete dari device." },
            ].map((d, i) => <li key={i} className="rounded-2xl border border-border bg-paper p-5"><p className="font-medium text-ink">Layer {i + 1}: {d.t}</p><p className="mt-1 text-sm text-slate">{d.d}</p></li>)}
          </ol>
          <p className="mt-6">Untuk highly sensitive offsite (M&amp;A discussion, restructuring, succession planning), kami offer custom NDA scope dengan client legal review.</p>
        </Section>

        <Section id="facilitator" eyebrow="Section 5" title="Strategy facilitator senior — bukan event MC">
          <p>Strategy facilitator role di executive offsite very different dari MC corporate gathering. Facilitator yang quality drive 40-50% dari outcome.</p>
          <div className="not-prose grid gap-5 mt-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-xl text-ink mb-3">Internal Senior Planner</h3>
              <p className="text-sm text-slate mb-3">Senior planner kami dengan 5+ tahun experience facilitate executive session.</p>
              <p className="text-xs text-brand-deep font-medium mb-2">Best for:</p>
              <ul className="space-y-1 text-sm text-slate"><li>Quarterly C-suite check-in</li><li>1D format informal alignment</li><li>Founders ritual smaller group</li></ul>
              <p className="text-xs text-slate-mute mt-3">Included di package</p>
            </div>
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-xl text-ink mb-3">Certified Strategy Consultant</h3>
              <p className="text-sm text-slate mb-3">Partner kami: Strategy consultant senior dari McKinsey, BCG, atau BCG alumni dengan industry experience 15+ tahun.</p>
              <p className="text-xs text-brand-deep font-medium mb-2">Best for:</p>
              <ul className="space-y-1 text-sm text-slate"><li>Annual strategic planning</li><li>Major pivot decision</li><li>Post-merger integration</li><li>Transformation work</li></ul>
              <p className="text-xs text-slate-mute mt-3">Fee: Rp 50-150 jt flat per offsite</p>
            </div>
          </div>
        </Section>

        <Section id="venues" eyebrow="Section 6" title="5 venue paling discreet di Bandung">
          <div className="not-prose grid gap-4">
            {[
              { n: "Private Heritage Villa Bandung Utara", d: "Sundanese architecture authentic, 100% private booking, kapasitas 8-15 pax. Paling banyak dipakai untuk executive offsite." },
              { n: "Private Mountain Estate Pangalengan", d: "Paling secluded di Jawa Barat. Untuk highly confidential offsite (M&A, restructuring). 6-12 pax." },
              { n: "Premium Boutique Hotel Bandung Kota", d: "Untuk speed of access (executive yang tidak mau travel jauh). Private floor booking, dedicated meeting room. 10-20 pax." },
              { n: "Private Villa Lembang dengan Meeting Suite", d: "Mountain view + dedicated meeting facility. 12-18 pax. Mid-premium tier." },
              { n: "Boutique Resort Ciwidey Selatan", d: "Quietest setting, scenic. 10-16 pax. Untuk offsite yang ingin disconnect total." },
            ].map((v, i) => <div key={i} className="rounded-2xl border border-border bg-paper p-5"><h3 className="font-display text-lg text-ink mb-1">{v.n}</h3><p className="text-sm text-slate">{v.d}</p></div>)}
          </div>
        </Section>

        <Section id="prep" eyebrow="Section 7" title="Prep timeline 4-6 minggu — pre-work substantial">
          <ol className="not-prose space-y-3 mt-2">
            {[
              { t: "Week 1-2: Stakeholder briefing + scope", d: "Founder/CEO briefing call, scope finalization, confidentiality alignment, success criteria define." },
              { t: "Week 2-3: Pre-read material development", d: "Strategy doc, industry analysis, competitive landscape brief, internal data summary. Distribute 1 week before offsite." },
              { t: "Week 3-4: Individual input collection", d: "1-on-1 prep call dengan each participant — pain points, individual priorities, what success looks like personal." },
              { t: "Week 4-5: Agenda design + facilitator brief", d: "Final agenda lock, facilitator detailed briefing, contingency planning (what if X discussion gets stuck)." },
              { t: "Week 5-6: Logistics + venue prep", d: "Venue final lock, AV setup, F&B menu confirm, transport coordinate, NDA documentation finalize." },
            ].map((p, i) => <li key={i} className="rounded-2xl border border-border bg-paper p-5"><p className="font-medium text-ink">{p.t}</p><p className="mt-1 text-sm text-slate">{p.d}</p></li>)}
          </ol>
        </Section>

        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[[STATS.eventsDelivered, "Events delivered"], ["100+", "C-suite offsites"], ["100%", "Discretion record"], [STATS.repeatBookingRate, "Repeat booking"]].map(([num, label]) => (
                <div key={label} className="text-center md:text-left"><p className="font-display text-3xl md:text-4xl text-ink tabular leading-none">{num}</p><p className="mt-2 text-sm text-slate">{label}</p></div>
              ))}
            </div>
          </div>
        </section>

        <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan founder & C-suite">
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
            <Link href="/faq/outcome" className="text-brand-deep hover:underline">FAQ ROI & Outcome</Link>
            {" · "}
            <Link href="/faq/comparison" className="text-brand-deep hover:underline">FAQ Specialist vs Generic EO</Link>
          </p>
        </Section>

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[["/panduan-corporate-outing-bandung", "Panduan Corporate Outing Bandung", "Master guide: jenis, budget, lokasi, vendor"], ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B — key differentiator"], ["/incentive-trip-bandung", "Incentive Trip Bandung", "Program reward top performers"], ["/leadership-retreat-jawa-barat", "Leadership Retreat", "Development cohort 12-30 pax"]].map(([href, title, desc]) => (
                <Link key={href} href={href} className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5"><h3 className="font-display text-lg text-ink leading-tight">{title}</h3><p className="mt-2 text-sm text-slate">{desc}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">Read guide<ArrowRight size={12} className="transition-transform group-hover:translate-x-1" /></span></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">Discreet executive offsite untuk tim Anda?</h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">Briefing call confidential dengan senior planner — kami match facilitator certified, venue exclusive, dan agenda untuk C-suite Anda.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">Request Proposal<ArrowRight size={16} /></Link>
              <a href={buildWaLink("executive offsite Bandung")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"><Whatsapp size={16} />WhatsApp</a>
            </div>
          </div>
        </section>

        <RelatedCaseStudies
          serviceSlugs={["executive-offsite", "leadership-camp"]}
          title="Executive offsite case studies."
          description="C-level dan senior leadership offsite — confidentiality handled, methodology mature."
        />

        <StickyProposalBar message="C-suite offsite untuk perusahaan Anda? Confidential consultation." context="executive offsite Bandung" />
      </main>
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (<section id={id} className="py-16 md:py-24 border-t border-divider"><div className="container-1280"><div className="max-w-3xl mb-10"><span className="eyebrow-brand">{eyebrow}</span><h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">{title}</h2></div><div className="max-w-3xl prose-content text-base md:text-lg text-slate leading-relaxed space-y-5 [&_p]:text-slate [&_strong]:text-ink">{children}</div></div></section>);
}

function Tag({ children }: { children: React.ReactNode }) { return <span className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-xs text-slate">{children}</span>; }
