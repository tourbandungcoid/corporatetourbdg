import Link from "next/link";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { FaqQuestionForm, type FaqQuestionFormInitial, type CategoryOption } from "@/components/admin/FaqQuestionForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "New FAQ question" };

async function getCategories(): Promise<CategoryOption[]> {
  const sb = createAdminClient();
  const { data } = await sb
    .from("faq_categories")
    .select("id, slug, title")
    .order("display_order", { ascending: true });
  return data ?? [];
}

export default async function NewFaqQuestionPage({
  searchParams,
}: {
  searchParams: Promise<{ categoryId?: string }>;
}) {
  const { categoryId } = await searchParams;
  const categories = await getCategories();
  if (categories.length === 0) {
    redirect("/admin/content/faq/category/new");
  }

  const initial: FaqQuestionFormInitial = {
    categoryId: categoryId ?? categories[0].id,
    slug: "",
    question: "",
    answer: "",
    detail: "",
    tags: [],
    isFeatured: false,
    displayOrder: 100,
    status: "published",
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6">
          <Link href="/admin/content/faq" className="text-sm text-slate hover:text-ink">
            ← Back to FAQ
          </Link>
        </div>
        <div className="mb-8">
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            New FAQ question
          </h1>
        </div>
        <FaqQuestionForm initial={initial} categories={categories} />
      </div>
    </main>
  );
}
