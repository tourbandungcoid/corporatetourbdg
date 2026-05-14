import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { youtubeWatchUrl } from "@/lib/utils/youtube";
import { Play } from "@/components/icons/Icons";
import { getCopy } from "@/lib/brand-settings";

type VideoRow = {
  id: string;
  youtube_id: string;
  youtube_url: string;
  title: string | null;
};

async function getVideos(): Promise<VideoRow[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("youtube_videos")
      .select("id, youtube_id, youtube_url, title")
      .eq("is_active", true)
      .order("display_order", { ascending: true })
      .limit(6);
    if (error || !data) return [];
    return data;
  } catch {
    return [];
  }
}

export async function YouTubeVideos() {
  const [videos, eyebrow, headline, channelLabel] = await Promise.all([
    getVideos(),
    getCopy("home.youtube.eyebrow", "Konten terbaru"),
    getCopy("home.youtube.headline", "Dari channel kami."),
    getCopy("home.youtube.channel_label", "@7summitstravel"),
  ]);

  if (videos.length === 0) return null;

  return (
    <section className="section bg-paper" id="videos">
      <div className="container-1280">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow-brand">{eyebrow}</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl text-ink">
              {headline}
            </h2>
          </div>
          <Link
            href="https://www.youtube.com/@7summitstravel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:border-ink-soft hover:bg-cream transition self-start md:self-auto"
          >
            <Play size={14} />
            {channelLabel}
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.slice(0, 3).map((v) => (
            <a
              key={v.id}
              href={v.youtube_url || youtubeWatchUrl(v.youtube_id)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden bg-ink/5 aspect-video border border-divider transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,31,26,0.12)]"
              aria-label={v.title ? `Watch: ${v.title}` : "Watch on YouTube"}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${v.youtube_id}/hqdefault.jpg`}
                alt={v.title ?? "YouTube video thumbnail"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/95 text-ink shadow-[0_8px_24px_rgba(15,31,26,0.25)] transition-transform group-hover:scale-110">
                  <Play size={22} />
                </span>
              </div>
              {v.title && (
                <div className="absolute left-0 right-0 bottom-0 p-5">
                  <p className="text-paper font-medium text-sm leading-snug line-clamp-2">
                    {v.title}
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
