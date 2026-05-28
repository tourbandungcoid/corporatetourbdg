/**
 * Conversion tracking helper for Tier 5 CRO
 * Tracks form funnel metrics and conversion events
 * Compatible with GA4, GTM, Segment
 */

/**
 * Track form event in analytics
 */
export function trackFormEvent(
  eventName: string,
  data?: Record<string, any>
): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4 tracking
  if ((window as any).gtag) {
    (window as any).gtag("event", eventName, {
      event_category: "form",
      ...data,
    });
  }

  // GTM dataLayer
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      eventCategory: "form",
      ...data,
    });
  }

  // Console log for development
  if (process.env.NODE_ENV === "development") {
    console.log(`[CRO] ${eventName}`, data);
  }
}

/**
 * Track form step completion
 */
export function trackFormStepComplete(step: number, totalSteps: number): void {
  trackFormEvent("form_step_complete", {
    step,
    total_steps: totalSteps,
    progress_percent: Math.round((step / totalSteps) * 100),
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(
  formType: string,
  leadScore?: number
): void {
  trackFormEvent("form_submitted", {
    form_type: formType,
    lead_score: leadScore,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track form abandonment
 */
export function trackFormAbandonment(
  step: number,
  reason?: string
): void {
  trackFormEvent("form_abandoned", {
    abandoned_at_step: step,
    reason: reason || "unknown",
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track form field error (friction point)
 */
export function trackFormError(
  fieldName: string,
  errorMessage?: string
): void {
  trackFormEvent("form_field_error", {
    field: fieldName,
    error: errorMessage,
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(
  ctaType: string,
  ctaLabel: string,
  location?: string
): void {
  trackFormEvent("cta_clicked", {
    cta_type: ctaType,
    cta_label: ctaLabel,
    location: location || "unknown",
  });
}

/**
 * Conversion funnel helper
 * Estimates conversion probability based on form data
 */
export function estimateConversionProbability(data: {
  formStarted: boolean;
  step3Reached: boolean;
  hasWhatsapp: boolean;
  budgetTierSelected: boolean;
  companySize?: string;
}): number {
  let probability = 0.3; // Base 30% conversion rate

  if (data.formStarted) probability += 0.1;
  if (data.step3Reached) probability += 0.25; // Biggest jump at step 3
  if (data.hasWhatsapp) probability += 0.1;
  if (data.budgetTierSelected) probability += 0.15;
  if (data.companySize === "enterprise") probability += 0.05;

  return Math.min(probability, 1.0); // Cap at 100%
}

/**
 * Get conversion funnel stage
 */
export function getFunnelStage(
  pathname: string
): "awareness" | "consideration" | "decision" | "conversion" | "unknown" {
  if (pathname === "/" || pathname.includes("/blog") || pathname.includes("/insights")) {
    return "awareness";
  }
  if (pathname === "/methodology" || pathname === "/case-studies") {
    return "consideration";
  }
  if (pathname === "/pricing" || pathname === "/proposal") {
    return "decision";
  }
  if (pathname.includes("/thank-you") || pathname.includes("/track")) {
    return "conversion";
  }
  return "unknown";
}
