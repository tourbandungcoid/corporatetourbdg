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
} from "@/lib/schema";

const SLUG = "/employee-gathering-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Employee Gathering Bandung 2026: Engagement & Retention Event untuk HR",
  description:
    "Employee gathering Bandung yang impact ke engagement & retention — bukan refresh casual biasa. Range Rp 1,5–3,5 jt/pax. Cross-generational design, ROI measurement framework, dan 5 format yang terbukti efektif untuk Indonesia B2B.",
  alternates: { canonical: URL },
  openGraph: {
    title:
      "Employee Gathering Bandung — Engagement Event untuk HR yang Outcome-Driven",
    description:
      "Employee gathering yang measurable: engagement, retention, cultural reinforcement.",
    url: URL,
    type: "article",
  },
};

const FAQS = [
  {
    question:
      "Berapa biaya employee gathering per pax di Bandung?",
    answer:
      "Range Rp 1,5–3,5 juta/pax untuk paket 1D2N atau 2D1N standar. Half-day employee gathering ringan mulai Rp 800rb/pax. Full-day Rp 1,5 jt/pax. 2D1N standard Rp 2,5–3,5 jt/pax. Termasuk venue, F&B, activity, transportation lokal, dan project management. Variasi tergantung tier venue dan kompleksitas activity.",
  },
  {
    question: "Apa beda employee gathering dan corporate gathering?",
    answer:
      "Corporate gathering = perspektif perusahaan, formal annual event dengan awarding ceremony, biasanya 2-3 hari di venue premium dengan ballroom production. Employee gathering = perspektif HR, fokus pada engagement + bonding + retention impact, vibe casual-professional, biasanya 1-2 hari di villa atau resort. Budget employee gathering biasanya 50-70% dari corporate gathering.",
  },
  {
    question:
      "Bagaimana mengukur ROI employee gathering ke retention?",
    answer:
      "3-step framework: (1) Pre-event baseline survey — engagement score (eNPS), retention intent question, communication quality index. (2) Post-event survey 1 minggu setelahnya (delta dari baseline). (3) Long-term check 6 bulan kemudian: voluntary attrition rate dari attendee vs non-attendee. Untuk gathering yang structured benar, dampak retention bertahan 6-12 bulan dengan attrition rate turun 5-15%.",
  },
  {
    question:
      "Format employee gathering yang paling efektif untuk Gen-Z + Millennial?",
    answer:
      "Cross-generational design crucial. 5 format efektif: (1) Hybrid outdoor + indoor (energi + reflective time), (2) Multiple parallel activity tracks (pilihan sesuai preferensi), (3) Bonding circle informal di sore hari, (4) Optional adventure activity untuk yang tertarik fitness, (5) Cultural workshop yang Indonesian-rooted (relevant ke identitas). Hindari format single-stream 8 jam — engagement drop drastis untuk Gen-Z.",
  },
  {
    question:
      "Activity bonding paling cocok untuk employee gathering?",
    answer:
      "Top picks dari 400+ events: (1) Cooking competition team-based — engaging, F&B sebagai bonding, (2) Cultural workshop (batik, angklung, traditional dance) — Indonesian identity reinforcement, (3) Photo quest themed around venue, (4) Casual outbound Tier 1 (low-impact, family-friendly), (5) Bonfire circle di malam dengan storytelling guided. Hindari activity yang too competitive — employee gathering bukan team building proper.",
  },
  {
    question: "Berapa pax ideal untuk employee gathering?",
    answer:
      "Sweet spot 50-200 pax. Di bawah 30 pax, vibe gathering kurang energetic. Di atas 250 pax, intimacy hilang dan butuh production scale lebih besar (jadi lebih cocok corporate gathering format). Untuk perusahaan dengan 500+ employee, kami biasa rekomendasi split — multiple smaller employee gathering per departemen atau cohort, lebih frequent.",
  },
  {
    question:
      "Lokasi terbaik untuk employee gathering di Bandung?",
    answer:
      "5 area top: (1) Lembang — paling accessible, banyak venue mid-tier, hawa sejuk. (2) Ciwidey — adventure-friendly tapi tidak premium expensive. (3) Pangalengan — quiet, scenic untuk gathering yang prefer reflective vibe. (4) Bandung city — hybrid hotel + outdoor, accessible untuk peserta yang prefer urban. (5) Subang — geothermal experience + outbound ground. Pilihan area di-base ke vibe yang HR mau project.",
  },
  {
    question:
      "Bagaimana penanganan peserta dengan disabilitas atau kondisi khusus?",
    answer:
      "Inclusive design wajib. Pre-event medical questionnaire identify special needs. Venue selection check accessibility (kursi roda, dietary restrictions, sensory-friendly options). Activity modification — setiap activity ada alternatif untuk peserta yang punya mobility issue, kondisi kesehatan, atau preferensi religius. Equipment khusus (wheelchair-accessible bus, dietary catering halal/vegetarian/gluten-free) di-arrange tanpa stigma.",
  },
  {
    question:
      "Apakah employee gathering bisa di-kombinasikan dengan family day?",
    answer:
      "Iya, format hybrid 'employee + family day' increasingly popular. Setup: Day 1 employee-only (bonding, internal activity), Day 2 family day (keluarga + anak ikut, activity inclusive). Atau format reversed. Logistics tambahan: child-friendly activity track, family-style dining, photographer untuk family memories. Cost tambahan Rp 300-600rb/family member (anak + spouse).",
  },
  {
    question: "Berapa lama prep employee gathering Bandung?",
    answer:
      "Minimum 3-4 minggu untuk grup 50-100 pax di single venue. 5-6 minggu untuk grup 150-200 pax. Untuk peak season (Juni-Agustus untuk family day, atau Q4 untuk year-end gathering) lock minimum 6-8 minggu — venue mid-tier juga competitive di periode itu.",
  },
];

const FORMATS = [
  {
    name: "Casual Bonding 1-Day",
    description:
      "Half-day light activity + lunch + reflection circle. Format paling accessible. Untuk quarterly gathering atau team refresh.",
    pax: "30-100",
    duration: "6-8 jam",
    budget: "Rp 800rb-1,5 jt/pax",
  },
  {
    name: "Standard 2D1N Gathering",
    description:
      "Day 1 arrival + bonding activity + welcome dinner. Day 2 main activity + closing. Format default untuk most employee gathering.",
    pax: "50-200",
    duration: "2 hari 1 malam",
    budget: "Rp 2,5-3,5 jt/pax",
  },
  {
    name: "Family Day Corporate",
    description:
      "Employee + keluarga + anak. Multi-track activity paralel (anak-anak vs dewasa), family-style dining, photo moments.",
    pax: "80-400 incl family",
    duration: "1 hari",
    budget: "Rp 1,5-2,5 jt/employee + Rp 400-700rb/family member",
  },
  {
    name: "Cross-Generational Mix",
    description:
      "Hybrid design dengan parallel activity tracks: high-energy outbound, reflective workshop, cultural session — peserta self-select.",
    pax: "60-150",
    duration: "2 hari 1 malam",
    budget: "Rp 2,8-4 jt/pax",
  },
  {
    name: "Departmental Cohort",
    description:
      "Per-departemen gathering 20-40 pax. Lebih intim, focused goal department. Bisa fleksibel waktu (tidak harus seluruh perusahaan bareng).",
    pax: "20-40",
    duration: "1-2 hari",
    budget: "Rp 2-3,2 jt/pax",
  },
];

export default function EmployeeGatheringBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline:
        "Employee Gathering Bandung 2026: Engagement & Retention Event untuk HR",
      description:
        "Employee gathering Bandung yang outcome-driven — measurable impact ke engagement, retention, dan cultural reinforcement.",
      image: IMAGES.caseStudyExecutive.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Employee Gathering Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Employee Gathering Bandung",
      description:
        "Employee gathering corporate untuk engagement, bonding, dan retention impact di Bandung & Jawa Barat.",
      priceRange: "Rp 1.500.000 - Rp 3.500.000 per pax",
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.caseStudyExecutive.src}
              alt="Employee gathering corporate di Bandung — engagement-focused event"
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
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Employee Gathering Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">HR Guide · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Employee Gathering Bandung 2026:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Engagement event yang measurable.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Untuk HR yang butuh employee gathering yang dampak ke
                engagement + retention — bukan refresh casual yang lupa 3 bulan
                kemudian. 5 format efektif, ROI measurement, dan
                cross-generational design.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Employee gathering Bandung untuk{" "}
                <strong>1D2N atau 2D1N range Rp 1,5–3,5 juta/pax</strong>{" "}
                tergantung format. Untuk HR yang fokus pada{" "}
                <strong>engagement + retention impact</strong> (bukan refresh
                generic), kami design dengan{" "}
                <strong>cross-generational format</strong>, multiple parallel
                tracks, dan <strong>ROI measurement framework</strong>{" "}
                (pre/post survey + 6-month retention check). Sweet spot pax{" "}
                <strong>50-200</strong>. Min prep 3-4 minggu.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 1,5-3,5 jt/pax</Tag>
                <Tag>Pax: 50-200</Tag>
                <Tag>Goal: engagement + retention</Tag>
                <Tag>5 format options</Tag>
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
                  href="#formats"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat 5 format
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Table of contents</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#hr-perspective", "Mengapa HR perspective berbeda"],
                ["#formats", "5 format employee gathering"],
                ["#roi", "ROI measurement framework"],
                ["#generation", "Cross-generational design"],
                ["#activity", "Activity bonding rekomendasi"],
                ["#sample", "Sample agenda 2D1N"],
                ["#inclusive", "Inclusive event design"],
                ["#faq", "FAQ"],
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

        <Section
          id="hr-perspective"
          eyebrow="Section 1"
          title="HR perspective berbeda dari corporate perspective"
        >
          <p>
            Corporate gathering biasanya di-design dari perusahaan
            (CEO/founder/management): apa cerita yang mau di-deliver, awarding
            siapa, milestone apa di-celebrate. Employee gathering dari{" "}
            <strong>HR perspective</strong>: apa employee experience yang mau
            di-create, engagement score apa yang mau di-improve, retention
            risk apa yang mau di-mitigasi.
          </p>
          <p>
            Beda fundamental ini berdampak ke <strong>3 design decision</strong>:
          </p>

          <ol className="not-prose space-y-3 mt-5">
            {[
              {
                t: "Content allocation: 70% bonding, 30% information",
                d: "Corporate gathering biasa 50/50. Employee gathering harus heavy bonding — keynote/award maksimal 1 segmen.",
              },
              {
                t: "Activity preference: opt-in over mandatory",
                d: "Multiple parallel tracks dimana peserta self-select. Forced participation lebih bahaya untuk retention dari benefit-nya.",
              },
              {
                t: "Measurable outcome: eNPS + retention",
                d: "Bukan attendance count. Pre-post engagement survey, retention intent measurement, 6-month attrition compare.",
              },
            ].map((item, i) => (
              <li key={i} className="rounded-2xl border border-border bg-paper p-5">
                <p className="font-medium text-ink">{item.t}</p>
                <p className="mt-1 text-sm text-slate">{item.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="formats"
          eyebrow="Section 2"
          title="5 format employee gathering yang efektif"
        >
          <div className="not-prose grid gap-5 mt-4">
            {FORMATS.map((f, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-6 md:p-7">
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-3">
                  <h3 className="font-display text-xl text-ink">
                    {i + 1}. {f.name}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep tabular">
                    {f.budget}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-mute mb-3">
                  <span>Pax: <strong className="text-ink">{f.pax}</strong></span>
                  <span>Durasi: <strong className="text-ink">{f.duration}</strong></span>
                </div>
                <p className="text-sm md:text-base text-slate leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="roi"
          eyebrow="Section 3"
          title="ROI measurement framework — justify investment ke management"
        >
          <p>
            Banyak HR struggle justify employee gathering ke CFO karena tidak
            ada hard number. Framework di bawah deliver measurable outcome
            yang bisa di-translate ke retention saving (turnover cost = 6-12
            bulan salary per resignation).
          </p>

          <div className="not-prose space-y-4 mt-6">
            {[
              {
                t: "Pre-event baseline (1 minggu sebelum)",
                d: "Survey 10 pertanyaan ke peserta: eNPS, retention intent, communication quality, leadership trust, role clarity. Hasil jadi baseline.",
              },
              {
                t: "Post-event survey (1 minggu setelah)",
                d: "Repeat 10 pertanyaan baseline + 3 reflection questions specific event. Compare delta — typical improvement 15-30%.",
              },
              {
                t: "Long-term retention check (6 bulan)",
                d: "Compare voluntary attrition rate: peserta vs non-peserta dalam same role/department. Untuk structured event, attendee attrition turun 5-15% vs non-attendee.",
              },
              {
                t: "Translate ke financial outcome",
                d: "Attrition reduction × salary × turnover multiplier = retention saving. Untuk 100 peserta gathering, kalau saved 10% attrition (10 person) × Rp 8 jt/bulan × 9 bulan turnover cost = Rp 720 juta savings. ROI gathering Rp 250 juta gathering = 2.9x return.",
              },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-5">
                <p className="font-medium text-ink">Step {i + 1}: {s.t}</p>
                <p className="mt-1 text-sm text-slate">{s.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="generation"
          eyebrow="Section 4"
          title="Cross-generational design — Gen-Z + Millennial + Gen-X"
        >
          <p>
            Workforce Indonesia sekarang mix 3 generasi. Each has different preferences. Design
            yang accommodate semua adalah challenge dan kesempatan:
          </p>

          <div className="not-prose overflow-x-auto -mx-6 md:mx-0 mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Generasi</th>
                  <th className="px-4 py-3 font-medium">Prefer</th>
                  <th className="px-4 py-3 font-medium">Avoid</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Gen-Z (born 1997+)", "Short blocks, choice/variety, photo moments, social media-able", "Long mandatory sessions, top-down talks, no autonomy"],
                  ["Millennial (1981-1996)", "Experiential, bonding deeper, meaningful, optional reflective", "Forced fun, generic templates"],
                  ["Gen-X (1965-1980)", "Pragmatic outcome, less performative, comfort, sambil keluarga ada", "Excessive social media performance, late-night party"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-divider/60">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-ink" : "text-slate"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            <strong>Design solution: parallel tracks.</strong> Day 2 morning
            split jadi 3 simultaneous activity — high-energy outbound,
            reflective workshop, cultural session. Peserta self-select. Hasil:
            engagement tinggi across all generations, dan natural mingling
            antara tracks saat lunch.
          </p>
        </Section>

        <Section
          id="activity"
          eyebrow="Section 5"
          title="Activity bonding rekomendasi untuk employee gathering"
        >
          <div className="not-prose grid gap-3 mt-4 sm:grid-cols-2">
            {[
              { n: "Cooking Competition Team-Based", d: "F&B sebagai bonding, kompetisi yang inclusive" },
              { n: "Cultural Workshop (Batik/Angklung)", d: "Indonesian identity reinforcement, accessible all ages" },
              { n: "Photo Quest Themed", d: "Around venue, low-impact, generates social content" },
              { n: "Bonfire Circle + Storytelling", d: "Reflective moment di malam, intimate sharing" },
              { n: "Outbound Tier 1 Light", d: "Low-impact, family-friendly, ice-breaker effective" },
              { n: "Trivia Night Company", d: "Quiz about company history + inside jokes" },
              { n: "Art Therapy Group Canvas", d: "Collaborative painting, contemplative" },
              { n: "Sundanese Cultural Evening", d: "Traditional music + dinner adat" },
            ].map((a, i) => (
              <div key={i} className="rounded-xl border border-border bg-paper p-5">
                <h3 className="font-medium text-ink">{a.n}</h3>
                <p className="mt-1 text-sm text-slate">{a.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="sample"
          eyebrow="Section 6"
          title="Sample agenda 2D1N employee gathering"
        >
          <div className="not-prose space-y-5">
            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">Day 1 — Arrival, Light Activity, Welcome Dinner</h3>
              <ol className="space-y-2 text-sm text-slate">
                {[
                  "14:00 — Arrival venue + welcome refreshment",
                  "15:00 — Check-in + welcome video",
                  "15:30 — Icebreaker session light (45 min)",
                  "16:30 — Photo quest themed (parallel)",
                  "17:30 — Free time / leisure",
                  "19:00 — Welcome dinner casual (cultural Sundanese theme)",
                  "20:30 — Bonfire circle + storytelling guided",
                  "22:00 — Wind-down / free time",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3"><span className="text-brand-deep">·</span><span>{s}</span></li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">Day 2 — Parallel Activity, Lunch, Closing</h3>
              <ol className="space-y-2 text-sm text-slate">
                {[
                  "07:00 — Breakfast",
                  "08:30 — Parallel activity tracks (peserta self-select):",
                  "  • Track A: Outbound light (high-energy)",
                  "  • Track B: Cultural workshop (reflective)",
                  "  • Track C: Cooking competition (creative)",
                  "11:30 — Lunch + free interaction",
                  "13:00 — Closing recap session + appreciation circle",
                  "14:00 — Photo group + departure",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3"><span className="text-brand-deep">·</span><span>{s}</span></li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        <Section
          id="inclusive"
          eyebrow="Section 7"
          title="Inclusive event design — accommodate special needs"
        >
          <p>
            Inclusive event = setiap peserta merasa dihargai dan accommodated.
            Tanpa stigma, tanpa awkward arrangement.
          </p>

          <ul className="not-prose space-y-3 mt-5">
            {[
              "Pre-event medical questionnaire — identify mobility issues, allergies, dietary restrictions",
              "Venue accessibility check — kursi roda access, ramp, accessible bathroom",
              "F&B accommodation — halal, vegetarian, vegan, gluten-free options sebagai parallel menu (bukan special order)",
              "Activity modification — setiap activity ada alternatif untuk peserta dengan kondisi tertentu",
              "Religious accommodation — prayer time + room provided, dietary observance respected",
              "Language accessibility — bilingual MC kalau ada peserta expat atau international",
              "Anonymous opt-out mechanism — peserta bisa skip activity tanpa diumumkan",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-paper p-4">
                <span className="mt-0.5 text-brand"><Check size={16} /></span>
                <span className="text-sm text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

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
                  <p className="font-display text-3xl md:text-4xl text-ink tabular leading-none">{num}</p>
                  <p className="mt-2 text-sm text-slate">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan HR">
          <div className="not-prose space-y-3 mt-4">
            {FAQS.map((item, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors">
                <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg text-ink leading-snug">{item.question}</h3>
                  <span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">{item.answer}</div>
              </details>
            ))}
          </div>
        </Section>

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["/corporate-gathering-bandung", "Corporate Gathering", "Formal annual event production"],
                ["/outing-kantor-bandung", "Outing Kantor", "Generic outing format"],
                ["/team-building-bandung", "Team Building", "Outcome-driven activity catalog"],
              ].map(([href, title, desc]) => (
                <Link key={href} href={href} className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5">
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
              Mau employee gathering yang ROI-measurable?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Briefing call 15 menit → kami design format + measurement
              framework untuk justify investment ke management.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">
                Request Proposal<ArrowRight size={16} />
              </Link>
              <a href={buildWaLink("employee gathering Bandung")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">
                <Whatsapp size={16} />WhatsApp
              </a>
            </div>
          </div>
        </section>

        <StickyProposalBar message="Cari vendor employee gathering yang outcome-driven?" context="employee gathering Bandung" />
      </main>
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 md:py-24 border-t border-divider">
      <div className="container-1280">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow-brand">{eyebrow}</span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">{title}</h2>
        </div>
        <div className="max-w-3xl prose-content text-base md:text-lg text-slate leading-relaxed space-y-5 [&_p]:text-slate [&_strong]:text-ink">{children}</div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full bg-cream/60 border border-border px-3 py-1 text-xs text-slate">{children}</span>;
}
