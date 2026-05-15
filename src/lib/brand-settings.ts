/**
 * Brand settings — DB-first singleton controlling visual tokens.
 *
 * Public site renders CSS variables inline in <head> based on this row.
 * Tailwind utilities (bg-brand, text-ink, etc.) consume these vars via
 * @theme inline configuration, so admin changes apply instantly without
 * rebuild.
 *
 * copy_overrides is a flat key→string map for editable text snippets
 * referenced by getCopy(key, fallback) at component level.
 */
import { cache } from "react";
import { createAdminClient } from "@/lib/supabase/admin";

export type BrandSettings = {
  color_ink: string;
  color_brand: string;
  color_brand_deep: string;
  color_brand_darker: string;
  color_brand_light: string;
  color_forest: string;
  color_warm: string;
  color_bone: string;
  color_cream: string;
  color_paper: string;
  font_sans: string;
  font_display: string;
  logo_primary_url: string | null;
  logo_dark_url: string | null;
  logo_favicon_url: string | null;
  logo_height_nav: number;
  logo_carousel_speed: number;
  logo_carousel_swipe: boolean;
  copy_overrides: Record<string, string>;
};

const FALLBACK: BrandSettings = {
  color_ink: "#0F1F1A",
  color_brand: "#6BA239",
  color_brand_deep: "#4E7E2A",
  color_brand_darker: "#2E5C3E",
  color_brand_light: "#E6EED7",
  color_forest: "#2E5C3E",
  color_warm: "#B8924C",
  color_bone: "#FAFAF7",
  color_cream: "#F1F2EA",
  color_paper: "#FFFFFF",
  font_sans: "Inter",
  font_display: "Inter",
  logo_primary_url: null,
  logo_dark_url: null,
  logo_favicon_url: null,
  logo_height_nav: 48,
  logo_carousel_speed: 35,
  logo_carousel_swipe: false,
  copy_overrides: {},
};

export const getBrandSettings = cache(async (): Promise<BrandSettings> => {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("brand_settings")
      .select("*")
      .eq("id", 1)
      .maybeSingle();
    if (error || !data) return FALLBACK;
    return {
      color_ink: data.color_ink ?? FALLBACK.color_ink,
      color_brand: data.color_brand ?? FALLBACK.color_brand,
      color_brand_deep: data.color_brand_deep ?? FALLBACK.color_brand_deep,
      color_brand_darker: data.color_brand_darker ?? FALLBACK.color_brand_darker,
      color_brand_light: data.color_brand_light ?? FALLBACK.color_brand_light,
      color_forest: data.color_forest ?? FALLBACK.color_forest,
      color_warm: data.color_warm ?? FALLBACK.color_warm,
      color_bone: data.color_bone ?? FALLBACK.color_bone,
      color_cream: data.color_cream ?? FALLBACK.color_cream,
      color_paper: data.color_paper ?? FALLBACK.color_paper,
      font_sans: data.font_sans ?? FALLBACK.font_sans,
      font_display: data.font_display ?? FALLBACK.font_display,
      logo_primary_url: data.logo_primary_url ?? null,
      logo_dark_url: data.logo_dark_url ?? null,
      logo_favicon_url: data.logo_favicon_url ?? null,
      logo_height_nav: typeof data.logo_height_nav === "number" ? data.logo_height_nav : 48,
      logo_carousel_speed: typeof data.logo_carousel_speed === "number" ? data.logo_carousel_speed : 35,
      logo_carousel_swipe: typeof data.logo_carousel_swipe === "boolean" ? data.logo_carousel_swipe : false,
      copy_overrides:
        (data.copy_overrides as Record<string, string> | null) ?? {},
    };
  } catch {
    return FALLBACK;
  }
});

/**
 * Build inline CSS override that re-defines design tokens for this render.
 * Place inside <head> after the static globals.css link.
 */
export function buildBrandCssVars(s: BrandSettings): string {
  return `:root{
    --color-ink:${s.color_ink};
    --color-brand:${s.color_brand};
    --color-brand-deep:${s.color_brand_deep};
    --color-brand-darker:${s.color_brand_darker};
    --color-brand-light:${s.color_brand_light};
    --color-forest:${s.color_forest};
    --color-warm:${s.color_warm};
    --color-bone:${s.color_bone};
    --color-cream:${s.color_cream};
    --color-paper:${s.color_paper};
  }`.replace(/\s+/g, "");
}

/**
 * Lookup a copy_overrides key, fall back to provided default text.
 * Safe for use in async server components only.
 */
export async function getCopy(key: string, fallback: string): Promise<string> {
  const s = await getBrandSettings();
  const value = s.copy_overrides[key];
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}
