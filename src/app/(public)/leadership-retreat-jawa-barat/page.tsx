import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { IMAGES } from "@/lib/drive-images";
import { STATS, buildWaLink, SITE } from "@/lib/site";
import { JsonLd, combineSchemas, articleSchema, faqPageSchema, breadcrumbSchema, serviceSchema, organizationSchema, localBusinessSchema, howToSchema } from "@/lib/schema";

const SLUG = "/leadership-retreat-jawa-barat";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: "Leadership Retreat Jawa Barat 2026: Senior Leadership Development Program",
  description:
    "Leadership retreat Jawa Barat — 5 framework (Servant, Adaptive, Situational, Transformational, Authentic), certified executive coach, venue private. Rp 5–9 jt/pax. ⭐ 4.9/5 · Proposal 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Leadership Retreat Jawa Barat — Senior Leadership Development",
    description: "Premium leadership development untuk senior management Indonesia.",
    url: URL,
    type: "article",
  },
};

const FAQS = [
  {
    question: "Berapa biaya leadership retreat per pax?",
    answer:
      "Range Rp 5–9 juta/pax untuk 3D2N premium di Bandung/Jawa Barat. 2D1N executive Rp 4-6 jt/pax. 5D4N immersive bespoke Rp 9-15 jt/pax. Termasuk venue private (resort/villa eksklusif), F&B premium, certified executive coach (Rp 50-150 jt flat fee), 360-feedback assessment kalau perlu, material development.",
  },
  {
    question: "Apa beda leadership retreat dan executive offsite?",
    answer:
      "Leadership retreat = development-focused, cohort experience untuk middle-to-senior management (12-30 pax). 3-5 hari, structured curriculum, certified facilitator. Output: individual leadership growth, peer coaching pair. Executive offsite = strategy-focused, C-suite group (8-20 pax), 1-2 hari intensive untuk decision-making. Output: alignment, strategic decision. Beda lens.",
  },
  {
    question: "5 leadership framework yang biasanya di-cover?",
    answer:
      "(1) Servant Leadership (focus on team enablement). (2) Adaptive Leadership (navigate complexity, change management). (3) Situational Leadership (match style ke maturity context). (4) Transformational Leadership (vision-driven, culture builder). (5) Authentic Leadership (self-awareness, congruence). Mix selection di-customize sesuai company stage dan leader maturity level.",
  },
  {
    question: "Berapa pax ideal untuk leadership retreat?",
    answer:
      "Sweet spot 12-25 pax. Di bawah 10 pax, group dynamic kurang ada (cohort effect missing). Di atas 30 pax, peer coaching dan deep work susah. Untuk emerging leader cohort, 15-20 ideal. Untuk senior leadership team alignment, 12-18.",
  },
  {
    question: "Apakah butuh 360-feedback assessment?",
    answer:
      "Highly recommended untuk leadership retreat substantive. 360-feedback dari 8-12 peers/reports/manager/clients per participant, di-summarize jadi report personalized. Hasil di-debrief di retreat dengan coach. Tambah depth dramatic. Cost tambahan Rp 4-8 jt/peserta untuk 360 administration + report.",
  },
  {
    question: "Venue terbaik untuk leadership retreat di Jawa Barat?",
    answer:
      "Bandung/Lembang area paling sering: Premium mountain resort untuk 20-40 pax. Untuk smaller exclusive group (8-15), kami pakai private villa di Pangalengan atau Bandung utara. Yang prioritas: privacy 100%, quality F&B, dedicated meeting facilities, dan nature/scenic environment untuk reflection time. Lokasi lain: Puncak (untuk Jakarta-based), Bogor selatan, Subang.",
  },
  {
    question: "Berapa lama prep leadership retreat?",
    answer:
      "Minimum 10-12 minggu. Pre-work substantial: 360-feedback administration (6-8 minggu), individual coaching pre-call (3-4 minggu), pre-read material (2 minggu), facilitator briefing + agenda design (4 minggu). Untuk substantive retreat, rush <8 minggu akan kompromi depth significantly.",
  },
  {
    question: "Apa output yang bisa di-expect dari leadership retreat?",
    answer:
      "5 concrete deliverable: (1) Individual Leadership Development Plan (IDP) per peserta, (2) Peer coaching pair setup (3-6 month commitment), (3) 360-feedback analysis report personal, (4) Leadership commitment statement, (5) 30/60/90 day follow-up framework. Plus intangibles: deeper peer relationship, broadened perspective, awareness self-blind spots.",
  },
  {
    question: "Bisa di-kombinasikan dengan strategic planning?",
    answer:
      "Iya, hybrid format Leadership + Strategic Planning retreat increasingly common untuk senior team. Format: Day 1-2 leadership development (individual focus), Day 3 strategic planning (collective focus). Durasi total 3D2N-5D4N. Cost tambahan Rp 1-2 jt/pax untuk additional facilitation depth.",
  },
  {
    question: "Apakah retreat ini cocok untuk founders / startup leadership?",
    answer:
      "Sangat cocok, terutama untuk Series A-C startup yang sudah punya senior leadership 10-25 pax. Founders ritual annual ini investment dalam alignment + retention senior talent. Beberapa client kami: founder + co-founder + VP-level di tech startup Series B yang melakukan leadership retreat 4D3N annually di Bandung area.",
  },
];

const FRAMEWORKS = [
  { name: "Servant Leadership", desc: "Focus pada enabling tim, removing obstacle, growth-mindset. Cocok untuk perusahaan dengan culture flat hierarchy atau yang baru transition dari command-and-control.", useCase: "Tech, healthcare, education sectors" },
  { name: "Adaptive Leadership", desc: "Navigate complexity dan uncertainty. Distinguish technical vs adaptive challenge. Cocok untuk perusahaan undergoing transformation atau navigating disruption.", useCase: "Banking, manufacturing during digital transformation" },
  { name: "Situational Leadership", desc: "Match leadership style (directing/coaching/supporting/delegating) ke maturity level context. Practical framework untuk daily leadership decisions.", useCase: "All sectors, especially during scaling phase" },
  { name: "Transformational Leadership", desc: "Vision-driven, inspirational, culture builder. Cocok untuk leader yang need rally tim around major change atau strategic pivot.", useCase: "Companies in growth mode atau cultural reset" },
  { name: "Authentic Leadership", desc: "Self-awareness, congruence between value and action, vulnerable leadership. Trend modern leadership development.", useCase: "Senior leadership development cohort, founder ritual" },
];

export default function LeadershipRetreatJawaBaratPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: "Leadership Retreat Jawa Barat 2026: Senior Leadership Development Program",
      description: "Multi-day leadership development retreat untuk senior management di Jawa Barat. 5 framework, certified coach, premium venue.",
      image: IMAGES.caseStudyExecutive.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: SLUG,
    }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Leadership Retreat Jawa Barat", url: URL }]),
    serviceSchema({
      name: "Leadership Retreat Jawa Barat",
      description: "Premium leadership development retreat untuk senior management dengan 5 framework dan certified executive coach.",
      priceRange: "Rp 5.000.000 - Rp 9.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Merancang Leadership Retreat yang Impactful di Jawa Barat",
      description: "5 langkah untuk mendesain leadership retreat yang menghasilkan keputusan strategis nyata dan alignment antar pemimpin senior.",
      steps: [
        { name: "Diagnosa Leadership Gap yang Ingin Diselesaikan", text: "Leadership retreat yang efektif dimulai dari diagnosa: apakah masalahnya alignment antar C-level, succession planning, culture gap pasca-merger, capability building untuk first-time manager, atau strategic direction yang belum tuntas? Setiap gap membutuhkan desain program yang berbeda." },
        { name: "Pilih Venue yang Mendukung Deep Thinking", text: "Senior leader perlu environment yang benar-benar memutus mereka dari operasional harian. Pilih venue terpencil dengan sinyal terbatas: private estate pegunungan Jawa Barat, heritage villa eksklusif Lembang, atau eco-lodge Pangalengan. Venue yang tenang dan indah mendukung kualitas thinking yang lebih dalam." },
        { name: "Rancang Agenda Kerja Substantif", text: "Leadership retreat bukan liburan senior — minimal 60% waktu harus diisi kerja substantif: strategic workshop, peer coaching session, atau decision-making facilitation. Sisanya social bonding dan recovery. Hindari agenda yang terlalu padat sehingga tidak ada ruang untuk diskusi organik yang sering paling produktif." },
        { name: "Gunakan Fasilitator Eksternal yang Credible", text: "Fasilitator untuk grup senior management harus punya kredibilitas di hadapan mereka — biasanya berlatar konsultan strategi senior (BCG/McKinsey alumni), executive coach ICF PCC/MCC, atau praktisi industri yang respected. Facilitator internal tidak efektif karena political dynamic menghambat keterbukaan." },
        { name: "Formalkan Output sebagai Komitmen Tertulis", text: "Setiap sesi harus berakhir dengan written commitments: keputusan yang diambil, action items dengan owner dan deadline, dan escalation path jika ada hambatan. Retreat yang berakhir tanpa dokumen komitmen formal berisiko menjadi 'nice conversation' tanpa follow-through." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image src={IMAGES.caseStudyExecutive.src} alt="Leadership retreat di Jawa Barat untuk senior management" fill priority sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/95" />
          </div>
          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4"><Link href="/" className="hover:text-paper">Home</Link><span className="mx-2">/</span><span className="text-paper/75">Leadership Retreat Jawa Barat</span></nav>
              <span className="eyebrow text-brand-light/70">Senior Leadership · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Leadership Retreat Jawa Barat 2026:</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">Development program senior management.</span>
              </h1>
              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">5 leadership framework, certified executive coach, 360-feedback integration, dan premium venue private. Untuk emerging leader cohort, senior team alignment, atau founders ritual.</p>
            </div>
          </div>
        </section>

        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4"><Sparkle size={16} className="text-brand" /><p className="eyebrow-brand">Quick Answer</p></div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Leadership retreat di Jawa Barat untuk <strong>3D2N range Rp 5-9 juta/pax</strong>. Termasuk venue private premium, certified executive coach (Rp 50-150 jt flat fee), 360-feedback assessment optional (Rp 4-8 jt/peserta), F&amp;B premium, dan material. Sweet spot pax <strong>12-25</strong>. 5 framework: Servant, Adaptive, Situational, Transformational, Authentic. Min prep <strong>10-12 minggu</strong>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs"><Tag>Budget: Rp 5-9 jt/pax</Tag><Tag>Pax: 12-25</Tag><Tag>Format: 3D2N – 5D4N</Tag><Tag>Facilitator: certified</Tag></div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link href="/proposal/request" className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition">Request Free Proposal<ArrowRight size={14} /></Link>
                <Link href="#frameworks" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition">5 framework</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Table of contents</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[["#vs-offsite", "Leadership retreat vs executive offsite"], ["#frameworks", "5 leadership framework"], ["#format", "Format curriculum 3D2N"], ["#360", "360-feedback assessment"], ["#coach", "Certified executive coach"], ["#venues", "Venue retreat di Jawa Barat"], ["#outcome", "5 deliverable outcome"], ["#faq", "FAQ"]].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-ink hover:text-brand-deep flex items-baseline gap-2"><span className="text-slate-mute font-mono text-xs">↓</span>{label}</Link></li>
              ))}
            </ol>
          </div>
        </section>

        <Section id="vs-offsite" eyebrow="Section 1" title="Leadership retreat vs executive offsite — beda lens">
          <p>Both terms get used interchangeably, but they have distinct focus:</p>
          <div className="not-prose overflow-x-auto -mx-6 md:mx-0 mt-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40"><th className="px-4 py-3 font-medium">Aspek</th><th className="px-4 py-3 font-medium">Leadership Retreat</th><th className="px-4 py-3 font-medium">Executive Offsite</th></tr></thead>
              <tbody className="text-sm">
                {[["Focus", "Development of individuals", "Strategic decisions of group"], ["Audience", "Middle-to-senior management", "C-suite + direct reports"], ["Pax", "12-30 cohort", "8-20 leadership team"], ["Durasi", "3D2N – 5D4N", "1D – 2D1N"], ["Output", "IDP, leadership growth, peer coaching", "Strategic alignment, decisions"], ["Frequency", "Annual cohort program", "Quarterly strategic"], ["Facilitator", "Executive coach + OD practitioner", "Strategy consultant atau facilitator"]].map((row, i) => (
                  <tr key={i} className="border-b border-divider/60">{row.map((cell, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-ink" : "text-slate"}`}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="frameworks" eyebrow="Section 2" title="5 leadership framework yang kami cover">
          <div className="not-prose space-y-4 mt-4">
            {FRAMEWORKS.map((f, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-6">
                <h3 className="font-display text-xl text-ink mb-2">{i + 1}. {f.name}</h3>
                <p className="text-sm md:text-base text-slate leading-relaxed">{f.desc}</p>
                <p className="mt-3 text-xs text-brand-deep font-medium">→ Best for: {f.useCase}</p>
              </div>
            ))}
          </div>
          <p className="mt-6">Untuk most retreat, kami mix 2-3 framework. Selection di-customize berdasarkan company stage dan leader maturity level setelah pre-retreat assessment.</p>
        </Section>

        <Section id="format" eyebrow="Section 3" title="Format curriculum leadership retreat 3D2N">
          <div className="not-prose space-y-5">
            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">Day 1 — Self-Awareness Foundation</h3>
              <ol className="space-y-2 text-sm text-slate">{["13:00 — Arrival, check-in, welcome lunch", "14:30 — Opening: psychological safety + ground rules (90 min)", "16:00 — Self-assessment session (DiSC atau 360-feedback debrief)", "18:00 — Reflection time + free interaction", "19:30 — Welcome dinner with table dialogue prompts"].map((s, i) => <li key={i} className="flex gap-3"><span className="text-brand-deep">·</span><span>{s}</span></li>)}</ol>
            </div>
            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">Day 2 — Framework Deep Dive + Application</h3>
              <ol className="space-y-2 text-sm text-slate">{["07:00 — Mindful morning practice (optional)", "08:30 — Working session 1: Adaptive Leadership (2,5 jam)", "11:00 — Coffee break + casual discussion", "11:30 — Working session 2: Situational Leadership (2 jam)", "13:30 — Lunch + peer coaching pair setup", "15:00 — Working session 3: Case study application (2 jam)", "17:00 — Individual reflection + IDP draft", "19:00 — Group dinner — fishbowl conversation"].map((s, i) => <li key={i} className="flex gap-3"><span className="text-brand-deep">·</span><span>{s}</span></li>)}</ol>
            </div>
            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">Day 3 — Integration + Commitment</h3>
              <ol className="space-y-2 text-sm text-slate">{["07:00 — Sunrise reflection circle", "08:30 — Working session 4: Authentic Leadership (90 min)", "10:00 — IDP finalization + peer coaching commitment", "11:30 — Closing circle: commitment statement per peserta", "12:30 — Closing lunch + group photo", "14:00 — Departure"].map((s, i) => <li key={i} className="flex gap-3"><span className="text-brand-deep">·</span><span>{s}</span></li>)}</ol>
            </div>
          </div>
        </Section>

        <Section id="360" eyebrow="Section 4" title="360-feedback assessment — opsional tapi powerful">
          <p>Untuk leadership retreat yang substantive, 360-feedback adalah investment yang berdampak besar. 8-12 peers/reports/manager/clients per participant memberikan multi-perspective view yang impossible diperoleh sendiri.</p>
          <ol className="not-prose space-y-3 mt-5">
            {[{ t: "Pre-retreat administration (6-8 minggu sebelumnya)", d: "Setiap peserta nominate 8-12 rater dari peers, direct reports, manager, dan optional clients. Online assessment confidential (Rp 1-2 jt/peserta tools)." }, { t: "Report compilation + personal debrief (2 minggu sebelumnya)", d: "Aggregated report personalized per peserta, plus 1-on-1 debrief 60 min dengan coach untuk make sense of patterns." }, { t: "In-retreat integration", d: "Insight dari 360 di-leverage di retreat — peserta arrive dengan baseline self-awareness yang sudah aktif." }, { t: "Follow-up 6 month later", d: "Re-administration of mini 360 (5-7 questions) untuk measure delta. Powerful data untuk justify retreat investment." }].map((s, i) => <li key={i} className="rounded-2xl border border-border bg-paper p-5"><p className="font-medium text-ink">{i + 1}. {s.t}</p><p className="mt-1 text-sm text-slate">{s.d}</p></li>)}
          </ol>
          <p className="mt-6"><strong>Cost:</strong> Rp 4-8 jt/peserta untuk full 360 admin + report + debrief. Untuk leadership retreat substantive, ROI clear — investment kecil dibandingkan retention saving + leadership capacity uplift.</p>
        </Section>

        <Section id="coach" eyebrow="Section 5" title="Certified executive coach — kenapa matters">
          <p>Untuk leadership retreat substantive, coach quality determines outcome. Tidak semua trainer atau facilitator equipped untuk handle leadership-level work. Kami partner dengan 6+ certified executive coach senior dengan profil:</p>
          <ul className="not-prose space-y-3 mt-5">
            {["ICF (International Coach Federation) certified PCC atau MCC", "Industry experience 15+ tahun di senior leadership role", "Strategic consulting background (McKinsey, BCG, Bain alumni level)", "Multiple framework certification (DiSC, Hogan, Strengths, 360 assessment)", "Track record handle 100+ executive 1-on-1 dan group retreat", "Bilingual Indonesian + English untuk diverse cohort"].map((q, i) => <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-paper p-4"><span className="mt-0.5 text-brand"><Check size={16} /></span><span className="text-sm text-ink">{q}</span></li>)}
          </ul>
          <p className="mt-6">Fee certified executive coach senior: Rp 50-150 jt flat per retreat. Untuk leadership retreat dengan budget total Rp 100-200 jt+, ini adalah leverage tertinggi — 30-40% dari outcome quality di-determine oleh coach.</p>
        </Section>

        <Section id="venues" eyebrow="Section 6" title="Venue retreat recommended di Jawa Barat">
          <div className="not-prose grid gap-4">
            {[{ n: "Premium Resort Lembang", d: "Mountain view, dedicated meeting facility, kapasitas 20-40 pax. Most popular." }, { n: "Boutique Heritage Villa Bandung", d: "Sundanese architecture, premium service, 15-25 pax." }, { n: "Pangalengan Private Estate", d: "Most secluded, paling premium, untuk smaller exclusive group 8-20 pax." }, { n: "Bogor Selatan Mountain Resort", d: "Untuk Jakarta-based leadership, akses lebih dekat. 20-40 pax." }, { n: "Subang Geothermal Resort", d: "Unique geothermal experience + premium accommodation. 15-30 pax." }].map((v, i) => <div key={i} className="rounded-2xl border border-border bg-paper p-5"><h3 className="font-display text-lg text-ink mb-1">{v.n}</h3><p className="text-sm text-slate">{v.d}</p></div>)}
          </div>
        </Section>

        <Section id="outcome" eyebrow="Section 7" title="5 deliverable outcome dari leadership retreat">
          <ol className="not-prose space-y-3 mt-2">
            {[{ t: "Individual Leadership Development Plan (IDP)", d: "Per peserta, structured 90-day plan dengan specific behavior goals, learning milestones, dan measurement criteria." }, { t: "Peer Coaching Pair Setup", d: "Setiap peserta paired dengan 1-2 cohort member untuk 3-6 month coaching commitment. Biweekly 30-min calls dengan structured framework." }, { t: "360-Feedback Analysis Report (kalau ada)", d: "Personal report dengan strengths, blind spots, development priorities. Plus aggregated cohort patterns kalau relevant." }, { t: "Leadership Commitment Statement", d: "Public commitment di-articulate oleh setiap peserta di closing circle. Accountability tool yang impactful." }, { t: "30/60/90 Day Follow-up Framework", d: "Check-in structured dengan facilitator/coach pada 30, 60, 90 day untuk maintain momentum. Optional booster session 6 month later." }].map((o, i) => <li key={i} className="rounded-2xl border border-border bg-paper p-5"><p className="font-medium text-ink">{i + 1}. {o.t}</p><p className="mt-1 text-sm text-slate">{o.d}</p></li>)}
          </ol>
        </Section>

        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[[STATS.eventsDelivered, "Events delivered"], ["6+", "Certified coach partners"], [STATS.repeatBookingRate, "Repeat booking"], [STATS.avgResponseTime, "Avg response"]].map(([num, label]) => (
                <div key={label} className="text-center md:text-left"><p className="font-display text-3xl md:text-4xl text-ink tabular leading-none">{num}</p><p className="mt-2 text-sm text-slate">{label}</p></div>
              ))}
            </div>
          </div>
        </section>

        <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan HR senior">
          <div className="not-prose space-y-3 mt-4">
            {FAQS.map((item, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors">
                <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4"><h3 className="font-display text-lg text-ink leading-snug">{item.question}</h3><span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg></span></summary>
                <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">{item.answer}</div>
              </details>
            ))}
          </div>
        </Section>

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-3">
              {[["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B untuk leadership event"], ["/executive-offsite-bandung", "Executive Offsite", "C-suite strategic offsite"], ["/incentive-trip-bandung", "Incentive Trip Bandung", "Program reward top performers"]].map(([href, title, desc]) => (
                <Link key={href} href={href} className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5"><h3 className="font-display text-lg text-ink leading-tight">{title}</h3><p className="mt-2 text-sm text-slate">{desc}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">Read guide<ArrowRight size={12} className="transition-transform group-hover:translate-x-1" /></span></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">Develop senior leadership tim Anda?</h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">Briefing call dengan senior planner — kami match facilitator certified, framework, dan venue private yang fit cohort leadership Anda.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">Request Proposal<ArrowRight size={16} /></Link>
              <a href={buildWaLink("leadership retreat Jawa Barat")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"><Whatsapp size={16} />WhatsApp</a>
            </div>
          </div>
        </section>

        <RelatedCaseStudies
          serviceSlugs={["leadership-camp", "executive-offsite"]}
          title="Leadership retreat case studies."
          description="Case studies kami untuk senior cohort, manager development, dan strategic alignment."
        />

        <StickyProposalBar message="Leadership development senior cohort Anda? Free consultation." context="leadership retreat Jawa Barat" />
      </main>
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (<section id={id} className="py-16 md:py-24 border-t border-divider"><div className="container-1280"><div className="max-w-3xl mb-10"><span className="eyebrow-brand">{eyebrow}</span><h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">{title}</h2></div><div className="max-w-3xl prose-content text-base md:text-lg text-slate leading-relaxed space-y-5 [&_p]:text-slate [&_strong]:text-ink">{children}</div></div></section>);
}

function Tag({ children }: { children: React.ReactNode }) { return <span className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-xs text-slate">{children}</span>; }
