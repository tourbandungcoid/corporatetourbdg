export type TeamMember = {
  slug: string;
  name: string;
  jobTitle: string;
  shortRole: string;
  yearsExperience: number;
  bio: string;
  bioLong: string;
  specialties: string[];
  credentials: string[];
  signaturePillar: string;
  linkedinUrl?: string;
  initials: string;
};

export const TEAM: TeamMember[] = [
  {
    slug: "andre-pratama",
    name: "Andre Pratama",
    jobTitle: "Founder & Lead Corporate Strategist",
    shortRole: "Founder",
    yearsExperience: 12,
    bio: "Founder 7Summits Travel. 12 tahun handle corporate event di Jawa Barat. 400+ events delivered.",
    bioLong:
      "Andre mulai 7Summits di 2018 setelah 6 tahun di-house corporate events manager untuk grup logistik & manufacturing nasional. Specialist budgeting transparant + risk management untuk grup 100–500 pax. Lead lebih dari 400 corporate events sejak 2018 dengan zero critical incident rate.",
    specialties: [
      "Strategic event design 100–500 pax",
      "Multi-day premium gathering 3D2N",
      "Budget structuring & cost transparency",
      "Vendor & venue commercial negotiation",
    ],
    credentials: [
      "ASITA certified (Bandung chapter)",
      "K3 (Safety) training — Disnaker Jabar 2022",
      "Founder member, Indonesia MICE Network",
    ],
    signaturePillar: "Budget Architecture (Pillar 4)",
    initials: "AP",
  },
  {
    slug: "sinta-rahmadhani",
    name: "Sinta Rahmadhani",
    jobTitle: "Head of Client Strategy",
    shortRole: "Head of Strategy",
    yearsExperience: 9,
    bio: "HR background, 6 tahun consulting di big-4. Specialist diagnosis bonding vs alignment vs strategy off-site.",
    bioLong:
      "Ex-consultant di Deloitte HC dengan exposure ke 30+ client annual gathering brief. Sinta join 7Summits 2022 untuk lead client strategy — translate vague brief HR (\"bonding seru\") jadi measurable program objective dengan pre-survey + post-evaluation framework. Sertifikasi MBTI Step II Facilitator + DDI Targeted Selection Interviewer.",
    specialties: [
      "Discovery briefing (5-Pillar Pillar 1)",
      "Behavior change facilitation",
      "Pre-event survey + post-event evaluation",
      "HR–business alignment workshop",
    ],
    credentials: [
      "MBTI Step II Certified Practitioner",
      "DDI Targeted Selection Interviewer",
      "S2 Manajemen SDM — Universitas Padjadjaran",
    ],
    signaturePillar: "Outcome Diagnosis (Pillar 1)",
    initials: "SR",
  },
  {
    slug: "raden-bagus",
    name: "Raden Bagus Wicaksono",
    jobTitle: "Head of Operations & Risk",
    shortRole: "Head of Ops",
    yearsExperience: 11,
    bio: "11 tahun outdoor education & adventure operations. K3 + first aid certified. Risk management framework owner.",
    bioLong:
      "Bagus background outdoor education + commercial outbound operator. Lead semua kebijakan safety + risk register internal. Setiap activity di-bawah-kontrol risk assessment 3-tier (likelihood × impact × control). Crisis comm protocol owner — termasuk evacuation drill, contingency plan force majeure, dan integrasi RS partner di Bandung & Lembang.",
    specialties: [
      "Outdoor risk assessment & mitigation",
      "Crisis comm + evacuation protocol",
      "Adventure activity safety standards (zipline, rafting, paintball)",
      "Force majeure contingency planning",
    ],
    credentials: [
      "Wilderness First Aid (WMA International)",
      "K3 Umum + K3 di Ketinggian — BNSP",
      "Adventure Activity Safety Standards — ITDC",
    ],
    signaturePillar: "Operational Safety Net (Pillar 5)",
    initials: "RB",
  },
  {
    slug: "amelia-chandra",
    name: "Amelia Chandra",
    jobTitle: "Senior Program Designer",
    shortRole: "Program Designer",
    yearsExperience: 7,
    bio: "Ex-event coordinator hotel berbintang. Specialist program flow + experience design untuk gathering 2D1N–3D2N.",
    bioLong:
      "Amelia handle program design end-to-end — dari opening welcome ceremony, ice breaker yang gak cringe, awarding flow, sampai closing reflection circle. 7 tahun exposure ke F&B premium + entertainment logistics. Specialist menyeimbangkan formal segment (CEO speech, awarding) dengan informal bonding tanpa jadi cheesy.",
    specialties: [
      "Program flow design 2D1N–3D2N",
      "Ice breaker & energizer curation (non-cringe)",
      "Awarding night + ceremony orchestration",
      "Theme concept & creative direction",
    ],
    credentials: [
      "S1 Manajemen Pariwisata — STP Bandung",
      "Certified MICE Professional — Kemenparekraf",
      "Pre-employment di Padma Hotel Bandung (2017–2019)",
    ],
    signaturePillar: "Experience Architecture (Pillar 2)",
    initials: "AC",
  },
  {
    slug: "tio-mahesa",
    name: "Tio Mahesa",
    jobTitle: "Lead Field Operations Manager",
    shortRole: "Field Ops Lead",
    yearsExperience: 8,
    bio: "Field commander on-the-ground. 8 tahun pegang 200+ events. Single point of contact selama event berjalan.",
    bioLong:
      "Tio jadi field commander untuk hampir semua event 7Summits — onsite dari setup H-1 sampai closing. Single point of contact untuk HR client selama event berjalan, koordinasi dengan vendor, venue, transportasi, dan emergency response. Bandung & Jawa Barat native — kenal hampir semua manager venue tier-1.",
    specialties: [
      "On-ground execution & vendor coordination",
      "Real-time contingency adjustment",
      "Local venue & supplier network Bandung–Jabar",
      "Client liaison selama event berjalan",
    ],
    credentials: [
      "First Aid + CPR (PMI)",
      "Driver License A1 (commercial vehicle)",
      "Field tested: 200+ events delivered",
    ],
    signaturePillar: "Execution Discipline (Pillar 3)",
    initials: "TM",
  },
  {
    slug: "putri-anggraeni",
    name: "Putri Anggraeni",
    jobTitle: "Client Success & Reporting Lead",
    shortRole: "Client Success",
    yearsExperience: 5,
    bio: "Post-event reporting + client success. Setiap event end dengan structured report + survey + ROI metrics.",
    bioLong:
      "Putri pegang fase paling sering di-skip vendor lain: post-event closure. Setiap event end dengan structured report — attendance, NPS, photo deliverables, invoice reconciliation, dan recommendation untuk event berikutnya. Background market research + data analytics. Specialist quantifying soft outcomes (bonding, engagement) jadi metrics yang HR bisa report ke management.",
    specialties: [
      "Post-event survey design & NPS measurement",
      "Photo & video deliverables curation",
      "Invoice reconciliation & cost transparency",
      "ROI reporting framework untuk HR",
    ],
    credentials: [
      "S1 Statistika — Universitas Padjadjaran",
      "Google Analytics Individual Qualification",
      "5 tahun di market research consultancy",
    ],
    signaturePillar: "Measurable Outcomes (Pillar 1 + 5)",
    initials: "PA",
  },
];

export function getTeamMember(slug: string): TeamMember | null {
  return TEAM.find((m) => m.slug === slug) ?? null;
}

export function getAllTeamSlugs(): string[] {
  return TEAM.map((m) => m.slug);
}
