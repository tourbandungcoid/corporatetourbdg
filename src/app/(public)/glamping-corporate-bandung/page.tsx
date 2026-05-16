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

const SLUG = "/glamping-corporate-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Glamping Corporate Bandung 2026: Premium Outdoor Experience untuk Tim yang Beda",
  description:
    "Glamping corporate Bandung — tenda safari premium, bonfire dinner, sunrise reflection. Rp 2,5–5,5 jt/pax, 30–80 pax. Outdoor experience paling memorable untuk team bonding. ⭐ 4.9/5 · Proposal 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Glamping Corporate Bandung — Unique Outdoor Experience",
    description:
      "Premium glamping untuk corporate event. Differentiator dari hotel atau villa biasa.",
    url: URL,
    type: "article",
    images: [{ url: IMAGES.packageGlamping.src, width: 1200, height: 630, alt: IMAGES.packageGlamping.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glamping Corporate Bandung — Premium Outdoor Experience 2026",
    description: "Glamping corporate Bandung. Tenda safari premium, bonfire dinner, sunrise. Rp 2,5–5,5 jt/pax.",
    images: [IMAGES.packageGlamping.src],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Apa itu glamping corporate dan beda dengan camping biasa?",
    answer:
      "Glamping = Glamorous Camping. Tenda dengan tempat tidur asli, AC/heater, listrik, kamar mandi en-suite, dan F&B fine-dining. Bukan tenda dome pramuka. Untuk corporate, glamping memberi outdoor immersive experience tanpa kompromi kenyamanan — peserta tidur nyenyak, tetap dapat memorable moment bonfire dinner dan sunrise view.",
  },
  {
    question: "Berapa biaya glamping corporate per pax di Bandung?",
    answer:
      "Range Rp 2,5–5,5 juta per pax untuk 1D2N standard. Breakdown: tenda safari premium + amenitas Rp 800rb–1,5 jt, F&B 3x fine-dining outdoor Rp 700rb–1,2 jt, activity (campfire, sunrise session, optional outbound) Rp 400-800rb, transport + PM Rp 600rb-1 jt. Premium tier dengan executive amenitas bisa Rp 6 jt+/pax.",
  },
  {
    question: "Berapa pax minimum dan maximum untuk glamping?",
    answer:
      "Minimum 20 pax untuk economic feasibility (cost setup tenda mostly fixed). Sweet spot 30-60 pax — paling memorable, intim, bonding deep. Maximum 80 pax pada most glamping site di Bandung. Untuk 100+ pax, lebih cocok villa multi-cluster atau resort.",
  },
  {
    question: "Glamping cocok untuk corporate event tipe apa?",
    answer:
      "Best fit: (1) Team bonding intimate, (2) Leadership retreat 1-2 hari, (3) Quarterly milestone celebration, (4) Annual gathering untuk startup atau scaleup yang mau experience berbeda, (5) Executive offsite premium dengan twist outdoor. Kurang cocok untuk: formal awarding gathering 300+ pax atau MICE event yang butuh ballroom production.",
  },
  {
    question: "Cuaca dingin saat malam — apakah peserta akan nyaman?",
    answer:
      "Iya, peserta akan nyaman. Tenda glamping di Lembang/Ciwidey dilengkapi heater elektrik atau bedcover tebal. Sleeping bag premium kalau perlu. Suhu malam 15-18°C — sejuk tapi nyaman. Banyak peserta yang justru appreciate suhu adem setelah kerja keras di kota. Hot drink station 24/7 always available.",
  },
  {
    question: "Bagaimana kalau hujan?",
    answer:
      "Tenda glamping premium di Bandung sudah heavy-duty + waterproof. Ada covered common area untuk activity indoor (mess hall, lounge). Schedule activity di-shift kalau perlu — pagi outdoor, sore indoor session. Plan B selalu siap untuk worst case. Statistically, Lembang hari hujan total <15% bulan kering (Mei-Oktober).",
  },
  {
    question: "Activity unik apa yang bisa dilakukan saat glamping corporate?",
    answer:
      "Yang signature: (1) Bonfire briefing session — senior leader address tim di bawah bintang, (2) Sunrise hike + reflection circle 5:30 AM, (3) Outdoor cooking competition team-based, (4) Stargazing dengan astronomer pendamping, (5) Forest meditation circle, (6) Bonfire storytelling — share leadership moments. Activity yang impossible di hotel/villa biasa.",
  },
  {
    question: "Glamping di area mana yang paling cocok untuk corporate?",
    answer:
      "Top 3: (1) Cikole Jayagiri — premium glamping ground dengan amphitheater natural, accessible dari Bandung, multi-zone untuk activity. (2) Ranca Upas — Ciwidey, dengan latar deer park, scenic. (3) Pangalengan glamping di tea plantation — paling unik, view 360° kebun teh, quieter. Kami punya direct partnership dengan 8+ glamping site di Bandung & sekitarnya.",
  },
  {
    question: "Apa yang harus dibawa peserta untuk glamping corporate?",
    answer:
      "Tidak ada yang ribet — packing list ringan: pakaian hangat untuk malam, sepatu nyaman (sneakers/running), jaket windbreaker, toiletries personal. Selebihnya disediakan (handuk, sabun, sandal, charger universal). Briefing pre-event include checklist detail untuk peserta. Untuk first-timer outdoor, kami selalu kasih confidence-building info.",
  },
  {
    question: "Apakah ada signal & wifi di glamping site?",
    answer:
      "Wi-Fi available di sebagian besar premium glamping site Bandung (Cikole, Maribaya, Pangalengan select properties). Sinyal 4G cukup baik di Lembang area, weaker di Ciwidey selatan. Kami biasanya design schedule yang minimize kebutuhan online — bagian dari magic glamping adalah disconnect from device, reconnect with team.",
  },
  {
    question:
      "Berapa lama prep glamping corporate Bandung?",
    answer:
      "Minimum 4 minggu untuk grup 30-50 pax. Untuk peak season (Juni-Agustus, Desember-Januari) lock minimum 6 minggu karena glamping site kapasitas terbatas dan demand tinggi. Custom build-out tenda khusus atau themed glamping butuh 6-8 minggu lead time.",
  },
];

const TENT_TYPES = [
  {
    name: "Safari Tent Standard",
    sleeps: "2 pax",
    feature: "Bed proper, en-suite bathroom, electricity, heater",
    price: "Rp 800rb–1,2 jt/pax/malam",
  },
  {
    name: "Premium Safari Tent",
    sleeps: "2-4 pax",
    feature: "King bed, lounge area, AC, mini bar, deck view",
    price: "Rp 1,2–1,8 jt/pax/malam",
  },
  {
    name: "Executive Dome / Bell Tent",
    sleeps: "2 pax",
    feature: "Luxury bedding, premium finishing, butler service available",
    price: "Rp 1,8–2,5 jt/pax/malam",
  },
  {
    name: "Group Dome (8-12 pax)",
    sleeps: "8-12 pax",
    feature: "Communal sleeping, lounge area, untuk team bonding intimate",
    price: "Rp 600-900rb/pax/malam",
  },
];

const ACTIVITY_UNIQUE = [
  {
    name: "Bonfire Strategic Briefing",
    description:
      "Senior leader (CEO, VP) address tim di bawah bintang dengan bonfire backdrop. Setting natural foster authenticity dan vulnerability — sharing strategy + vision dengan emotional resonance yang berbeda dari boardroom.",
    duration: "60-90 menit, malam Day 1",
  },
  {
    name: "Sunrise Hike + Reflection Circle",
    description:
      "5:30 AM gather, short hike 15-20 menit ke viewpoint dengan sunrise. Reflection circle dengan facilitator guide pertanyaan-pertanyaan deep tentang aspirasi 12 bulan ke depan. Memorable + transformative.",
    duration: "90 menit, Day 2 pagi",
  },
  {
    name: "Outdoor Cooking Competition",
    description:
      "Team-based cooking 4-6 kelompok di outdoor kitchen station. Theme bisa local Sundanese, Asian fusion, atau Western BBQ. Mengkombinasikan kompetisi, creativity, dan F&B sebagai bonding.",
    duration: "2,5 jam, includes plating + judging",
  },
  {
    name: "Stargazing + Story Circle",
    description:
      "Dengan astronomer professional sebagai pendamping di Bandung (clear sky pegunungan), peserta belajar konstelasi sambil sharing personal milestones tahun ini. Unique factor yang impossible di hotel.",
    duration: "75 menit, post-dinner Day 1",
  },
  {
    name: "Forest Meditation Circle",
    description:
      "Guided meditation oleh certified facilitator di tengah hutan pinus. Untuk tim yang mau experience contemplative side dari retreat. Cocok khususnya untuk leadership group atau post-major-project decompression.",
    duration: "45 menit, optional morning Day 2",
  },
];

export default function GlampingCorporateBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline:
        "Glamping Corporate Bandung 2026: Premium Outdoor Experience untuk Tim yang Beda",
      description:
        "Glamping untuk corporate event di Bandung — tenda safari premium, bonfire dinner, sunrise activity, dan vibe unique yang impossible di hotel/villa.",
      image: IMAGES.packageGlamping.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: SLUG,
      aboutService: "Glamping Corporate Bandung",
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Glamping Corporate Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Glamping Corporate Bandung",
      description:
        "Premium glamping corporate untuk team bonding intimate di Bandung & Lembang. Unique outdoor experience tanpa kompromi kenyamanan.",
      priceRange: "Rp 2.500.000 - Rp 6.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Merencanakan Glamping Corporate di Bandung",
      description: "5 langkah untuk mengorganisir glamping corporate yang premium dan memorable di Bandung & Lembang.",
      steps: [
        { name: "Pilih Site Glamping yang Tepat", text: "Site glamping corporate di Bandung tersedia di Lembang (view gunung, sejuk, 1.5-2 jam dari Jakarta), Pangalengan (lebih remote, danau, glamping tent premium), dan Ciwidey (dekat kawah putih, adventure feel). Pilih berdasarkan vibe yang ingin dibangun: cozy vs adventurous." },
        { name: "Konfirmasi Standar Kenyamanan", text: "Glamping bukan camping — pastikan tent/cabin punya: kasur proper dengan bedding quality, listrik + charging port, kamar mandi private atau semi-private, dan Wi-Fi basic. Untuk C-suite atau premium event, pilih glamping dengan butler service dan gourmet catering." },
        { name: "Rancang Program Malam Hari", text: "Malam hari adalah kekuatan unik glamping: bonfire session, stargazing (di area minim light pollution), outdoor dinner dengan live music acoustic, atau storytelling corporate values dalam suasana informal. Program malam sering jadi momen bonding terkuat dalam seluruh trip." },
        { name: "Siapkan Contingency Cuaca", text: "Bandung area sangat rentan hujan — terutama Oktober-Maret. Pastikan venue punya backup area indoor (gazebo besar atau tent marquee) yang cukup menampung seluruh peserta. Vendor profesional akan sertakan weather contingency plan dalam proposal." },
        { name: "Koordinasi Transport & Logistik Remote", text: "Site glamping sering di area yang tidak ramah kendaraan pribadi dalam jumlah banyak. Koordinasi shuttle dari titik kumpul (Jakarta atau Bandung kota) lebih efisien. Minta vendor sertakan logistics plan: parkir, baggage handling, dan medical access dari lokasi remote." },
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
              src={IMAGES.packageGlamping.src}
              alt="Glamping corporate di Bandung — premium outdoor experience untuk team bonding"
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
                <span className="text-paper/75">Glamping Corporate Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">
                Differentiator Guide · 2026
              </span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Glamping Corporate Bandung 2026:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Premium outdoor untuk tim yang beda.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Tenda safari premium dengan kasur asli, bonfire dinner di bawah
                bintang, sunrise reflection circle. Outdoor immersive tanpa
                kompromi kenyamanan — untuk tim 30-80 pax yang mau outing yang
                memorable, bukan generic.
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
                Glamping corporate di Bandung untuk{" "}
                <strong>1D2N (2 hari 1 malam) range Rp 2,5–5,5 juta/pax</strong>{" "}
                — sudah include tenda safari premium dengan kasur + en-suite
                bathroom, F&amp;B 3x fine-dining outdoor, bonfire dinner,
                sunrise activity, dan transport. Sweet spot pax{" "}
                <strong>30-60 orang</strong> untuk bonding paling memorable.
                Top location: <strong>Cikole, Ranca Upas, Pangalengan</strong>.
                Min prep 4 minggu.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 2,5–5,5 jt/pax</Tag>
                <Tag>Pax: 30–80</Tag>
                <Tag>Durasi: 1D2N standard</Tag>
                <Tag>Top areas: Cikole · Ranca Upas · Pangalengan</Tag>
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
                  href="#tents"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat tipe tenda
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
                ["#why-glamping", "Mengapa glamping > villa/hotel untuk bonding"],
                ["#what-is", "Glamping vs camping vs villa"],
                ["#tents", "4 tipe tenda untuk corporate"],
                ["#activity", "5 activity unik glamping corporate"],
                ["#sample", "Sample program 1D2N glamping"],
                ["#budget", "Estimasi budget per pax"],
                ["#locations", "Glamping site recommended"],
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
          id="why-glamping"
          eyebrow="Section 1"
          title="Mengapa glamping > villa/hotel untuk bonding intimate"
        >
          <p>
            Setiap year, ratusan corporate outing di Indonesia book hotel atau
            villa. Bagus untuk most case. <strong>Tapi</strong> ada momentum
            spesifik dimana glamping memberi outcome yang impossible di setting
            indoor: <strong>shared vulnerability di alam terbuka</strong>.
          </p>
          <p>
            Saat tim duduk mengelilingi bonfire dengan langit penuh bintang
            sebagai atap, ada sesuatu yang ber-shift di dynamic. CEO yang
            biasanya formal jadi lebih human. Junior yang biasanya pendiam jadi
            speak up. Sharing yang tidak akan terjadi di ruang meeting,
            terjadi natural di sini.
          </p>
          <p>
            Ini bukan magic — ini neurologi. Setting alam mengurangi cortisol
            (stress hormone), meningkatkan oxytocin (bonding hormone). Aktivitas
            outdoor + shared experience + screen-free environment = formula
            unik untuk team intimacy.
          </p>
          <p>
            Banyak founder/CEO yang post-glamping bilang: &ldquo;Saya kenal tim
            saya lebih baik dalam 36 jam dibanding 6 bulan di kantor.&rdquo;
            Itu yang glamping deliver yang hotel/villa tidak bisa.
          </p>
        </Section>

        <Section
          id="what-is"
          eyebrow="Section 2"
          title="Glamping vs camping pramuka vs villa — clarification"
        >
          <p>
            Banyak peserta first-timer khawatir dengan ekspektasi yang salah
            soal glamping. Mari clarify:
          </p>

          <div className="not-prose overflow-x-auto -mx-6 md:mx-0 mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Aspek</th>
                  <th className="px-4 py-3 font-medium">Glamping Premium</th>
                  <th className="px-4 py-3 font-medium">Camping Pramuka</th>
                  <th className="px-4 py-3 font-medium">Villa</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Tempat tidur", "Kasur proper + linen", "Sleeping bag di lantai", "Bed full"],
                  ["Kamar mandi", "En-suite proper", "Communal MCK", "En-suite"],
                  ["Power", "Listrik + heater", "Limited / no power", "Full power"],
                  ["F&B", "Fine-dining outdoor", "Self-cook / bekal", "Catering / chef"],
                  ["Outdoor immersion", "100%", "100%", "Limited"],
                  ["Privacy per peserta", "High", "Low (communal)", "Very high"],
                  ["Cocok untuk first-timer outdoor", "Yes", "Risky", "Always"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-divider/60">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-3 ${
                          j === 0 ? "font-medium text-ink" : "text-slate"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            Glamping <strong>premium</strong> (yang kami handle) = outdoor
            immersive feel <em>plus</em> hotel-level comfort. Bukan kompromi
            antara dua-nya — kombinasi terbaik.
          </p>
        </Section>

        <Section
          id="tents"
          eyebrow="Section 3"
          title="4 tipe tenda untuk corporate glamping di Bandung"
        >
          <div className="not-prose grid gap-5 mt-2">
            {TENT_TYPES.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6"
              >
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-3">
                  <h3 className="font-display text-xl text-ink">{t.name}</h3>
                  <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep tabular">
                    {t.price}
                  </span>
                </div>
                <p className="text-sm text-slate-mute mb-2">
                  Capacity: <strong className="text-ink">{t.sleeps}</strong>
                </p>
                <p className="text-sm text-slate">{t.feature}</p>
              </div>
            ))}
          </div>

          <p className="mt-6">
            Tipe paling sering kami spec untuk corporate group: Safari Tent
            Standard untuk peserta umum, Executive Dome untuk leadership atau
            VIP. Group Dome opsional untuk tim yang prefer communal sleeping
            (cocok untuk team bonding deep).
          </p>
        </Section>

        <Section
          id="activity"
          eyebrow="Section 4"
          title="5 activity unik yang cuma bisa di glamping corporate"
        >
          <p>
            Bukan agenda outbound generic. Activity yang memanfaatkan setting
            outdoor + intimate group + screen-free environment:
          </p>

          <div className="not-prose space-y-5 mt-6">
            {ACTIVITY_UNIQUE.map((a, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl text-brand-deep tabular leading-none flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-ink">{a.name}</h3>
                    <p className="mt-2 text-sm md:text-base text-slate leading-relaxed">
                      {a.description}
                    </p>
                    <p className="mt-3 text-xs text-brand-deep font-medium">
                      ⏱ {a.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="sample"
          eyebrow="Section 5"
          title="Sample program 1D2N glamping corporate"
        >
          <div className="not-prose space-y-5">
            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl text-ink mb-4">
                Day 1 — Arrival, Bonding, Bonfire Briefing
              </h3>
              <ol className="space-y-2 text-sm text-slate">
                {[
                  "14:00 — Pickup di Bandung kota / arrival site (kalau drive sendiri)",
                  "15:00 — Check-in tenda + welcome refreshment",
                  "16:00 — Camp orientation + icebreaker activity",
                  "17:00 — Free time (sunset photography, eksplorasi camp)",
                  "18:30 — Welcome dinner outdoor — campfire BBQ",
                  "20:00 — Bonfire Strategic Briefing (CEO/VP address)",
                  "21:30 — Stargazing + story circle (optional)",
                  "23:00 — Rest",
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
                Day 2 — Sunrise, Activity, Departure
              </h3>
              <ol className="space-y-2 text-sm text-slate">
                {[
                  "05:30 — Sunrise hike + reflection circle (optional)",
                  "07:30 — Breakfast outdoor",
                  "09:00 — Main team activity (outdoor cooking, drone race, atau outbound)",
                  "12:00 — Lunch + free interaction",
                  "13:30 — Closing session + commitment circle",
                  "14:30 — Pack up + final photo",
                  "15:00 — Departure",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-brand-deep">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p className="mt-6">
            Program di atas fleksibel — durasi tiap segment dan choice activity
            disesuaikan dengan goal dan demografi tim Anda saat briefing.
          </p>
        </Section>

        <Section
          id="budget"
          eyebrow="Section 6"
          title="Estimasi budget glamping corporate per pax"
        >
          <div className="not-prose overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Komponen</th>
                  <th className="px-4 py-3 font-medium">Standard</th>
                  <th className="px-4 py-3 font-medium">Premium</th>
                  <th className="px-4 py-3 font-medium">Executive</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tenda + amenitas (1 malam)", "Rp 800rb", "Rp 1,3 jt", "Rp 2 jt"],
                  ["F&B 3x outdoor", "Rp 700rb", "Rp 1 jt", "Rp 1,5 jt"],
                  ["Activity bundle", "Rp 400rb", "Rp 600rb", "Rp 900rb"],
                  ["Transport + PM", "Rp 600rb", "Rp 700rb", "Rp 800rb"],
                  ["Total per pax", "Rp 2,5 jt", "Rp 3,6 jt", "Rp 5,2 jt"],
                ].map(([cat, std, prem, exec], i) => (
                  <tr
                    key={i}
                    className={`border-b border-divider/60 ${
                      i === 4 ? "font-medium" : ""
                    }`}
                  >
                    <td
                      className={`px-4 py-3 ${
                        i === 4 ? "text-ink font-medium" : "text-ink"
                      }`}
                    >
                      {cat}
                    </td>
                    <td className="px-4 py-3 text-slate tabular">{std}</td>
                    <td className="px-4 py-3 text-slate tabular">{prem}</td>
                    <td className="px-4 py-3 text-slate tabular">{exec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            Untuk grup 50+ pax, economy of scale turunkan ke 90% dari pricing
            di atas. Custom decoration, themed setup, atau celebrity facilitator
            sebagai add-on (Rp 10-50 jt flat fee per event).
          </p>
        </Section>

        <Section
          id="locations"
          eyebrow="Section 7"
          title="Glamping site recommended di Bandung & sekitarnya"
        >
          <div className="not-prose grid gap-4">
            {[
              {
                name: "Cikole Jayagiri",
                area: "Lembang Utara",
                pros: "Premium glamping ground, natural amphitheater, multi-zone activity, kapasitas hingga 80 pax. Paling accessible dari Bandung kota.",
              },
              {
                name: "Ranca Upas",
                area: "Ciwidey",
                pros: "Deer park backdrop, photogenic, kapasitas medium (40-60 pax). Cocok untuk corporate yang prefer scenic differentiator.",
              },
              {
                name: "Glamping Tea Plantation",
                area: "Pangalengan",
                pros: "View 360° kebun teh, paling unik. Quieter feel, jarak dari Bandung 2 jam. Cocok untuk leadership retreat atau executive offsite.",
              },
              {
                name: "Maribaya Glamping",
                area: "Lembang Timur",
                pros: "Hutan pinus + air terjun dalam radius. Activity outdoor variasi (forest hiking, river cooling). Kapasitas 30-50 pax.",
              },
              {
                name: "Trizara Lembang",
                area: "Lembang Selatan",
                pros: "Modern glamping design, premium amenitas, dengan restaurant on-site. Cocok untuk corporate premium yang prefer modern aesthetic.",
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
        </Section>

        {/* Trust strip */}
        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                [STATS.eventsDelivered, "Events delivered"],
                ["8+", "Glamping sites partnership"],
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
          title="Pertanyaan yang sering ditanyakan HR tentang glamping corporate"
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
          <p className="mt-6 text-sm text-slate">
            Lihat juga:{" "}
            <Link href="/faq/location" className="text-brand-deep hover:underline">FAQ Lokasi & Venue</Link>
            {" · "}
            <Link href="/faq/logistics" className="text-brand-deep hover:underline">FAQ Logistik</Link>
            {" · "}
            <Link href="/faq/budget" className="text-brand-deep hover:underline">FAQ Budget & Investasi</Link>
          </p>
        </Section>

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["/panduan-corporate-outing-bandung", "Panduan Corporate Outing Bandung", "Master guide: jenis, budget, lokasi, vendor"],
                ["/venue-gathering-bandung", "Venue Gathering Bandung", "20 hotel, villa & resort terbaik Bandung"],
                ["/outing-kantor-bandung", "Outing Kantor Bandung", "Panduan budget, itinerary, vendor"],
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B untuk event outdoor"],
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

        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Mau outing yang tim Anda inget seumur hidup?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Glamping corporate adalah differentiator yang tim Anda akan
              ceritakan ke tim lain bertahun-tahun. Briefing call 15 menit
              untuk mulai design experience-nya.
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
                href={buildWaLink("glamping corporate Bandung")}
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
          serviceSlugs={["corporate-retreat", "company-gathering"]}
          title="Glamping & outdoor case studies."
        />

        <StickyProposalBar
          message="Bayangkan tim Anda bonding di bawah bintang. Free glamping proposal."
          context="glamping corporate Bandung"
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
