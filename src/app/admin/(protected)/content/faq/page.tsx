import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "FAQ" };

async function getCategoriesWithCounts() {
  const sb = createAdminClient();
  const [catsRes, countsRes] = await Promise.all([
    sb
      .from("faq_categories")
      .select("id, slug, eyebrow, title, display_order, status, updated_at")
      .order("display_order", { ascending: true }),
    sb.from("faq_questions").select("category_id, status"),
  ]);

  if (catsRes.error) return { rows: [], error: catsRes.error.message };

  const countsByCategory = new Map<string, { total: number; published: number }>();
  (countsRes.data ?? []).forEach((q) => {
    const cur = countsByCategory.get(q.category_id) ?? { total: 0, published: 0 };
    cur.total += 1;
    if (q.status === "published") cur.published += 1;
    countsByCategory.set(q.category_id, cur);
  });

  const rows = (catsRes.data ?? []).map((c) => ({
    ...c,
    questionTotal: countsByCategory.get(c.id)?.total ?? 0,
    questionPublished: countsByCategory.get(c.id)?.published ?? 0,
  }));

  return { rows };
}

const STATUS_STYLE: Record<string, string> = {
  published: "bg-success/10 text-success",
  draft: "bg-warm/10 text-warm",
  archived: "bg-slate-mute/20 text-slate",
};

export default async function AdminFaqPage() {
  const { rows, error } = await getCategoriesWithCounts();

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow-brand">Content</p>
            <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
              FAQ
            </h1>
            <p className="mt-2 text-sm text-slate">
              4 kategori → pertanyaan. Edit FAQ langsung dari sini — perubahan
              instant tanpa redeploy.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/admin/content/faq/question/new"
              className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition"
            >
              + New question
            </Link>
            <Link
              href="/admin/content/faq/category/new"
              className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-5 h-10 text-sm font-medium text-ink hover:bg-cream transition"
            >
              + New category
            </Link>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
            DB error: <code className="text-xs">{error}</code>
          </div>
        )}

        {rows.length === 0 ? (
          <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
            Belum ada kategori FAQ. Mulai dengan create category dulu.
          </div>
        ) : (
          <div className="space-y-3">
            {rows.map((c) => (
              <Link
                key={c.id}
                href={`/admin/content/faq/category/${c.id}`}
                className="block rounded-2xl border border-border bg-paper p-5 md:p-6 hover:border-ink-soft transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="eyebrow-brand text-xs">{c.eyebrow}</p>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          STATUS_STYLE[c.status] ?? "bg-cream text-slate"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <h2 className="font-display text-lg md:text-xl text-ink leading-tight">
                      {c.title}
                    </h2>
                    <p className="mt-1 text-xs text-slate font-mono">/faq/{c.slug}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="font-display text-3xl text-ink tabular leading-none">
                      {c.questionTotal}
                    </p>
                    <p className="text-[11px] text-slate-mute mt-1 tabular">
                      {c.questionPublished} published
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <p className="mt-6 text-xs text-slate-mute">
          Display order menentukan urutan tampil di public /faq.
        </p>
      </div>
    </main>
  );
}
