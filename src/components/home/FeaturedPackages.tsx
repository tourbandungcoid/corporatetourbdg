import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons/Icons";
import { IMAGES } from "@/lib/drive-images";

const PACKAGES = [
  {
    slug: "glamping-1d2n-team-bonding",
    title: "Glamping 1D2N",
    subtitle: "Team Bonding di Alam Terbuka",
    pax: "30–80 pax",
    duration: "2D1N",
    vibe: "Relaxed · Nature",
    startingPrice: "Rp 1.8jt",
    featured: false,
    image: IMAGES.packageGlamping,
  },
  {
    slug: "signature-annual-gathering",
    title: "Signature Annual Gathering",
    subtitle: "Premium Multi-Day Corporate Event",
    pax: "100–400 pax",
    duration: "3D2N",
    vibe: "Premium · Experiential",
    startingPrice: "Rp 3.5jt",
    featured: true,
    image: IMAGES.packageAnnualGathering,
  },
  {
    slug: "executive-offsite-premium",
    title: "Executive Offsite Premium",
    subtitle: "Discreet C-Level Strategy Session",
    pax: "8–30 pax",
    duration: "2D1N",
    vibe: "Discreet · Luxury",
    startingPrice: "Rp 6.5jt",
    featured: false,
    image: IMAGES.packageExecutiveOffsite,
  },
];

export function FeaturedPackages() {
  return (
    <section className="section bg-cream/40">
      <div className="container-1280">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow-brand">Featured Programs</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
              Sample programs.<br />
              <span className="text-brand-deep">Tinggal customize.</span>
            </h2>
          </div>
          <Link
            href="/packages"
            className="self-start md:self-end inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 h-11 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            All packages
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <Link
              key={pkg.slug}
              href={`/packages/${pkg.slug}`}
              className={[
                "group relative overflow-hidden rounded-2xl bg-paper flex flex-col transition-all duration-300",
                "border border-border hover:border-ink-soft hover:-translate-y-1",
                "hover:shadow-[0_24px_48px_rgba(15,31,26,0.08)]",
                pkg.featured ? "md:scale-[1.02] md:shadow-[0_16px_40px_rgba(15,31,26,0.08)]" : "",
              ].join(" ")}
            >
              {/* Image area */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-forest to-ink">
                <Image
                  src={pkg.image.src}
                  alt={pkg.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {pkg.featured && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-ink shadow-md">
                    ★ Most Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>

              <div className="p-7 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-mute">
                  {pkg.vibe}
                </p>
                <h3 className="font-display mt-3 text-2xl text-ink leading-tight">
                  {pkg.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{pkg.subtitle}</p>

                <div className="mt-6 pt-5 border-t border-divider flex items-center gap-6 text-sm text-slate">
                  <span>{pkg.pax}</span>
                  <span className="h-1 w-1 rounded-full bg-divider" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-mute mb-0.5">Mulai dari</p>
                    <p className="font-display text-2xl text-ink tabular leading-none">
                      {pkg.startingPrice}
                      <span className="text-sm font-medium text-slate ml-1.5">
                        /pax
                      </span>
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border group-hover:bg-ink group-hover:border-ink group-hover:text-paper transition-colors">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
