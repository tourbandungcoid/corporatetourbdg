import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createAdminClient } from "@/lib/supabase/admin";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, CONTACT, SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Track Proposal",
  robots: { index: false, follow: false },
};

const STATUS_TIMELINE: { key: string; label: string; description: string }[] = [
  {
    key: "submitted",
    label: "Request received",
    description: "Brief Anda sudah masuk. Senior planner akan review dalam 2 jam working hours.",
  },
  {
    key: "under_review",
    label: "Under review",
    description: "Senior planner sedang baca brief dan melakukan initial analysis.",
  },
  {
    key: "drafting",
    label: "Drafting proposal",
    description: "Tim kami sedang menyusun proposal dengan venue alternative + breakdown line-item.",
  },
  {
    key: "internal_qa",
    label: "Internal QA",
    description: "Proposal di-review oleh senior planner untuk pricing accuracy & spec consistency.",
  },
  {
    key: "sent",
    label: "Proposal sent",
    description: "Proposal lengkap sudah dikirim ke email Anda. Reply email atau WhatsApp untuk diskusi.",
  },
  {
    key: "feedback_requested",
    label: "Feedback requested",
    description: "Kami menunggu feedback / revision request dari Anda untuk finalisasi.",
  },
  {
    key: "revising",
    label: "Revising",
    description: "Sedang revisi proposal berdasarkan feedback Anda.",
  },
  {
    key: "approved",
    label: "Approved",
    description: "Proposal di-approve. Kami siap eksekusi setelah konfirmasi deposit.",
  },
  {
    key: "won",
    label: "Confirmed",
    description: "Event confirmed. Tim ops akan kontak untuk planning detail.",
  },
];

const FINAL_STATUS = new Set(["won", "lost", "declined", "archived", "no_response", "cooled"]);

type RouteParams = Promise<{ ref: string }>;

async function getLeadByRef(ref: string) {
  const sb = createAdminClient();
  const { data, error } = await sb
    .from("leads")
    .select("id, ref_code, full_name, company_name, status, source, created_at, updated_at")
    .eq("ref_code", ref.toUpperCase())
    .maybeSingle();

  if (error || !data) return null;
  return data;
}

export default async function ProposalTrackPage({
  params,
}: {
  params: RouteParams;
}) {
  const { ref } = await params;
  const lead = await getLeadByRef(ref);
  if (!lead) notFound();

  const currentStageIdx = STATUS_TIMELINE.findIndex((s) => s.key === lead.status);
  const isFinal = FINAL_STATUS.has(lead.status);
  const stageCount = STATUS_TIMELINE.length;
  const progressPct =
    currentStageIdx < 0
      ? 0
      : Math.min(100, ((currentStageIdx + 1) / stageCount) * 100);

  return (
    <main className="bg-bone min-h-screen">
      <section className="container-1280 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate hover:text-ink mb-8"
          >
            ← Beranda
          </Link>

          <p className="font-mono text-xs uppercase tracking-wider text-brand-deep">
            Proposal tracker
          </p>
          <h1 className="font-display mt-3 text-4xl md:text-5xl text-ink leading-[1.05]">
            Halo {lead.full_name.split(" ")[0]},
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate leading-relaxed">
            Status proposal Anda — {lead.company_name}
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-paper border border-border px-4 py-2">
            <span className="font-mono text-sm text-ink tabular">{lead.ref_code}</span>
            <span className="text-slate-mute">·</span>
            <span className="text-xs text-slate">
              Submitted{" "}
              {new Date(lead.created_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Progress bar */}
      <section className="bg-paper border-y border-divider py-8">
        <div className="container-1280">
          <div className="max-w-3xl">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-medium text-ink">Progress</span>
              <span className="tabular text-slate-mute">{Math.round(progressPct)}%</span>
            </div>
            <div className="h-2 rounded-full bg-cream/80 overflow-hidden">
              <div
                className="h-full bg-brand transition-all"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="mt-3 text-xs text-slate-mute">
              Last update:{" "}
              {new Date(lead.updated_at).toLocaleString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16">
        <div className="container-1280">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
              Stage timeline
            </h2>

            <ol className="space-y-5">
              {STATUS_TIMELINE.map((stage, i) => {
                const isCompleted = i < currentStageIdx;
                const isCurrent = i === currentStageIdx;
                const isFuture = i > currentStageIdx;
                return (
                  <li
                    key={stage.key}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`flex-shrink-0 mt-1 h-6 w-6 rounded-full flex items-center justify-center text-[11px] font-medium tabular ${
                        isCompleted
                          ? "bg-brand text-paper"
                          : isCurrent
                          ? "bg-ink text-paper ring-4 ring-ink/10"
                          : "bg-paper border border-border text-slate-mute"
                      }`}
                    >
                      {isCompleted ? "✓" : i + 1}
                    </div>
                    <div className="flex-1 min-w-0 pb-1">
                      <p
                        className={`font-medium ${
                          isFuture ? "text-slate-mute" : "text-ink"
                        }`}
                      >
                        {stage.label}
                        {isCurrent && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-brand/10 text-brand-deep px-2 py-0.5 text-[10px] font-medium">
                            Current
                          </span>
                        )}
                      </p>
                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          isFuture ? "text-slate-mute" : "text-slate"
                        }`}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {isFinal && (
              <div className="mt-10 rounded-2xl border border-border bg-paper p-5 text-sm text-slate">
                Status final: <strong className="text-ink">{lead.status}</strong>. Untuk inquiry baru, request proposal lagi atau chat tim kami.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help bar */}
      <section className="bg-ink text-cream py-16">
        <div className="container-1280">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-paper leading-tight">
              Ada pertanyaan?
            </h2>
            <p className="mt-3 text-base text-cream/75 leading-relaxed">
              WhatsApp {CONTACT.phoneDisplay} dengan ref{" "}
              <strong className="font-mono">{lead.ref_code}</strong>, atau email{" "}
              <a
                href={`mailto:${CONTACT.email}?subject=Re: ${lead.ref_code}`}
                className="text-brand hover:text-cream underline"
              >
                {CONTACT.email}
              </a>
              . Avg response 6 jam working hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={buildWaLink(`proposal ${lead.ref_code}`, lead.ref_code)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 h-12 text-sm font-medium hover:opacity-90 transition"
              >
                <Whatsapp size={14} />
                WhatsApp
              </a>
              <Link
                href={SITE.url}
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 h-12 text-sm font-medium hover:bg-brand hover:text-paper transition"
              >
                Beranda
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
