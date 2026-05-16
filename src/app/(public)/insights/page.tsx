import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { getInsightsList } from "@/lib/insights-data";
import { ArrowRight, Sparkle } from "@/components/icons/Icons";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  itemListSchema,
  articleSchema,
  faqPageSchema,
  howToSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights & Panduan Corporate Event Bandung — 14 Long-Form Guides",
  description:
    "Editorial dan thought leadership untuk HR + corporate decision-makers — framework, data, dan insight soal corporate event design di Indonesia.",
  alternates: { canonical: `${SITE.url}/insights` },
  openGraph: {
    title: "Insights & Panduan Corporate Event Bandung — 14 Long-Form Guides",
    description:
      "Framework, data, dan editorial soal corporate event design — 8 long-form articles dari 400+ events delivered.",
    url: `${SITE.url}/insights`,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Panduan Corporate Event Bandung — 14 Long-Form Guides",
    description: "Framework, data, dan editorial corporate event design dari 400+ events delivered di Bandung.",
    images: [IMAGES.heroMain.src],
  },
};

type SearchParams = Promise<{ category?: string }>;

export default async function InsightsIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { category } = await searchParams;
  const all = await getInsightsList();
  const categories = Array.from(new Set(all.map((a) => a.category)));
  const articles = category
    ? all.filter((a) => a.category === category)
    : all;

  const INSIGHT_AUTHOR_SLUGS: Record<string, string> = {
    "Andre Pratama": "andre-pratama",
    "Sinta Rahmadhani": "sinta-rahmadhani",
    "Raden Bagus Wicaksono": "raden-bagus",
    "Amelia Chandra": "amelia-chandra",
    "Tio Mahesa": "tio-mahesa",
    "Putri Anggraeni": "putri-anggraeni",
  };

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Insights", url: `${SITE.url}/insights` },
    ]),
    articleSchema({
      headline: "Insights & Panduan Corporate Event Bandung — 14 Long-Form Guides",
      alternativeHeadline: "Framework, Data & Panduan Mendalam Corporate Outing Bandung dari 400+ Events Delivered",
      description: "Editorial dan thought leadership untuk HR + corporate decision-makers — framework, data, dan insight soal corporate event design di Indonesia dari 400+ events delivered.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/insights",
      aboutService: "Corporate Event Design & Thought Leadership",
      aboutServiceUrl: `${SITE.url}/outing-kantor-bandung`,
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        "panduan corporate event bandung",
        "framework outing kantor indonesia",
        "tips team building perusahaan",
        "budget corporate gathering 2025",
        "cara memilih vendor event organizer bandung",
        "roi corporate outing",
        "insight hr corporate event",
      ],
    }),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${SITE.url}/insights#blog`,
      url: `${SITE.url}/insights`,
      name: "TourBandung Corporate Insights",
      inLanguage: "id-ID",
      isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url },
      blogPost: all.slice(0, 10).map((a) => ({
        "@type": "BlogPosting",
        "@id": `${SITE.url}/insights/${a.slug}`,
        headline: a.title,
        url: `${SITE.url}/insights/${a.slug}`,
        datePublished: a.publishDate,
        dateModified: a.publishDate,
        image: a.heroImage.src,
        inLanguage: "id-ID",
        author: {
          "@type": "Person",
          "@id": `${SITE.url}/team#${INSIGHT_AUTHOR_SLUGS[a.author.name] ?? a.author.name.toLowerCase().replace(/\s+/g, "-")}`,
          name: a.author.name,
          jobTitle: a.author.role,
          worksFor: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: "7Summits Travel", url: SITE.url },
        },
        publisher: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
        articleSection: a.category,
        description: a.excerpt,
        isPartOf: { "@id": `${SITE.url}/insights#blog` },
      })),
    },
    itemListSchema({
      name: "TourBandung Corporate Insights — Long-Form Corporate Event Guides",
      description: "Editorial dan thought leadership untuk HR + corporate decision-makers. Framework, data, dan insight dari 400+ corporate events delivered di Bandung.",
      url: `${SITE.url}/insights`,
      items: all.map((a) => ({
        name: a.title,
        url: `${SITE.url}/insights/${a.slug}`,
        description: a.excerpt,
        image: a.heroImage.src,
      })),
    }),
    howToSchema({
      pageUrl: `${SITE.url}/insights`,
      name: "Cara Memanfaatkan Insights TourBandung Corporate untuk Perencanaan Event",
      description: "4 langkah menggunakan artikel dan framework di Insights untuk merencanakan corporate event yang lebih efektif dan terukur.",
      steps: [
        {
          name: "Mulai dengan Artikel Sesuai Tahap Perencanaan",
          text: "Filter artikel berdasarkan kategori (Budget Planning, Format Design, Vendor Selection, ROI & Outcome) sesuai tahap perencanaan yang sedang Anda jalani. Jika masih di tahap awal, mulai dari artikel budget dan format untuk membangun baseline pengetahuan.",
        },
        {
          name: "Terapkan Framework Langsung ke Konteks Tim Anda",
          text: "Setiap artikel memiliki framework yang actionable — bukan teori abstrak. Ambil satu framework (misalnya 5-Pillar Design™ atau BOTS Method) dan coba aplikasikan ke situasi tim Anda dengan mengisi variabel yang relevan: pax, budget, objective.",
        },
        {
          name: "Gunakan Data dan Referensi untuk Presentasi Internal",
          text: "Artikel-artikel di Insights mencantumkan data Gallup, industry benchmark, dan contoh nyata dari event yang sudah didelivered. Kutip data ini untuk memperkuat presentasi budget atau proposal event ke manajemen — referensi berbasis data lebih mudah disetujui.",
        },
        {
          name: "Konsultasikan Framework ke Senior Planner",
          text: "Setelah membaca panduan yang relevan, request briefing call gratis 15 menit untuk mendiskusikan bagaimana framework tersebut diterapkan secara spesifik ke event Anda — termasuk penyesuaian budget, lokasi, dan timeline.",
        },
      ],
    }),
    faqPageSchema([
      { question: "Apakah panduan di Insights bisa diterapkan untuk semua skala perusahaan?", answer: "Ya — semua panduan di TourBandung Corporate Insights ditulis berdasarkan real experience dari 100+ corporate events di berbagai skala (30–800 pax) dan industri (tech, banking, BUMN, FMCG). Framework seperti 5-Pillar Design™ dan BOTS scalable untuk annual gathering 30 pax maupun 500 pax." },
      { question: "Siapa yang menulis konten di TourBandung Corporate Insights?", answer: "Semua artikel ditulis oleh senior planner dengan pengalaman langsung: Andre Pratama (12 tahun, 400+ events), Sinta Rahmadhani (ex-Deloitte HC, 9 tahun), Raden Bagus Wicaksono (11 tahun outdoor ops), dan Amelia Chandra (7 tahun program design). Bukan content writer generalis — semua penulis pegang proyek nyata." },
      { question: "Berapa lama waktu yang dibutuhkan untuk membaca satu panduan?", answer: "Rata-rata 8–15 menit per artikel — semua ditulis sebagai long-form guide dengan data, framework, dan contoh konkret dari event nyata. Setiap artikel memiliki TL;DR di awal untuk pembaca yang ingin summary cepat sebelum memutuskan membaca full article." },
      { question: "Apakah framework di Insights gratis atau ada yang behind paywall?", answer: "Semua konten di TourBandung Corporate Insights 100% gratis dan bisa diakses langsung — tidak ada paywall, tidak ada email gate. Ini adalah editorial terbuka untuk HR manager, procurement, dan decision-maker corporate di Indonesia." },
    ], `${SITE.url}/insights`)
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="Insights"
        title="Editorial untuk HR & corporate decision makers."
        description="Framework, data, dan insight soal corporate event design — dari TourBandung Corporate methodology lab. Built from 400+ events delivered."
      />

      <section className="py-8 border-b border-divider bg-cream/30">
        <div className="container-1280">
          <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
            <div className="flex items-center gap-2 mb-4">
              <Sparkle size={16} className="text-brand" />
              <p className="eyebrow-brand">Quick Answer</p>
            </div>
            <p className="text-base md:text-lg text-ink leading-relaxed">
              TourBandung Corporate Insights menyediakan <strong>14 long-form guides</strong> tentang corporate event design — framework, data, dan insight dari <strong>400+ events delivered</strong>. Ditulis oleh senior planner berpengalaman, bukan content writer generalis. Semua konten <strong>100% gratis</strong>, tanpa paywall.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-divider py-8 bg-paper">
        <div className="container-1280">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/insights"
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm transition ${
                !category
                  ? "bg-ink text-paper border-ink"
                  : "bg-paper text-slate border-border hover:bg-cream"
              }`}
            >
              All ({all.length})
            </Link>
            {categories.map((cat) => {
              const count = all.filter((a) => a.category === cat).length;
              const active = category === cat;
              return (
                <Link
                  key={cat}
                  href={`/insights?category=${encodeURIComponent(cat)}`}
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm transition ${
                    active
                      ? "bg-ink text-paper border-ink"
                      : "bg-paper text-slate border-border hover:bg-cream"
                  }`}
                >
                  {cat} ({count})
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-1280">
          {articles.length === 0 ? (
            <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
              Belum ada artikel di kategori ini.{" "}
              <Link href="/insights" className="text-brand-deep underline">
                Lihat semua →
              </Link>
            </div>
          ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className={[
                  "group rounded-3xl bg-paper border border-border overflow-hidden hover:border-ink-soft transition-all hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,31,26,0.08)]",
                  i === 0 ? "md:col-span-2 lg:flex lg:flex-row" : "",
                ].join(" ")}
              >
                <div className={["relative bg-gradient-to-br from-forest to-ink overflow-hidden", i === 0 ? "aspect-[16/10] lg:aspect-auto lg:w-1/2" : "aspect-[16/10]"].join(" ")}>
                  <Image src={article.heroImage.src} alt={article.heroImage.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center rounded-full bg-paper/90 backdrop-blur px-3 py-1 text-xs font-medium text-ink">{article.category}</span>
                  </div>
                </div>
                <div className={["p-7 md:p-8 flex flex-col", i === 0 ? "lg:w-1/2" : ""].join(" ")}>
                  <h2 className={["font-display text-ink leading-tight", i === 0 ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"].join(" ")}>{article.title}</h2>
                  <p className="mt-4 text-sm md:text-base text-slate leading-relaxed">{article.excerpt}</p>
                  <div className="mt-6 pt-5 border-t border-divider flex items-center justify-between gap-3 text-xs text-slate">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-light text-brand-deep font-medium text-xs">{article.author.initials}</span>
                      <span>{article.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{new Date(article.publishDate).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
                      <span className="h-1 w-1 rounded-full bg-divider" />
                      <span>{article.readTimeMin} min read</span>
                    </div>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink/85">Read article<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
          )}
        </div>
      </section>

      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="container-1280 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">Mau insight applied ke event Anda?</h2>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">Free briefing call 15 menit — kami translate framework ini ke proposal yang fit goal tim Anda.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">Request Proposal<ArrowRight size={16} /></Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">Lihat case studies</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
