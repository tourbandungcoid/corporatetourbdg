import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Check, Sparkle } from "@/components/icons/Icons";
import { SITE, STATS } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  articleSchema,
  howToSchema,
  faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tentang TourBandung Corporate — B2B Corporate Event Specialist Bandung Sejak 2018",
  description:
    "TourBandung Corporate adalah unit B2B corporate event specialist dari 7Summits Travel. 400+ events delivered di Bandung & Jawa Barat sejak 2018 — outing kantor, team building, executive offsite, MICE. Senior-led, NDA-ready, pricing transparent.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "Tentang TourBandung Corporate — B2B Specialist Sejak 2018",
    description:
      "400+ corporate events delivered sejak 2018. Unit B2B dari 7Summits Travel — fokus outing, team building & executive offsite di Bandung & Jawa Barat.",
    url: `${SITE.url}/about`,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang TourBandung Corporate — B2B Specialist Sejak 2018",
    description: "Unit B2B dari 7Summits Travel. 400+ corporate events delivered di Bandung & Jawa Barat sejak 2018.",
    images: [IMAGES.heroMain.src],
  },
};

const PRINCIPLES = [
  {
    title: "Structured experience design.",
    body: "Setiap brief di-translate ke business outcome dulu, baru design programnya. Bonding pasca-merger berbeda dengan annual celebration — kami treat differently.",
  },
  {
    title: "Senior team, dedicated PM.",
    body: "Tidak ada rotating freelancer. Project manager dedicated dari briefing sampai post-event. Avg tenure tim senior: 4+ tahun di Tour Bandung Corporate.",
  },
  {
    title: "Direct vendor relationships.",
    body: "60+ venue partnership langsung di Bandung & Jawa Barat — villa private, resort premium, glamping site. Bukan calo, bukan reseller. Akses langsung = harga & fleksibilitas lebih baik.",
  },
  {
    title: "Pricing transparency.",
    body: "Detailed breakdown di proposal — venue, F&B, logistics, talent, contingency, margin. No hidden cost dalam 6 tahun terakhir. Finance team Anda akan love this.",
  },
];

export default function AboutPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "About", url: `${SITE.url}/about` },
    ]),
    articleSchema({
      headline: "Tentang TourBandung Corporate — B2B Corporate Event Specialist Bandung Sejak 2018",
      alternativeHeadline: "Profil 7Summits Travel: Vendor Corporate Outing Bandung dengan 400+ Events Sejak 2018",
      description: "TourBandung Corporate adalah unit B2B corporate event specialist dari 7Summits Travel. 400+ events delivered di Bandung & Jawa Barat sejak 2018.",
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/about",
      aboutService: "B2B Corporate Event Specialist Bandung",
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: ["tentang TourBandung Corporate", "7summits travel corporate", "vendor corporate event bandung sejak 2018", "profil perusahaan event organizer corporate bandung"],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        { type: "Person", name: "Andre Pratama", id: `${SITE.url}/team#andre-pratama`, url: `${SITE.url}/team` },
        { type: "WebPage", name: "Team — 6 Senior Planner", url: `${SITE.url}/team` },
        { type: "WebPage", name: "Methodology — 3 Named Framework", url: `${SITE.url}/methodology` },
        { type: "WebPage", name: "Case Studies — Real Events", url: `${SITE.url}/case-studies` },
        { type: "Place", name: "Bandung, Jawa Barat" },
      ],
    }),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${SITE.url}/about#webpage`,
      url: `${SITE.url}/about`,
      name: "Tentang TourBandung Corporate",
      inLanguage: "id-ID",
      isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url },
      about: {
        "@type": "Organization",
        "@id": `${SITE.url}#organization`,
        name: "7Summits Travel",
        url: SITE.url,
        foundingDate: "2018",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 6, minValue: 6, maxValue: 15 },
      },
      primaryImageOfPage: { "@type": "ImageObject", url: IMAGES.heroMain.src, width: 1200, height: 630 },
    },
    howToSchema({
      pageUrl: `${SITE.url}/about`,
      name: "Cara Memverifikasi Kredensial Vendor Corporate Event Bandung",
      description: "5 langkah due diligence untuk memilih vendor corporate event yang aman dan accountable untuk procurement perusahaan.",
      steps: [
        { name: "Periksa Track Record & Portfolio", text: "Cek tahun berdiri, jumlah corporate events yang pernah di-handle, dan klien dari industri yang relevan. Vendor specialist B2B harus bisa tunjukkan minimum 50+ corporate events dengan client dari beberapa industri berbeda." },
        { name: "Verifikasi Legalitas & Procurement Readiness", text: "Minta NPWP aktif, SIUP/NIB, rekening perusahaan (bukan rekening pribadi), dan konfirmasi apakah vendor terdaftar sebagai PKP (untuk faktur pajak). Ini wajib untuk klien BUMN, perbankan, dan perusahaan publik." },
        { name: "Evaluasi Tim Senior", text: "Tanya siapa PM dedicated yang akan menangani proyek Anda, berapa tahun tenure mereka, dan tunjukkan portofolio spesifik. Red flag: tidak ada nama PM yang jelas atau tim berganti-ganti selama proses." },
        { name: "Minta Referensi Klien Aktual", text: "Hubungi minimum 2 referensi klien sebelumnya di industri atau skala yang relevan. Tanyakan: apakah vendor tepat waktu, adakah biaya tak terduga, apakah mereka akan pakai lagi?" },
        { name: "Evaluasi Kualitas Proposal", text: "Proposal yang baik mencantumkan breakdown line-item (bukan lump sum), risk register atau backup plan, dedicated PM yang disebutkan namanya, dan post-event report sebagai deliverable standar. Tidak ada hidden cost policy harus tertulis di kontrak." },
      ],
    }),
    faqPageSchema([
      { question: "Kapan TourBandung Corporate berdiri?", answer: "TourBandung Corporate adalah unit B2B specialized dari 7Summits Travel yang resmi fokus di corporate event sejak 2018. Parent company 7Summits Travel berdiri sejak 2014 sebagai travel agency umum sebelum pivot ke market corporate." },
      { question: "Apa perbedaan TourBandung Corporate dan 7Summits Travel?", answer: "7Summits Travel adalah entitas legal induk (travel company umum sejak 2014). TourBandung Corporate adalah brand unit B2B specialized yang fokus 100% di corporate event (outing, team building, executive offsite, MICE) di Bandung & Jawa Barat sejak 2018. Operasional, tim, dan methodology terpisah dari divisi leisure travel." },
      { question: "Berapa total corporate events yang sudah di-handle TourBandung Corporate?", answer: "400+ corporate events delivered sejak 2018, melibatkan 100+ perusahaan Indonesia dari tech unicorn, BUMN bank, FMCG global, manufacturing MNC, telco, hingga healthcare. Repeat booking rate 92% — artinya 9 dari 10 klien kembali untuk event berikutnya." },
      { question: "Apakah TourBandung Corporate bisa issue faktur pajak (PPN)?", answer: "Ya. 7Summits Travel terdaftar sebagai PKP (Pengusaha Kena Pajak) dan dapat menerbitkan faktur pajak standar untuk setiap transaksi. Ini penting untuk klien BUMN, perusahaan publik, dan korporasi besar yang butuh dokumentasi PPN untuk procurement." },
    ], `${SITE.url}/about`)
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="About"
        title="Specialist corporate event design — sejak 2018."
        description="corporate.tourbandung.co.id adalah unit specialized dari 7Summits Travel yang fokus 100% di market corporate (B2B). 400+ events delivered, 60+ venue partnership, tim senior dengan tenure 4+ tahun. Kami specialist — bukan generalist travel agent yang mencoba handle corporate."
      />

      {/* Stats strip */}
      <section className="py-8 border-b border-divider bg-cream/30">
        <div className="container-1280">
          <div className="quick-answer max-w-4xl rounded-3xl bg-paper border border-border p-7 md:p-9">
            <div className="flex items-center gap-2 mb-4">
              <Sparkle size={16} className="text-brand" />
              <p className="eyebrow-brand">Quick Answer</p>
            </div>
            <p className="text-base md:text-lg text-ink leading-relaxed">
              TourBandung Corporate adalah unit B2B corporate dari <strong>7Summits Travel</strong>, beroperasi sejak <strong>2018</strong> di Bandung. <strong>400+ corporate events</strong> delivered. <strong>100+ klien korporat</strong> dari tech unicorn, BUMN, FMCG, perbankan, dan manufacturing. Google rating <strong>4.9/5 (105 reviews)</strong>. Repeat booking rate <strong>92%</strong>. Spesialisasi B2B murni — bukan generalist EO.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 border-y border-divider">
        <div className="container-1280">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat number={STATS.eventsDelivered} label="Events delivered" />
            <Stat number={STATS.companiesTrusted} label="Companies trusted" />
            <Stat number={STATS.venuePartners} label="Venue partnership" />
            <Stat number={STATS.repeatBookingRate} label="Repeat booking rate" />
          </div>
        </div>
      </section>

      {/* Story narrative */}
      <section className="py-20 md:py-28">
        <div className="container-1280">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow-brand">Our story</span>
              <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
                Dari travel agent ke specialist corporate partner.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-base md:text-lg text-slate leading-relaxed">
              <p>
                7Summits Travel started sebagai travel agency umum di 2014.
                Lima tahun pertama, kami handle leisure, family trips, dan
                small corporate jobs.
              </p>
              <p>
                Di 2018, kami notice pattern: corporate clients butuh approach
                berbeda — strategic outcome, structured methodology, dedicated
                accountability. Tidak bisa di-handle dengan generic travel
                agent mindset. Kami pisahkan corporate unit jadi entitas
                fokus — that&apos;s how corporate.tourbandung.co.id was born.
              </p>
              <p>
                Sekarang: 400+ events delivered, 100+ companies trusted,
                portfolio dari startup unicorn sampai BUMN nasional. 92%
                repeat booking — angka yang kami paling bangga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work — principles */}
      <section className="py-20 md:py-28 bg-cream/40">
        <div className="container-1280">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow-brand">How we work</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
              4 prinsip yang konsisten kami pegang.
            </h2>
          </div>

          <div className="grid gap-px bg-divider rounded-3xl overflow-hidden border border-divider">
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                className="bg-paper p-8 md:p-12 grid gap-6 md:grid-cols-12 items-start"
              >
                <div className="md:col-span-2">
                  <span className="font-display text-5xl md:text-6xl text-brand-deep tabular leading-none">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base text-slate leading-relaxed max-w-3xl">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual moment */}
      <section className="py-20 md:py-28">
        <div className="container-1280">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-forest to-ink">
                <Image
                  src={IMAGES.caseStudyLarge.src}
                  alt="Corporate gathering moment yang kami handle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <span className="eyebrow-brand">What clients say</span>
              <blockquote className="font-display mt-4 text-2xl md:text-3xl lg:text-4xl text-ink leading-[1.15]">
                &ldquo;Yang gw appreciate: senior planner dedicated dari
                briefing sampai event. Bukan rotating freelancer.
                Komunikasi clean, accountability ada nama.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-deep font-display text-base">
                  AP
                </div>
                <div>
                  <p className="font-medium text-ink">Andini Pratama</p>
                  <p className="text-sm text-slate">
                    HR Manager · Tech Unicorn
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  "Tim senior dengan tenure 4+ tahun",
                  "60+ venue partnership langsung",
                  "0% hidden fees track record",
                  "Avg response time 6 jam",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate"
                  >
                    <span className="mt-0.5 text-brand">
                      <Check size={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="container-1280 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
            Mau kerja bareng kami?
          </h2>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
            Mulai dengan briefing call 15 menit. Senior planner langsung.
            Free, no commitment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/proposal/request"
              className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-7 h-12 text-sm font-medium hover:bg-brand hover:text-paper transition-colors"
            >
              Request Proposal
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/proposal/book-consultation"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-7 h-12 text-sm font-medium hover:bg-paper/15 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <p className="font-display text-3xl md:text-4xl lg:text-5xl text-ink tabular leading-none">
        {number}
      </p>
      <p className="mt-2 text-sm text-slate">{label}</p>
    </div>
  );
}
