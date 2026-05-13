/**
 * Generate SQL seed for faq_categories + faq_questions.
 *
 * Usage:
 *   npx tsx scripts/generate-faq-seed.ts > /tmp/faq-seed.sql
 */
import { getFaqCategoriesListStatic } from "../src/lib/faq-data-static";
const getFaqCategoriesList = getFaqCategoriesListStatic;

function sqlString(s: string | null | undefined): string {
  if (s == null) return "NULL";
  return "'" + s.replace(/'/g, "''") + "'";
}

function slugifyQuestion(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "q";
}

console.log("-- Auto-generated FAQ seed. Do not edit manually.\n");

const cats = getFaqCategoriesList();
cats.forEach((cat, ci) => {
  console.log(`-- Category: ${cat.slug}`);
  console.log(`INSERT INTO public.faq_categories (
  slug, eyebrow, title, intro, meta_description, display_order, status
) VALUES (
  ${sqlString(cat.slug)},
  ${sqlString(cat.eyebrow)},
  ${sqlString(cat.title)},
  ${sqlString(cat.intro)},
  ${sqlString(cat.metaDescription)},
  ${ci * 10},
  'published'
)
ON CONFLICT (slug) DO NOTHING;`);
  console.log("");

  // questions
  const used = new Set<string>();
  cat.questions.forEach((q, qi) => {
    let slug = slugifyQuestion(q.question);
    let suffix = 2;
    while (used.has(slug)) {
      slug = slugifyQuestion(q.question) + "-" + suffix++;
    }
    used.add(slug);
    console.log(`INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, ${sqlString(slug)}, ${sqlString(q.question)}, ${sqlString(q.answer)}, ${sqlString(q.detail)}, ${qi * 10}, ${qi < 1}, 'published'
FROM public.faq_categories WHERE slug = ${sqlString(cat.slug)}
ON CONFLICT (category_id, slug) DO NOTHING;`);
    console.log("");
  });
});
