/**
 * Conversion Rate Optimization — Trust signals for proposal forms
 * Displays security, response time, and social proof badges
 */

type Position = "top" | "bottom" | "inline";

export function FormTrustSignals({ position = "bottom" }: { position?: Position }) {
  const signals = [
    { emoji: "🔒", text: "Info aman, no spam", color: "text-brand" },
    { emoji: "⚡", text: "Respond dalam 6 jam", color: "text-brand" },
    { emoji: "✓", text: "92% repeat customers", color: "text-brand" },
  ];

  const content = (
    <div className={`grid gap-3 ${position === "inline" ? "grid-cols-3 md:flex md:gap-5" : "grid-cols-3"}`}>
      {signals.map((signal) => (
        <div key={signal.text} className="flex items-center gap-1 text-xs md:text-sm text-slate">
          <span className="text-base">{signal.emoji}</span>
          <span className="hidden md:inline">{signal.text}</span>
        </div>
      ))}
    </div>
  );

  if (position === "top") {
    return (
      <div className="mb-8 pb-6 border-b border-divider/40">
        {content}
      </div>
    );
  }

  if (position === "inline") {
    return (
      <div className="my-6 p-4 rounded-2xl bg-brand-light/10 border border-brand/10">
        {content}
      </div>
    );
  }

  return (
    <div className="mt-8 pt-6 border-t border-divider/40">
      {content}
    </div>
  );
}

/**
 * Form confidence progress indicator
 */
export function FormConfidenceIndicator({ step, totalSteps = 3 }: { step: number; totalSteps?: number }) {
  const percentage = (step / totalSteps) * 100;
  const messages = [
    "Mulai dari basics... 📋",
    "Detail event jadi clear... 🎯",
    "Tinggal timeline & kontak... ✓",
  ];

  return (
    <div className="mb-6 space-y-2">
      <div className="flex items-center justify-between text-xs text-slate-mute">
        <span>{messages[step - 1]}</span>
        <span>{Math.round(percentage)}% complete</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-divider/60 overflow-hidden">
        <div
          className="h-full bg-brand transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Form step context badge
 */
export function FormStepBadge({ step }: { step: number }) {
  const labels = [
    "Step 1: Company & Tim",
    "Step 2: Event Details",
    "Step 3: Timeline & Kontak",
  ];
  return (
    <span className="inline-flex items-center rounded-full bg-brand-light/50 px-3 py-1 text-xs font-medium text-brand-deep">
      {labels[step - 1]}
    </span>
  );
}

/**
 * Social proof notification (rotating)
 */
export function FormSocialProof() {
  const proofs = [
    "30+ proposals kemarin untuk companies seperti yours",
    "4.9⭐ rating dari 105+ verified customers",
    "92% comeback rate — customers datang lagi untuk event berikutnya",
    "Trusted oleh 100+ companies — tech, BUMN, manufacturing, startups",
  ];

  // Simple rotation based on time
  const index = Math.floor(Date.now() / 5000) % proofs.length;

  return (
    <div className="p-3 rounded-lg bg-brand-light/5 border border-brand/10 text-xs text-slate-mute text-center">
      ✓ {proofs[index]}
    </div>
  );
}
