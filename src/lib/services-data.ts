import {
  IconGathering,
  IconTeamBuilding,
  IconEmployee,
  IconRetreat,
  IconLeadership,
  IconExecutive,
  IconIncentive,
  IconAnnual,
  IconMice,
  IconGlamping,
} from "@/components/icons/Icons";
import { IMAGES } from "@/lib/drive-images";
import type { ComponentType, SVGProps } from "react";

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  heroDescription: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  heroImage: typeof IMAGES.heroMain;
  metaDescription: string;

  // Quick stats
  paxRange: string;
  durationOptions: string[];
  priceFrom: string;
  vibeTags: string[];

  // What's included
  inclusions: string[];

  // Sample programs (2-3 short variations)
  samples: { name: string; pax: string; duration: string; price: string; highlight: string }[];

  // Process / methodology
  process: { step: string; description: string }[];

  // FAQ specific to this service
  faqs: { question: string; answer: string }[];

  // Related services
  relatedSlugs: string[];

  // Related SEO money page (cross-link)
  relatedMoneyPage?: { href: string; label: string };
};

const SERVICES: Record<string, ServiceDetail> = {
  "company-gathering": {
    slug: "company-gathering",
    title: "Company Gathering",
    eyebrow: "Annual celebration",
    heroDescription:
      "Annual gathering atau quarterly meetup yang di-design dengan production scale dan substansi corporate. Untuk tim 50–800 pax, dari opening ceremony hingga gala dinner.",
    Icon: IconGathering,
    heroImage: IMAGES.packageAnnualGathering,
    metaDescription:
      "Company gathering Bandung yang outcome-driven — annual event production dengan opening ceremony, awarding night, gala dinner. Range Rp 3-7 jt/pax.",
    paxRange: "50–800 pax",
    durationOptions: ["1D Day Event", "2D1N", "3D2N"],
    priceFrom: "Rp 2.5 jt/pax",
    vibeTags: ["Annual", "Production-heavy", "Formal-fun"],
    inclusions: [
      "Hotel ballroom premium / multi-venue setup",
      "F&B 3x per hari (welcome dinner, breakfast, lunch, gala)",
      "Opening ceremony + CEO address production",
      "Awarding night dengan trophy custom + photo moment",
      "Live entertainment (band, MC bilingual, DJ)",
      "Team activity day (parallel tracks untuk grup besar)",
      "Transportation (multi-bus convoy kalau dari Jakarta)",
      "Documentation profesional + drone footage",
    ],
    samples: [
      {
        name: "Standard 2D1N",
        pax: "100–250 pax",
        duration: "2D1N",
        price: "Mulai Rp 3.5 jt/pax",
        highlight: "Sweet spot annual gathering — opening + activity day + gala",
      },
      {
        name: "Premium 3D2N",
        pax: "200–500 pax",
        duration: "3D2N",
        price: "Mulai Rp 4.5 jt/pax",
        highlight: "Multi-day arc, hotel premium, full production",
      },
      {
        name: "Marquee 3D2N",
        pax: "300–800 pax",
        duration: "3D2N",
        price: "Mulai Rp 6 jt/pax",
        highlight: "Anniversary milestone — bespoke theme, celebrity talent",
      },
    ],
    process: [
      { step: "Brief", description: "1 hour call dengan senior planner untuk align goal, scope, budget" },
      { step: "Concept", description: "Theme proposal + 2 venue alternative dalam 24 jam" },
      { step: "Production", description: "6-12 minggu prep — stage design, talent booking, content development" },
      { step: "Rehearsal", description: "Site visit + rehearsal 1 minggu sebelum hari H" },
      { step: "Execute", description: "Senior PM + 4-8 coordinator on-site selama event" },
      { step: "Recap", description: "Video highlight reel + post-event report dalam 2 minggu" },
    ],
    faqs: [
      {
        question: "Sweet spot pax untuk company gathering?",
        answer:
          "150–400 pax — engagement tinggi, intimacy masih ada, production scale manageable. Di bawah 100 agenda terasa kosong, di atas 500 butuh multi-zone setup.",
      },
      {
        question: "Berapa lama prep untuk corporate gathering?",
        answer:
          "Minimum 6-8 minggu. Peak season (Q4) lock minimum 12 minggu. Urgent prep 3-4 minggu masih bisa tapi kompromi venue choice.",
      },
      {
        question: "Bisa kombinasi awarding ceremony dengan theme?",
        answer:
          "100% bisa. Dari classic black-tie, Hollywood awards style, modern minimalist, hingga themed decade. Custom stage design, trophy, video bumper per kategori.",
      },
    ],
    relatedSlugs: ["annual-company-trip", "employee-gathering", "mice"],
    relatedMoneyPage: { href: "/corporate-gathering-bandung", label: "Lihat panduan lengkap corporate gathering Bandung" },
  },

  "team-building": {
    slug: "team-building",
    title: "Team Building",
    eyebrow: "Outcome-driven",
    heroDescription:
      "Bukan sekadar games. Activity di-frame untuk hit specific team outcome — komunikasi, problem solving, trust, alignment. 3 methodology framework + 50+ activity catalog.",
    Icon: IconTeamBuilding,
    heroImage: IMAGES.caseStudyTeamBuilding,
    metaDescription:
      "Team building Bandung outcome-driven dengan methodology (Tuckman, DiSC, Belbin). 50+ activity catalog. Format outbound, indoor, hybrid. Rp 1,2-4 jt/pax.",
    paxRange: "20–300 pax",
    durationOptions: ["Half Day", "Full Day", "2D1N"],
    priceFrom: "Rp 1.2 jt/pax",
    vibeTags: ["Outcome-driven", "Structured", "Methodology-based"],
    inclusions: [
      "Senior facilitator certified (P3K, activity-specific)",
      "Equipment standard internasional",
      "Insurance peserta full coverage",
      "Pre-event team assessment (DiSC/Belbin optional)",
      "Custom activity selection sesuai team goal",
      "Post-event survey + outcome report",
    ],
    samples: [
      { name: "Half-Day Outbound", pax: "20–80", duration: "4 jam", price: "Mulai Rp 1.2 jt/pax", highlight: "Quarterly refresh, light bonding" },
      { name: "Full-Day Hybrid", pax: "30–150", duration: "8 jam", price: "Mulai Rp 1.8 jt/pax", highlight: "70% outbound + 30% workshop" },
      { name: "2D1N Deep Bonding", pax: "40–200", duration: "2D1N", price: "Mulai Rp 2.8 jt/pax", highlight: "Post-merger, transformation work" },
    ],
    process: [
      { step: "Discovery", description: "Identify team goal: bonding, communication, trust, leadership" },
      { step: "Framework", description: "Pick methodology (Tuckman, DiSC, Belbin) + activity mix" },
      { step: "Pre-event", description: "Optional team assessment, briefing peserta" },
      { step: "Execute", description: "Senior facilitator + safety crew on-site" },
      { step: "Debrief", description: "Reflection circle + commitment circle di closing" },
      { step: "Follow-up", description: "Post-event survey + 30-day check-in" },
    ],
    faqs: [
      { question: "Activity paling efektif untuk tim tech?", answer: "Escape room corporate, hackathon mini, drone race team-based, cooking competition. Hindari activity terlalu fisik untuk first-timer outing." },
      { question: "Outbound vs indoor — mana lebih efektif?", answer: "Hybrid format (70% outbound + 30% workshop) adalah sweet spot. Outbound for energy, indoor for reflection. Cover learning styles berbeda." },
      { question: "Bisa untuk peserta first-timer outdoor?", answer: "Iya, dengan Tier 1 Light activity. Accessible untuk semua physical level. Modification option untuk peserta dengan kondisi khusus." },
    ],
    relatedSlugs: ["employee-gathering", "leadership-camp", "glamping-corporate"],
    relatedMoneyPage: { href: "/team-building-bandung", label: "Lihat panduan methodology + 50+ activity catalog" },
  },

  "employee-gathering": {
    slug: "employee-gathering",
    title: "Employee Gathering",
    eyebrow: "Engagement-focused",
    heroDescription:
      "Untuk HR yang butuh employee gathering yang impact ke engagement + retention — bukan refresh casual yang lupa 3 bulan kemudian. Cross-generational design + ROI measurement.",
    Icon: IconEmployee,
    heroImage: IMAGES.heroMain,
    metaDescription:
      "Employee gathering Bandung untuk engagement + retention. 5 format efektif, ROI measurement framework. Rp 1.5-3.5 jt/pax.",
    paxRange: "30–300 pax",
    durationOptions: ["Half Day", "1D2N", "2D1N"],
    priceFrom: "Rp 1.5 jt/pax",
    vibeTags: ["Engagement", "Cross-generational", "HR-perspective"],
    inclusions: [
      "Venue dengan vibe casual-professional",
      "F&B inclusive (halal, vegetarian, allergen-aware)",
      "Multi-track parallel activity (peserta self-select)",
      "Pre-post engagement survey",
      "Inclusive design untuk peserta dengan kondisi khusus",
      "Photo & video memorable moment capture",
    ],
    samples: [
      { name: "Casual 1-Day", pax: "30–100", duration: "1 hari", price: "Mulai Rp 1.5 jt/pax", highlight: "Quarterly gathering / refresh" },
      { name: "Standard 2D1N", pax: "50–200", duration: "2D1N", price: "Mulai Rp 2.5 jt/pax", highlight: "Default annual employee gathering" },
      { name: "Family Day", pax: "80–400 (incl family)", duration: "1 hari", price: "Mulai Rp 1.5 jt employee + Rp 400rb/family member", highlight: "Tim + keluarga + anak" },
    ],
    process: [
      { step: "HR Brief", description: "Align goal HR — engagement, retention, cultural reinforcement" },
      { step: "Format", description: "Pick format yang fit demografi (cross-generational design)" },
      { step: "Baseline", description: "Pre-event survey untuk measurement baseline" },
      { step: "Execute", description: "Multi-track parallel agenda + bonding-focused" },
      { step: "Measure", description: "Post-event survey + 6-month retention check" },
      { step: "Report", description: "ROI report dengan retention impact translate ke financial" },
    ],
    faqs: [
      { question: "Cross-generational design — gimana?", answer: "Multiple parallel activity tracks. Day 2 split 3 simultaneous activity: high-energy outbound, reflective workshop, cultural session. Peserta self-select sesuai preferensi." },
      { question: "Apakah bisa di-kombinasi dengan family day?", answer: "Iya. Format hybrid: Day 1 employee-only bonding, Day 2 family day. Multi-track activity untuk anak, family-style dining." },
      { question: "ROI gathering bisa di-justify ke management?", answer: "Iya. Pre-post engagement survey + 6-month retention check. Attrition reduction 5-15% × salary × turnover multiplier = retention saving. Typical ROI 2-3x." },
    ],
    relatedSlugs: ["company-gathering", "team-building", "annual-company-trip"],
    relatedMoneyPage: { href: "/employee-gathering-bandung", label: "Lihat panduan engagement + ROI measurement" },
  },

  "corporate-retreat": {
    slug: "corporate-retreat",
    title: "Corporate Retreat",
    eyebrow: "Deep strategic work",
    heroDescription:
      "Multi-day retreat untuk strategic planning, cultural reset, atau post-merger integration. Bukan event — proper retreat dengan structured methodology dan time untuk reflection.",
    Icon: IconRetreat,
    heroImage: IMAGES.packageExecutiveOffsite,
    metaDescription:
      "Corporate retreat Bandung untuk strategic planning, cultural reset, leadership development. 2D1N-5D4N premium dengan facilitator senior. Rp 3.5-8 jt/pax.",
    paxRange: "10–80 pax",
    durationOptions: ["2D1N", "3D2N", "5D4N"],
    priceFrom: "Rp 3.5 jt/pax",
    vibeTags: ["Strategic", "Substantive", "Premium-quiet"],
    inclusions: [
      "Venue private exclusive (villa/resort premium)",
      "F&B premium fine-dining",
      "Facilitator senior (internal atau certified executive coach)",
      "Pre-read material development + distribution",
      "Working session materials + documentation",
      "Reflective time built into agenda",
      "Closing commitment + 30/60/90 day follow-up framework",
    ],
    samples: [
      { name: "2D1N Surface Alignment", pax: "10–30", duration: "2D1N", price: "Mulai Rp 3.5 jt/pax", highlight: "Single topic substantive" },
      { name: "3D2N Sweet Spot", pax: "12–40", duration: "3D2N", price: "Mulai Rp 5 jt/pax", highlight: "Annual strategic planning, post-merger" },
      { name: "5D4N Bespoke Immersive", pax: "8–25", duration: "5D4N", price: "Mulai Rp 7 jt/pax", highlight: "Full transformation work, leadership cohort" },
    ],
    process: [
      { step: "Discovery", description: "Clarify retreat goal: strategy, culture, leadership, integration" },
      { step: "Facilitator", description: "Internal senior atau certified executive coach (Rp 30-80 jt fee)" },
      { step: "Pre-work", description: "Pre-read material, individual assessment (DiSC, 360 optional)" },
      { step: "Design", description: "Agenda design dengan working sessions + reflection time" },
      { step: "Execute", description: "On-site facilitation + senior PM coordination" },
      { step: "Follow-up", description: "30/60/90 day check-in framework + accountability tools" },
    ],
    faqs: [
      { question: "Kapan butuh retreat (vs gathering)?", answer: "6 scenario: strategic planning, post-merger integration, cultural reset, leadership development, major pivot, founders ritual. Kalau goal informal refresh, pilih outing/gathering." },
      { question: "Format mana yang optimal?", answer: "3D2N adalah sweet spot. Meaningful depth tanpa burnout. 2D1N untuk single substantive topic. 5D4N untuk full immersive (transformation, founders ritual)." },
      { question: "Wajib certified facilitator?", answer: "Untuk substantive work (strategic planning, transformation) — strongly recommended. Tanpa fasilitator senior, dynamics tim bisa get stuck. Untuk retreat lighter, internal senior planner cukup." },
    ],
    relatedSlugs: ["executive-offsite", "leadership-camp"],
    relatedMoneyPage: { href: "/company-retreat-bandung", label: "Lihat panduan strategic retreat multi-day" },
  },

  "leadership-camp": {
    slug: "leadership-camp",
    title: "Leadership Camp",
    eyebrow: "Development cohort",
    heroDescription:
      "Leadership development program untuk middle-to-senior management. Cohort experience dengan certified executive coach, 360-feedback assessment, dan 5 leadership framework.",
    Icon: IconLeadership,
    heroImage: IMAGES.caseStudyExecutive,
    metaDescription:
      "Leadership camp Bandung untuk senior management development. 5 framework (Servant, Adaptive, Situational, Transformational, Authentic) + certified executive coach. Rp 4-9 jt/pax.",
    paxRange: "12–40 pax",
    durationOptions: ["2D1N", "3D2N", "5D4N"],
    priceFrom: "Rp 4 jt/pax",
    vibeTags: ["Development", "Cohort", "Senior-leadership"],
    inclusions: [
      "Certified executive coach (ICF PCC/MCC)",
      "5 leadership framework curriculum",
      "360-feedback assessment optional (Rp 4-8 jt/peserta)",
      "Pre-retreat 1-on-1 coaching call",
      "Peer coaching pair setup",
      "Individual Leadership Development Plan (IDP)",
      "30/60/90 day follow-up framework",
    ],
    samples: [
      { name: "2D1N Foundation", pax: "12–25", duration: "2D1N", price: "Mulai Rp 4 jt/pax", highlight: "Quarterly leadership session" },
      { name: "3D2N Standard", pax: "12–25", duration: "3D2N", price: "Mulai Rp 5 jt/pax", highlight: "Annual senior leadership cohort" },
      { name: "5D4N Immersive Cohort", pax: "15–30", duration: "5D4N", price: "Mulai Rp 7 jt/pax", highlight: "Deep leadership development annual" },
    ],
    process: [
      { step: "Cohort selection", description: "Identify participants (12-30 from middle-senior management)" },
      { step: "360-Feedback", description: "Administration 6-8 minggu sebelumnya + personal debrief" },
      { step: "Pre-camp", description: "Individual coaching call + pre-read material" },
      { step: "Camp execution", description: "Working sessions + framework deep-dive + peer coaching pair" },
      { step: "IDP", description: "Individual development plan finalization + commitment circle" },
      { step: "Follow-up", description: "30/60/90 day check-in + optional booster session 6 month later" },
    ],
    faqs: [
      { question: "Apa beda leadership camp dan executive offsite?", answer: "Leadership camp = development-focused, cohort experience (12-30 pax middle-senior management). Output: leadership growth, IDP. Executive offsite = strategy-focused (8-20 pax C-suite). Output: alignment, decisions." },
      { question: "5 framework yang di-cover?", answer: "Servant, Adaptive, Situational, Transformational, Authentic Leadership. Mix selection di-customize sesuai company stage dan leader maturity level." },
      { question: "360-feedback wajib?", answer: "Highly recommended untuk substantive camp. Tambah Rp 4-8 jt/peserta. Powerful baseline + post-program measurement (6-month delta)." },
    ],
    relatedSlugs: ["executive-offsite", "corporate-retreat"],
    relatedMoneyPage: { href: "/leadership-retreat-jawa-barat", label: "Lihat panduan leadership development cohort" },
  },

  "executive-offsite": {
    slug: "executive-offsite",
    title: "Executive Offsite",
    eyebrow: "C-suite strategy",
    heroDescription:
      "Discreet C-suite strategy session di setting private exclusive. Untuk 8-20 senior leaders yang butuh strategic decision-making intensive. 100% discretion protocol.",
    Icon: IconExecutive,
    heroImage: IMAGES.packageExecutiveOffsite,
    metaDescription:
      "Executive offsite Bandung untuk C-suite strategy session. Discreet, premium, 6-layer confidentiality protocol. Certified strategy facilitator. Rp 6.5-12 jt/pax.",
    paxRange: "8–20 pax",
    durationOptions: ["1D Intensive", "2D1N Standard", "2D1N Bespoke"],
    priceFrom: "Rp 6.5 jt/pax",
    vibeTags: ["Discreet", "Premium", "Strategic"],
    inclusions: [
      "Venue private exclusive (heritage villa, mountain estate)",
      "Vendor + venue + staff NDA-bound",
      "F&B fine-dining premium",
      "Certified strategy facilitator (optional Rp 50-150 jt flat)",
      "Pre-offsite stakeholder briefing + individual input",
      "Pre-read material development",
      "Documentation protocol (encrypted, NDA-bound)",
      "Decision capture + accountability framework",
    ],
    samples: [
      { name: "1D Intensive", pax: "8–15", duration: "1 hari", price: "Mulai Rp 5 jt/pax", highlight: "Quarterly C-suite alignment, urgent decision" },
      { name: "2D1N Standard", pax: "10–20", duration: "2D1N", price: "Mulai Rp 7 jt/pax", highlight: "Annual strategic planning, post-merger" },
      { name: "2D1N Bespoke", pax: "8–15", duration: "2D1N", price: "Mulai Rp 10 jt/pax", highlight: "Major pivot, transformation, M&A discussion" },
    ],
    process: [
      { step: "NDA + Scope", description: "Vendor NDA + scope alignment (week 1-2)" },
      { step: "Pre-read", description: "Strategy doc + industry analysis + internal data (week 2-3)" },
      { step: "Individual input", description: "1-on-1 prep call dengan each C-suite member (week 3-4)" },
      { step: "Agenda + facilitator", description: "Final agenda lock + facilitator briefing (week 4-5)" },
      { step: "Execute", description: "On-site facilitation dengan strategy consultant (kalau ada)" },
      { step: "Document", description: "Decision capture + accountability framework + encrypted file delivery" },
    ],
    faqs: [
      { question: "Format mana yang paling sering?", answer: "2D1N Standard adalah default untuk annual strategic planning. 1D Intensive untuk quarterly. Bespoke untuk M&A / major pivot / transformation work." },
      { question: "Bagaimana confidentiality?", answer: "6-layer protocol: vendor NDA + venue exclusive + staff NDA + team NDA + no social media + encrypted document handling. Untuk highly sensitive (M&A), custom NDA scope dengan legal review." },
      { question: "Strategy consultant senior wajib?", answer: "Untuk substantive offsite (annual strategy, major decision) — strongly recommended. McKinsey/BCG alumni level. Fee Rp 50-150 jt flat per offsite. 40-50% dari outcome quality di-determine oleh facilitator." },
    ],
    relatedSlugs: ["leadership-camp", "corporate-retreat"],
    relatedMoneyPage: { href: "/executive-offsite-bandung", label: "Lihat panduan C-suite strategy + discretion protocol" },
  },

  "incentive-trip": {
    slug: "incentive-trip",
    title: "Incentive Trip",
    eyebrow: "Reward experience",
    heroDescription:
      "Reward program untuk top performers — destination experience yang memorable. Premium accommodation, exclusive activities, F&B fine-dining. Pesan ke top performers: kami invest di kalian.",
    Icon: IconIncentive,
    heroImage: IMAGES.packageGlamping,
    metaDescription:
      "Incentive trip Bandung untuk top performers — premium reward experience. Exclusive accommodation, signature activities. Rp 3.5-7 jt/pax.",
    paxRange: "10–150 pax",
    durationOptions: ["2D1N", "3D2N"],
    priceFrom: "Rp 3.5 jt/pax",
    vibeTags: ["Reward", "Premium", "Memorable"],
    inclusions: [
      "Premium accommodation (villa private, resort 5-star)",
      "F&B fine-dining premium",
      "Exclusive activities (private tour, premium adventure)",
      "Welcome amenity + personalized touches",
      "Photographer profesional untuk memorable capture",
      "Custom branded merchandise (optional)",
      "Recognition moment at gala dinner",
    ],
    samples: [
      { name: "Standard 2D1N", pax: "20–60", duration: "2D1N", price: "Mulai Rp 3.5 jt/pax", highlight: "Quarterly top performer reward" },
      { name: "Premium 3D2N", pax: "30–100", duration: "3D2N", price: "Mulai Rp 5 jt/pax", highlight: "Annual sales reward, milestone celebration" },
      { name: "Signature 3D2N", pax: "20–80", duration: "3D2N", price: "Mulai Rp 7 jt/pax", highlight: "President's Club tier — exclusive premium" },
    ],
    process: [
      { step: "Recognition design", description: "Bagaimana awarding di-deliver — surprise element, formal ceremony, etc" },
      { step: "Tier selection", description: "Match accommodation + activity tier dengan tier reward program" },
      { step: "Pre-trip comms", description: "Build anticipation — branded materials, video teaser" },
      { step: "Execute", description: "VIP service throughout — luxury feel di setiap touchpoint" },
      { step: "Capture", description: "Photo profesional + video recap untuk internal sharing" },
      { step: "Amplify", description: "Internal celebration post-trip untuk inspire next quarter" },
    ],
    faqs: [
      { question: "Berapa pax ideal untuk incentive trip?", answer: "20-60 pax untuk standard reward. 80-150 pax untuk annual large incentive. Smaller (10-30) untuk President's Club tier." },
      { question: "Beda dari corporate gathering?", answer: "Incentive trip = exclusive untuk top performer, premium tier vibe. Corporate gathering = whole company, festive vibe. Incentive trip biasanya 1.5-2x budget per pax dari standard gathering." },
      { question: "Sweet spot durasi?", answer: "3D2N adalah sweet spot — meaningful experience, recovery time included, photo moments banyak. 2D1N kalau budget constrained, 4D3N untuk President's Club premium." },
    ],
    relatedMoneyPage: { href: "/incentive-trip-bandung", label: "Lihat panduan incentive trip Bandung — reward program" },
    relatedSlugs: ["annual-company-trip", "executive-offsite", "glamping-corporate"],
  },

  "annual-company-trip": {
    slug: "annual-company-trip",
    title: "Annual Company Trip",
    eyebrow: "Big annual moment",
    heroDescription:
      "Big annual moment untuk seluruh perusahaan. Logistically complex — multi-bus transport, group coordination, parallel activity tracks. Kami sudah handle 1.200 pax 3-day program.",
    Icon: IconAnnual,
    heroImage: IMAGES.caseStudyLarge,
    metaDescription:
      "Annual company trip Bandung untuk seluruh perusahaan 100-2000 pax. Multi-day program, parallel activity tracks, kompleks logistics handled. Rp 2.2-5 jt/pax.",
    paxRange: "100–2000 pax",
    durationOptions: ["2D1N", "3D2N", "4D3N"],
    priceFrom: "Rp 2.2 jt/pax",
    vibeTags: ["Mass-scale", "Multi-day", "Inclusive"],
    inclusions: [
      "Multi-venue setup (hotel cluster atau resort + outside venue)",
      "Multi-bus transport coordination",
      "Multi-track parallel activity (3-5 streams)",
      "F&B coordination untuk 100% peserta",
      "Dietary mapping (halal, vegetarian, allergen)",
      "Medical standby + first responder",
      "Senior PM + multiple coordinators",
      "Documentation lengkap + recap video",
    ],
    samples: [
      { name: "Standard 2D1N", pax: "100–400", duration: "2D1N", price: "Mulai Rp 2.5 jt/pax", highlight: "Annual whole-company outing" },
      { name: "Premium 3D2N", pax: "300–800", duration: "3D2N", price: "Mulai Rp 3.5 jt/pax", highlight: "Anniversary milestone, full immersive" },
      { name: "Massive 3D2N+", pax: "800–2000", duration: "3D2N – 4D3N", price: "Mulai Rp 4.5 jt/pax", highlight: "Mass-scale annual celebration" },
    ],
    process: [
      { step: "Logistics design", description: "Multi-bus convoy plan, venue cluster, parallel tracks" },
      { step: "Pre-trip ops", description: "Manifest peserta, dietary mapping, room assignment matrix" },
      { step: "Crew assembly", description: "Senior PM + 6-12 coordinator + medical + logistic crew" },
      { step: "Site prep", description: "Setup H-1, AV setup, signage, contingency review" },
      { step: "Execute", description: "Real-time coordination via radio, daily debrief crew" },
      { step: "Wrap-up", description: "Departure coordination, post-event report + recap video" },
    ],
    faqs: [
      { question: "Mass scale 1000+ pax — doable?", answer: "Iya. Pernah handle 1.200 pax 3-day. Logistics handled dengan multi-venue, parallel tracks, dan dedicated logistic coordinator. Methodology sama dengan smaller scale, just need bigger crew." },
      { question: "Berapa lama prep untuk 500+ pax?", answer: "Minimum 10-12 minggu. Peak season lock 16+ minggu. Multi-venue lock paling penting — booking confirmation harus solid 8 minggu sebelumnya." },
      { question: "F&B logistics untuk 1000+ peserta?", answer: "Multi-station buffet di multiple location (kalau venue split), atau central kitchen dengan deliver-to-table system. Dietary mapping mandatory pre-event." },
    ],
    relatedMoneyPage: { href: "/outing-kantor-bandung", label: "Lihat panduan outing kantor Bandung — annual company trip" },
    relatedSlugs: ["company-gathering", "incentive-trip", "mice"],
  },

  "mice": {
    slug: "mice",
    title: "MICE",
    eyebrow: "Full event production",
    heroDescription:
      "Meeting, Incentive, Conference, Exhibition — full-stack event production. Stage design, AV setup, simultaneous translation, multi-session room coordination.",
    Icon: IconMice,
    heroImage: IMAGES.packageAnnualGathering,
    metaDescription:
      "MICE Bandung — full event production untuk meeting, incentive, conference, exhibition. Stage AV setup, multi-session coordination. Rp 3-6 jt/pax.",
    paxRange: "100–500 pax",
    durationOptions: ["1D", "2D1N", "3D2N"],
    priceFrom: "Rp 3 jt/pax",
    vibeTags: ["Conference", "Production-heavy", "Hybrid-capable"],
    inclusions: [
      "Hotel ballroom dengan dedicated AV",
      "Stage design + lighting + sound system",
      "Simultaneous translation (kalau perlu)",
      "Multi-session room coordination",
      "Conference registration + name tag",
      "Exhibition booth setup (kalau ada)",
      "Live streaming hybrid (optional)",
      "Documentation video + photo",
    ],
    samples: [
      { name: "Single-Day Conference", pax: "100–300", duration: "1D", price: "Mulai Rp 3 jt/pax", highlight: "Conference + lunch + closing networking" },
      { name: "Multi-Day Conference", pax: "200–500", duration: "2D1N", price: "Mulai Rp 4 jt/pax", highlight: "Multi-stream conference + dinner gala" },
      { name: "Conference + Exhibition", pax: "300–500", duration: "2D1N – 3D2N", price: "Mulai Rp 5 jt/pax", highlight: "Conference + exhibition booth + networking" },
    ],
    process: [
      { step: "Conference design", description: "Agenda structure, speaker lineup, session flow" },
      { step: "AV production", description: "Stage design, lighting plan, sound + recording setup" },
      { step: "Content prep", description: "Speaker rehearsal, content review, presentation backup" },
      { step: "Pre-conference", description: "Registration system, name tag, materials distribution" },
      { step: "Execute", description: "Production crew + session moderators + on-site coordinator" },
      { step: "Post-event", description: "Recording publish, attendee survey, networking follow-up" },
    ],
    faqs: [
      { question: "Hybrid event (offline + virtual)?", answer: "Iya. Multi-camera live switching, dedicated streaming engineer, virtual audience Q&A. Cost tambahan Rp 80-200 jt untuk full hybrid production." },
      { question: "Simultaneous translation support?", answer: "Iya, kalau ada peserta international. Translator profesional, AV setup khusus dengan booth + audio routing. Tambah Rp 30-80 jt/event tergantung language pair." },
      { question: "Bisa kombinasi dengan corporate gathering format?", answer: "Iya. Hybrid MICE + gathering — conference di pagi/siang, gala dinner + awarding di malam. Single venue 2D1N atau 3D2N." },
    ],
    relatedMoneyPage: { href: "/mice-organizer-bandung", label: "Lihat panduan MICE organizer Bandung — conference production" },
    relatedSlugs: ["corporate-retreat", "annual-company-trip", "company-gathering"],
  },

  "glamping-corporate": {
    slug: "glamping-corporate",
    title: "Glamping Corporate",
    eyebrow: "Unique outdoor",
    heroDescription:
      "Premium outdoor experience tanpa kompromi kenyamanan. Tenda safari dengan kasur asli, bonfire dinner di bawah bintang, sunrise reflection circle. Untuk tim yang mau outing memorable.",
    Icon: IconGlamping,
    heroImage: IMAGES.packageGlamping,
    metaDescription:
      "Glamping corporate Bandung — premium outdoor experience untuk team bonding. Tenda safari, bonfire dinner, sunrise activity. Rp 2.5-5.5 jt/pax untuk 1D2N.",
    paxRange: "20–80 pax",
    durationOptions: ["1D2N"],
    priceFrom: "Rp 2.5 jt/pax",
    vibeTags: ["Unique", "Outdoor", "Differentiator"],
    inclusions: [
      "Tenda safari premium (kasur asli, en-suite bathroom, heater)",
      "F&B fine-dining outdoor (3 meals)",
      "Bonfire briefing session evening",
      "Sunrise hike + reflection circle (optional)",
      "Stargazing + story circle",
      "Camp activity (cooking competition, drone race, etc)",
      "Hot drink station 24/7",
      "Photographer outdoor specialist",
    ],
    samples: [
      { name: "Standard 1D2N", pax: "30–60", duration: "1D2N", price: "Mulai Rp 2.5 jt/pax", highlight: "Quarterly team bonding" },
      { name: "Premium 1D2N", pax: "30–50", duration: "1D2N", price: "Mulai Rp 3.6 jt/pax", highlight: "Annual differentiator experience" },
      { name: "Executive 1D2N", pax: "12–25", duration: "1D2N", price: "Mulai Rp 5.2 jt/pax", highlight: "Leadership retreat outdoor twist" },
    ],
    process: [
      { step: "Venue selection", description: "Match glamping site dengan goal — adventurous (Ciwidey), reflective (Pangalengan)" },
      { step: "Activity design", description: "Mix signature activities — bonfire, sunrise hike, stargazing, outdoor cooking" },
      { step: "Pre-camp", description: "Packing checklist untuk peserta, weather brief, dietary mapping" },
      { step: "Execute", description: "Outdoor specialist crew + dedicated PM + medical standby" },
      { step: "Capture", description: "Outdoor photographer untuk hari memorable moments" },
      { step: "Wrap-up", description: "Pack-up day 2 siang, transport back" },
    ],
    faqs: [
      { question: "Berapa pax minimum?", answer: "Min 20 pax untuk economic feasibility. Sweet spot 30-60 pax — paling memorable, intimacy maksimal." },
      { question: "Hujan — gimana?", answer: "Tenda heavy-duty waterproof. Covered common area untuk indoor activity. Schedule shifted kalau perlu. Plan B selalu siap." },
      { question: "Activity unik apa di glamping?", answer: "Bonfire strategic briefing (CEO speak di bawah bintang), sunrise reflection circle 5:30 AM, outdoor cooking competition, stargazing dengan astronomer. Impossible di hotel/villa." },
    ],
    relatedSlugs: ["team-building", "corporate-retreat", "incentive-trip"],
    relatedMoneyPage: { href: "/glamping-corporate-bandung", label: "Lihat panduan glamping corporate experience" },
  },
};

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICES);
}

export function getService(slug: string): ServiceDetail | undefined {
  return SERVICES[slug];
}

export function getServicesList(): ServiceDetail[] {
  return Object.values(SERVICES);
}
