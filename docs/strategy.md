# Tour Bandung Corporate — Strategy Master Document

**Project:** `corporate.tourbandung.co.id`
**Stack:** Next.js + Supabase + Vercel
**Last updated:** May 2026

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Phase 1 — Website Structure](#phase-1)
3. [Phase 2 — Homepage Masterplan](#phase-2)
4. [Phase 3 — SEO Money Pages](#phase-3)
5. [Phase 4 — AEO + GEO Pages](#phase-4)
6. [Phase 5 — Proposal Funnel](#phase-5)
7. [Phase 6 — Trust Architecture](#phase-6)
8. [Phase 7 — Custom CMS](#phase-7)
9. [Phase 8 — Lead Management](#phase-8)
10. [Phase 9 — Future Scale Roadmap](#phase-9)
11. [Critical Dependencies](#dependencies)
12. [Execution Roadmap](#execution-roadmap)

---

## <a id="project-overview"></a>Project Overview

### Mission

Membangun **HIGH-CONVERSION B2B CORPORATE LEAD GENERATION ENGINE** untuk corporate.tourbandung.co.id — unit specialized dari 7Summits Travel yang fokus pada B2B corporate outing, team building, dan executive offsite di Bandung & Jawa Barat.

### Target Market

- HR Department (Manager, Director)
- General Affair (GA)
- Office Manager / People & Culture
- Procurement Team
- Founder / CEO / Director / Corporate Decision Makers

### Business Focus

Company Gathering · Outing Kantor · Employee Gathering · Team Building · MICE · Corporate Retreat · Leadership Camp · Executive Offsite · Incentive Trip · Annual Company Trip · Sales Reward Trip · Glamping Corporate Experience

### Core Objective

Website ini BUKAN travel landing page biasa. Harus menjadi:

- Inbound lead generation engine
- Trust & authority builder
- Premium corporate partner positioning
- SEO + AEO + GEO optimized
- Scalable corporate digital ecosystem

### Visual Benchmark

[tourvia.framer.website](https://tourvia.framer.website/) — premium visual feel, layout structure, whitespace system, conversion flow. **Jangan copy mentah**, redesign menjadi lebih premium, corporate, conversion-focused, suitable untuk Indonesia B2B market.

### Brand Voice

Gen-Z & Millennial friendly · Corporate tapi fun · Smart casual · Premium tapi approachable · Modern startup vibe · Human · Conversational. Target: **"Corporate Seru" — high trust tanpa terasa dingin.**

### Constraints

- ✅ Keep existing color palette (jangan major redesign warna)
- ✅ Use existing logo (jangan redesign)
- ✅ Real photos dari [Drive folder](https://drive.google.com/drive/folders/1ho8bmQxYYqdojve1tgaXSPCCgQ6Zd5Hx) — bukan stock
- ❌ NO third-party CMS (no Sanity/WordPress/Strapi) — custom internal CMS via Next.js + Supabase

---

## <a id="phase-1"></a>Phase 1 — Website Structure

### Strategic Foundation

**North Star:**
> "Setiap halaman harus memajukan corporate decision-maker satu langkah lebih dekat ke proposal request — atau memvalidasi kenapa mereka harus memilih kita di atas vendor lain."

### Buyer Journey → Page Archetype Mapping

| Stage | Mental State | Page Archetype | Primary Goal |
|---|---|---|---|
| 1. Trigger | "Boss minta atur outing, gw ga tau mulai dari mana" | Magnetic Pages (SEO money pages) | Capture attention |
| 2. Discovery | Scanning 4–6 vendor, short-listing | Service Hub + Service Pages | Differentiate vs cheap competitors |
| 3. Trust Validation | "Bisa dipercaya ga? Pernah handle perusahaan beneran?" | Trust Builders | Move past commodity perception |
| 4. Consideration | "Budget berapa? Itinerary kayak gimana?" | Decision Helpers | Pre-qualify lead |
| 5. Action | "Oke, gw butuh penawaran" | Conversion Funnels | Submit qualifying form / WA |
| 6. Decision Maker Validation | "Gw harus presentasi ke atasan" | Shareable Assets | Equip champion |
| 7. Retention | Post-event | Loyalty Surface | Drive re-booking |

### 3 Conversion Modes

| Mode | Use case | CTA | Form complexity |
|---|---|---|---|
| **Hot** | Service/money/package pages | "Request Proposal" | 8–10 fields |
| **Warm** | Case study, FAQ, insights | "Quick Quote" | 4 fields |
| **Cold** | Blog, AEO content | "WhatsApp" / "Subscribe" | 1 field |

### Master Sitemap

```
corporate.tourbandung.co.id/
├── /                                 (Home)
├── /services                         (Service Hub — 10 services)
│   └── /services/[slug]
├── /packages                         (Curated Programs)
│   └── /packages/[slug]
├── /case-studies                     (Trust Builders)
│   └── /case-studies/[slug]
├── /insights                         (Editorial / AEO hub)
│   ├── /insights/[slug]
│   └── /insights/category/[topic]
├── /faq                              (Master FAQ — AEO/GEO surface)
│   └── /faq/[category]               (7 categories)
│
├── ▼ SEO MONEY PAGES (top-level untuk max ranking)
├── /outing-kantor-bandung
├── /corporate-gathering-bandung
├── /employee-gathering-bandung
├── /team-building-bandung
├── /outbound-perusahaan-bandung
├── /company-retreat-bandung
├── /villa-gathering-bandung
├── /glamping-corporate-bandung
├── /leadership-retreat-jawa-barat
├── /executive-offsite-bandung
│
├── ▼ PROPOSAL FUNNEL
├── /proposal                         (Funnel entrance)
│   ├── /proposal/request             (Full qualifying form)
│   ├── /proposal/quick-quote         (Micro-form)
│   ├── /proposal/book-consultation
│   ├── /proposal/sample              (Lead magnet)
│   ├── /proposal/thank-you
│   └── /proposal/track/[ref]         (Status tracking)
│
├── ▼ TRUST + COMPANY
├── /about
├── /clients
├── /contact
├── /team
│
└── ▼ OPERATIONAL
    ├── /sitemap.xml
    ├── /llms.txt
    ├── /robots.txt
    └── /legal/* (privacy, terms, cookies)
```

### Admin Sitemap (Phase 7)

```
/admin/
├── /admin/login
├── /admin/dashboard
├── /admin/leads (Phase 8)
├── /admin/content/* (services, packages, case-studies, insights, faq, etc.)
├── /admin/media
├── /admin/seo/* (global, pages, redirects, schema)
├── /admin/analytics
├── /admin/settings/*
└── /admin/users
```

### 7 Page Archetypes

1. **Homepage** — multi-section conversion hub (Phase 2)
2. **Service Page** — `/services/[slug]` — Service spec + cross-sell
3. **SEO Money Page** — Top-level — keyword-driven, depth content
4. **Case Study** — Storied proof with metrics
5. **FAQ / AEO Page** — Q&A format, schema-marked
6. **Insights / Editorial** — Long-form thought leadership
7. **Proposal Funnel** — Multi-step qualifying form

### URL Conventions

- Lowercase, hyphenated, no underscores
- Locale-aware Indonesian (jangan translate "outing" ke English)
- No date in URL (evergreen)
- Flat structure for insights (`/insights/[slug]` not `/insights/category/[slug]`)
- Service slugs = canonical name (`/services/team-building`)

### Internal Linking — Pillar / Cluster Topology

```
PILLAR PAGE (broad authority)
   ├── /services/company-gathering          ← Pillar
   │      ├── /outing-kantor-bandung       ← Cluster (location+intent)
   │      ├── /faq/budget-outing-kantor    ← Cluster (AEO)
   │      ├── /insights/rundown-outing-1-hari ← Cluster (educational)
   │      ├── /packages/signature-3d2n     ← Cluster (commercial)
   │      └── /case-studies/[techunicorn]  ← Cluster (trust)
```

### CMS vs Code Management

| Route / Surface | Management |
|---|---|
| Homepage | Hybrid (structure code, content CMS) |
| Service pages | CMS content + code template |
| Packages | CMS fully |
| Case Studies | CMS fully |
| Insights | CMS fully |
| FAQ pages | CMS fully |
| SEO money pages | Hybrid (copy CMS, structure code) |
| Proposal funnel | Code-managed, form schema in CMS |
| About, Contact | Hardcoded with CMS overrides |
| Legal | Hardcoded |

### SEO/AEO/GEO Foundation

| Discipline | Strategy |
|---|---|
| **SEO** | Shallow tree (max 3 clicks), keyword-rich URLs, pillar/cluster, schema markup, mobile-first |
| **AEO** | Question-format content, semantic answer structure, FAQPage schema, "Quick Answer" boxes |
| **GEO** | Entity definition consistency, sameAs linking, llms.txt, original named frameworks, citation-worthy stats, E-E-A-T author pages |

### 3 Topical Authority Clusters

1. **Corporate Outing Bandung** (Hub: `/outing-kantor-bandung`)
2. **Team Building & Outbound Bandung** (Hub: `/team-building-bandung`)
3. **Premium Programs — Leadership/Executive** (Hub: `/leadership-retreat-jawa-barat`, `/executive-offsite-bandung`)

---

## <a id="phase-2"></a>Phase 2 — Homepage Masterplan

### Strategic Frame

**Homepage's job (8-second test):**
> Visitor harus tahu: (1) ini vendor yang serius, (2) mereka punya program yang gw butuh, (3) ada bukti nyata, (4) gw bisa dapet proposal tanpa harus telpon dulu.

### Conversion Math (baseline)

```
1,000 visitors/month → 500 engaged → 350 view services → 88 view detail
→ 18 visit proposal form → 7 form completions → 2-3 close (Rp 200jt avg)
= ~Rp 500jt monthly revenue baseline
```

### Section Sequencing (B2B Trust Escalation)

1. **Hero** — Attention (8-sec hook)
2. **Client Trust Bar** — Immediate authority
3. **Services Overview** — "Yes, you're in the right place"
4. **Why Choose Us** — Differentiation (anti-commodity)
5. **Featured Packages** — Price anchor + concrete proof
6. **Case Studies** — Storied proof
7. **Testimonials** — Human proof
8. **FAQ Snippet** — Objection handling
9. **Lead Magnet** — Second-chance soft capture
10. **Final Closing CTA** — Closing pressure

### Section 1 — Hero

**12 Headline Variants:**

| # | Angle | Headline |
|---|---|---|
| 1 | Outcome-focused | "Outing Kantor yang Bikin Tim Lo Balik ke Kantor dengan Energy Beda." |
| 2 | Specificity + Authority | "Vendor Corporate Outing Bandung yang Sudah Dipercaya 100+ Perusahaan Indonesia." |
| 3 | Pain → Solution | "Bosan Cari Vendor Outing yang Cuma Jualan Paket Generik? Kita Custom Setiap Program." |
| 4 | Premium Positioning | "Premium Corporate Experiences. Designed for Indonesia's Leading Teams." |
| 5 | Authority + Specificity | "Architecting Memorable Corporate Outings in Bandung — Since 2018." |
| 6 | Transformation | "Dari Brief Singkat ke Outing yang Diomongin Tim Sampai Tahun Depan." |
| 7 | Risk-reversal | "Outing Kantor Tanpa Drama. Tanpa Surprise Budget. Kita Handle Semuanya." |
| 8 | Aspirational + Direct | "Outing Kantor Bandung yang Worth Your Team's Time." |
| 9 | Quantified Proof | "400+ Corporate Events Delivered. 92% Repeat Booking. Itu Standar Kita." |
| 10 | Inclusive Premium | "Untuk Tim 20 sampai 2,000 Orang. Untuk Budget Conservative sampai All-Out." |
| 11 | B2B Direct + Confident | "Corporate Outing yang Dirancang Senior, Bukan Hasil Template Vendor." |
| 12 | Local Pride + Insider | "Kami Tahu Bandung. Lo Tinggal Tahu Tim Lo Mau Kayak Apa." |

**Launch pick:** #2 (safe, high trust). A/B test #8 (premium-aspirational) week 4, #9 (numbers) week 8.

**Subheadline (for #2):**
> "HR dan GA dari startup unicorn sampai BUMN nasional pakai kita untuk **company gathering, team building, dan corporate retreat di Bandung & Jawa Barat** — dari tim 20 sampai 2,000 orang."

**CTA Hierarchy:**
- Primary: "Request Free Proposal" (solid, accent)
- Secondary: "Lihat Sample Proposal" (outline)
- Tertiary (sticky): WhatsApp floating button

**Trust placement above-the-fold:**
1. Trust pill atas headline: "◆ Trusted by 100+ Indonesian companies"
2. Inline proof points (3): "◆ 400+ events delivered · ◆ 92% repeat booking · ◆ Avg response: 6 jam"
3. Logo strip preview at bottom of hero

### Section 2 — Client Trust Bar

- Minimum 8 logos, ideal 12–20 (scrolling marquee)
- Industry mix: 2 Tech, 2 BUMN, 2 Banking, 2 FMCG, 2 MNC, 2 Manufacturing
- Grayscale default, color on hover
- CTA below: "Lihat bagaimana kami handle event untuk mereka →"

### Section 3 — Services Overview

5-column grid, 2 rows for 10 services. Each card: icon + title + 1-liner + arrow link.

| Service | 1-liner |
|---|---|
| Company Gathering | "Annual gathering atau quarterly meetup — untuk tim 50 sampai 800 pax." |
| Team Building | "Outbound, indoor activities, atau workshop-based — di-design dari objective tim." |
| Employee Gathering | "Refreshing + team bonding di venue dengan vibe yang pas." |
| Corporate Retreat | "Multi-day retreat untuk deep work, strategic planning, atau cultural reset." |
| Leadership Camp | "Leadership development program untuk middle-to-senior management." |
| Executive Offsite | "C-level offsite di premium villa atau resort. Discreet, premium, focused." |
| Incentive Trip | "Reward program untuk top performers — destination experience yang memorable." |
| Annual Company Trip | "Big annual moment untuk seluruh perusahaan. Logistically complex, kami handle." |
| MICE | "Meeting, Incentive, Conference, Exhibition — full-stack event production." |
| Glamping Corporate | "Unique outdoor experience tanpa kompromi kenyamanan." |

### Section 4 — Why Choose Us (6 pillars, pick 4 for launch)

1. **Bukan Vendor Generik, Tapi Strategic Partner** — "100% program di-design custom, 0 paket copy-paste"
2. **Bandung Insider Network sejak 2018** — "60+ venue partnership di Bandung & Jawa Barat"
3. **Senior Team. Bukan Freelancer Tim Sebulan Sekali.** — "Avg tenure tim senior: 4+ years"
4. **Pricing Transparan. No Surprise Markup.** — "0% hidden fees dalam 6 tahun terakhir"
5. **Speed Yang Bikin Decision Cepat** — "Avg response time: 6 jam"
6. **Built for Scale: 20 sampai 2,000 pax** — "Largest event: 1,200 pax in 3-day program"

**Recommended launch combo:** #1, #2, #4, #5

### Section 5 — Featured Packages (3-card with "Most Popular" decoy)

| Package | Pax | Duration | Starting price |
|---|---|---|---|
| Glamping 1D2N — Team Bonding | 30–80 | 2D1N | Rp 1.8jt/pax |
| **Signature Annual Gathering ★** | 100–400 | 3D2N | Rp 3.5jt/pax |
| Executive Offsite Premium | 8–30 | 2D1N | Rp 6.5jt/pax |

### Section 6 — Case Studies (3 launch)

**Outcome-headline pattern** (not service descriptor):
- ✅ "Post-Merger Bonding untuk 800 Tim Baru — Satu Suara dalam 3 Hari"
- ✅ "Annual Gathering 3 Departemen — 92% Tim Vote 'Best Event' Dalam 5 Tahun"
- ✅ "Quarterly Strategy Offsite — 24 Senior Leader, 12 New Initiatives Lahir"

### Section 7 — Testimonials (8 templates, 6+ real needed for launch)

Marquee auto-scroll, 2 rows opposite direction. Cards: stars + quote (2-3 sentences) + named author (full name + role + company).

### Section 8 — FAQ Snippet (top 7 priority Q&A)

1. Berapa estimasi budget outing kantor untuk tim 100 pax di Bandung?
2. Berapa lama proses dari request proposal ke konfirmasi?
3. Apakah bisa custom itinerary di-luar paket yang ditampilkan di website?
4. Bagaimana kalau pax berubah mendekati hari H?
5. Apakah ada hidden cost di luar proposal?
6. Bagaimana penanganan kalau ada force majeure?
7. Apakah Tour Bandung Corporate sama dengan 7Summits Travel?

Schema markup: `FAQPage`

### Section 9 — Lead Magnet

**Recommended launch:** Sample Proposal PDF (real, anonymized)

Alternatives: Corporate Outing Budget Calculator, Vendor Selection Checklist, Bandung Venue Atlas 2026, Annual Gathering Planning Timeline

Form: 4 fields (Nama, Email perusahaan, WhatsApp optional, Perusahaan)

### Section 10 — Final Closing CTA

**6 Closing Headline Options:**

| # | Angle | Headline |
|---|---|---|
| 1 | Direct ask | "Siap Bikin Outing Yang Tim Lo Inget Setahun?" |
| 2 | FOMO + Specific | "Q1 sudah hampir habis. Lock venue lo sebelum kompetitor outing duluan." |
| 3 | Confidence transfer | "Most decisions take weeks. Kami bantu lo decide dalam 24 jam." |
| 4 | Aspirational | "Bayangin Tim Lo, 3 Bulan Lagi, di Lembang. Cerita Yang Diomongin Sampai Tahun Depan." |
| 5 | Risk-reversal | "Free Proposal. No Commitment. No Pressure. Just Information Yang Lo Butuhin." |
| 6 | Quietly confident | "Brief Kami Sekali. Sisanya Biarkan Kami Handle." |

**Launch pick:** #5 (risk-reversal — lowest friction)

### Cross-section patterns

- Section vertical padding: 96px desktop / 64px mobile
- Container max-width: 1280px
- Typography scale: `clamp()` based, mobile-first
- Sticky WA button always visible
- Sticky CTA bar appears after Section 4 on scroll-down
- LCP <2.5s, CLS <0.1, INP <200ms

---

## <a id="phase-3"></a>Phase 3 — SEO Money Pages

### Strategic Frame

**Money page principles (8 non-negotiable rules):**

1. Quick Answer box top (50–80 words) — featured snippet bait
2. Table of Contents wajib >2,500 words
3. Semantic headers (H1 with primary KW, H2 variants, H3 long-tail)
4. Numbers + year in headers ("Budget Outing Kantor Bandung 2026:...")
5. Tables for comparison content
6. In-page FAQ (10–15 Q&A) marked with FAQPage schema
7. Min 5 outbound internal links per page
8. Quarterly refresh for freshness signal

### 10 Money Pages — Master Matrix

| URL | Primary KW | Search Volume (est) | Word Count | Unique Angle |
|---|---|---|---|---|
| `/outing-kantor-bandung` | outing kantor bandung | 1,900/mo | 3,200 | The definitive guide |
| `/corporate-gathering-bandung` | corporate gathering bandung | 480/mo | 2,500 | Formal annual event |
| `/employee-gathering-bandung` | employee gathering bandung | 320/mo | 2,300 | HR-led, engagement focused |
| `/team-building-bandung` | team building bandung | 2,400/mo | 3,500 | Methodology depth |
| `/outbound-perusahaan-bandung` | outbound perusahaan bandung | 720/mo | 2,400 | Outdoor adventure tiers |
| `/company-retreat-bandung` | company retreat bandung | 110/mo | 2,200 | Strategic deep work |
| `/villa-gathering-bandung` | villa gathering bandung | 590/mo | 2,600 | Villa-specific venues |
| `/glamping-corporate-bandung` | glamping corporate bandung | 70/mo | 3,000 | Differentiator niche |
| `/leadership-retreat-jawa-barat` | leadership retreat jawa barat | 50/mo | 2,400 | Senior leadership dev |
| `/executive-offsite-bandung` | executive offsite bandung | 90/mo | 2,500 | Discreet C-suite |

**Total opportunity:** 6,800 primary + 15,000–20,000 long-tail = **22,000–27,000 monthly organic search**

### Common Section Templates (reusable)

1. Quick Answer Box (above-the-fold, 50–80 words)
2. Budget Breakdown Table (Conservative / Standard / Premium tiers)
3. Comparison Table (where relevant)
4. Sample Itinerary Block (2-3 variations per page)
5. Page-Specific FAQ (10-15 Q&A)
6. Trust Strip (mid-page, recurring)
7. Sticky CTA Bar (scroll-triggered)

### Anti-Cannibalization Rules

| Pair | Differentiation |
|---|---|
| outing-kantor vs corporate-gathering | Broader inclusive vs formal annual |
| employee-gathering vs corporate-gathering | HR-perspective vs company-perspective |
| team-building vs outbound | Indoor possible vs specifically outdoor |
| villa-gathering vs glamping | Comfort/premium vs unique nature |
| leadership-retreat vs executive-offsite | Development focus vs strategic focus |

### Internal Linking Matrix (10×10)

Each money page links to 3–4 other money pages (intra-cluster) + 1 service + 1 package + 1 case study + 2 FAQ pages.

### Content Production Roadmap

| Sprint | Week | Pages |
|---|---|---|
| 1 | 1–2 | outing-kantor, team-building (highest volume) |
| 2 | 3–4 | corporate-gathering, villa-gathering |
| 3 | 5–6 | employee-gathering, outbound-perusahaan |
| 4 | 7–8 | glamping-corporate, company-retreat |
| 5 | 9–10 | leadership-retreat, executive-offsite |

---

## <a id="phase-4"></a>Phase 4 — AEO + GEO Pages

### Strategic Frame

**The "Triple-Surface Win":** Setiap question answer harus capture:
1. Featured snippet (AEO)
2. PAA inclusion (AEO)
3. LLM citation (GEO)

### Entity Definition (canonical, deploy across surfaces)

> "Tour Bandung Corporate adalah unit specialized dari 7Summits Travel yang fokus pada B2B corporate outing, team building, dan executive offsite di Bandung dan Jawa Barat sejak 2018. 400+ events delivered, 92% repeat booking rate."

Deploy di: Homepage, About, schema markup, llms.txt, LinkedIn, Google Business Profile, Footer.

### FAQ Architecture — 3-Tier System

```
TIER 1: /faq (Master Hub)
TIER 2: /faq/[category] (7 categories)
TIER 3: In-page FAQ embeds (within money/service pages)
```

### Question Inventory (114 questions, 7 categories)

| Category | Q count |
|---|---|
| Budget & Investment | 24 |
| Logistics & Process | 18 |
| Comparison & Decision | 12 |
| Format & Programs | 20 |
| Location & Venue (Bandung) | 14 |
| Vendor Selection | 16 |
| Outcome & ROI | 10 |

### Semantic Answer Structure (3-Layer Pattern)

For each question:

**Layer 1 — Direct Answer (40-50 words)** — captures featured snippet
**Layer 2 — Context (50-80 words)** — captures PAA expansion
**Layer 3 — Detail (60-120 words)** — captures LLM citation depth + internal links

**Length sweet spots:**
- Featured snippet paragraph: 40-58 words
- Featured snippet list: 5-8 items
- PAA: 100-200 words
- LLM citation: 80-150 words with stats
- Voice: 25-35 words

### Snippet Type Matching

| Question pattern | Snippet target | Format |
|---|---|---|
| "Berapa harga..." | Paragraph | Direct number + range |
| "Apa saja..." | Bulleted list | Lead-in + 5-8 bullets |
| "Bagaimana cara..." | Numbered list | "X langkah:" + 4-7 steps |
| "Apa beda X vs Y..." | Table | 2 cols × 4-6 rows |
| "Apa itu..." | Definition | "X adalah ..." |

### Schema Strategy

Per FAQ page: `FAQPage` + `Question`/`Answer` + `BreadcrumbList` + `Organization` + `LocalBusiness`

For procedural: add `HowTo` schema
For voice: add `SpeakableSpecification`

### GEO-Specific Optimizations

1. **llms.txt at root** — TL;DR for AI crawlers
2. **Citation worthiness checklist** — specific numbers, named entities, date stamps, source attribution, original frameworks, structured data
3. **Original Named Frameworks** (citation magnets):
   - "5-Pillar Corporate Outing Design™"
   - "Bandung Outing Tier System™ (BOTS)"
   - "3-Phase Briefing Methodology"
   - "Outbound Risk Tier 1-2-3"
   - "Annual Gathering ROI Model"
4. **Stat inventory** — 400+ events, since 2018, 92% repeat, 6hr response, 60+ venues, 4+ years tenure
5. **Author/Editor pages** — E-E-A-T enhancement
6. **sameAs ecosystem** — LinkedIn + IG + YouTube + FB + Twitter + GMB

### AEO/GEO Measurement

- Featured snippet captures
- PAA appearances
- LLM brand mention rate (manual sampling 20 queries monthly)
- Referral traffic from chat.openai.com, perplexity.ai, etc.
- Branded search volume trend

---

## <a id="phase-5"></a>Phase 5 — Proposal Funnel

### Strategic Frame

**Mindset:** Proposal Funnel = **mutual qualification system**. Visitor qualify diri (ready/not ready), kita qualify mereka (fit/not fit).

### 3 Entry Modes

| Mode | URL | Visitor profile | Form complexity | Lead score |
|---|---|---|---|---|
| **Quick Quote** | `/proposal/quick-quote` | Researching | 4 fields | 30/100 |
| **Request Proposal** | `/proposal/request` | Ready to engage | 10 fields | 70/100 |
| **Book Consultation** | `/proposal/book-consultation` | Need briefing | 6 fields + slot | 85/100 |
| **WhatsApp direct** | wa.me link | Anti-form | Pre-filled msg | 50/100 |
| **Lead Magnet** | `/proposal/sample` | Soft entry | 2-3 fields | 20/100 |

### 7 Page Blueprints

1. `/proposal` — Funnel entrance (3-card mode selector)
2. `/proposal/request` — Full 10-field qualifying form (3-step multi-page)
3. `/proposal/quick-quote` — 4-field micro-form
4. `/proposal/book-consultation` — Form + slot picker (Calendly-style)
5. `/proposal/sample` — Lead magnet (PDF gated)
6. `/proposal/thank-you` — Mode-specific confirmation
7. `/proposal/track/[ref]` — Customer-facing status tracking

### Qualifying Form — 10 Fields (3 Steps)

**Step 1: "Tentang Tim Lo" (4 fields)**
- Company Name
- Industry
- Company Size (radio: Startup / SME / Mid-size / Enterprise)
- Your Role

**Step 2: "Detail Event" (5 fields)**
- Event Type (multi-select 10 options)
- Pax Estimation (slider)
- Budget Range per Pax (4 tiers + "Help me figure out")
- Duration Preference
- Preferred Location (multi-select 7 options)

**Step 3: "Timeline & Contact" (3 + optional)**
- Target Date (specific / quarter / flexible)
- Urgency Level (🔴 Urgent / 🟠 Standard / 🟢 Planning / ⚪ Just researching)
- Contact Info (name, work email, WA)
- Optional notes

### Smart Form Behaviors

1. Pax range adapts to Event Type
2. Budget tier adapts to Event Type
3. Date input adapts to Urgency
4. URL params pre-fill (e.g., from money page)
5. Real-time availability check

### Lead Scoring Algorithm

**Base score by source:**
- Book Consultation: 85
- Request Proposal: 70
- WhatsApp direct: 50
- Quick Quote: 30
- Lead Magnet: 20

**Qualifying modifiers (additive):**
- Industry = Tech/Banking/BUMN: +10
- Company Size ≥200: +10
- Role = Director/C-level: +10
- Budget = Premium/All-Out: +10
- Urgency = Urgent: +15
- Date specified: +5
- Notes filled: +5
- Corp domain email: +5
- WhatsApp filled: +5
- Multiple event types: -5
- Budget "help me figure out": -10

**Score tiers:**
| Score | Tier | Sales action |
|---|---|---|
| 90-100 | 🔥 HOT | Senior planner call within 1 hour |
| 70-89 | 🟠 WARM | Senior planner email within 6 hours |
| 50-69 | 🟡 MEDIUM | Standard planner email within 24 hours |
| 30-49 | 🟢 COOL | Automated nurture |
| <30 | ⚪ COLD | Newsletter only |

### Sales Handoff Rules

1. Returning customer → original account manager
2. Executive Offsite/Leadership → premium specialist planner
3. Glamping → outdoor specialist
4. 500+ pax annual → large-scale specialist
5. Urgent priority → most available senior
6. Default: round-robin

### Database Schema

```sql
-- See full schema in repo db/migrations/

CREATE TABLE leads (
  id UUID PRIMARY KEY,
  ref_code TEXT UNIQUE,
  source TEXT,
  full_name, work_email, whatsapp,
  company_name, industry, company_size, job_role,
  status TEXT,
  lead_score INT,
  priority TEXT,
  assigned_to UUID,
  -- audit fields
);

CREATE TABLE lead_qualifications (
  lead_id UUID,
  event_types TEXT[],
  pax_estimated INT,
  budget_tier TEXT,
  duration_preference TEXT,
  location_preferences TEXT[],
  target_date_specific DATE,
  urgency TEXT,
  additional_notes TEXT
);

CREATE TABLE lead_activities (
  lead_id UUID,
  activity_type TEXT,
  actor_id UUID,
  actor_type TEXT,
  details JSONB
);

CREATE TABLE lead_notes (...);
CREATE TABLE lead_tags (...);
CREATE TABLE consultation_slots (...);
```

### WhatsApp Conversion Flow

- Floating WA button sticky on every page
- Pre-filled context-aware messages per page
- 40-60% of high-ticket B2B leads in Indonesia start via WA
- SLA: first response ≤15 min during working hours
- Integration via Wati (recommended) or Twilio

### Status States (customer-facing)

```
submitted → under_review → drafting → internal_qa → sent → 
  ├ feedback_requested → revising → re-sent
  ├ approved → contract_phase → won
  ├ declined → archived
  └ no_response → followup_1 → followup_2 → cooled
```

---

## <a id="phase-6"></a>Phase 6 — Trust Architecture

### The 5 Layers of Trust (progressive)

1. **Aesthetic Trust** (5 sec) — design quality, photography, typography
2. **Social Trust** (20 sec) — logos, testimonials, named clients
3. **Proof Trust** (1-2 min) — case studies with specifics, numbers
4. **Process Trust** (3-5 min) — methodology, frameworks, team credentials
5. **Safety Trust** (Pre-commit) — contracts, insurance, force majeure

### 4 Authority Pillars

1. **Track Record** — "400+ events since 2018, largest 1,200 pax"
2. **Expertise** — Team page with senior bios, tenure, certifications
3. **Methodology** — Named frameworks (5-Pillar Design™, BOTS™, etc.)
4. **Recognition** — Awards, press mentions, named clients

### Premium Perception — Language Precision

| Generic ❌ | Premium ✅ |
|---|---|
| "kami menyediakan" | "kami design" / "kami architect" |
| "paket murah" | "paket tier foundation" |
| "promo spesial" | "early planning advantage" |
| "harga bersaing" | "investment-fair pricing" |
| "konsultasi gratis" | "complimentary strategy session" |
| "bisa custom" | "fully tailored" |

### 5 Anti-Price-War Strategies

1. **Reframe decision** — sell outcome, not outing
2. **Specialize, don't generalize** — B2B corporate only, Bandung only
3. **Show hidden cost of cheap** — educational content surfacing real risks
4. **ROI Justification Toolkit** — Excel calc, approval deck template, internal email
5. **Tier transparency** — show 4-tier system openly, let customer self-select

### Top 10 Objections + Responses

1. "Vendor murah Rp 1jt/pax. Kenapa kalian Rp 2.5jt+?" → Breakdown line-item transparency
2. "Boss kasih budget tipis." → Tier 1 Foundation starting Rp 1.5jt/pax
3. "Vendor sebelumnya gagal 500+ pax." → 1,200 pax track record
4. "Cuma butuh outing simple." → Tier system, no methodology push
5. "Vendor besar = factory feel." → Senior planner dedicated, no rotating freelancer
6. "Pax berubah mendekati H." → ±10% flex policy
7. "Hidden cost." → Detailed proposal, transparent invoice
8. "Force majeure handling." → Plan A & B + insurance + refund policy
9. "Decision maker belum yakin." → Champion toolkit (ROI deck, approval template)
10. "Kompetitor follow-up duluan." → Free briefing call, decide on substance not urgency

### Quarterly Content Commitments

- 1 deep case study
- 2 thought leadership articles
- 1 framework/methodology piece
- 3-5 refreshed testimonials
- 1 industry insight (data-driven)
- 2-3 venue spotlights

### Annual Flagship Content

- "Corporate Outing Trends Report 2026" (original data, citation magnet)
- "Bandung Corporate Venue Atlas" (gated guide)
- "State of Indonesian Employee Engagement" (annual study)

---

## <a id="phase-7"></a>Phase 7 — Custom CMS

### Stack

```
Frontend (public + admin):  Next.js 15 App Router
Database:                    Supabase (Postgres 17)
Storage:                     Supabase Storage (media-public, media-private)
Auth:                        Supabase Auth (magic link + Google OAuth)
Hosting:                     Vercel
UI:                          shadcn/ui (admin) + custom (public)
Validation:                  Zod + react-hook-form
Markdown:                    @uiw/react-md-editor
Email:                       Resend
WhatsApp:                    Wati
PDF:                         React PDF or Puppeteer
Image:                       Next.js Image + Supabase Storage transform
```

### Admin Panel IA

```
/admin
├── /admin/login
├── /admin (Dashboard)
├── /admin/leads (Phase 8)
├── /admin/content/* (10+ content types)
├── /admin/media
├── /admin/seo (global, pages, redirects, schema)
├── /admin/analytics
├── /admin/settings
└── /admin/users
```

### 5 User Roles

| Role | Scope |
|---|---|
| super_admin | Full control |
| content_admin | Content + media + SEO |
| sales_admin | Leads full CRUD, content read-only |
| marketing_admin | Content + leads view |
| viewer | Read-only |

### RLS Helper Functions

```sql
current_user_role() — returns user_role enum
is_admin() — boolean for admin tiers
can_edit_content() — content_admin or marketing_admin
can_manage_leads() — super_admin or sales_admin
```

### Database Schema (consolidated)

**Foundation:**
- `profiles` (extending auth.users)
- `audit_log` (universal action tracking)
- `site_settings` (singleton — branding, contact, social, SEO, schema)
- `media` (file metadata + Storage references)

**Content:**
- `services`, `packages` (with sample_itineraries JSONB)
- `case_studies` (with outcome_metrics JSONB, gallery JSONB)
- `insights` (markdown body, author FK)
- `faq_categories`, `faqs` (3-layer answers)
- `testimonials`, `clients` (logos), `team_members`
- `seo_pages` (money pages content)
- `press_mentions`, `awards`

**SEO/Tracking:**
- `redirects` (301 map)
- `page_views` (custom analytics)
- `analytics_daily` (materialized view)

### Admin UX Patterns

1. Auto-save every 30s + on blur
2. Live preview pane
3. Markdown editor with toolbar
4. Integrated media picker
5. Slug auto-gen from title
6. SEO real-time (character counts, snippet preview)
7. Schema validation pre-publish
8. Draft → Preview → Publish workflow
9. Version history (last 10) + rollback
10. Per-resource activity log

### Media Library

- Drag-and-drop upload, bulk upload + tag
- Search by filename, tags, alt
- Filter by type, date, uploader
- Replace image (maintains URL)
- In-browser crop/resize
- Auto WebP conversion via Supabase Storage transform

### SEO Module

- Global defaults (site name, meta description, OG image)
- Per-page overrides (Services, Packages, Insights)
- Schema editor (visual + JSON)
- Redirect manager (301 list)
- Sitemap config (priorities, exclusions)
- Robots.txt editor
- Snippet preview (Google SERP simulation)
- Real-time schema validation

### Analytics Module

- Self-hosted page_views ingestion
- Materialized view for daily aggregates
- Widgets: visitor trend, top pages, conversion funnel, lead source mix, AEO/GEO tracking
- Optional Plausible integration

### CMS Build Roadmap (8 weeks)

| Week | Deliverable |
|---|---|
| 1-2 | Foundation + Auth + Admin shell |
| 3-4 | Services & Packages CRUD with universal patterns |
| 5 | Case Studies, Insights, FAQ, Testimonials, Clients, Team |
| 6 | Media library full |
| 7 | SEO module |
| 8 | Analytics + Settings + Polish |

---

## <a id="phase-8"></a>Phase 8 — Lead Management System

### Strategic Frame

Not just "view leads" — **sales operating system**: auto-routing, smart prioritization, workflow automation, activity tracking, pipeline analytics, forecasting.

### Lead Dashboard Layouts

**1. Pipeline view (`/admin/leads`)** — column groups by priority (HOT/WARM/MEDIUM/COOL/ARCHIVED), filter, sort
**2. Kanban board (`/admin/leads/board`)** — drag-drop pipeline progression
**3. Lead detail (`/admin/leads/[id]`)** — tabs: Overview / Activity / Notes / Proposal / Files

### Auto-Routing Engine (server-side trigger on lead.insert)

**Rules in priority order:**
1. Returning customer → original account manager
2. Specialty match (Executive Offsite → premium specialist)
3. Industry match (Banking → vertical specialist)
4. Urgency override (Urgent → most available senior)
5. Round-robin fallback (by current workload)

### Workflow Automation

**Auto-actions:**
- Lead submitted → welcome email + planner Slack + WA (HOT only)
- Proposal sent → 3-day follow-up scheduled
- 3-day no response → auto WA: "Proposal udah lihat?"
- 7-day no response → auto email: "Last check, mau adjust?"
- 14-day no response → mark cooled, archive
- Priority HOT → Slack alert to head of sales

**Bulk actions:** reassign, status change, export CSV, add tag, send templated email

### Reporting Widgets

- New leads this week (WoW change)
- Pipeline value (estimated revenue)
- Conversion funnel (Submit → Briefing → Proposal → Won)
- Avg time-to-first-touch by tier
- Win rate by industry/source/size
- Lead source ROI
- Salesperson performance
- Lost reasons breakdown

### Search & Filter

- Full-text search (Postgres FTS index)
- Saved filters per user
- Common presets: "My HOT this week", "Banking pipeline", "Q4 events"

---

## <a id="phase-9"></a>Phase 9 — Future Scale Roadmap

### 4-Year Evolution

| Year | Focus |
|---|---|
| **Y1 (2026)** | Website + CMS + Lead Pipeline |
| **Y2 (2027)** | Sales CRM + Quotation Engine + Invoice/Payment + Customer Portal |
| **Y3 (2028)** | Trip Documentation + Guest Experience + Vendor Management |
| **Y4 (2029)** | Full Corporate Travel Management + Operations Dashboard |

### 9 Module Roadmap

| Module | Quarter | Key Capability |
|---|---|---|
| Sales Pipeline CRM | Y2 Q1 | Deal stages, forecasting, email sync |
| Quotation Engine | Y2 Q2 | Auto-quote from components, multi-version, e-signature |
| Invoice + Payment | Y2 Q3 | Auto-invoice, Xendit/Midtrans, milestone tracking |
| Customer Portal | Y2 Q4 | Self-service for clients, approval, briefing |
| Trip Documentation | Y3 Q1 | Live event ops dashboard, vendor contacts |
| Guest Experience | Y3 Q2 | Per-event microsites, polls, photo wall |
| Vendor Management | Y3 Q3 | Vendor portal, RFQ broadcast, scoring |
| Corporate Travel Mgmt | Y4 | Business trip bookings, policy enforcement |
| Operations Dashboard | Y4 | CEO/COO view, forecasting, AI insights |

### Technical Scaling Considerations

- **>100K leads/year:** Add Postgres read replicas
- **>1M media files:** CDN-front Supabase Storage
- **>10K concurrent users:** Dedicated Postgres or table partitioning
- **Multi-tenant readiness:** Add `tenant_id` for multi-city expansion

---

## <a id="dependencies"></a>Critical Dependencies (Phase 1-9)

| # | Need | Status | For Phase |
|---|---|---|---|
| 1 | Existing color palette (HEX) | ⏳ | All build phases — recoverable from git history |
| 2 | Logo files (SVG + PNG) | ⏳ | All build phases — recoverable from git |
| 3 | Real photos from Drive folder | ⏳ | Phase 2, 3, 6 visual sections |
| 4 | WhatsApp number | ⏳ | All CTAs |
| 5 | Real client logos (8-12) | ⏳ | Trust strips, /clients page |
| 6 | Real testimonials (6+ with permission) | ⏳ | Section 7, trust strips |
| 7 | Real case studies (3+ for launch) | ⏳ | Phase 6 trust architecture |
| 8 | Pricing tiers (Conservative/Standard/Premium actual) | ⏳ | Budget tables across pages |
| 9 | Venue list (60 partner venues) | ⏳ | Villa, glamping, retreat pages |
| 10 | Activity catalog (50+ activities) | ⏳ | Team building, outbound pages |
| 11 | Sample itineraries (12+) | ⏳ | All money pages need 2-3 each |
| 12 | Brand voice samples | ⏳ | Copy consistency |
| 13 | LinkedIn Company Page | ⏳ | sameAs ecosystem (Phase 4 GEO) |
| 14 | Google Business Profile verified | ⏳ | Local Pack + sameAs |
| 15 | IG, YouTube, Twitter accounts | ⏳ | sameAs ecosystem |
| 16 | Stats verification (400+ events, 92% repeat) | ⏳ | All trust claims |
| 17 | Team bios + photos | ⏳ | /team page, Phase 6 expertise pillar |
| 18 | Press strategy kickoff | ⏳ | Long-term entity authority |
| 19 | Press release boilerplate | ⏳ | Future PR distribution |
| 20 | Wati / Twilio account setup | ⏳ | WhatsApp automation Phase 5 |
| 21 | Resend / Postmark account | ⏳ | Email automation |
| 22 | Vercel account + domain config | ⏳ | Deployment |

---

## <a id="execution-roadmap"></a>Execution Roadmap (Build Phase)

### Foundation Sprint (Week 1-2)

- [ ] Recover existing assets from git history (colors, logo)
- [ ] Bootstrap Next.js 15 + TypeScript + Tailwind + App Router
- [ ] Setup Supabase project, env vars, RLS foundation
- [ ] Apply schema migrations (foundation + profiles + audit_log)
- [ ] Setup Supabase Auth (magic link + Google)
- [ ] Setup design system (color tokens, typography scale, components)

### Content Sprint (Week 3-4)

- [ ] Build homepage with all 10 sections (static structure first)
- [ ] Integrate Resend for transactional email
- [ ] Setup proposal form (multi-step) + database submit
- [ ] Setup `/proposal/track/[ref]` status page
- [ ] Wire WhatsApp button across site

### SEO Sprint (Week 5-7)

- [ ] Build SEO money page template
- [ ] Write content for Sprint 1 pages (outing-kantor, team-building)
- [ ] Implement schema markup framework
- [ ] Generate sitemap.xml + llms.txt
- [ ] Configure redirects (from corporatetourbdg.vercel.app)

### CMS Sprint (Week 8-11)

- [ ] Build admin shell (auth + layout + role guards)
- [ ] Implement universal CRUD pattern (Services first)
- [ ] Media library
- [ ] SEO module
- [ ] Roll out to all content types

### Lead Management Sprint (Week 12-13)

- [ ] Lead dashboard (pipeline + kanban + detail views)
- [ ] Auto-routing engine
- [ ] Workflow automation (auto-emails, follow-ups)
- [ ] Wati WhatsApp integration

### Polish + Launch Sprint (Week 14-15)

- [ ] Content fill (all money pages + initial FAQ + case studies)
- [ ] Trust assets (testimonials, logos, team page)
- [ ] Performance optimization (LCP, CLS, INP targets)
- [ ] Pre-launch QA + analytics setup
- [ ] Soft launch + monitor + iterate

**Estimated total:** 15 weeks (Q3 2026 launch)

---

## Document maintenance

- **Owner:** Project lead
- **Review cadence:** Quarterly
- **Last reviewed:** May 2026
- **Next review:** Aug 2026

Phases 1-9 finalized. Update this doc whenever scope/strategy shifts.
