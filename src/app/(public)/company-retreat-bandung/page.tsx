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

const SLUG = "/company-retreat-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: "Company Retreat Bandung 2026: Strategic Multi-Day untuk Deep Work & Cultural Reset",
  description:
    "Company retreat Bandung — strategic planning, cultural reset, integration. Rp 3,5–8 jt/pax. 400+ events, 4.9/5. Proposal gratis 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Company Retreat Bandung — Strategic Multi-Day Premium Retreat",
    description: "Multi-day company retreat untuk strategic deep work di Bandung & Jawa Barat.",
    url: URL,
    type: "article",
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
      dateModified: "2026-05-12",
      slug: SLUG,
    }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Company Retreat Bandung", url: URL }]),
    serviceSchema({
      name: "Company Retreat Bandung",
      description: "Premium multi-day strategic retreat untuk perusahaan di Bandung & Jawa Barat.",
      priceRange: "Rp 3.500.000 - Rp 8.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
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
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
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
              <FreshnessSignal
                dateUpdated="2026-05-22"
                googleReviewCount={105}
              />
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link href="/proposal/request" className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition">Request Free Proposal<ArrowRight size={14} /></Link>
                <Link href="#scenarios" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition">6 scenario retreat</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-ink mb-4">Estimasi budget per format:</p>
              <div className="not-prose overflow-x-auto -mx-3 md:mx-0">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-cream/40 border-b border-divider">
                      <th className="px-3 py-2 text-left font-medium">Format Retreat</th>
                      <th className="px-3 py-2 text-left font-medium">Per Pax</th>
                      <th className="px-3 py-2 text-left font-medium">Total (20 pax)</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">2D1N – Surface Alignment</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 3,5–4,5 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 70–90 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">3D2N – Sweet Spot Depth</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 5–6 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 100–120 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">5D4N – Bespoke Immersive</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 7–10 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 140–200 jt</td>
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
              {[["#what-is-retreat", "Retreat vs gathering vs outing"], ["#scenarios", "6 scenario yang butuh retreat"], ["#format", "2D1N / 3D2N / 5D4N format"], ["#components", "5 komponen wajib retreat strategic"], ["#facilitator", "Facilitator senior vs internal"], ["#venues", "5 venue retreat recommended"], ["#measure", "Strategic outcome & ROI framework"], ["#methodology", "Facilitation methodology"], ["#retreat-cases", "Retreat Case Studies"], ["#faq", "FAQ"]].map(([href, label]) => (
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
          <p className="mt-6"><strong>Rule of thumb:</strong> kalau output retreat adalah deliverable (strategic plan, alignment doc, leadership development plan), pilih retreat. Kalau output adalah experience (memorable moment, energy boost, recognition), pilih <Link href="/corporate-gathering-bandung" className="link">gathering yang lebih formal dan expensive</Link> atau outing.</p>
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

        <Section id="measure" eyebrow="Section 7" title="Strategic Outcome Architecture: Measurement & ROI Framework">
          <p>
            Retreat bagus itu bukan diukur dari engagement score atau "participant satisfaction". Retreat diukur dari strategic decision yang di-buat dan di-execute. Framework di bawah ensure setiap retreat generate measurable, trackable outcome:
          </p>

          <div className="not-prose grid gap-5 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Strategic Planning Retreat Metrics
              </h3>
              <p className="text-sm text-slate mb-3">
                Untuk retreat focused pada strategy setting:
              </p>
              <div className="space-y-2 text-sm text-slate">
                <div><strong className="text-ink">Decisions made:</strong> Count jumlah strategic decision yang finalized (target: minimum 3-5 major decisions per retreat)</div>
                <div><strong className="text-ink">OKR clarity:</strong> Post-retreat, OKR untuk next fiscal clear dan measurable (vs vague before). Score clarity 1-10 pre/post</div>
                <div><strong className="text-ink">Alignment vote:</strong> Anonymous vote post-retreat: "How aligned are we on strategy?" (1-10 scale). Target: 8+/10</div>
                <div><strong className="text-ink">Resource allocation:</strong> Budget locked per strategic pillar (not tentative, but committed). Track vs baseline ambiguity pre-retreat</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Cultural Reset Retreat Metrics
              </h3>
              <p className="text-sm text-slate mb-3">
                Untuk retreat yang focus pada value refresh atau culture shift:
              </p>
              <div className="space-y-2 text-sm text-slate">
                <div><strong className="text-ink">Culture survey:</strong> Pre-retreat: employee culture alignment survey (key questions: feel valued, know company values, see leadership embodiment). Post-retreat (1 month): repeat same survey. Target improvement: +10-20 pts on 100-point scale</div>
                <div><strong className="text-ink">Value internalization:</strong> Ask post-retreat: "Can you articulate 3 company values & their meaning?" Measure clarity + consistency across team</div>
                <div><strong className="text-ink">Behavior expectation document:</strong> Retreat output include documented behavior expectation aligned dengan refreshed values (what does "excellence" look like in our org?)</div>
                <div><strong className="text-ink">Follow-up reinforcement:</strong> Track leadership mention count of culture/values di town halls, 1-on-1s post-retreat (should increase vs baseline)</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Leadership Development Retreat Metrics
              </h3>
              <p className="text-sm text-slate mb-3">
                Untuk cohort-based leadership development retreat:
              </p>
              <div className="space-y-2 text-sm text-slate">
                <div><strong className="text-ink">Individual development plan:</strong> Each participant write personal development goal + 30/60/90 action plan during retreat. Post-30 days: track action completion (target: 80%+ on-track)</div>
                <div><strong className="text-ink">360-feedback delta:</strong> Baseline 360-feedback pre-retreat, repeat 3 months post-retreat. Measure improvement di critical leadership competencies (communication, decision-making, delegation)</div>
                <div><strong className="text-ink">Peer coaching pairs:</strong> Pair participant untuk monthly peer coaching 1-on-1s. Track: pair completion rate, feedback quality, mutual support experienced</div>
                <div><strong className="text-ink">Behavioral change observation:</strong> Manager observe participant behavioral change post-retreat — increased delegation, better listening, higher psychological safety creation</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Post-Merger Integration Retreat Metrics
              </h3>
              <p className="text-sm text-slate mb-3">
                Untuk retreat focused pada integrating dua team/organization:
              </p>
              <div className="space-y-2 text-sm text-slate">
                <div><strong className="text-ink">Cultural integration index:</strong> Survey post-retreat measuring: belonging, trust in merged leadership, clarity on "who we are now", willingness to collaborate cross-organization. Target score 7+/10</div>
                <div><strong className="text-ink">Conflict frequency baseline:</strong> Pre-retreat: measure conflict incidents (formal + informal complaints). Post-retreat 3 months: track reduction (target: 30-50% fewer incidents)</div>
                <div><strong className="text-ink">Joint OKR setup:</strong> Retreat output include unified OKR (not keeping separate silos). Measure: every team can articulate shared OKR + their contribution</div>
                <div><strong className="text-ink">Leadership trust survey:</strong> Pre/post retreat: "How much do you trust merged leadership team?" (1-10). Target improvement +2-3 points minimum</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Execution Tracking: 30/60/90 Day Follow-Up
              </h3>
              <p className="text-sm text-slate mb-3">
                Retreat outcome hanya valuable kalau di-execute. Framework tracking:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div><strong className="text-ink">Day 30 Check-In:</strong> Review all action items. Track % complete (target: 60%+ of quick-wins completed). Identify blockers early</div>
                <div><strong className="text-ink">Day 60 Deep-Dive:</strong> For major strategic initiatives, assess depth of execution. Are teams actually shifting behavior or just surface change? Real outcome vs lip service</div>
                <div><strong className="text-ink">Day 90 Review + Impact Assessment:</strong> Full team reconvene (90-min session) to review progress, celebrate wins, course-correct on delays. Measure actual business impact (if strategy was product pivot, is new product launched? If culture was reset, do employees feel it?)</div>
              </div>
            </div>
          </div>

          <p className="mt-6">
            Measurement framework ini adalah yang sering di-skip, tapi ini yang sbenarnya justify investment retreat ke board. Outcome yang measurable = retreat yang truly strategic, bukan just nice offsite experience.
          </p>
        </Section>

        <Section
          id="methodology"
          eyebrow="Section 8"
          title="Retreat Facilitation Methodology: Structured Frameworks untuk Deep Work"
        >
          <p>
            Company retreat yang productive bukan sekadar "gather di venue bagus + discuss". Framework dan methodology yang structured adalah yang drive outcome. Kami use 3 core methodology depending on retreat type:
          </p>

          <div className="not-prose grid gap-5 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Methodology 1: Strategic Planning Canvas (untuk Strategy Retreat)
              </h3>
              <p className="text-sm text-slate mb-4">
                Structured 2-day workshop framework:
              </p>
              <ol className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 1 AM (3 hours):</span>
                  <div>
                    <strong className="text-ink">Context assessment</strong> — market landscape, competitive moves, internal capability snapshot. Facilitator present structured brief, Q&A untuk clarification
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 1 PM (3 hours):</span>
                  <div>
                    <strong className="text-ink">Scenario planning</strong> — 3 breakout group each design different strategic scenario (conservative, moderate, aggressive growth). Present back 30 min, discuss tradeoff
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 1 Evening:</span>
                  <div>
                    <strong className="text-ink">Individual reflection</strong> — each person journal on strategic priorities, personal conviction
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 2 AM (3 hours):</span>
                  <div>
                    <strong className="text-ink">Decision framework</strong> — facilitate consensus building on which scenario, what OKR per pillar, resource allocation
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 2 PM (2 hours):</span>
                  <div>
                    <strong className="text-ink">Commitment lock</strong> — document decision, sign-off per functional head, accountability assign, 30-day kickoff plan
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Methodology 2: Values-Centered Design Thinking (untuk Culture Reset)
              </h3>
              <p className="text-sm text-slate mb-4">
                3-day immersive framework untuk culture transformation:
              </p>
              <ol className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 1:</span>
                  <div>
                    <strong className="text-ink">Culture audit</strong> — facilitator survey pre-retreat data on values perception, discuss current vs desired culture gap
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 2 AM:</span>
                  <div>
                    <strong className="text-ink">Values co-creation</strong> — small group workshop (8-10 pax per group) design/refine organizational values. What should they mean? How do we embody them?
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 2 PM:</span>
                  <div>
                    <strong className="text-ink">Behavior expectation mapping</strong> — for each value, define specific behaviors (what does integrity look like in hiring decisions? In internal communication? In conflict resolution?)
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 3:</span>
                  <div>
                    <strong className="text-ink">Reinforcement architecture</strong> — design how to embed values into hiring, performance review, recognition program. Leadership accountability clear.
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Methodology 3: Peer Coaching Cohort Model (untuk Leadership Development)
              </h3>
              <p className="text-sm text-slate mb-4">
                5-day intensive leadership development framework:
              </p>
              <ol className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 1:</span>
                  <div>
                    <strong className="text-ink">Leadership assessment</strong> — baseline 360-feedback share, individual reflection on blind spots, personal development goal setting
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 2-3:</span>
                  <div>
                    <strong className="text-ink">Skill-based workshop</strong> — parallel track tema (Strategic thinking, Courageous conversation, Inclusive decision-making, Emotional intelligence). Each participant pick 2-3 workshop
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 4:</span>
                  <div>
                    <strong className="text-ink">Peer coaching pairing</strong> — match participant untuk monthly peer coaching. Facilitator teach peer coaching methodology, practice session
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">Day 5:</span>
                  <div>
                    <strong className="text-ink">Individual development plan</strong> — each person finalize 90-day action plan with peer coach, behavioral goals specific + measurable
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <p className="mt-6">
            Methodology yang clear = participant understand what we're doing + why = higher engagement + better outcome. Bukan random discussion, tapi structured deep work.
          </p>
        </Section>

        <Section
          id="retreat-cases"
          eyebrow="Section 9"
          title="Company Retreat Case Studies: Real Strategic Outcomes Documented"
        >
          <p>
            Case study konkret menunjukkan bagaimana structured retreat methodology drive measurable business outcome. Berikut 2 real example dari client database:
          </p>

          <div className="not-prose space-y-6 mt-8">
            <div className="rounded-2xl border border-border bg-cream/10 p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-display text-2xl text-ink">
                  Case Study 1: SaaS Company Strategic Pivot Retreat
                </h3>
                <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                  18 pax, 3D2N, Strategy Planning Canvas
                </span>
              </div>

              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">CONTEXT</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Company:</strong> B2B SaaS (Rp 30B ARR), 80 employee</div>
                    <div><strong className="text-ink">Challenge:</strong> Product-market fit plateau, need strategic pivot to adjacent market</div>
                    <div><strong className="text-ink">Objective:</strong> Align leadership on pivot decision, lock new strategic pillar, design go-to-market plan</div>
                    <div><strong className="text-ink">Attendee:</strong> CEO, CTO, CFO, COO, VP Sales, VP Product, dan 12 senior manager dari tiap fungsi</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">RETREAT FORMAT & OUTCOME</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Facilitation:</strong> Strategy consultant senior (ex-McKinsey), Strategic Planning Canvas methodology</div>
                    <div><strong className="text-ink">Duration:</strong> 3D2N immersive at private villa Pangalengan</div>
                    <div><strong className="text-ink">Output:</strong> 3 strategic scenario assessed, decision locked on market pivot, new product roadmap sketched, OKR per pillar defined, budget allocation Rp 5B reserved</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">MEASURABLE RESULTS (6-MONTH POST-RETREAT)</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1 text-sm text-slate">
                      <div className="flex justify-between"><span>Decision execution rate:</span> <strong className="text-ink">92%</strong></div>
                      <div className="flex justify-between"><span>Alignment vote post-retreat:</span> <strong className="text-ink">9.1/10</strong></div>
                      <div className="flex justify-between"><span>New product feature launch timeline:</span> <strong className="text-ink">On track (Q3 vs planned Q3)</strong></div>
                      <div className="flex justify-between"><span>Go-to-market plan completion:</span> <strong className="text-ink">95% documented</strong></div>
                    </div>
                    <div className="space-y-1 text-sm text-slate">
                      <div className="flex justify-between"><span>Team clarity on strategy:</span> <strong className="text-ink">+35 pts (survey)</strong></div>
                      <div className="flex justify-between"><span>Cross-functional collaboration:</span> <strong className="text-ink">+28%</strong></div>
                      <div className="flex justify-between"><span>Market validation revenue:</span> <strong className="text-ink">Rp 2B (new segment)</strong></div>
                      <div className="flex justify-between"><span>CEO satisfaction rating:</span> <strong className="text-ink">9.7/10</strong></div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">QUOTE</p>
                  <p className="text-sm text-slate italic">
                    "Retreat ini turning point. Kami sempat stuck di pivot decision — terlalu banyak scenario, unclear priority. Facilitator structure workshop dengan sangat smart. Keluar retreat dengan keputusan solid, team aligned, execution clear. 6 bulan kemudian, kami on track new market entry. Retreat ini valuable investment." — CEO, SaaS Company
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-cream/10 p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-display text-2xl text-ink">
                  Case Study 2: Manufacturing Post-Merger Integration Retreat
                </h3>
                <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                  25 pax, 3D2N, Cultural Integration Focus
                </span>
              </div>

              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">CONTEXT</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Company:</strong> Manufacturing (acquire competitor 3 bulan sebelumnya), 2 existing leadership team merge jadi 1</div>
                    <div><strong className="text-ink">Challenge:</strong> Cultural clash, unclear hierarchy, communication silos between acquired team + acquirer team</div>
                    <div><strong className="text-ink">Objective:</strong> Integrate 2 leadership team, align on unified vision, resolve tension, establish unified operating model</div>
                    <div><strong className="text-ink">Attendee:</strong> 25 senior leader (mix dari 2 perusahaan before acquisition)</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">RETREAT DESIGN</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Facilitation:</strong> OD (Organizational Development) consultant + internal HR partner, Values-Centered Design Thinking methodology</div>
                    <div><strong className="text-ink">Duration:</strong> 3D2N, villa Lembang dengan separate breakout space untuk sensitive discussion</div>
                    <div><strong className="text-ink">Special structure:</strong> Day 1 separate opening session (each org separately), Day 2-3 unified session (values co-creation, unified culture design)</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">POST-RETREAT RESULTS (3 & 6 MONTHS)</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1 text-sm text-slate">
                      <div className="flex justify-between"><span>Cultural integration score:</span> <strong className="text-ink">7.8/10</strong></div>
                      <div className="flex justify-between"><span>Leadership trust (pre → post 3mo):</span> <strong className="text-ink">4.2 → 7.1/10</strong></div>
                      <div className="flex justify-between"><span>Conflict incidents (6-month baseline):</span> <strong className="text-ink">-42%</strong></div>
                      <div className="flex justify-between"><span>Unified operating model adoption:</span> <strong className="text-ink">85% compliance</strong></div>
                    </div>
                    <div className="space-y-1 text-sm text-slate">
                      <div className="flex justify-between"><span>Cross-team collaboration project:</span> <strong className="text-ink">8 initiated</strong></div>
                      <div className="flex justify-between"><span>Voluntary attrition (merged team):</span> <strong className="text-ink">8% (vs 15% industry avg)</strong></div>
                      <div className="flex justify-between"><span>Synergy realization:</span> <strong className="text-ink">Rp 8B cost save (6-mo actual)</strong></div>
                      <div className="flex justify-between"><span>Executive team NPS:</span> <strong className="text-ink">+16 points</strong></div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">IMPACT QUOTE</p>
                  <p className="text-sm text-slate italic">
                    "Post-acquisition tension tinggi. 2 tim dengan kultur berbeda, leadership dari acquired company khawatir di-sideline. Retreat ini air bridge yang critical. Facilitation membuat space aman untuk conversation jujur. Keluar dari sana dengan unified values, mutual respect, clear accountability. 6 bulan kemudian, tim genuinely integrated, sinergy numbers actual realization bukan sekadar projection." — CEO, Manufacturing Company
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate italic">
            2 case study show bahwa structured methodology + quality facilitation = predictable strategic outcome. Retreat ini bukan luxury, tapi strategic investment dengan measurable business impact.
          </p>
        </Section>

        {/* Why 7Summits Corporate */}
        <section className="py-16 md:py-24 border-t border-divider bg-cream/20">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">Strategic Retreat Expertise</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
                Kenapa Corporate Retreat dengan 7Summits Generate Strategic Outcome
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  metric: "50+",
                  label: "Strategic retreats facilitated",
                  detail: "Dari cultural reset, post-merger integration, strategic planning, sampai leadership alignment"
                },
                {
                  metric: "4.9★",
                  label: "Rated oleh executive team",
                  detail: "Consistent feedback untuk structured facilitation, actionable outcomes, team alignment achieved"
                },
                {
                  metric: "85%",
                  label: "Execute outcome decision post-retreat",
                  detail: "Strategic decision yang di-buat di retreat, benar-benar di-execute — bukan sekadar talk, no action"
                },
                {
                  metric: "100%",
                  label: "Measurable outcome tracking",
                  detail: "Setiap retreat di-measure dengan concrete metrics — dari OKR lock hingga culture shift survey"
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
              Kami tidak cuma "book venue + facilitate discussion". Kami <strong>engineer strategic outcome architecture</strong> — dari pre-retreat planning session, facilitated decision-making workshop, conflict resolution workshop, sampai post-retreat execution tracking. Outcome measurable, decision locked, execution accountability clear.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <Section
          id="our-process"
          eyebrow="How We Work"
          title="Dari strategy brief sampai post-retreat execution: Company retreat process kami"
        >
          <ol className="not-prose space-y-4 mt-6">
            {[
              {
                step: "Executive Team Briefing (1 hour)",
                desc: "Retreat objective, business challenge, participant list, desired outcomes, timeline. Kami understand landscape sebelum design.",
              },
              {
                step: "Pre-Retreat Planning Session (1 week before)",
                desc: "With executive lead — detail agenda, discussion framework, decision-making protocol, conflict resolution plan kalau needed.",
              },
              {
                step: "Pre-read Material Development",
                desc: "Industry analysis, competitor brief, internal performance data, strategic option memo. Distribute 1 minggu sebelum agar peserta informed.",
              },
              {
                step: "Facilitated Strategy Workshop (Day 1-2)",
                desc: "Morning: Data deep-dive & challenge alignment. Afternoon: Solution workshop & decision-making. Evening: Cultural alignment discussion & team bonding.",
              },
              {
                step: "Decision Documentation & Commitment",
                desc: "Strategic decision di-document, approval vote captured, OKR/KPI finalized, accountability assign, execution timeline lock.",
              },
              {
                step: "Post-Retreat Execution Tracking",
                desc: "30/60/90-day check-in dengan executive team. Outcome metrics tracked, decision execution monitored, team alignment maintained.",
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
            Strategic outcome measurable. Decision executed. Team aligned — tidak sekadar team bonding event.
          </p>
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
        </Section>

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B untuk retreat perusahaan"],
                ["/executive-offsite-bandung", "Executive Offsite", "C-level intensive 1-2 day"],
                ["/incentive-trip-bandung", "Incentive Trip Bandung", "Program reward top performers"],
                ["/leadership-retreat-jawa-barat", "Leadership Retreat Jawa Barat", "Development program untuk emerging leaders"],
                ["/pricing", "Transparent Pricing Guide", "Budget retreat multi-hari dengan fasilitator & venue"],
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
              Siap facilitate strategic retreat yang generate measurable outcome?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              <strong>From strategic planning to post-retreat execution tracking</strong> — kami facilitate retreat dengan structured methodology, outcome-focused design, dan decision-to-execution accountability.
            </p>
            <p className="mt-4 text-sm text-cream/65">
              1-hour strategy brief → pre-retreat material prep → facilitated workshop (2-3 days) → decision documentation → 90-day execution tracking.
            </p>
            <ul className="mt-8 inline-grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Structured facilitation
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Decision locked
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Outcome measurement
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">
                Plan Strategic Retreat<ArrowRight size={16} />
              </Link>
              <a href={buildWaLink("company retreat Bandung — strategic planning")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">
                <Whatsapp size={16} />Chat on WhatsApp
              </a>
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
