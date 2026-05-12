"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "@/components/icons/Icons";

const FAQS = [
  {
    q: "Berapa estimasi budget outing kantor untuk tim 100 pax di Bandung?",
    a: "Range Rp 2.5–5jt/pax untuk paket 2D1N standard, sudah include venue, F&B 3x, activity, transportation lokal, dan project management. Variasi tergantung tier venue dan kompleksitas activity. Untuk perbandingan, paket budget conservative kami mulai Rp 1.8jt/pax (1D2N glamping), sementara premium executive bisa Rp 6jt+/pax.",
  },
  {
    q: "Berapa lama proses dari request proposal ke konfirmasi?",
    a: "Proposal lengkap dengan breakdown & 2 alternative venue dalam 24 jam setelah briefing call. Revision biasanya 1–2 hari. Konfirmasi venue & deposit 30% — siap di-eksekusi 3 minggu kemudian (worst case 4 hari untuk urgent request, tergantung availability venue).",
  },
  {
    q: "Apakah bisa custom itinerary di-luar paket yang ditampilkan di website?",
    a: "Iya, 100%. Sample packages di website adalah starting point — setiap proposal yang kami kirim sudah disesuaikan dengan objective tim, jumlah pax, budget actual, dan preferences. Tidak ada 'paket fixed'.",
  },
  {
    q: "Bagaimana kalau pax berubah mendekati hari H?",
    a: "Standard contract kami allow +/- 10% pax tanpa adjustment cost up to 14 hari sebelum hari H. Di luar itu, kami bantu negotiate dengan venue untuk minimum impact. Transparency soal cost adjustment selalu dikomunikasikan tertulis.",
  },
  {
    q: "Apakah ada hidden cost di luar proposal?",
    a: "Tidak. Proposal kami detailed breakdown — venue, F&B, logistics, talent, equipment, contingency, dan profit margin. Yang muncul di invoice = yang ada di proposal yang Anda approve. Add-on (jika ada) selalu konfirmasi tertulis dulu.",
  },
  {
    q: "Bagaimana penanganan kalau ada force majeure (cuaca buruk, kondisi venue)?",
    a: "Setiap program kami siapkan Plan A & Plan B (indoor backup activity, alternative venue). Contingency budget 5–8% sudah include. Untuk full cancel due to force majeure, refund/reschedule policy clear di contract — biasanya 70–100% refund tergantung notice period.",
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
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow-brand">FAQ</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl">
              Yang Sering Ditanyakan HR Sebelum Booking
            </h2>
            <p className="mt-6 text-lg text-slate">
              Pertanyaan paling sering muncul di awal conversation. Selengkapnya
              di halaman FAQ.
            </p>
            <Link
              href="/faq"
              className="mt-8 inline-flex link-underline"
            >
              Lihat all FAQ
              <ArrowRight size={14} className="arrow" />
            </Link>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="text-left rounded-lg border border-border bg-bone hover:border-ink-soft transition overflow-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4 p-5">
                    <h3 className="font-medium text-ink text-base md:text-lg leading-tight">
                      {faq.q}
                    </h3>
                    <span
                      className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </div>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate leading-relaxed text-sm md:text-base">
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
