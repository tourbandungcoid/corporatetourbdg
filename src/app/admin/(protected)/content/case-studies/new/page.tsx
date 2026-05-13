import Link from "next/link";
import { CaseStudyForm, type CaseStudyFormInitial } from "@/components/admin/CaseStudyForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "New case study" };

const EMPTY: CaseStudyFormInitial = {
  slug: "",
  industry: "tech",
  industryLabel: "Tech",
  outcomeHeadline: "",
  shortDescription: "",
  metaDescription: "",
  heroImageUrl: "",
  heroImageAlt: "",
  pax: "",
  duration: "2D1N",
  location: "Lembang",
  budgetTier: "Elevated",
  serviceSlug: "company-gathering",
  status: "draft",
  challenge: [""],
  approach: [""],
  execution: [""],
  outcome: [""],
  metrics: [{ label: "", value: "" }],
  testimonial: { quote: "", name: "", role: "", company: "" },
  relatedServiceSlugs: [],
  gallery: [],
};

export default function NewCaseStudyPage() {
  return (
    <main className="p-6 md:p-10">
      <div className="max-w-4xl">
        <div className="mb-6">
          <Link
            href="/admin/content/case-studies"
            className="text-sm text-slate hover:text-ink"
          >
            ← Back to list
          </Link>
        </div>

        <div className="mb-8">
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            New case study
          </h1>
          <p className="mt-2 text-sm text-slate">
            Default status = draft. Set ke <strong>published</strong> kalau siap live.
          </p>
        </div>

        <CaseStudyForm initial={EMPTY} />
      </div>
    </main>
  );
}
