"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "@/components/icons/Icons";

const FAQS = [
  {
    q: "Berapa estimasi budget outing kantor untuk tim 100 pax di Bandung?",
    a: "Range Rp 2.5–5 juta/pax untuk paket 2D1N standard, sudah include venue, F&B 3x, activity, transportation lokal, dan project management. Variasi tergantung tier venue dan kompleksitas activity. Paket budget conservative mulai Rp 1.8 juta/pax (1D2N glamping), premium executive bisa Rp 6 juta+/pax.",
  },
  {
    q: "Berapa lama proses dari request proposal ke konfirmasi?",
    a: "Proposal lengkap dengan breakdown & 2 alternative venue dalam 24 jam setelah briefing call. Revision 1–2 hari. Konfirmasi venue & deposit 30%, siap di-eksekusi 3 minggu kemudian (urgent request bisa 4 hari, tergantung availability venue).",
  },
  {
    q: "Apakah bisa custom itinerary di-luar paket yang ditampilkan di website?",
    a: "Iya, 100%. Sample packages adalah starting point — setiap proposal disesuaikan dengan objective tim, jumlah pax, budget actual, dan preferences. Tidak ada 'paket fixed'.",
  },
  {
    q: "Bagaimana kalau pax berubah mendekati hari H?",
    a: "Standard contract allow +/- 10% pax tanpa adjustment cost up to 14 hari sebelum hari H. Di luar itu, kami negotiate dengan venue untuk minimum impact. Transparency soal cost adjustment selalu tertulis.",
  },
  {
    q: "Apakah ada hidden cost di luar proposal?",
    a: "Tidak. Proposal detailed breakdown — venue, F&B, logistics, talent, equipment, contingency, dan profit margin. Yang muncul di invoice = yang ada di proposal yang Anda approve. Add-on selalu konfirmasi tertulis dulu.",
  },
  {
    q: "Bagaimana penanganan kalau ada force majeure (cuaca buruk, kondisi venue)?",
    a: "Setiap program siapkan Plan A & Plan B (indoor backup activity, alternative venue). Contingency budget 5–8% include. Untuk full cancel due to force majeure, refund/reschedule policy clear di contract — 70–100% refund tergantung notice period.",
  },
  {
    q: "Apakah Tour Bandung Corporate sama dengan 7Summits Travel?",
    a: "corporate.tourbandung.co.id adalah unit specialized dari 7Summits Travel yang fokus 100% di market corporate (B2B). Bukan retail leisure. Tim, methodology, dan portfolio sepenuhnya untuk handle complexity B2B corporate.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-paper">
      <div className="container-1280">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow-brand">FAQ</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
              Yang sering ditanyakan HR sebelum booking.
            </h2>
            <p className="mt-6 text-base text-slate max-w-md">
              Pertanyaan paling sering muncul di awal conversation. Detail
              lengkap di halaman FAQ.
            </p>
            <Link
              href="/faq"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 h-11 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              All FAQ
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-2">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="text-left rounded-2xl border border-border bg-bone hover:border-ink-soft transition-all overflow-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4 p-6">
                    <h3 className="font-display text-lg md:text-xl text-ink leading-snug">
                      {faq.q}
                    </h3>
                    <span
                      className={`flex-shrink-0 mt-1 transition-transform duration-300 text-slate ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </div>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate leading-relaxed text-[15px]">
                      {faq.a}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
