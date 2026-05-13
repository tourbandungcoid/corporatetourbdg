import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { TestimonialForm, type TestimonialFormInitial } from "@/components/admin/TestimonialForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit testimonial" };

async function getTestimonial(id: string) {
  const sb = createAdminClient();
  const { data, error } = await sb
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error || !data) return null;
  return data;
}

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = await getTestimonial(id);
  if (!row) notFound();

  const initial: TestimonialFormInitial = {
    id: row.id,
    slug: row.slug ?? "",
    clientName: row.client_name,
    company: row.company,
    role: row.role ?? "",
    quote: row.quote,
    eventType: row.event_type ?? "",
    industry: row.industry ?? "",
    rating: row.rating,
    photoUrl: row.photo_url ?? "",
    isFeatured: Boolean(row.is_featured),
    displayOrder: row.display_order ?? 0,
    caseStudySlug: row.case_study_slug ?? "",
    status: row.status,
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6">
          <Link href="/admin/content/testimonials" className="text-sm text-slate hover:text-ink">
            ← Back to list
          </Link>
        </div>
        <div className="mb-8">
          <p className="eyebrow-brand">Testimonial</p>
          <h1 className="font-display mt-2 text-2xl md:text-3xl text-ink">
            {row.client_name} · {row.company}
          </h1>
        </div>
        <TestimonialForm initial={initial} />
      </div>
    </main>
  );
}
