/**
 * Conversion Rate Optimization (CRO) constants and helpers
 * Tier 5: Conversion Optimization — A/B test variants, copy improvements, trust signals
 */

export const CRO_COPY = {
  // Form trust signals
  trustSignals: {
    securityBadge: "🔒 Aman & privacy guaranteed. No spam.",
    responseTime: "⚡ Rata-rata respond dalam 6 jam.",
    noPressure: "Libur tanpa pressure. Free consultation atau direct proposal.",
    confidentiality: "NDA-ready. Informasi Anda aman dengan kami.",
  },

  // Form helper text variants
  formHelpers: {
    paxEstimation: "Tepat atau range OK. Bisa adjust nanti.",
    workEmail: "Gunakan email perusahaan untuk respon lebih cepat.",
    whatsapp: "Optional, tapi recommended untuk komunikasi real-time.",
    additionalNotes: "Semakin detail, semakin tepat proposal kami.",
  },

  // CTA button variants (A/B test)
  ctaVariants: {
    submitFull: "Kirim & Dapat Proposal",
    submitQuick: "Kirim Estimasi",
    submitConsult: "Jadwalkan Konsultasi Gratis",
    submitMore: "Lanjut ke Proposal Lengkap",
  },

  // Form step helpers
  formStepContext: {
    step1: "Tentang tim & event Anda",
    step2: "Detail event & preferensi",
    step3: "Timeline, kontak & catatan khusus",
  },

  // Confidence builders
  confidence: {
    step1: "Step 1 dari 3 — 5 menit setup dasar",
    step2: "Step 2 dari 3 — Detail event & preferensi",
    step3: "Step 3 dari 3 — Timeline & kontak — almost there!",
    completion: {
      25: "25% complete — mulai dari company basics",
      50: "50% complete — detail event kami udah clear",
      75: "75% complete — tinggal timeline & kontak",
      100: "100% complete — proposal coming soon!",
    },
  },

  // Social proof for forms
  socialProof: {
    recent: "30+ proposal requests bulan lalu dari perusahaan Anda",
    verified: "Verified oleh 105+ customers di Google Reviews",
    repeatRate: "92% comeback untuk event berikutnya",
    industry: "Trusted oleh tech unicorn, BUMN, startup, dan manufacturing firms",
  },

  // Micro-conversion messaging
  microConversions: {
    formStart: "Bagus! Mulai dari info perusahaan Anda.",
    fieldFilled: "✓ Noted! Lanjut ke field berikutnya.",
    allFieldsComplete: "Sempurna! Semua info terisi. Siap kirim?",
    submitting: "Sedang kirim... 3 detik lagi...",
    submitSuccess: "Terima kasih! Proposal dalam 24 jam.",
  },

  // Alternative conversions (non-form)
  alternatives: {
    whatsappCTA: "Prefer WhatsApp? Chat kami langsung →",
    callCTA: "Prefer call? Jadwalkan 15 menit konsultasi →",
    emailCTA: "Punya pertanyaan? Email kami →",
  },
};

export const CRO_METRICS = {
  // Form field exit points (track abandonment)
  trackingPoints: {
    formStart: "form_started",
    step1Complete: "form_step1_complete",
    step2Complete: "form_step2_complete",
    step3Complete: "form_step3_complete",
    formSubmit: "form_submitted",
    formAbandoned: "form_abandoned",
  },

  // Conversion funnel stages
  funnelStages: [
    { stage: "awareness", page: "/", label: "Homepage" },
    { stage: "consideration", page: "/methodology", label: "Learn Frameworks" },
    { stage: "decision", page: "/case-studies", label: "View Case Studies" },
    { stage: "proposal", page: "/proposal/request", label: "Request Proposal" },
    { stage: "conversion", page: "/proposal/thank-you", label: "Thank You" },
  ],

  // Bounce rate risk zones
  riskZones: [
    { field: "budget_tier", label: "Budget Selection (high bounce)" },
    { field: "pax_estimated", label: "Group Size (uncertainty)" },
    { field: "additional_notes", label: "Optional Textarea (effort required)" },
  ],
};

/**
 * A/B test variant manager
 * Usage: getVariant('submitButtonText', userId) returns either variant A or B
 */
export function getVariant(testName: string, userId: string): string {
  const hash = userId
    .split("")
    .reduce((h, c) => ((h << 5) - h) + c.charCodeAt(0), 0);
  const variantA = testName.includes("submit") ? "Kirim & Dapat Proposal" : "Default";
  const variantB = testName.includes("submit") ? "Lanjut ke Proposal" : "Alternative";
  return Math.abs(hash) % 2 === 0 ? variantA : variantB;
}

/**
 * Form field confidence scoring
 * Higher score = more likely to convert
 */
export function scoreFormFill(data: Record<string, any>): number {
  let score = 0;
  const maxScore = 100;

  if (data.company_name?.length > 2) score += 10;
  if (data.industry) score += 10;
  if (data.company_size) score += 5;
  if (data.job_role) score += 5;
  if (data.event_types?.length > 0) score += 10;
  if (data.pax_estimated && data.pax_estimated > 0) score += 10;
  if (data.budget_tier) score += 15;
  if (data.full_name?.length > 3) score += 10;
  if (data.work_email?.includes("@")) score += 10;
  if (data.whatsapp?.length > 5) score += 5;

  return Math.min(score, maxScore);
}

/**
 * Recommend next step based on form completion
 */
export function getNextStep(
  currentStep: number,
  missingFields: string[]
): "continue" | "review" | "submit" {
  if (currentStep < 3) return "continue";
  if (missingFields.length > 2) return "review";
  return "submit";
}
