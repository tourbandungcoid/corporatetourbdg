"use server";

import { z } from "zod";
import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

export type ClientLogoActionResult = {
  ok: boolean;
  message?: string;
  id?: string;
};

const BUCKET = "media-public";
const PATH_PREFIX = "client-logos";
const MAX_BYTES = 2 * 1024 * 1024; // 2 MB
const ALLOWED_MIME = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
  "image/gif",
];

function canEdit(role: string): boolean {
  return ["super_admin", "content_admin", "marketing_admin"].includes(role);
}

const schema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1).max(200),
  websiteUrl: z.string().url().optional().or(z.literal("")),
  isActive: z
    .union([
      z.literal("on"),
      z.literal("true"),
      z.literal("false"),
      z.null(),
      z.undefined(),
    ])
    .transform((v) => v === "on" || v === "true"),
  displayOrder: z.coerce.number().int(),
});

function safeFileSlug(filename: string): string {
  const dot = filename.lastIndexOf(".");
  const base = (dot > 0 ? filename.slice(0, dot) : filename)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const ext = dot > 0 ? filename.slice(dot).toLowerCase() : "";
  return `${base || "logo"}${ext}`;
}

async function uploadLogo(file: File): Promise<{
  ok: true;
  publicUrl: string;
  path: string;
} | { ok: false; message: string }> {
  if (!ALLOWED_MIME.includes(file.type)) {
    return {
      ok: false,
      message: `File type "${file.type}" tidak didukung. Pakai PNG / JPG / WebP / SVG / GIF.`,
    };
  }
  if (file.size > MAX_BYTES) {
    return {
      ok: false,
      message: `File terlalu besar (${Math.round(file.size / 1024)} KB). Max 2 MB.`,
    };
  }

  const sb = createAdminClient();
  const path = `${PATH_PREFIX}/${randomUUID()}-${safeFileSlug(file.name)}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error: uploadError } = await sb.storage.from(BUCKET).upload(path, buffer, {
    contentType: file.type,
    upsert: false,
  });

  if (uploadError) {
    return { ok: false, message: `Upload gagal: ${uploadError.message}` };
  }

  const { data: publicData } = sb.storage.from(BUCKET).getPublicUrl(path);
  return { ok: true, publicUrl: publicData.publicUrl, path };
}

async function deleteFromStorage(path: string | null | undefined): Promise<void> {
  if (!path) return;
  const sb = createAdminClient();
  await sb.storage.from(BUCKET).remove([path]);
}

export async function upsertClientLogo(
  formData: FormData
): Promise<ClientLogoActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const parsed = schema.safeParse({
    id: (formData.get("id") as string) || undefined,
    name: formData.get("name"),
    websiteUrl: (formData.get("websiteUrl") as string) || "",
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

  const file = formData.get("logoFile");
  const sb = createAdminClient();

  // Locate existing row (for edits)
  let existing: { logo_url: string; logo_path: string | null } | null = null;
  if (parsed.data.id) {
    const { data } = await sb
      .from("client_logos")
      .select("logo_url, logo_path")
      .eq("id", parsed.data.id)
      .maybeSingle();
    existing = (data as typeof existing) ?? null;
    if (!existing) return { ok: false, message: "Logo not found" };
  }

  // If a new file was provided, upload it
  let logoUrl: string | null = existing?.logo_url ?? null;
  let logoPath: string | null = existing?.logo_path ?? null;
  let oldPathToDelete: string | null = null;

  if (file instanceof File && file.size > 0) {
    const uploaded = await uploadLogo(file);
    if (!uploaded.ok) return { ok: false, message: uploaded.message };
    if (existing?.logo_path) oldPathToDelete = existing.logo_path;
    logoUrl = uploaded.publicUrl;
    logoPath = uploaded.path;
  }

  if (!logoUrl) {
    return {
      ok: false,
      message: "Pilih file logo terlebih dahulu (PNG/JPG/WebP/SVG, max 2 MB).",
    };
  }

  const row = {
    name: parsed.data.name,
    logo_url: logoUrl,
    logo_path: logoPath,
    website_url: parsed.data.websiteUrl || null,
    is_active: parsed.data.isActive,
    display_order: parsed.data.displayOrder,
    updated_by: profile.id,
  };

  let result;
  if (parsed.data.id) {
    result = await sb
      .from("client_logos")
      .update(row)
      .eq("id", parsed.data.id)
      .select("id")
      .single();
  } else {
    result = await sb
      .from("client_logos")
      .insert({ ...row, created_by: profile.id })
      .select("id")
      .single();
  }

  if (result.error) {
    // Clean up the just-uploaded file if the DB write failed
    if (logoPath && !existing) await deleteFromStorage(logoPath);
    return { ok: false, message: result.error.message };
  }

  if (oldPathToDelete) await deleteFromStorage(oldPathToDelete);

  revalidatePath("/");
  revalidatePath("/clients");
  revalidatePath("/admin/content/clients");

  return {
    ok: true,
    message: parsed.data.id ? "Updated" : "Created",
    id: result.data.id,
  };
}

export async function deleteClientLogo(
  formData: FormData
): Promise<ClientLogoActionResult> {
  const profile = await getCurrentProfile();
  if (!profile) return { ok: false, message: "Not authenticated" };
  if (!canEdit(profile.role)) return { ok: false, message: "Not authorized" };

  const id = formData.get("id");
  if (typeof id !== "string") return { ok: false, message: "Missing id" };

  const sb = createAdminClient();
  const { data: existing } = await sb
    .from("client_logos")
    .select("logo_path")
    .eq("id", id)
    .maybeSingle();

  const { error } = await sb.from("client_logos").delete().eq("id", id);
  if (error) return { ok: false, message: error.message };

  if (existing?.logo_path) await deleteFromStorage(existing.logo_path);

  revalidatePath("/");
  revalidatePath("/clients");
  revalidatePath("/admin/content/clients");
  return { ok: true, message: "Deleted" };
}
