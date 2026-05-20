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

const SLUG = "/corporate-event-ciwidey";
const URL = `${SITE.url}${SLUG}`;
const TITLE =
  "Corporate Event Ciwidey 2026: Outing, Glamping & Team Building di Kawasan Kawah Putih";
const DESCRIPTION =
  "Corporate event Ciwidey — outing kantor, glamping corporate, team building adventure, dan retreat di kawasan Kawah Putih Bandung Selatan. Venue 10–200 pax. Rp 1,8–5 jt/pax · Proposal 24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  keywords: [
    "corporate event ciwidey",
    "outing ciwidey",
    "outing kantor ciwidey",
    "glamping corporate ciwidey",
    "team building ciwidey",
    "gathering perusahaan ciwidey",
    "corporate outing ciwidey bandung",
    "outing kawah putih bandung",
    "outbound ciwidey",
  ],
  openGraph: {
    title: "Corporate Event Ciwidey — Outing & Glamping Kawah Putih 2026",
    description:
      "Specialist corporate event di Ciwidey, Bandung Selatan. Glamping, outbound, team building, dan retreat di kawasan Kawah Putih. Proposal 24 jam.",
    url: URL,
    type: "article",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Kenapa Ciwidey cocok untuk corporate outing dan team building?",
    answer:
      "Ciwidey menawarkan 3 keunggulan unik: (1) Nuansa 'escape' yang lebih kuat — lebih remote dari Lembang, udara lebih dingin (15–18°C), dan lanskap yang lebih wild dengan kawah, danau, dan kebun teh; (2) Pilihan aktivitas adventure yang lebih beragam — kawah, arung jeram, hiking, dan glamping premium tidak banyak tersedia di Lembang; (3) Harga venue rata-rata 10–15% lebih murah dari Lembang karena aksesibilitas yang lebih terbatas.",
  },
  {
    question: "Berapa biaya corporate event di Ciwidey per pax?",
    answer:
      "Range biaya corporate event Ciwidey: outing 2D1N glamping standar Rp 2–3 jt/pax, outing 2D1N glamping premium Rp 3–4,5 jt/pax, team building full-day (tanpa menginap) Rp 1,8–2,5 jt/pax, adventure retreat 3D2N Rp 4–6 jt/pax. Harga lebih kompetitif dari Lembang untuk skala yang sama.",
  },
  {
    question: "Berapa jarak Ciwidey dari Bandung dan Jakarta?",
    answer:
      "Dari Bandung kota: 1–1,5 jam via Jalan Kopo–Soreang–Ciwidey. Dari Jakarta: 3–4 jam via Tol Cipali + Soreang tergantung kondisi lalu lintas. Karena jarak lebih jauh, kami sangat rekomendasikan berangkat pagi hari (sebelum jam 7) untuk menghindari kemacetan. Untuk tim dari Jakarta, menginap 2 malam lebih optimal agar perjalanan worth it.",
  },
  {
    question: "Aktivitas apa yang tersedia di Ciwidey untuk corporate team building?",
    answer:
      "8 aktivitas unggulan Ciwidey: (1) Kunjungan Kawah Putih — iconic, memorable, cocok untuk company photo; (2) Glamping di kawasan hutan; (3) Arung jeram Sungai Palayangan (grade 2–3, cocok untuk corporate); (4) ATV track di area perkebunan; (5) Tea walk dan petik teh di Rancabali; (6) Danau Situ Patenggang — kayaking dan boat; (7) Outbound high-rope dan flying fox; (8) Night trekking dan survival cooking. Semua activity bisa dikombinasikan dalam program 2D1N atau 3D2N.",
  },
  {
    question: "Apa venue glamping corporate terbaik di Ciwidey?",
    answer:
      "5 venue glamping terbaik di Ciwidey untuk corporate event: (1) Situ Patenggang Glamping — danau view, kapasitas 30–80 pax; (2) Kawah Putih Glamping Resort — proximity dengan kawah, capacity 20–60 pax; (3) Rancabali Tea Estate Glamping — dalam perkebunan teh, nuansa eksklusif; (4) Camp Pengalengan — lebih remote, ideal untuk retreat intensif 10–40 pax; (5) Ciwidey Valley Resort — glamping terbesar di area, kapasitas 80–200 pax dengan ballroom kecil.",
  },
  {
    question: "Apakah event di Ciwidey aman dari sisi cuaca dan keamanan aktivitas?",
    answer:
      "Ciwidey di musim hujan (November–Maret) bisa sangat lembab dan berkabut — ini justru menambah nuansa glamping tapi perlu persiapan matang. Kami selalu siapkan: (1) Tent-grade waterproof untuk semua glamping equipment; (2) Activity backup indoor (cooking class, board game, workshop); (3) Rundown contingency per skenario cuaca; (4) First aid kit lengkap dan emergency contact untuk semua aktivitas outdoor; (5) Arung jeram Ciwidey hanya kami operate bila level air dan cuaca aman — tidak ada pressure untuk tetap jalan kalau kondisi tidak mendukung.",
  },
  {
    question: "Apa perbedaan outing di Ciwidey vs Lembang?",
    answer:
      "Ciwidey: lebih remote (1 jam dari Bandung), udara lebih dingin, aktivitas lebih adventurous (kawah, rafting, glamping wild), harga venue lebih kompetitif 10–15%, cocok untuk tim yang mau 'benar-benar escape'. Lembang: lebih accessible (25–35 menit dari Bandung), venue lebih beragam, lebih warm dan ramai, cocok untuk first-timer atau tim yang punya constraint waktu perjalanan. Rekomendasi kami: first-timer → Lembang. Tim yang sudah pernah outing Lembang dan mau experience baru → Ciwidey.",
  },
];

const VENUES_CIWIDEY = [
  {
    name: "Ciwidey Valley Resort",
    cap: "Glamping + ballroom kecil, 80–200 pax",
    type: "Glamping resort",
    notes: "Terbesar di kawasan Ciwidey. Glamping tent + function room untuk gathering malam. Paling lengkap untuk corporate besar.",
  },
  {
    name: "Situ Patenggang Area Camp",
    cap: "Lakeside camp, 30–80 pax",
    type: "Nature camp",
    notes: "Danau view iconic. Sangat visual dan memorable. Kayaking + campfire tersedia. Ideal untuk team bonding intimate.",
  },
  {
    name: "Rancabali Tea Estate",
    cap: "Private tea estate, 20–60 pax",
    type: "Heritage estate",
    notes: "Dalam kebun teh PTPN VIII. Nuansa eksklusif — jarang dipakai untuk corporate tapi punya atmosphere yang tidak ada duanya.",
  },
  {
    name: "Kawah Putih Eco Camp",
    cap: "Adventure camp, 20–80 pax",
    type: "Eco camp",
    notes: "Dekat dengan kawasan Kawah Putih. Aktivitas outdoor paling beragam di areanya. Udara paling dingin di Ciwidey.",
  },
  {
    name: "Pengalengan Private Retreat",
    cap: "Ultra-private, 10–40 pax",
    type: "Private retreat",
    notes: "Untuk executive offsite atau leadership retreat yang butuh privasi maksimal. Koneksi minimal, fokus maksimal.",
  },
];

export default function CorporateEventCiwideyPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Corporate Event Bandung", url: `${SITE.url}/corporate-event-bandung` },
      { name: "Corporate Event Ciwidey", url: URL },
    ]),
    serviceSchema({
      name: "Corporate Event Ciwidey",
      description:
        "Specialist corporate event di Ciwidey, Bandung Selatan — outing kantor, glamping corporate, team building adventure, dan leadership retreat di kawasan Kawah Putih.",
      priceRange: "Rp 1.800.000 - Rp 6.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Merencanakan Corporate Outing di Ciwidey",
      description: "5 langkah untuk merencanakan corporate outing di Ciwidey yang berkesan dan berjalan lancar.",
      steps: [
        { name: "Putuskan apakah butuh menginap atau tidak", text: "Ciwidey 1 jam dari Bandung — day-trip feasible tapi melelahkan kalau ada banyak activity. Untuk experience optimal, 2D1N lebih recommended agar perjalanan worth it dan tim bisa benar-benar relax di malam hari." },
        { name: "Book venue minimal 8–10 minggu sebelum event", text: "Ciwidey punya venue lebih terbatas dari Lembang. Untuk peak season (April–Agustus, Oktober–Desember), booking 10 minggu sebelumnya untuk mendapat venue terbaik dan pilihan tanggal." },
        { name: "Berangkat pagi sebelum jam 7", text: "Jalur Kopo–Soreang–Ciwidey bisa macet parah di weekday pagi dan weekend. Berangkat sebelum jam 7 dari Bandung atau jam 5–5.30 dari Jakarta untuk menghindari kemacetan dan tiba tepat waktu untuk activity pertama." },
        { name: "Siapkan pakaian berlapis untuk semua peserta", text: "Ciwidey 15–18°C di siang hari dan bisa turun ke 10–12°C di malam hari. Briefing peserta untuk bawa jaket, kaos kaki, dan sepatu tertutup — terutama kalau ada activity malam atau camping." },
        { name: "Konfirmasi contingency cuaca dari awal", text: "Minta vendor tunjukkan rundown alternatif untuk skenario hujan sebelum event. Di Ciwidey, kabut berat atau hujan sore sangat umum. Plan indoor activity backup yang sudah tersedia di venue — bukan hanya 'nanti diatur'." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="Corporate event di Ciwidey? Proposal + venue glamping dalam 24 jam."
        context="corporate event di Ciwidey, Bandung Selatan"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.heroMain.src}
              alt="Corporate event Ciwidey — glamping dan outing di kawasan Kawah Putih Bandung Selatan"
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
                <span className="text-paper/75">Ciwidey</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Kawasan Kawah Putih · Bandung Selatan · Update 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Corporate Event Ciwidey:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Outing, Glamping & Adventure di Kawah Putih.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Ciwidey menawarkan pengalaman corporate event yang{" "}
                <strong className="text-paper/90">lebih adventurous dan immersive</strong>{" "}
                dari Lembang — kawah vulkanik, kebun teh, glamping premium, dan arung
                jeram dalam satu kawasan di{" "}
                <strong className="text-paper/90">Bandung Selatan</strong>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
                >
                  Request Proposal Ciwidey
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildWaLink("corporate event di Ciwidey, Bandung Selatan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
                >
                  <Whatsapp size={16} />
                  Chat Langsung
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/60">
                <span>Kawah Putih · Situ Patenggang · Rancabali</span>
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
                <p className="eyebrow-brand">Quick Answer — Ciwidey</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Corporate event di Ciwidey tersedia untuk{" "}
                <strong>10–200 pax</strong> dengan harga{" "}
                <strong>Rp 1,8–5 jt/pax</strong>. Kawasan ini ideal untuk tim yang mau{" "}
                <strong>benar-benar escape</strong> dari rutinitas kota — glamping di area kawah, arung jeram, dan tea walk
                di Rancabali. Lebih adventurous, lebih affordable, dan lebih memorable dari destinasi mainstream.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Jarak: ~1 jam dari Bandung</Tag>
                <Tag>Pax: 10–200</Tag>
                <Tag>Budget: Rp 1,8–5 jt/pax</Tag>
                <Tag>Glamping tersedia</Tag>
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
            <p className="eyebrow text-slate mb-3">Venue Pilihan</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
              Venue corporate event terbaik di Ciwidey.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {VENUES_CIWIDEY.map((v) => (
                <div key={v.name} className="rounded-2xl border border-border bg-paper p-5">
                  <h3 className="font-semibold text-sm text-ink mb-1">{v.name}</h3>
                  <p className="text-xs text-brand font-medium mb-1">{v.type}</p>
                  <p className="text-xs text-slate mb-2">{v.cap}</p>
                  <p className="text-xs text-slate">{v.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-14 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Aktivitas Unggulan</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
              Yang membuat Ciwidey berbeda.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🌋", name: "Kawah Putih", desc: "Kawah vulkanik ikonik — company photo yang tidak bisa dilakukan di venue lain manapun." },
                { icon: "⛺", name: "Glamping Premium", desc: "Dome tent atau safari tent dengan tempat tidur dan bedding quality — bukan tenda biasa." },
                { icon: "🚣", name: "Arung Jeram", desc: "Sungai Palayangan grade 2–3 — seru tapi aman untuk group corporate mix semua usia." },
                { icon: "🍵", name: "Tea Walk Rancabali", desc: "Jalan santai di antara perkebunan teh PTPN — bonding casual yang tidak forced." },
                { icon: "🏍️", name: "ATV Track", desc: "Off-road ATV di area perkebunan — pilihan activity yang selalu jadi favorit peserta." },
                { icon: "🚣", name: "Situ Patenggang", desc: "Kayaking dan perahu bebek di danau legendaris — milestone photo yang memorable." },
                { icon: "🔥", name: "Night Campfire", desc: "Api unggun + acoustic musik + storytelling — momen bonding paling memorable setiap outing." },
                { icon: "🧗", name: "Outbound Adventure", desc: "High-rope, flying fox, dan group challenge di outdoor camp — cocok untuk team development." },
              ].map((a) => (
                <div key={a.name} className="rounded-xl border border-border bg-paper p-4">
                  <div className="text-2xl mb-2">{a.icon}</div>
                  <p className="font-semibold text-sm text-ink mb-1">{a.name}</p>
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
                Estimasi biaya corporate event Ciwidey 2026.
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
                      { format: "Team building / outbound (1 hari)", pax: "20–150", price: "Rp 1,8–2,5 jt" },
                      { format: "Glamping 2D1N standar", pax: "20–100", price: "Rp 2–3 jt" },
                      { format: "Glamping 2D1N premium", pax: "20–80", price: "Rp 3–4,5 jt" },
                      { format: "Outing adventure 2D1N (rafting + outbound)", pax: "30–120", price: "Rp 2,5–3,5 jt" },
                      { format: "Retreat 3D2N (executive / leadership)", pax: "10–40", price: "Rp 4–6 jt" },
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
              <p className="text-xs text-slate mt-3">* Belum termasuk PPN 11%. Transport dari Bandung kota atau Jakarta included dalam estimasi.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow text-slate mb-3">FAQ</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
                Pertanyaan tentang corporate event di Ciwidey.
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

        {/* Related */}
        <section className="py-14 border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Lokasi lainnya</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/corporate-event-lembang", label: "Corporate Event Lembang", desc: "Lebih accessible — 25 menit dari Bandung, 200+ venue pilihan" },
                { href: "/glamping-corporate-bandung", label: "Glamping Corporate Bandung", desc: "Panduan lengkap glamping corporate di seluruh Bandung area" },
                { href: "/corporate-event-bandung", label: "Corporate Event Bandung", desc: "Overview semua format dan destinasi corporate event Bandung" },
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
            <p className="eyebrow text-brand mb-4">Corporate Event Ciwidey</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-xl mx-auto">
              Siap plan outing ke Ciwidey?
            </h2>
            <p className="text-paper/70 mb-8 max-w-xl mx-auto">
              Ceritakan pax, format (glamping / outbound / retreat), dan tanggal target — kami kirim rekomendasi venue Ciwidey dan proposal dalam 24 jam.
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
                href={buildWaLink("corporate event di Ciwidey, Bandung Selatan")}
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
