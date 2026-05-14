import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "Client logos" };

async function getLogos() {
  const sb = createAdminClient();
  const { data, error } = await sb
    .from("client_logos")
    .select("id, name, logo_url, website_url, is_active, display_order, updated_at")
    .order("display_order", { ascending: true });
  return { rows: data ?? [], error: error?.message };
}

export default async function AdminClientLogosPage() {
  const { rows, error } = await getLogos();

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow-brand">Content</p>
            <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
              Client logos{" "}
              <span className="text-slate-mute tabular">({rows.length})</span>
            </h1>
            <p className="mt-2 text-sm text-slate">
              Logo client yang muncul di TrustBar marquee pada homepage.
              Format yang disarankan: PNG / SVG transparent, max 2 MB.
            </p>
          </div>
          <Link
            href="/admin/content/clients/new"
            className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition"
          >
            + Upload logo
          </Link>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
            DB error: <code className="text-xs">{error}</code>
          </div>
        )}

        {rows.length === 0 ? (
          <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
            Belum ada logo. Klik <strong>+ Upload logo</strong> untuk
            menambahkan client pertama.
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-paper overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                  <th className="px-6 py-3 font-medium">Logo</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Website</th>
                  <th className="px-4 py-3 font-medium">Active</th>
                  <th className="px-4 py-3 font-medium tabular text-right">
                    Order
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-divider/60 hover:bg-cream/40 transition"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/content/clients/${c.id}`}
                        className="block w-24 h-12 rounded-md overflow-hidden bg-cream border border-divider flex items-center justify-center"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.logo_url}
                          alt={c.name}
                          className="max-h-full max-w-full object-contain p-1.5"
                          loading="lazy"
                        />
                      </Link>
                    </td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/admin/content/clients/${c.id}`}
                        className="font-medium text-ink hover:text-brand-deep"
                      >
                        {c.name}
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-mute break-all">
                      {c.website_url ? (
                        <a
                          href={c.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-deep"
                        >
                          {c.website_url}
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-4 py-4">
                      {c.is_active ? (
                        <span className="inline-flex items-center rounded-full bg-success/10 text-success px-2 py-0.5 text-[11px] font-medium">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-cream text-slate-mute px-2 py-0.5 text-[11px] font-medium">
                          Hidden
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right tabular text-xs text-slate">
                      {c.display_order}
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
