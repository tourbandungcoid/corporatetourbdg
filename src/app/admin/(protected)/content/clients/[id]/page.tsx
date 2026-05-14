import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  ClientLogoForm,
  type ClientLogoFormInitial,
} from "@/components/admin/ClientLogoForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit client logo" };

async function getLogo(id: string) {
  const sb = createAdminClient();
  const { data, error } = await sb
    .from("client_logos")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error || !data) return null;
  return data;
}

export default async function EditClientLogoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = await getLogo(id);
  if (!row) notFound();

  const initial: ClientLogoFormInitial = {
    id: row.id,
    name: row.name,
    websiteUrl: row.website_url ?? "",
    logoUrl: row.logo_url ?? "",
    isActive: Boolean(row.is_active),
    displayOrder: row.display_order ?? 0,
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6">
          <Link
            href="/admin/content/clients"
            className="text-sm text-slate hover:text-ink"
          >
            ← Back to list
          </Link>
        </div>
        <div className="mb-8">
          <p className="eyebrow-brand">Client logo</p>
          <h1 className="font-display mt-2 text-2xl md:text-3xl text-ink">
            {row.name}
          </h1>
        </div>
        <ClientLogoForm initial={initial} />
      </div>
    </main>
  );
}
