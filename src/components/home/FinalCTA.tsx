import Link from "next/link";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { STATS, buildWaLink } from "@/lib/site";
import { getCopy } from "@/lib/brand-settings";

export async function FinalCTA() {
  const [
    eyebrow,
    line1,
    line2,
    line3,
    sub,
    primary,
    whatsapp,
  ] = await Promise.all([
    getCopy("home.cta.eyebrow", "Ready when you are"),
    getCopy("home.cta.line1", "Free proposal."),
    getCopy("home.cta.line2", "No commitment."),
    getCopy("home.cta.line3", "No pressure."),
    getCopy("home.cta.sub", "Briefing call 15 menit. Proposal lengkap dalam 24 jam. Tim lo review & approve internal. Itu workflow-nya — nggak lebih ribet dari itu."),
    getCopy("home.cta.primary", "Request Proposal"),
    getCopy("home.cta.whatsapp", "WhatsApp Aja Dulu"),
  ]);

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
          <span className="eyebrow text-brand-light/80">{eyebrow}</span>

          <h2 className="font-display mt-6 text-paper leading-[0.98] tracking-[-0.035em]">
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              {line1}
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-light/70 mt-2">
              {line2}
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
              {line3}
            </span>
          </h2>

          <p className="mt-10 text-lg text-cream/75 md:text-xl max-w-2xl mx-auto leading-relaxed">
            {sub}
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/proposal/request"
              className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
            >
              {primary}
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
              {whatsapp}
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
