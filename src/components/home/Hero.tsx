import Link from "next/link";
import { ArrowRight } from "../Icon";
import { PhotoFrame, PHOTOS } from "../PhotoFrame";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative pt-[120px] lg:pt-[140px] pb-16 lg:pb-24 overflow-hidden">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow-brand mb-6 fade-up flex items-center gap-2.5">
              <span className="inline-block w-6 h-px bg-[var(--color-brand)]" />
              By {SITE.parent} · Sejak {SITE.established}
            </p>
            <h1
              className="font-display text-[44px] sm:text-[58px] lg:text-[72px] xl:text-[82px] leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)] fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Corporate outing untuk tim yang{" "}
              <span className="font-display-italic text-[var(--color-brand)]">
                fokus hasil.
              </span>
            </h1>
            <p
              className="mt-7 max-w-[580px] text-[17px] lg:text-[20px] leading-[1.5] text-[var(--color-slate)] fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Kami desain dan eksekusi outing kantor, MICE, retreat, dan
              executive offsite untuk enterprise Indonesia. 13 tahun, 500+
              program, 180+ klien — dari brief sampai post-event report,
              di-handle satu agency.
            </p>
            <div
              className="mt-9 flex flex-wrap items-center gap-3 fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link href="/proposal/request" className="btn btn-primary btn-lg">
                Minta Proposal
                <ArrowRight size={16} className="arrow" />
              </Link>
              <Link
                href="/proposal/book-consultation"
                className="btn btn-secondary btn-lg"
              >
                Konsultasi 15 menit
              </Link>
            </div>

            <div
              className="mt-12 pt-8 border-t border-[var(--color-divider)] flex flex-wrap items-baseline gap-x-8 gap-y-3 fade-up"
              style={{ animationDelay: "320ms" }}
            >
              <Stat value={SITE.stats.programs} label="program eksekusi" />
              <Divider />
              <Stat value={SITE.stats.clients} label="klien enterprise" />
              <Divider />
              <Stat value={SITE.stats.years} label="tahun pengalaman" />
            </div>
          </div>

          <div
            className="lg:col-span-5 fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <div className="absolute inset-0 z-0">
                  <PhotoFrame
                    driveId={PHOTOS.leadership}
                    alt="Corporate leadership offsite di Lembang"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="ken-burns"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-ink)]/35 via-transparent to-[var(--color-brand)]/10 z-10" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-paper)] border border-[var(--color-border)] px-5 py-4 max-w-[260px] hidden sm:block shadow-[0_16px_40px_rgba(15,31,26,0.08)]">
                <p className="eyebrow-brand mb-2">Latest case</p>
                <p className="text-[14px] leading-snug text-[var(--color-ink)]">
                  <span className="font-medium">Bank Nasional</span> — 450 leader, 3D2N. Engagement score{" "}
                  <span className="text-[var(--color-brand-deep)] font-medium">+34%</span> post-event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="font-display text-[28px] lg:text-[32px] text-[var(--color-ink)] tabular">
        {value}
      </span>
      <span className="ml-2 text-[13px] text-[var(--color-slate)]">{label}</span>
    </div>
  );
}

function Divider() {
  return (
    <span className="hidden sm:inline-block w-px h-6 bg-[var(--color-divider)]" />
  );
}
