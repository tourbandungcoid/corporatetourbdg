import Link from "next/link";
import { FaqCategoryForm, type FaqCategoryFormInitial } from "@/components/admin/FaqCategoryForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "New FAQ category" };

const EMPTY: FaqCategoryFormInitial = {
  slug: "",
  eyebrow: "",
  title: "",
  intro: "",
  metaDescription: "",
  displayOrder: 100,
  status: "published",
};

export default function NewFaqCategoryPage() {
  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6">
          <Link href="/admin/content/faq" className="text-sm text-slate hover:text-ink">
            ← Back to FAQ
          </Link>
        </div>
        <div className="mb-8">
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            New FAQ category
          </h1>
        </div>
        <FaqCategoryForm initial={EMPTY} />
      </div>
    </main>
  );
}
