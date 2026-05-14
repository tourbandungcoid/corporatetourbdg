import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons/Icons";
import { STATS } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import { getCopy } from "@/lib/brand-settings";

/**
 * Premium full-viewport cinematic hero — Framer-template grade.
 * - 100vh immersive backdrop with ken-burns photograph
 * - Inter Display heavy headline with intentional 3-line composition
 * - Dual pill CTAs (primary brand + glass-outlined)
 * - Subtle bottom stats strip
 */
export async function Hero() {
  const [
    eyebrow,
    line1,
    line2,
    line3,
    sub,
    ctaPrimary,
    ctaSecondary,
  ] = await Promise.all([
    getCopy("home.hero.eyebrow", `⭐ 4.9/5 Google Reviews · ${STATS.companiesTrusted} perusahaan Indonesia · ${STATS.yearsOperating}`),
    getCopy("home.hero.line1", "Corporate Outing"),
    getCopy("home.hero.line2", "& Gathering Bandung"),
    getCopy("home.hero.line3", "yang benar-benar kerja."),
    getCopy("home.hero.sub", "Specialist B2B — bukan travel agent, bukan generic EO. Company gathering, team building, executive offsite di Bandung & Jawa Barat. Dari startup unicorn sampai BUMN nasional, untuk tim 20 sampai 2.000 orang."),
    getCopy("home.hero.cta_primary", "Request Proposal — 24 Jam"),
    getCopy("home.hero.cta_secondary", "Konsultasi Gratis"),
  ]);

  return (
    <section className="relative min-h-screen md:min-h-[760px] lg:min-h-[800px] w-full overflow-hidden bg-ink">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroMain.src}
          alt={IMAGES.heroMain.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        {/* Cinematic gradient stack */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/35 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
      </div>

      {/* Content — vertically balanced, top padding clears the floating navbar */}
      <div className="relative h-full container-1280 flex flex-col justify-center pb-56 md:pb-52 lg:pb-44 pt-28 md:pt-32">
        <div className="max-w-4xl fade-up">
          {/* Eyebrow trust pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/10 backdrop-blur px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="text-xs font-medium tracking-wide text-paper/90">
              {eyebrow}
            </span>
          </div>

          {/* Heavy editorial headline — keyword-first for SEO */}
          <h1 className="font-display mt-8 text-paper">
            <span className="block text-[2.75rem] leading-[1] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              {line1}
            </span>
            <span className="block text-[2.75rem] leading-[1] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] text-brand">
              {line2}
            </span>
            <span className="block text-[2.75rem] leading-[1] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              {line3}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-base md:text-lg text-paper/75 leading-relaxed max-w-2xl">
            {sub}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/proposal/request"
              className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-13 py-3.5 text-[15px] font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
            >
              {ctaPrimary}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/proposal/book-consultation"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 py-3.5 text-[15px] font-medium hover:bg-paper hover:text-ink hover:border-paper transition-colors"
            >
              {ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stats strip — subtle */}
      <div className="absolute bottom-0 inset-x-0 border-t border-paper/12 bg-ink/40 backdrop-blur-sm">
        <div className="container-1280">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <Stat number={STATS.eventsDelivered} label="Events delivered" />
            <Stat number={STATS.companiesTrusted} label="Perusahaan Indonesia" />
            <Stat number={STATS.repeatBookingRate} label="Repeat booking" />
            <Stat number="4.9 ★" label="Google Reviews" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[6.5rem] md:bottom-32 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-paper/45">
        <span className="text-[10px] tracking-[0.22em] uppercase">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-paper/45 to-transparent" />
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="py-5 md:py-6 px-3 md:px-4 border-l border-paper/10 first:border-l-0">
      <p className="font-display text-xl md:text-2xl text-paper tabular leading-none">
        {number}
      </p>
      <p className="mt-1.5 text-[11px] md:text-xs text-paper/55 tracking-wide">
        {label}
      </p>
    </div>
  );
}
