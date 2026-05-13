import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { getFaqCategoriesList } from "@/lib/faq-data";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  faqPageSchema,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
} from "@/lib/schema";

export const metadata = {
  title: "FAQ",
  description:
    "48+ pertanyaan detail dalam 4 kategori — budget, logistics, comparison, formats. Update 2026. Verified by senior planner.",
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: {
    title: "FAQ — TourBandung Corporate",
    description: "48+ pertanyaan paling sering dari HR Indonesia dalam 4 kategori.",
    url: `${SITE.url}/faq`,
    type: "website" as const,
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
];

export default function FaqIndexPage() {
  const categories = getFaqCategoriesList();
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "FAQ", url: `${SITE.url}/faq` },
    ]),
    faqPageSchema(TOP_FAQS.map((q) => ({ question: q.question, answer: q.answer })))
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
