import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkle, Whatsapp } from "@/components/icons/Icons";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { FreshnessSignal } from "@/components/FreshnessSignal";
import { IMAGES } from "@/lib/drive-images";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  howToSchema,
} from "@/lib/schema";

const SLUG = "/venue-gathering-bandung";
const URL = `${SITE.url}${SLUG}`;
const TITLE = "20 Venue Gathering Bandung Terbaik 2026 — Hotel, Villa, Resort & Outdoor";
const DESCRIPTION =
  "Rekomendasi venue gathering Bandung untuk corporate outing — 20 venue terpilih: hotel ballroom, villa private, resort, outdoor ground. Kapasitas, fasilitas, dan estimasi budget. Konsultasi gratis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "20 Venue Gathering Bandung Terbaik 2026 — Hotel, Villa & Outdoor",
    description:
      "Panduan lengkap venue gathering korporat di Bandung. Hotel ballroom, villa private, resort, outdoor. Kapasitas dan estimasi budget.",
    url: URL,
    type: "article",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Apa venue gathering terbaik di Bandung untuk 200 pax?",
    answer:
      "Untuk 200 pax, pilihan terbaik: (1) Padma Hotel Lembang — ballroom 500 kapasitas, premium mountain view, akses 60 menit dari kota; (2) Pullman Bandung Grand Central — lokasi pusat kota, ballroom 1.500 kapasitas, AV in-house terbaik; (3) Trans Luxury Hotel — grand ballroom 1.000 pax, fasilitas premium. Untuk outdoor 200 pax: Dusun Bambu Lembang (aesthetic premium) atau Orchid Forest Cikole (pine forest atmosphere). Rekomendasi tergantung budget, vibe, dan apakah event butuh ballroom atau bisa outdoor.",
  },
  {
    question: "Berapa biaya sewa venue gathering di Bandung?",
    answer:
      "Estimasi biaya sewa venue gathering Bandung: Hotel ballroom premium (300–500 pax): Rp 25–80 jt/hari. Villa private (30–100 pax, 2D1N): Rp 15–50 jt total. Resort outdoor dengan fasilitas lengkap: Rp 20–60 jt/hari. Glamping site: Rp 500rb–1,5 jt per tenda/malam. Catatan: harga venue biasanya belum termasuk F&B, AV setup, dan dekorasi. Dalam proposal kami, setiap komponen di-list terpisah.",
  },
  {
    question: "Apa yang harus dicek saat survey venue gathering?",
    answer:
      "10 hal wajib di-cek saat survey venue: (1) Kapasitas aktual vs angka marketing — cek setup theater, classroom, dan round table; (2) Akses loading barang dan AV; (3) Kualitas AC dan sirkulasi udara; (4) Parking capacity vs jumlah peserta; (5) Ketersediaan backup power / genset; (6) Kualitas internet / WiFi bandwidth; (7) Kebijakan vendor luar (boleh bawa catering sendiri atau tidak); (8) Noise level dari sekitar venue; (9) Aksesibilitas untuk peserta difabel; (10) Cancellation policy venue.",
  },
  {
    question: "Venue mana yang paling dekat dari Jakarta untuk corporate gathering Bandung?",
    answer:
      "Venue paling mudah diakses dari Jakarta: Hotel Pullman dan Trans Luxury (dekat pintu tol Pasteur, 2–2,5 jam dari Jakarta) adalah yang paling convenient untuk peserta dari Jakarta. Untuk yang butuh nuansa Bandung asli: Padma Hotel Lembang (1 jam dari pintu tol Pasteur, nuansa pegunungan). Untuk grup besar dari Jakarta yang datang naik bus, venue dekat tol lebih disarankan untuk meminimalisir waktu transit.",
  },
  {
    question: "Kapan harus book venue gathering Bandung?",
    answer:
      "Lead time yang disarankan berdasarkan pax: 50–100 pax: minimal 4–6 minggu. 100–300 pax: minimal 8 minggu. 300–500 pax: minimal 10–12 minggu. Peak season Q4 (Oktober–Desember) dan Q1 (Maret–Mei): tambah 4–6 minggu dari semua estimasi. Venue Bandung peak season (terutama Lembang dan Ciwidey) sangat cepat penuh — lock venue adalah langkah pertama yang harus dilakukan sebelum apapun.",
  },
  {
    question: "Apa perbedaan venue outdoor dan indoor untuk gathering?",
    answer:
      "Indoor venue (hotel ballroom): Cuaca tidak jadi risiko, AV setup lebih mudah, AC terkontrol, lebih formal. Cocok untuk: annual gathering, gala dinner, conference. Biaya lebih pasti. Outdoor venue (resort, villa garden, glamping): Atmosphere lebih natural dan memorable, lebih fleksibel untuk team building aktif, foto lebih estetik. Cocok untuk: team building, employee gathering, incentive trip. Risiko cuaca — butuh Plan B yang solid. Hybrid venue (indoor + outdoor): Best of both worlds. Ballroom untuk ceremony/dinner, outdoor untuk activity. Ideal untuk 2D1N atau 3D2N.",
  },
];

const VENUE_CATEGORIES = [
  {
    cat: "Hotel Premium — Ballroom Besar",
    id: "hotel",
    desc: <>Untuk <Link href="/corporate-gathering-bandung" className="text-brand font-medium hover:underline">corporate gathering formal dengan ballroom production</Link> 200–800 pax yang butuh ballroom, AV in-house, dan fasilitas lengkap.</>,
    venues: [
      {
        name: "Padma Hotel Lembang",
        area: "Lembang",
        cap: "Ballroom 500 · Total 800",
        distance: "60 min dari kota",
        best: "Mountain view, premium vibe, semi-outdoor capability",
        tier: "Premium",
      },
      {
        name: "Pullman Bandung Grand Central",
        area: "Pusat Kota",
        cap: "Ballroom 1.500 pax",
        distance: "Dekat tol Pasteur",
        best: "Kapasitas terbesar, AV terbaik di Bandung, akses mudah",
        tier: "Premium",
      },
      {
        name: "Hilton Bandung",
        area: "Pusat Kota",
        cap: "Theater 800 · 6 meeting rooms",
        distance: "10 min dari tol",
        best: "Multi-room untuk parallel sessions, standard internasional",
        tier: "Premium",
      },
      {
        name: "Trans Luxury Hotel",
        area: "Pasteur",
        cap: "Grand Ballroom 1.000 pax",
        distance: "Dekat tol Pasteur",
        best: "Produksi stage terbaik, fasilitas hiburan premium",
        tier: "Luxury",
      },
      {
        name: "Intercontinental Bandung Dago",
        area: "Dago",
        cap: "Theater 600 · 7 meeting rooms",
        distance: "20 min dari pusat",
        best: "Tenang, cocok untuk delegasi internasional",
        tier: "Premium",
      },
      {
        name: "Sheraton Bandung Hotel & Towers",
        area: "Pusat Kota",
        cap: "Ballroom 600 pax",
        distance: "Pusat kota",
        best: "Brand internasional, fasilitas wellness, pool",
        tier: "Premium",
      },
    ],
  },
  {
    cat: "Resort & Villa — Suasana Alam",
    id: "resort",
    desc: <>Untuk gathering yang butuh nature setting, outdoor activities, dan exclusive vibe. 50–300 pax. Lihat juga <Link href="/villa-gathering-bandung" className="text-brand font-medium hover:underline">private villa gathering untuk intimate bonding</Link>.</>,
    venues: [
      {
        name: "Dusun Bambu Family Leisure Park",
        area: "Lembang",
        cap: "600+ pax (multi-area)",
        distance: "30 min dari kota",
        best: "Paling aesthetic Bandung, bamboo forest setting, banyak spot foto",
        tier: "Mid-Premium",
      },
      {
        name: "Orchid Forest Cikole",
        area: "Lembang",
        cap: "500 pax amphitheater",
        distance: "45 min dari kota",
        best: "Pine forest, amphitheater outdoor, outbound area tersedia",
        tier: "Mid-Premium",
      },
      {
        name: "Terminal Wisata Grafika Cikole",
        area: "Lembang",
        cap: "200 pax indoor · outdoor luas",
        distance: "45 min dari kota",
        best: "Hutan pinus, camping ground, cocok untuk outbound",
        tier: "Standard",
      },
      {
        name: "Maribaya Nature Resort",
        area: "Lembang",
        cap: "100–200 pax",
        distance: "45 min dari kota",
        best: "Hot spring, river view, glamping + villa tersedia",
        tier: "Mid-Premium",
      },
      {
        name: "Villa private cluster Lembang",
        area: "Lembang",
        cap: "30–150 pax (multi-villa)",
        distance: "40–60 min dari kota",
        best: "Fully private, exclusivity tinggi, customizable",
        tier: "Premium",
      },
      {
        name: "Eco-resort Pangalengan",
        area: "Pangalengan",
        cap: "50–120 pax",
        distance: "100 min dari kota",
        best: "Tea plantation, extremely quiet, immersive retreat",
        tier: "Mid-Premium",
      },
    ],
  },
  {
    cat: "Outdoor & Adventure Ground",
    id: "outdoor",
    desc: <>Untuk team building outbound, <Link href="/glamping-corporate-bandung" className="text-brand font-medium hover:underline">glamping corporate experience unique</Link>, dan active programs. 20–300 pax.</>,
    venues: [
      {
        name: "Cikole Adventure & Outbound",
        area: "Lembang",
        cap: "50–300 pax",
        distance: "45 min dari kota",
        best: "Flying fox, rappelling, outbound course tersedia, hutan pinus",
        tier: "Standard",
      },
      {
        name: "Ciwidey Adventure Park",
        area: "Ciwidey",
        cap: "100–500 pax",
        distance: "90 min dari kota",
        best: "Dekat Kawah Putih, hot spring, rafting tersedia",
        tier: "Standard",
      },
      {
        name: "Situ Patenggang",
        area: "Ciwidey",
        cap: "50–200 pax",
        distance: "100 min dari kota",
        best: "Danau eksotis, tea plantation, atmosphere sangat unik",
        tier: "Mid",
      },
      {
        name: "Trizara Resorts (Glamping)",
        area: "Lembang",
        cap: "30–80 pax",
        distance: "45 min dari kota",
        best: "Glamping premium, private, fire pit, stargazing",
        tier: "Premium",
      },
      {
        name: "Subang Outbound & River",
        area: "Subang",
        cap: "50–200 pax",
        distance: "75 min dari kota",
        best: "Rafting Cilayu, outbound lahan luas, less touristy",
        tier: "Standard",
      },
      {
        name: "Saung Mang Udjo (Cultural)",
        area: "Cicaheum, Bandung",
        cap: "50–400 pax",
        distance: "20 min dari pusat",
        best: "Workshop angklung, budaya Sunda, unik untuk gathering",
        tier: "Standard",
      },
    ],
  },
];

export default function VenueGatheringBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: IMAGES.packageAnnualGathering.src,
      datePublished: "2026-05-14",
      dateModified: "2026-05-14",
      authorName: "Andre Pratama",
      authorJobTitle: "Founder & Lead Corporate Strategist",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Venue Gathering Bandung", url: URL },
    ]),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Memilih Venue Gathering di Bandung",
      description: "Panduan langkah-demi-langkah untuk memilih venue corporate gathering Bandung yang tepat sesuai pax, budget, dan objective event.",
      steps: [
        {
          name: "Tentukan objective dan vibe event",
          text: "Formal annual gathering dengan awarding night membutuhkan hotel ballroom; team building outbound aktif butuh outdoor ground luas; executive retreat butuh villa private dengan exclusivity tinggi. Tentukan vibe terlebih dahulu sebelum shortlist venue.",
        },
        {
          name: "Hitung kapasitas aktual yang dibutuhkan",
          text: "Kapasitas marketing venue sering lebih tinggi dari kapasitas aktual. Cek kapasitas untuk layout yang dibutuhkan: theater, classroom, atau round table. Tambahkan 15–20% buffer untuk AV setup, stage, dan area gerak peserta.",
        },
        {
          name: "Pilih area berdasarkan jarak dan aksesibilitas",
          text: "Untuk peserta dari Jakarta, prioritaskan venue dekat tol Pasteur (Trans Luxury, Pullman). Untuk nature vibe: Lembang (30–60 mnt, paling banyak pilihan), Ciwidey (75–110 mnt, outbound), Pangalengan (100–130 mnt, quiet retreat).",
        },
        {
          name: "Survey venue dan cek 12 checklist teknis",
          text: "Wajib dicek: kapasitas aktual, ceiling height, loading dock, kualitas AC, parking, backup power, bandwidth internet, kebijakan vendor luar, noise level, aksesibilitas difabel, cancellation policy, dan ketersediaan exclusive booking.",
        },
        {
          name: "Minta penawaran dan bandingkan breakdown biaya",
          text: "Minta quotation dengan breakdown terpisah: biaya sewa venue, F&B per pax, AV, dekorasi, akomodasi (untuk overnight). Bandingkan minimal 2–3 venue sebelum memutuskan. Perhatikan hidden fees seperti admin charge dan pajak.",
        },
        {
          name: "Lock venue sesuai lead time yang direkomendasikan",
          text: "50–100 pax: minimal 4–6 minggu. 100–300 pax: minimal 8 minggu. 300–500 pax: minimal 10–12 minggu. Peak season Q4 (Okt–Des) dan Q1 (Mar–Mei): tambah 4–6 minggu. Lock venue adalah langkah pertama sebelum apapun.",
        },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="Butuh rekomendasi venue + proposal gathering? Kami bantu."
        context="rekomendasi venue gathering Bandung"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.packageAnnualGathering.src}
              alt="Venue gathering terbaik Bandung — corporate outing di resort premium"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink/95" />
          </div>

          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Venue Gathering Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Panduan Venue · Update 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  20 Venue Gathering Bandung
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Terbaik 2026 — Dari Hotel sampai Outdoor.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Panduan venue corporate gathering Bandung berdasarkan{" "}
                <strong className="text-paper">7 tahun direct partnership</strong> dengan 60+ venue — bukan review biasa. Setiap rekomendasi berdasarkan pengalaman eksekusi event nyata.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
                >
                  Minta Rekomendasi Venue
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildWaLink("rekomendasi venue gathering Bandung")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
                >
                  <Whatsapp size={16} />
                  Tanya via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-cream/40 border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle size={16} className="text-brand" />
                <p className="eyebrow-brand">Panduan Cepat</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Bandung punya <strong>60+ venue corporate-ready</strong> dalam radius 90 menit dari pusat kota. Kategori utama: hotel ballroom premium (untuk 200–800 pax formal), villa/resort private (50–200 pax exclusive), dan outdoor adventure ground (team building). Rekomendasi terbaik kami berbeda tergantung{" "}
                <strong>pax, budget, vibe, dan objective event</strong>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>60+ venue partner</Tag>
                <Tag>Direct partnership</Tag>
                <Tag>20 pax – 2.000 pax</Tag>
                <Tag>3 kategori venue</Tag>
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
                  Minta Rekomendasi Venue
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#pilih-venue"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Cara pilih venue yang tepat
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TOC */}
        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Daftar isi</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {[
                ["#hotel", "Hotel premium dengan ballroom besar"],
                ["#resort", "Resort & villa — suasana alam"],
                ["#outdoor", "Outdoor & adventure ground"],
                ["#area", "Perbandingan area: Lembang vs Ciwidey vs Pangalengan"],
                ["#pilih-venue", "Cara pilih venue yang tepat"],
                ["#checklist", "Checklist survey venue"],
                ["#faq", "FAQ Venue Gathering Bandung"],
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

        {/* Venue Lists */}
        {VENUE_CATEGORIES.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="py-16 md:py-20 border-t border-divider"
          >
            <div className="container-1280">
              <p className="eyebrow text-slate mb-3">Kategori Venue</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">{cat.cat}</h2>
              <p className="text-slate mb-8 max-w-2xl">{cat.desc}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.venues.map((v) => (
                  <div key={v.name} className="rounded-2xl border border-border bg-paper p-5 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-semibold text-sm text-ink">{v.name}</h3>
                      <span className="text-xs bg-brand/10 text-brand px-2 py-0.5 rounded-full shrink-0">{v.tier}</span>
                    </div>
                    <div className="space-y-1.5 mb-4">
                      <p className="text-xs text-slate">📍 {v.area} · {v.distance}</p>
                      <p className="text-xs font-medium text-ink">👥 {v.cap}</p>
                    </div>
                    <p className="text-xs text-slate flex-1">{v.best}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Area Comparison */}
        <section id="area" className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-4xl">
              <p className="eyebrow text-slate mb-3">Perbandingan Area</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
                Lembang vs Ciwidey vs Pangalengan — pilih mana?
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-ink text-paper">
                      <th className="text-left px-4 py-3 rounded-tl-xl font-medium">Area</th>
                      <th className="text-left px-4 py-3 font-medium">Jarak dari Bandung</th>
                      <th className="text-left px-4 py-3 font-medium">Vibe</th>
                      <th className="text-left px-4 py-3 font-medium">Cocok untuk</th>
                      <th className="text-left px-4 py-3 rounded-tr-xl font-medium">Catatan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-divider">
                    {[
                      {
                        area: "Lembang", dist: "30–60 menit", vibe: "Premium, mountain, cool", cocok: "Annual gathering, glamping, team building", note: "Paling banyak pilihan venue. Ramai weekend.",
                      },
                      {
                        area: "Ciwidey", dist: "75–110 menit", vibe: "Adventure, Kawah Putih, hot spring", cocok: "Outbound aktif, glamping outdoor", note: "Akses agak lebih jauh. Lebih natural.",
                      },
                      {
                        area: "Pangalengan", dist: "100–130 menit", vibe: "Tea plantation, quiet retreat", cocok: "Corporate retreat, leadership retreat, exclusive", note: "Paling quiet & exclusive. Akses terpanjang.",
                      },
                      {
                        area: "Subang", dist: "75–100 menit", vibe: "Geothermal, rafting, outbound", cocok: "Team building adventure, outbound", note: "Lebih jarang digunakan = less crowded.",
                      },
                      {
                        area: "Bandung Kota", dist: "0 (central)", vibe: "Urban, hotel premium, hybrid event", cocok: "MICE, conference, formal gathering", note: "Convenient tapi tanpa nature vibe.",
                      },
                    ].map((row) => (
                      <tr key={row.area} className="hover:bg-cream/40">
                        <td className="px-4 py-3 font-semibold text-brand">{row.area}</td>
                        <td className="px-4 py-3 text-slate">{row.dist}</td>
                        <td className="px-4 py-3 text-slate">{row.vibe}</td>
                        <td className="px-4 py-3 text-ink text-xs">{row.cocok}</td>
                        <td className="px-4 py-3 text-slate text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-slate">
                Untuk event yang lebih casual dengan fokus bonding (bukan formal gathering), lihat{" "}
                <Link href="/outing-kantor-bandung" className="text-brand font-medium hover:underline">
                  venue untuk outing kantor casual vs gathering formal
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Cara Pilih Venue */}
        <section id="pilih-venue" className="py-16 md:py-20 border-t border-divider">
          <div className="container-1280">
            <div className="max-w-4xl">
              <p className="eyebrow text-slate mb-3">Panduan Pilih Venue</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
                Framework pilih venue yang tepat sesuai event
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    q: "Event formal dengan awarding night",
                    a: "Hotel ballroom dengan AV in-house (Pullman, Hilton, Trans Luxury). Prioritaskan ceiling height, loading dock, dan ruang backstage.",
                  },
                  {
                    q: "Team building outbound aktif",
                    a: "Outdoor ground dengan lahan minimal 1 hektar (Cikole, Ciwidey Adventure Park). Pastikan ada Plan B indoor kalau hujan.",
                  },
                  {
                    q: "Executive retreat / leadership camp",
                    a: "Villa private atau eco-resort dengan exclusivity tinggi (Pangalengan, villa private Lembang). Maksimal 40–60 pax untuk maintain intimacy.",
                  },
                  {
                    q: "Annual gathering 300+ pax",
                    a: "Hotel dengan ballroom 500+ kapasitas. Cek: group accommodation rate, multi-day block booking, dan apakah venue bisa exclusive atau shared.",
                  },
                  {
                    q: "Glamping corporate yang memorable",
                    a: "Trizara Resorts atau glamping site di Ciwidey. Cek kapasitas tenda, fasilitas shared bathroom, dan hot drink station. Minimal 30 pax untuk feasibility.",
                  },
                  {
                    q: "Grup dari Jakarta 200+ pax",
                    a: "Prioritaskan venue dekat pintu tol (Pasteur/Padalarang) untuk mengurangi waktu transit bus. Trans Luxury atau Pullman paling convenient.",
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl border border-border bg-paper p-5">
                    <p className="font-semibold text-sm text-brand mb-2">📍 {item.q}</p>
                    <p className="text-sm text-slate">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-2xl mx-auto">
              <p className="eyebrow text-slate mb-3 text-center">Checklist Wajib</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-6 text-center">
                12 hal yang harus dicek saat survey venue
              </h2>
              <div className="space-y-2">
                {[
                  "Kapasitas aktual (bukan angka marketing) untuk layout yang dibutuhkan",
                  "Ceiling height — penting untuk stage, LED screen, dan backdrop",
                  "Loading dock dan akses AV crew ke dalam venue",
                  "Kualitas AC dan sirkulasi udara untuk kapasitas penuh",
                  "Parking capacity vs jumlah peserta dan bus yang akan datang",
                  "Backup power / genset — apa ada dan berapa watt kapasitasnya",
                  "Internet bandwidth — penting untuk live streaming dan presentasi",
                  "Kebijakan vendor luar: boleh bawa catering sendiri? AV sendiri?",
                  "Noise level sekitar venue — apakah ada konstruksi, jalan raya, atau event lain?",
                  "Aksesibilitas — ramp, lift, toilet untuk peserta dengan kebutuhan khusus",
                  "Cancellation dan force majeure policy — apa yang terjadi kalau event dibatalkan",
                  "Ketersediaan exclusive (apakah venue bisa fully closed untuk event kita)",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3 bg-paper border border-border rounded-xl px-4 py-3">
                    <span className="font-mono text-xs text-slate shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-ink">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-slate mb-4">
                  Mau kami yang survey venue untuk event lo? Kami punya direct relationship dengan semua venue di atas.
                </p>
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Konsultasi Venue Gratis
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 border-t border-divider">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow text-slate mb-3">FAQ</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
                Pertanyaan paling sering tentang venue gathering Bandung.
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-border bg-paper p-6">
                    <h3 className="font-semibold text-sm text-ink mb-2">{faq.question}</h3>
                    <p className="text-sm text-slate leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container-1280 text-center">
            <p className="eyebrow text-brand mb-4">Venue Gathering Bandung</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-2xl mx-auto">
              Sudah pilih venue? Kami bantu execution-nya.
            </h2>
            <p className="text-paper/70 mb-8 max-w-lg mx-auto">
              Punya venue pilihan atau mau minta rekomendasi? Ceritakan kebutuhan event lo — kami kirim proposal dengan 2 opsi venue dalam 24 jam.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/proposal/request"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-13 font-medium hover:bg-brand-deep transition-all"
              >
                Minta Rekomendasi Venue + Proposal
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={buildWaLink("rekomendasi venue gathering di Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 text-paper px-8 h-13 font-medium hover:bg-paper hover:text-ink transition-colors"
              >
                <Whatsapp size={16} />
                Tanya via WhatsApp
              </a>
            </div>
            <p className="mt-6 text-xs text-paper/40">
              Lihat juga:{" "}
              <Link href="/corporate-gathering-bandung" className="underline hover:text-paper/70">Corporate Gathering</Link>
              {" · "}
              <Link href="/outing-kantor-bandung" className="underline hover:text-paper/70">Outing Kantor</Link>
              {" · "}
              <Link href="/villa-gathering-bandung" className="underline hover:text-paper/70">Villa Gathering</Link>
              {" · "}
              <Link href="/glamping-corporate-bandung" className="underline hover:text-paper/70">Glamping Corporate</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}
