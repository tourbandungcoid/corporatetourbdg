import Link from "next/link";
import { ArrowRight } from "@/components/icons/Icons";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { STATS } from "@/lib/site";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCopy, getBrandSettings } from "@/lib/brand-settings";
import { LogoCarousel } from "@/components/home/LogoCarousel";

type ClientLogoRow = {
  id: string;
  name: string;
  logo_url: string;
  website_url: string | null;
};

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
  const [dbLogos, brand, eyebrow, sub] = await Promise.all([
    getClientLogos(),
    getBrandSettings(),
    getCopy("home.trust.eyebrow", "Trusted By"),
    getCopy("home.trust.sub", "Perusahaan terbaik di Indonesia memilih kami untuk corporate event mereka"),
  ]);

  const hasLogos = dbLogos.length > 0;
  const speed = brand.logo_carousel_speed;
  const allowSwipe = brand.logo_carousel_swipe;

  return (
    <section className="relative bg-paper py-20 md:py-24 border-b border-divider/60">
      <div className="container-1280">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="eyebrow-brand">{eyebrow}</span>
          <p className="text-base md:text-lg text-slate max-w-md">
            {sub}
          </p>
          <GoogleReviewsBadge variant="compact" className="mt-2" />
        </div>
      </div>

      {/* Social Proof Stats Grid */}
      <div className="container-1280 mt-12 mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-brand tabular leading-none">
              {STATS.eventsDelivered}
            </p>
            <p className="text-xs md:text-sm text-slate mt-2">Events delivered</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-brand tabular leading-none">
              {STATS.companiesTrusted}
            </p>
            <p className="text-xs md:text-sm text-slate mt-2">Companies trusted</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-brand tabular leading-none">
              {STATS.repeatBookingRate}
            </p>
            <p className="text-xs md:text-sm text-slate mt-2">Repeat booking rate</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-brand tabular leading-none">
              {STATS.avgResponseTime}
            </p>
            <p className="text-xs md:text-sm text-slate mt-2">Avg response time</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {hasLogos ? (
          <LogoCarousel
            mode="logos"
            items={dbLogos}
            speed={speed}
            allowSwipe={allowSwipe}
          />
        ) : (
          <LogoCarousel
            mode="placeholders"
            items={PLACEHOLDER_LOGOS}
            speed={speed}
            allowSwipe={allowSwipe}
          />
        )}
      </div>

      {allowSwipe && (
        <p className="text-center mt-3 text-[11px] text-slate-mute tracking-wide">
          ← geser untuk melihat semua →
        </p>
      )}

      <div className="container-1280 mt-14 text-center">
        <Link href="/case-studies" className="link-underline text-sm">
          Lihat bagaimana kami handle event untuk mereka
          <ArrowRight size={14} className="arrow" />
        </Link>
      </div>
    </section>
  );
}
