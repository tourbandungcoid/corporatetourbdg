import Link from "next/link";
import { ArrowRight } from "../Icon";

const ITEMS = [
  {
    n: "01",
    title: "Outing-nya seru. Dampaknya? Nggak jelas.",
    body:
      "67% HR yang kami survei nggak bisa ukur ROI outing terakhir mereka. Aktivitas rame, foto-foto bagus — tapi 3 bulan kemudian tim balik ke pola lama.",
  },
  {
    n: "02",
    title: "Vendor jualan paket. Bukan solusi.",
    body:
      "Cookie-cutter program yang sama dipakai semua klien. Nggak mencerminkan budaya kantor, nggak nyambung ke momen organisasi Anda saat ini.",
  },
  {
    n: "03",
    title: "H-1 chaos, HR yang pusing.",
    body:
      "Bus telat, catering kurang, peserta complain — vendor angkat tangan, HR yang ditegur. Risk plan? Contingency? Nggak ada di proposal mereka.",
  },
];

export function ProblemSolution() {
  return (
    <section className="section">
      <div className="container-1280">
        <div className="max-w-[820px]">
          <p className="eyebrow-brand mb-6">
            Kenapa banyak corporate outing gagal
          </p>
          <h2 className="font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
            Tim Anda capek setahun penuh.{" "}
            <span className="font-display-italic">Outing-nya jangan asal-asalan.</span>
          </h2>
        </div>

        <div className="mt-16 lg:mt-20 grid md:grid-cols-3 gap-8 lg:gap-12">
          {ITEMS.map((item) => (
            <div key={item.n}>
              <span className="font-display-italic text-[40px] lg:text-[48px] text-[var(--color-brand)] block leading-none mb-5">
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
            Lihat cara kami menyelesaikan 3 masalah ini
            <ArrowRight size={16} className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
