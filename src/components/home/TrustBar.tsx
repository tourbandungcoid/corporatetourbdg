import Link from "next/link";
import { ArrowRight } from "@/components/icons/Icons";

// Placeholder logos — replace with real client logos via CMS (Phase 7)
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
  // Double for seamless marquee loop
  const logos = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section className="section-sm bg-paper border-y border-divider">
      <div className="container-1280">
        <p className="text-center text-sm text-slate">
          Dipercaya oleh perusahaan terbaik di Indonesia
        </p>
      </div>

      {/* Marquee strip */}
      <div className="mt-10 overflow-hidden">
        <div className="marquee flex items-center gap-12 whitespace-nowrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] h-10 px-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
            >
              <span className="font-display text-base tracking-wide text-slate">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-1280 mt-10 text-center">
        <Link href="/case-studies" className="link-underline text-sm">
          Lihat bagaimana kami handle event untuk mereka
          <ArrowRight size={14} className="arrow" />
        </Link>
      </div>
    </section>
  );
}
