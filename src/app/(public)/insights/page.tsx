import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { getInsightsList } from "@/lib/insights-data";
import { ArrowRight } from "@/components/icons/Icons";

export const metadata = {
  title: "Insights",
  description:
    "Editorial dan thought leadership untuk HR + corporate decision-makers — framework, data, dan insight soal corporate event design di Indonesia.",
};

const CATEGORIES = ["All", "Methodology", "Framework", "HR Tactics", "Team Design", "Strategic Event"];

export default function InsightsIndexPage() {
  const articles = getInsightsList();

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Editorial untuk HR & corporate decision makers."
        description="Framework, data, dan insight soal corporate event design — dari TourBandung Corporate methodology lab. Built from 400+ events delivered."
      />

      <section className="border-b border-divider py-8 bg-paper">
        <div className="container-1280">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={[
                  "inline-flex items-center rounded-full border px-4 py-2 text-sm",
                  cat === "All"
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper text-slate border-border",
                ].join(" ")}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-1280">
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
  );
}
