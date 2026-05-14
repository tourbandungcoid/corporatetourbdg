import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "Videos" };

async function getVideos() {
  const sb = createAdminClient();
  const { data, error } = await sb
    .from("youtube_videos")
    .select(
      "id, youtube_url, youtube_id, title, is_active, display_order, updated_at"
    )
    .order("display_order", { ascending: true });
  return { rows: data ?? [], error: error?.message };
}

export default async function AdminVideosPage() {
  const { rows, error } = await getVideos();

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow-brand">Content</p>
            <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
              Videos{" "}
              <span className="text-slate-mute tabular">({rows.length})</span>
            </h1>
            <p className="mt-2 text-sm text-slate">
              YouTube videos yang muncul di section &ldquo;Dari channel
              kami&rdquo; pada homepage (di bawah What We Do).
            </p>
          </div>
          <Link
            href="/admin/content/videos/new"
            className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition"
          >
            + Add video
          </Link>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
            DB error: <code className="text-xs">{error}</code>
          </div>
        )}

        {rows.length === 0 ? (
          <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
            Belum ada video. Klik <strong>+ Add video</strong> untuk
            menambahkan link YouTube pertama.
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-paper overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                  <th className="px-6 py-3 font-medium">Thumbnail</th>
                  <th className="px-4 py-3 font-medium">Title / URL</th>
                  <th className="px-4 py-3 font-medium">Active</th>
                  <th className="px-4 py-3 font-medium tabular text-right">
                    Order
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((v) => (
                  <tr
                    key={v.id}
                    className="border-b border-divider/60 hover:bg-cream/40 transition"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/content/videos/${v.id}`}
                        className="block w-28 aspect-video rounded-md overflow-hidden bg-ink/10 border border-divider"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://i.ytimg.com/vi/${v.youtube_id}/hqdefault.jpg`}
                          alt={v.title ?? "YouTube video thumbnail"}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </Link>
                    </td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/admin/content/videos/${v.id}`}
                        className="font-medium text-ink hover:text-brand-deep block"
                      >
                        {v.title || `Video ${v.youtube_id}`}
                      </Link>
                      <a
                        href={v.youtube_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-xs text-slate-mute hover:text-brand-deep break-all"
                      >
                        {v.youtube_url}
                      </a>
                    </td>
                    <td className="px-4 py-4">
                      {v.is_active ? (
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
                      {v.display_order}
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
