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
  speakableSchema,
} from "@/lib/schema";

const SLUG = "/corporate-gathering-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Corporate Gathering Bandung 2026: Annual Event Production untuk Perusahaan 100-800 Pax",
  description:
    "Corporate gathering Bandung 100–800 pax — awarding, opening ceremony, gala. Rp 3,5–7 jt/pax. 400+ events, 4.9/5. Proposal gratis 24 jam.",
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
    }),
    speakableSchema(["h1", ".quick-answer", "h2", ".faq-section"])
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
              <FreshnessSignal
                dateUpdated="2026-05-22"
                googleReviewCount={105}
              />
              <div className="mt-5 border-t border-divider pt-5">
                <p className="text-sm font-medium text-ink mb-3">Budget breakdown by tier (2D1N, Bandung):</p>
                <div className="not-prose overflow-x-auto -mx-3 md:mx-0">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-cream/40 border-b border-divider">
                        <th className="px-3 py-2 text-left font-medium">Tier</th>
                        <th className="px-3 py-2 text-left font-medium">Per Pax</th>
                        <th className="px-3 py-2 text-left font-medium">200 Pax Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b border-divider">
                        <td className="px-3 py-2 font-medium">Business Hotel</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 2,5–3,5 jt</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 500–700 jt</td>
                      </tr>
                      <tr className="border-b border-divider">
                        <td className="px-3 py-2 font-medium">Premium Hotel</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 3,5–5 jt</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 700 jt–1 M</td>
                      </tr>
                      <tr className="border-b border-divider">
                        <td className="px-3 py-2 font-medium">Luxury Resort</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 5–7 jt</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 1–1,4 M</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium">Bespoke Venue</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 7 jt+</td>
                        <td className="px-3 py-2 font-mono text-slate">Rp 1,4 M+</td>
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
            Kalau prioritas refresh + bonding informal, pilih{" "}
            <Link href="/outing-kantor-bandung" className="text-brand font-medium hover:underline">
              outing kantor
            </Link>
            . Beberapa perusahaan mix — corporate gathering setahun sekali +
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

          <p className="mt-6">
            Untuk venue gathering options yang lebih luas including villa, resort, dan location-specific recommendations, lihat{" "}
            <Link href="/venues-gathering-bandung" className="text-brand font-medium hover:underline">
              8 hotel ballroom terbaik dan venue gathering recommendations →
            </Link>
          </p>
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
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
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
            </div>
            <div className="md:col-span-1">
              <SearchIntentSnapshot
                pageName="Corporate Gathering Bandung"
                intents={[
                  { percentage: 70, description: "Budget breakdown (berapa cost per komponen)" },
                  { percentage: 20, description: "Vendor & venue (pilihan hotel terbaik)" },
                  { percentage: 10, description: "Timeline & preparation (berapa lama prep)" },
                ]}
                cta="Mau proposal gathering premium? Chat sekarang →"
              />
            </div>
          </div>
        </Section>

        <Section
          id="compare-tb"
          eyebrow="Quick Comparison"
          title="Corporate Gathering vs Team Building"
        >
          <p>
            Gathering adalah formal annual event dengan ceremony &amp; awarding.
            Untuk acara yang lebih fokus ke team outcomes tertentu (komunikasi,
            problem solving, trust building), lihat{" "}
            <Link href="/team-building-bandung" className="text-brand font-medium hover:underline">
              team building vs gathering — formal vs casual →
            </Link>
            . Team building bisa jadi komponen di dalam gathering, atau standalone activity.
          </p>
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

        {/* Competitor Comparison */}
        <Section
          id="specialist-vs-generic"
          eyebrow="Why Specialist Matters"
          title="Generic Travel Agent vs Corporate Specialist — Kenapa Perbedaannya Signifikan"
        >
          <p>
            Untuk event besar seperti corporate gathering, perbedaan antara bekerja
            dengan generic travel agent vs corporate specialist sangat signifikan — terutama
            dalam hal production quality, risk management, dan post-event accountability.
          </p>
          <CompetitorComparison />
          <p className="mt-6">
            <Link href="/specialist-vs-generic-eo" className="text-brand font-medium hover:underline">
              Baca full comparison: specialist vs generic organizer →
            </Link>
          </p>
        </Section>

        {/* Why 7Summits Corporate */}
        <section className="py-16 md:py-24 border-t border-divider bg-cream/20">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">Enterprise-Grade Delivery</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
                Kenapa 400+ Event dengan 7Summits Corporate Deliver Premium Results
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  metric: "400+",
                  label: "Events dari 8 pax hingga 1.200 pax",
                  detail: "Annual gathering, marquee celebration, multi-venue coordination — expertise untuk skala apapun"
                },
                {
                  metric: "4.9★",
                  label: "Konsisten di-rate oleh klien corporate",
                  detail: "85% repeat booking untuk event tahunan berikutnya — proof of satisfaction"
                },
                {
                  metric: "6+",
                  label: "Tahun tenure tim senior kami",
                  detail: "PM, facilitator, production lead — bukan freelancer rotating, tapi dedicated expertise"
                },
                {
                  metric: "1 PM",
                  label: "Per event dedicated on-site",
                  detail: "Day-of execution: on-site PM + crew, real-time coordination, contingency handling"
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
              Kami bukan "booking forwarding service". Kami <strong>design & execute</strong> your gathering sebagai strategic event — dari objective alignment, production quality, talent coordination, sampai documented post-event metrics. Risk management protocol yang mature. Insurance coverage lengkap. Contingency planning untuk worst-case scenario.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <Section
          id="our-process"
          eyebrow="How We Work"
          title="Dari brief sampai post-event impact: Proses gathering kami step-by-step"
        >
          <ol className="not-prose space-y-4 mt-6">
            {[
              {
                step: "Strategic Briefing (1 hour)",
                desc: "Business objective, audience, desired outcomes, budget, timeline. Kami align scope & baseline expectation.",
              },
              {
                step: "Concept Design & Proposal (1 week)",
                desc: "Event theme, venue option (min 3), production roadmap (AV/talent/decoration), detailed budget breakdown, risk register.",
              },
              {
                step: "Vendor Lock & Contract (Week 2-3)",
                desc: "Venue deposit signed, F&B menu locked, talent booking confirmed, AV vendor contract, insurance policy issued.",
              },
              {
                step: "Production Design & Rehearsal (Week 4-7)",
                desc: "Video production, decoration/setup design, MC script, program flow finalization, talent briefing, site walkthrough.",
              },
              {
                step: "Full Dress Rehearsal (Week 8)",
                desc: "On-site rehearsal dengan MC, AV crew, production team. Timing practice, contingency scenario walkthrough.",
              },
              {
                step: "Execution Day — On-Site PM + Team",
                desc: "Setup H-1, event day execution, 4-6 crew on-ground, real-time coordination, live problem solving, photo/video documentation.",
              },
              {
                step: "Post-Event Report & Debrief",
                desc: "Attendee feedback survey, curated media album, event highlight video, post-event debrief call dengan HR/leadership.",
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
            Setiap fase documented dengan checklist. Contract dan timeline clear. Tidak ada hidden cost atau last-minute surprises.
          </p>
        </Section>

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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B — kenapa ini matter untuk gathering"],
                ["/mice-organizer-bandung", "MICE Organizer Bandung", "Conference, exhibition, hybrid event"],
                ["/venue-gathering-bandung", "Venue Gathering Bandung", "20 hotel & resort ballroom terbaik"],
                ["/pricing", "Transparent Pricing Guide", "Budget tier gathering — dari intimate sampai gala 1000 pax"],
                ["/packages", "Featured Packages", "Ready-to-use gathering template untuk annual event"],
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
              Siap deliver annual gathering yang transform culture?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              <strong>Dari strategic planning hingga flawless execution</strong> — kami own the entire production. Dedicated PM on-site, risk management mature, outcome-tracked.
            </p>
            <p className="mt-4 text-sm text-cream/65">
              1-hour strategic brief → production roadmap + 3 venue options + budget breakdown dalam 1 minggu → full execution dari concept sampai post-event report.
            </p>
            <ul className="mt-8 inline-grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Enterprise-grade production
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Full on-site team
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Risk management protocol
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Get Production Proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("corporate gathering Bandung — production discussion")}
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

        <section className="py-16 md:py-24 bg-cream/40 border-t border-divider">
          <div className="container-1280 max-w-3xl">
            <AuthorCredibility
              role="Senior Planner"
              experience="6+ years"
              eventCount={400}
              lastReviewDate="May 2026"
            />
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
