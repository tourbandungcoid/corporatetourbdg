/**
 * Email Nurture Sequence Templates for Lead Magnet → Proposal Conversion
 *
 * Sequence: Lead capture (checklist download) → Welcome → Day 3 → Day 7 → Day 14
 * Goal: Convert checklist downloaders to proposal requests
 * Timeline: 14 days
 * Target conversion: 20-30% of leads → proposal requests
 */

export type EmailTemplate = {
  id: string;
  name: string;
  subject: string;
  daysSinceCapture: number;
  description: string;
  htmlTemplate: string;
};

export const EMAIL_NURTURE_SEQUENCE: EmailTemplate[] = [
  {
    id: "welcome-day0",
    name: "Welcome + Framework Overview",
    subject: "Your Corporate Event Checklist + 6 Frameworks",
    daysSinceCapture: 0,
    description:
      "Welcome email. Deliver checklist PDF. Brief overview of 6 frameworks. Link to /methodology.",
    htmlTemplate: `
<h1>Hi [FIRST_NAME],</h1>

<p>Terima kasih download Corporate Event Planning Checklist dari kami! 🎉</p>

<p>Ini adalah tool yang kami gunakan internally untuk structure every event kami handle — dari discovery, vendor eval, budget planning, sampai post-event measurement.</p>

<h2>Next Step: Download Your Checklist</h2>
<p>[BUTTON: Download PDF Checklist]</p>

<h3>Pro Tip: Use the Checklist Across Phases</h3>
<p>Jangan coba fill semuanya sekaligus. Gunakan checklist across planning phases:</p>
<ul>
  <li><strong>Discovery phase</strong>: Bagian 1-2 (goals, audience, timeline)</li>
  <li><strong>Vendor eval phase</strong>: Bagian 3-5 (budget, vendor criteria, RFP)</li>
  <li><strong>Pre-event phase</strong>: Bagian 6-7 (risk, contingency, final walkthrough)</li>
  <li><strong>Post-event phase</strong>: Bagian 8 (measurement, feedback collection)</li>
</ul>

<h2>Our 6 Frameworks</h2>
<p>Behind every proposal kami, ada 6 frameworks yang guide design, execution, measurement:</p>
<ol>
  <li><strong>5-Pillar Design™</strong> — Strategic alignment + cohesion + measurement + ops + momentum</li>
  <li><strong>BOTS™</strong> — 4-tier transparent pricing (Foundation → Elevated → Signature → Bespoke)</li>
  <li><strong>Outbound Risk Tier™</strong> — Safety-first categorization for activities</li>
  <li><strong>3-Phase Briefing</strong> — Structured discovery for precision proposals</li>
  <li><strong>AG ROI Model</strong> — Finance-approved outcome quantification</li>
  <li><strong>Village Villa Architecture™</strong> — Multi-villa coordination at scale</li>
</ol>

<p>[LINK: Learn about all 6 frameworks →]</p>

<h2>What's Next?</h2>
<p>Kalau checklist helpful dan ready untuk actual proposal, kami siap brief. Schedule free 30-minute strategy consultation atau langsung request proposal:</p>
<p>[BUTTON: Book Free Consultation] [BUTTON: Request Proposal]</p>

<p>Kalau ada pertanyaan, langsung chat kami via WhatsApp — kami respond within 6 hours.</p>

<p>Happy planning,<br>
[SENDER_NAME]<br>
Senior Planner, TourBandung Corporate</p>

<p style="font-size: 12px; color: #666;">
  P.S. Checklist kami design berdasarkan 400+ corporate events delivered sejak 2018. Semua recommendations from real experience, bukan textbook theory.
</p>
    `,
  },

  {
    id: "casestudy-day3",
    name: "Case Study Showcase + ROI Example",
    subject: "Lihat bagaimana event kami transform team [COMPANY_SIZE]pax",
    daysSinceCapture: 3,
    description:
      "Day 3: Show real case study matching their event type. Emphasize measurement/ROI. Social proof.",
    htmlTemplate: `
<h1>Hi [FIRST_NAME],</h1>

<p>Quick follow-up setelah download checklist. Kami want share case study yang mungkin relevant untuk event lo.</p>

<h2>Case Study: [INDUSTRY] Company, [PAX]pax Gathering</h2>

<p><strong>Challenge:</strong> [Challenge summary]</p>
<p><strong>What kami do:</strong> Applied 5-Pillar Design framework...</p>
<p><strong>Outcome:</strong> [Metrics: eNPS lift, retention impact, etc.]</p>

<p>[LINK: Read full case study →]</p>

<h2>Why This Matters for Your Event</h2>

<p>Outcome-driven event design beda dengan generic outing:</p>

<table>
  <tr>
    <td><strong>Generic Outing</strong></td>
    <td><strong>Outcome-Focused (Kami)</strong></td>
  </tr>
  <tr>
    <td>Fun activity + bonding</td>
    <td>Fun activity tied to business goal</td>
  </tr>
  <tr>
    <td>Hope it goes well</td>
    <td>Measurement pre/post confirms impact</td>
  </tr>
  <tr>
    <td>Feedback "it was fun"</td>
    <td>Metrics: retention lift, collaboration ↑, eNPS +X pts</td>
  </tr>
</table>

<p>Checklist lo sudah cover methodology basics. Ready untuk deep-dive strategy call?</p>

<p>[BUTTON: Schedule 30-Min Consultation]</p>

<p>Cheers,<br>
[SENDER_NAME]</p>
    `,
  },

  {
    id: "roi-calculator-day7",
    name: "ROI Calculator + Financial Justification",
    subject: "Calculate ROI: How much will your event save in retention?",
    daysSinceCapture: 7,
    description:
      "Day 7: Interactive ROI calculator. Help them justify budget to management. Overcome objections.",
    htmlTemplate: `
<h1>Hi [FIRST_NAME],</h1>

<p>Quick question: Apakah lo sudah calculate ROI event lo ke management? 🤔</p>

<p>Terbanyak HR teams treat event sebagai 'cost' — tapi sebenernya, event adalah investment yang measurable.</p>

<h2>Try Our ROI Calculator</h2>

<p>Input 3 numbers, instant answer: berapa retention saving dari event lo?</p>

<p>[BUTTON: Open Interactive ROI Calculator]</p>

<h3>How It Works</h3>
<p>ROI Formula kami:</p>
<code>
  Retention Saving = (Attrition reduction % × Avg salary × Turnover cost multiplier)

  Example:
  - Team 100 orang
  - Attrition baseline 20% → drop ke 15% (5% improvement = 5 orang saved)
  - Salary Rp 8jt × 9bulan (recruiting/training) = Rp 72jt per person saved
  - 5 orang × Rp 72jt = Rp 360jt saving
  - Event cost Rp 250jt
  - ROI = 1.4x (paid for itself)
</code>

<h2>Most Companies See 1.6x–3.5x ROI</h2>

<p>Ini dari 400+ events kami handle. Typical breakdown:</p>
<ul>
  <li>Retention saving: 60-70% dari ROI</li>
  <li>Productivity lift: 20-30%</li>
  <li>Culture/morale impact: 10-15%</li>
</ul>

<p>Pakai calculator, discuss dengan CFO, ready untuk proposal.</p>

<p>[BUTTON: Try ROI Calculator]</p>

<p>Ready untuk brief after calculation?</p>

<p>[BUTTON: Schedule Consultation]</p>

<p>Cheers,<br>
[SENDER_NAME]</p>
    `,
  },

  {
    id: "social-proof-day14",
    name: "Final Offer + Deadline (Urgency)",
    subject: "Last reminder: Free proposal window closing [DATE]",
    daysSinceCapture: 14,
    description:
      "Day 14: Final push. Social proof (verified reviews, client count). Deadline/urgency. Strong CTA.",
    htmlTemplate: `
<h1>Hi [FIRST_NAME],</h1>

<p>Last check-in sebelum kami close checklist lead nurture sequence. 👋</p>

<p>Kalau lo sudah use checklist + ROI calculator + read case studies — kami ready untuk next step: strategic consultation atau langsung proposal request.</p>

<h2>Why Partner dengan Kami (Quick Recap)</h2>

<div style="background: #f5f5f5; padding: 20px; border-radius: 10px;">
  <ul>
    <li>✓ <strong>400+ events delivered</strong> since 2018 (0 major incidents)</li>
    <li>✓ <strong>100+ companies trusted</strong> — tech, manufacturing, BUMN, startups</li>
    <li>✓ <strong>4.9/5 Google rating</strong> (105+ verified reviews)</li>
    <li>✓ <strong>92% repeat booking rate</strong> — clients come back</li>
    <li>✓ <strong>6 frameworks</strong> — outcome-driven, not cookie-cutter</li>
    <li>✓ <strong>24-hour proposal</strong> — fast turnaround, detailed breakdown</li>
  </ul>
</div>

<h2>Next Step</h2>

<p>Dua option:</p>

<p><strong>Option A: Free Consultation (30 min)</strong></p>
<p>Senior planner, strategy discussion, no proposal pressure. Good fit check.</p>
<p>[BUTTON: Book Consultation]</p>

<p><strong>Option B: Direct Proposal</strong></p>
<p>Already know what lo need? Langsung request proposal. Custom breakdown within 24h.</p>
<p>[BUTTON: Request Proposal]</p>

<p>Atau interested for next quarter? Email kami tetap open untuk future planning.</p>

<p>Cheers,<br>
[SENDER_NAME]<br>
Senior Planner, TourBandung Corporate</p>

<p style="font-size: 12px; color: #666;">
  P.S. Verifikasi dari 100+ perusahaan: event kami deliver bukan hanya "fun activity" — tapi actual business outcome. Check Google Reviews jika pengen confirm. 🎯
</p>
    `,
  },
];

/**
 * Helper function: Get email template by day
 */
export function getEmailTemplate(daysSinceCapture: number): EmailTemplate | undefined {
  return EMAIL_NURTURE_SEQUENCE.find((t) => t.daysSinceCapture === daysSinceCapture);
}

/**
 * Helper function: Get all templates for setup
 */
export function getAllEmailTemplates(): EmailTemplate[] {
  return EMAIL_NURTURE_SEQUENCE;
}
