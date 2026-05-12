import Link from "next/link";
import { ArrowRight } from "../Icon";

const ITEMS = [
  {
    n: "01",
    title: "Tanpa objective yang jelas",
    body:
      "67% HR yang kami survei tidak bisa mengukur ROI dari outing terakhir mereka. Aktivitas seru, tapi tidak ada dampak yang terukur.",
  },
  {
    n: "02",
    title: "Aktivitas generic",
    body:
      "Cookie-cutter program yang tidak mencerminkan budaya, value, atau momen organisasi Anda saat ini. Sama untuk semua klien.",
  },
  {
    n: "03",
    title: "Logistik yang berantakan",
    body:
      "Last-minute chaos berakhir di meja HR — bukan vendor. Risk plan tidak ada, contingency tidak dipikirkan.",
  },
];

export function ProblemSolution() {
  return (
    <section className="section">
      <div className="container-1280">
        <div className="max-w-[820px]">
          <p className="eyebrow-gold mb-6">
            Mengapa banyak corporate outing gagal
          </p>
          <h2 className="font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
            Tim Anda layak mendapatkan lebih dari sekadar{" "}
            <span className="font-display-italic">outing biasa.</span>
          </h2>
        </div>

        <div className="mt-16 lg:mt-20 grid md:grid-cols-3 gap-8 lg:gap-12">
          {ITEMS.map((item) => (
            <div key={item.n}>
              <span className="font-display-italic text-[40px] lg:text-[48px] text-[var(--color-gold)] block leading-none mb-5">
                {item.n}
              </span>
              <h3 className="font-display text-[24px] lg:text-[26px] text-[var(--color-ink)] mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--color-slate)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[var(--color-divider)]">
          <Link href="/why-us/our-process" className="link-underline">
            Lihat metodologi kami — bagaimana kami menyelesaikan tiga masalah ini
            <ArrowRight size={16} className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
