"use client";

import { useEffect } from "react";
import { trackLeadGenerated } from "@/lib/conversion-tracking";

/**
 * Fires generate_lead once per lead ref on the thank-you page.
 * sessionStorage guard prevents double counting on refresh / back nav.
 */
export function LeadConversionEvent({
  refCode,
  formType,
}: {
  refCode: string;
  formType: string;
}) {
  useEffect(() => {
    const key = `tb_lead_tracked_${refCode}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      // sessionStorage blocked — still fire once for this mount
    }
    trackLeadGenerated(formType, refCode);
  }, [refCode, formType]);

  return null;
}
