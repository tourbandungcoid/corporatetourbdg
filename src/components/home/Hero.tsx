import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons/Icons";
import { STATS } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";

/**
 * Premium full-viewport cinematic hero.
 * - 100vh immersive backdrop with hero photograph
 * - Editorial display headline with intentional line breaks
 * - Dual CTAs (primary + free consultation)
 * - Bottom stats strip + scroll indicator
 */
export function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink">
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
        {/* Cinematic gradient stack — bottom heavy for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/85" />
        {/* Side vignette for editorial framing */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
      </div>

      {/* Content — anchored to lower-third */}
      <div className="relative h-full container-1280 flex flex-col justify-end pb-36 md:pb-44 lg:pb-48 pt-32">
        <div className="max-w-4xl fade-up">
          {/* Eyebrow trust pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/10 backdrop-blur px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="text-xs font-medium tracking-wide text-paper/90">
              Trusted by {STATS.companiesTrusted} Indonesian companies · {STATS.yearsOperating}
            </span>
          </div>

          {/* Massive editorial headline */}
          <h1 className="font-display mt-8 text-paper leading-[0.95] tracking-[-0.02em]">
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-[9rem]">
              Corporate outing
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-display-italic text-brand">
              untuk tim
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-[9rem]">
              yang fokus hasil.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-10 text-base md:text-lg text-paper/75 leading-relaxed max-w-2xl">
            Custom-designed corporate event di Bandung &amp; Jawa Barat —{" "}
            <span className="text-paper">
              company gathering, team building, executive offsite
            </span>
            . Dari startup unicorn sampai BUMN nasional, untuk tim 20 sampai
            2.000 orang.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/proposal/request"
              className="group inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-14 text-base font-medium hover:bg-brand-deep transition-all hover:shadow-[0_8px_30px_rgba(107,162,57,0.4)]"
            >
              Request Proposal
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/proposal/book-consultation"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/5 backdrop-blur text-paper px-7 h-14 text-base font-medium hover:bg-paper hover:text-ink hover:border-paper transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stats strip — editorial */}
      <div className="absolute bottom-0 inset-x-0 border-t border-paper/15 bg-ink/30 backdrop-blur-sm">
        <div className="container-1280">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10">
            <Stat number={STATS.eventsDelivered} label="Events delivered" />
            <Stat number={STATS.companiesTrusted} label="Companies trusted" />
            <Stat number={STATS.repeatBookingRate} label="Repeat booking" />
            <Stat number={STATS.avgResponseTime} label="Avg response" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-32 md:bottom-36 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-paper/50">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-paper/50 to-transparent" />
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-ink/40 py-6 md:py-7 px-2 text-center md:text-left md:px-4">
      <p className="font-display text-2xl md:text-4xl text-paper tabular leading-none">
        {number}
      </p>
      <p className="mt-1.5 text-xs md:text-sm text-paper/60">{label}</p>
    </div>
  );
}
