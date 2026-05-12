import Link from "next/link";
import { ArrowRight } from "@/components/icons/Icons";

// Placeholder client logos — replaced with real logos via CMS in Phase 7
const PLACEHOLDER_LOGOS = [
  "TECH UNICORN",
  "BUMN BANK",
  "FMCG GLOBAL",
  "TELCO PROVIDER",
  "MANUFACTURING",
  "STARTUP SCALEUP",
  "HOSPITALITY",
  "LOGISTICS",
  "RETAIL CHAIN",
  "EDUCATION",
  "HEALTHCARE",
  "MEDIA HOUSE",
];

export function TrustBar() {
  const logos = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section className="relative bg-paper py-20 md:py-24 border-b border-divider/60">
      <div className="container-1280">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="eyebrow-brand">Trusted By</span>
          <p className="text-base md:text-lg text-slate max-w-md">
            Perusahaan terbaik di Indonesia memilih kami untuk corporate event mereka
          </p>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee flex items-center gap-16 whitespace-nowrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[180px] h-12 px-6 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <span className="font-display text-base tracking-wide text-slate">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-1280 mt-14 text-center">
        <Link href="/case-studies" className="link-underline text-sm">
          Lihat bagaimana kami handle event untuk mereka
          <ArrowRight size={14} className="arrow" />
        </Link>
      </div>
    </section>
  );
}
