/**
 * TeamFrameworkMapping — Shows which frameworks each team member specializes in.
 * Strengthens E-E-A-T by connecting specific experts to specific methodologies.
 */

import Link from "next/link";
import { TEAM } from "@/lib/team-data";
import { FRAMEWORKS } from "@/lib/frameworks-data";

export function TeamFrameworkMapping() {
  // Map team members to frameworks based on their specialties
  const frameworkTeamMap: Record<string, typeof TEAM[number][]> = {
    fivePillarDesign: TEAM.filter((m) =>
      m.specialties.some((s) => s.includes("Pillar") || s.includes("discovery") || s.includes("Strategic"))
    ),
    bandungTierSystem: TEAM.filter((m) =>
      m.specialties.some((s) => s.includes("pricing") || s.includes("budget") || s.includes("tier"))
    ),
    outboundRiskTier: TEAM.filter((m) =>
      m.specialties.some((s) => s.includes("safety") || s.includes("risk") || s.includes("adventure"))
    ),
    threePhaseBriefing: TEAM.filter((m) =>
      m.specialties.some((s) => s.includes("brief") || s.includes("discovery") || s.includes("Design"))
    ),
    annualGatheringRoiModel: TEAM.filter((m) =>
      m.specialties.some((s) => s.includes("ROI") || s.includes("measurement") || s.includes("outcome"))
    ),
    villageVillaArchitecture: TEAM.filter((m) =>
      m.specialties.some((s) => s.includes("villa") || s.includes("coordination") || s.includes("logistics"))
    ),
  };

  return (
    <section className="py-16 md:py-20 border-b border-divider">
      <div className="container-1280">
        <div className="max-w-4xl">
          <span className="eyebrow-brand">Framework to Expert Mapping</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-4 mb-12">
            Which team member owns each framework.
          </h2>

          <div className="space-y-8">
            {Object.entries(frameworkTeamMap).map(([key, teamMembers]) => {
              const framework =
                FRAMEWORKS[key as keyof typeof FRAMEWORKS];
              if (!framework || teamMembers.length === 0) return null;

              return (
                <div
                  key={framework.shortName}
                  className="rounded-2xl border border-divider p-6 md:p-8 bg-bone"
                >
                  <div className="mb-6">
                    <h3 className="font-display text-xl text-ink mb-2">
                      {framework.shortName}
                    </h3>
                    <p className="text-sm text-slate">{framework.description}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-wider text-slate-mute">
                      Owned by
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {teamMembers.map((member) => (
                        <Link
                          key={member.slug}
                          href={`/team#${member.slug}`}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-paper border border-divider hover:border-brand-deep transition"
                        >
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-paper text-xs font-bold">
                            {member.initials}
                          </span>
                          <span className="text-sm font-medium text-ink">
                            {member.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-sm text-slate mt-12 pt-8 border-t border-divider">
            <Link
              href="/methodology"
              className="text-brand hover:text-brand-deep font-medium"
            >
              Learn about all 6 frameworks →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
