/**
 * FrameworkReference — Reusable component for linking content to frameworks.
 * Appears at end of articles, insights, case studies to drive internal linking.
 * Improves AEO by connecting content to framework authorities.
 */

import Link from "next/link";
import { FRAMEWORKS } from "@/lib/frameworks-data";

export type FrameworkKey = keyof typeof FRAMEWORKS;

interface FrameworkReferenceProps {
  frameworks: FrameworkKey[];
  context?: "article" | "case-study" | "insight" | "service";
}

export function FrameworkReference({ frameworks, context = "article" }: FrameworkReferenceProps) {
  const refs = frameworks
    .map((key) => FRAMEWORKS[key as FrameworkKey])
    .filter(Boolean);

  if (refs.length === 0) return null;

  const contextText = {
    article: "This article references",
    "case-study": "This case study demonstrates",
    insight: "This insight explores",
    service: "This service uses",
  };

  return (
    <aside className="my-12 p-6 md:p-8 rounded-2xl bg-bone border border-divider">
      <p className="text-sm font-display uppercase tracking-wider text-slate-mute mb-4">
        Frameworks Referenced
      </p>
      <p className="text-base text-slate mb-6">
        {contextText[context]}{" "}
        <span className="text-ink font-medium">
          {refs.map((f) => f.shortName).join(", ")}
        </span>
        . Learn more about our complete methodology.
      </p>
      <div className="flex flex-wrap gap-3">
        {refs.map((framework) => (
          <Link
            key={framework.shortName}
            href={`/methodology#${framework.shortName.toLowerCase().replace(/[™\s]/g, "-")}`}
            className="text-sm px-4 py-2 rounded-full bg-paper border border-divider text-ink hover:border-brand-deep hover:text-brand-deep transition"
          >
            {framework.shortName} →
          </Link>
        ))}
        <Link
          href="/methodology"
          className="text-sm px-4 py-2 rounded-full bg-brand text-paper hover:bg-brand-deep transition font-medium"
        >
          View All 6 Frameworks
        </Link>
      </div>
    </aside>
  );
}
