"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  ATTR_COOKIE,
  ATTR_MAX_AGE_DAYS,
  LAST_CONTENT_COOKIE,
  LAST_CONTENT_MAX_AGE_DAYS,
  isFunnelPath,
  isUntrackedPath,
  type FirstTouch,
} from "@/lib/attribution";
import { trackEvent, trackFormAbandonment } from "@/lib/conversion-tracking";

/**
 * Site-wide conversion tracking, mounted once in the root layout.
 *
 * 1. Attribution cookies (read by lead server actions):
 *    - tb_attr: last non-direct touch — refreshed whenever a visit arrives
 *      with UTM / click IDs or from an external referrer (same model as
 *      GA4's default), otherwise set once as "Direct".
 *    - tb_lc: last content page before entering the /proposal funnel.
 * 2. Click events via delegation (no per-link wiring needed):
 *    whatsapp_click, phone_click, email_click, cta_click (/proposal/*, /contact).
 *    Add data-cta-location="..." on a wrapper to label where a CTA sits.
 * 3. Form funnel: form_start on first input, form_abandoned when leaving
 *    without reaching /proposal/thank-you. Forms opt in with
 *    data-track-form="<type>" (all forms under /proposal are tracked).
 */

const WA_HOSTS = new Set(["wa.me", "api.whatsapp.com", "web.whatsapp.com"]);
const MAX = 300;
/** /proposal/<slug> → lead source name, so GA and the DB use the same labels. */
const PROPOSAL_FORM_TYPES: Record<string, string> = {
  request: "request_proposal",
  "quick-quote": "quick_quote",
  "book-consultation": "book_consultation",
  sample: "lead_magnet",
};

function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? m[1] : null;
}

function writeCookie(name: string, value: string, days: number) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${
    days * 86400
  }; SameSite=Lax${secure}`;
}

function currentTouch(): { touch: FirstTouch; isNonDirect: boolean } {
  const qs = new URLSearchParams(location.search);
  const get = (k: string) => qs.get(k)?.slice(0, MAX) || undefined;

  let ref: string | undefined;
  if (document.referrer) {
    try {
      const r = new URL(document.referrer);
      if (r.hostname !== location.hostname) ref = document.referrer.slice(0, MAX);
    } catch {
      // ignore malformed referrer
    }
  }

  const touch: FirstTouch = {
    lp: (location.pathname + location.search).slice(0, MAX),
    ref,
    us: get("utm_source"),
    um: get("utm_medium"),
    uc: get("utm_campaign"),
    ut: get("utm_term"),
    ux: get("utm_content"),
    gclid: get("gclid"),
    fbclid: get("fbclid"),
    ts: new Date().toISOString(),
  };
  const isNonDirect = !!(touch.ref || touch.us || touch.um || touch.uc || touch.gclid || touch.fbclid);
  return { touch, isNonDirect };
}

function formTypeOf(form: HTMLFormElement): string | null {
  if (form.dataset.trackForm) return form.dataset.trackForm;
  if (location.pathname.startsWith("/proposal/")) {
    const slug = location.pathname.split("/")[2] ?? "";
    return PROPOSAL_FORM_TYPES[slug] ?? slug.replace(/-/g, "_");
  }
  return null;
}

type FormInfo = { step?: number; page: string; abandon: boolean };

export function ConversionTracker() {
  const pathname = usePathname();
  const isFirstRun = useRef(true);
  const prevPath = useRef<string | null>(null);
  const startedForms = useRef<Map<string, FormInfo>>(new Map());

  // Attribution cookies + abandonment on client-side navigation
  useEffect(() => {
    if (!pathname) return;

    // A form started on the previous page and the visitor navigated away
    // without landing on the thank-you page → abandoned.
    if (prevPath.current && prevPath.current !== pathname) {
      const completed = pathname.startsWith("/proposal/thank-you");
      startedForms.current.forEach((info, type) => {
        if (!completed && info.abandon) {
          trackFormAbandonment(type, info.step, "navigated_away", info.page);
        }
      });
      startedForms.current.clear();
    }
    prevPath.current = pathname;

    if (isUntrackedPath(pathname)) return;

    try {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        const { touch, isNonDirect } = currentTouch();
        if (isNonDirect || !readCookie(ATTR_COOKIE)) {
          writeCookie(ATTR_COOKIE, JSON.stringify(touch), ATTR_MAX_AGE_DAYS);
        }
      }
      if (!isFunnelPath(pathname)) {
        writeCookie(LAST_CONTENT_COOKIE, pathname.slice(0, MAX), LAST_CONTENT_MAX_AGE_DAYS);
      }
    } catch {
      // cookies blocked — tracking degrades silently
    }
  }, [pathname]);

  // Click + form listeners (document-level delegation)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (isUntrackedPath(location.pathname)) return;
      const target = e.target as Element | null;
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;

      let url: URL;
      try {
        url = new URL(a.href, location.href);
      } catch {
        return;
      }

      const located = a.closest<HTMLElement>("[data-cta-location]");
      const landmark = a.closest("nav, header, footer, aside");
      const base = {
        link_text: (a.dataset.ctaLabel || a.textContent || a.getAttribute("aria-label") || "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 80),
        cta_location: located?.dataset.ctaLocation ?? landmark?.tagName.toLowerCase() ?? "content",
      };

      if (WA_HOSTS.has(url.hostname)) {
        trackEvent("whatsapp_click", { ...base, event_category: "contact" });
      } else if (url.protocol === "tel:") {
        trackEvent("phone_click", { ...base, event_category: "contact" });
      } else if (url.protocol === "mailto:") {
        trackEvent("email_click", { ...base, event_category: "contact" });
      } else if (
        url.origin === location.origin &&
        ((url.pathname.startsWith("/proposal/") &&
          !url.pathname.startsWith("/proposal/thank-you") &&
          !url.pathname.startsWith("/proposal/track")) ||
          url.pathname === "/contact")
      ) {
        trackEvent("cta_click", { ...base, event_category: "cta", cta_target: url.pathname });
      }
    }

    function onSubmit(e: SubmitEvent) {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      const type = formTypeOf(form);
      const info = type ? startedForms.current.get(type) : undefined;
      if (info) info.step = Number(form.dataset.step) || info.step;
      if (type) trackEvent("form_submit_attempt", { event_category: "form", form_type: type });
    }

    // First real input (typing / selecting — not autofocus) = form_start.
    // Later inputs keep the latest step so abandonment shows the drop-off.
    function onInput(e: Event) {
      if (isUntrackedPath(location.pathname)) return;
      const form = (e.target as HTMLElement | null)?.closest?.("form") as HTMLFormElement | null;
      if (!form) return;
      const type = formTypeOf(form);
      if (!type) return;
      const step = Number(form.dataset.step) || undefined;
      const info = startedForms.current.get(type);
      if (info) {
        if (step) info.step = step;
        return;
      }
      startedForms.current.set(type, {
        step,
        page: location.pathname,
        abandon: form.dataset.trackAbandon !== "false",
      });
      trackEvent("form_start", { event_category: "form", form_type: type });
    }

    function onPageHide() {
      startedForms.current.forEach((info, type) => {
        if (info.abandon) trackFormAbandonment(type, info.step, "page_closed", info.page);
      });
      startedForms.current.clear();
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("change", onInput, true);
    document.addEventListener("submit", onSubmit, true);
    document.addEventListener("input", onInput, true);
    window.addEventListener("pagehide", onPageHide);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("change", onInput, true);
      document.removeEventListener("submit", onSubmit, true);
      document.removeEventListener("input", onInput, true);
      window.removeEventListener("pagehide", onPageHide);
    };
  }, []);

  return null;
}
