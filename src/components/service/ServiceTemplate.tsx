import Link from "next/link";
import { ArrowRight, Check, ServiceIcon } from "../Icon";
import { PhotoFrame } from "../PhotoFrame";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "../Schema";
import { SITE } from "@/lib/site";

export type ServiceDetail = {
  slug: string;
  title: string;
  titleEn: string;
  short: string;
  description: string;
  icon: keyof typeof iconNames;
  duration: string[];
  capacity: string;
  priceFrom: string;
  outcomes: string[];
  heroPhoto: string;
  bodyPhoto: string;
  who: string[];
  included: string[];
  formats: { label: string; description: string; from: string }[];
  itinerary?: { time: string; activity: string }[];
  tiers: { name: string; from: string; description: string; features: string[] }[];
  faqs: { q: string; a: string }[];
};

const iconNames = {
  compass: "compass",
  users: "users",
  stars: "stars",
  presentation: "presentation",
  mountain: "mountain",
  flag: "flag",
  briefcase: "briefcase",
  trophy: "trophy",
} as const;

export function ServiceTemplate({ data }: { data: ServiceDetail }) {
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: data.title, href: `/services/${data.slug}` },
  ];

  return (
    <>
      <ServiceSchema
        name={data.title}
        description={data.description}
        slug={data.slug}
        priceFrom={data.priceFrom}
      />
      <FAQSchema items={data.faqs} />
      <BreadcrumbSchema items={breadcrumb} />

      {/* Hero */}
      <section className="pt-[120px] lg:pt-[140px] pb-16 lg:pb-20">
        <div className="container-1280">
          <nav className="flex items-center gap-2 text-[12px] text-[var(--color-slate)] mb-8">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-[var(--color-slate-mute)]">/</span>}
                {i === breadcrumb.length - 1 ? (
                  <span className="text-[var(--color-ink)]">{b.label}</span>
                ) : (
                  <Link href={b.href} className="hover:text-[var(--color-gold)]">
                    {b.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-6 text-[var(--color-gold)]">
                <ServiceIcon name={iconNames[data.icon]} size={24} />
                <span className="eyebrow-gold mb-0">{data.titleEn}</span>
              </div>
              <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.02] tracking-[-0.025em] text-[var(--color-ink)]">
                {data.title} untuk{" "}
                <span className="font-display-italic text-[var(--color-gold)]">
                  Enterprise Indonesia.
                </span>
              </h1>
              <p className="mt-6 max-w-[600px] text-[17px] lg:text-[19px] leading-[1.55] text-[var(--color-slate)]">
                {data.description}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/proposal/request" className="btn btn-primary btn-lg">
                  Request Proposal
                  <ArrowRight size={16} className="arrow" />
                </Link>
                <Link
                  href="/proposal/quick-quote"
                  className="btn btn-secondary btn-lg"
                >
                  Quick Quote (4 fields)
                </Link>
              </div>
              <div className="mt-10 pt-8 border-t border-[var(--color-divider)] grid grid-cols-3 gap-4">
                <KV label="Capacity" value={data.capacity} />
                <KV label="Durasi" value={data.duration.join(", ")} />
                <KV label="Mulai dari" value={data.priceFrom} />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <PhotoFrame
                  driveId={data.heroPhoto}
                  alt={data.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition + Outcomes (AEO snippet) */}
      <section className="section-sm bg-[var(--color-cream)]">
        <div className="container-1280">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow-gold mb-4">Apa itu {data.title}?</p>
              <h2 className="font-display text-[28px] lg:text-[36px] leading-tight text-[var(--color-ink)]">
                Definisi & dampak.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-[1.6] text-[var(--color-ink)] mb-8">
                <strong className="font-medium">{data.title}</strong> adalah{" "}
                {data.short.toLowerCase()} Dirancang dengan objective bisnis
                yang jelas dan diukur dampaknya — bukan sekadar acara.
              </p>
              <ul className="space-y-3">
                {data.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center">
                      <Check size={12} className="text-[var(--color-gold)]" />
                    </span>
                    <span className="text-[15px] text-[var(--color-ink)]">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section">
        <div className="container-1280">
          <div className="max-w-[820px] mb-12 lg:mb-16">
            <p className="eyebrow-gold mb-5">Who this is for</p>
            <h2 className="font-display text-[32px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              Dirancang untuk{" "}
              <span className="font-display-italic">tim seperti Anda.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.who.map((w, i) => (
              <div
                key={i}
                className="card p-7"
              >
                <p className="font-display text-[20px] text-[var(--color-ink)] leading-tight">
                  {w}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="section bg-[var(--color-ink)] text-[var(--color-bone)]">
        <div className="container-1280">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow-gold mb-5">What&apos;s included</p>
              <h2 className="font-display text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]">
                Capability scope yang{" "}
                <span className="font-display-italic">jelas dan menyeluruh.</span>
              </h2>
              <p className="mt-6 text-[16px] text-white/70 max-w-[400px]">
                Tidak ada yang di-bypass ke vendor lain. Semua dilakukan oleh tim
                kami atau preferred partner kami.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {data.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-2 border-b border-white/10">
                    <Check size={16} className="text-[var(--color-gold)] mt-1 flex-shrink-0" />
                    <span className="text-[15px] text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Format options */}
      <section className="section">
        <div className="container-1280">
          <div className="max-w-[820px] mb-12 lg:mb-16">
            <p className="eyebrow-gold mb-5">Program formats</p>
            <h2 className="font-display text-[32px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              Pilih format yang{" "}
              <span className="font-display-italic">sesuai timeline Anda.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.formats.map((f) => (
              <div key={f.label} className="card card-hover p-7">
                <p className="eyebrow text-[var(--color-gold)] mb-4">
                  {f.label}
                </p>
                <p className="font-display text-[18px] text-[var(--color-ink)] leading-snug mb-5">
                  {f.description}
                </p>
                <div className="pt-4 border-t border-[var(--color-divider)]">
                  <span className="text-[13px] text-[var(--color-slate)]">
                    Mulai dari{" "}
                  </span>
                  <span className="text-[14px] tabular font-medium">
                    {f.from}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container-1280">
          <div className="max-w-[820px] mb-12 lg:mb-16">
            <p className="eyebrow-gold mb-5">Pricing tiers</p>
            <h2 className="font-display text-[32px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              Tiga tier,{" "}
              <span className="font-display-italic">transparan dari awal.</span>
            </h2>
            <p className="mt-5 text-[16px] text-[var(--color-slate)] max-w-[560px]">
              Tidak ada hidden cost. Final quote akan disesuaikan dengan brief
              spesifik Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`p-8 rounded-sm border ${
                  idx === 1
                    ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
                    : "bg-[var(--color-paper)] border-[var(--color-border)]"
                }`}
              >
                <p
                  className={`eyebrow mb-5 ${
                    idx === 1 ? "text-[var(--color-gold)]" : "text-[var(--color-gold)]"
                  }`}
                >
                  {tier.name}
                </p>
                <div className="mb-5">
                  <span
                    className={`text-[13px] ${
                      idx === 1 ? "text-white/60" : "text-[var(--color-slate)]"
                    }`}
                  >
                    Mulai dari
                  </span>
                  <p
                    className={`font-display text-[28px] tabular ${
                      idx === 1 ? "text-[var(--color-bone)]" : "text-[var(--color-ink)]"
                    }`}
                  >
                    {tier.from}
                    <span
                      className={`text-[14px] font-sans ${
                        idx === 1 ? "text-white/60" : "text-[var(--color-slate)]"
                      }`}
                    >
                      {" "}
                      / pax
                    </span>
                  </p>
                </div>
                <p
                  className={`text-[14px] mb-6 ${
                    idx === 1 ? "text-white/70" : "text-[var(--color-slate)]"
                  }`}
                >
                  {tier.description}
                </p>
                <ul className="space-y-2.5">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className={`mt-0.5 ${
                          idx === 1
                            ? "text-[var(--color-gold)]"
                            : "text-[var(--color-gold)]"
                        }`}
                      />
                      <span
                        className={`text-[13px] ${
                          idx === 1 ? "text-white/85" : "text-[var(--color-ink)]"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/proposal/request" className="btn btn-primary btn-lg">
              Bangun program saya — Request proposal
              <ArrowRight size={16} className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Body photo block */}
      <section className="py-16 lg:py-24">
        <div className="container-1280">
          <div className="aspect-[16/8] rounded-sm overflow-hidden bg-[var(--color-cream)]">
            <PhotoFrame
              driveId={data.bodyPhoto}
              alt={`${data.title} — momen experience`}
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container-1280">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow-gold mb-5">FAQ — {data.title}</p>
              <h2 className="font-display text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
                Pertanyaan yang sering ditanyakan.
              </h2>
            </div>
            <div className="lg:col-span-8 border-t border-[var(--color-border)]">
              {data.faqs.map((f, i) => (
                <details
                  key={i}
                  className="border-b border-[var(--color-border)] group"
                >
                  <summary className="cursor-pointer py-6 font-display text-[20px] lg:text-[22px] leading-tight text-[var(--color-ink)] flex items-start justify-between gap-6 list-none">
                    <span>{f.q}</span>
                    <span className="mt-1 text-[var(--color-slate)] transition-transform group-open:rotate-180">
                      <ArrowRight size={18} className="rotate-90" />
                    </span>
                  </summary>
                  <p className="pb-6 text-[15px] leading-relaxed text-[var(--color-slate)] max-w-[680px]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="container-1280 text-center">
          <p className="eyebrow-gold mb-6">Step berikutnya</p>
          <h2 className="font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] max-w-[800px] mx-auto">
            Mari diskusikan brief{" "}
            <span className="font-display-italic">{data.title.toLowerCase()}</span>{" "}
            Anda.
          </h2>
          <p className="mt-6 text-[16px] text-[var(--color-slate)] max-w-[500px] mx-auto">
            Senior account director akan respon proposal Anda dalam 24 jam.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposal/request" className="btn btn-primary btn-lg">
              Request Proposal
              <ArrowRight size={16} className="arrow" />
            </Link>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider text-[var(--color-slate-mute)] mb-1">
        {label}
      </p>
      <p className="text-[14px] font-medium text-[var(--color-ink)] leading-tight">
        {value}
      </p>
    </div>
  );
}
