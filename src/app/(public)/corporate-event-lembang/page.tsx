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
  howToSchema,
} from "@/lib/schema";

const SLUG = "/corporate-event-lembang";
const URL = `${SITE.url}${SLUG}`;
const TITLE =
  "Corporate Event Lembang 2026: Villa Gathering, Outing & Team Building di Kawasan Pegunungan";
const DESCRIPTION =
  "Corporate event Lembang — villa gathering, outing kantor, team building, dan retreat di kawasan pegunungan Bandung Utara. 50+ venue partner langsung. Rp 2–6 jt/pax · Proposal 24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  keywords: [
    "corporate event lembang",
    "outing lembang",
    "villa gathering lembang",
    "team building lembang",
    "outing kantor lembang",
    "gathering perusahaan lembang",
    "corporate outing lembang bandung",
    "event organizer lembang",
  ],
  openGraph: {
    title: "Corporate Event Lembang — Villa Gathering & Outing Pegunungan 2026",
    description:
      "Specialist corporate event di Lembang, Bandung Utara. 50+ villa partner langsung. Team building, gathering, outing, retreat. Proposal 24 jam.",
    url: URL,
    type: "article",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Kenapa Lembang jadi pilihan utama untuk corporate event dari Bandung?",
    answer:
      "Lembang unggul karena 4 faktor: (1) Aksesibilitas — 25–35 menit dari pusat Bandung, 2 jam dari Jakarta via Tol Cipali/Purbaleunyi; (2) Kepadatan venue — lebih dari 200 villa dan resort tersebar di area Lembang, Cikole, dan Dago, sehingga pilihan untuk semua ukuran pax tersedia; (3) Udara sejuk 18–22°C — ideal untuk aktivitas outdoor seharian tanpa heat exhaustion; (4) Ekosistem aktivitas — pine forest, kebun teh, danau buatan, dan adventure park tersedia dalam radius 10 km.",
  },
  {
    question: "Berapa biaya corporate event di Lembang per pax?",
    answer:
      "Range biaya corporate event Lembang: outing 2D1N vila standar Rp 2–3,5 jt/pax, outing 2D1N villa premium Rp 3,5–5 jt/pax, gathering dengan ballroom resort Rp 4–6 jt/pax. Harga Lembang rata-rata 10–15% lebih tinggi dari Ciwidey karena aksesibilitas lebih mudah dan kepadatan venue lebih tinggi.",
  },
  {
    question: "Apa venue corporate event terbaik di Lembang untuk 100–300 pax?",
    answer:
      "5 venue top Lembang untuk 100–300 pax: (1) Padma Hotel Lembang — hotel berbintang dengan ballroom 500 pax dan outdoor area; (2) De Ranch Lembang — outdoor adventure + restoran besar; (3) Grafika Cikole — pine forest camp dengan villa cluster; (4) Farmhouse Lembang — venue Instagram-worthy dengan kapasitas outdoor besar; (5) The Ranch Lembang — equestrian + outdoor event space. Semua kami punya direct partnership.",
  },
  {
    question: "Berapa jarak Lembang dari Jakarta dan Bandung?",
    answer:
      "Dari Bandung kota: 25–35 menit via Jalan Setiabudi atau 35–45 menit via Jalan Lembang. Dari Jakarta: 2–2,5 jam via Tol Cipali + Pasteur atau 2,5–3 jam via Puncak tergantung kondisi lalu lintas. Kami biasanya arrange charter bus dari Jakarta atau Bandung city — bus pariwisata Rp 80–150 ribu/pax untuk perjalanan PP.",
  },
  {
    question: "Aktivitas outdoor apa yang tersedia di Lembang untuk corporate team building?",
    answer:
      "10 aktivitas outdoor Lembang yang kami offer: (1) Forest hiking dan orienteering di Cikole; (2) Flying fox dan high-rope di adventure park; (3) Agrowisata petik strawberry dan kebun teh; (4) Berkuda di ranch Lembang; (5) Paintball dan airsoft; (6) Rafting mini di Cikalong; (7) Archery dan outdoor games; (8) Night campfire dan survival training; (9) Cooking competition outdoor; (10) Paragliding di Ciwidey (1 jam dari Lembang). Semua activity bisa dikombinasikan dalam program 1 hari atau 2D1N.",
  },
  {
    question: "Apakah corporate event di Lembang bisa dijalankan saat musim hujan?",
    answer:
      "Musim hujan Lembang (November–Maret) memang perlu persiapan tambahan. Kami selalu siapkan: (1) Backup indoor space yang dikonfirmasi tertulis di kontrak — bukan 'bisa diatur nanti'; (2) Activity indoor alternatif yang sudah di-design dari awal; (3) Tent setup untuk outdoor dining kalau mau tetap outdoor experience; (4) Kontigensi rundown per skenario cuaca. Lembang masih perfectly workable di musim hujan asalkan persiapannya matang.",
  },
  {
    question: "Apa perbedaan corporate event di Lembang vs Ciwidey?",
    answer:
      "Lembang: lebih dekat (25 menit dari Bandung), venue density lebih tinggi, pilihan lebih banyak untuk semua pax, lebih warm (bisa lebih ramai), akses emergency lebih mudah. Ciwidey: lebih remote (1 jam dari Bandung), suasana lebih 'escape' dan wild, biaya venue umumnya 10–15% lebih murah, cocok untuk team yang mau benar-benar disconnect. Untuk first-timer corporate outing → Lembang. Untuk tim yang mau experience lebih adventurous → Ciwidey.",
  },
  {
    question: "Berapa minimum pax untuk corporate event di Lembang?",
    answer:
      "Minimum 20 pax untuk engagement kami di Lembang. Villa capacity range dari 20 pax (small villa privat) sampai 500+ pax (resort dengan cluster villa). Sweet spot operasional: 50–300 pax di Lembang. Untuk group di atas 300 pax, kami biasanya combine 2–3 cluster villa atau pindah ke resort dengan ballroom.",
  },
];

const VENUES_LEMBANG = [
  {
    name: "Padma Hotel Lembang",
    cap: "Indoor 500 + outdoor besar",
    type: "Hotel bintang 5",
    notes: "Pilihan premium Lembang. Mountain view terbaik. Fasilitas kolam renang + spa untuk leisure element.",
    pax: "100–500",
  },
  {
    name: "Grafika Cikole",
    cap: "Villa cluster + camping area",
    type: "Pine forest resort",
    notes: "Setting pine forest yang iconic untuk corporate outing. Villa terpisah memudahkan team allocation per departemen.",
    pax: "50–300",
  },
  {
    name: "The Ranch Lembang",
    cap: "Outdoor + indoor 200 pax",
    type: "Ranch & equestrian",
    notes: "Unique venue dengan equestrian experience. Cocok untuk tim yang mau sesuatu berbeda dari villa biasa.",
    pax: "30–200",
  },
  {
    name: "Greenforest Resort",
    cap: "Villa cluster 50–200 pax",
    type: "Nature resort",
    notes: "Villa hijau dengan nuansa alami. Tenang, ideal untuk leadership retreat atau strategic retreat.",
    pax: "30–200",
  },
  {
    name: "Lembang Park & Zoo Area",
    cap: "Outdoor large-scale",
    type: "Outdoor event space",
    notes: "Untuk event skala sangat besar (500+ pax) yang butuh space outdoor luas dengan infrastruktur memadai.",
    pax: "200–1.000",
  },
  {
    name: "Dago Dreampark",
    cap: "Outdoor adventure 100–400 pax",
    type: "Adventure park",
    notes: "Full adventure park dengan cable car, ATV track, dan space outdoor besar. Paling cocok untuk team building outbound.",
    pax: "50–400",
  },
];

const ACTIVITIES = [
  { name: "Forest Team Building", desc: "Outbound di hutan pine Cikole — orienteering, survival skill, dan group challenge.", type: "Outdoor" },
  { name: "Villa Cooking Class", desc: "Tim masak bersama di dapur villa — bonding natural tanpa effort berlebihan.", type: "Indoor" },
  { name: "Night Campfire Program", desc: "Refleksi kelompok, storytelling, dan acoustic music di api unggun malam hari.", type: "Evening" },
  { name: "Cycling & Hiking", desc: "Explore kawasan Lembang dengan sepeda atau trekking trail — cocok untuk semua fitness level.", type: "Outdoor" },
  { name: "Agrowisata Experience", desc: "Petik strawberry atau kunjungan kebun teh — casual bonding yang memorable.", type: "Leisure" },
  { name: "Creative Workshop", desc: "Batik, pottery, atau photography workshop di studio lokal Lembang.", type: "Indoor" },
];

export default function CorporateEventLembangPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      authorName: "Tio Mahesa",
      authorJobTitle: "Lead Field Operations Manager",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Corporate Event Bandung", url: `${SITE.url}/corporate-event-bandung` },
      { name: "Corporate Event Lembang", url: URL },
    ]),
    serviceSchema({
      name: "Corporate Event Lembang",
      description:
        "Specialist corporate event di Lembang, Bandung Utara — villa gathering, outing kantor, team building, retreat, dan executive offsite di kawasan pegunungan. 50+ venue partner langsung.",
      priceRange: "Rp 2.000.000 - Rp 6.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Merencanakan Corporate Event di Lembang",
      description: "6 langkah untuk merencanakan corporate event di Lembang, Bandung Utara yang berjalan lancar.",
      steps: [
        { name: "Tentukan format dan objective", text: "Pilih format: outing casual (villa), team building terstruktur (adventure camp), gathering formal (hotel resort), atau retreat strategic (private estate). Objective menentukan venue dan activity yang tepat." },
        { name: "Book venue minimal 6–8 minggu sebelum event", text: "Lembang adalah destinasi populer — venue bagus sudah full di weekend peak season (April–Agustus, Oktober–Desember). Booking 8 minggu sebelumnya untuk mendapat pilihan terbaik dengan harga negosiasi." },
        { name: "Konfirmasi kapasitas dan backup indoor", text: "Kunjungi venue fisik atau minta foto floor plan aktual. Pastikan ada backup indoor yang dikonfirmasi tertulis untuk antisipasi hujan — sangat penting untuk outdoor event di Lembang." },
        { name: "Design activity yang accommodate semua peserta", text: "Lembang punya banyak opsi outdoor intensif — tapi pastikan ada alternatif untuk peserta dengan keterbatasan fisik. Parallel track (outdoor vs indoor/leisure) adalah standar kami untuk grup cross-generational." },
        { name: "Siapkan transport yang tepat", text: "Gunakan charter bus pariwisata — jangan konvoi mobil pribadi. Bus lebih aman, lebih bonding (semua berangkat bareng), dan tidak ada risiko ada yang nyasar atau terlambat. Parkir di villa Lembang sering terbatas untuk banyak mobil." },
        { name: "Brief contingency plan untuk cuaca", text: "Siapkan rundown alternatif untuk skenario hujan dari pagi. Bukan hanya 'pindah ke dalam' — tapi rundown detail: activity indoor apa yang replace outdoor, timing yang disesuaikan, dan siapa yang coordinate perubahan ke peserta." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="Corporate event di Lembang? Proposal + rekomendasi venue dalam 24 jam."
        context="corporate event di Lembang, Bandung"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.heroMain.src}
              alt="Corporate event Lembang — villa gathering dan outing di kawasan pegunungan Bandung Utara"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/65 to-ink/95" />
          </div>

          <div className="relative container-1280">
            <div className="max-w-4xl">
              <nav className="text-xs text-paper/55 mb-4">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/corporate-event-bandung" className="hover:text-paper">Corporate Event Bandung</Link>
                <span className="mx-2">/</span>
                <span className="text-paper/75">Lembang</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Kawasan Pegunungan · Bandung Utara · Update 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Corporate Event Lembang:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Villa, Outing & Team Building di Pegunungan Bandung.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Kawasan Lembang menawarkan <strong className="text-paper/90">200+ villa dan resort</strong>,
                udara sejuk 18–22°C, dan jarak hanya{" "}
                <strong className="text-paper/90">25–35 menit dari pusat Bandung</strong>.
                Destinasi paling accessible untuk corporate event perusahaan Anda.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
                >
                  Request Proposal Lembang
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildWaLink("corporate event di Lembang, Bandung")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
                >
                  <Whatsapp size={16} />
                  Chat Langsung
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/60">
                <span>50+ venue partner Lembang</span>
                <span>{STATS.eventsDelivered} events delivered</span>
                <span>⭐ 4.9/5 Google</span>
                <span>Proposal 24 jam</span>
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
                <p className="eyebrow-brand">Quick Answer — Lembang</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Corporate event di Lembang tersedia untuk{" "}
                <strong>20–500+ pax</strong> dengan harga{" "}
                <strong>Rp 2–6 jt/pax</strong>. Kami punya direct partnership
                dengan <strong>50+ venue</strong> di kawasan Lembang, Cikole,
                dan Dago — tanpa markup reseller. Format tersedia:{" "}
                <strong>outing kasual, team building, villa gathering, retreat, dan corporate gathering formal</strong>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Jarak: 25–35 mnt dari Bandung</Tag>
                <Tag>Pax: 20–500+</Tag>
                <Tag>Budget: Rp 2–6 jt/pax</Tag>
                <Tag>50+ venue partner</Tag>
              </div>
              <div className="mt-6 pt-5 border-t border-divider flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-5 h-11 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Request Proposal Sekarang
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Venues */}
        <section className="py-16 md:py-20 border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Venue Rekomendasinya</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-2">
              Venue corporate event terbaik di Lembang.
            </h2>
            <p className="text-sm text-slate mb-8 max-w-2xl">
              Kami punya direct partnership dengan semua venue berikut — bukan reseller, tidak ada markup. Dalam proposal kami selalu sertakan 2 alternatif venue dengan pro/con dan slot ketersediaan.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {VENUES_LEMBANG.map((v) => (
                <div key={v.name} className="rounded-2xl border border-border bg-paper p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-sm text-ink">{v.name}</h3>
                    <span className="text-xs text-slate bg-cream px-2 py-0.5 rounded-full shrink-0">{v.pax} pax</span>
                  </div>
                  <p className="text-xs text-brand font-medium mb-1">{v.type} · {v.cap}</p>
                  <p className="text-xs text-slate">{v.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-14 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Aktivitas</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
              Program dan aktivitas di Lembang.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ACTIVITIES.map((a) => (
                <div key={a.name} className="rounded-xl border border-border bg-paper p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-sm text-ink">{a.name}</h3>
                    <span className="text-xs bg-brand/10 text-brand px-2 py-0.5 rounded-full">{a.type}</span>
                  </div>
                  <p className="text-xs text-slate">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="py-16 border-t border-divider">
          <div className="container-1280">
            <div className="max-w-3xl">
              <p className="eyebrow text-slate mb-3">Budget</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
                Estimasi biaya corporate event Lembang 2026.
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-ink text-paper">
                      <th className="text-left px-4 py-3 rounded-tl-xl font-medium">Format</th>
                      <th className="text-left px-4 py-3 font-medium">Pax</th>
                      <th className="text-left px-4 py-3 rounded-tr-xl font-medium">Estimasi /pax</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-divider">
                    {[
                      { format: "Team building half-day", pax: "20–200", price: "Rp 1,5–2,5 jt" },
                      { format: "Outing 1 hari (villa day-use)", pax: "20–300", price: "Rp 1,8–3 jt" },
                      { format: "Outing 2D1N villa standar", pax: "50–300", price: "Rp 2–3,5 jt" },
                      { format: "Outing 2D1N villa premium", pax: "50–300", price: "Rp 3,5–5 jt" },
                      { format: "Corporate gathering (Padma/resort)", pax: "100–500", price: "Rp 4–6 jt" },
                      { format: "Leadership retreat / executive offsite", pax: "10–40", price: "Rp 5–8 jt" },
                    ].map((row) => (
                      <tr key={row.format} className="hover:bg-cream/40 transition-colors">
                        <td className="px-4 py-3 font-medium text-ink">{row.format}</td>
                        <td className="px-4 py-3 text-slate">{row.pax}</td>
                        <td className="px-4 py-3 font-semibold text-brand">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate mt-3">* Belum termasuk PPN 11%. Harga Lembang rata-rata 10–15% lebih tinggi dari Ciwidey karena aksesibilitas lebih mudah.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow text-slate mb-3">FAQ</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
                Pertanyaan tentang corporate event di Lembang.
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

        {/* Related Locations */}
        <section className="py-14 border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Lokasi lainnya</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/corporate-event-ciwidey", label: "Corporate Event Ciwidey", desc: "Kawasan lebih remote — kawah putih, glamping, adventure outbound" },
                { href: "/corporate-event-bandung", label: "Corporate Event Bandung", desc: "Overview semua format dan destinasi corporate event Bandung" },
                { href: "/venue-gathering-bandung", label: "Venue Gathering Bandung", desc: "Direktori lengkap 60+ venue gathering di seluruh Bandung & Jawa Barat" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-border bg-paper p-5 hover:border-brand/40 transition-all"
                >
                  <p className="font-semibold text-sm text-ink group-hover:text-brand-deep">{link.label}</p>
                  <p className="text-xs text-slate mt-1">{link.desc}</p>
                  <ArrowRight size={14} className="text-brand mt-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container-1280 text-center">
            <p className="eyebrow text-brand mb-4">Corporate Event Lembang</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-xl mx-auto">
              Siap plan corporate event di Lembang?
            </h2>
            <p className="text-paper/70 mb-8 max-w-xl mx-auto">
              Ceritakan format, pax, dan tanggal target — kami kirim rekomendasi venue Lembang dan proposal dalam 24 jam.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/proposal/request"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-13 font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
              >
                Request Proposal Gratis
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={buildWaLink("corporate event di Lembang, Bandung")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 text-paper px-8 h-13 font-medium hover:bg-paper hover:text-ink transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp Sekarang
              </a>
            </div>
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
