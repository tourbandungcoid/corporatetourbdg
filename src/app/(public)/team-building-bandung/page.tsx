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
import { CompetitorComparison } from "@/components/CompetitorComparison";
import { FreshnessSignal } from "@/components/FreshnessSignal";
import { AuthorCredibility } from "@/components/AuthorCredibility";
import { SearchIntentSnapshot } from "@/components/SearchIntentSnapshot";
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

const SLUG = "/team-building-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Team Building Bandung 2026: Methodology, 50+ Activity, Vendor Recommended",
  description:
    "Team building outcome-driven Bandung — Tuckman, DiSC, Belbin methodology. Rp 1,2–4 jt/pax. 400+ events, 4.9/5 rating. Proposal gratis 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Team Building Bandung — Methodology + Activity Catalog 2026",
    description:
      "Structured team building untuk perusahaan Indonesia di Bandung. 400+ events delivered.",
    url: URL,
    type: "article",
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Berapa biaya team building per pax di Bandung?",
    answer:
      "Range Rp 1,2–4 juta/pax tergantung durasi dan kompleksitas. Half-day team building outbound mulai Rp 1,2 jt/pax. Full-day Rp 1,8 jt/pax. 2D1N dengan venue + activity mix Rp 2,5–4 jt/pax. Sudah include venue, F&B, facilitator, equipment, dan project management.",
  },
  {
    question: "Apa bedanya team building dan outing kantor?",
    answer:
      "Outing kantor lebih casual, fokus refresh + bonding. Team building lebih structured — activity di-frame untuk hit specific team outcomes (komunikasi, problem solving, trust, alignment). Team building biasanya lebih pendek (half-day atau full-day) dan lebih facilitated.",
  },
  {
    question: "Activity team building paling populer untuk perusahaan tech?",
    answer:
      "Untuk tim tech yang biasanya muda dan analytical: (1) escape room corporate edition, (2) hackathon mini, (3) outdoor problem-solving challenge, (4) cooking competition, (5) drone race team-based. Hindari activity terlalu fisik untuk first-timer outing.",
  },
  {
    question: "Methodology framework apa yang kalian pakai?",
    answer:
      "3 framework utama: (1) Tuckman model (forming-storming-norming-performing) untuk team development arc, (2) DiSC profile untuk personality awareness, (3) Belbin team roles untuk peran kolaborasi. Pilihan framework di-match dengan goal dan maturity tim — bukan one-size-fits-all.",
  },
  {
    question: "Outbound vs indoor — mana yang lebih efektif?",
    answer:
      "Tergantung goal. Outbound: physically engaging, memorable, bagus untuk break routine dan bonding lintas department. Indoor workshop: more facilitated, focused outcome, deeper reflection. Kebanyakan client kami pakai hybrid format — 70% outbound + 30% workshop session.",
  },
  {
    question: "Bagaimana cara mengukur hasil team building?",
    answer:
      "Pre-event baseline survey (engagement score, communication index), post-event survey 1 minggu setelahnya, follow-up survey 3 bulan kemudian untuk lihat retention impact. Untuk team building yang lebih intensive, ada 360-feedback option dengan certified facilitator.",
  },
  {
    question: "Durasi team building yang optimal?",
    answer:
      "Half-day (4 jam) cocok untuk surface-level refresh, tim kecil <30. Full-day (8 jam) untuk grup 30-100 pax dengan campuran outbound + workshop. 2D1N untuk goal yang lebih ambisius (post-merger bonding, deep team development). 3D2N hanya untuk leadership development atau cohort experience.",
  },
  {
    question: "Apakah activity outbound aman untuk tim umur beragam?",
    answer:
      "Iya, kami selalu tier activity berdasar physical risk: Tier 1 (safe untuk semua umur, low impact), Tier 2 (medium intensity), Tier 3 (adventure). Untuk grup mixed age, kami biasa pakai Tier 1-2 mix. Insurance peserta + medical standby on-site untuk Tier 2+.",
  },
  {
    question: "Berapa pax minimum dan maximum untuk team building?",
    answer:
      "Minimum 15 pax untuk activity outbound (di bawah itu activity menjadi kurang engaging). Maximum 300 pax untuk single-stream activity. Untuk 300+ pax, kami pakai parallel tracks atau rotation format dengan 3-4 activity berjalan paralel.",
  },
  {
    question: "Lokasi team building outdoor terbaik di Bandung?",
    answer:
      "Top 3: (1) Maribaya/Cikole — accessible, terrain variasi, photogenic. (2) Lembang area — banyak adventure ground dengan venue accommodation dekat. (3) Ciwidey forest — feel lebih remote, cocok untuk team yang mau experience nature deeper.",
  },
];

const ACTIVITY_CATALOG = [
  {
    category: "Communication & Trust",
    activities: [
      "Blindfold Maze — pasangan navigasi labirin dengan komunikasi verbal",
      "Trust Fall (vertical & horizontal) — classic trust exercise",
      "Marshmallow Challenge — build tertinggi dengan spagetti + marshmallow",
      "Helium Stick — group lower stick tanpa lepas",
      "Story Building — collaborative narrative construction",
    ],
  },
  {
    category: "Problem Solving",
    activities: [
      "Escape Room Corporate — 60-90 min timed challenge",
      "Bridge Construction — build functional bridge dari materials terbatas",
      "Murder Mystery — investigative team game",
      "Resource Optimization Challenge — limited budget + max outcome",
      "Code Crack — multi-stage cipher solving",
    ],
  },
  {
    category: "Leadership & Decision Making",
    activities: [
      "Survival Simulation — desert/island scenario with role assignment",
      "Stock Market Mini — trading simulation 90 min",
      "Project Sprint — 3-hour mini-project end-to-end",
      "Crisis Response Drill — emergency scenario handling",
      "Negotiation Bootcamp — paired tactical practice",
    ],
  },
  {
    category: "Creativity & Innovation",
    activities: [
      "Cooking Competition — team-based dengan judging",
      "Photo Quest — themed photography challenge around venue",
      "Improv Theatre — guided improvisation circles",
      "Innovation Lab — ideation + prototype sprint",
      "Art Therapy Workshop — group canvas painting",
    ],
  },
  {
    category: "Outdoor Adventure",
    activities: [
      "Outbound High Ropes — flying fox, burma bridge, web crossing",
      "Paintball / Airsoft — tactical team scenario",
      "Off-road Adventure — ATV / jeep team challenge",
      "Rafting — class 2-3 river (Sungai Cisadane / Citarik)",
      "Drone Race — assembly + course race",
    ],
  },
  {
    category: "Culture & Reflection",
    activities: [
      "Angklung Workshop — Saung Mang Udjo cultural session",
      "Batik Workshop — hands-on creation",
      "Bonfire Reflection Circle — guided sharing session",
      "Sunrise Meditation — morning grounding activity",
      "Gratitude Wall — interactive appreciation install",
    ],
  },
];

const METHODOLOGY = [
  {
    name: "Tuckman Stages",
    description:
      "Identifikasi posisi tim di Forming/Storming/Norming/Performing → pilih activity yang accelerate ke next stage.",
    useCase: "Cocok untuk tim baru terbentuk atau pasca-restructure",
  },
  {
    name: "DiSC Profile",
    description:
      "Personality assessment 4 quadrant (Dominance/Influence/Steadiness/Conscientiousness) → bangun awareness perbedaan style komunikasi.",
    useCase: "Cocok untuk tim mengalami friksi atau cross-functional",
  },
  {
    name: "Belbin Team Roles",
    description:
      "9 peran natural (Plant, Resource Investigator, Coordinator, dll) → optimize role assignment untuk performance.",
    useCase: "Cocok untuk leadership team atau squad performance optimization",
  },
];

export default function TeamBuildingBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline:
        "Team Building Bandung 2026: Methodology, 50+ Activity, dan Vendor Recommended",
      description:
        "Structured team building untuk perusahaan Indonesia — methodology framework, activity catalog, dan vendor selection guide.",
      image: IMAGES.caseStudyTeamBuilding.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Team Building Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Team Building Bandung",
      description:
        "Outcome-driven team building dengan methodology framework (Tuckman, DiSC, Belbin) untuk perusahaan di Bandung & Jawa Barat.",
      priceRange: "Rp 1.200.000 - Rp 4.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Memilih Program Team Building yang Tepat di Bandung",
      description: "5 langkah untuk mendesain program team building yang outcome-driven — dari diagnosa kebutuhan tim hingga pengukuran hasil.",
      steps: [
        { name: "Diagnosa Kebutuhan Tim", text: "Identifikasi gap tim saat ini: communication breakdown, trust deficit, cross-department friction, atau leadership alignment. Output diagnosa ini menentukan framework dan aktivitas yang relevan." },
        { name: "Pilih Methodology Framework", text: "Match framework ke tujuan: Tuckman model untuk tim baru (Forming→Storming→Norming→Performing), DiSC untuk personality awareness, Belbin untuk role optimization, atau custom hybrid untuk kebutuhan spesifik." },
        { name: "Tentukan Format & Durasi", text: "Format bergantung pada objective: Half-day (3-4 jam) untuk departemen kecil, Full-day untuk annual outing dengan team building element, 2-3 hari untuk deep immersion cohort. Outdoor untuk energy tinggi, indoor untuk strategic workshop." },
        { name: "Seleksi Vendor dengan Sertifikasi Fasilitator", text: "Pastikan vendor punya certified facilitator (minimal ICF ACC atau setara) — bukan crew outbound tanpa background organizational psychology. Minta portfolio case study dengan outcome metrics yang konkret." },
        { name: "Ukur Outcome dengan Survey Pre & Post", text: "Kirim baseline survey 1 minggu sebelum event (eNPS, communication index, trust score). Ulangi 1 minggu setelah event. Compare delta — ini data yang bisa di-present ke C-level sebagai bukti ROI program." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />

      <main>
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.caseStudyTeamBuilding.src}
              alt="Team building outbound di Bandung — adventure outdoor untuk tim corporate"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/95" />
          </div>

          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Team Building Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Methodology Guide · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Team Building Bandung 2026:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Methodology, 50+ activity, dan vendor recommended.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Bukan sekadar games. Structured experience design untuk hit
                specific team outcomes — komunikasi, trust, problem solving,
                atau alignment.
              </p>
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
                Team building di Bandung biasanya{" "}
                <strong>Rp 1,2–4 juta per pax</strong> tergantung durasi.
                Half-day (4 jam) outbound mulai{" "}
                <strong>Rp 1,2 jt/pax</strong>, full-day{" "}
                <strong>Rp 1,8 jt/pax</strong>, dan 2D1N dengan venue + activity
                mix <strong>Rp 2,5–4 jt/pax</strong>. Format paling efektif
                untuk corporate: <strong>hybrid 70% outbound + 30% workshop</strong>.
                Methodology yang kami pakai: Tuckman, DiSC, atau Belbin sesuai
                goal tim.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 1,2–4 jt/pax</Tag>
                <Tag>Pax: 15–300</Tag>
                <Tag>Durasi: Half/Full/2D1N</Tag>
                <Tag>Format: Outbound · Indoor · Hybrid</Tag>
              </div>
              <FreshnessSignal
                dateUpdated="2026-05-22"
                googleReviewCount={105}
              />
              <div className="mt-5 border-t border-divider pt-5">
                <p className="text-sm font-medium text-ink mb-3">Budget breakdown by duration (per pax, 100 pax):</p>
                <div className="not-prose overflow-x-auto -mx-3 md:mx-0">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-cream/40 border-b border-divider">
                        <th className="px-3 py-2 text-left font-medium">Format</th>
                        <th className="px-3 py-2 text-left font-medium">Per Pax</th>
                        <th className="px-3 py-2 text-left font-medium">Total (100 pax)</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b border-divider">
                        <td className="px-3 py-2 font-medium">Half-day (4 jam)</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 1,2–1,8 jt</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 120–180 jt</td>
                      </tr>
                      <tr className="border-b border-divider">
                        <td className="px-3 py-2 font-medium">Full-day (8 jam)</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 1,8–2,8 jt</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 180–280 jt</td>
                      </tr>
                      <tr className="border-b border-divider">
                        <td className="px-3 py-2 font-medium">2D1N</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 2,5–4 jt</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 250–400 jt</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium">3D2N (immersive)</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 4–6 jt</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 400–600 jt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request Free Proposal
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#activity"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat activity catalog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TOC */}
        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Table of contents</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#why-structured", "Mengapa team building harus structured"],
                ["#methodology", "3 methodology framework yang kami pakai"],
                ["#activity", "50+ activity catalog by category"],
                ["#format", "Outbound vs Indoor vs Hybrid"],
                ["#budget", "Estimasi budget per pax"],
                ["#measure", "Cara measure outcome team building"],
                ["#location", "Lokasi outdoor terbaik di Bandung"],
                ["#faq", "FAQ"],
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

        <Section
          id="why-structured"
          eyebrow="Section 1"
          title="Mengapa team building harus structured — bukan sekadar games"
        >
          <p>
            Sebagian besar team building yang &ldquo;biasa&rdquo; di Indonesia
            sebenarnya cuma rangkaian games yang fun tapi tidak terhubung ke
            outcome bisnis. 3 bulan kemudian, tim balik ke pola lama. Investment
            terbuang.
          </p>
          <p>
            <strong>Structured team building</strong> dimulai dari pertanyaan
            terbalik: <em>apa team outcome yang mau dicapai?</em> Bonding
            pasca-merger? Improve cross-department komunikasi? Build trust
            di tim baru? Develop leadership di middle management? Setiap goal
            butuh activity dan methodology yang berbeda. Berbeda dengan{" "}
            <Link href="/outing-kantor-bandung" className="text-brand font-medium hover:underline">
              outing kantor yang lebih casual dan fokus refresh + bonding
            </Link>
            .
          </p>
          <p>
            Dari 400+ event yang kami handle, pattern paling jelas: tim yang
            sebelum event punya specific goal yang articulated, post-event
            engagement score-nya naik signifikan dan retention impact bertahan
            6+ bulan. Tim yang event-nya generic, impact rata-rata cuma 2-4
            minggu.
          </p>
        </Section>

        <Section
          id="methodology"
          eyebrow="Section 2"
          title="3 methodology framework yang kami pakai"
        >
          <p>
            Bukan satu framework yang fit semua kebutuhan. Kami pilih sesuai
            goal dan maturity tim:
          </p>

          <div className="not-prose grid gap-5 mt-6">
            {METHODOLOGY.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl text-brand-deep tabular leading-none flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl text-ink">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-slate leading-relaxed">
                      {m.description}
                    </p>
                    <p className="mt-3 text-xs text-brand-deep font-medium">
                      → {m.useCase}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6">
            Kombinasi framework juga sering dipakai — DiSC awareness session di
            hari pertama, lalu Tuckman-aligned activity di hari kedua untuk
            push ke Performing stage.
          </p>
        </Section>

        <Section
          id="activity"
          eyebrow="Section 3"
          title="50+ activity catalog — by category"
        >
          <p>
            Catalog di bawah ini adalah yang kami tested dan deliver berulang
            kali. Setiap activity bisa di-scale up/down untuk pax dan durasi
            berbeda. Saat briefing, kami akan rekomendasi 4-6 activity yang
            paling fit dengan goal tim Anda.
          </p>

          <div className="not-prose grid gap-5 mt-6">
            {ACTIVITY_CATALOG.map((cat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6"
              >
                <h3 className="eyebrow-brand mb-4">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.activities.map((a, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-slate"
                    >
                      <span className="mt-0.5 text-brand">
                        <Check size={14} />
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="format"
          eyebrow="Section 4"
          title="Outbound vs Indoor vs Hybrid — pilih yang fit"
        >
          <div className="not-prose overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Aspek</th>
                  <th className="px-4 py-3 font-medium">Outbound</th>
                  <th className="px-4 py-3 font-medium">Indoor</th>
                  <th className="px-4 py-3 font-medium">Hybrid</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Energy level", "High", "Medium", "Balanced"],
                  ["Best for", "Bonding, energi", "Skill development", "Most goals"],
                  ["Weather risk", "Yes", "No", "Partial"],
                  ["Pax fit", "20-300", "10-200", "30-200"],
                  ["Budget index", "1x", "0,8x", "1,1x"],
                  ["Memorability", "Very high", "Medium", "High"],
                ].map(([aspect, ob, ind, hyb], i) => (
                  <tr key={i} className="border-b border-divider/60">
                    <td className="px-4 py-3 font-medium text-ink">{aspect}</td>
                    <td className="px-4 py-3 text-slate">{ob}</td>
                    <td className="px-4 py-3 text-slate">{ind}</td>
                    <td className="px-4 py-3 text-slate">{hyb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            <strong>Rekomendasi sweet spot:</strong> Hybrid format 70% outbound
            + 30% indoor workshop. Hybrid memberi varietas dalam 1 hari, cover
            different learning styles, dan punya backup plan kalau cuaca buruk.
          </p>
        </Section>

        <Section
          id="budget"
          eyebrow="Section 5"
          title="Team Building Cost Breakdown Bandung — Full Pricing 1D to 3D2N"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="mb-4">
                Pricing tergantung durasi, format (outbound/indoor/hybrid), dan methodology yang dipilih. Semua paket sudah include venue, F&B, activity guide, basic equipment, dan project management.
              </p>
              <div className="not-prose overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Durasi</th>
                  <th className="px-4 py-3 font-medium">Per pax</th>
                  <th className="px-4 py-3 font-medium">100 pax total</th>
                  <th className="px-4 py-3 font-medium">Includes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Half-day", "Rp 1,2–1,8 jt", "Rp 120–180 jt", "Venue, 1 meal, activity"],
                  ["Full-day", "Rp 1,8–2,8 jt", "Rp 180–280 jt", "Venue, 2 meals, multi-activity"],
                  ["2D1N", "Rp 2,5–4 jt", "Rp 250–400 jt", "Venue + lodging, F&B 3x, activity"],
                  ["3D2N (deep)", "Rp 4–6 jt", "Rp 400–600 jt", "Full immersive + facilitator"],
                ].map(([dur, perPax, total, inc], i) => (
                  <tr key={i} className="border-b border-divider/60">
                    <td className="px-4 py-3 font-medium text-ink">{dur}</td>
                    <td className="px-4 py-3 text-slate tabular">{perPax}</td>
                    <td className="px-4 py-3 text-slate tabular">{total}</td>
                    <td className="px-4 py-3 text-slate">{inc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

              <p className="mt-6">
                Untuk grup besar (200+ pax), economy of scale turunkan ke kisaran
                Rp 1,5-2,5 jt/pax untuk full-day. Senior facilitator (certified)
                tambah Rp 5-10 jt/event sebagai flat fee. Untuk event tahunan yang
                lebih formal dengan ceremony dan awarding, lihat{" "}
                <Link href="/corporate-gathering-bandung" className="text-brand font-medium hover:underline">
                  corporate gathering yang lebih formal dan expensive
                </Link>
                .
              </p>
            </div>
            <div className="md:col-span-1">
              <SearchIntentSnapshot
                pageName="Team Building Bandung"
                intents={[
                  { percentage: 60, description: "Budget planning (berapa cost)" },
                  { percentage: 25, description: "Activity options (pilihan kegiatan)" },
                  { percentage: 15, description: "Outcome measurement (gimana ukur hasilnya)" },
                ]}
                cta="Konsultasi gratis tentang program? Chat sekarang →"
              />
            </div>
          </div>
        </Section>

        <Section
          id="measure"
          eyebrow="Section 6"
          title="Cara measure outcome team building"
        >
          <p>
            Tanpa measurement, susah justify investment ke management.
            Framework kami:
          </p>

          <ol className="not-prose space-y-3 mt-5">
            {[
              {
                t: "Pre-event baseline (1 minggu sebelum)",
                d: "Survey 10-15 pertanyaan — engagement score, communication index, trust level, role clarity. Hasil jadi baseline untuk compare.",
              },
              {
                t: "In-event observation (during)",
                d: "Senior facilitator capture qualitative observation: participation level, dynamics shift, breakthrough moments. Notes ini masuk post-event report.",
              },
              {
                t: "Post-event survey (1 minggu setelah)",
                d: "Repeat baseline survey + 5 reflection questions. Compare delta — visible improvement biasanya 15-30% pada metrics utama.",
              },
              {
                t: "Long-term check (3 bulan setelah)",
                d: "Optional, tapi powerful. Check retention impact, cross-team collaboration frequency, voluntary attrition rate. Kalau structured benar, impact bertahan 6+ bulan.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="rounded-2xl border border-border bg-paper p-5"
              >
                <p className="font-medium text-ink">{item.t}</p>
                <p className="mt-1 text-sm text-slate">{item.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="location"
          eyebrow="Section 7"
          title="Lokasi team building outdoor terbaik di Bandung"
        >
          <div className="not-prose grid gap-4">
            {[
              {
                name: "Maribaya / Cikole",
                area: "Lembang utara",
                pros: "Accessible, terrain variasi (hutan pinus + open field), photogenic. Good untuk outbound Tier 1-2.",
              },
              {
                name: "Lembang Adventure Park",
                area: "Lembang",
                pros: "Multi-track outbound, high ropes, paintball. Adjacent dengan banyak villa/resort. Cocok 2D1N.",
              },
              {
                name: "Ciwidey Forest",
                area: "Ciwidey selatan",
                pros: "Feel lebih remote, nature deep, cool air. Untuk grup yang mau experience natural environment.",
              },
              {
                name: "Cikole Jayagiri",
                area: "Lembang barat",
                pros: "Premium outbound ground, dengan glamping option dan natural amphitheater untuk reflection circle.",
              },
              {
                name: "Pangalengan Tea Plantation",
                area: "Pangalengan",
                pros: "Unique scenery, cultural angle (tea picking workshop), quieter for reflective programs.",
              },
            ].map((loc) => (
              <div
                key={loc.name}
                className="rounded-2xl border border-border bg-paper p-5 md:p-6"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-display text-lg text-ink">{loc.name}</h3>
                  <span className="text-xs text-slate-mute">· {loc.area}</span>
                </div>
                <p className="text-sm text-slate">{loc.pros}</p>
              </div>
            ))}
          </div>
          <p className="mt-6">
            Untuk detail lengkap venue gathering Bandung dengan activity facilities, lihat{" "}
            <Link href="/venues-gathering-bandung" className="text-brand font-medium hover:underline">
              venue gathering Bandung recommendation →
            </Link>
          </p>
        </Section>

        {/* Competitor Comparison */}
        <Section
          id="specialist-vs-generic"
          eyebrow="Why Specialist Matters"
          title="Generic Travel Agent vs Corporate Specialist — Kenapa Perbedaannya Signifikan"
        >
          <p>
            Bandung punya banyak vendor team building — dari travel agent retail yang
            nyambi corporate, sampai specialist yang fokus 100% B2B corporate development.
            Perbedaan methodology dan outcome mereka sangat signifikan.
          </p>
          <CompetitorComparison />
          <p className="mt-6">
            <Link href="/specialist-vs-generic-eo" className="text-brand font-medium hover:underline">
              Baca full comparison: specialist team building facilitator vs generic outbound →
            </Link>
          </p>
        </Section>

        {/* Why 7Summits Corporate */}
        <section className="py-16 md:py-24 border-t border-divider bg-cream/20">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">Methodology-Driven Results</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
                Kenapa Team Building dengan 7Summits Corporate Deliver Measurable Outcomes
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  metric: "300+",
                  label: "Team building events",
                  detail: "Sejak 2018 — dari 20 pax department bonding hingga 500+ pax company-wide transformation program"
                },
                {
                  metric: "4.9★",
                  label: "Rated by HR/Finance teams",
                  detail: "Konsisten rekomendasi karena hasil terukur, bukan sekadar 'fun day'"
                },
                {
                  metric: "85%",
                  label: "Repeat engagement",
                  detail: "Perusahaan yang sudah kami facilitate, sering book lagi untuk program berbeda tahun berikutnya"
                },
                {
                  metric: "3",
                  label: "Proven frameworks",
                  detail: "Tuckman, DiSC, Belbin — bukan generic activity booking, tapi structured team development"
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
              Kami tidak cuma "arrange outbound". Kami <strong>design team development arc</strong> — dari assessment phase (DiSC profiling, baseline team metric), activity yang hit specific goals, hingga reflection session yang integrate insight. Post-event, kami measure impact (engagement lift, communication index change) — bukan sekadar photo album.
            </p>
          </div>
        </section>

        <Section
          id="team-dynamics"
          eyebrow="Section 7"
          title="Team Dynamics Assessment: Measure Communication & Trust Shift"
        >
          <p>Quality team building = measurable team dynamic improvement. Framework kami measure change across 5 key dimensions:</p>

          <div className="not-prose grid gap-5 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">5 Team Dynamics Metrics</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2"><span className="text-brand font-bold">1.</span><span><strong className="text-ink">Psychological safety:</strong> Team perception "I can speak up without fear of shame". Pre/post survey typical improvement +1-1.5 pts (5-scale)</span></li>
                <li className="flex gap-2"><span className="text-brand font-bold">2.</span><span><strong className="text-ink">Interdependence clarity:</strong> "I understand each team member's role & contribution". Improvement +1.2-1.5 pts typical</span></li>
                <li className="flex gap-2"><span className="text-brand font-bold">3.</span><span><strong className="text-ink">Communication directness:</strong> "We address conflict directly vs passively". Improvement +0.8-1.2 pts</span></li>
                <li className="flex gap-2"><span className="text-brand font-bold">4.</span><span><strong className="text-ink">Trust in leader:</strong> Manager trust score from their team improvement +1-1.5 pts</span></li>
                <li className="flex gap-2"><span className="text-brand font-bold">5.</span><span><strong className="text-ink">Collaboration velocity:</strong> "How fast can we make decision together?". Perception improvement +1.3 pts typical</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">Team Performance Indicators (30-90 Day Post-Building)</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2"><span className="text-brand font-bold">•</span><span><strong className="text-ink">Project delivery speed:</strong> Team cycle time for typical task improvement +15-20%</span></li>
                <li className="flex gap-2"><span className="text-brand font-bold">•</span><span><strong className="text-ink">Quality improvement:</strong> Rework/defect reduction improvement +10-15% typical</span></li>
                <li className="flex gap-2"><span className="text-brand font-bold">•</span><span><strong className="text-ink">Voluntary turnover:</strong> Team member attrition reduction -8-12% post-team building (vs baseline)</span></li>
                <li className="flex gap-2"><span className="text-brand font-bold">•</span><span><strong className="text-ink">Manager satisfaction:</strong> Manager perception of team capability improvement +1.2 pts (5-scale)</span></li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="team-cases"
          eyebrow="Section 8"
          title="Team Building Case Studies: Dynamics Change + Performance Lift"
        >
          <p>Real examples menunjukkan structured team building drive measurable dynamic improvement:</p>

          <div className="not-prone space-y-4 mt-8">
            <div className="rounded-2xl border border-border bg-cream/10 p-6">
              <h3 className="font-display text-xl text-ink mb-3">Case: Cross-Functional Product Team</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">CHALLENGE</p>
                  <p className="text-sm text-slate">8 pax (eng, design, product, marketing), silo communication, alignment issues</p>
                </div>
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">TEAM BUILDING</p>
                  <p className="text-sm text-slate">Communication workshop + collaborative challenge activity + team agreement signing</p>
                </div>
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">OUTCOMES (30-day)</p>
                  <p className="text-sm text-slate">+1.4 psychological safety, +1.5 collaboration clarity, +20% delivery speed, 0 attrition (vs 1 prior quarter)</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-cream/10 p-6">
              <h3 className="font-display text-xl text-ink mb-3">Case: Department Team Trust-Building</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">CHALLENGE</p>
                  <p className="text-sm text-slate">25 pax department, new manager, low trust baseline, conflict history</p>
                </div>
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">TEAM BUILDING</p>
                  <p className="text-sm text-slate">1D team building with trust-building exercise, conflict resolution workshop, team charter co-creation</p>
                </div>
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">OUTCOMES (90-day)</p>
                  <p className="text-sm text-slate">+1.6 trust in leader, +1.2 communication directness, +18% project velocity, -10% attrition vs prior quarter</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Our Process */}
        <Section
          id="our-process"
          eyebrow="Section 9: How We Work"
          title="Dari goal-setting sampai impact measurement: Proses team building methodology kami"
        >
          <ol className="not-prose space-y-4 mt-6">
            {[
              {
                step: "Goal Clarity Briefing (30 min)",
                desc: "Anda cerita team challenge & desired outcome (communication, trust, alignment, cross-functional bonding). Kami diagnose dan pilih framework yang fit.",
              },
              {
                step: "Pre-Event Assessment (Optional)",
                desc: "DiSC profiling (30 min workshop atau online), baseline team metric survey. Ini kasih data untuk activity design dan post-event comparison.",
              },
              {
                step: "Experience Design & Proposal (48 hours)",
                desc: "Activity sequence yang map to Tuckman/DiSC/Belbin framework. Proposal detail: objective, activity flow, facilitator credential, risk management, measurement plan.",
              },
              {
                step: "Facilitation Day(s)",
                desc: "Senior facilitator on-site penuh. Real-time group dynamic monitoring, activity adaptation kalau needed. Group reflection session (15-20 min setelah major activity).",
              },
              {
                step: "Post-Event Report & Debrief",
                desc: "Participant feedback survey + facilitator note. For premium programs: group debrief call 1 minggu setelah untuk integrate insight.",
              },
              {
                step: "Impact Measurement (90 days)",
                desc: "Follow-up survey to track behavior change and team performance shift. Optional: 360-feedback untuk high-commitment programs.",
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
            Setiap tahap di-document. Tidak ada surprise cost atau scope creep.
          </p>
        </Section>

        {/* Trust strip */}
        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                [STATS.eventsDelivered, "Events delivered"],
                [STATS.companiesTrusted, "Companies trusted"],
                [STATS.repeatBookingRate, "Repeat booking"],
                [STATS.avgResponseTime, "Avg response"],
              ].map(([num, label]) => (
                <div key={label} className="text-center md:text-left">
                  <p className="font-display text-3xl md:text-4xl text-ink tabular leading-none">
                    {num}
                  </p>
                  <p className="mt-2 text-sm text-slate">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="faq"
          eyebrow="FAQ"
          title="Pertanyaan yang sering ditanyakan HR"
        >
          <div className="not-prose space-y-3 mt-4">
            {FAQS.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg text-ink leading-snug">
                    {item.question}
                  </h3>
                  <span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </Section>

        {/* Related */}
        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B — bukan generic EO"],
                ["/outing-kantor-bandung", "Outing Kantor Bandung", "Panduan budget, itinerary, vendor"],
                ["/mice-organizer-bandung", "MICE Organizer Bandung", "Meeting, conference, hybrid event"],
                ["/methodology", "Our 5-Pillar Design Methodology", "Framework team building yang outcome-driven"],
                ["/specialist-vs-generic-eo", "Specialist vs Generic EO", "Kenapa B2B specialist lebih maksimal"],
              ].map(([href, title, desc]) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5"
                >
                  <h3 className="font-display text-lg text-ink leading-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">
                    Read guide
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-cream/40 border-t border-divider">
          <div className="container-1280 max-w-3xl">
            <AuthorCredibility
              role="Senior Facilitator"
              experience="6+ years"
              eventCount={300}
              lastReviewDate="May 2026"
            />
          </div>
        </section>

        <RelatedCaseStudies
          serviceSlugs={["company-gathering", "leadership-camp"]}
          title="Team building yang ngasih hasil nyata."
          description="Case studies pendekatan team building outcome-driven — dengan metrics outcome di tim, bukan cuma testimoni."
        />

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Siap deliver team building yang mengubah dinamika tim?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              <strong>Dari goal clarification hingga measurable impact</strong> — kami design experience yang deliver real team outcomes, bukan sekadar fun activities.
            </p>
            <p className="mt-4 text-sm text-cream/65">
              30-min discovery call → activity framework selection + pre-event assessment (optional) → facilitated program → impact measurement. Everything tracked, nothing hidden.
            </p>
            <ul className="mt-8 inline-grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Proven methodology
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Impact measurement
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Senior facilitator
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Get Design Proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("team building Bandung — methodology discovery")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"
              >
                <Whatsapp size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <StickyProposalBar
          message="Mau team building untuk tim Anda? Free methodology consultation."
          context="team building Bandung"
        />
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
    <section id={id} className="py-16 md:py-24 border-t border-divider">
      <div className="container-1280">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow-brand">{eyebrow}</span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
            {title}
          </h2>
        </div>
        <div className="max-w-3xl prose-content text-base md:text-lg text-slate leading-relaxed space-y-5 [&_p]:text-slate [&_strong]:text-ink">
          {children}
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-xs text-slate">
      {children}
    </span>
  );
}
