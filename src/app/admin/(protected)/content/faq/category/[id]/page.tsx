import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { FaqCategoryForm, type FaqCategoryFormInitial } from "@/components/admin/FaqCategoryForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit FAQ category" };

async function getCategory(id: string) {
  const sb = createAdminClient();
  const [catRes, qsRes] = await Promise.all([
    sb.from("faq_categories").select("*").eq("id", id).maybeSingle(),
    sb
      .from("faq_questions")
      .select("id, slug, question, is_featured, display_order, status, updated_at")
      .eq("category_id", id)
      .order("display_order", { ascending: true }),
  ]);
  if (catRes.error || !catRes.data) return null;
  return { cat: catRes.data, questions: qsRes.data ?? [] };
}

const STATUS_STYLE: Record<string, string> = {
  published: "bg-success/10 text-success",
  draft: "bg-warm/10 text-warm",
  archived: "bg-slate-mute/20 text-slate",
};

export default async function EditFaqCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getCategory(id);
  if (!result) notFound();

  const { cat, questions } = result;
  const initial: FaqCategoryFormInitial = {
    id: cat.id,
    slug: cat.slug,
    eyebrow: cat.eyebrow,
    title: cat.title,
    intro: cat.intro,
    metaDescription: cat.meta_description,
    displayOrder: cat.display_order,
    status: cat.status,
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/admin/content/faq" className="text-sm text-slate hover:text-ink">
            ← Back to FAQ
          </Link>
          <a
            href={`/faq/${cat.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-deep hover:underline"
          >
            View public page →
          </a>
        </div>

        <div className="mb-8">
          <p className="eyebrow-brand">{cat.eyebrow}</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink line-clamp-2">
            {cat.title}
          </h1>
        </div>

        {/* Questions in this category */}
        <section className="mb-10 rounded-2xl border border-border bg-paper overflow-hidden">
          <div className="px-5 py-4 border-b border-divider flex items-center justify-between">
            <h2 className="font-display text-sm uppercase tracking-wider text-slate-mute">
              Questions ({questions.length})
            </h2>
            <Link
              href={`/admin/content/faq/question/new?categoryId=${cat.id}`}
              className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-4 h-9 text-xs font-medium hover:bg-brand-deep transition"
            >
              + Add question
            </Link>
          </div>
          {questions.length === 0 ? (
            <p className="p-6 text-sm text-slate text-center">Belum ada pertanyaan.</p>
          ) : (
            <ul className="divide-y divide-divider/60">
              {questions.map((q) => (
                <li
                  key={q.id}
                  className="px-5 py-3 hover:bg-cream/40 transition"
                >
                  <Link
                    href={`/admin/content/faq/question/${q.id}`}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-ink line-clamp-2">
                        {q.question}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-mute">
                        <span className="font-mono">#{q.slug}</span>
                        {q.is_featured && (
                          <span className="inline-flex items-center rounded-full bg-brand/10 text-brand-deep px-1.5 py-0.5 text-[10px] font-medium">
                            ★ featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <span className="text-xs text-slate-mute tabular">#{q.display_order}</span>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          STATUS_STYLE[q.status] ?? "bg-cream text-slate"
                        }`}
                      >
                        {q.status}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Edit category form */}
        <h2 className="font-display text-xl text-ink mb-4">Edit category meta</h2>
        <FaqCategoryForm initial={initial} />
      </div>
    </main>
  );
}
