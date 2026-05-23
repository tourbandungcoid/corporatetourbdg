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
import { FreshnessSignal } from "@/components/FreshnessSignal";
import { AuthorCredibility } from "@/components/AuthorCredibility";
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

const SLUG = "/villa-gathering-bandung";
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title:
    "Villa Gathering Bandung 2026: 12 Villa Premium untuk Outing 50–300 Pax",
  description:
    "Villa gathering Bandung — 12 villa premium capacity 30–300 pax, Rp 25–80 jt/2D1N. Private exclusive, direct partnership (tanpa reseller). ⭐ 4.9/5 · Proposal + rekomendasi villa dalam 24 jam.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Villa Gathering Bandung — 12 Villa Premium 2026",
    description:
      "Private villa setting untuk corporate outing 30-300 pax di Bandung & Lembang.",
    url: URL,
    type: "article",
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Berapa biaya villa gathering di Bandung untuk 100 pax 2D1N?",
    answer:
      "Total range Rp 280–550 juta untuk 100 pax 2D1N. Breakdown: rental villa (kapasitas 100 pax atau 2-3 villa cluster) Rp 40–80 jt, F&B 3x Rp 100–180 jt, activity Rp 30–60 jt, transport + project management Rp 50–80 jt, plus contingency. Per pax: Rp 2,8–5,5 jt.",
  },
  {
    question: "Apa keuntungan villa private vs hotel untuk corporate gathering?",
    answer:
      "Villa private memberi: (1) Privacy 100% — tidak share dengan tamu lain, (2) Customization tinggi — vibe, layout, F&B style bisa disesuaikan, (3) Bonding lebih intim — common area shared, (4) Bisa multi-day tanpa formalitas hotel, (5) Photogenic untuk content. Trade-off: F&B harus di-arrange (kami handle), tidak ada built-in concierge 24/7.",
  },
  {
    question: "Bagaimana cara setup multi-villa untuk 200+ pax?",
    answer:
      "Untuk grup 200-300 pax, kami biasa booking 2-4 villa berdekatan (radius 500m–2km) sebagai cluster. Common activity di main villa terbesar atau dedicated activity ground. Transport antar villa via shuttle. Dedicated logistics coordinator memastikan flow smooth. F&B central kitchen atau dedicated catering masing-masing villa.",
  },
  {
    question: "Villa terbaik di Lembang untuk corporate gathering?",
    answer:
      "Top picks dari 60+ partnership kami: (1) Villa Estate Lembang — kapasitas 100-150 pax, infinity pool, mountain view. (2) Villa private heritage — kapasitas 60-80 pax, traditional Sundanese architecture. (3) Modern cluster villa — 2-3 unit modern Scandinavian, total 80-120 pax. Detail per venue di-share saat proposal sesuai requirement spesifik Anda.",
  },
  {
    question: "Apakah villa private bisa untuk gathering ratusan orang?",
    answer:
      "Iya, dengan multi-villa setup. Pernah handle 280 pax pakai 4 villa cluster di area Pangalengan — common activity di outdoor amphitheater, dinner di main villa, lodging tersebar 4 lokasi. Logistic lebih kompleks dari hotel, tapi outcome bonding lebih kuat. Recommend min 6 minggu prep time untuk multi-villa coordination.",
  },
  {
    question: "Apa yang harus dicheck sebelum book villa untuk corporate?",
    answer:
      "10-point checklist: (1) Kapasitas overnight vs daytime, (2) Common area capacity untuk 100% pax, (3) Parking capacity, (4) Kitchen access untuk catering, (5) Power supply (outbond outdoor 200+ pax butuh genset), (6) Insurance & liability, (7) Sound permit (untuk live music/MC), (8) Activity ground proximity, (9) Medical & emergency access, (10) Wi-Fi capability.",
  },
  {
    question: "F&B di villa — catering atau in-house chef?",
    answer:
      "Tergantung villa. Sebagian villa premium punya in-house chef (lebih mahal, kualitas terjamin). Sebagian lain accommodate external catering (lebih flexible budget). Kami biasa rekomendasi mix — main meals catered profesional, ada cooking station optional untuk bonding (BBQ night, dimsum bar). F&B per pax range Rp 800rb–1,5 jt untuk 3 meals 2D1N premium.",
  },
  {
    question: "Berapa lama prep untuk villa gathering di Bandung?",
    answer:
      "Minimum 4 minggu untuk grup 50-100 pax di single villa. Multi-villa setup (150+ pax) butuh 6-8 minggu minimum karena coordination kompleks: lock multi-venue, dedicated catering, multi-transport, dan logistics planning yang lebih detail.",
  },
  {
    question: "Apakah villa di Bandung pet-friendly untuk family day?",
    answer:
      "Limited — sebagian villa accept pet, sebagian tidak. Kalau family day include hewan, kasih tau saat briefing — kami filter ke villa yang pet-friendly. Recommended untuk pet-corporate event: villa di Pangalengan atau Subang yang punya outdoor terbuka.",
  },
  {
    question: "Bisa villa-gathering dengan budget Rp 1,5 jt/pax?",
    answer:
      "Bisa, dengan kompromise. Pakai villa standard (bukan premium estate), F&B Indonesian buffet (bukan fine dining), activity simple (bukan high-production outbound). Pax 50-80 dengan single villa 2D1N. Untuk premium feel lebih kuat, recommended starting Rp 2,2 jt/pax.",
  },
];

const VILLA_TIERS = [
  {
    tier: "Standard",
    capacity: "30-60 pax overnight",
    feature: "Functional layout, kitchen, basic amenities",
    rental: "Rp 25–40 jt / 2D1N",
    bestFor: "Department bonding, mid-size team",
  },
  {
    tier: "Premium Estate",
    capacity: "60-120 pax overnight",
    feature: "Pool, large lawn, premium F&B kitchen, concierge",
    rental: "Rp 50–80 jt / 2D1N",
    bestFor: "Annual gathering, full company outing",
  },
  {
    tier: "Multi-Villa Cluster",
    capacity: "150-300 pax (multi unit)",
    feature: "2-4 villa berdekatan, common activity ground",
    rental: "Rp 80–180 jt / 2D1N total",
    bestFor: "Large annual event, multi-team gathering",
  },
  {
    tier: "Bespoke Heritage",
    capacity: "20-50 pax",
    feature: "Sundanese architecture, exclusive private, premium service",
    rental: "Rp 60–100 jt / 2D1N",
    bestFor: "Executive offsite, leadership retreat",
  },
];

const COMPARISON = [
  ["Privacy", "100% private", "Shared dengan tamu lain"],
  ["Customization", "High — vibe & layout flexible", "Limited — standardized"],
  ["F&B control", "Custom catering possible", "In-house menu utama"],
  ["Pax flexibility", "Multi-villa setup untuk besar", "Ballroom capacity fixed"],
  ["Bonding depth", "Deeper (shared common area)", "Surface-level (separate rooms)"],
  ["Logistics complexity", "Higher", "Lower (built-in concierge)"],
  ["Photogenic factor", "Very high", "Standard"],
];

export default function VillaGatheringBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline:
        "Villa Gathering Bandung 2026: 12 Villa Premium untuk Outing 50-300 Pax",
      description:
        "Villa private setting untuk corporate gathering di Bandung & Lembang — capacity, fasilitas, dan estimasi sewa.",
      image: IMAGES.packageGlamping.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Villa Gathering Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Villa Gathering Bandung",
      description:
        "Corporate gathering di villa private premium di Bandung & Lembang dengan capacity 30-300 pax.",
      priceRange: "Rp 2.200.000 - Rp 6.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Memilih Villa untuk Corporate Gathering di Bandung",
      description: "5 langkah untuk menemukan dan memesan villa yang tepat untuk gathering perusahaan di Bandung & Lembang.",
      steps: [
        { name: "Tentukan Kapasitas & Kebutuhan Ruang", text: "Hitung kebutuhan: jumlah kamar tidur (1 kamar per 2-3 peserta untuk overnight), kapasitas ruang makan (harus bisa duduk semua bersamaan), dan area outdoor untuk aktivitas. Villa cluster Lembang biasanya tersedia untuk 30-80 pax; resort villa untuk 100-300 pax." },
        { name: "Verifikasi Fasilitas Wajib", text: "Checklist minimum villa corporate: ruang meeting dengan proyektor + screen, sound system outdoor, F&B service (in-house catering atau partnership dengan katering halal bersertifikat), pool/BBQ area untuk bonding, dan parkir memadai atau akses shuttle." },
        { name: "Cek Aksesibilitas & Waktu Tempuh", text: "Dari Jakarta: Lembang via tol Cipularang 2.5-3 jam (peak Jumat bisa 4+ jam). Ciwidey 3-3.5 jam. Pertimbangkan departure time: Jumat sore vs Sabtu pagi sangat mempengaruhi arrival condition peserta. Vendor berpengalaman akan sarankan departure timing optimal." },
        { name: "Konfirmasi Kapasitas Ekslusif", text: "Untuk corporate event, pastikan villa di-booking secara eksklusif — tidak shared dengan tamu lain. Booking eksklusif memastikan privasi, fleksibilitas schedule, dan tidak ada gangguan kebisingan dari pihak luar selama program berlangsung." },
        { name: "Book Jauh di Muka untuk Peak Season", text: "Villa premium Lembang dan Ciwidey sold out 2-4 bulan sebelum peak season (Lebaran, akhir tahun, April-Mei). Untuk event Q4 (Oktober-Desember): mulai survey dan booking dari Juli-Agustus. Deposit 30-50% untuk lock exclusive booking." },
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
              alt="Villa gathering corporate di Bandung — private setting untuk team outing"
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
                <span className="text-paper/75">Villa Gathering Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Venue Guide · 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Villa Gathering Bandung 2026:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Private setting untuk outing 50–300 pax.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                4 tier villa, multi-villa setup untuk grup besar, dan 10-point
                pre-booking checklist. Kami punya direct partnership dengan
                60+ villa di Bandung &amp; Lembang.
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
                Villa gathering di Bandung untuk{" "}
                <strong>100 pax 2D1N total Rp 280–550 juta</strong> (per pax{" "}
                <strong>Rp 2,8–5,5 juta</strong>). Sewa villa{" "}
                <strong>Rp 25–80 jt/2D1N</strong> tergantung tier (standard,
                premium estate, multi-villa cluster). Untuk grup{" "}
                <strong>200+ pax</strong>, kami pakai{" "}
                <strong>multi-villa cluster</strong> — 2-4 villa berdekatan
                dengan common activity ground.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Pax: 30-300</Tag>
                <Tag>Tier: Standard / Premium / Multi</Tag>
                <Tag>Sewa villa: Rp 25-80 jt/2D1N</Tag>
                <Tag>Per pax: Rp 2,2-6 jt</Tag>
              </div>
              <FreshnessSignal
                dateUpdated="2026-05-22"
                googleReviewCount={105}
              />
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request Free Proposal
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#tiers"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat 4 villa tier
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-ink mb-4">Estimasi budget per tier (per pax, 2D1N):</p>
              <div className="not-prose overflow-x-auto -mx-3 md:mx-0">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-cream/40 border-b border-divider">
                      <th className="px-3 py-2 text-left font-medium">Villa Tier</th>
                      <th className="px-3 py-2 text-left font-medium">Per Pax</th>
                      <th className="px-3 py-2 text-left font-medium">Total (100 pax)</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Standard Villa (30-60 pax)</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 2,2–3 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 220–300 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Premium Villa Estate (60-120 pax)</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 3,5–4,5 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 350–450 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Exclusive / Multi-Villa Cluster (100-300 pax)</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 4,5–5,5 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 450–550 jt</td>
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
              {[
                ["#why-villa", "Mengapa villa untuk corporate gathering"],
                ["#tiers", "4 tier villa di Bandung"],
                ["#multi-villa", "Multi-villa setup untuk grup besar"],
                ["#vs-hotel", "Villa vs hotel — perbandingan"],
                ["#fb", "F&B di villa: catering atau chef in-house"],
                ["#checklist", "10-point pre-booking checklist"],
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
          id="why-villa"
          eyebrow="Section 1"
          title="Mengapa villa private jadi pilihan top untuk corporate gathering"
        >
          <p>
            Villa private menempati niche khusus dalam corporate event venue —
            di antara hotel formal dan glamping wild. Untuk gathering yang
            butuh balance antara <strong>privacy + comfort + customization</strong>,
            villa hampir selalu pilihan terbaik.
          </p>
          <p>
            <strong>Privacy 100%:</strong> tidak share dengan tamu lain. Buat
            corporate yang punya internal celebration (anniversary milestone,
            sensitive strategy session, awarding internal), privacy ini matters.
          </p>
          <p>
            <strong>Customization:</strong> vibe villa bisa di-adjust dari
            casual chill sampai semi-formal corporate dinner. Layout fleksibel,
            decoration possible, sound system custom — semua doable.
          </p>
          <p>
            <strong>Bonding mendalam:</strong> shared common area (living room,
            pool, garden) memaksa interaction natural. Berbeda dengan hotel
            dimana tim balik ke kamar masing-masing setelah agenda formal.
          </p>
        </Section>

        <Section
          id="tiers"
          eyebrow="Section 2"
          title="4 tier villa untuk corporate gathering di Bandung"
        >
          <div className="not-prose grid gap-5 mt-2">
            {VILLA_TIERS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper p-6 md:p-8"
              >
                <div className="flex items-baseline justify-between flex-wrap gap-3 mb-3">
                  <h3 className="font-display text-xl md:text-2xl text-ink">
                    Tier {i + 1}: {t.tier}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep tabular">
                    {t.rental}
                  </span>
                </div>
                <p className="text-sm text-slate-mute mb-3">
                  Capacity: <strong className="text-ink">{t.capacity}</strong>
                </p>
                <p className="text-sm md:text-base text-slate leading-relaxed">
                  {t.feature}
                </p>
                <p className="mt-3 text-xs text-brand-deep font-medium">
                  → Best for: {t.bestFor}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="multi-villa"
          eyebrow="Section 3"
          title="Multi-villa setup — bagaimana handle 200+ pax di villa"
        >
          <p>
            Pertanyaan paling sering: <em>bisa villa gathering untuk 200+ pax?</em>
            Jawabannya iya, dengan <strong>multi-villa cluster setup</strong>.
          </p>

          <ol className="not-prose space-y-3 mt-5">
            {[
              {
                t: "Lock 2-4 villa berdekatan (radius 500m – 2km)",
                d: "Biasanya di area Lembang utara atau Ciwidey selatan dimana villa cluster banyak.",
              },
              {
                t: "Designate 1 villa sebagai 'main' untuk common activity",
                d: "Villa terbesar atau punya outdoor area paling luas. Semua gathering session di sini.",
              },
              {
                t: "Lodging tersebar ke villa lain",
                d: "Group dibagi sesuai team affinity atau random untuk encourage cross-mingling.",
              },
              {
                t: "Shuttle antar villa",
                d: "Schedule transport untuk movement antara villa — biasanya 4-6 trip/hari.",
              },
              {
                t: "F&B coordination",
                d: "Central kitchen di main villa, atau catering yang split-deliver. Kami atur both.",
              },
              {
                t: "Dedicated multi-villa logistics coordinator",
                d: "PM senior dengan 2-3 site coordinator yang stationed di tiap villa. Comms via radio + WA group.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="rounded-2xl border border-border bg-paper p-5"
              >
                <p className="font-medium text-ink">
                  {i + 1}. {item.t}
                </p>
                <p className="mt-1 text-sm text-slate">{item.d}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6">
            Multi-villa setup memerlukan{" "}
            <strong>min 6-8 minggu prep time</strong>. Logistically lebih
            kompleks dari single venue, tapi outcome bonding biasanya lebih
            kuat karena tim experience environment yang lebih natural dan
            shared.
          </p>
        </Section>

        <Section
          id="vs-hotel"
          eyebrow="Section 4"
          title="Villa vs hotel ballroom — kapan pilih mana?"
        >
          <div className="not-prose overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-cream/40">
                  <th className="px-4 py-3 font-medium">Aspek</th>
                  <th className="px-4 py-3 font-medium">Villa Private</th>
                  <th className="px-4 py-3 font-medium">Hotel Ballroom</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([aspect, v, h], i) => (
                  <tr key={i} className="border-b border-divider/60">
                    <td className="px-4 py-3 font-medium text-ink">{aspect}</td>
                    <td className="px-4 py-3 text-slate">{v}</td>
                    <td className="px-4 py-3 text-slate">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            <strong>Pilih villa kalau:</strong> pax 30-200, prioritas privacy
            &amp; bonding, multi-day stay, custom vibe penting.{" "}
            <strong>Pilih hotel kalau:</strong> formal corporate event (awarding
            night, conference component), pax 300+, butuh built-in MICE
            facilities, atau prep time singkat (&lt; 3 minggu). Untuk complete
            venue gathering options, lihat{" "}
            <Link href="/venues-gathering-bandung" className="text-brand font-medium hover:underline">
              venue gathering Bandung — semua kategori →
            </Link>
          </p>
        </Section>

        <Section
          id="fb"
          eyebrow="Section 5"
          title="F&B di villa — catering eksternal atau chef in-house?"
        >
          <p>
            F&amp;B adalah faktor yang sering underestimated saat memilih
            villa. Beda villa = beda capability F&amp;B.
          </p>

          <div className="not-prose grid gap-5 mt-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                Chef In-House Villa
              </h3>
              <p className="text-sm text-slate mb-4">
                Villa premium dengan dedicated kitchen staff.
              </p>
              <p className="text-xs text-brand-deep font-medium mb-2">Pros:</p>
              <ul className="space-y-1 text-sm text-slate mb-4">
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Kualitas konsisten, presentation premium
                </li>
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Tidak perlu coordinate vendor eksternal
                </li>
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Menu fine-dining accessible
                </li>
              </ul>
              <p className="text-xs text-brand-deep font-medium mb-2">Cons:</p>
              <p className="text-sm text-slate">
                Lebih mahal (Rp 1,2-1,8 jt/pax untuk 3 meals), menu lebih
                limited.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                External Catering
              </h3>
              <p className="text-sm text-slate mb-4">
                Villa accommodate catering kitchen access.
              </p>
              <p className="text-xs text-brand-deep font-medium mb-2">Pros:</p>
              <ul className="space-y-1 text-sm text-slate mb-4">
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Budget flexible (Rp 600rb-1,2 jt/pax)
                </li>
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Menu variety lebih banyak (Sundanese, Asian, Western)
                </li>
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Special diet accommodation lebih mudah
                </li>
              </ul>
              <p className="text-xs text-brand-deep font-medium mb-2">Cons:</p>
              <p className="text-sm text-slate">
                Butuh coordination tambahan, quality dependent on caterer
                selection.
              </p>
            </div>
          </div>

          <p className="mt-6">
            <strong>Rekomendasi sweet spot:</strong> Mix approach — main meals
            (lunch, dinner) catered profesional. Cooking station / BBQ
            interactive sebagai bonding activity (peserta participate). Total
            F&amp;B cost Rp 900rb-1,4 jt/pax untuk 3 meals 2D1N.
          </p>
        </Section>

        <Section
          id="checklist"
          eyebrow="Section 6"
          title="10-point pre-booking checklist sebelum lock villa"
        >
          <p>
            Sebelum sign contract villa, validasi 10 hal ini. Beberapa terlihat
            obvious tapi sering jadi pain point di hari H kalau tidak di-check
            di depan:
          </p>

          <ul className="not-prose space-y-3 mt-6">
            {[
              "Kapasitas overnight vs daytime — beberapa villa overcommit daytime",
              "Common area capacity untuk 100% pax simultaneous (gathering session)",
              "Parking capacity — terutama kalau ada multi-bus arrival",
              "Kitchen & catering access — built-in atau bisa external?",
              "Power supply — outbond 200+ pax butuh genset backup",
              "Insurance & liability — terutama kalau ada outdoor activity",
              "Sound permit — beberapa area Lembang strict soal noise level",
              "Activity ground proximity — outbound space dalam radius walk",
              "Medical & emergency access — rumah sakit terdekat",
              "Wi-Fi capability untuk peserta yang need stay-online",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-paper p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-paper text-xs font-medium flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Trust strip */}
        <section className="py-14 bg-cream/40 border-y border-divider">
          <div className="container-1280">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                [STATS.venuePartners, "Venue partnership"],
                [STATS.eventsDelivered, "Events delivered"],
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

        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["/venue-gathering-bandung", "Venue Gathering Bandung", "20 hotel, villa & resort terbaik Bandung"],
                ["/outing-kantor-bandung", "Outing Kantor Bandung", "Panduan budget, itinerary, vendor"],
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B — why it matters"],
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
              Cari villa yang fit corporate event Anda?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Brief size, durasi, dan budget — kami match dengan 3-4 villa
              recommended dari 60+ partnership langsung kami.
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
                href={buildWaLink("villa gathering Bandung")}
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
          title="Villa gathering case studies."
        />

        <StickyProposalBar
          message="Cari villa untuk corporate gathering? Free venue matching service."
          context="villa gathering Bandung"
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
