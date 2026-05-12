import Link from "next/link";
import { ArrowRight } from "./icons/Icons";

type Props = {
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

/**
 * Reused on routes not yet built — gives visitor a clear next step
 * instead of 404. Removed once each route gets its full Phase 3/5/7 build.
 */
export function ComingSoon({
  description = "Halaman ini sedang dalam pengerjaan. Sementara itu, lo bisa langsung request proposal — sales team kami siap respond.",
  primaryCtaLabel = "Request Proposal",
  primaryCtaHref = "/proposal/request",
}: Props) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-1280">
        <div className="max-w-2xl rounded-3xl border border-border bg-paper p-8 md:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light/70 px-3 py-1 text-xs font-medium text-brand-deep">
            Coming soon
          </span>
          <p className="mt-5 text-base md:text-lg text-slate leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition-colors"
            >
              {primaryCtaLabel}
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 h-12 text-sm font-medium text-ink hover:bg-cream transition-colors"
            >
              Kembali ke beranda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
