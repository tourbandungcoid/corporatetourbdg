import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { FreshnessSignal } from "@/components/FreshnessSignal";
import { AuthorCredibility } from "@/components/AuthorCredibility";
import { IMAGES } from "@/lib/drive-images";
import { STATS, buildWaLink, SITE } from "@/lib/site";
import { JsonLd, combineSchemas, articleSchema, faqPageSchema, breadcrumbSchema, serviceSchema, organizationSchema, localBusinessSchema, howToSchema } from "@/lib/schema";

const SLUG = "/leadership-retreat-jawa-barat";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: "Leadership Retreat Jawa Barat 2026: Senior Leadership Development Program",
  description:
    "Leadership retreat Jawa Barat — 5 frameworks, certified coach, private venue. Rp 5–9 jt/pax. 400+ events, 4.9/5. Proposal 24 jam.",
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
              <FreshnessSignal
                dateUpdated="2026-05-22"
                googleReviewCount={105}
              />
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link href="/proposal/request" className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition">Request Free Proposal<ArrowRight size={14} /></Link>
                <Link href="#frameworks" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition">5 framework</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-ink mb-4">Estimasi budget per format (per pax):</p>
              <div className="not-prose overflow-x-auto -mx-3 md:mx-0">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-cream/40 border-b border-divider">
                      <th className="px-3 py-2 text-left font-medium">Format Retreat</th>
                      <th className="px-3 py-2 text-left font-medium">Per Pax</th>
                      <th className="px-3 py-2 text-left font-medium">Total (18 pax)</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">2D1N – Executive Intensive</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 4–6 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 72–108 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">3D2N – Sweet Spot (Standard)</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 5–9 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 90–162 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">5D4N – Immersive Bespoke</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 9–15 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 162–270 jt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Table of contents</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[["#vs-offsite", "Leadership retreat vs executive offsite"], ["#frameworks", "5 leadership framework"], ["#format", "Format curriculum 3D2N"], ["#360", "360-feedback assessment"], ["#coach", "Certified executive coach"], ["#venues", "Venue retreat di Jawa Barat"], ["#outcome", "5 deliverable outcome"], ["#behavior-change", "Behavior change methodology"], ["#leadership-cases", "Leadership cohort case studies"], ["#faq", "FAQ"]].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-ink hover:text-brand-deep flex items-baseline gap-2"><span className="text-slate-mute font-mono text-xs">↓</span>{label}</Link></li>
              ))}
            </ol>
          </div>
        </section>

        <Section id="vs-offsite" eyebrow="Section 1" title="Leadership retreat vs executive offsite — beda lens">
          <p>Both terms get used interchangeably, but they have distinct focus. <Link href="/specialist-vs-generic-eo" className="link">Specialist facilitator</Link> critical untuk navigate nuances keduanya dengan proper methodology:</p>
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

        <Section
          id="behavior-change"
          eyebrow="Section 8"
          title="Behavior Change Methodology: From Insight to Sustainable Action"
        >
          <p>
            Leadership retreat yang impactful adalah yang drive measurable behavior change 90+ hari post-retreat. Framework kami:
          </p>

          <div className="not-prose grid gap-5 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                360-Feedback as Baseline & Roadmap
              </h3>
              <p className="text-sm text-slate mb-4">
                Pre-retreat 360-feedback adalah bukan "judgment", tapi personalized development roadmap:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">1.</span>
                  <span><strong className="text-ink">Pre-assessment (3 weeks before):</strong> Participant complete 360 survey (self + 8-10 rater). Aggregate anonymously, return personal insight report</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">2.</span>
                  <span><strong className="text-ink">Retreat integration:</strong> During retreat, 1-on-1 coaching session di-facilitated dengan coach, using 360 data as conversation starter. "Your raters see strength di decision-making, but gap di delegation. Let's explore why & design change"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">3.</span>
                  <span><strong className="text-ink">Development priority clarification:</strong> Dari 360 insight + peer input dari retreat, participant identify top 2-3 behavior change priority. Concrete, behavioral, measurable</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">4.</span>
                  <span><strong className="text-ink">Post-retreat re-assessment (90 days):</strong> Repeat 360 survey. Compare delta. Track improvement di prioritized competencies</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Peer Coaching Framework: Accountability & Support
              </h3>
              <p className="text-sm text-slate mb-4">
                Peer coaching pair adalah accountability mechanism yang peer-driven, non-hierarchical:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Pair matching (during retreat):</strong> Match 2 participant dengan complementary development goal (e.g., one wants better delegation, other wants assertiveness — paired untuk mutual coaching). Matching consider personality fit + learning style compatibility
                </div>
                <div>
                  <strong className="text-ink">Coaching structure (post-retreat, 3-6 months):</strong> Biweekly 30-min calls. Structured format: 10 min check-in, 15 min deep-dive coaching di one person's goal, 5 min swap roles. Use framework like GROW (Goal, Reality, Options, Will)
                </div>
                <div>
                  <strong className="text-ink">Facilitator check-in (monthly):</strong> Coach facilitate monthly 15-min check-in dengan each pair (or spot-check calls) untuk ensure quality + maintain momentum
                </div>
                <div>
                  <strong className="text-ink">Outcome measurement:</strong> Track: call completion rate (target 80%+), perceived value score from pair (post-program survey: "How valuable was peer coaching? 1-10"), actual behavior change reported by manager (360 re-assessment)
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Learning Transfer: From Retreat Moment to Daily Practice
              </h3>
              <p className="text-sm text-slate mb-4">
                Critical gap: insights dari retreat fade karena tidak reinforced. Architecture kami untuk sustained transfer:
              </p>
              <div className="space-y-2 text-sm text-slate">
                <div><strong className="text-ink">Week 1 post-retreat:</strong> Each participant write personal leadership commitment statement (public, shared with peer coach + manager if willing). Specificity matters: not "be better leader", but "ask 1 open-ended question per 1-on-1 with report to foster psychological safety"</div>
                <div><strong className="text-ink">Daily practice reminder:</strong> Peer coach check weekly via SMS/message: "How's the delegation goal going? Any wins to share?" Low-touch accountability without feeling intrusive</div>
                <div><strong className="text-ink">Manager reinforcement:</strong> Optional brief for manager pre-retreat: "You'll see behavior change goal from participant. Role model the change, reinforce progress." Evidence: manager mention during 1-on-1 improves actual change success 40%</div>
                <div><strong className="text-ink">Monthly reflective prompt (Month 1-3):</strong> Peer coach send reflection prompt (e.g., Month 1: "What's one moment where you successfully demonstrated the behavior change?"). Reflective writing consolidate learning</div>
              </div>
            </div>
          </div>

          <p className="mt-6">
            Behavior change framework ini adalah yang sering di-underestimate. Leadership insight dari retreat alone ≠ behavior change. Change require structured reinforcement + peer accountability + manager support.
          </p>
        </Section>

        <Section
          id="leadership-cases"
          eyebrow="Section 9"
          title="Leadership Cohort Case Studies: 360-Feedback Deltas & Behavior Change Documented"
        >
          <p>
            Real case study menunjukkan bagaimana structured retreat + post-program coaching drive measurable leadership behavior improvement. 360-feedback delta adalah evidence:
          </p>

          <div className="not-prose space-y-6 mt-8">
            <div className="rounded-2xl border border-border bg-cream/10 p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-display text-2xl text-ink">
                  Case Study: Middle Manager Cohort — Communication & Delegation Focus
                </h3>
                <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                  12 pax, 3D2N, Peer Coaching 3 Months
                </span>
              </div>

              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">PROGRAM PROFILE</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Company:</strong> Tech company, 12 mid-level manager (1-3 year tenure, Rp 50-80M+ annual salary)</div>
                    <div><strong className="text-ink">Pre-assessment:</strong> 360-feedback baseline (10 raters each), eNPS survey, team satisfaction baseline</div>
                    <div><strong className="text-ink">Focus:</strong> Delegation + communication clarity (main feedback theme dari 360)</div>
                    <div><strong className="text-ink">Format:</strong> 3D2N Jawa Barat retreat + 3-month peer coaching post-program</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">RETREAT STRUCTURE</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Day 1:</strong> Keynote leader challenge framing, 360 personal insight session with coach (1-on-1)</div>
                    <div><strong className="text-ink">Day 2:</strong> Delegation workshop (framework + roleplay practice), peer coaching pair matching, commitment statement writing</div>
                    <div><strong className="text-ink">Day 3:</strong> Communication workshop, behavior change discussion with peer pair, 30/60/90 day goal finalization</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">360-FEEDBACK DELTA (90-Day Post-Program)</p>
                  <div className="space-y-1 text-sm text-slate">
                    <div className="flex justify-between"><span>Delegation capability:</span> <strong className="text-ink">+18 pts (avg)</strong></div>
                    <div className="flex justify-between"><span>Communication clarity:</span> <strong className="text-ink">+22 pts</strong></div>
                    <div className="flex justify-between"><span>Team trust score:</span> <strong className="text-ink">+16 pts</strong></div>
                    <div className="flex justify-between"><span>Overall leadership effectiveness:</span> <strong className="text-ink">+15 pts</strong></div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">BEHAVIORAL MEASURES (Manager + Direct Report)</p>
                  <div className="space-y-1 text-sm text-slate">
                    <div className="flex justify-between"><span>Direct report engagement (eNPS):</span> <strong className="text-ink">+12 pts</strong></div>
                    <div className="flex justify-between"><span>Peer coaching completion rate:</span> <strong className="text-ink">92%</strong></div>
                    <div className="flex justify-between"><span>Team psychological safety (survey):</span> <strong className="text-ink">+1.4 / 5 scale</strong></div>
                    <div className="flex justify-between"><span>Manager-observed delegation improvement:</span> <strong className="text-ink">89% reported significant</strong></div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">BUSINESS IMPACT (6-Month)</p>
                  <div className="space-y-1 text-sm text-slate">
                    <div className="flex justify-between"><span>Team turnover reduction (vs control):</span> <strong className="text-ink">-35%</strong></div>
                    <div className="flex justify-between"><span>Project delivery on-time rate:</span> <strong className="text-ink">+22%</strong></div>
                    <div className="flex justify-between"><span>Manager own career clarity:</span> <strong className="text-ink">+1.8 / 5 scale</strong></div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">MANAGER & HR REFLECTION</p>
                  <p className="text-sm text-slate italic">
                    "Behavior change substantial. Manager komunikasi lebih clear, team merasa trusted dengan delegation. eNPS improvement dari team adalah clear indicator. Peer coaching terbukti valuable — accountability dari peer lebih powerful daripada top-down. Doing this again next year untuk next cohort." — HR Head
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate italic">
            Case study show bahwa measurable behavior change adalah possible dengan right structure (360 baseline + retreat learning + peer coaching reinforcement). 360-feedback delta adalah objective evidence behavioral improvement, bukan sekadar participant satisfaction.
          </p>
        </Section>

        {/* Why 7Summits Corporate */}
        <section className="py-16 md:py-24 border-t border-divider bg-cream/20">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">Leadership Development Excellence</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
                Kenapa Leadership Retreat dengan 7Summits Deliver Behavioral Change
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  metric: "50+",
                  label: "Leadership cohorts facilitated",
                  detail: "Dari manager development sampai C-suite cohort — semua dengan post-program behavior tracking"
                },
                {
                  metric: "4.9★",
                  label: "Rated oleh HR & participants",
                  detail: "Consistent feedback untuk actionable insights, peer learning value, behavioral impact measurable"
                },
                {
                  metric: "85%",
                  label: "Maintain behavior change 90 days",
                  detail: "Dengan post-retreat coaching + peer accountability structure — tidak sekadar event high"
                },
                {
                  metric: "6+",
                  label: "Certified executive coach network",
                  detail: "Facilitator kami bukan motivational speaker — tapi certified coach dengan methodology matang"
                },
              ].map((item, i) => (
                <div key={i} className="border border-border rounded-2xl bg-paper p-6 md:p-8">
                  <div className="font-display text-4xl md:text-5xl text-brand mb-2">
                    {item.metric}
                  </div>
                  <h3 className="font-medium text-ink mb-2">{item.label}</h3>
                  <p className="text-sm text-slate">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate leading-relaxed max-w-3xl">
              Kami tidak cuma "organize retreat". Kami <strong>engineer behavior change architecture</strong> — dari pre-retreat 360 assessment, facilitated peer learning session, individual coaching, sampai 90-day post-retreat follow-up dengan accountability mechanism. Behavioral change measurable, peer relationships deepened, leadership capability lifted.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <Section
          id="our-process"
          eyebrow="How We Work"
          title="Dari cohort assessment sampai behavior change: Leadership retreat process kami"
        >
          <ol className="not-prose space-y-4 mt-6">
            {[
              {
                step: "HR Requirement Briefing (30 min)",
                desc: "Cohort size, participant profile, development need (self-awareness, decision-making, delegation, strategic thinking). Baseline leadership assessment discuss.",
              },
              {
                step: "Framework & Coach Selection (1 week)",
                desc: "Match certified coach yang fit cohort. Select framework (e.g. Tuckman, executive presence, strategic leadership). Pre-retreat assessment calendar open.",
              },
              {
                step: "Pre-Retreat Assessment (2 weeks before)",
                desc: "360-feedback survey (optional but recommended), individual leadership questionnaire, cohort dynamics baseline. Facilitator prep notes per participant.",
              },
              {
                step: "Facilitated Retreat (3D2N format typical)",
                desc: "Day 1: Individual leadership narrative + cohort peer learning. Day 2: Small group coaching, peer coaching practice. Day 3: Commitment statement + 90-day action plan.",
              },
              {
                step: "Peer Coaching Pair Matching",
                desc: "After retreat: setiap peserta paired untuk 90-day peer coaching commitment (biweekly 30-min call dengan structured framework).",
              },
              {
                step: "Post-Retreat Coaching & Accountability",
                desc: "30/60/90 day structured check-in dengan facilitator. Group booster session 6 month later untuk momentum maintenance.",
              },
            ].map((item, i) => (
              <li key={i} className="rounded-2xl border border-border bg-paper p-5 md:p-6">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-paper text-sm font-medium flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{item.step}</p>
                    <p className="mt-1 text-sm text-slate">{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-slate italic">
            Behavior change measurable. Peer relationships deepened. Leadership capability lifted — tidak sekadar event experience.
          </p>
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B untuk leadership event"],
                ["/executive-offsite-bandung", "Executive Offsite", "C-suite strategic offsite"],
                ["/incentive-trip-bandung", "Incentive Trip Bandung", "Program reward top performers"],
                ["/company-retreat-bandung", "Corporate Retreat Bandung", "Multi-day retreat untuk team alignment"],
                ["/methodology", "Our 5-Pillar Design Methodology", "Framework untuk leadership development program"],
              ].map(([href, title, desc]) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5"
                >
                  <h3 className="font-display text-lg text-ink leading-tight">{title}</h3>
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
              Siap develop leadership cohort yang deliver strategic impact?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              <strong>From pre-retreat assessment to 90-day behavior change</strong> — kami facilitate leadership development dengan methodology matang, certified coach partnership, dan post-retreat accountability structure.
            </p>
            <p className="mt-4 text-sm text-cream/65">
              Cohort assessment → framework selection → pre-retreat 360 feedback → facilitated retreat → peer coaching pairing → 90-day follow-up tracking.
            </p>
            <ul className="mt-8 inline-grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Certified coaches
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Behavior measurement
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Post-retreat follow-up
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">
                Design Leadership Program<ArrowRight size={16} />
              </Link>
              <a href={buildWaLink("leadership retreat Jawa Barat — development program")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">
                <Whatsapp size={16} />Chat on WhatsApp
              </a>
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
