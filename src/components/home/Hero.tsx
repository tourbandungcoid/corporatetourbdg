import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkle } from "@/components/icons/Icons";
import { STATS, buildWaLink } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bone">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light/30 via-bone to-bone" />

      <div className="container-1280 relative section-sm md:section">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-7 fade-up">
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-paper/80 backdrop-blur px-4 py-1.5">
              <Sparkle size={14} className="text-brand" />
              <span className="text-xs font-medium text-ink">
                Trusted by {STATS.companiesTrusted} Indonesian companies
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display mt-8 text-5xl text-ink md:text-6xl lg:text-7xl">
              Vendor Corporate Outing Bandung yang Sudah Dipercaya{" "}
              <span className="font-display-italic text-brand-deep">
                100+ Perusahaan
              </span>{" "}
              Indonesia.
            </h1>

            {/* Subheadline */}
            <p className="mt-7 text-lg text-slate leading-relaxed max-w-xl md:text-xl">
              HR dan GA dari startup unicorn sampai BUMN nasional pakai kita
              untuk{" "}
              <span className="text-ink font-medium">
                company gathering, team building, dan corporate retreat di
                Bandung &amp; Jawa Barat
              </span>{" "}
              — dari tim 20 sampai 2.000 orang.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/proposal/request" className="btn btn-primary btn-lg">
                Request Free Proposal
                <ArrowRight size={16} className="arrow" />
              </Link>
              <Link href="/proposal/sample" className="btn btn-secondary">
                Lihat Sample Proposal
              </Link>
            </div>

            {/* Inline proof points */}
            <ul className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              <li>
                <p className="font-display text-3xl text-ink tabular">
                  {STATS.eventsDelivered}
                </p>
                <p className="mt-1 text-sm text-slate">Events delivered</p>
              </li>
              <li>
                <p className="font-display text-3xl text-ink tabular">
                  {STATS.repeatBookingRate}
                </p>
                <p className="mt-1 text-sm text-slate">Repeat booking</p>
              </li>
              <li>
                <p className="font-display text-3xl text-ink tabular">
                  {STATS.avgResponseTime}
                </p>
                <p className="mt-1 text-sm text-slate">Avg response</p>
              </li>
            </ul>
          </div>

          {/* Right: hero image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-deep via-forest to-ink shadow-2xl">
              <Image
                src={IMAGES.heroMain.src}
                alt={IMAGES.heroMain.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Subtle vignette overlay for text contrast hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>

            {/* Floating WA prompt for desktop */}
            <a
              href={buildWaLink("corporate outing")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex mt-6 items-center gap-3 px-5 py-4 rounded-xl bg-paper border border-border hover:border-brand transition group"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white text-sm">
                💬
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">
                  Lebih nyaman chat?
                </p>
                <p className="text-xs text-slate">
                  WhatsApp langsung ke senior planner
                </p>
              </div>
              <ArrowRight
                size={16}
                className="text-slate group-hover:text-brand transition arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
