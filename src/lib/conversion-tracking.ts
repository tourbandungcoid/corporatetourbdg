/**
 * Conversion tracking — client-side event dispatch.
 *
 * One call fans out to every analytics provider configured in
 * /admin/settings/analytics:
 *   - GA4 (gtag)        when GA4 is loaded standalone
 *   - GTM (dataLayer)   when GTM is the container (no gtag on window)
 *   - Meta Pixel        standard events for whatsapp_click / generate_lead
 *   - Microsoft Clarity custom event (filter recordings by conversion)
 *
 * Event names follow GA4 conventions (snake_case, generate_lead is a
 * GA4 recommended event) — mark generate_lead + whatsapp_click as Key
 * Events in GA4 to count them as conversions.
 */

type Params = Record<string, string | number | boolean | undefined | null>;

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  fbq?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
};

/** Meta Pixel standard events — only conversion-grade events are mapped. */
const META_EVENTS: Record<string, string> = {
  whatsapp_click: "Contact",
  phone_click: "Contact",
  generate_lead: "Lead",
};

export function trackEvent(eventName: string, params: Params = {}): void {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  const payload: Params = { page_path: window.location.pathname, ...params };

  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, payload);
    } else {
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: eventName, ...payload });
    }

    const metaEvent = META_EVENTS[eventName];
    if (metaEvent && typeof w.fbq === "function") {
      w.fbq("track", metaEvent, { content_name: eventName, ...payload });
    }

    if (typeof w.clarity === "function") {
      w.clarity("event", eventName);
    }
  } catch {
    // Analytics must never break the page.
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[track] ${eventName}`, payload);
  }
}

/**
 * Track form event in analytics
 */
export function trackFormEvent(eventName: string, data?: Params): void {
  trackEvent(eventName, { event_category: "form", ...data });
}

/**
 * Track form step completion
 */
export function trackFormStepComplete(
  step: number,
  totalSteps: number,
  formType?: string
): void {
  trackFormEvent("form_step_complete", {
    form_type: formType,
    step,
    total_steps: totalSteps,
    progress_percent: Math.round((step / totalSteps) * 100),
  });
}

/**
 * Track successful lead capture — fire once, on the confirmation screen.
 */
export function trackLeadGenerated(formType: string, refCode?: string): void {
  trackEvent("generate_lead", {
    event_category: "form",
    form_type: formType,
    lead_ref: refCode,
  });
}

/**
 * Track form abandonment
 */
export function trackFormAbandonment(
  formType: string,
  step?: number,
  reason?: string,
  formPage?: string
): void {
  trackFormEvent("form_abandoned", {
    ...(formPage ? { page_path: formPage } : {}),
    form_type: formType,
    abandoned_at_step: step,
    reason: reason || "unknown",
  });
}

/**
 * Track form field error (friction point)
 */
export function trackFormError(
  fieldName: string,
  errorMessage?: string,
  formType?: string
): void {
  trackFormEvent("form_field_error", {
    form_type: formType,
    field: fieldName,
    error: errorMessage,
  });
}
