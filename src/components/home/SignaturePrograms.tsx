import Link from "next/link";
import { ArrowUpRight } from "../Icon";
import { PhotoFrame, PHOTOS } from "../PhotoFrame";
import { PROGRAMS_FEATURED } from "@/lib/site";

const PROGRAM_PHOTOS = [
  PHOTOS.lembang,
  PHOTOS.ciwidey,
  PHOTOS.pangalengan,
  PHOTOS.gathering,
];

export function SignaturePrograms() {
  return (
    <section className="section">
      <div className="container-1280">
        <div className="max-w-[720px] mb-14 lg:mb-20">
          <p className="eyebrow-gold mb-6">Signature programs</p>
          <h2 className="font-display text-[36px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
            Productized programs, siap dieksekusi.
          </h2>
          <p className="mt-5 text-[17px] text-[var(--color-slate)]">
            Atau commission program yang sepenuhnya bespoke — sesuai brief
            spesifik Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {PROGRAMS_FEATURED.map((p, idx) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden mb-6 rounded-sm">
                <div className="absolute top-4 left-4 z-10 bg-[var(--color-paper)]/95 backdrop-blur px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink)]">
                  {p.tag}
                </div>
                <div className="aspect-[16/10] overflow-hidden bg-[var(--color-cream)]">
                  <PhotoFrame
                    driveId={PROGRAM_PHOTOS[idx]}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="group-hover:scale-[1.04] transition-transform duration-[700ms] ease-out"
                  />
                </div>
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-[12px] uppercase tracking-wider text-[var(--color-slate)]">
                  {p.duration}
                </span>
                <span className="text-[var(--color-slate-mute)]">·</span>
                <span className="text-[12px] uppercase tracking-wider text-[var(--color-slate)]">
                  {p.capacity}
                </span>
              </div>
              <h3 className="font-display text-[28px] lg:text-[32px] leading-tight text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--color-slate)] mb-5 max-w-[480px]">
                {p.short}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-divider)]">
                <span className="text-[14px] text-[var(--color-ink)]">
                  Mulai dari <span className="font-medium tabular">{p.priceFrom}</span>{" "}
                  <span className="text-[var(--color-slate-mute)]">/ pax</span>
                </span>
                <span className="flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">
                  Lihat program
                  <ArrowUpRight
                    size={16}
                    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/programs" className="link-underline">
            Lihat semua 25+ signature programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
