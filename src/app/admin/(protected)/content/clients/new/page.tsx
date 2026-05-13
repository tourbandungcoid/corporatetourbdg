import Link from "next/link";
import {
  ClientLogoForm,
  type ClientLogoFormInitial,
} from "@/components/admin/ClientLogoForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "New client logo" };

const EMPTY: ClientLogoFormInitial = {
  name: "",
  websiteUrl: "",
  logoUrl: "",
  isActive: true,
  displayOrder: 100,
};

export default function NewClientLogoPage() {
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
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            Upload client logo
          </h1>
        </div>
        <ClientLogoForm initial={EMPTY} />
      </div>
    </main>
  );
}
