import Link from "next/link";
import { ArrowRight } from "@/components/icons/Icons";

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
    gradient: "from-forest via-brand-deep to-ink-soft",
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
    gradient: "from-brand-deep via-forest to-ink",
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
    gradient: "from-ink via-ink-soft to-forest",
  },
];

export function FeaturedPackages() {
  return (
    <section className="section bg-bone">
      <div className="container-1280">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow-brand">Featured Programs</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl lg:text-6xl">
              Sample Programs — Tinggal Customize
            </h2>
            <p className="mt-6 text-lg text-slate">
              Bukan paket fixed — sample starting point. Setiap proposal yang
              kami kirim disesuaikan dengan tim, budget, dan objective lo.
            </p>
          </div>
          <Link href="/packages" className="link-underline">
            Lihat all packages
            <ArrowRight size={14} className="arrow" />
          </Link>
        </div>

        {/* Packages grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <Link
              key={pkg.slug}
              href={`/packages/${pkg.slug}`}
              className={[
                "card card-hover group overflow-hidden flex flex-col",
                pkg.featured ? "md:scale-105 md:shadow-xl ring-2 ring-brand/30" : "",
              ].join(" ")}
            >
              {/* Image area */}
              <div
                className={`aspect-[4/3] relative overflow-hidden bg-gradient-to-br ${pkg.gradient}`}
              >
                {pkg.featured && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink">
                    ★ Most Popular
                  </div>
                )}
                <div className="absolute inset-0 flex items-end p-6">
                  <p className="text-paper/30 text-xs font-mono">
                    [Photo dari Drive: {pkg.title.toLowerCase()}]
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl text-ink">{pkg.title}</h3>
                <p className="mt-2 text-sm text-slate">{pkg.subtitle}</p>

                <ul className="mt-5 space-y-1.5 text-sm">
                  <li className="flex items-center gap-2 text-slate">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {pkg.pax}
                  </li>
                  <li className="flex items-center gap-2 text-slate">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {pkg.duration}
                  </li>
                  <li className="flex items-center gap-2 text-slate">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {pkg.vibe}
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-divider flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-mute">Mulai dari</p>
                    <p className="font-display text-2xl text-ink tabular">
                      {pkg.startingPrice}
                      <span className="text-sm font-sans text-slate ml-1">
                        /pax
                      </span>
                    </p>
                  </div>
                  <span className="text-sm font-medium text-brand-deep inline-flex items-center gap-1">
                    Detail
                    <ArrowRight
                      size={14}
                      className="arrow group-hover:translate-x-1 transition"
                    />
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
