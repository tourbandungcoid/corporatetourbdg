import Link from "next/link";
import { ArrowRight } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="pt-[140px] lg:pt-[180px] pb-32">
      <div className="container-1280 text-center max-w-[680px] mx-auto">
        <p className="font-display-italic text-[80px] lg:text-[140px] text-[var(--color-gold)] leading-none">
          404
        </p>
        <h1 className="mt-6 font-display text-[36px] lg:text-[52px] leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
          Halaman ini{" "}
          <span className="font-display-italic">salah jalan.</span>
        </h1>
        <p className="mt-6 text-[16px] text-[var(--color-slate)]">
          Mari arahkan Anda ke tempat yang berguna.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-[480px] mx-auto">
          <Link href="/" className="btn btn-primary">
            Kembali ke Beranda
            <ArrowRight size={14} className="arrow" />
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Lihat Layanan
          </Link>
        </div>
        <div className="mt-12 text-[14px] text-[var(--color-slate)]">
          Atau langsung{" "}
          <Link href="/proposal/request" className="link-underline">
            request proposal →
          </Link>
        </div>
      </div>
    </section>
  );
}
