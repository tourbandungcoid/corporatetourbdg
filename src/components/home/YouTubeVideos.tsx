import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { youtubeWatchUrl } from "@/lib/utils/youtube";
import { Play } from "@/components/icons/Icons";
import { JsonLd } from "@/lib/schema";
import { SITE } from "@/lib/site";

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
  const videos = await getVideos();
  if (videos.length === 0) return null;

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}#video-list`,
    name: "Video Corporate Event dari TourBandung Corporate",
    description: "Konten YouTube dari 7Summits Travel — behind the scenes corporate outing, team building, dan executive offsite di Bandung & Jawa Barat.",
    url: `${SITE.url}#videos`,
    isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url },
    itemListElement: videos.slice(0, 3).map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        "@id": `https://www.youtube.com/watch?v=${v.youtube_id}`,
        name: v.title ?? `Corporate Event Video ${i + 1} — TourBandung`,
        description: v.title ?? "Corporate outing, team building & executive offsite video dari 7Summits Travel Bandung.",
        thumbnailUrl: `https://i.ytimg.com/vi/${v.youtube_id}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${v.youtube_id}`,
        contentUrl: v.youtube_url || youtubeWatchUrl(v.youtube_id),
        uploadDate: "2026-01-01",
        publisher: {
          "@type": "Organization",
          "@id": `${SITE.url}#organization`,
          name: "7Summits Travel",
          url: SITE.url,
          logo: { "@type": "ImageObject", url: `${SITE.url}/logo/logo.png` },
        },
        inLanguage: "id-ID",
      },
    })),
  };

  return (
    <>
      <JsonLd data={videoSchema} />
      <section className="section bg-paper" id="videos">
      <div className="container-1280">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow-brand">Konten terbaru</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl text-ink">
              Dari channel kami.
            </h2>
          </div>
          <Link
            href="https://www.youtube.com/@7summitstravel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-paper px-5 h-11 text-sm font-medium text-ink hover:border-ink-soft hover:bg-cream transition self-start md:self-auto"
          >
            <Play size={14} />
            @7summitstravel
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
              {/* Gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/95 text-ink shadow-[0_8px_24px_rgba(15,31,26,0.25)] transition-transform group-hover:scale-110">
                  <Play size={22} />
                </span>
              </div>
              {/* Title */}
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
    </>
  );
}
