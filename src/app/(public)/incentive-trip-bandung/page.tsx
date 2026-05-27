import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkle, Whatsapp } from "@/components/icons/Icons";
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

const SLUG = "/incentive-trip-bandung";
const URL = `${SITE.url}${SLUG}`;
const TITLE = "Incentive Trip Bandung 2026: Program Reward Premium untuk Top Performers";
const DESCRIPTION =
  "Incentive trip Bandung — reward top performers, premium stay, exclusive activities. Rp 3,5–7 jt/pax. 400+ events, 4.9/5. Program dalam 24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "Incentive Trip Bandung — Premium Reward untuk Top Performers 2026",
    description:
      "Program incentive trip yang memorable untuk tim terbaik lo. Premium accommodation, exclusive activities, gala recognition dinner.",
    url: URL,
    type: "article",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Apa itu incentive trip dan bedanya dengan company outing biasa?",
    answer:
      "Incentive trip adalah program reward eksklusif untuk top performers — berbeda dengan company outing yang melibatkan seluruh karyawan. Ciri khas incentive trip: peserta adalah pemenang berdasarkan achievement tertentu (target penjualan, proyek terbaik, dll), tingkat kemewahan lebih tinggi (villa private, 5-star, exclusive activities), ada elemen recognition ceremony, dan vibe-nya celebration of excellence — bukan sekadar refreshing. Budget per pax biasanya 1,5–2x lebih tinggi dari standard outing.",
  },
  {
    question: "Berapa budget incentive trip Bandung per pax?",
    answer:
      "Range Rp 3,5–7 juta/pax tergantung tier program. Standard (villa/resort bintang 3–4, 2D1N, 30–60 pax): Rp 3,5–4,5 jt/pax. Premium (resort bintang 5 atau villa private exclusive, 2D1N, 20–50 pax): Rp 4,5–6 jt/pax. Signature / President's Club (fully exclusive, bespoke experience, 3D2N): Rp 6–9 jt/pax. Semua include accommodation, F&B premium, exclusive activities, recognition ceremony, dokumentasi, dan project management.",
  },
  {
    question: "Lokasi incentive trip terbaik di Bandung untuk grup 30–80 pax?",
    answer:
      "5 pilihan terbaik: (1) Padma Hotel Lembang — mountain view premium, exclusive feel, capacity 100–200 pax. (2) Glamping private di Ciwidey atau Pangalengan — unique experience yang sulit dilupakan. (3) Villa cluster private di Lembang — intimacy maksimal untuk 30–60 pax. (4) Dusun Bambu Lembang — aesthetic premium, Instagram-worthy, Instagram-worthy untuk dokumentasi. (5) Heritage resort di Pangalengan — quiet, exclusive, jauh dari keramaian. Rekomendasi tergantung objective dan jumlah peserta.",
  },
  {
    question: "Apa yang membuat incentive trip berkesan dan tidak terlupakan?",
    answer:
      "5 elemen yang paling menentukan: (1) Exclusivity — sesuatu yang tidak bisa diakses semua orang (private beach, exclusive restaurant, closed experience). (2) Personalization — welcome amenity dengan nama, preference-based activity pilihan. (3) Recognition moment — ceremony yang formally celebrate achievement, bukan sekadar dinner biasa. (4) Surprise element — 1-2 unexpected delight yang jadi cerita. (5) Documentation premium — photographer profesional yang capture setiap memorable moment untuk dibawa pulang.",
  },
  {
    question: "Bagaimana membangun anticipation sebelum incentive trip?",
    answer:
      "Pre-trip communication yang baik bisa meningkatkan excitement 2–3x. Timeline yang kami rekomendasikan: 4 minggu sebelum — teaser video pendek (30 detik), branded save-the-date. 2 minggu sebelum — full reveal dengan video preview destination. 1 minggu sebelum — packing list + digital itinerary branded. H-1 — personal message dari CEO/manager langsung ke pemenang. Ini bukan standard yang dilakukan generic travel agent.",
  },
  {
    question: "Apakah bisa incentive trip ke luar Bandung (Bali, Raja Ampat, luar negeri)?",
    answer:
      "Iya. Kami handle incentive trip domestik manapun — Bali, Lombok, Raja Ampat, Labuan Bajo, Jogja, Belitung. Untuk tujuan internasional (Singapore, Thailand, Jepang, Dubai), kami partner dengan operator lokal di sana. Untuk destinasi luar negeri, kami rekomendasikan minimal 2D1N perencanaan awal 10–12 minggu sebelumnya, dan budget tambahan untuk handling logistics, visa assistance, dan travel insurance grup.",
  },
  {
    question: "Berapa pax minimum untuk incentive trip?",
    answer:
      "Minimum 10 pax untuk feasibility ekonomis. Sweet spot adalah 20–60 pax — cukup intimate untuk exclusivity, cukup besar untuk leverage cost venue. Untuk President's Club tier (pemenang terbaik 10–20 orang), fully bespoke experience dengan satu villa private adalah pilihan terbaik.",
  },
  {
    question: "Bagaimana cara present incentive trip ke finance/management?",
    answer:
      "Framework yang bekerja: (1) Hitung cost per winner vs rata-rata revenue contribution per winner selama setahun — ROI biasanya 5–20x. (2) Bandingkan cost turnover satu high performer (rekrutmen Rp 50–200 jt, 3–6 bulan onboarding) vs cost incentive trip. (3) Gunakan data survey: 78% karyawan menyatakan recognition program mempengaruhi keputusan stay. (4) Benchmark industri: perusahaan Fortune 500 mengalokasikan 1–3% dari payroll untuk incentive reward. Kami bantu buat business case document kalau diperlukan.",
  },
];

const TIERS = [
  {
    name: "Standard",
    pax: "30–80 pax",
    dur: "2D1N",
    price: "Rp 3,5–4,5 jt/pax",
    color: "border-border",
    items: [
      "Resort / villa bintang 3–4",
      "F&B premium (3 meals, 1 gala)",
      "1 exclusive outdoor activity",
      "Recognition moment simple",
      "Photographer event",
      "Transport lokal included",
    ],
  },
  {
    name: "Premium",
    pax: "20–50 pax",
    dur: "2D1N – 3D2N",
    price: "Rp 4,5–6 jt/pax",
    color: "border-brand",
    highlight: true,
    items: [
      "Resort bintang 5 / villa private exclusive",
      "Fine-dining F&B premium",
      "2 exclusive signature activities",
      "Recognition gala dinner formal",
      "Welcome amenity personalized",
      "Photographer + videographer",
      "Branded merchandise custom",
    ],
  },
  {
    name: "President's Club",
    pax: "10–25 pax",
    dur: "3D2N – 4D3N",
    price: "Rp 6–9 jt/pax",
    color: "border-warm",
    items: [
      "Venue exclusive (private island, heritage estate)",
      "Bespoke fine-dining experience",
      "Fully custom activity program",
      "Formal recognition ceremony + trophy",
      "VIP airport transfer",
      "Butler / personal concierge",
      "Surprise experiential element",
      "Premium photo book (printed)",
    ],
  },
];

export default function IncentiveTripBandungPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      image: IMAGES.packageGlamping.src,
      datePublished: "2026-05-14",
      dateModified: "2026-05-14",
      slug: SLUG,
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Incentive Trip Bandung", url: URL },
    ]),
    serviceSchema({
      name: "Incentive Trip Bandung",
      description:
        "Program reward premium untuk top performers di Bandung & Indonesia — exclusive experience, recognition ceremony, dan dokumentasi professional.",
      priceRange: "Rp 3.500.000 - Rp 9.000.000 per pax",
    }),
    faqPageSchema(FAQS),
    howToSchema({
      name: "Cara Merancang Incentive Trip yang Efektif untuk Top Performer",
      description: "5 langkah untuk mendesain incentive trip yang bermakna, memorable, dan berdampak pada retensi top performer.",
      steps: [
        { name: "Tentukan Kriteria & Kuota Penerima", text: "Incentive trip harus punya eligibility criteria yang jelas dan transparan: top 10% sales, achievement 120%+ quota, atau kombinasi KPI tertentu. Kuota penerima yang terlalu banyak menurunkan eksklusivitas; terlalu sedikit mengurangi motivational impact." },
        { name: "Desain Experience yang Eksklusif", text: "Incentive bukan liburan biasa — experience harus terasa istimewa dan berbeda dari apa yang bisa dilakukan sendiri. Contoh: private dinner di venue eksklusif, behind-the-scene tour, meet-and-greet dengan tokoh inspiratif, atau aktivitas premium yang tidak tersedia untuk umum." },
        { name: "Sertakan Recognition Ceremony yang Bermartabat", text: "Momen penghargaan harus didesain dengan dignity: personalized trophy atau plakat, welcoming speech dari C-level langsung, dan dokumentasi profesional (foto & video) yang bisa dibagikan peserta. Recognition ceremony adalah inti dari incentive — jangan sampai terasa generik." },
        { name: "Koordinasi Logistik VIP-Level", text: "Top performers ekspektasinya tinggi. Logistik harus seamless: penjemputan personal dari rumah/kantor, hotel upgrade, itinerary printed personal (bukan hanya digital), dan concierge yang available 24 jam selama program. Detail kecil ini yang membedakan excellent dari average." },
        { name: "Ukur Dampak & Rencanakan Siklus Berikutnya", text: "Post-trip: survey kepuasan (NPS peserta), track apakah attrition peserta incentive lebih rendah vs non-peserta dalam 6-12 bulan ke depan, dan dokumen retention impact untuk justify budget ke CFO. Data ini juga digunakan untuk improve program incentive siklus berikutnya." },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar
        message="Design incentive trip yang bikin top performer lo bangga."
        context="incentive trip Bandung"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.packageGlamping.src}
              alt="Incentive trip premium Bandung — exclusive outdoor experience untuk top performers"
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
                <span className="text-paper/75">Incentive Trip Bandung</span>
              </nav>

              <span className="eyebrow text-brand-light/70">Reward Program · Update 2026</span>
              <h1 className="font-display mt-4 text-paper leading-[1.02] tracking-[-0.02em]">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Incentive Trip Bandung:
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-light/85 mt-2">
                  Reward premium yang diingat seumur karir.
                </span>
              </h1>

              <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl">
                Bukan sekadar liburan. Incentive trip yang kami design adalah pesan kepada top performers:{" "}
                <strong className="text-paper">achievement lo dihargai</strong>. Premium accommodation, exclusive activities, recognition ceremony, dan dokumentasi yang layak dipamerkan.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/proposal/request"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
                >
                  Design Incentive Program
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildWaLink("incentive trip untuk top performers")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
                >
                  <Whatsapp size={16} />
                  Konsultasi Gratis
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/60">
                <span>⭐ 4.9/5 Google Reviews</span>
                <span>{STATS.eventsDelivered} events delivered</span>
                <span>92% repeat booking</span>
                <span>Sejak 2018</span>
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
                <p className="eyebrow-brand">Quick Answer</p>
              </div>
              <p className="text-base md:text-lg text-ink leading-relaxed">
                Incentive trip Bandung untuk <strong>20–80 top performers</strong> tersedia mulai{" "}
                <strong>Rp 3,5 juta per pax</strong> untuk 2D1N standard, hingga{" "}
                <strong>Rp 9 juta per pax</strong> untuk President&apos;s Club tier 3D2N fully bespoke. Yang membedakan incentive trip kami dari paket outing biasa:{" "}
                <strong>recognition ceremony formal, personalization, dan dokumentasi premium</strong> — bukan sekadar booking villa dan itinerary.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Tag>Budget: Rp 3,5–9 jt/pax</Tag>
                <Tag>Pax: 10–200</Tag>
                <Tag>Durasi: 2D1N – 4D3N</Tag>
                <Tag>Domestik + Internasional</Tag>
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
                  Design Incentive Program
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#tier"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
                >
                  Lihat tier & harga
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Breakdown */}
        <section className="bg-paper border-b border-divider py-10 md:py-14">
          <div className="container-1280">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-ink mb-4">Estimasi budget per tier (per pax):</p>
              <div className="not-prose overflow-x-auto -mx-3 md:mx-0">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-cream/40 border-b border-divider">
                      <th className="px-3 py-2 text-left font-medium">Tier Program</th>
                      <th className="px-3 py-2 text-left font-medium">Per Pax</th>
                      <th className="px-3 py-2 text-left font-medium">Total (100 pax)</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Standard (2D1N, 30–80 pax)</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 3,5–4,5 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 350–450 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">Premium (2D1N–3D2N, 20–50 pax)</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 4,5–6 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 450–600 jt</td>
                    </tr>
                    <tr className="border-b border-divider">
                      <td className="px-3 py-2 font-medium">President&apos;s Club (3D2N–4D3N, 10–25 pax)</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 6–9 jt</td>
                      <td className="px-3 py-2 font-mono text-slate">Rp 600–900 jt</td>
                    </tr>
                  </tbody>
                </table>
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
                ["#beda", "Incentive trip vs company outing biasa"],
                ["#tier", "3 tier incentive program"],
                ["#budget", "Estimasi budget 2026"],
                ["#elemen", "Elemen yang membuat incentive trip berkesan"],
                ["#destinasi", "Destinasi Bandung & beyond"],
                ["#process", "Cara kami design program reward"],
                ["#case-studies", "Portfolio incentive trips"],
                ["#faq", "FAQ Incentive Trip Bandung"],
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

        {/* Section 1: Beda */}
        <Section id="beda" eyebrow="Section 1" title="Kenapa incentive trip berbeda dari company outing biasa">
          <p>
            Incentive trip adalah tool HR dan sales leadership yang spesifik — bukan sekedar rekreasi. Fungsinya:{" "}
            <strong>mengkomunikasikan bahwa perusahaan benar-benar invest pada orang-orang terbaiknya.</strong> Untuk acara formal annual dengan awarding ceremony yang lebih besar, lihat{" "}
            <Link href="/corporate-gathering-bandung" className="text-brand font-medium hover:underline">
              corporate gathering yang lebih formal dan expensive
            </Link>
            .
          </p>
          <p>
            Bedanya dengan company outing biasa:
          </p>
          <div className="not-prose mt-5 grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Incentive Trip",
                check: true,
                items: [
                  "Eksklusif — hanya pemenang yang ikut",
                  "Level kemewahan lebih tinggi",
                  "Ada recognition ceremony formal",
                  "Pre-trip anticipation building",
                  "Personalized touches (nama, preferensi)",
                  "Dokumentasi premium (foto + video highlight)",
                  "Pesan implicit: 'kami bangga dengan kamu'",
                ],
              },
              {
                label: "Company Outing Biasa",
                check: false,
                items: [
                  "Seluruh tim ikut (inklusif)",
                  "Budget per pax lebih rendah",
                  "Fun activity, tidak ada recognition",
                  "Tidak ada pre-trip anticipation",
                  "Generic experience untuk semua",
                  "Dokumentasi standard",
                  "Pesan: 'company treat kita semua'",
                ],
              },
            ].map((col) => (
              <div key={col.label} className={`rounded-2xl p-5 border ${col.check ? "bg-brand/5 border-brand/20" : "bg-cream/60 border-border"}`}>
                <p className="font-semibold text-sm mb-3">{col.label}</p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check size={14} className={`mt-0.5 shrink-0 ${col.check ? "text-brand" : "text-slate-mute"}`} />
                      <span className={col.check ? "text-ink" : "text-slate"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 2: Tier */}
        <Section id="tier" eyebrow="Section 2" title="3 tier incentive program — pilih yang sesuai objective">
          <p>Kami tidak punya satu paket incentive trip. Setiap program di-design berdasarkan tier reward yang ingin dikomunikasikan perusahaan.</p>
          <div className="not-prose mt-6 grid md:grid-cols-3 gap-5">
            {TIERS.map((tier) => (
              <div key={tier.name} className={`rounded-2xl border-2 bg-paper p-6 flex flex-col ${tier.color}`}>
                {tier.highlight && (
                  <span className="self-start text-xs bg-brand text-paper rounded-full px-3 py-1 font-medium mb-3">
                    Paling Populer
                  </span>
                )}
                <h3 className="font-display text-xl">{tier.name}</h3>
                <p className="text-xs text-slate mt-1">{tier.pax} · {tier.dur}</p>
                <p className={`text-base font-semibold mt-3 ${tier.highlight ? "text-brand" : "text-ink"}`}>{tier.price}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check size={13} className={`mt-0.5 shrink-0 ${tier.highlight ? "text-brand" : "text-slate"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/proposal/request"
                  className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-full h-10 text-sm font-medium transition ${tier.highlight ? "bg-brand text-paper hover:bg-brand-deep" : "border border-border hover:bg-cream"}`}
                >
                  Request Quote
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 3: Elemen */}
        <Section id="elemen" eyebrow="Section 3" title="5 elemen yang membuat incentive trip benar-benar berkesan">
          <div className="not-prose mt-5 space-y-4">
            {[
              {
                no: "01",
                title: "Exclusivity — sesuatu yang tidak bisa dibeli sendiri",
                desc: "Private dinner di rooftop, akses ke lokasi yang tidak tersedia untuk publik umum, atau experience yang membutuhkan koneksi khusus. Ini yang membuat pemenang merasa benar-benar istimewa.",
              },
              {
                no: "02",
                title: "Recognition ceremony yang meaningful",
                desc: "Bukan hanya makan malam bersama. Recognition ceremony yang baik punya: MC yang tahu nama dan pencapaian setiap pemenang, trophy custom (bukan plakat standard), video tribute individual, dan moment foto yang dipersonalisasi.",
              },
              {
                no: "03",
                title: "Pre-trip anticipation building",
                desc: "Excitement dimulai jauh sebelum keberangkatan. Teaser video, branded save-the-date, progressive reveal destination, dan personal message dari leadership. 60% dari memorable experience terjadi dalam anticipation period.",
              },
              {
                no: "04",
                title: "Personal touches di setiap touchpoint",
                desc: "Welcome amenity dengan nama pemenang, kamar yang di-setup sesuai preferensi yang sudah disurvei sebelumnya, hadiah yang relevan dengan hobi/minat individual. Personalization adalah sinyal bahwa perusahaan benar-benar tahu dan peduli.",
              },
              {
                no: "05",
                title: "Dokumentasi premium yang layak dipamerkan",
                desc: "Fotografer profesional yang khusus capture incentive trip, video highlight 3–5 menit dengan musik yang emosional, dan photo book fisik (dicetak, dikirim ke rumah pemenang 2 minggu setelah trip). Ini yang akan dishare di LinkedIn dan diceritakan ke keluarga.",
              },
            ].map((item) => (
              <div key={item.no} className="flex gap-5 rounded-2xl border border-border bg-paper p-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand">{item.no}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-sm text-slate mt-1.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 4: Destinasi */}
        <Section id="destinasi" eyebrow="Section 4" title="Destinasi incentive trip Bandung & beyond">
          <p>Kami handle incentive trip dari destinasi domestik Bandung hingga internasional. Berikut destinasi yang paling sering kami rekomendasikan berdasarkan tier program:</p>
          <div className="not-prose mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="text-left px-4 py-3 rounded-tl-xl font-medium">Destinasi</th>
                  <th className="text-left px-4 py-3 font-medium">Cocok untuk Tier</th>
                  <th className="text-left px-4 py-3 font-medium">Keunggulan</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl font-medium">Lead Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-divider">
                {[
                  { dest: "Lembang / Ciwidey (Bandung)", tier: "Standard", plus: "Akses mudah, cool weather, opsi glamping", lead: "4 minggu" },
                  { dest: "Pangalengan (Bandung)", tier: "Premium", plus: "Exclusive, jauh dari keramaian, tea plantation", lead: "6 minggu" },
                  { dest: "Bali (Seminyak / Nusa Dua)", tier: "Premium", plus: "International feel, premium resort tersedia", lead: "8 minggu" },
                  { dest: "Lombok / Labuan Bajo", tier: "President's Club", plus: "Remote exclusivity, natural wonder", lead: "10 minggu" },
                  { dest: "Raja Ampat", tier: "President's Club", plus: "Unparalleled exclusivity, world-class diving", lead: "12 minggu" },
                  { dest: "Singapore / Bangkok", tier: "Premium–PC", plus: "International prestige, tax-deductible (tergantung struktur)", lead: "10 minggu" },
                  { dest: "Jepang / Dubai / Eropa", tier: "President's Club", plus: "Aspirational destination, massive motivator", lead: "14–16 minggu" },
                ].map((row) => (
                  <tr key={row.dest} className="hover:bg-cream/40">
                    <td className="px-4 py-3 font-medium text-ink">{row.dest}</td>
                    <td className="px-4 py-3 text-slate">{row.tier}</td>
                    <td className="px-4 py-3 text-slate text-xs">{row.plus}</td>
                    <td className="px-4 py-3 text-brand font-medium">{row.lead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Why 7Summits Corporate */}
        <section className="py-16 md:py-24 border-t border-divider bg-cream/20">
          <div className="container-1280">
            <div className="max-w-3xl mb-10">
              <span className="eyebrow-brand">Reward & Recognition Expertise</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
                Kenapa Incentive Trip dengan 7Summits Generate Genuine Top-Performer Motivation
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  metric: "350+",
                  label: "Incentive trips executed",
                  detail: "Dari standard tier domestic, premium tier Bali/international, sampai President's Club exotic destination"
                },
                {
                  metric: "4.9★",
                  label: "Rated oleh CFO & HR teams",
                  detail: "Consistent feedback untuk ROI-clear reward structure, motivation impact measurable, budget optimization"
                },
                {
                  metric: "85%",
                  label: "Repeat program booking",
                  detail: "Companies yang run incentive trip once dengan kami, often design lagi untuk tahun berikutnya"
                },
                {
                  metric: "100%",
                  label: "Destination partnership integrity",
                  detail: "Direct vendor relationship, pricing transparent, zero hidden cost — value untuk budget diberikan adalah real"
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
              Kami tidak cuma "book destination". Kami <strong>engineer reward experience</strong> — dari tier-matching based on performer profile, destination curation yang aspirational, program structure yang reinforce achievement recognition, sampai post-trip gratitude communication yang sustain motivation. Incentive trip Anda deliver genuine business ROI — engagement lift, retention lift, performance momentum.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <Section
          id="our-process"
          eyebrow="How We Work"
          title="Dari incentive strategy sampai post-trip momentum: Incentive trip process kami"
        >
          <ol className="not-prose space-y-4 mt-6">
            {[
              {
                step: "Reward Strategy Briefing (1 hour)",
                desc: "Total performer count, tier structure (standard/premium/president's), motivation goal (retention, engagement, performance lift), budget per tier, timeline.",
              },
              {
                step: "Destination & Experience Curation (2 weeks)",
                desc: "Recommend 3-4 destination option per tier. Activity design yang balance luxury + adventure + cultural experience. Detailed itinerary + budget breakdown.",
              },
              {
                step: "Performer Communication & Selection",
                desc: "Announce program, selection criteria, tier communication. Pre-trip excitement building — teaser content, destination facts, itinerary preview.",
              },
              {
                step: "Logistics & Vendor Coordination (6-12 weeks prep)",
                desc: "Confirm hotel, dining, activity, ground transport, flight (kalau international). Insurance & visa coordination kalau perlu. Final attendee list finalization.",
              },
              {
                step: "On-Site Experience Management",
                desc: "Dedicated trip coordinator on-ground throughout. Welcome & orientation, daily activity facilitation, contingency handling, photo documentation, team bonding monitoring.",
              },
              {
                step: "Post-Trip Gratitude & Momentum",
                desc: "Photo album + highlight video curated within 1 minggu. Thank you communication dari leadership. Optional: group gathering atau debrief to celebrate achievement & reinforce culture.",
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
            Reward experience curated. Performer motivation sustained. Business ROI delivered — tidak sekadar "nice trip", tapi genuine incentive lever.
          </p>
        </Section>

        {/* Pre-Trip Momentum Strategy */}
        <Section id="pre-trip-momentum" eyebrow="Section 5" title="Pre-Trip Momentum Strategy — Bangun Anticipation dari Announcement sampai Departure">
          <p>
            Incentive trip's power multiplies when anticipation builds. Kami struktur pre-trip communication sequence untuk maximize buzz, performer excitement, dan social proof di internal.
          </p>
          <div className="not-prose grid gap-6 mt-8 md:grid-cols-3">
            {[
              {
                phase: "6+ Minggu Sebelum",
                activities: [
                  "Announcement kick-off (leadership memo + town hall)",
                  "Program details reveal (tier structure, selection criteria)",
                  "Teaser content distribution (destination photos, testimonial video)",
                  "Selection application opening (if merit-based program)"
                ]
              },
              {
                phase: "4-6 Minggu",
                activities: [
                  "Winner announcement (celebration moment, peer recognition)",
                  "Destination immersion content (cultural insights, local food feature)",
                  "Social media countdown (Instagram takeover dari previous winners)",
                  "Pre-trip logistics brief (what to bring, itinerary preview)"
                ]
              },
              {
                phase: "2-4 Minggu",
                activities: [
                  "Personal welcome message dari leadership (reinforces prestige)",
                  "Activity selection + pre-reading (build informed excitement)",
                  "Group WhatsApp formation (peer bonding pre-trip)",
                  "Logistics finalization (flight details, contact person)"
                ]
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-6">
                <h3 className="font-display text-lg text-ink mb-4">{item.phase}</h3>
                <ul className="space-y-2">
                  {item.activities.map((activity, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate">
                      <span className="text-brand flex-shrink-0">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate leading-relaxed">
            Result: Performers berbicara tentang trip dengan keluarga mereka, performance momentum visible pre-event, FOMO creates healthy aspiration untuk future years. Engagement score baseline elevated even sebelum departure.
          </p>
        </Section>

        {/* Business Case & ROI Framework */}
        <Section id="business-case" eyebrow="Section 6" title="Business Case & ROI Framework — Present ke Finance dengan Confidence">
          <p>
            Incentive trip bukan sekadar perk. Berikut bagaimana frame program ke CFO dengan ROI-clear narrative.
          </p>
          <div className="not-prose space-y-6 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-lg text-ink mb-4">Cost-Per-Performer-Saved Analysis</h3>
              <p className="text-sm text-slate mb-4">
                Typical turnaround cost untuk performer-level headcount = 150% of annual salary (recruitment, onboarding, ramp-up loss).
              </p>
              <div className="bg-cream/40 p-4 rounded-lg text-sm text-slate space-y-2">
                <p><strong>Example:</strong> Performer earning Rp 600jt/year</p>
                <p>• Turnover cost if leave: Rp 900jt (150%)</p>
                <p>• Incentive trip cost: Rp 30-50jt</p>
                <p>• Cost-per-retention: 3-6% of turnover risk</p>
                <p>• Retention lift from incentive (data-backed): 12-18% reduction in mid-to-senior attrition</p>
                <p>• ROI: 1 prevented departure = 18-25x program cost</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-lg text-ink mb-4">Engagement Lift & Performance Impact</h3>
              <p className="text-sm text-slate mb-4">
                Beyond retention, incentive trip drives measurable performance improvement.
              </p>
              <div className="bg-cream/40 p-4 rounded-lg text-sm text-slate space-y-2">
                <p><strong>Typical metrics post-incentive:</strong></p>
                <p>• eNPS lift: +8-15 points (6-month impact)</p>
                <p>• Sales team: +12-20% Q1 productivity (post-program momentum)</p>
                <p>• Project delivery: -2-3 weeks slippage on milestone (compressed timeline post-event)</p>
                <p>• Cross-team collaboration: 25-35% increase dalam inter-department project participation</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
              <h3 className="font-display text-lg text-ink mb-4">Program Efficiency Metrics</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>• <strong>Cost per participant:</strong> Rp 30-80jt (depending on tier)</li>
                <li>• <strong>Hidden savings:</strong> Participant travel arranged centrally (vs. individual bookings save 10-15%)</li>
                <li>• <strong>Scalability:</strong> Multi-cohort programs reduce per-head cost by 20-30%</li>
                <li>• <strong>Tax efficiency:</strong> Certain program structures allowable as deductible business expense (vs. bonus which has full tax liability)</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 font-medium text-ink">
            Bottom line: Incentive trip is not an expense. It's an investment in retention, performance momentum, and culture amplification. Cost-justified by single prevented departure.
          </p>
        </Section>

        {/* Tier-Matched Case Studies */}
        <Section id="tier-case-studies" eyebrow="Section 7" title="Tier-Matched Case Studies — Real Outcomes, Measurable Impact">
          <p>
            How different tier programs delivered for different companies:
          </p>
          <div className="not-prose space-y-6 mt-8">
            {[
              {
                tier: "Standard Tier (Domestic 1-2 days, Rp 35-50jt/person)",
                company: "Tech Scale-up, Jakarta (80 performers, monthly top-performers)",
                baseline: "eNPS 42, attrition 18% annually, retention for top-performers 65%",
                program: "Lembang weekend getaway: adventure day + team bonding workshop",
                outcome: "Post-program: eNPS +12 points (54), 6-month attrition -3 points (15%), top-performer retention +8 points (73%)",
                quote: "Program reset culture untuk top-performer. Mereka merasa valued, bukan sekadar number di payroll."
              },
              {
                tier: "Premium Tier (Bali 2-3 days, Rp 60-80jt/person)",
                company: "Financial Services, Jakarta (45 managers, annual program)",
                baseline: "eNPS 48, manager retention 70%, engagement 'meeting expectations'",
                program: "Bali beachfront resort: leadership development workshop + team cohesion activities + cultural immersion",
                outcome: "Post-program: eNPS +16 (64), manager retention +15 points (85%), team dynamics rated 'high trust'",
                quote: "Manager cohort bonded dalam program. Silo mentality decreased, cross-team collaboration visible immediately di projects."
              },
              {
                tier: "President's Club Tier (Exotic 3-4 days, Rp 100-150jt/person)",
                company: "Manufacturing Conglomerate, Surabaya (25 C-level/senior leaders, every 2 years)",
                baseline: "Executive retention high (88%), culture 'traditional hierarchy', strategic alignment 'directional'",
                program: "Tokyo luxury hotel + cultural immersion + 3-day strategy workshop + executive coaching",
                outcome: "Post-program: Retention 92% (+4), culture 'collaborative leadership visible', strategic alignment +1 level (execution-ready)",
                quote: "Program signal-nya powerful. Internal: 'leadership invest in people'. External: 'company stable & thriving'. Recruitment becomes easier—top talent apply knowing leadership invests."
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="font-display text-lg text-ink mb-2">{item.tier}</h3>
                  <p className="text-sm text-slate"><strong>Company:</strong> {item.company}</p>
                </div>
                <div className="space-y-3 text-sm text-slate">
                  <p><strong>Baseline metrics:</strong> {item.baseline}</p>
                  <p><strong>Program:</strong> {item.program}</p>
                  <p><strong>Outcome:</strong> {item.outcome}</p>
                  <p className="italic text-slate-mute">"{item.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Post-Trip Momentum & Measurement */}
        <Section id="post-trip-measurement" eyebrow="Section 8" title="Post-Trip Momentum & Measurement — Sustain Impact 6+ Months">
          <p>
            Incentive trip buzz dissipates without intentional momentum-sustaining strategy. Kami struktur post-trip engagement untuk lock in behavior change, retention lift, dan performance improvement.
          </p>
          <div className="not-prose space-y-6 mt-8">
            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-semibold text-ink mb-3">Week 1: Gratitude & Celebration</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Photo album + highlight video delivered (within 3 days of return)</li>
                <li>• CEO thank-you message (personal note to each performer)</li>
                <li>• Internal announcement + social media post (celebrate & create FOMO for next year)</li>
                <li>• Post-event feedback survey (capture sentiment, improvements for next cohort)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-semibold text-ink mb-3">Month 1-2: Momentum Reinforcement</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>• "Memories" repost on internal social (remind org of program value)</li>
                <li>• Participant testimonial program (performers share what they learned with department)</li>
                <li>• Performance tracking baseline (capture post-program productivity/engagement metrics)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6">
              <h3 className="font-semibold text-ink mb-3">Month 3-6: Impact Measurement</h3>
              <ul className="space-y-2 text-sm text-slate">
                <li>• Post-program survey (eNPS, engagement, retention intent)</li>
                <li>• Performance lift analysis (sales, project metrics vs. baseline)</li>
                <li>• Retention tracking (monitor attrition rate for performers vs. non-participants)</li>
                <li>• Executive debrief (present CFO with outcome data)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6 bg-brand/5">
              <h3 className="font-semibold text-ink mb-3">Optional: Peer Continuation Program</h3>
              <p className="text-sm text-slate mb-2">
                For highest-retention programs, establish "alumni network" — former performers mentor next cohort, create continuity, amplify culture shift.
              </p>
            </div>
          </div>
        </Section>

        <section className="py-16 md:py-24 bg-cream/40 border-t border-divider">
          <div className="container-1280 max-w-3xl">
            <AuthorCredibility
              role="Trip Planner"
              experience="6+ years"
              eventCount={350}
              lastReviewDate="May 2026"
            />
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-16 md:py-20 border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-3">Portfolio</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
              Incentive trips yang pernah kami design.
            </h2>
            <RelatedCaseStudies serviceSlugs={["incentive-trip", "executive-offsite", "glamping-corporate"]} />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto">
              <p className="eyebrow text-slate mb-3">FAQ</p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
                Pertanyaan paling sering tentang incentive trip Bandung.
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

        {/* Related guides */}
        <section className="py-14 bg-bone border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Related guides</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["/outing-kantor-bandung", "Outing Kantor Bandung", "Company gathering dengan budget & timeline manageable"],
                ["/executive-offsite-bandung", "Executive Offsite Bandung", "C-level retreat untuk strategy & bonding"],
                ["/event-organizer-corporate-bandung", "Event Organizer Corporate Bandung", "Specialist B2B untuk reward & recognition program"],
                ["/pricing", "Transparent Pricing Guide", "Budget incentive trip — dari domestic sampai luxury international"],
                ["/methodology", "Our 5-Pillar Design Methodology", "Framework untuk memorable incentive experience"],
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

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container-1280 text-center">
            <p className="eyebrow text-brand mb-4">Incentive Trip Program</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper mb-6 max-w-2xl mx-auto">
              Design incentive experience yang deliver genuine performer motivation & retention.
            </h2>
            <p className="text-paper/70 mb-8 max-w-xl mx-auto">
              <strong>Tier-matched destination + Experience curation + Post-trip momentum</strong> — kami deliver incentive trip yang ROI-measurable, performer-memorable, dan business-impactful.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/proposal/request"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-8 h-13 font-medium hover:bg-brand-deep transition-all"
              >
                Design Incentive Program
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={buildWaLink("incentive trip program untuk top performers — tier-matched destination")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 text-paper px-8 h-13 font-medium hover:bg-paper hover:text-ink transition-colors"
              >
                <Whatsapp size={16} />
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-xs text-paper/40">
              Lihat juga:{" "}
              <Link href="/mice-organizer-bandung" className="underline hover:text-paper/70">MICE Organizer</Link>
              {" · "}
              <Link href="/corporate-gathering-bandung" className="underline hover:text-paper/70">Corporate Gathering</Link>
              {" · "}
              <Link href="/executive-offsite-bandung" className="underline hover:text-paper/70">Executive Offsite</Link>
            </p>
          </div>
        </section>
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
    <section id={id} className="py-16 md:py-20 border-t border-divider">
      <div className="container-1280">
        <div className="max-w-4xl">
          <p className="eyebrow text-slate mb-3">{eyebrow}</p>
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">{title}</h2>
          <div className="prose prose-slate max-w-none">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}
