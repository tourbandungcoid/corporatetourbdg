import Link from "next/link";
import { TestimonialForm, type TestimonialFormInitial } from "@/components/admin/TestimonialForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "New testimonial" };

const EMPTY: TestimonialFormInitial = {
  slug: "",
  clientName: "",
  company: "",
  role: "",
  quote: "",
  eventType: "",
  industry: "",
  rating: 5,
  photoUrl: "",
  isFeatured: false,
  displayOrder: 100,
  caseStudySlug: "",
  status: "published",
};

export default function NewTestimonialPage() {
  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6">
          <Link href="/admin/content/testimonials" className="text-sm text-slate hover:text-ink">
            ← Back to list
          </Link>
        </div>
        <div className="mb-8">
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            New testimonial
          </h1>
        </div>
        <TestimonialForm initial={EMPTY} />
      </div>
    </main>
  );
}
