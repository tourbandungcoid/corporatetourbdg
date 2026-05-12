import Link from "next/link";
import { ArrowRight } from "../Icon";
import { PhotoFrame, PHOTOS } from "../PhotoFrame";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative pt-[120px] lg:pt-[140px] pb-16 lg:pb-24 overflow-hidden">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow-gold mb-6 fade-up">
              A unit of {SITE.parent} · Since {SITE.established}
            </p>
            <h1
              className="font-display text-[40px] sm:text-[52px] lg:text-[68px] xl:text-[76px] leading-[1.02] tracking-[-0.025em] text-[var(--color-ink)] fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Partner terpercaya Indonesia untuk{" "}
              <span className="font-display-italic text-[var(--color-gold)]">
                corporate gathering
              </span>{" "}
              berdampak, didesain dengan tujuan.
            </h1>
            <p
              className="mt-7 max-w-[560px] text-[17px] lg:text-[19px] leading-[1.55] text-[var(--color-slate)] fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Kami merancang dan mengeksekusi company outing, MICE, dan
              leadership offsite untuk enterprise Indonesia — dari 50 hingga
              1.500 peserta. Bukan paket. Bukan tour. Sebuah experience yang
              menggerakkan tim Anda.
            </p>
            <div
              className="mt-9 flex flex-wrap items-center gap-3 fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link href="/proposal/request" className="btn btn-primary btn-lg">
                Request Proposal
                <ArrowRight size={16} className="arrow" />
              </Link>
              <Link
                href="/proposal/book-consultation"
                className="btn btn-secondary btn-lg"
              >
                Schedule 15-min Call
              </Link>
            </div>

            <div
              className="mt-12 pt-8 border-t border-[var(--color-divider)] flex flex-wrap items-baseline gap-x-8 gap-y-3 fade-up"
              style={{ animationDelay: "320ms" }}
            >
              <Stat value={SITE.stats.programs} label="program dieksekusi" />
              <Divider />
              <Stat value={SITE.stats.clients} label="enterprise client" />
              <Divider />
              <Stat value={SITE.stats.years} label="tahun beroperasi" />
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
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-ink)]/30 via-transparent to-transparent z-10" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-paper)] border border-[var(--color-border)] px-5 py-4 max-w-[240px] hidden sm:block">
                <p className="eyebrow-gold mb-2">Latest case</p>
                <p className="text-[14px] leading-snug text-[var(--color-ink)]">
                  Bank Nasional — 450 leader, 3D2N, engagement +34%.
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
