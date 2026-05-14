import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  YouTubeVideoForm,
  type YouTubeVideoFormInitial,
} from "@/components/admin/YouTubeVideoForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit video" };

async function getVideo(id: string) {
  const sb = createAdminClient();
  const { data, error } = await sb
    .from("youtube_videos")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error || !data) return null;
  return data;
}

export default async function EditVideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = await getVideo(id);
  if (!row) notFound();

  const initial: YouTubeVideoFormInitial = {
    id: row.id,
    youtubeUrl: row.youtube_url ?? "",
    title: row.title ?? "",
    description: row.description ?? "",
    isActive: Boolean(row.is_active),
    displayOrder: row.display_order ?? 0,
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6">
          <Link
            href="/admin/content/videos"
            className="text-sm text-slate hover:text-ink"
          >
            ← Back to list
          </Link>
        </div>
        <div className="mb-8">
          <p className="eyebrow-brand">Video</p>
          <h1 className="font-display mt-2 text-2xl md:text-3xl text-ink break-all">
            {row.title || `YouTube ${row.youtube_id}`}
          </h1>
        </div>
        <YouTubeVideoForm initial={initial} />
      </div>
    </main>
  );
}
