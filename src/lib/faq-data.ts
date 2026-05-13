/**
 * FAQ data accessor — DB-first with static repo fallback.
 * See insights-data.ts for the rationale.
 */
import { createAdminClient } from "@/lib/supabase/admin";
import {
  type FaqQ,
  type FaqCategory,
  getFaqCategoriesListStatic,
  getFaqCategoryStatic,
  getAllFaqCategorySlugsStatic,
} from "@/lib/faq-data-static";

export type { FaqQ, FaqCategory };

type CatRow = {
  id: string;
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  meta_description: string;
  display_order: number;
};

type QRow = {
  id: string;
  category_id: string;
  slug: string;
  question: string;
  answer: string;
  detail: string | null;
  is_featured: boolean;
  display_order: number;
};

async function fetchCategories(): Promise<FaqCategory[] | null> {
  try {
    const sb = createAdminClient();
    const { data: cats, error: catErr } = await sb
      .from("faq_categories")
      .select("id, slug, eyebrow, title, intro, meta_description, display_order")
      .eq("status", "published")
      .order("display_order", { ascending: true });

    if (catErr || !cats || cats.length === 0) return null;

    const { data: qs, error: qErr } = await sb
      .from("faq_questions")
      .select(
        "id, category_id, slug, question, answer, detail, is_featured, display_order"
      )
      .eq("status", "published")
      .order("display_order", { ascending: true });

    if (qErr) return null;

    const byCategory = new Map<string, FaqQ[]>();
    (qs ?? []).forEach((row: QRow) => {
      const arr = byCategory.get(row.category_id) ?? [];
      arr.push({
        question: row.question,
        answer: row.answer,
        ...(row.detail ? { detail: row.detail } : {}),
      });
      byCategory.set(row.category_id, arr);
    });

    return cats.map((c: CatRow) => ({
      slug: c.slug,
      eyebrow: c.eyebrow,
      title: c.title,
      intro: c.intro,
      metaDescription: c.meta_description,
      questions: byCategory.get(c.id) ?? [],
    }));
  } catch {
    return null;
  }
}

export async function getFaqCategoriesList(): Promise<FaqCategory[]> {
  const fromDb = await fetchCategories();
  if (fromDb) return fromDb;
  return getFaqCategoriesListStatic();
}

export async function getFaqCategory(slug: string): Promise<FaqCategory | undefined> {
  const fromDb = await fetchCategories();
  if (fromDb) return fromDb.find((c) => c.slug === slug);
  return getFaqCategoryStatic(slug);
}

export async function getAllFaqCategorySlugs(): Promise<string[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("faq_categories")
      .select("slug")
      .eq("status", "published");
    if (error || !data || data.length === 0) return getAllFaqCategorySlugsStatic();
    return data.map((d: { slug: string }) => d.slug);
  } catch {
    return getAllFaqCategorySlugsStatic();
  }
}
