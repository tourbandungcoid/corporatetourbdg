/**
 * Global app settings — DB-first with static fallback to site.ts constants.
 *
 * Singleton row in public.app_settings. Editable from /admin/settings.
 * Cached per request (each RSC tree gets one fetch).
 */
import { cache } from "react";
import { createAdminClient } from "@/lib/supabase/admin";
import { CONTACT, REVIEWS, SOCIAL, STATS } from "@/lib/site";

export type AppSettings = {
  contact: {
    whatsapp: string;
    phone_display: string;
    email: string;
    office_hours: string;
    address_street: string;
    address_city: string;
    address_region: string;
    address_postal: string;
    address_country: string;
    address_full: string;
    maps_url: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    youtube: string;
    tiktok: string;
    facebook: string;
  };
  analytics: {
    ga4_id: string;
    meta_pixel_id: string;
    gtm_id: string;
    hotjar_id: string;
    clarity_id: string;
  };
  seo: {
    default_title: string;
    default_description: string;
  };
  reviews: {
    google_rating: number;
    google_review_count: number;
    google_maps_url: string;
  };
  stats: {
    events_delivered: string;
    years_operating: string;
    repeat_booking_rate: string;
    avg_response_time: string;
    companies_trusted: string;
    largest_event_pax: string;
    venue_partners: string;
    industries_served: string;
  };
};

const STATIC_FALLBACK: AppSettings = {
  contact: {
    whatsapp: CONTACT.whatsapp,
    phone_display: CONTACT.phoneDisplay,
    email: CONTACT.email,
    office_hours: CONTACT.officeHours,
    address_street: CONTACT.address.street,
    address_city: CONTACT.address.city,
    address_region: CONTACT.address.region,
    address_postal: CONTACT.address.postalCode,
    address_country: CONTACT.address.country,
    address_full: CONTACT.address.full,
    maps_url: REVIEWS.googleMapsUrl,
  },
  social: {
    linkedin: SOCIAL.linkedin,
    instagram: SOCIAL.instagram,
    youtube: SOCIAL.youtube,
    tiktok: "",
    facebook: "",
  },
  analytics: {
    ga4_id: "",
    meta_pixel_id: "",
    gtm_id: "",
    hotjar_id: "",
    clarity_id: "",
  },
  seo: {
    default_title:
      "TourBandung Corporate — Premium Corporate Outing & Team Building Bandung",
    default_description:
      "Vendor specialist corporate outing, team building, dan executive offsite di Bandung & Jawa Barat. 400+ events delivered sejak 2018.",
  },
  reviews: {
    google_rating: REVIEWS.googleRating,
    google_review_count: REVIEWS.googleReviewCount,
    google_maps_url: REVIEWS.googleMapsUrl,
  },
  stats: {
    events_delivered: STATS.eventsDelivered,
    years_operating: STATS.yearsOperating,
    repeat_booking_rate: STATS.repeatBookingRate,
    avg_response_time: STATS.avgResponseTime,
    companies_trusted: STATS.companiesTrusted,
    largest_event_pax: STATS.largestEventPax,
    venue_partners: STATS.venuePartners,
    industries_served: STATS.industriesServed,
  },
};

function merge<T extends object>(fallback: T, override: unknown): T {
  if (!override || typeof override !== "object") return fallback;
  return { ...fallback, ...(override as Record<string, unknown>) } as T;
}

/**
 * Returns the singleton settings row, merged with static fallback so
 * any missing key returns the repo default. Cached per render.
 */
export const getAppSettings = cache(async (): Promise<AppSettings> => {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("app_settings")
      .select("contact, social, analytics, seo, reviews, stats")
      .eq("id", 1)
      .maybeSingle();
    if (error || !data) return STATIC_FALLBACK;
    return {
      contact: merge(STATIC_FALLBACK.contact, data.contact),
      social: merge(STATIC_FALLBACK.social, data.social),
      analytics: merge(STATIC_FALLBACK.analytics, data.analytics),
      seo: merge(STATIC_FALLBACK.seo, data.seo),
      reviews: merge(STATIC_FALLBACK.reviews, data.reviews),
      stats: merge(STATIC_FALLBACK.stats, data.stats),
    };
  } catch {
    return STATIC_FALLBACK;
  }
});
