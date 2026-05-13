import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { href: "/services", label: "Services", desc: "10 service category B2B corporate event" },
  { href: "/packages", label: "Packages", desc: "8 package siap-pakai dengan range pax + budget" },
  { href: "/case-studies", label: "Case Studies", desc: "6 real corporate event yang sudah kami delivery" },
  { href: "/faq", label: "FAQ", desc: "48+ pertanyaan paling sering dari HR Indonesia" },
  { href: "/methodology", label: "Methodology", desc: "3 named framework kami pakai untuk setiap event" },
  { href: "/proposal/request", label: "Request Proposal", desc: "Form 3-step, proposal dalam 24 jam working hours" },
];

export default function NotFound() {
  return (
    <main className="bg-bone min-h-screen">
      <section className="container-1280 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-deep">
            404 · Page not found
          </p>
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Halaman yang lo cari belum ada, atau sudah dipindah.
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate leading-relaxed">
            Kalau lo mencari informasi corporate outing, team building, atau executive offsite di Bandung — coba salah satu link di bawah, atau langsung chat tim kami.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 mb-12 max-w-4xl">
          {QUICK_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-2xl border border-border bg-paper p-5 transition-colors hover:border-ink-soft"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg text-ink leading-tight">{l.label}</p>
                  <p className="mt-1 text-sm text-slate leading-relaxed">{l.desc}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="text-slate-mute group-hover:text-brand-deep transition-transform group-hover:translate-x-0.5 mt-1.5 flex-shrink-0"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition"
          >
            Kembali ke beranda
            <ArrowRight size={14} />
          </Link>
          <a
            href={buildWaLink("404 page")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 h-12 text-sm font-medium hover:opacity-90 transition"
          >
            <Whatsapp size={14} />
            Chat WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
