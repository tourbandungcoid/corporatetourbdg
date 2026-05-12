import Link from "next/link";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { STATS, buildWaLink } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-forest/30 to-ink" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 80%, rgba(107, 162, 57, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(184, 146, 76, 0.18) 0%, transparent 55%)",
        }}
      />

      <div className="container-1280 section relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow text-brand-light/80">Ready when you are</span>

          <h2 className="font-display mt-6 text-paper leading-[0.98] tracking-[-0.035em]">
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Free proposal.
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-light/70 mt-2">
              No commitment.
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
              No pressure.
            </span>
          </h2>

          <p className="mt-10 text-lg text-cream/75 md:text-xl max-w-2xl mx-auto leading-relaxed">
            Briefing call 15 menit. Proposal lengkap dalam 24 jam. Tim lo
            review &amp; approve internal. Itu workflow-nya — nggak lebih
            ribet dari itu.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/proposal/request"
              className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
            >
              Request Proposal
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 hover:border-paper/50 transition-colors"
            >
              <Whatsapp size={16} />
              WhatsApp Aja Dulu
            </a>
          </div>

          {/* Bottom proof line */}
          <div className="mt-16 pt-8 border-t border-paper/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-2xl md:text-3xl text-paper tabular leading-none">
                {STATS.eventsDelivered}
              </p>
              <p className="mt-1.5 text-xs text-cream/55">Events delivered</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-paper tabular leading-none">
                {STATS.companiesTrusted}
              </p>
              <p className="mt-1.5 text-xs text-cream/55">Companies trusted</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-paper tabular leading-none">
                {STATS.repeatBookingRate}
              </p>
              <p className="mt-1.5 text-xs text-cream/55">Repeat booking</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-paper tabular leading-none">
                {STATS.yearsOperating}
              </p>
              <p className="mt-1.5 text-xs text-cream/55">Operating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
