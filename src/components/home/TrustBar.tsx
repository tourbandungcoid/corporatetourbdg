import Link from "next/link";
import { ArrowRight } from "@/components/icons/Icons";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { createAdminClient } from "@/lib/supabase/admin";

type ClientLogoRow = {
  id: string;
  name: string;
  logo_url: string;
  website_url: string | null;
};

// Fallback when no logos uploaded yet — keeps the marquee from looking empty.
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

async function getClientLogos(): Promise<ClientLogoRow[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("client_logos")
      .select("id, name, logo_url, website_url")
      .eq("is_active", true)
      .order("display_order", { ascending: true });
    if (error || !data) return [];
    return data;
  } catch {
    return [];
  }
}

export async function TrustBar() {
  const dbLogos = await getClientLogos();
  const hasLogos = dbLogos.length > 0;

  // Duplicate the array so the marquee loops seamlessly.
  const logos = hasLogos ? [...dbLogos, ...dbLogos] : null;
  const placeholders = hasLogos ? null : [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section className="relative bg-paper py-20 md:py-24 border-b border-divider/60">
      <div className="container-1280">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="eyebrow-brand">Trusted By</span>
          <p className="text-base md:text-lg text-slate max-w-md">
            Perusahaan terbaik di Indonesia memilih kami untuk corporate event mereka
          </p>
          <GoogleReviewsBadge variant="compact" className="mt-2" />
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee flex items-center gap-16 whitespace-nowrap">
          {logos
            ? logos.map((logo, i) => (
                <LogoCell
                  key={`${logo.id}-${i}`}
                  src={logo.logo_url}
                  name={logo.name}
                  href={logo.website_url}
                />
              ))
            : placeholders?.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center min-w-[180px] h-12 px-6 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <span className="font-display text-base tracking-wide text-slate">
                    {label}
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

function LogoCell({
  src,
  name,
  href,
}: {
  src: string;
  name: string;
  href: string | null;
}) {
  const inner = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      className="max-h-12 max-w-[160px] object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
      loading="lazy"
    />
  );
  return (
    <div className="flex items-center justify-center min-w-[180px] h-12 px-6">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}
