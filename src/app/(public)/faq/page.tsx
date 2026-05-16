import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { getFaqCategoriesList } from "@/lib/faq-data";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  faqPageSchema,
  howToSchema,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  itemListSchema,
  articleSchema,
} from "@/lib/schema";

export const metadata = {
  title: "FAQ Corporate Outing Bandung — 111 Pertanyaan dalam 7 Kategori",
  description:
    "111 pertanyaan detail dalam 7 kategori — budget, logistik, vendor, lokasi, format, comparison, ROI. Update 2026. Verified by senior planner TourBandung Corporate.",
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: {
    title: "FAQ Corporate Outing Bandung — 111 Pertanyaan dalam 7 Kategori",
    description: "111 pertanyaan paling sering dari HR Indonesia dalam 7 kategori — budget, vendor, lokasi, ROI, dan lebih.",
    url: `${SITE.url}/faq`,
    type: "website" as const,
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "FAQ Corporate Outing Bandung — 111 Pertanyaan dalam 7 Kategori",
    description: "111 pertanyaan HR Indonesia: budget, vendor, lokasi, ROI, format. Update 2026. Verified senior planner.",
    images: [IMAGES.heroMain.src],
  },
};

const TOP_FAQS = [
  {
    question: "Berapa estimasi budget outing kantor untuk tim 100 pax di Bandung?",
    answer:
      "Budget outing kantor 100 pax di Bandung untuk paket 2D1N standar berkisar Rp 2,5–5 juta per orang, atau total Rp 250–500 juta untuk grup. Range mencakup venue, F&B 3x, activity, transportation lokal, project management, dan contingency 8%.",
    href: "/faq/budget#q1",
  },
  {
    question: "Berapa lama proses dari request proposal ke konfirmasi?",
    answer:
      "Proposal lengkap dengan breakdown & 2 alternative venue dalam 24 jam setelah briefing call. Revision 1–2 hari. Konfirmasi venue & deposit 30%, siap di-eksekusi 3 minggu kemudian.",
    href: "/faq/logistics#q1",
  },
  {
    question: "Apa bedanya outing kantor dan corporate gathering?",
    answer:
      "Outing kantor: aktivitas refreshing + bonding informal, 1-2 hari, vibe relaxed. Corporate gathering: formal annual event dengan ceremony + awarding, 2-3 hari di venue premium. Budget gathering biasanya 1.5-2x outing standard.",
    href: "/faq/comparison#q1",
  },
  {
    question: "Apa saja format umum outing kantor di Bandung?",
    answer:
      "6 format paling sering: 1-day quarterly refresh, 1D2N glamping bonding, 2D1N standard annual employee gathering, 3D2N premium corporate gathering, hybrid outbound+indoor, dan family day corporate.",
    href: "/faq/formats#q1",
  },
  {
    question: "Area mana di Bandung yang paling direkomendasikan untuk corporate outing?",
    answer:
      "Lembang (30–45 mnt dari kota): villa private, alam pegunungan, cocok untuk 50–500 pax. Ciwidey (60–90 mnt): glamping, alam terbuka, lebih adventurous. Bandung Kota: hotel bintang 4–5 dengan ballroom untuk MICE atau gathering besar. Pilihan area bergantung pada format event, pax, dan budget.",
    href: "/faq/location#q1",
  },
  {
    question: "Bagaimana cara memilih vendor EO corporate yang aman untuk procurement perusahaan?",
    answer:
      "12 poin checklist vendor: (1) NPWP aktif, (2) rekening perusahaan, (3) track record B2B terdokumentasi, (4) dedicated PM, (5) risk register, (6) breakdown line-item, (7) referensi klien yang bisa dihubungi, (8) post-event report, (9) contract clause jelas, (10) asuransi event, (11) tidak minta full payment di muka, (12) responsif dalam 24 jam working hours.",
    href: "/faq/vendor#q1",
  },
  {
    question: "Bagaimana cara mengukur ROI corporate outing untuk justifikasi ke CFO?",
    answer:
      "3-layer ROI framework: (1) Employee Retention — hitung biaya rekrutmen yang dihindari (rata-rata 6–9 bulan gaji); (2) Productivity — Gallup data: engaged employees 21% lebih produktif; (3) Collaboration — pre/post NPS internal, kualitas cross-team project 3 bulan post-event. Bandingkan biaya outing dengan cost turnover 1 orang: biasanya ROI positif jika retain 1–2 orang.",
    href: "/faq/outcome#q1",
  },
];

export default async function FaqIndexPage() {
  const categories = await getFaqCategoriesList();
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "FAQ", url: `${SITE.url}/faq` },
    ]),
    articleSchema({
      headline: "FAQ Corporate Outing Bandung — 111 Pertanyaan dalam 7 Kategori",
      alternativeHeadline: "Pertanyaan HR tentang Budget, Vendor, Lokasi, dan ROI Corporate Outing di Bandung",
      description: "111 pertanyaan detail dalam 7 kategori — budget, logistik, vendor, lokasi, format, comparison, ROI. Update 2026. Verified by senior planner TourBandung Corporate.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/faq",
      aboutService: "Corporate Outing Bandung Q&A",
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        "faq corporate outing bandung",
        "pertanyaan outing kantor bandung 2025",
        "berapa budget outing perusahaan bandung",
        "cara memilih vendor corporate event bandung",
        "faq team building bandung",
        "pertanyaan umum corporate gathering hr indonesia",
        "roi outing kantor cara menghitung",
      ],
    }),
    faqPageSchema(TOP_FAQS.map((q) => ({ question: q.question, answer: q.answer })), `${SITE.url}/faq`),
    itemListSchema({
      name: "FAQ Corporate Outing Bandung — Kategori",
      description: `${totalQuestions} pertanyaan dalam ${categories.length} kategori untuk HR dan procurement perusahaan Indonesia.`,
      url: `${SITE.url}/faq`,
      items: categories.map((c) => ({
        name: c.title,
        url: `${SITE.url}/faq/${c.slug}`,
        description: c.intro,
      })),
    }),
    howToSchema({
      pageUrl: `${SITE.url}/faq`,
      name: "Cara Menggunakan FAQ Ini untuk Evaluasi dan Perencanaan Corporate Outing Bandung",
      description: "4 langkah untuk memanfaatkan 111 pertanyaan dalam FAQ ini secara efektif — dari riset awal budget hingga justifikasi ROI ke CFO.",
      steps: [
        {
          name: "Mulai dari Kategori Budget",
          text: "Buka kategori Budget & Pricing untuk memahami range biaya per pax berdasarkan format event dan skala tim. Ini adalah starting point yang membantu Anda menetapkan ballpark figure sebelum meminta proposal resmi.",
        },
        {
          name: "Validasi Vendor dengan Kategori Vendor Selection",
          text: "Gunakan 12-poin checklist di kategori Vendor & EO Selection untuk mengevaluasi setiap vendor yang masuk shortlist. Fokus pada legalitas, track record B2B, dan struktur fee yang transparan.",
        },
        {
          name: "Cek Lokasi dan Format Sesuai Kebutuhan Tim",
          text: "Baca kategori Location & Venue dan Event Format untuk memilih area Bandung (Lembang, Ciwidey, kota) dan format event (1D, 2D1N, glamping, family day) yang sesuai dengan jumlah pax dan objective perusahaan.",
        },
        {
          name: "Gunakan Framework ROI untuk Justifikasi ke CFO",
          text: "Kategori Outcome & ROI menyediakan 3-layer ROI framework yang bisa langsung dimasukkan ke presentasi budget ke manajemen — dari employee retention savings hingga productivity multiplier berdasarkan data Gallup.",
        },
      ],
    })
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Jawaban detail untuk pertanyaan paling sering ditanyakan HR."
          description={`${totalQuestions}+ pertanyaan dalam ${categories.length} kategori. Jika pertanyaan lo belum di sini, langsung chat — kami respond avg 6 jam working hours.`}
        />

        <section className="bg-paper border-b border-divider py-8">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate">
              <span><strong className="text-ink tabular">{totalQuestions}</strong> questions answered</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">{categories.length} categories</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Update 2026</span>
            </div>
            <GoogleReviewsBadge variant="compact" />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-brand">Browse by category</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                {categories.length} kategori untuk semua pertanyaan.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/faq/${cat.slug}`} className="group rounded-3xl border border-border bg-paper p-7 md:p-8 transition-all hover:border-ink-soft hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,31,26,0.08)]">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <p className="eyebrow-brand">{cat.eyebrow}</p>
                    <span className="text-sm text-slate-mute tabular">{cat.questions.length} Q&amp;A</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">{cat.eyebrow}</h3>
                  <p className="mt-3 text-sm md:text-base text-slate leading-relaxed line-clamp-2">{cat.intro}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink/85">
                    Lihat {cat.questions.length} pertanyaan
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 border-t border-divider bg-cream/30">
          <div className="container-1280">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-brand">Top questions</span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                4 pertanyaan paling sering ditanyakan HR pertama kali.
              </h2>
            </div>

            <div className="space-y-3">
              {TOP_FAQS.map((q, i) => (
                <details key={i} className="group rounded-2xl border border-border bg-paper open:border-ink-soft transition-colors">
                  <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg md:text-xl text-ink leading-snug">{q.question}</h3>
                    <span className="flex-shrink-0 mt-1 text-slate transition-transform group-open:rotate-45">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate leading-relaxed">{q.answer}</p>
                    <Link href={q.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep hover:text-brand">
                      Detail lengkap + related questions<ArrowRight size={12} />
                    </Link>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-1280">
            <div className="rounded-3xl border border-border bg-bone p-10 md:p-14 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">Pertanyaan lo belum di sini?</h2>
              <p className="mt-4 text-base text-slate">Chat langsung — kami respond cepet, no template auto-reply.</p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition">
                  Request Proposal<ArrowRight size={14} />
                </Link>
                <a href={buildWaLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 h-12 text-sm font-medium hover:opacity-90 transition">
                  <Whatsapp size={14} />Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
