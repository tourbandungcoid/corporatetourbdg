/**
 * FrameworksUsed — Shows which of our 6 frameworks were applied to this case study.
 * Helps visitors understand framework-to-outcome mapping.
 */

import Link from "next/link";
import { FRAMEWORKS } from "@/lib/frameworks-data";

export type FrameworkKey = keyof typeof FRAMEWORKS;

interface FrameworksUsedProps {
  frameworkKeys: FrameworkKey[];
}

export function FrameworksUsed({ frameworkKeys }: FrameworksUsedProps) {
  const frameworks = frameworkKeys
    .map((key) => FRAMEWORKS[key as FrameworkKey])
    .filter(Boolean);

  if (frameworks.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-bone border-b border-divider">
      <div className="container-1280">
        <div className="max-w-3xl">
          <span className="eyebrow-brand">Frameworks Applied</span>
          <h2 className="font-display text-3xl text-ink mt-4 mb-8">
            Which methodologies powered this outcome.
          </h2>

          <div className="space-y-6">
            {frameworks.map((framework) => (
              <div
                key={framework.shortName}
                className="border border-divider rounded-lg p-6 bg-paper hover:border-brand-deep transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg text-ink mb-2">
                      {framework.shortName}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed mb-4">
                      {framework.description}
                    </p>
                    <ul className="space-y-2 text-sm text-slate">
                      {framework.pillars.slice(0, 2).map((pillar) => (
                        <li key={pillar} className="flex gap-2">
                          <span className="text-brand-deep flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{pillar.split(" — ")[0]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate mt-8 pt-8 border-t border-divider">
            <Link href="/methodology" className="text-brand hover:text-brand-deep font-medium">
              Learn about all 6 frameworks →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
