"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, Check, Search } from "@/components/icons/Icons";
import type { Package } from "@/lib/packages-data";

const PRICE_BUCKETS: { label: string; test: (n: number) => boolean }[] = [
  { label: "Semua harga", test: () => true },
  { label: "< Rp 2 jt/pax", test: (n) => n < 2 },
  { label: "Rp 2–3 jt/pax", test: (n) => n >= 2 && n < 3 },
  { label: "Rp 3–5 jt/pax", test: (n) => n >= 3 && n < 5 },
  { label: "Rp 5 jt/pax ke atas", test: (n) => n >= 5 },
];

export function PackagesGrid({ packages }: { packages: Package[] }) {
  const [query, setQuery] = useState("");
  const [pickedSlug, setPickedSlug] = useState("");
  const [duration, setDuration] = useState("");
  const [priceLabel, setPriceLabel] = useState(PRICE_BUCKETS[0].label);

  const durations = useMemo(
    () =>
      Array.from(new Set(packages.map((p) => p.duration))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [packages]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const priceBucket =
      PRICE_BUCKETS.find((b) => b.label === priceLabel) ?? PRICE_BUCKETS[0];

    return packages.filter((p) => {
      if (pickedSlug && p.slug !== pickedSlug) return false;
      if (duration && p.duration !== duration) return false;
      if (!priceBucket.test(p.priceNumeric)) return false;

      if (q) {
        const haystack = [
          p.title,
          p.subtitle,
          p.description,
          p.paxRange,
          p.duration,
          p.startingPrice,
          ...p.vibeTags,
          ...p.inclusions,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [packages, query, pickedSlug, duration, priceLabel]);

  const hasActiveFilter =
    query.trim() !== "" ||
    pickedSlug !== "" ||
    duration !== "" ||
    priceLabel !== PRICE_BUCKETS[0].label;

  function resetFilters() {
    setQuery("");
    setPickedSlug("");
    setDuration("");
    setPriceLabel(PRICE_BUCKETS[0].label);
  }

  return (
    <>
      {/* Filter bar */}
      <section className="border-b border-divider bg-paper py-6 md:py-8 sticky top-0 z-30">
        <div className="container-1280">
          <div className="grid gap-3 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
            {/* Search */}
            <label className="relative block">
              <span className="sr-only">Cari paket</span>
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-mute">
                <Search size={16} />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari semua data — nama, tag, inclusion, durasi…"
                className="w-full h-12 rounded-full border border-border bg-paper pl-11 pr-4 text-sm text-ink placeholder:text-slate-mute focus:outline-none focus:border-ink-soft focus:ring-2 focus:ring-brand/15"
              />
            </label>

            {/* Nama paket — searchable via datalist */}
            <label className="relative block">
              <span className="sr-only">Nama paket</span>
              <input
                list="pkg-name-list"
                value={
                  packages.find((p) => p.slug === pickedSlug)?.title ?? ""
                }
                onChange={(e) => {
                  const v = e.target.value;
                  const match = packages.find((p) => p.title === v);
                  setPickedSlug(match ? match.slug : "");
                }}
                placeholder="Nama paket"
                className="w-full h-12 rounded-full border border-border bg-paper px-5 text-sm text-ink placeholder:text-slate-mute focus:outline-none focus:border-ink-soft focus:ring-2 focus:ring-brand/15"
              />
              <datalist id="pkg-name-list">
                {packages.map((p) => (
                  <option key={p.slug} value={p.title} />
                ))}
              </datalist>
            </label>

            {/* Durasi */}
            <label className="relative block">
              <span className="sr-only">Durasi</span>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full h-12 rounded-full border border-border bg-paper px-5 pr-9 text-sm text-ink focus:outline-none focus:border-ink-soft focus:ring-2 focus:ring-brand/15 appearance-none cursor-pointer"
              >
                <option value="">Semua durasi</option>
                {durations.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-mute text-xs">
                ▾
              </span>
            </label>

            {/* Harga */}
            <label className="relative block">
              <span className="sr-only">Harga</span>
              <select
                value={priceLabel}
                onChange={(e) => setPriceLabel(e.target.value)}
                className="w-full h-12 rounded-full border border-border bg-paper px-5 pr-9 text-sm text-ink focus:outline-none focus:border-ink-soft focus:ring-2 focus:ring-brand/15 appearance-none cursor-pointer"
              >
                {PRICE_BUCKETS.map((b) => (
                  <option key={b.label} value={b.label}>
                    {b.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-mute text-xs">
                ▾
              </span>
            </label>
          </div>

          {/* Result summary */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-mute">
            <span>
              Menampilkan{" "}
              <strong className="text-ink tabular">{filtered.length}</strong>{" "}
              dari{" "}
              <strong className="text-ink tabular">{packages.length}</strong>{" "}
              paket
            </span>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={resetFilters}
                className="ml-2 inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-medium text-slate hover:bg-cream transition"
              >
                Reset filter
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-16 md:py-20">
        <div className="container-1280">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-border bg-paper p-16 text-center">
              <p className="font-display text-2xl text-ink">
                Belum ada paket yang match.
              </p>
              <p className="mt-3 text-sm text-slate max-w-md mx-auto">
                Coba kurangi filter atau{" "}
                <Link
                  href="/proposal/request"
                  className="text-brand-deep underline underline-offset-4 hover:text-brand"
                >
                  request custom proposal
                </Link>{" "}
                — tim kami bantu design dari brief.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-border bg-paper px-5 h-10 text-sm font-medium text-ink hover:bg-cream transition"
              >
                Reset filter
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filtered.map((pkg) => (
                <div
                  key={pkg.slug}
                  className={[
                    "group relative overflow-hidden rounded-3xl bg-paper border transition-all hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,31,26,0.08)]",
                    pkg.featured
                      ? "border-brand md:scale-[1.01] ring-2 ring-brand/30"
                      : "border-border hover:border-ink-soft",
                  ].join(" ")}
                >
                  <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-forest to-ink">
                    <Image
                      src={pkg.image.src}
                      alt={pkg.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                    {pkg.featured && (
                      <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-ink shadow-md">
                        ★ Most Popular
                      </div>
                    )}
                    <div className="absolute bottom-5 left-5 flex flex-wrap gap-1.5">
                      {pkg.vibeTags.map((v) => (
                        <span
                          key={v}
                          className="inline-flex items-center rounded-full bg-paper/90 backdrop-blur px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-medium text-ink"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                      {pkg.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate">{pkg.subtitle}</p>
                    <p className="mt-4 text-sm text-slate leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-divider flex items-center gap-6 text-sm text-slate">
                      <span>{pkg.paxRange}</span>
                      <span className="h-1 w-1 rounded-full bg-divider" />
                      <span>{pkg.duration}</span>
                    </div>

                    <details className="mt-5 group/details">
                      <summary className="cursor-pointer text-sm font-medium text-ink hover:text-brand-deep flex items-center gap-1.5">
                        <span>Yang sudah include</span>
                        <span className="text-xs text-slate-mute transition-transform group-open/details:rotate-180">
                          ↓
                        </span>
                      </summary>
                      <ul className="mt-4 space-y-2">
                        {pkg.inclusions.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-slate"
                          >
                            <span className="mt-0.5 text-brand flex-shrink-0">
                              <Check size={14} />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </details>

                    <div className="mt-6 pt-5 border-t border-divider flex items-end justify-between">
                      <div>
                        <p className="text-xs text-slate-mute mb-0.5">
                          Mulai dari
                        </p>
                        <p className="font-display text-2xl text-ink tabular leading-none">
                          {pkg.startingPrice}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/services/${pkg.serviceSlug}`}
                          className="inline-flex items-center justify-center h-10 px-4 rounded-full border border-border text-xs font-medium text-ink hover:bg-cream transition"
                        >
                          Detail service
                        </Link>
                        <Link
                          href="/proposal/request"
                          className="inline-flex items-center justify-center gap-1 h-10 px-4 rounded-full bg-ink text-paper text-xs font-medium hover:bg-brand-deep transition"
                        >
                          Request
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
