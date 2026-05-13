import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { FaqQuestionForm, type FaqQuestionFormInitial, type CategoryOption } from "@/components/admin/FaqQuestionForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit FAQ question" };

async function getQuestion(id: string): Promise<{ row: Record<string, unknown>; categories: CategoryOption[] } | null> {
  const sb = createAdminClient();
  const [qRes, catsRes] = await Promise.all([
    sb.from("faq_questions").select("*").eq("id", id).maybeSingle(),
    sb
      .from("faq_categories")
      .select("id, slug, title")
      .order("display_order", { ascending: true }),
  ]);
  if (qRes.error || !qRes.data) return null;
  return { row: qRes.data as Record<string, unknown>, categories: catsRes.data ?? [] };
}

export default async function EditFaqQuestionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getQuestion(id);
  if (!result) notFound();
  const { row, categories } = result;

  // Get category slug for "view public" link
  const categorySlug = categories.find((c) => c.id === row.category_id)?.slug;

  const initial: FaqQuestionFormInitial = {
    id: row.id as string,
    categoryId: row.category_id as string,
    slug: row.slug as string,
    question: row.question as string,
    answer: row.answer as string,
    detail: (row.detail as string) ?? "",
    tags: Array.isArray(row.tags) ? (row.tags as string[]) : [],
    isFeatured: Boolean(row.is_featured),
    displayOrder: (row.display_order as number) ?? 0,
    status: row.status as "draft" | "published" | "archived",
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/admin/content/faq" className="text-sm text-slate hover:text-ink">
            ← Back to FAQ
          </Link>
          {categorySlug && (
            <a
              href={`/faq/${categorySlug}#${row.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-deep hover:underline"
            >
              View on public page →
            </a>
          )}
        </div>

        <div className="mb-8">
          <p className="eyebrow-brand">FAQ question</p>
          <h1 className="font-display mt-2 text-2xl md:text-3xl text-ink line-clamp-2">
            {row.question as string}
          </h1>
        </div>

        <FaqQuestionForm initial={initial} categories={categories} />
      </div>
    </main>
  );
}
