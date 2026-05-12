import Link from "next/link";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { STATS, buildWaLink } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Background gradient + accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-forest/80 to-ink" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(107, 162, 57, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(184, 146, 76, 0.2) 0%, transparent 50%)",
        }}
      />

      <div className="container-1280 section relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-brand">Ready when you are</p>

          <h2 className="font-display mt-6 text-4xl text-paper md:text-5xl lg:text-7xl">
            Free Proposal.{" "}
            <span className="font-display-italic">No Commitment.</span>
            <br />
            No Pressure.
          </h2>

          <p className="mt-7 text-lg text-cream/80 md:text-xl max-w-2xl mx-auto">
            Briefing call 15 menit → proposal lengkap dalam 24 jam → tim lo
            bisa lihat &amp; approve internal. Itu workflow-nya — nggak ada
            yang lebih ribet dari itu.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/proposal/request"
              className="btn btn-on-dark btn-lg"
            >
              Request Free Proposal
              <ArrowRight size={16} className="arrow" />
            </Link>
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{
                background: "transparent",
                color: "#FAFAF7",
                border: "1px solid rgba(250, 250, 247, 0.3)",
              }}
            >
              <Whatsapp size={16} />
              WhatsApp Aja Dulu
            </a>
          </div>

          <p className="mt-12 text-sm text-cream/60">
            {STATS.companiesTrusted} companies · {STATS.eventsDelivered} events
            · {STATS.repeatBookingRate} repeat booking · {STATS.yearsOperating}
          </p>
        </div>
      </div>
    </section>
  );
}
