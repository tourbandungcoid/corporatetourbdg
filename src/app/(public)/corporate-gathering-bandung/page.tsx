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

const SLUG = "/corporate-gathering-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Corporate Gathering Bandung 2026: Annual Event Production untuk Perusahaan 100-800 Pax",
  description:
    "Corporate gathering Bandung 100–800 pax — awarding night, opening ceremony, gala dinner, Rp 3,5–7 jt/pax. 8 hotel ballroom rekomendasi, sample rundown 2D1N, production checklist. ⭐ 4.9/5 · Proposal gratis 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Corporate Gathering Bandung — Annual Event Production 2026",
    description:
      "Premium annual gathering untuk perusahaan dengan awarding ceremony, gala dinner, dan multi-day program.",
    url: URL,
    type: "article",
  },
};

const FAQS = [
  {
    question: "Apa beda corporate gathering dan outing kantor?",
    answer:
      "Corporate gathering = formal annual event dengan ceremony, awarding, dan company update — biasanya 2-3 hari di venue premium dengan ballroom. Outing kantor = informal refresh + team bonding, vibe casual, 1-2 hari di villa atau outdoor. Budget gathering biasanya 1,5-2x outing standard karena lebih banyak production elements.",
  },
  {
    question: "Berapa budget corporate gathering Bandung untuk 200 pax 2D1N?",
    answer:
      "Total Rp 700jt-1,4 miliar untuk 200 pax 2D1N premium (Rp 3,5-7 jt/pax). Breakdown: ballroom + accommodation di hotel bintang 4-5 Rp 250-450 jt, F&B gala dinner + breakfast/lunch Rp 200-350 jt, AV + stage + production Rp 100-200 jt, entertainment + MC Rp 80-150 jt, awarding production Rp 50-100 jt, plus contingency dan PM.",
  },
  {
    question: "Hotel atau venue ballroom terbaik untuk corporate gathering di Bandung?",
    answer:
      "8 hotel rekomendasi dengan ballroom 300+ pax: (1) Padma Hotel Lembang (premium mountain view, kapasitas 500), (2) Pullman Bandung Grand Central, (3) Hilton Bandung, (4) Trans Luxury Hotel, (5) Intercontinental Bandung Dago, (6) The Trans Resort Bandung, (7) Sheraton Bandung, (8) Holiday Inn Pasteur. Detail kapasitas + harga di-share saat proposal.",
  },
  {
    question: "Apa saja komponen wajib di corporate gathering premium?",
    answer:
      "6 komponen core: (1) Opening ceremony (MC formal, company video, CEO address), (2) Awarding night (kategori awards, trophy, photo moment), (3) Gala dinner (premium F&B 7-course atau buffet station), (4) Entertainment (live band, DJ, atau special performance), (5) Team activity day (lighter than team building, more bonding-focused), (6) Closing + photo session.",
  },
  {
    question: "Bagaimana sample rundown corporate gathering 2D1N?",
    answer:
      "Day 1: 14:00 arrival hotel, 16:00 welcome + opening ceremony, 18:00 city tour atau leisure, 19:30 welcome dinner casual, 21:00 entertainment night. Day 2: 09:00 team activity (paralel multi-track), 12:00 lunch + free time, 16:00 awarding ceremony pre-event prep, 19:00 gala dinner + awarding night + entertainment, 22:00 after-party. Day 3: 09:00 breakfast + closing recap, 11:00 group photo, 12:00 departure.",
  },
  {
    question: "Apakah awarding ceremony bisa di-custom theme?",
    answer:
      "Iya, 100%. Dari classic black-tie corporate, Hollywood movie awards style, Asian gala, modern minimalist, sampai unique themes (1920s Gatsby, retro Indonesia, futuristic, dll). Kami handle stage design, lighting, music cues, trophy custom, kategori announcement, MC, dan video bumper untuk setiap kategori awarding.",
  },
  {
    question: "Berapa pax ideal untuk corporate gathering?",
    answer:
      "Sweet spot 150-400 pax — engagement level tinggi, logistics manageable, intimacy masih terasa. Di bawah 100 pax: agenda gathering bisa terasa kosong, lebih cocok intimate retreat. Di atas 500 pax: butuh multi-zone setup, parallel activity tracks, dan production scale yang complex. Pernah handle 1.200 pax untuk annual gathering, doable tapi prep 8+ minggu.",
  },
  {
    question: "Berapa lama prep corporate gathering Bandung?",
    answer:
      "Minimum 6-8 minggu untuk grup 150-400 pax. Untuk 500+ pax atau peak season Oktober-Desember (banyak perusahaan annual gathering), lock minimum 12 minggu (3 bulan). Urgent prep 3-4 minggu masih bisa tapi akan kompromi venue choice + kemungkinan upgrade fee karena rush.",
  },
  {
    question: "Bagaimana penanganan entertainment dan talent?",
    answer:
      "Tiered: (1) MC profesional bilingual (Indonesia + English), (2) Live band cover atau original, (3) DJ untuk after-party, (4) Special performance (traditional dance, magician, comedian sesuai theme), (5) Celebrity guest kalau budget allow (additional Rp 30-200 jt). Kami handle booking, contract, technical rider, dan day-of coordination.",
  },
  {
    question: "Apakah bisa hybrid event (offline + virtual streaming)?",
    answer:
      "Iya. Hybrid corporate gathering increasingly common — peserta on-site + remote audience via streaming. Production tambahan: multi-camera live switching, dedicated streaming engineer, virtual audience interaction (Q&A, polls), broadcast-quality lighting. Cost tambahan Rp 80-200 jt untuk full hybrid production.",
  },
];

const COMPONENTS = [
  {
    name: "Opening Ceremony",
    description:
      "MC formal welcome, CEO/Founder keynote speech, company video, achievement recap year. 30-45 min, sets the tone untuk seluruh event.",
    cost: "Production Rp 25-60 jt",
  },
  {
    name: "Awarding Night",
    description:
      "Kategori awards (top performer, milestone, special recognition), trophy custom, photo moment per kategori. MC engaging, video bumper per kategori. Bisa themed.",
    cost: "Production Rp 50-150 jt + trophy custom Rp 10-30 jt",
  },
  {
    name: "Gala Dinner",
    description:
      "Premium F&B 7-course set menu atau live cooking buffet station. Plating, F&B service crew, table setting tema, centerpieces. Wine/beverage upgrade optional.",
    cost: "Rp 1-2 jt/pax",
  },
  {
    name: "Entertainment",
    description:
      "Live band cover (corporate-friendly), DJ untuk after-party, traditional performance (Saman, angklung), atau special talent (magician, comedian, illusionist).",
    cost: "Rp 30-150 jt tergantung talent",
  },
  {
    name: "Team Activity Day",
    description:
      "Lighter than team building proper — more bonding-focused, mass-participation friendly. Outbound multi-station atau cultural workshop. Day-time activity di antara opening + gala.",
    cost: "Rp 400-800rb/pax",
  },
  {
    name: "Closing + Photo Session",
    description:
      "Group photo profesional, drone shot, video recap montage. Highlight reel di-deliver post-event sebagai internal asset.",
    cost: "Rp 15-40 jt termasuk drone + video",
  },
];

export default function CorporateGatheringBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline:
        "Corporate Gathering Bandung 2026: Annual Event Production untuk Perusahaan 100-800 Pax",
      description:
        "Comprehensive guide corporate gathering — komponen wajib, sample rundown, hotel ballroom rekomendasi, dan budget breakdown.",
      image: IMAGES.packageAnnualGathering.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Corporate Gathering Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Corporate Gathering Bandung",
      description:
        "Premium annual corporate gathering dengan awarding ceremony, gala dinner, dan multi-day program di Bandung & Jawa Barat.",
      priceRange: "Rp 3.000.000 - Rp 7.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Organise Corporate Gathering di Bandung",
      description: "5 langkah perencanaan corporate gathering skala besar di Bandung — dari penentuan skala event hingga post-event report.",
      steps: [
        { name: "Tentukan Skala & Format Event", text: "Definisikan: jumlah pax (50-2.000), format (gala dinner, awarding night, annual meeting + gathering, atau hybrid), dan elemen wajib (production, awarding, entertainment). Skala dan format ini menentukan venue type dan budget tier." },
        { name: "Lock Venue & Tanggal", text: "Untuk 200+ pax, booking venue minimal 3-6 bulan sebelumnya. Hotel ballroom Bandung untuk indoor premium (kapasitas 200-1.500 pax). Villa cluster atau resort untuk format outdoor yang lebih intimate. Peak season (Q4, Lebaran) — booking 6 bulan ke depan." },
        { name: "Rancang Rundown & Program", text: "Rundown gathering tipikal: registrasi + welcome coffee, opening ceremony, sesi pleno (company update, awarding), entertainment break, gala dinner, closing. Durasi 8-10 jam untuk 1-day full event, atau 3D2N untuk format multi-hari." },
        { name: "Setup AV Production & Awarding Ceremony", text: "Untuk 200+ pax, AV production adalah investasi wajib: LED screen, sound system, lighting, MC professional. Awarding ceremony butuh rundown terpisah — trophies, certificate design, photography & videography coverage." },
        { name: "Eksekusi + Post-Event Report", text: "On-site: dedicated event coordinator per 50 pax. Post-event: vendor specialist kirim report lengkap (attendance, NPS survey, foto/video bank, cost reconciliation, recommendation untuk event berikutnya) dalam 5-7 hari kerja." },
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
              src={IMAGES.packageAnnualGathering.src}
              alt="Corporate gathering annual di Bandung — awarding ceremony"
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
                <span className="text-paper/75">Corporate Gathering Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Annual Event Guide · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Corporate Gathering Bandung 2026:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Annual event production 100-800 pax.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Formal annual event dengan awarding ceremony, gala dinner, dan
                multi-day program. 6 komponen wajib, 8 hotel ballroom
                recommended, plus sample rundown 2D1N.
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
                Corporate gathering di Bandung untuk{" "}
                <strong>200 pax 2D1N premium total Rp 700jt-1,4 miliar</strong>{" "}
                (per pax <strong>Rp 3,5-7 juta</strong>). Sudah include hotel
                bintang 4-5 + ballroom, awarding ceremony, gala dinner, live
                entertainment, team activity day, dan production AV. Sweet
                spot pax <strong>150-400</strong>. Min prep <strong>6-8 minggu</strong>{" "}
                (12 minggu untuk peak season Okt-Des).
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 3-7 jt/pax</Tag>
                <Tag>Pax: 100-800</Tag>
                <Tag>Durasi: 2D1N – 3D2N</Tag>
                <Tag>Venue: Hotel ballroom premium</Tag>
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
                  href="#components"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat 6 komponen wajib
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
                ["#vs-outing", "Corporate gathering vs outing kantor"],
                ["#components", "6 komponen wajib gathering premium"],
                ["#rundown", "Sample rundown 2D1N"],
                ["#venues", "8 hotel ballroom recommended"],
                ["#awarding", "Awarding ceremony — themes & production"],
                ["#budget", "Budget breakdown by component"],
                ["#timeline", "Prep timeline 6-12 minggu"],
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
          id="vs-outing"
          eyebrow="Section 1"
          title="Corporate gathering vs outing kantor — kapan pilih mana?"
        >
          <p>
            Banyak HR confused: company ini butuh gathering atau outing?
            Decision-nya tergantung <strong>tone, agenda, dan momentum</strong>{" "}
            event yang mau di-deliver.
          </p>

          <div className="not-prose overflow-x-auto -mx-6 md:mx-0 mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Aspek</th>
                  <th className="px-4 py-3 font-medium">Corporate Gathering</th>
                  <th className="px-4 py-3 font-medium">Outing Kantor</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Tone", "Formal, professional, festive", "Casual, fun, relaxed"],
                  ["Agenda anchor", "Awarding + ceremony", "Team activity + bonding"],
                  ["Venue", "Hotel ballroom premium", "Villa, glamping, outdoor"],
                  ["F&B", "Gala dinner 7-course / buffet station", "Casual buffet / BBQ"],
                  ["Production scale", "Heavy (AV, stage, lighting)", "Light"],
                  ["Frequency", "Annual / milestone-based", "Quarterly / semi-annual"],
                  ["Budget/pax", "Rp 3-7 jt", "Rp 1,8-5 jt"],
                ].map(([asp, cg, ok], i) => (
                  <tr key={i} className="border-b border-divider/60">
                    <td className="px-4 py-3 font-medium text-ink">{asp}</td>
                    <td className="px-4 py-3 text-slate">{cg}</td>
                    <td className="px-4 py-3 text-slate">{ok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            <strong>Rule of thumb:</strong> kalau ada momen besar (anniversary,
            milestone, post-IPO, awarding tahunan), pilih corporate gathering.
            Kalau prioritas refresh + bonding informal, pilih outing kantor.
            Beberapa perusahaan mix — corporate gathering setahun sekali +
            outing kantor quarterly.
          </p>
        </Section>

        <Section
          id="components"
          eyebrow="Section 2"
          title="6 komponen wajib di corporate gathering premium"
        >
          <p>
            Bukan semua harus ada, tapi minimum 4 dari 6 ini hadir di gathering
            yang &ldquo;feel premium.&rdquo; Decision component mix di-base ke
            goal event:
          </p>

          <div className="not-prose space-y-4 mt-6">
            {COMPONENTS.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6 md:p-7"
              >
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-2">
                  <h3 className="font-display text-xl text-ink">
                    {i + 1}. {c.name}
                  </h3>
                  <span className="text-xs text-slate-mute font-medium">
                    {c.cost}
                  </span>
                </div>
                <p className="text-sm md:text-base text-slate leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="rundown"
          eyebrow="Section 3"
          title="Sample rundown corporate gathering 2D1N"
        >
          <div className="not-prose grid gap-5 mt-2">
            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">
                Day 1 — Arrival, Opening, Welcome Dinner
              </h3>
              <ol className="space-y-2 text-sm text-slate">
                {[
                  "13:00 — Group transport pickup (multi-bus dari Jakarta atau venue)",
                  "15:00 — Hotel arrival + check-in (welcome drink di lobby)",
                  "16:00 — Opening ceremony di ballroom (MC, company video, CEO address) — 45 min",
                  "17:00 — Free time / city tour optional",
                  "19:00 — Welcome dinner casual (buffet) di ballroom atau outdoor venue",
                  "20:30 — Entertainment night (live band cover, ice-breaker games)",
                  "22:00 — After-party DJ atau wind-down lounge",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-brand-deep">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">
                Day 2 — Team Activity, Gala Dinner, Awarding Night
              </h3>
              <ol className="space-y-2 text-sm text-slate">
                {[
                  "07:00 — Breakfast buffet",
                  "09:00 — Team activity day (outbond multi-station atau cultural workshop)",
                  "12:00 — Lunch + free time",
                  "14:00 — Free afternoon (spa, leisure, photo session optional)",
                  "17:00 — Get-ready time (dress code formal/themed)",
                  "19:00 — Gala dinner + awarding ceremony (3-4 jam main event)",
                  "22:30 — After-party + farewell drinks",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-brand-deep">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">
                Day 3 — Closing + Departure
              </h3>
              <ol className="space-y-2 text-sm text-slate">
                {[
                  "08:00 — Late breakfast",
                  "10:00 — Closing recap session (CEO appreciation + commitment for next year)",
                  "11:00 — Group photo professional + drone shot",
                  "12:00 — Lunch + final goodbye",
                  "13:00 — Departure (multi-bus convoy back)",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-brand-deep">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        <Section
          id="venues"
          eyebrow="Section 4"
          title="8 hotel ballroom recommended untuk corporate gathering"
        >
          <p>
            Untuk corporate gathering 150+ pax dengan production tinggi, hotel
            ballroom adalah pilihan default. 8 rekomendasi top dari 40+
            partnership kami:
          </p>

          <div className="not-prose grid gap-4 mt-6">
            {[
              ["Padma Hotel Lembang", "500 pax", "Mountain view, premium service, 5-star"],
              ["Pullman Bandung Grand Central", "400 pax", "City center, modern ballroom"],
              ["Hilton Bandung", "350 pax", "Iconic location, premium amenities"],
              ["Trans Luxury Hotel", "600 pax", "Largest ballroom Bandung, full production"],
              ["Intercontinental Dago", "450 pax", "Strategic Dago area, premium feel"],
              ["The Trans Resort", "300 pax", "Resort-style, outdoor + ballroom combo"],
              ["Sheraton Bandung", "350 pax", "Established brand, reliable service"],
              ["Holiday Inn Pasteur", "300 pax", "Mid-premium tier, accessible location"],
            ].map(([name, cap, note]) => (
              <div
                key={name}
                className="rounded-xl border border-border bg-paper p-5 grid grid-cols-12 gap-4 items-baseline"
              >
                <h3 className="col-span-12 md:col-span-4 font-display text-base text-ink">
                  {name}
                </h3>
                <span className="col-span-4 md:col-span-2 text-xs text-brand-deep font-medium tabular">
                  Up to {cap}
                </span>
                <p className="col-span-8 md:col-span-6 text-sm text-slate">{note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="awarding"
          eyebrow="Section 5"
          title="Awarding ceremony — themes, production, dan execution"
        >
          <p>
            Awarding night adalah <strong>peak moment</strong> dari corporate
            gathering. Kalau di-execute well, jadi event yang di-share peserta
            ke social media + word-of-mouth. Kalau generic, momentum hilang.
          </p>

          <p>
            <strong>5 theme paling sering kami deliver:</strong>
          </p>

          <ol className="not-prose space-y-3 mt-4">
            {[
              {
                t: "Classic Black-Tie Corporate",
                d: "Dress code formal, stage minimalist elegant, trophy crystal. Cocok untuk perusahaan banking, consulting, atau enterprise yang prefer timeless feel.",
              },
              {
                t: "Hollywood Movie Awards Style",
                d: "Red carpet entrance, photo wall logo perusahaan, MC charismatic dengan teleprompter, kategori awards di-frame seperti Oscar. Engagement tinggi.",
              },
              {
                t: "Modern Minimalist",
                d: "Stage clean, lighting LED warna brand, video transitions sharp, trophy contemporary design. Cocok untuk tech atau startup.",
              },
              {
                t: "Cultural Indonesia",
                d: "Backdrop traditional Indonesian art, dress code batik/kebaya, MC bilingual dengan touch traditional. Powerful untuk perusahaan dengan identity Indonesia kuat.",
              },
              {
                t: "Themed Decade (1920s Gatsby, 80s Disco, dll)",
                d: "Full immersive theme — venue decoration, dress code, music selection, food style. Memorable banget tapi butuh prep tambahan + budget production lebih.",
              },
            ].map((th, i) => (
              <li
                key={i}
                className="rounded-2xl border border-border bg-paper p-5"
              >
                <p className="font-medium text-ink">{th.t}</p>
                <p className="mt-1 text-sm text-slate">{th.d}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6">
            Untuk awarding kategori, kami biasanya rekomendasi 6-8 kategori
            yang punya angle berbeda — bukan cuma &ldquo;top performer.&rdquo;
            Mix antara performance-based, longevity-based, cultural-based
            (e.g. &ldquo;Best Mentor Award,&rdquo; &ldquo;Above &amp;
            Beyond&rdquo;), dan team-based. Setiap awardee deserve photo moment.
          </p>
        </Section>

        <Section
          id="budget"
          eyebrow="Section 6"
          title="Budget breakdown corporate gathering by component"
        >
          <p>
            Untuk 200 pax 2D1N premium total Rp 700jt-1,4 miliar, breakdown
            per komponen:
          </p>

          <div className="not-prose overflow-x-auto -mx-6 md:mx-0 mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Komponen</th>
                  <th className="px-4 py-3 font-medium">Total</th>
                  <th className="px-4 py-3 font-medium">% of total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hotel + accommodation (200 pax 2 nights)", "Rp 250-450 jt", "30-35%"],
                  ["F&B (gala + breakfast + lunch + welcome dinner)", "Rp 200-350 jt", "25-28%"],
                  ["AV + stage + production", "Rp 100-200 jt", "12-15%"],
                  ["Entertainment + MC + talent", "Rp 80-150 jt", "10-12%"],
                  ["Awarding production + trophy custom", "Rp 60-130 jt", "8-10%"],
                  ["Team activity day", "Rp 80-160 jt", "8-12%"],
                  ["Transportation + logistics", "Rp 50-100 jt", "6-8%"],
                  ["Project management + contingency", "Rp 80-160 jt", "10%"],
                ].map(([comp, cost, pct], i) => (
                  <tr key={i} className="border-b border-divider/60">
                    <td className="px-4 py-3 text-ink">{comp}</td>
                    <td className="px-4 py-3 text-slate tabular">{cost}</td>
                    <td className="px-4 py-3 text-slate tabular">{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="timeline"
          eyebrow="Section 7"
          title="Prep timeline — 6-12 minggu dari brief ke event day"
        >
          <ol className="not-prose space-y-3">
            {[
              {
                t: "Minggu 1-2: Brief + concept design",
                d: "Briefing call, scope finalization, theme proposal, venue shortlist, budget breakdown.",
              },
              {
                t: "Minggu 3-4: Vendor lock + contract",
                d: "Hotel deposit, F&B menu lock, talent booking, AV vendor contract, awarding production brief.",
              },
              {
                t: "Minggu 5-7: Production + design execution",
                d: "Decoration design, video production, trophy custom, MC briefing, content development.",
              },
              {
                t: "Minggu 8: Rehearsal + final coordination",
                d: "Site visit, rehearsal AV + MC + program flow, contingency plan finalization.",
              },
              {
                t: "Day-of: Execution + on-site team",
                d: "Senior PM + 4-6 coordinators on-site. Setup H-1, event execution, real-time problem solving.",
              },
            ].map((p, i) => (
              <li
                key={i}
                className="rounded-2xl border border-border bg-paper p-5"
              >
                <p className="font-medium text-ink">{p.t}</p>
                <p className="mt-1 text-sm text-slate">{p.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                [STATS.eventsDelivered, "Events delivered"],
                [STATS.largestEventPax, "Largest gathering pax"],
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

        <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan HR">
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B — kenapa ini matter untuk gathering"],
                ["/mice-organizer-bandung", "MICE Organizer Bandung", "Conference, exhibition, hybrid event"],
                ["/venue-gathering-bandung", "Venue Gathering Bandung", "20 hotel & resort ballroom terbaik"],
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
              Mau bikin annual gathering yang memorable?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Briefing call 15 menit → kami propose theme, venue, dan
              awarding production yang fit perusahaan Anda.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Request Proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("corporate gathering Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <RelatedCaseStudies
          serviceSlugs={["company-gathering", "annual-company-trip"]}
          title="Corporate gathering kami sudah eksekusi."
        />

        <StickyProposalBar
          message="Cari vendor corporate gathering Bandung? Free production proposal."
          context="corporate gathering Bandung"
        />
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
