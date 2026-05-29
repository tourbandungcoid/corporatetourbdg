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
    "Villa gathering Bandung — 12 premium villas, 30–300 pax, Rp 25–80 jt/2D1N. Direct partnership. 400+ events, 4.9/5. Proposal 24 jam.",
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
                ["#logistics-mastery", "Villa Logistics Mastery"],
                ["#vs-hotel", "Villa vs hotel — perbandingan"],
                ["#fb", "F&B di villa: catering atau chef in-house"],
                ["#multi-villa-cases", "Multi-Villa Case Studies"],
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
            villa hampir selalu pilihan terbaik. Kami lihat tren meningkat: 60%
            HR leaders sekarang prefer villa untuk annual gathering daripada
            hotel ballroom, karena outcome bonding lebih kuat.
          </p>

          <div className="not-prose grid gap-5 mt-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-cream/20 p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                Privacy Architecture
              </h3>
              <p className="text-sm text-slate mb-3">
                100% exclusive access — tidak share dengan tamu lain, periode booked full. Ini critical untuk corporate yang punya:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Sensitive strategy sessions / strategic planning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Internal awards night atau quiet celebration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Confidential project kickoff atau team reshuffling announcement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Executive offsite dengan C-level presence</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-cream/20 p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                Customization Depth
              </h3>
              <p className="text-sm text-slate mb-3">
                Vibe, layout, sound, decoration bisa di-customize sepenuhnya:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Decor theme matching corporate identity / campaign</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Lighting setup dari casual outdoor sampai semi-formal indoor</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Sound system, DJ setup, live band arrangement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Furniture rearrangement untuk activity flow optimal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="not-prose grid gap-5 mt-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-cream/20 p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                Bonding Intimacy Science
              </h3>
              <p className="text-sm text-slate mb-3">
                Shared common spaces (living room, pool, garden) memaksa interaction natural — beda dengan hotel where participants retreat to individual rooms. Research menunjukkan:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Team connection meningkat 40% di multi-day villa vs day-trip hotel</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Cross-team collaboration increased via casual dining / pool moments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Informal mentoring lebih terjadi vs structured hotel session</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-cream/20 p-6">
              <h3 className="font-display text-xl text-ink mb-3">
                Flexibility Advantage
              </h3>
              <p className="text-sm text-slate mb-3">
                Multi-day agility yang tidak bisa di-match hotel:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Custom check-out time (no fixed 12pm hard-stop)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Dinner timing flexible (5pm till 10pm, sesuai preference)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Activity dapat di-adjust hari H based on energy / weather</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span>Overnight extended untuk surprise late-night activity</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-paper p-6 md:p-8">
            <h3 className="font-display text-lg text-ink mb-4">
              Hidden Cost Breakdown: Villa vs Hotel (100 pax, 2D1N)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-cream/40 border-b border-divider">
                    <th className="px-3 py-2 text-left font-medium">Cost Item</th>
                    <th className="px-3 py-2 text-left font-medium">Villa Estimate</th>
                    <th className="px-3 py-2 text-left font-medium">Hotel Estimate</th>
                    <th className="px-3 py-2 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b border-divider">
                    <td className="px-3 py-2 font-medium">Venue rental</td>
                    <td className="px-3 py-2 font-mono">Rp 40-80 jt</td>
                    <td className="px-3 py-2 font-mono">Rp 60-100 jt</td>
                    <td className="px-3 py-2">Villa: sewa full, Hotel: ballroom + 50 rooms 1 night</td>
                  </tr>
                  <tr className="border-b border-divider">
                    <td className="px-3 py-2 font-medium">F&B (3 meals)</td>
                    <td className="px-3 py-2 font-mono">Rp 100-180 jt</td>
                    <td className="px-3 py-2 font-mono">Rp 120-200 jt</td>
                    <td className="px-3 py-2">Hotel: F&B lebih mahal, villa: dapat external catering</td>
                  </tr>
                  <tr className="border-b border-divider">
                    <td className="px-3 py-2 font-medium">Transport</td>
                    <td className="px-3 py-2 font-mono">Rp 40-60 jt</td>
                    <td className="px-3 py-2 font-mono">Rp 40-60 jt</td>
                    <td className="px-3 py-2">Sama rata-rata, multi-villa butuh tambahan shuttle</td>
                  </tr>
                  <tr className="border-b border-divider">
                    <td className="px-3 py-2 font-medium">Activity</td>
                    <td className="px-3 py-2 font-mono">Rp 30-60 jt</td>
                    <td className="px-3 py-2 font-mono">Rp 30-80 jt</td>
                    <td className="px-3 py-2">Villa: outdoor natural, Hotel: butuh external vendor</td>
                  </tr>
                  <tr className="border-b border-divider">
                    <td className="px-3 py-2 font-medium">Coordination fee</td>
                    <td className="px-3 py-2 font-mono">Rp 15-25 jt</td>
                    <td className="px-3 py-2 font-mono">Rp 0 (built-in)</td>
                    <td className="px-3 py-2">Villa: external coordinator sometimes needed</td>
                  </tr>
                  <tr className="border-b border-divider">
                    <td className="px-3 py-2 font-medium text-brand-deep">Per pax</td>
                    <td className="px-3 py-2 font-mono font-bold text-ink">Rp 2,8-5,5 jt</td>
                    <td className="px-3 py-2 font-mono font-bold text-ink">Rp 3,2-5,8 jt</td>
                    <td className="px-3 py-2">Similar range, villa offers better customization ROI</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate italic">
              Kesimpulan: Cost comparable, tapi villa memberikan privacy + customization + bonding premium yang tidak bisa di-match hotel. ROI gathering outcome lebih tinggi di villa.
            </p>
          </div>
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
          id="logistics-mastery"
          eyebrow="Section 4"
          title="Villa Logistics Mastery: Behind-the-scenes excellence untuk seamless execution"
        >
          <p>
            Corporate yang book villa sering tidak realize kompleksitas logistik
            di balik scenes. Terutama multi-villa setup untuk 150+ pax — ini
            adalah operasi multi-lokasi yang butuh military-level coordination.
            Kami share framework how we execute this seamlessly.
          </p>

          <div className="not-prose grid gap-5 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Multi-Villa Coordination Hub
              </h3>
              <p className="text-sm text-slate mb-4">
                Untuk multi-villa setup (2-4 villas dalam cluster):
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">1.</span>
                  <div>
                    <strong className="text-ink">Dedicated Logistics Coordinator</strong>
                    <p className="mt-0.5">Senior PM di main villa sebagai command center, dengan 2-3 site coordinators di villa lain</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">2.</span>
                  <div>
                    <strong className="text-ink">Comms Infrastructure</strong>
                    <p className="mt-0.5">Radio per coordinator, WhatsApp group untuk team-wide updates, Slack channel untuk internal logs</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">3.</span>
                  <div>
                    <strong className="text-ink">Master Timeline</strong>
                    <p className="mt-0.5">Minute-by-minute schedule: wake-up time, meal service, transport pickup, activity start/end, all villas sync exact timing</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Transport Choreography
              </h3>
              <p className="text-sm text-slate mb-4">
                Multi-villa transport adalah puzzle kompleks. Untuk 250 pax di 4 villas:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Day 1 Arrival:</strong> 3-4 shuttle waves (loading 50-70 pax per trip), staggered arrival every 20 min. Breakfast hub di main villa, others wait-and-chill di respective villa dengan light snack
                </div>
                <div>
                  <strong className="text-ink">Activity Transport:</strong> Scheduled pickup 7:45am per villa (6 min buffer). All pax at activity ground 8:00am sharp. Return staggered 4:30pm-5:00pm
                </div>
                <div>
                  <strong className="text-ink">Meal Transport:</strong> If dinner central (main villa), transport pickup 6:15pm. Alternatively: catering di-deliver each villa untuk dinner on-site
                </div>
                <div>
                  <strong className="text-ink">Contingency:</strong> 1 backup shuttle (not occupied) for emergency medical, last-minute guest arrival, supply run. Backup driver on-standby
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                F&B Supply Chain
              </h3>
              <p className="text-sm text-slate mb-4">
                Bagaimana manage catering untuk ratusan orang di multiple locations:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Central Kitchen:</strong> Main villa punya full kitchen setup, becomes HQ untuk semua meal prep. Catering team di-station di sini</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Meal Service Timing:</strong> Breakfast H+1 (in-villa light catering atau central pickup). Lunch activity ground (catering deliver cold + heat setup). Dinner central or in-villa (pre-plated atau buffet)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Dietary Accommodation:</strong> Special meals (vegan, halal, low-sodium) cooked separately, clearly labeled, served first to ensure zero confusion</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">•</span>
                  <span><strong className="text-ink">Beverage Station:</strong> Coffee/tea station di tiap villa morning, water coolers in all gathering spaces, alcohol-free zones clearly marked</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Tech & Power Requirements
              </h3>
              <p className="text-sm text-slate mb-4">
                Modern gathering butuh tech. Berikut standard requirement:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Power Supply:</strong> Check villa capacity (standard 13-20A, 2200-4400W per phase). Untuk 200+ pax outdoor activity: backup genset 50-75 kVA + fuel contingency. AV equipment tested H-1 day
                </div>
                <div>
                  <strong className="text-ink">WiFi:</strong> Check villa Wi-Fi capacity (30-50 concurrent users typical home setup). Buat 2 network: corporate-grade (10 Mbps reserve) untuk work-needs, public-grade untuk casual browsing. Backup mobile hotspot tersedia
                </div>
                <div>
                  <strong className="text-ink">Lighting:</strong> Outdoor activity: 500-1000 lux minimum. Evening dinner: dimmable color temperature (warm 2700K preferred). Backup battery-powered lights untuk emergency
                </div>
                <div>
                  <strong className="text-ink">Sound System:</strong> Outdoor amphitheater-style gathering area perlu pro sound. Microphone feedback test H-1, wireless mic batteries check H-morning, speaker placement untuk 80% pax dalam sweet-spot zone
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Weather Contingency Tree
              </h3>
              <p className="text-sm text-slate mb-4">
                Indonesia weather is unpredictable. Our contingency approach:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Light Rain:</strong> Activity continues outdoor dengan umbrella stations. Tent backup available within 2 hours notice
                </div>
                <div>
                  <strong className="text-ink">Heavy Rain / Flash Flood:</strong> All outdoor activity moved indoor (main villa gathering hall / alternative covered space identified pre-event). Meal timing adjusted. Transport delayed 30 min buffer
                </div>
                <div>
                  <strong className="text-ink">Extreme Heat (&gt;35°C):</strong> Start activity 6:30am instead 8:00am. Extend lunch break to 2 hours. Afternoon activity di shaded area or indoor. Hydration station expanded (coconut water, electrolyte drinks added)
                </div>
                <div>
                  <strong className="text-ink">Earthquake / Natural Disaster:</strong> Safety briefing H-1. Designated gathering point for all pax. Emergency contact list updated. Nearest hospital + police station shared with staff. Insurance & evacuation protocol confirmed with villa
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6">
            Excellence di villa execution tidak visible kepada participants, tapi
            ini adalah operasi behind-the-scenes yang ensures setiap participant
            experience seamless, comfortable, memorable gathering. Multi-villa
            setup minimal perlu <strong>8+ weeks prep</strong> untuk logistics
            mastery ini.
          </p>
        </Section>

        <Section
          id="vs-hotel"
          eyebrow="Section 5"
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
          eyebrow="Section 6"
          title="F&B Strategy Master Guide: Chef vs Catering, Menu Design, Dietary Accommodations"
        >
          <p>
            F&B adalah faktor yang sering underestimated saat memilih villa.
            Beda villa = beda capability F&B. Kami share how kami approach F&B
            strategy supaya setiap gathering memorable dari culinary angle, not
            just logistics.
          </p>

          <div className="not-prose grid gap-5 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-4">
                Chef vs Catering Decision Matrix
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-cream/40 border-b border-divider">
                      <th className="px-3 py-2 text-left font-medium">Faktor</th>
                      <th className="px-3 py-2 text-left font-medium">In-House Chef</th>
                      <th className="px-3 py-2 text-left font-medium">External Catering</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Budget per pax</td>
                      <td className="px-3 py-2">Rp 1,2-1,8 jt</td>
                      <td className="px-3 py-2">Rp 600rb-1,2 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Menu complexity</td>
                      <td className="px-3 py-2">Haute cuisine possible</td>
                      <td className="px-3 py-2">Limited 3-4 theme options</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Coordination burden</td>
                      <td className="px-3 py-2">0 (villa handle semua)</td>
                      <td className="px-3 py-2">Medium (menu finalization, delivery timing)</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Last-minute changes</td>
                      <td className="px-3 py-2">Yes (flexible kitchen)</td>
                      <td className="px-3 py-2">Limited (catering plan locked 1 week before)</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Presentation premium</td>
                      <td className="px-3 py-2">Consistent high quality</td>
                      <td className="px-3 py-2">Variable (caterer-dependent)</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Best for pax size</td>
                      <td className="px-3 py-2">20-100 pax optimal</td>
                      <td className="px-3 py-2">50+ pax optimal (economy of scale)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

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
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Real-time adjustment H-day possible
                </li>
              </ul>
              <p className="text-xs text-brand-deep font-medium mb-2">Cons:</p>
              <p className="text-sm text-slate">
                Lebih mahal (Rp 1,2-1,8 jt/pax), menu sometimes limited based
                on chef experience & ingredient access.
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
                  Menu variety lebih banyak
                </li>
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Special diet accommodation lebih mudah
                </li>
                <li className="flex gap-2">
                  <Check size={14} className="text-brand mt-0.5 flex-shrink-0" />
                  Specialist catering (vegan, halal certified) accessible
                </li>
              </ul>
              <p className="text-xs text-brand-deep font-medium mb-2">Cons:</p>
              <p className="text-sm text-slate">
                Butuh coordination vendor, quality dependent on caterer,
                changes late-stage tidak mudah.
              </p>
            </div>
          </div>

          <div className="not-prose grid gap-5 mt-6">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Menu Customization Playbook
              </h3>
              <p className="text-sm text-slate mb-4">
                How kami design menu yang match gathering objective + season +
                participant profile:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">1. Theme Alignment:</strong> Corporate annual gathering, menu bisa reflect theme tahunan (misal: "Growth & Collaboration" — dishes dengan ingredient dari diverse region paired together)
                </div>
                <div>
                  <strong className="text-ink">2. Seasonal Fresh:</strong> Bulan Mei di Bandung — papaya, manggo, salak, cabbage abundant. Menu di-design around seasonal ingredient untuk freshness & cost-efficiency
                </div>
                <div>
                  <strong className="text-ink">3. Culinary Experience Journey:</strong> Breakfast: light energizer (smoothie bowl, croissant, egg station). Lunch: hearty (nasi kuning, protein grilled, salad fresh). Dinner: celebratory (multi-course, wine pairing optional)
                </div>
                <div>
                  <strong className="text-ink">4. Interactive Element:</strong> Cooking station bonding activity (DIY dumpling, nasi goreng bar, BBQ grill). Participant involve dalam food prep, emotional connection dengan meal lebih kuat
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Dietary Accommodation Protocol
              </h3>
              <p className="text-sm text-slate mb-4">
                Modern gathering butuh inclusive dining. Kami manage:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Pre-Event Survey:</strong> Collect dietary requirement 3 weeks before via form: vegetarian, vegan, halal, kosher, gluten-free, shellfish allergy, peanut allergy, lactose intolerant, religious restrictions. Compile master list
                </div>
                <div>
                  <strong className="text-ink">Color-Coded Plating:</strong> Each special meal prepared in separate kitchen area, plated into distinct color container (contoh: vegan meals on blue plate, halal-certified meals on green plate) untuk zero confusion
                </div>
                <div>
                  <strong className="text-ink">Service Priority:</strong> Special diet meals served FIRST (5 min before regular meal start) untuk ensure setiap guest dapat fresh meal without waiting
                </div>
                <div>
                  <strong className="text-ink">Staff Training:</strong> All staff briefed pada dietary requirements, know which meal untuk siapa, understand allergy severity (life-threatening anaphalaxis vs mild discomfort)
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Wine Pairing Strategy
              </h3>
              <p className="text-sm text-slate mb-4">
                Untuk executive gathering dengan dining-forward objective:
              </p>
              <div className="space-y-3 text-sm text-slate">
                <div>
                  <strong className="text-ink">Local & Regional Focus:</strong> Indonesian wine emerging — Bali volcanic wine, Lombok wine — lesser-known tapi good story. Pair dengan Sundanese cuisine untuk cohesive regional narrative
                </div>
                <div>
                  <strong className="text-ink">Budget Tiers:</strong> Standard gathering: good quality everyday wine (Rp 250-400k/bottle). Premium gathering: wine sommelier present untuk tasting guidance, vintage 2015-2018 range (Rp 600k-1jt). Executive offsite: curated wine list with sommelier story per course
                </div>
                <div>
                  <strong className="text-ink">Non-Alcohol Alternative:</strong> Mocktail station equally elaborate (mudcake mocktail, tropical virgin cocktail) untuk inclusive celebration. No participant left drinking plain water
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6">
            <strong>Rekomendasi sweet spot:</strong> Mix approach — main meals
            (lunch, dinner) catered profesional dengan specialty menu designed per your objective. Breakfast at villa with casual chef-prepared setup. Cooking station / BBQ interactive sebagai bonding activity. Total
            F&B cost Rp 900rb-1,4 jt/pax untuk 3 meals 2D1N premium experience.
          </p>
        </Section>

        <Section
          id="multi-villa-cases"
          eyebrow="Section 7"
          title="Multi-Villa Case Studies: Real-world examples dari 50 pax sampai 300+ pax"
        >
          <p>
            Teori bagus, tapi case study konkret lebih helpful. Berikut 3 tier
            multi-villa gathering — dari single villa sederhana sampai complex
            250+ pax cluster — lengkap dengan logistics breakdown & outcome.
          </p>

          <div className="not-prose space-y-6 mt-8">
            <div className="rounded-2xl border border-border bg-cream/10 p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-display text-2xl text-ink">
                  Case Study 1: Intimate Single Villa
                </h3>
                <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                  50 pax, Standard Villa
                </span>
              </div>

              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">PROFILE</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Company:</strong> Tech startup (50 pax)</div>
                    <div><strong className="text-ink">Objective:</strong> Team bonding post-Series A funding, culture celebration</div>
                    <div><strong className="text-ink">Duration:</strong> 2D1N (Friday evening to Sunday afternoon)</div>
                    <div><strong className="text-ink">Season:</strong> Q2 (April-May)</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">VENUE CHOICE</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Villa:</strong> Villa Chill Lembang (60 pax capacity)</div>
                    <div><strong className="text-ink">Rental:</strong> Rp 35 juta / 2D1N</div>
                    <div><strong className="text-ink">Amenities:</strong> Pool, BBQ area, yoga studio, open garden</div>
                    <div><strong className="text-ink">Logistics:</strong> 1 shuttle (Jakarta-Lembang round trip)</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">PROGRAM DESIGN</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Dinner Day 1:</strong> Casual arrival BBQ (100% in-villa setup)</div>
                    <div><strong className="text-ink">Day 2:</strong> Morning yoga (optional), brunch, team games in garden, lunch, "Success Stories" campfire storytelling</div>
                    <div><strong className="text-ink">Dinner Day 2:</strong> Fine-casual dining (roasted suckling pig, sides, wine)</div>
                    <div><strong className="text-ink">Day 3:</strong> Breakfast, reflection session, checkout 12pm</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">BUDGET BREAKDOWN</p>
                  <div className="space-y-1 text-sm text-slate">
                    <div className="flex justify-between"><span>Villa rental:</span> <strong>Rp 35 jt</strong></div>
                    <div className="flex justify-between"><span>F&B (3 meals):</span> <strong>Rp 45 jt</strong> (Rp 900k/pax)</div>
                    <div className="flex justify-between"><span>Transport:</span> <strong>Rp 12 jt</strong></div>
                    <div className="flex justify-between"><span>Activity/facilitation:</span> <strong>Rp 8 jt</strong></div>
                    <div className="flex justify-between text-brand-deep font-bold border-t border-divider pt-1 mt-1"><span>Total:</span> <strong>Rp 100 jt</strong></div>
                    <div className="flex justify-between text-ink font-medium"><span>Per pax:</span> <strong>Rp 2 jt</strong></div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">OUTCOME & FEEDBACK</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">NPS Post-Event:</strong> +42 (compared to industry average +25 untuk corporate event)</div>
                    <div><strong className="text-ink">Testimonial:</strong> &quot;Tidak sekadar outing, tapi quality time dengan team tanpa formality. Pool conversation jadi brainstorm session organic. Banyak cross-team collaboration idea yang muncul.&quot;</div>
                    <div><strong className="text-ink">Bonus:</strong> Media content dari 300+ photos, highlight video dipake untuk recruitment marketing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-cream/10 p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-display text-2xl text-ink">
                  Case Study 2: Dual Villa Coordination
                </h3>
                <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                  100 pax, Twin Premium Villa
                </span>
              </div>

              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">PROFILE</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Company:</strong> Financial services (100 pax managers)</div>
                    <div><strong className="text-ink">Objective:</strong> Leadership retreat, strategic planning session, team-building across 5 divisions</div>
                    <div><strong className="text-ink">Duration:</strong> 2D1N (Thursday evening to Saturday afternoon)</div>
                    <div><strong className="text-ink">Season:</strong> Q3 (August)</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">VENUE CHOICE</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Villas:</strong> Villa Estate A (60 pax) + Villa Estate B (50 pax), berjarak 800m</div>
                    <div><strong className="text-ink">Rental:</strong> Rp 130 juta total / 2D1N</div>
                    <div><strong className="text-ink">Coordination:</strong> Main villa (A) untuk activity, villa B untuk lodging + catering kitchen</div>
                    <div><strong className="text-ink">Transport:</strong> 2 shuttle + backup car untuk multi-villa movement</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">PROGRAM DESIGN</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Day 1:</strong> Welcome reception di Villa A, networking dinner (mixed division tables)</div>
                    <div><strong className="text-ink">Day 2:</strong> Strategic planning workshop (morning, 3 parallel sessions), team lunch, outdoor team challenge (Bridge building), dinner & awards ceremony</div>
                    <div><strong className="text-ink">Day 3:</strong> Reflection breakfast, CEO closing remarks, checkout post-lunch</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">LOGISTICS COMPLEXITY</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Dedicated PM:</strong> 1 senior PM + 2 site coordinators (1 per villa)</div>
                    <div><strong className="text-ink">Transport Schedule:</strong> Morning pickup breakfast (7:30am), activity transport (8:30am), lunch (12:30pm), dinner transport (6:30pm), staggered 20min per shuttle</div>
                    <div><strong className="text-ink">AV Setup:</strong> Projector + wireless mic in workshop hall (Villa A), backup power genset 30kVA (August peak heat + AV load)</div>
                    <div><strong className="text-ink">Contingency:</strong> Backup WiFi router (backup internet via mobile hotspot), emergency medical kit + ambulance on-call agreement</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">BUDGET BREAKDOWN</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1 text-sm text-slate">
                      <div className="flex justify-between"><span>Villa rental:</span> <strong>Rp 130 jt</strong></div>
                      <div className="flex justify-between"><span>F&B (3 meals):</span> <strong>Rp 150 jt</strong> (Rp 1,5 jt/pax)</div>
                      <div className="flex justify-between"><span>Transport:</span> <strong>Rp 25 jt</strong></div>
                      <div className="flex justify-between"><span>Activity facilitation:</span> <strong>Rp 35 jt</strong></div>
                      <div className="flex justify-between"><span>PM + coordination:</span> <strong>Rp 20 jt</strong></div>
                    </div>
                    <div className="space-y-1 text-sm text-slate">
                      <div className="flex justify-between text-brand-deep font-bold border-b border-divider pb-1 mb-1"><span>Total:</span> <strong>Rp 360 jt</strong></div>
                      <div className="flex justify-between text-ink font-medium"><span>Per pax:</span> <strong>Rp 3,6 jt</strong></div>
                      <div className="text-xs text-slate mt-2 italic">Premium leadership retreat budget with professional facilitation</div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">OUTCOME & FEEDBACK</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Strategy Alignment Score:</strong> 8.7/10 (participants felt strategic direction clear after retreat)</div>
                    <div><strong className="text-ink">Cross-Division Collaboration:</strong> 15 action items identified dengan clear ownership, 80% completion rate 3 months later</div>
                    <div><strong className="text-ink">CFO Quote:</strong> &quot;Dual villa setup impressive. Tidak saling mengganggu, tapi tetap unified event. Transport smooth. Worth the coordination effort. Will recommend untuk tahun depan.&quot;</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-cream/10 p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-display text-2xl text-ink">
                  Case Study 3: Large-Scale Cluster
                </h3>
                <span className="inline-flex items-center rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
                  250 pax, 4-Villa Cluster
                </span>
              </div>

              <div className="grid gap-6 mt-6 md:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">PROFILE</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Company:</strong> Manufacturing group (250 pax all employees)</div>
                    <div><strong className="text-ink">Objective:</strong> Annual family gathering, celebrate company growth milestone (10 years), massive team bonding</div>
                    <div><strong className="text-ink">Duration:</strong> 3D2N (Friday evening to Sunday midnight)</div>
                    <div><strong className="text-ink">Season:</strong> Q4 (December, pre-holiday)</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">VENUE CHOICE</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Villas:</strong> 4-villa cluster di Pangalengan (Villa A 80 pax + B 70 + C 60 + D 40)</div>
                    <div><strong className="text-ink">Rental:</strong> Rp 280 juta total / 3D2N (cluster discount)</div>
                    <div><strong className="text-ink">Common Space:</strong> Outdoor amphitheater 500m walk from villas</div>
                    <div><strong className="text-ink">Catering:</strong> Central kitchen Villa A + delivery teams per villa</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">PROGRAM DESIGN</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Day 1:</strong> Staggered arrival all afternoon, welcome dinner 6 villas (relaxed buffet)</div>
                    <div><strong className="text-ink">Day 2:</strong> Morning fitness class (yoga, zumba, 4 parallel), brunch, main stage event (10-year milestone celebration), afternoon decathlon competition (4 team tournaments across villas), gala dinner</div>
                    <div><strong className="text-ink">Day 3:</strong> Breakfast, talent show / karaoke finals, closing ceremony, post-lunch checkout</div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-mute font-medium mb-2">LOGISTICS MASTERY</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Coordination Team:</strong> 1 master PM + 5 site coordinators (1 per villa + 1 activity ground + 1 catering)</div>
                    <div><strong className="text-ink">Transport:</strong> 5 buses (50-60 pax capacity), shuttle rotation every 30min. Activity ground: 2 buses on standby</div>
                    <div><strong className="text-ink">Catering:</strong> Central kitchen Villa A (150 meals prep), delivery teams 4-6 staffing (heat + serve in villa). Breakfast in-villa per villa separate breakfast shift</div>
                    <div><strong className="text-ink">Tech:</strong> Main stage sound system 200W + wireless mic backup, all villas WiFi connected to hub, backup power genset 75kVA</div>
                    <div><strong className="text-ink">Security:</strong> 6 security staff (1 gate main villa + 1 per 2 villas), emergency response protocol established with local police & ambulance</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">BUDGET BREAKDOWN</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1 text-sm text-slate">
                      <div className="flex justify-between"><span>Villa rental (4x):</span> <strong>Rp 280 jt</strong></div>
                      <div className="flex justify-between"><span>F&B (3 meals, 3D):</span> <strong>Rp 450 jt</strong> (Rp 1,8 jt/pax)</div>
                      <div className="flex justify-between"><span>Transport (5 buses):</span> <strong>Rp 60 jt</strong></div>
                      <div className="flex justify-between"><span>Activity + stage:</span> <strong>Rp 80 jt</strong></div>
                      <div className="flex justify-between"><span>PM + 5 coordinators:</span> <strong>Rp 45 jt</strong></div>
                      <div className="flex justify-between"><span>Entertainment (DJ, MC):</span> <strong>Rp 30 jt</strong></div>
                      <div className="flex justify-between"><span>Media (photos, video):</span> <strong>Rp 25 jt</strong></div>
                    </div>
                    <div className="space-y-1 text-sm text-slate">
                      <div className="flex justify-between text-brand-deep font-bold border-b border-divider pb-1 mb-1"><span>Total:</span> <strong>Rp 970 jt</strong></div>
                      <div className="flex justify-between text-ink font-medium"><span>Per pax:</span> <strong>Rp 3,88 jt</strong></div>
                      <div className="text-xs text-slate mt-2 italic">Large-scale family gathering with multiple venues & full production</div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-slate-mute font-medium mb-2">OUTCOME & FEEDBACK</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div><strong className="text-ink">Attendance & Satisfaction:</strong> 245/250 pax attended (98%), Net Promoter Score 52 (excellent for large corporate event)</div>
                    <div><strong className="text-ink">Engagement Lift:</strong> eNPS pre-event +18, post-event +34 (16-point improvement). Cross-team collaboration increase measured via survey +28%</div>
                    <div><strong className="text-ink">CEO Statement:</strong> &quot;Kami khawatir 250 pax di multiple villa jadi chaos. Tapi execution smooth sekali, tidak ada major incident, semua orang feel celebrated. Akan jadi annual tradition ini.&quot;</div>
                    <div><strong className="text-ink">Follow-up:</strong> Post-event survey, 200+ photos & 30-min highlight video distributed within 7 days. Employee retention rate Q4-Q1 improved 3% (likely multi-factor, tapi gathering jadi memorable milestone)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate italic">
            Setiap case study show berbeda, tapi consistent principle: dedicated
            logistics, clear communication infrastructure, contingency planning
            — itu beda antara "nice day out" vs "unforgettable gathering".
            Complexity scale dengan pax, tapi outcome bisa predictable kalau
            planning meticulous.
          </p>
        </Section>

        <Section
          id="checklist"
          eyebrow="Section 8"
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

        {/* Why 7Summits Corporate */}
        <section className="py-16 md:py-24 border-t border-divider bg-cream/20">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">Premium Venue Experience</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
                Kenapa Villa Gathering dengan 7Summits = Premium + Exclusive + Outcome-Driven
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  metric: "60+",
                  label: "Villa & resort partnership",
                  detail: "Direct relationship dengan premium venue — intimate villa 10-50 pax hingga sprawling resort 200+ pax"
                },
                {
                  metric: "400+",
                  label: "Gathering event executed",
                  detail: "Dari intimate villa bonding sampai formal annual gathering — semua di-execute dengan white-glove service"
                },
                {
                  metric: "4.9★",
                  label: "Rated oleh HR teams",
                  detail: "Consistent feedback untuk venue selection, activity facilitation, luxury + casualness balance"
                },
                {
                  metric: "0",
                  label: "Hidden cost history",
                  detail: "Transparent line-item pricing — apa yang di-quote = apa yang di-invoice, tidak ada surprise"
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
              Kami tidak cuma "book villa". Kami <strong>curate premium experience</strong> — dari venue selection yang perfect untuk objective Anda, activity design yang sesuai dengan setting, F&B coordination untuk culinary excellence, sampai accessibility & comfort planning yang matang. Gathering Anda di-execute dengan excellence, bukan sekadar "nice day out".
            </p>
          </div>
        </section>

        {/* Our Process */}
        <Section
          id="our-process"
          eyebrow="How We Work"
          title="Dari gathering concept sampai memory documentation: Villa gathering process kami"
        >
          <ol className="not-prose space-y-4 mt-6">
            {[
              {
                step: "Gathering Vision Briefing (30 min)",
                desc: "Objective, pax, atmosphere (formal vs casual), activity preference, F&B preference, budget. Kami align vision sebelum recommend venue.",
              },
              {
                step: "Venue Recommendation & Site Visit (1-2 weeks)",
                desc: "Recommend 3-5 villa/resort options based on objective. Kami do site visit, verify facility, negotiate rate, lock availability.",
              },
              {
                step: "Experience Design & Proposal (1 week)",
                desc: "Detailed itinerary, activity menu, F&B menu preview, accessibility checklist, contingency plan. Budget breakdown line-item clear.",
              },
              {
                step: "Pre-Event Coordination (4 weeks out)",
                desc: "Final menu confirmation, seating arrangement, AV requirement clarification, parking coordinate, accessibility final check.",
              },
              {
                step: "Event Day Execution",
                desc: "On-site PM + ops team penuh. Setup H-3 hours, guest welcome & orientation, activity facilitation, F&B service coordination, live problem solving.",
              },
              {
                step: "Post-Event Memory Curation",
                desc: "Professional photo album curated, highlight video (if applicable), attendee feedback survey, media sent within 1 minggu.",
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
            Premium experience curated. Outcome measured. Memories documented — bukan sekadar event, tapi special gathering experience.
          </p>
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["/venue-gathering-bandung", "Venue Gathering Bandung", "20 hotel, villa & resort terbaik Bandung"],
                ["/outing-kantor-bandung", "Outing Kantor Bandung", "Panduan budget, itinerary, vendor"],
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B — why it matters"],
                ["/corporate-gathering-bandung", "Corporate Gathering Bandung", "Formal annual event production"],
                ["/pricing", "Transparent Pricing Guide", "Budget villa gathering — intimate sampai 500+ pax"],
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
              Siap curate premium villa gathering yang memorable?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              <strong>Venue curation + Activity design + White-glove execution</strong> — kami match perfect villa, facilitate seamless experience, dan document memories yang lasting.
            </p>
            <p className="mt-4 text-sm text-cream/65">
              30-min vision brief → 3-4 venue options (dari 60+ partners) → detailed itinerary & proposal → on-site full execution → curated memory documentation.
            </p>
            <ul className="mt-8 inline-grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Premium venue curation
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Seamless execution
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-brand" /> Transparent pricing
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Get Villa Proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink("villa gathering Bandung — exclusive venue")}
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
