import Link from "next/link";
import { ArrowRight } from "@/components/icons/Icons";
import { FRAMEWORKS } from "@/lib/frameworks-data";

export function OurFrameworks() {
  const featured = Object.values(FRAMEWORKS).slice(0, 3);

  return (
    <section className="section bg-bone border-b border-divider">
      <div className="container-1280">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16 items-end">
          <div>
            <span className="eyebrow-brand">Our Methodology</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mt-4 mb-4">
              Proprietary frameworks powering 400+ events.
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              We don&apos;t believe in generic event planning. Every framework below is grounded in
              2018-2026 execution, validated with data, and published for transparency.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base text-slate">
              Our strategic approach follows 6 named frameworks that transform corporate events
              from &ldquo;fun activity&rdquo; to measurable business outcome.
            </p>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-deep transition w-fit font-medium"
            >
              View All Frameworks <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Featured Frameworks Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((framework) => (
            <div
              key={framework.shortName}
              className="bg-paper rounded-2xl p-8 border border-divider hover:border-brand-deep transition"
            >
              <h3 className="font-display text-xl text-ink mb-2">{framework.shortName}</h3>
              <p className="text-sm text-slate leading-relaxed mb-6">
                {framework.description}
              </p>
              <ul className="space-y-2 text-sm text-slate">
                {framework.pillars.slice(0, 2).map((pillar) => (
                  <li key={pillar} className="flex gap-2">
                    <span className="text-brand-deep flex-shrink-0">✓</span>
                    <span>{pillar.split(" — ")[0]}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-mute mt-4 pt-4 border-t border-divider">
                {framework.applicableTo.slice(0, 2).join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand text-paper hover:bg-brand-deep transition"
          >
            Explore All 6 Frameworks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
