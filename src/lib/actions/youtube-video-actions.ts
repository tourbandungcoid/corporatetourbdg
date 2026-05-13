"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";
import {
  extractYouTubeId,
  youtubeThumbnailUrl,
  youtubeWatchUrl,
} from "@/lib/utils/youtube";

export type YouTubeVideoActionResult = {
  ok: boolean;
  message?: string;
  id?: string;
};

function canEdit(role: string): boolean {
  return ["super_admin", "content_admin", "marketing_admin"].includes(role);
}

const schema = z.object({
  id: z.string().uuid().optional(),
  youtubeUrl: z.string().min(1, "YouTube URL diperlukan"),
  title: z.string().max(200).optional().or(z.literal("")),
  description: z.string().max(1000).optional().or(z.literal("")),
  isActive: z
    .union([z.literal("on"), z.literal("true"), z.literal("false"), z.null(), z.undefined()])
    .transform((v) => v === "on" || v === "true"),
  displayOrder: z.coerce.number().int(),
});

export async function upsertYouTubeVideo(
  formData: FormData
): Promise<YouTubeVideoActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const parsed = schema.safeParse({
    id: (formData.get("id") as string) || undefined,
    youtubeUrl: formData.get("youtubeUrl"),
    title: (formData.get("title") as string) || "",
    description: (formData.get("description") as string) || "",
    isActive: formData.get("isActive"),
    displayOrder: formData.get("displayOrder"),
  });
  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("; "),
    };
  }

  const ytId = extractYouTubeId(parsed.data.youtubeUrl);
  if (!ytId) {
    return {
      ok: false,
      message:
        "URL bukan format YouTube yang valid. Contoh: https://youtu.be/abc123XYZ_-",
    };
  }

  const sb = createAdminClient();
  const row = {
    youtube_url: youtubeWatchUrl(ytId),
    youtube_id: ytId,
    title: parsed.data.title || null,
    description: parsed.data.description || null,
    thumbnail_url: youtubeThumbnailUrl(ytId),
    is_active: parsed.data.isActive,
    display_order: parsed.data.displayOrder,
    updated_by: profile.id,
  };

  let result;
  if (parsed.data.id) {
    result = await sb
      .from("youtube_videos")
      .update(row)
      .eq("id", parsed.data.id)
      .select("id")
      .single();
  } else {
    result = await sb
      .from("youtube_videos")
      .insert({ ...row, created_by: profile.id })
      .select("id")
      .single();
  }

  if (result.error) return { ok: false, message: result.error.message };

  revalidatePath("/");
  revalidatePath("/admin/content/videos");

  return {
    ok: true,
    message: parsed.data.id ? "Updated" : "Created",
    id: result.data.id,
  };
}

export async function deleteYouTubeVideo(
  formData: FormData
): Promise<YouTubeVideoActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const id = formData.get("id");
  if (typeof id !== "string") return { ok: false, message: "Missing id" };

  const sb = createAdminClient();
  const { error } = await sb.from("youtube_videos").delete().eq("id", id);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/");
  revalidatePath("/admin/content/videos");
  return { ok: true, message: "Deleted" };
}
