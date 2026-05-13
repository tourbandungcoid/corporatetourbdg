/**
 * Testimonials data accessor — DB-first with static repo fallback.
 */
import { createAdminClient } from "@/lib/supabase/admin";

export type Testimonial = {
  id?: string;
  slug?: string | null;
  clientName: string;
  company: string;
  role: string | null;
  quote: string;
  eventType: string | null;
  industry: string | null;
  rating: number | null;
  photoUrl: string | null;
  isFeatured: boolean;
  displayOrder: number;
  caseStudySlug: string | null;
};

type Row = {
  id: string;
  slug: string | null;
  client_name: string;
  company: string;
  role: string | null;
  quote: string;
  event_type: string | null;
  industry: string | null;
  rating: number | null;
  photo_url: string | null;
  is_featured: boolean;
  display_order: number;
  case_study_slug: string | null;
};

function rowToTestimonial(r: Row): Testimonial {
  return {
    id: r.id,
    slug: r.slug,
    clientName: r.client_name,
    company: r.company,
    role: r.role,
    quote: r.quote,
    eventType: r.event_type,
    industry: r.industry,
    rating: r.rating,
    photoUrl: r.photo_url,
    isFeatured: r.is_featured,
    displayOrder: r.display_order,
    caseStudySlug: r.case_study_slug,
  };
}

// ---------------------------------------------------------------------
// Static fallback — used when DB unavailable / empty
// ---------------------------------------------------------------------
const FALLBACK: Testimonial[] = [
  {
    clientName: "Andini Pratama",
    company: "Tech Unicorn",
    role: "HR Manager",
    quote:
      "Yang gw appreciate: senior planner dedicated dari briefing sampai event. Bukan rotating freelancer. Komunikasi clean, accountability ada nama.",
    eventType: null,
    industry: "tech",
    rating: 5,
    photoUrl: null,
    isFeatured: true,
    displayOrder: 10,
    caseStudySlug: null,
  },
  {
    clientName: "Bagas Wicaksono",
    company: "BUMN Bank",
    role: "GA Manager",
    quote:
      "Proposal-nya detailed breakdown — finance team gw approval cepet karena gak ada hidden cost yang muncul belakangan.",
    eventType: null,
    industry: "banking",
    rating: 5,
    photoUrl: null,
    isFeatured: true,
    displayOrder: 20,
    caseStudySlug: null,
  },
  {
    clientName: "Citra Sari",
    company: "B2B SaaS Startup",
    role: "People Ops Lead",
    quote:
      "Custom 100%. Brief gw soal cross-team bonding pasca-merger, mereka kasih program yang bener-bener address itu — bukan template outing.",
    eventType: null,
    industry: "tech",
    rating: 5,
    photoUrl: null,
    isFeatured: true,
    displayOrder: 30,
    caseStudySlug: null,
  },
  {
    clientName: "Dewi Lestari",
    company: "Private Banking",
    role: "HR Director",
    quote:
      "Banking image-conscious — kami gak mau kelihatan murahan. Vendor ini deliver premium feel tanpa harus jualan ke C-level kami.",
    eventType: null,
    industry: "banking",
    rating: 5,
    photoUrl: null,
    isFeatured: true,
    displayOrder: 40,
    caseStudySlug: null,
  },
  {
    clientName: "Erlangga Wirawan",
    company: "Series B Startup",
    role: "Founder",
    quote:
      "Response time-nya nyata 6 jam. Kami pernah urgent request 3 minggu sebelum event — they handled it tanpa drama.",
    eventType: null,
    industry: "tech",
    rating: 5,
    photoUrl: null,
    isFeatured: true,
    displayOrder: 50,
    caseStudySlug: null,
  },
  {
    clientName: "Fitri Hapsari",
    company: "Manufacturing MNC",
    role: "HR Manager",
    quote:
      "Vendor outing sebelumnya gak sanggup 600 pax. Mereka deliver 800 pax 3-day program tanpa miss detail. Skala mereka real.",
    eventType: null,
    industry: "manufacturing",
    rating: 5,
    photoUrl: null,
    isFeatured: true,
    displayOrder: 60,
    caseStudySlug: null,
  },
];

const SELECT_COLS =
  "id, slug, client_name, company, role, quote, event_type, industry, rating, photo_url, is_featured, display_order, case_study_slug";

export async function getTestimonialsList(): Promise<Testimonial[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("testimonials")
      .select(SELECT_COLS)
      .eq("status", "published")
      .order("display_order", { ascending: true });
    if (error || !data || data.length === 0) return FALLBACK;
    return data.map((d) => rowToTestimonial(d as Row));
  } catch {
    return FALLBACK;
  }
}

export async function getFeaturedTestimonials(limit = 6): Promise<Testimonial[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("testimonials")
      .select(SELECT_COLS)
      .eq("status", "published")
      .eq("is_featured", true)
      .order("display_order", { ascending: true })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK.filter((t) => t.isFeatured).slice(0, limit);
    return data.map((d) => rowToTestimonial(d as Row));
  } catch {
    return FALLBACK.filter((t) => t.isFeatured).slice(0, limit);
  }
}

export async function getTestimonialsForCaseStudy(caseStudySlug: string): Promise<Testimonial[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("testimonials")
      .select(SELECT_COLS)
      .eq("status", "published")
      .eq("case_study_slug", caseStudySlug);
    if (error || !data) return [];
    return data.map((d) => rowToTestimonial(d as Row));
  } catch {
    return [];
  }
}
