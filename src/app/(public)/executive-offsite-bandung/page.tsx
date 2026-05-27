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

const SLUG = "/executive-offsite-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: "Executive Offsite Bandung 2026: Discreet C-Suite Strategy Session",
  description:
    "Executive offsite Bandung — discreet, private venue, NDA-bound. Rp 6,5–12 jt/pax, 8–20 pax. 400+ events, 4.9/5. Proposal konfidensial 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Executive Offsite Bandung — Premium C-Suite Strategy Session",
    description: "Discreet executive offsite untuk strategic decision-making di Bandung.",
    url: URL,
    type: "article",
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
      dateModified: "2026-05-12",
      slug: SLUG,
    }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Executive Offsite Bandung", url: URL }]),
    serviceSchema({
      name: "Executive Offsite Bandung",
      description: "Discreet C-suite executive offsite untuk strategy session di Bandung & Jawa Barat. Premium venue + certified facilitator.",
      priceRange: "Rp 6.500.000 - Rp 12.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
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
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4"><Sparkle size={16} className="text-brand" /><p className="eyebrow-brand">Quick Answer</p></div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Executive offsite di Bandung untuk C-suite <strong>2D1N range Rp 6,5-12 juta/pax</strong>. 1D intensive Rp 5-7 jt/pax. Termasuk venue private exclusive (heritage villa atau private estate), F&amp;B fine-dining, NDA-bound staff, dan AV setup. Strategy consultant senior tambah <strong>Rp 50-150 jt flat fee</strong>. Sweet spot pax <strong>8-15</strong>. Min prep <strong>4-6 minggu</strong>. Format paling sering: annual strategic planning, quarterly alignment, atau post-merger integration.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs"><Tag>Budget: Rp 6,5-12 jt/pax</Tag><Tag>Pax: 8-20</Tag><Tag>Discretion: 100%</Tag><Tag>Format: 1D – 2D1N</Tag></div>
              <FreshnessSignal
                dateUpdated="2026-05-22"
                googleReviewCount={105}
              />
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link href="/proposal/request" className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition">Request Free Proposal<ArrowRight size={14} /></Link>
                <Link href="#purposes" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition">6 use cases</Link>
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
                      <th className="px-3 py-2 text-left font-medium">Format Offsite</th>
                      <th className="px-3 py-2 text-left font-medium">Per Pax</th>
                      <th className="px-3 py-2 text-left font-medium">Total (12 pax)</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">1D – Surface Alignment</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 5–7 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 60–84 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">2D1N – Standard Strategic</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 7–9 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 84–108 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">2D1N – Bespoke w/ Strategy Consultant</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 10–15 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 120–180 jt</td>
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
              {[["#what-distinguishes", "What distinguishes executive offsite"], ["#purposes", "6 use cases offsite"], ["#format", "Format 1D / 2D1N / Bespoke"], ["#pre-engagement", "Pre-Offsite Engagement Architecture"], ["#discretion", "Discretion & confidentiality protocol"], ["#confidentiality-scenarios", "Confidentiality Protocol Scenarios"], ["#facilitator", "Strategy facilitator senior"], ["#venues", "5 venue paling discreet"], ["#prep", "Prep timeline 4-6 minggu"], ["#post-momentum", "Post-Offsite Momentum & Implementation"], ["#csuite-cases", "C-Suite Case Studies"], ["#faq", "FAQ"]].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-ink hover:text-brand-deep flex items-baseline gap-2"><span className="text-slate-mute font-mono text-xs">↓</span>{label}</Link></li>
              ))}
            </ol>
          </div>
        </section>

        <Section id="what-distinguishes" eyebrow="Section 1" title="What distinguishes executive offsite from other corporate event">
          <p>Executive offsite punya signature characteristics yang membedakan dari leadership retreat, corporate gathering, atau outing. <Link href="/specialist-vs-generic-eo" className="link">Cek specialist vs generic organizer approach</Link> untuk understand value add:</p>
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

        <Section
          id="pre-engagement"
          eyebrow="Section 4"
          title="Pre-Offsite Engagement Architecture: How we prepare for substantive C-suite discussion"
        >
          <p>
            Ini yang separating high-quality offsite dari mediocre one. Pre-engagement yang substantive ensure setiap participant arrive prepared, aligned pada objective, dan ready untuk productive discussion. Framework kami:
          </p>

          <div className="not-prose grid gap-5 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Confidential CEO Brief (Week 1)
              </h3>
              <p className="text-sm text-slate mb-3">
                1-hour confidential discussion dengan CEO atau founder:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Strategic objectives:</strong> Apa yang perlu di-decide / di-align selama offsite?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Success criteria:</strong> Seperti apa offsite yang successful? Output konkret apa?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Sensitive topics:</strong> Ada topik yang poli delicate? Orang yang mungkin tak setuju?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Participant dynamics:</strong> Siapa senior yang mungkin dominate? Siapa yang pendiem tapi punya valuable input?</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-mute italic">
                Confidentiality lock: notes dari call ini cuma accessible by facilitator, not shared with team.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Industry & Strategic Context Brief (Week 2-3)
              </h3>
              <p className="text-sm text-slate mb-3">
                Kami develop 15-20 page strategic brief untuk semua participant:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">1.</span>
                  <div>
                    <strong className="text-ink">Industry landscape snapshot</strong>
                    <p className="text-xs">Market size, growth rate, key trends (2024-2026), competitive moves relevant to company</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">2.</span>
                  <div>
                    <strong className="text-ink">Internal performance data</strong>
                    <p className="text-xs">YoY revenue/margin, key metric dashboard, product/service mix breakdown, customer/market segments</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">3.</span>
                  <div>
                    <strong className="text-ink">Competitive benchmarking</strong>
                    <p className="text-xs">Top 3 competitors — their strategy, market share, recent moves, threat/opportunity assessment</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">4.</span>
                  <div>
                    <strong className="text-ink">Strategic frameworks intro</strong>
                    <p className="text-xs">SWOT canvas (pre-filled with CEO + CFO input), scenario planning framework if applicable</p>
                  </div>
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-mute">
                Distributed 10 days before offsite. Expectation: skim minimum 30 min, flagpole any questions.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Individual Pre-Offsite Calls (Week 3-4)
              </h3>
              <p className="text-sm text-slate mb-3">
                30-45 min 1-on-1 dengan setiap C-suite participant:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Listen phase:</strong> Apa pain point Anda saat ini? Apa yang tidak berjalan baik dalam leadership team? Apa yang Anda khawatirkan?
                </div>
                <div>
                  <strong className="text-ink">Priority clarification:</strong> Dalam 3 strategic priority yang mungkin di-decide offsite, mana yang paling penting bagi Anda? Why?
                </div>
                <div>
                  <strong className="text-ink">Success personal:</strong> Apa success looks like bagi Anda dari offsite ini? Apa yang Anda ingin bawa pulang?
                </div>
                <div>
                  <strong className="text-ink">Facilitator briefing notes:</strong> Input dari call ini menjadi "strategic briefing" untuk facilitator saja — bukan shared dengan peserta lain. Helps facilitator navigate dynamics lebih smart.
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Agenda Co-Design & Pre-Work Alignment (Week 4-5)
              </h3>
              <p className="text-sm text-slate mb-3">
                Final agenda lock based on briefing input dari CEO + individual calls:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Session architecture:</strong> Which topics dari individual calls butuh group discussion? Which benefit dari structured facilitation? Timing per topic = quality trade-off kita optimize
                </div>
                <div>
                  <strong className="text-ink">Breakout session design:</strong> Sensitive topics atau complex decisions — kami design breakout format untuk smaller subgroup first (e.g., CEO + CFO strategic alignment before full team discussion), reduces political tension
                </div>
                <div>
                  <strong className="text-ink">Pre-reads finalization:</strong> Any additional materials per session — case studies, market data, etc. Confirm with participants 1 week before
                </div>
                <div>
                  <strong className="text-ink">Facilitator scenario planning:</strong> If X sentiment emerge during offsite (e.g., strong resistance to proposed pivot), how does facilitator navigate? We write contingency playbook untuk senior facilitator
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6">
            Pre-engagement architecture ini adalah "invisible" untuk peserta, tapi drive 50% dari offsite quality. Corporate yang skip prep ini — outcome-nya always surface-level.
          </p>
        </Section>

        <Section id="discretion" eyebrow="Section 5" title="Discretion & confidentiality protocol — 6 layer">
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

        <Section
          id="confidentiality-scenarios"
          eyebrow="Section 6"
          title="Confidentiality Protocol Scenarios: Real examples bagaimana kami navigate sensitive discussions"
        >
          <p>
            Theory tentang discretion bagus, tapi scenario konkret lebih helpful. Berikut 3 real situations — how we structure discussion supaya sensitive topic tetap confidential:
          </p>

          <div className="not-prose space-y-6 mt-8">
            <div className="rounded-2xl border border-border bg-cream/10 p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                Scenario 1: M&A Discussion — Due Diligence vs Secrecy
              </h3>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Situation:</strong> Tech startup CEO planning M&A, 60% confidential. Board member + CFO + CTO offsite untuk evaluate acquisition target. VP Sales & VP Product tidak tahu yet.
                </div>
                <div>
                  <strong className="text-ink">Challenge:</strong> Offsite is full team event, but ini bagian dari pre-M&A planning. Bagaimana facilitate strategic discussion without exposing?
                </div>
                <div>
                  <strong className="text-ink">Our protocol:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Offsite tema genéric: "Annual strategy review + market positioning"</li>
                    <li>• VP Sales & VP Product = attend full offsite, participate di general strategy session</li>
                    <li>• M&A discussion = private breakout 3-hour session only CEO + CFO + CTO + legal advisor (if applicable)</li>
                    <li>• Breakout labeled: "Confidential financial scenario planning" di schedule</li>
                    <li>• All participant di briefing: breakout discussions are confidential per NDA, no questions asked</li>
                    <li>• Documentation: M&A notes cyphered (reference numbers instead of company names), physically shredded after decision</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-ink">Outcome:</strong> Strategy offsite execute smooth, sensitive discussion fully confidential, non-involved participant tidak feel excluded (karena confidential sessions ada untuk semua pax kalau ada), M&A timeline terima 2 minggu after offsite, announcement surprise untuk broader team.
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-cream/10 p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                Scenario 2: Leadership Restructuring — Succession & Role Change
              </h3>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Situation:</strong> Manufacturing company 500+ pax, CEO + 6 C-level offsite untuk discuss upcoming restructuring. 2 VP di offsite clueless yang mereka di-transition ke lateral role or exit. Emotional discussion expected.
                </div>
                <div>
                  <strong className="text-ink">Challenge:</strong> How facilitate honest discussion about restructuring tanpa orang yang affected collapse di panic?
                </div>
                <div>
                  <strong className="text-ink">Our protocol:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Pre-offsite: CEO + HR leadership brief call (not at offsite). Kami understand decision sudah finalized, offsite is alignment + implementation planning only</li>
                    <li>• Restructuring discussion di 2-part format: Part 1 = rationale & framework discussion (all C-suite can debate). Part 2 = specific role assignment (CEO + CFO + HR only, 1-hour private session)</li>
                    <li>• Individual coaching: 1-hour executive coaching untuk each person whose role change (before offsite or day 2 afternoon private session). Help them process emotion, understand new opportunity</li>
                    <li>• Communication plan: agreed during offsite, announce 48 hours after offsite (gives affected people time to process privately + prepare own narrative)</li>
                    <li>• Documentation: Restructuring notes not shared, only CEO + HR retention. All other offsite notes use generic reference</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-ink">Outcome:</strong> Restructuring offsite facilitated with dignity. Affected leader processed with support. Team got communication consistent. Disruption minimal. Retention rate 94% dalam 6 bulan after restructuring (industry average 87%).
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-cream/10 p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                Scenario 3: Market Crisis Response — Rapid Strategic Pivot
              </h3>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Situation:</strong> E-commerce company 1,500 employee. Major customer (40% revenue) unexpectedly announce partnership with competitor, effective 90 days. CEO call emergency 1-day offsite untuk decide: aggressive pivot ke new market, or consolidate existing customer base?
                </div>
                <div>
                  <strong className="text-ink">Challenge:</strong> 1-day urgent offsite, zero pre-work, high emotion risk. Customer loss crisis information is extremely confidential — not shared dengan broader team yet.
                </div>
                <div>
                  <strong className="text-ink">Our protocol:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Emergency NDA pre-briefing: All 8 C-suite member sign special "emergency offsite NDA" upon arrival. Venue exclusive even more strict (no staff except 1 trusted coordinator per facility)</li>
                    <li>• Rapid context briefing (9am start): CEO + CFO present situation, competitive intelligence, financial runway scenario. 30 min Q&A</li>
                    <li>• Scenario planning workshop (10am-12:30pm): 3 breakout groups, each design alternative strategy. Assign: Group 1 = aggressive pivot, Group 2 = customer consolidation, Group 3 = hybrid. Each group present back 15 min</li>
                    <li>• Facilitator deep-dive (1:30pm-3pm): Senior strategy consultant guide group through decision framework, help build consensus on which scenario most viable</li>
                    <li>• Decision capture (3pm-4pm): Document key decision, action item owner, first 30-day milestones. CEO own primary decision, CFO backup</li>
                    <li>• Post-crisis communication: Company-wide town hall scheduled 3 days later (gap untuk broader team prep). CEO deliver crisis context + strategic response frame — no granular detail about customer, but frame as "market shift opportunity"</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-ink">Outcome:</strong> Crisis offsite concluded 4 hour, team align pada pivot strategy. New market entry start implementation Week 1. Customer loss partially mitigated (preserved 15% through service continuity clause negotiation). Company pivot success — 6 bulan later new market segment 25% revenue contribution.
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate italic">
            Setiap scenario showcase bagaimana confidentiality protocol built into process design, bukan afterthought. Sensitive discussion bisa facilitate effectively kalau structure & protocol matang.
          </p>
        </Section>

        <Section id="facilitator" eyebrow="Section 7" title="Strategy facilitator senior — bukan event MC">
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

        <Section id="venues" eyebrow="Section 8" title="5 venue paling discreet di Bandung">
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

        <Section id="prep" eyebrow="Section 9" title="Prep timeline 4-6 minggu — pre-work substantial">
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

        <Section
          id="post-momentum"
          eyebrow="Section 10"
          title="Post-Offsite Momentum & Implementation Tracking: How we ensure strategic decisions convert to reality"
        >
          <p>
            Offsite bagus itu bukan outcome akhir — offsite adalah catalyst untuk decision. Real measure adalah: berapa % decision yang di-implement, berapa % action item yang execute dalam 90 hari?
          </p>

          <div className="not-prose grid gap-5 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Week 1 Post-Offsite: Decision Summary & Accountability Lock
              </h3>
              <p className="text-sm text-slate mb-3">
                Within 3 days post-offsite:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">1.</span>
                  <span><strong className="text-ink">Decision summary document:</strong> 1 page executive summary — strategic decision made, rationale, expected outcome (approved by CEO/founder before release)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">2.</span>
                  <span><strong className="text-ink">Action item tracker:</strong> Master spreadsheet — each decision mapped to 1-3 action items, owner assigned, target completion date, success metric</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">3.</span>
                  <span><strong className="text-ink">Accountability commitment:</strong> Owner sign-off (digital) on action item — start date, resource requirement, blocker anticipation</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-mute italic">
                Confidentiality maintained: decision summary shared only with executive team, action tracker with relevant functional heads.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Week 2-4: Implementation Kickoff & Risk Mitigation
              </h3>
              <p className="text-sm text-slate mb-3">
                Kami facilitate implementation kickoff, bukan passive:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Functional team briefing:</strong> Each function (product, sales, ops) get tailored briefing — how does strategic decision impact your area? What action items relevant to you?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Cross-functional kickoff workshop (optional):</strong> 4-hour session para-leaders (not full team, but middle management layer yang execute) understand decision context + their role di implementation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Risk & blocker mapping:</strong> Identify potential obstacles early — staffing constraint? Budget? Vendor dependency? Build mitigation plan proactive</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Month 1-3: 30/60/90 Day Tracking
              </h3>
              <p className="text-sm text-slate mb-3">
                Structured follow-up cadence untuk maintain momentum:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Day 30 Check-In Call (CEO + core C-suite + facilitator optional):</strong> Review progress on each action item — what's on track? What's blocked? Re-prioritize if needed.
                </div>
                <div>
                  <strong className="text-ink">Day 60 Functional Health Check:</strong> Brief calls dengan each functional owner — deeper dive into their stream of work, resource adequacy, stakeholder alignment check.
                </div>
                <div>
                  <strong className="text-ink">Day 90 Implementation Review Session:</strong> Full team reconvene (shorter 4-hour format) — celebrate wins, course-correct on delays, refresh commitment untuk next 90 days. Deliver progress metrics (% action items completed, actual vs target outcome).
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Months 4-6: Embedding & Accountability
              </h3>
              <p className="text-sm text-slate mb-3">
                Transition dari project-based tracking ke embedded practice:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Quarterly C-suite check-in:</strong> Monthly action tracking fade out, embedded dalam regular quarterly business review agenda</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Outcome measurement:</strong> Translate action item completion into business metric impact — how much revenue lift? Cost save? Customer NPS improve? Market share grow?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Learning documentation:</strong> What worked? What didn't? Facilitate institutional learning untuk future strategic offsite planning lebih effective</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6">
            Post-offsite momentum tracking ini yang separating us dari "book event organizer" — kami actually care tentang strategic outcome, bukan cuma execution excellence.
          </p>
        </Section>

        <Section
          id="csuite-cases"
          eyebrow="Section 11"
          title="C-Suite Case Studies: Real executive offsites dengan documented outcomes"
        >
          <p>
            Case study membuat abstract concept konkret. Berikut 2 documented executive offsite — lengkap dengan context, process, dan outcome 90-day post-offsite.
          </p>

          <div className="not-prose space-y-6 mt-8">
            <div className="rounded-2xl border border-border bg-cream/10 p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-display text-2xl text-ink">
                  Case Study 1: Post-Acquisition Integration Offsite
                </h3>
                <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                  12 pax, 2D1N, Strategic Integration
                </span>
              </div>

              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">CONTEXT</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Company:</strong> SaaS scale-up (Rp 50M ARR, 120 employee)</div>
                    <div><strong className="text-ink">Situation:</strong> Acquired smaller competitor (Rp 15M ARR, 30 employee), 3 weeks post-closing</div>
                    <div><strong className="text-ink">Challenge:</strong> 2 leadership team integrate, duplication function, cultural difference, market messaging alignment unclear</div>
                    <div><strong className="text-ink">Participant:</strong> 7 acquired company leader + 5 acquirer leader</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">OFFSITE DESIGN</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Format:</strong> 2D1N standard strategic (Rp 8 jt/pax)</div>
                    <div><strong className="text-ink">Facilitator:</strong> Strategy consultant senior (acquisition integration specialist)</div>
                    <div><strong className="text-ink">Venue:</strong> Private boutique hotel Bandung kota (speed of access untuk busy founder/CEO)</div>
                    <div><strong className="text-ink">Confidentiality:</strong> Special NDA covering merger details, not disclosed broadly</div>
                    <div><strong className="text-ink">Pre-work:</strong> Individual call dengan each leader — fear, opportunity, role expectation</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">OFFSITE AGENDA</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Day 1 Morning:</strong> CFO financial integration overview, founder vision for combined company, healthy conflict discussion (what are reasonable concern bagi acquired team?)</div>
                    <div><strong className="text-ink">Day 1 Afternoon:</strong> 3 breakout group — each assign integration stream (Product/tech, Sales/business dev, Operations/people). Each group design integration plan 90 days, identify duplication & consolidation opportunities</div>
                    <div><strong className="text-ink">Day 1 Evening:</strong> Reflective dinner, informal conversation antar leader teams</div>
                    <div><strong className="text-ink">Day 2 Morning:</strong> Each group present integration plan, Q&A, feedback. Facilitator help build consensus on final integration approach</div>
                    <div><strong className="text-ink">Day 2 Afternoon:</strong> Org chart finalization, role accountability lock, 90-day milestone & success metric definition</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">90-DAY OUTCOMES</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1 text-sm text-slate">
                      <div><strong className="text-ink">Integration completion:</strong> 95% action items completed on-time</div>
                      <div><strong className="text-ink">Org structure:</strong> Final org decided during offsite, executed within 2 weeks post-offsite</div>
                      <div><strong className="text-ink">Revenue:</strong> Combined entity hit Rp 60M ARR (conservative 10% lower than 65M projected — due to customer transition time)</div>
                      <div><strong className="text-ink">Retention:</strong> Acquired company team 90% retention (industry avg 75% post-acquisition)</div>
                    </div>
                    <div className="space-y-1 text-sm text-slate">
                      <div><strong className="text-ink">Team sentiment:</strong> eNPS post-acquisition +22 (vs typical post-acquisition -5)</div>
                      <div><strong className="text-ink">Product integration:</strong> Unified roadmap launched 8 weeks post-offsite, customer upsell opportunity identified Rp 8M annual</div>
                      <div><strong className="text-ink">Repeat:</strong> Founder book us for quarterly C-suite alignment offsite going forward</div>
                      <div><strong className="text-ink">CEO Quote:</strong> "Offsite facilitate conversation yang susah tapi perlu. 12 pax bisa align dalam 2 hari, decision sudah solid. Worth investment."</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-cream/10 p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-display text-2xl text-ink">
                  Case Study 2: Founder Annual Ritual Offsite
                </h3>
                <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                  5 pax, 2D1N Bespoke, Founder Alignment
                </span>
              </div>

              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">CONTEXT</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Company:</strong> Manufacturing holding company (Rp 800M revenue, 3 operating subsidiaries)</div>
                    <div><strong className="text-ink">Founders:</strong> 2 co-founder + 3 early investor/advisor (5 pax total)</div>
                    <div><strong className="text-ink">Rhythm:</strong> Annual ritual every Mei, 2D1N offsite. Discuss vision, equity strategy, succession, major decision</div>
                    <div><strong className="text-ink">Sensitivity:</strong> Very high — equity distribution, founder relationship health, succession planning (founder age 58, thinking long-term)</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">OFFSITE DESIGN</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Format:</strong> 2D1N bespoke dengan certified strategy consultant (Rp 12 jt/pax + Rp 100 jt consultant fee)</div>
                    <div><strong className="text-ink">Facilitator:</strong> Executive coach ICF-certified, familiar dengan founder-level dynamics</div>
                    <div><strong className="text-ink">Venue:</strong> Private mountain estate Pangalengan (most discreet setting, minimal staff)</div>
                    <div><strong className="text-ink">Confidentiality:</strong> Highest level — no documentation, just verbal agreement + founder decision log ciphered</div>
                    <div><strong className="text-ink">Pre-work:</strong> 1-on-1 executive coaching pre-offsite dengan each founder — perspective clearing</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">OFFSITE AGENDA (Year 5 focus: Succession Planning)</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Day 1 Morning:</strong> Individual reflection session — each founder journal: what's working, what's frustrating, personal vision 5 years ahead. Then share perspectives</div>
                    <div><strong className="text-ink">Day 1 Afternoon:</strong> Deep dive succession planning — when founder want to transition? What role for next-gen leadership? What happen dengan equity? Discuss scenarios, build consensus</div>
                    <div><strong className="text-ink">Day 1 Evening:</strong> Reflective dinner, informal bonding antar founders. Many non-agenda conversation happen here naturally</div>
                    <div><strong className="text-ink">Day 2 Morning:</strong> Formalize succession decision — decision documented (in cryptic format), commitment locked. Discuss communication plan ke broader leadership</div>
                    <div><strong className="text-ink">Day 2 Afternoon:</strong> Vision refresh session — bigger-picture strategic direction 5 years, market opportunity, legacy ambition. Excitement building untuk next chapter</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">OUTCOME & IMPACT</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1 text-sm text-slate">
                      <div><strong className="text-ink">Succession clarity:</strong> Founder agree on 7-year transition roadmap (vs vague 10-year before)</div>
                      <div><strong className="text-ink">Equity alignment:</strong> Dispute tentang equity distribution resolved through structured conversation</div>
                      <div><strong className="text-ink">Next-gen identification:</strong> 2 key leader identified untuk accelerated development program</div>
                      <div><strong className="text-ink">Founder relationship:</strong> Conflict tentang business direction resolved, aligned on 5-year vision</div>
                    </div>
                    <div className="space-y-1 text-sm text-slate">
                      <div><strong className="text-ink">Implementation:</strong> Succession mentoring program launch 3 bulan post-offsite (vs indefinite delay before)</div>
                      <div><strong className="text-ink">Revenue impact:</strong> Strategic clarity improve execution, subsidiary leader confidence increase → 12% YoY revenue growth achieved next fiscal</div>
                      <div><strong className="text-ink">Founder satisfaction:</strong> "Offsite ini therapeutic + strategic. Kami leader punya conversation level in yang jarang happen. Relationship founder lebih kuat. Worth yearly investment." — Founder A</div>
                      <div><strong className="text-ink">Repeat:</strong> Booked untuk 5 tahun berturut-turut annual ritual, paid upfront untuk consistency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate italic">
            Dua case study show berbeda offsite (integration vs founder ritual), tapi similar principle: confidentiality + substantive facilitation + implementation tracking = measurable outcome untuk C-suite yang invest di strategic work.
          </p>
        </Section>

        {/* Why 7Summits Corporate */}
        <section className="py-16 md:py-24 border-t border-divider bg-cream/20">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">C-Suite Confidentiality & Strategy</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
                Kenapa C-suite Trust 7Summits untuk Executive Offsite yang High-Stakes
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  metric: "100+",
                  label: "C-suite offsites facilitated",
                  detail: "Dari quarterly alignment sampai major transformation — M&A, restructuring, succession planning"
                },
                {
                  metric: "100%",
                  label: "Discretion & confidentiality record",
                  detail: "Zero breach. 6-layer NDA protocol. Legal-reviewed for highly sensitive discussions"
                },
                {
                  metric: "85%",
                  label: "Repeat booking untuk annual strategic",
                  detail: "Founder/CEO yang offsite once dengan kami, book lagi untuk offsite tahunan berikutnya"
                },
                {
                  metric: "15+",
                  label: "Tahun strategy consultant network",
                  detail: "McKinsey, BCG, Bain alumni — facilitator kami bukan sekadar event MC, tapi strategy partner"
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
              Kami bukan "corporate event organizer". Kami <strong>partner C-suite di strategic moments</strong> — dari pre-work material development, stakeholder pre-brief, facilitation strategy session, sampai post-offsite follow-up. Discretion, confidentiality, dan strategic outcome adalah core value kami, bukan afterthought.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <Section
          id="our-process"
          eyebrow="How We Work"
          title="Dari CEO brief sampai post-offsite alignment: Executive offsite process kami"
        >
          <ol className="not-prose space-y-4 mt-6">
            {[
              {
                step: "Founder / CEO Strategic Brief (1 hour)",
                desc: "Confidential discussion tentang objective, success criteria, sensitive topics, participant dynamics. Kami understand political landscape sebelum design.",
              },
              {
                step: "Scope & NDA Finalization",
                desc: "Define discretion protocol level. High-level NDA draft (legal review optional). Venue exclusive booking lock. Participant list confidential.",
              },
              {
                step: "Pre-work Material Development (1-2 weeks)",
                desc: "Industry brief, competitive analysis, internal data summary, strategic framework. Distribute 1 minggu sebelum offsite untuk informed participation.",
              },
              {
                step: "Individual Pre-Offsite Calls (30 min per person)",
                desc: "1-on-1 dengan setiap participant — listen to pain points, priority, personal success criteria. Briefing notes untuk facilitator hanya.",
              },
              {
                step: "Agenda Design & Facilitator Prep",
                desc: "Detailed agenda yang balance structured input + free-flowing discussion. Facilitator scenario-plan untuk potential stuck points atau controversial discussions.",
              },
              {
                step: "Facilitation Day(s) — Discreet On-Site",
                desc: "Senior facilitator on-site penuh. Venue exclusive. Minimal staff. Real-time group dynamic management. Breakout session untuk sensitive topics. Zero documentation exposed.",
              },
              {
                step: "Post-Offsite Alignment & Follow-up",
                desc: "Decision summary (approved by participants), action item log, accountability assign. Confidential report to CEO only. Post-engagement coaching kalau needed.",
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
            Confidentiality embedded di setiap tahap. Tidak ada shortcuts, tidak ada "just briefing" yang casual. C-suite offsite adalah high-stakes work.
          </p>
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
        </Section>

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B — key differentiator"],
                ["/incentive-trip-bandung", "Incentive Trip Bandung", "Program reward top performers"],
                ["/leadership-retreat-jawa-barat", "Leadership Retreat", "Development cohort 12-30 pax"],
                ["/company-retreat-bandung", "Corporate Retreat Bandung", "Multi-day strategy session untuk leadership"],
                ["/methodology", "Our 5-Pillar Design Methodology", "Framework untuk C-suite experience design"],
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
              Siap facilitate C-suite decision yang transformative & confidential?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              <strong>Strategy partnership + Discretion + Outcome focus</strong> — kami facilitate high-stakes offsite dengan confidentiality as core, strategy as methodology, and measurable alignment as outcome.
            </p>
            <p className="mt-4 text-sm text-cream/65">
              Confidential brief call → pre-work material development → individual pre-brief → facilitated offsite with certified strategy consultant → post-engagement alignment tracking.
            </p>
            <ul className="mt-8 inline-grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> 100% confidentiality
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Certified facilitator
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Discretion protocol
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">
                Confidential Consultation<ArrowRight size={16} />
              </Link>
              <a href={buildWaLink("executive offsite Bandung — confidential discussion")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">
                <Whatsapp size={16} />WhatsApp Direct
              </a>
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
