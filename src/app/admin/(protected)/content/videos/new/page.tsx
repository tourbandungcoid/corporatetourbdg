import Link from "next/link";
import {
  YouTubeVideoForm,
  type YouTubeVideoFormInitial,
} from "@/components/admin/YouTubeVideoForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "New video" };

const EMPTY: YouTubeVideoFormInitial = {
  youtubeUrl: "",
  title: "",
  description: "",
  isActive: true,
  displayOrder: 100,
};

export default function NewVideoPage() {
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
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            New video
          </h1>
        </div>
        <YouTubeVideoForm initial={EMPTY} />
      </div>
    </main>
  );
}
