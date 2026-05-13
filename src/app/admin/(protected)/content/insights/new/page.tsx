import Link from "next/link";
import { InsightForm, type InsightFormInitial } from "@/components/admin/InsightForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "New Insight" };

const today = new Date().toISOString().slice(0, 10);

const EMPTY: InsightFormInitial = {
  slug: "",
  title: "",
  excerpt: "",
  category: "Framework",
  metaDescription: "",
  heroImageUrl: "",
  heroImageAlt: "",
  publishDate: today,
  readTimeMin: 6,
  authorName: "Senior Planning Team",
  authorRole: "TourBandung Corporate",
  authorInitials: "TC",
  status: "draft",
  tldr: [],
  sections: [
    {
      paragraphs: [""],
    },
  ],
  relatedSlugs: [],
};

export default function NewInsightPage() {
  return (
    <main className="p-6 md:p-10">
      <div className="max-w-4xl">
        <div className="mb-6">
          <Link
            href="/admin/content/insights"
            className="text-sm text-slate hover:text-ink"
          >
            ← Back to list
          </Link>
        </div>

        <div className="mb-8">
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            New insight
          </h1>
          <p className="mt-2 text-sm text-slate">
            Default status = draft. Set ke <strong>published</strong> kalau siap
            live.
          </p>
        </div>

        <InsightForm initial={EMPTY} />
      </div>
    </main>
  );
}
