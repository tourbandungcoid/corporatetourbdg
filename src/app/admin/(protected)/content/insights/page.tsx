import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "Insights" };

async function getInsights() {
  const sb = createAdminClient();
  const { data, error } = await sb
    .from("insights")
    .select("id, slug, title, category, status, publish_date, updated_at")
    .order("updated_at", { ascending: false });
  return { rows: data ?? [], error: error?.message };
}

const STATUS_STYLE: Record<string, string> = {
  published: "bg-success/10 text-success",
  draft: "bg-warm/10 text-warm",
  archived: "bg-slate-mute/20 text-slate",
};

export default async function AdminInsightsPage() {
  const { rows, error } = await getInsights();

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow-brand">Content</p>
            <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
              Insights <span className="text-slate-mute tabular">({rows.length})</span>
            </h1>
          </div>
          <Link
            href="/admin/content/insights/new"
            className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition"
          >
            + New insight
          </Link>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
            <p className="font-medium">DB error</p>
            <p className="mt-1">
              <code className="text-xs">{error}</code>
            </p>
            <p className="mt-2 text-xs">
              Table mungkin belum di-migrate. Cek <code>/api/admin/migrate</code> atau
              Supabase SQL Editor.
            </p>
          </div>
        )}

        {rows.length === 0 ? (
          <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
            Belum ada insights di DB. Migration auto-seed dari repo data — kalau
            kosong, cek migration <code className="text-xs">/api/admin/migrate</code> sudah jalan.
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-paper overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                  <th className="px-6 py-3 font-medium">Title</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Publish date</th>
                  <th className="px-4 py-3 font-medium text-right">Last update</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.id}
                    className="border-b border-divider/60 hover:bg-cream/40 transition"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/content/insights/${r.id}`}
                        className="font-medium text-ink hover:text-brand-deep"
                      >
                        {r.title}
                      </Link>
                      <p className="text-xs text-slate font-mono mt-0.5">{r.slug}</p>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate">{r.category}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                          STATUS_STYLE[r.status] ?? "bg-cream text-slate"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate tabular">
                      {new Date(r.publish_date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-4 text-xs text-slate text-right tabular">
                      {new Date(r.updated_at).toLocaleString("id-ID", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
