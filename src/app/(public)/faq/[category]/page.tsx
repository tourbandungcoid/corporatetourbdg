import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { getAllFaqCategorySlugs, getFaqCategory, getFaqCategoriesList } from "@/lib/faq-data";
import { buildWaLink, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  articleSchema,
  faqPageSchema,
  howToSchema,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
} from "@/lib/schema";

type Params = Promise<{ category: string }>;

export async function generateStaticParams() {
  const slugs = await getAllFaqCategorySlugs();
  return slugs.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = await params;
  const cat = await getFaqCategory(category);
  if (!cat) return { title: "FAQ category not found" };
  const url = `${SITE.url}/faq/${cat.slug}`;
  return {
    title: cat.title,
    description: cat.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: cat.title,
      description: cat.metaDescription,
      url,
      type: "article",
      publishedTime: "2026-05-12",
      modifiedTime: "2026-05-16",
      authors: [`${SITE.url}/team#andre-pratama`],
      section: "FAQ Corporate Outing Bandung",
      tags: ["faq corporate outing bandung", cat.eyebrow.toLowerCase(), "pertanyaan corporate event"],
      images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
    },
    twitter: { card: "summary_large_image", title: cat.title, description: cat.metaDescription, images: [IMAGES.heroMain.src] },
  };
}

export default async function FaqCategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const [cat, allCats] = await Promise.all([
    getFaqCategory(category),
    getFaqCategoriesList(),
  ]);
  if (!cat) notFound();
  const otherCats = allCats.filter((c) => c.slug !== cat.slug);
  const url = `${SITE.url}/faq/${cat.slug}`;

  const FAQ_AUTHORS: Record<string, { name: string; role: string }> = {
    budget:     { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
    logistics:  { name: "Raden Bagus Wicaksono", role: "Head of Operations & Risk" },
    comparison: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
    formats:    { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
    location:   { name: "Tio Mahesa", role: "Lead Field Operations Manager" },
    vendor:     { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
    outcome:    { name: "Sinta Rahmadhani", role: "Head of Client Strategy" },
  };

  const FAQ_KEYWORDS: Record<string, string[]> = {
    budget:     ["budget outing kantor bandung 2025", "estimasi biaya corporate event bandung", "harga team building per pax bandung", "berapa biaya gathering perusahaan jawa barat"],
    logistics:  ["logistik corporate event bandung", "timeline persiapan outing kantor", "proses pemesanan event organizer bandung", "cara booking vendor corporate event"],
    comparison: ["perbedaan outing kantor dan corporate gathering", "tim building vs company retreat", "memilih format corporate event bandung", "beda eo specialist dan travel agent corporate"],
    formats:    ["format outing kantor bandung", "pilihan program team building perusahaan", "jenis corporate event indonesia", "format gathering karyawan 2025"],
    location:   ["lokasi corporate event bandung", "destinasi outing kantor jawa barat", "rekomendasi tempat gathering perusahaan bandung", "lembang ciwidey venue corporate"],
    vendor:     ["cara memilih vendor corporate event bandung", "tips seleksi eo corporate", "checklist vendor event organizer", "ciri vendor corporate event terpercaya bandung"],
    outcome:    ["roi corporate outing", "cara mengukur hasil team building", "impact outing kantor pada produktivitas", "justifikasi budget gathering ke cfo"],
  };

  const FAQ_MENTIONS: Record<string, { type: string; name: string; url?: string; id?: string }[]> = {
    budget:     [{ type: "WebPage", name: "Pricing & Transparent Breakdown", url: `${SITE.url}/pricing` }, { type: "WebPage", name: "Panduan Corporate Outing Bandung", url: `${SITE.url}/panduan-corporate-outing-bandung` }],
    logistics:  [{ type: "WebPage", name: "Request Proposal — Free 24 Jam", url: `${SITE.url}/proposal/request` }],
    comparison: [{ type: "WebPage", name: "Specialist vs Generic EO", url: `${SITE.url}/specialist-vs-generic-eo` }, { type: "WebPage", name: "Glossary Istilah Corporate Event", url: `${SITE.url}/glossary` }],
    formats:    [{ type: "WebPage", name: "Panduan Corporate Outing Bandung", url: `${SITE.url}/panduan-corporate-outing-bandung` }, { type: "Service", name: "Team Building Bandung", url: `${SITE.url}/team-building-bandung` }],
    location:   [{ type: "WebPage", name: "Venue Gathering Bandung", url: `${SITE.url}/venue-gathering-bandung` }, { type: "Place", name: "Lembang, Kabupaten Bandung Barat" }],
    vendor:     [{ type: "WebPage", name: "Specialist vs Generic EO", url: `${SITE.url}/specialist-vs-generic-eo` }, { type: "WebPage", name: "Checklist Pilih Vendor EO Corporate", url: `${SITE.url}/insights/checklist-vendor-event-organizer-corporate` }],
    outcome:    [{ type: "WebPage", name: "Cara Justify Budget ke Finance", url: `${SITE.url}/insights/justify-outing-budget-to-finance` }, { type: "WebPage", name: "Methodology — Outcome ROI Framework", url: `${SITE.url}/methodology` }],
  };

  const FAQ_ALTERNATIVE_HEADLINES: Record<string, string> = {
    budget:     "Estimasi Biaya Corporate Outing Bandung: Rp 1.5–7 jt per Pax dalam 4 Tier",
    logistics:  "Timeline dan Proses Persiapan Outing Kantor Bandung — Dari Brief ke Eksekusi",
    comparison: "Beda Outing Kantor, Gathering, dan Team Building — Panduan Pilihan Format untuk HR",
    formats:    "6 Format Program Corporate Outing Bandung: 1D, Glamping, Gathering, Family Day",
    location:   "Lokasi Corporate Outing Bandung: Lembang, Ciwidey, Bandung Kota — Perbandingan Lengkap",
    vendor:     "12 Checklist Pilih Vendor EO Corporate Bandung — Panduan HR dan Procurement",
    outcome:    "ROI Corporate Outing: Framework 3-Layer untuk Justifikasi Budget ke CFO",
  };

  const FAQ_HOWTO: Record<string, { name: string; steps: { name: string; text: string }[] }> = {
    budget: {
      name: "Cara Menghitung dan Menetapkan Budget Corporate Outing Bandung",
      steps: [
        { name: "Tentukan Tier Budget Berdasarkan Skala dan Format", text: "Mulai dari jumlah pax dan durasi event (1-day, 2D1N, 3D2N) untuk menentukan tier budget: Foundation (Rp 1,5–2 jt/pax), Standard (Rp 2,5–3,5 jt/pax), Premium (Rp 3,5–5 jt/pax), atau Executive (Rp 5–6,5 jt+/pax). Tier ini adalah starting point sebelum customization." },
        { name: "Hitung Total Budget dari Per-Pax Range", text: "Kalikan estimasi per-pax dengan jumlah peserta, lalu tambahkan contingency 8–10% untuk force majeure dan perubahan last-minute. Misalnya 100 pax × Rp 3 jt = Rp 300 jt + Rp 24–30 jt contingency." },
        { name: "Identifikasi Line-Item yang Bisa Dikurangi", text: "Komponen yang bisa di-adjust tanpa mengurangi kualitas: level villa (shared vs private), pilihan F&B (3x vs 5x per hari), atau aktivitas (outbound adventure vs team games). Minta breakdown line-item lengkap dari vendor sebelum negosiasi." },
        { name: "Siapkan Justifikasi ROI untuk Approval", text: "Hitung ROI 3-layer: retention savings (cost rekrut = 6–9x gaji), productivity multiplier (Gallup: 21% lebih tinggi untuk engaged employees), dan NPS internal. Bandingkan total cost outing vs cost turnover 1–2 orang untuk argumen yang kuat ke CFO." },
      ],
    },
    logistics: {
      name: "Cara Mempersiapkan Logistik Corporate Outing Bandung dari Brief ke Eksekusi",
      steps: [
        { name: "Mulai Brief Minimum 6–8 Minggu Sebelum Event", text: "Timeline optimal adalah 6–8 minggu untuk memastikan venue dan vendor terbaik tersedia. Untuk grup > 200 pax atau event di peak season (Juni–Juli, November–Desember), idealnya 12 minggu. Brief awal hanya perlu 3 hal: pax, budget range, dan tanggal target." },
        { name: "Ikuti Briefing Call 15 Menit untuk Finalisasi Scope", text: "Setelah request proposal, senior planner akan jadwalkan briefing call 15 menit untuk align objective, format, dan preferensi venue. Proposal lengkap dengan breakdown dikirim dalam 24 jam setelah call ini." },
        { name: "Review Proposal dan Lakukan Site Visit (Opsional)", text: "Untuk event > 150 pax atau budget > Rp 200 juta, pertimbangkan site visit ke venue shortlist. TourBandung Corporate fasilitasi site visit gratis ke 2–3 venue kandidat sebelum keputusan final." },
        { name: "Konfirmasi dengan DP 30% dan Lock Timeline", text: "Setelah proposal disetujui, konfirmasi dengan DP 30% untuk lock venue dan vendor. Timeline produksi dimulai — rundown, briefing vendor, dan rehearsal (untuk gathering besar) dijadwalkan di fase ini." },
      ],
    },
    comparison: {
      name: "Cara Memilih Format Corporate Event yang Tepat untuk Tim Anda",
      steps: [
        { name: "Identifikasi Objective Utama Event", text: "Tentukan satu primary objective: bonding informal (outing kantor), recognition & milestone (company gathering), skill development (team building), atau strategic alignment (corporate retreat). Objective menentukan format, venue, dan aktivitas yang paling efektif." },
        { name: "Sesuaikan Format dengan Pax dan Budget", text: "Outing kantor: 30–200 pax, budget mid-tier, 1–2 hari relaxed. Corporate gathering: 100–800 pax, budget premium, 2–3 hari formal+fun. Team building: semua skala, fokus aktivitas terstruktur. Executive offsite: 10–30 pax, venue premium, agenda strategis." },
        { name: "Pertimbangkan Faktor Timing dan Konteks Tim", text: "Post-merger atau tim baru: fokus bonding intensif. Post-peak-season: recovery dan appreciation. Pre-goal-setting: alignment dan energizing. Milestones (10 tahun perusahaan, pencapaian target): celebration format dengan ceremony." },
        { name: "Konsultasikan dengan Senior Planner untuk Rekomendasi Format", text: "Setelah menentukan objective dan konteks, brief senior planner untuk rekomendasi format spesifik. Biasanya 2–3 format alternatif dengan tradeoff budget, outcome, dan logistik disajikan dalam proposal awal." },
      ],
    },
    formats: {
      name: "Cara Memilih Program Format Corporate Outing yang Sesuai",
      steps: [
        { name: "Tentukan Durasi dan Skala Event", text: "6 format utama berdasarkan durasi: 1-day refresh (30–150 pax), 1D2N glamping bonding (30–100 pax), 2D1N standard annual gathering (50–300 pax), 3D2N premium corporate gathering (100–800 pax), hybrid outbound+indoor (semua skala), atau family day corporate (100–500 pax inklusif keluarga)." },
        { name: "Pilih Tema dan Aktivitas Utama", text: "Aktivitas outbound (flying fox, high rope, river tracking): cocok untuk energizing dan bonding fisik. Indoor workshop (cooking class, batik, pottery): cocok untuk team yang lebih diverse usia. Games kompetitif (amazing race, war games): cocok untuk tim dengan chemistry kuat. Mix keduanya untuk balance." },
        { name: "Sesuaikan Rundown dengan Ritme Tim", text: "Hindari jadwal terlalu padat — sisakan waktu free untuk organic interaction yang justru sering jadi bonding moment terkuat. Rasio ideal: 60% program terstruktur, 40% buffer + free time untuk tim > 100 pax." },
        { name: "Evaluasi Format dengan Post-Event Survey", text: "Setelah event, kirimkan pulse survey singkat (5 pertanyaan NPS-style) dalam 48 jam untuk capture feedback segar. Data ini menjadi input untuk format improvement di event berikutnya." },
      ],
    },
    location: {
      name: "Cara Memilih Lokasi Corporate Outing di Bandung yang Tepat",
      steps: [
        { name: "Tentukan Area Berdasarkan Format dan Budget", text: "Lembang (30–45 menit dari kota): alam pegunungan, villa privat, cocok untuk 50–500 pax, semua tier budget. Ciwidey (60–90 menit): glamping dan alam terbuka, lebih adventurous. Bandung Kota: hotel bintang 4–5 dengan ballroom untuk MICE dan gathering besar > 300 pax." },
        { name: "Survey Venue Berdasarkan Kapasitas dan Fasilitas", text: "Cek 3 hal kritis: kapasitas meeting room + ballroom, jumlah kamar vs total pax, dan area outdoor untuk aktivitas. Minta floor plan dan foto terbaru — foto di website venue sering outdated." },
        { name: "Lakukan Site Visit untuk Event Besar", text: "Untuk event > 150 pax atau budget > Rp 200 juta, site visit ke 2–3 venue shortlist sangat direkomendasikan. TourBandung Corporate fasilitasi site visit gratis termasuk briefing dengan venue coordinator." },
        { name: "Lock Venue dengan Deposit Early", text: "Venue premium Lembang dan Ciwidey memiliki availability terbatas terutama di peak season. Lock dengan deposit venue (biasanya 30–50% dari venue fee) segera setelah keputusan final, idealnya 6–8 minggu sebelum event." },
      ],
    },
    vendor: {
      name: "Cara Mengevaluasi dan Memilih Vendor Event Organizer Corporate",
      steps: [
        { name: "Buat Shortlist Berdasarkan Track Record B2B", text: "Cari vendor dengan portfolio B2B eksplisit — bukan travel agent yang handle corporate juga. Minimum: 3 referensi klien korporat yang bisa dihubungi, dokumentasi event serupa di industri Anda, dan durasi operasional > 5 tahun." },
        { name: "Cek Kelengkapan Legal dan Administrasi", text: "12-poin checklist wajib: NPWP aktif, rekening atas nama perusahaan (bukan personal), PKP status untuk faktur pajak, asuransi event, dedicated PM (bukan freelance), dan contract clause yang mencakup force majeure dan refund policy." },
        { name: "Evaluasi Proposal dengan Kriteria Objektif", text: "Bandingkan 3 vendor dengan scoring matrix: kelengkapan breakdown (bukan lump sum), responsivitas (< 24 jam working hours), clarity scope of work, dan harga vs value. Waspada vendor yang hanya kirim PDF cantik tanpa detail operasional." },
        { name: "Lakukan Reference Check Sebelum Konfirmasi", text: "Hubungi minimal 2 referensi klien dari vendor pilihan — tanyakan 3 hal: apakah sesuai proposal, how they handled masalah di lapangan, dan apakah mereka akan pakai lagi. Referensi klien yang bersedia dihubungi adalah tanda vendor yang confidence dengan track record mereka." },
      ],
    },
    outcome: {
      name: "Cara Mengukur dan Mempresentasikan ROI Corporate Outing ke Manajemen",
      steps: [
        { name: "Tetapkan Metric Baseline Sebelum Event", text: "Sebelum event, ukur baseline 3 metric: Employee NPS internal, absensi dan turnover rate 3 bulan terakhir, dan cross-team collaboration score (bisa dari manager assessment). Tanpa baseline, ROI post-event tidak bisa dikuantifikasi." },
        { name: "Terapkan 3-Layer ROI Framework", text: "Layer 1 — Retention: biaya rekrut 1 orang = 6–9x gaji bulanan; Layer 2 — Productivity: engaged employees 21% lebih produktif (Gallup); Layer 3 — Collaboration: track kualitas cross-team project 3 bulan post-event. Kalkulasi ketiga layer ini menghasilkan angka ROI konkret." },
        { name: "Kumpulkan Data Post-Event dalam 48–72 Jam", text: "Kirim pulse survey dalam 48 jam setelah event (besi panas masih panas). Pertanyaan kunci: NPS event (0–10), 1 hal yang paling berkesan, dan 1 saran untuk event berikutnya. Response rate optimal saat masih dekat event." },
        { name: "Build Presentasi ROI untuk CFO dengan Data Konkret", text: "Format presentasi yang efektif ke CFO: (1) Total investment vs cost turnover 1 orang, (2) Delta NPS pre/post event, (3) Proyeksi productivity gain 3 bulan ke depan. Bandingkan angka outing dengan cost training yang disetujui — biasanya comparable atau lebih rendah." },
      ],
    },
  };

  const FAQ_ABOUT_SERVICE_URLS: Record<string, string> = {
    budget:     `${SITE.url}/pricing`,
    logistics:  `${SITE.url}/outing-kantor-bandung`,
    comparison: `${SITE.url}/corporate-gathering-bandung`,
    formats:    `${SITE.url}/team-building-bandung`,
    location:   `${SITE.url}/venue-gathering-bandung`,
    vendor:     `${SITE.url}/event-organizer-corporate-bandung`,
    outcome:    `${SITE.url}/methodology`,
  };

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    articleSchema({
      headline: cat.title,
      alternativeHeadline: FAQ_ALTERNATIVE_HEADLINES[cat.slug],
      description: cat.metaDescription,
      image: IMAGES.heroMain.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: `/faq/${cat.slug}`,
      aboutServiceUrl: FAQ_ABOUT_SERVICE_URLS[cat.slug],
      author: FAQ_AUTHORS[cat.slug] ?? { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: FAQ_KEYWORDS[cat.slug] ?? ["faq corporate event bandung", "pertanyaan outing kantor", "corporate outing bandung"],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        ...(FAQ_MENTIONS[cat.slug] ?? []),
      ],
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "FAQ", url: `${SITE.url}/faq` },
      { name: cat.eyebrow, url },
    ]),
    faqPageSchema(cat.questions.map((q) => ({ question: q.question, answer: q.answer })), url),
    ...(FAQ_HOWTO[cat.slug]
      ? [howToSchema({
          pageUrl: url,
          name: FAQ_HOWTO[cat.slug].name,
          description: cat.intro,
          steps: FAQ_HOWTO[cat.slug].steps,
        })]
      : [])
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow={cat.eyebrow}
          title={cat.title.split(" — ")[0]}
          description={cat.intro}
        />

        {/* Stat strip */}
        <section className="bg-paper border-b border-divider py-8">
          <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate">
              <span><strong className="text-ink tabular">{cat.questions.length}</strong> questions answered</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Update May 2026</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Verified by senior planner</span>
            </div>
            <GoogleReviewsBadge variant="compact" />
          </div>
        </section>

        {/* Table of contents */}
        <section className="py-12 border-b border-divider">
          <div className="container-1280">
            <p className="eyebrow text-slate mb-4">Pertanyaan di kategori ini</p>
            <ol className="grid gap-y-2 gap-x-8 md:grid-cols-2 text-sm">
              {cat.questions.map((q, i) => (
                <li key={i}>
                  <a
                    href={`#q${i + 1}`}
                    className="text-ink hover:text-brand-deep flex items-baseline gap-2"
                  >
                    <span className="text-slate-mute font-mono text-xs">{(i + 1).toString().padStart(2, "0")}</span>
                    {q.question}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Questions full content */}
        <section className="py-16 md:py-20">
          <div className="container-1280">
            <div className="max-w-4xl space-y-10">
              {cat.questions.map((q, i) => (
                <article key={i} id={`q${i + 1}`} className="scroll-mt-32">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-display text-3xl text-brand-deep tabular leading-none flex-shrink-0">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                      {q.question}
                    </h2>
                  </div>
                  <div className="pl-10 space-y-3 text-base md:text-lg text-slate leading-relaxed">
                    <p>{q.answer}</p>
                    {q.detail && <p className="text-sm md:text-base">{q.detail}</p>}
                  </div>
                  <div className="pl-10 mt-4 pt-3 border-t border-divider/60 text-xs text-slate-mute">
                    Last verified: 16 May 2026 · senior planner team
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Related service pages */}
        {cat.relatedPages && cat.relatedPages.length > 0 && (
          <section className="py-12 border-t border-divider">
            <div className="container-1280">
              <p className="eyebrow text-slate mb-4">Layanan terkait</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cat.relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group rounded-2xl border border-border bg-paper p-5 hover:border-ink-soft transition-all hover:-translate-y-0.5"
                  >
                    <p className="font-medium text-sm text-ink group-hover:text-brand-deep transition-colors leading-snug">{page.label}</p>
                    <p className="mt-1.5 text-xs text-slate leading-relaxed">{page.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ink/70">
                      Selengkapnya
                      <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related FAQ categories */}
        <section className="py-14 bg-cream/40 border-t border-divider">
          <div className="container-1280">
            <p className="eyebrow-brand mb-6">Kategori FAQ lain</p>
            <div className="grid gap-4 md:grid-cols-3">
              {otherCats.map((c) => (
                <Link
                  key={c.slug}
                  href={`/faq/${c.slug}`}
                  className="group rounded-2xl border border-border bg-paper p-6 hover:border-ink-soft transition-all hover:-translate-y-0.5"
                >
                  <p className="eyebrow-brand">{c.eyebrow}</p>
                  <h3 className="font-display mt-2 text-lg text-ink leading-tight">{c.eyebrow}</h3>
                  <p className="mt-2 text-sm text-slate line-clamp-2">{c.intro}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink/85">
                    {c.questions.length} questions
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Pertanyaan Anda belum ada di sini?
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Chat langsung — kami respond avg 6 jam working hours. No template auto-reply.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">
                Request Proposal<ArrowRight size={16} />
              </Link>
              <a href={buildWaLink(`FAQ ${cat.eyebrow}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">
                <Whatsapp size={16} />WhatsApp
              </a>
            </div>
          </div>
        </section>

        <StickyProposalBar message="Pertanyaan lain soal corporate outing? Free briefing call 15 menit." context={`FAQ ${cat.slug}`} />
      </main>
    </>
  );
}
