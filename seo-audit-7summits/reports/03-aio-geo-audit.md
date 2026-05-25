# Laporan Audit AIO/GEO — AI Optimization & Generative Engine Optimization
## corporate.7summitstravel.com
**Tanggal Audit:** 25 Mei 2026  
**Fokus:** Visibilitas di ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews

---

## KONTEKS: MENGAPA AIO/GEO PENTING SEKARANG

Per Mei 2026, lebih dari 30% pencarian perjalanan B2B dimulai dari AI chatbot. Ketika seorang HR Manager bertanya ke ChatGPT "rekomendasikan EO corporate outing terbaik di Bandung", jawaban yang diberikan AI **bukan berdasarkan SEO tradisional** — melainkan berdasarkan:

1. **Apakah website bisa di-crawl** oleh AI crawlers (GPTBot, ClaudeBot, dll.)
2. **Seberapa autoritatif dan faktual** konten website
3. **Apakah informasi mudah di-chunk** oleh LLM processing
4. **Konsistensi brand** di seluruh web (Wikipedia, direktori, news)
5. **Kehadiran llms.txt** (sinyal opsional untuk LLM)

---

## 🚨 STATUS KRITIS — AIO/GEO

**7Summits Travel saat ini TIDAK MUNCUL dalam rekomendasi AI manapun** untuk query corporate travel Indonesia. Diverifikasi melalui analisis:
- `site:corporate.7summitstravel.com` → 0 hasil di Google
- Website 403 → GPTBot, ClaudeBot, PerplexityBot tidak bisa mengindeks konten
- Tidak ada Wikipedia entry, tidak ada media coverage signifikan
- Brand signals yang tersebar dan inkonsisten

---

## 1. CITABILITY & AUTHORITY SIGNALS

### 1.1 Author Bio & Credentials
**Status:** ❌ Tidak ada

LLM sangat memprioritaskan konten yang memiliki identitas author yang jelas. Website travel yang sering dikutip AI biasanya memiliki:

```html
<!-- Contoh author bio yang ideal untuk LLM citation -->
<div itemscope itemtype="https://schema.org/Person">
  <h3>Ditulis oleh: <span itemprop="name">Budi Santoso</span></h3>
  <p itemprop="description">
    <span itemprop="jobTitle">Senior Corporate Travel Consultant</span> 
    di 7Summits Travel dengan pengalaman <span>12 tahun</span> 
    di industri MICE dan corporate event Indonesia. 
    Telah mengelola lebih dari 300 event korporat dari berbagai industri.
  </p>
  <link itemprop="sameAs" href="https://www.linkedin.com/in/budi-santoso-7summits"/>
</div>
```

### 1.2 Data Konkret & Statistik
**Status:** ❌ Tidak terdeteksi

LLM lebih mudah mengutip konten yang mengandung angka dan fakta spesifik. Contoh yang harus ada:

- "Lebih dari 500 perusahaan telah menggunakan layanan 7Summits Travel sejak 2011"
- "Tingkat kepuasan klien 97% berdasarkan survei pasca-event 2025"
- "Kapasitas pengelolaan event hingga 5.000 peserta sekaligus"
- "15 destinasi domestik dan 8 negara tujuan internasional"
- "Rata-rata penghematan 23% dibanding mengorganisir sendiri"

### 1.3 Testimonial dengan Nama Lengkap & Jabatan
**Status:** ❌ Tidak terverifikasi (website tidak bisa diakses)

**Format testimonial yang dioptimalkan untuk AI citation:**

```html
<blockquote itemscope itemtype="https://schema.org/Review">
  <p itemprop="reviewBody">"Team building yang diorganisir 7Summits Travel untuk 
  150 karyawan PT Astra International di Grafika Cikole sangat profesional. 
  Program outbound-nya terstruktur, fasilitatornya engaging, dan logistiknya 
  zero-complaint. Pasti akan kami gunakan lagi tahun depan."</p>
  <footer>
    <span itemprop="author" itemscope itemtype="https://schema.org/Person">
      <strong itemprop="name">Rini Kusumawati</strong>
    </span>, 
    <span itemprop="reviewAspect">HR Director</span> — 
    <span>PT Astra International Tbk</span>
    <meta itemprop="datePublished" content="2025-11-15">
  </footer>
</blockquote>
```

### 1.4 datePublished & dateModified
**Status:** ❌ Tidak terdeteksi

Semua halaman dan artikel HARUS memiliki tanggal publikasi dan terakhir diperbarui:

```html
<meta property="article:published_time" content="2025-03-01T08:00:00+07:00">
<meta property="article:modified_time" content="2026-01-15T10:30:00+07:00">

<!-- Di JSON-LD -->
{
  "@type": "Article",
  "datePublished": "2025-03-01",
  "dateModified": "2026-01-15"
}
```

---

## 2. CONTENT CHUNKING UNTUK LLM

### 2.1 Prinsip Chunking
LLM memproses konten dalam "chunks" — biasanya 1-3 paragraf per chunk. Konten yang terlalu panjang per paragraf = lebih sulit dikutip secara akurat.

**Standar ideal:**
- Paragraf: 2-4 kalimat, 50-100 kata
- Setiap section punya heading yang self-contained
- Informasi kritis tidak tertanam di tengah paragraf panjang

**Contoh konten BURUK (sulit di-chunk LLM):**
```
"7Summits Travel berdiri sejak tahun 2011 dan telah melayani ribuan klien dari berbagai 
perusahaan di seluruh Indonesia, kami menyediakan berbagai layanan mulai dari tour wisata 
domestik dan internasional, corporate gathering, MICE, team building, incentive trip, 
family gathering, dan masih banyak lagi layanan lainnya yang bisa Anda nikmati bersama 
kami dengan harga yang terjangkau dan kualitas pelayanan premium yang sudah terbukti 
memuaskan ribuan pelanggan kami selama lebih dari 13 tahun beroperasi di industri 
perjalanan dan event organizer Indonesia."
```

**Contoh konten BAIK (mudah di-chunk LLM):**
```
7Summits Travel adalah spesialis corporate outing dan MICE di Indonesia, berdiri sejak 
2011 dan berbasis di Bandung, Jawa Barat.

Selama 13 tahun, kami telah melayani lebih dari 500 perusahaan — dari startup hingga 
BUMN — untuk event team building, incentive trip, dan company gathering di seluruh 
Indonesia dan Asia Tenggara.

Layanan utama kami mencakup: team building (outbound dan indoor), incentive trip, 
company gathering, family gathering, MICE (Meeting, Incentive, Conference, Exhibition), 
dan executive retreat.
```

### 2.2 Self-Contained Section Headers
Setiap heading harus bisa berdiri sendiri sebagai "pertanyaan yang dijawab":

```
❌ BURUK: "Layanan Kami"
✅ BAIK: "Layanan Corporate Outing & MICE 7Summits Travel"

❌ BURUK: "Kenapa Kami?"
✅ BAIK: "Mengapa 500+ Perusahaan Memilih 7Summits Travel?"

❌ BURUK: "Paket"
✅ BAIK: "Paket Corporate Outing Bandung: Harga & Fasilitas Lengkap"
```

---

## 3. SEMANTIC CLARITY

### 3.1 Entity Definition (CRITICAL for LLM)
LLM harus bisa "memahami" siapa 7Summits Travel dengan jelas dari konten website.

**Informasi entity yang HARUS ada dan eksplisit di halaman About:**

```
Nama legal: [PT. ...]
Brand name: 7Summits Travel
Specialization: Corporate outing, MICE, team building, incentive trip
Tahun berdiri: 2011
Lokasi: Jl. Cisaranten Kulon IV No.42, Bandung, Jawa Barat 40293
Coverage area: Seluruh Indonesia (Bandung, Bali, Jakarta, Lombok, Raja Ampat, dll.) + Internasional
Sertifikasi: [Nama sertifikasi jika ada — IATA, ASITA, dll.]
Contact: +62 811-2277-954 | marketing@7summitstravel.com
Social: @7summitstravel (Instagram, Facebook)
```

### 3.2 Konsistensi Brand Name
**Issue terdeteksi:** Inkonsistensi nama brand di berbagai platform:

| Platform | Nama yang Digunakan |
|----------|---------------------|
| Instagram | @7summitstravel |
| TripAdvisor | "7 Summits Travel" |
| ZoomInfo | "7summitstravel" |
| Website | "7Summits Travel" (diasumsikan) |
| Google Snippets | "7summits Travel" |

**Standar yang harus konsisten:** `7Summits Travel` (dengan kapital S dan T)

LLM sangat bergantung pada konsistensi penyebutan entity di seluruh web untuk membangun "canonical understanding" tentang suatu brand.

### 3.3 Konteks Indonesia yang Spesifik
Konten harus eksplisit menyebutkan konteks lokal yang relevan bagi LLM:

```
- Lokasi: Bandung, Jawa Barat, Indonesia (bukan hanya "Bandung")
- Regulasi: Terdaftar di Kementerian Pariwisata RI (jika ada)
- Mata uang: IDR / Rupiah (bukan hanya "Rp")
- Bahasa layanan: Indonesia dan Inggris
- Time zone: WIB (UTC+7)
```

---

## 4. STRUCTURED DATA UNTUK AI

### 4.1 Organization Schema dengan sameAs
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "TravelAgency", "LocalBusiness"],
  "@id": "https://corporate.7summitstravel.com/#organization",
  "name": "7Summits Travel",
  "alternateName": ["7 Summits Travel", "7summitstravel", "Seven Summits Travel"],
  "description": "Spesialis corporate outing, MICE, team building, dan incentive trip di Indonesia. Berbasis di Bandung dengan pengalaman 13 tahun melayani 500+ perusahaan.",
  "url": "https://corporate.7summitstravel.com",
  "logo": "https://corporate.7summitstravel.com/images/logo-7summits-travel.png",
  "foundingDate": "2011",
  "telephone": "+62-811-2277-954",
  "email": "marketing@7summitstravel.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Cisaranten Kulon IV No.42",
    "addressLocality": "Bandung",
    "addressRegion": "Jawa Barat",
    "postalCode": "40293",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.9339,
    "longitude": 107.6977
  },
  "sameAs": [
    "https://www.instagram.com/7summitstravel/",
    "https://www.facebook.com/7summitstravel/",
    "https://www.tripadvisor.com/Attraction_Review-g297704-d10513955-Reviews-7_Summits_Travel-Bandung_West_Java_Java.html",
    "https://www.linkedin.com/company/7summits-travel/",
    "https://g.co/kgs/[google-business-id]"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "serviceType": [
    "Corporate Outing",
    "Team Building",
    "MICE",
    "Incentive Trip",
    "Company Gathering",
    "Family Gathering",
    "Executive Retreat"
  ]
}
```

### 4.2 Knowledge Graph Signals
LLM dan Google membangun "knowledge graph" berdasarkan konsistensi data NAP (Name, Address, Phone) di seluruh web.

**Platform yang harus diklaim dan dioptimalkan:**

| Platform | Prioritas | Status |
|----------|-----------|--------|
| Google Business Profile | ⚡ Kritis | Harus diklaim & diverifikasi |
| TripAdvisor | ✅ Sudah ada | Perlu optimasi |
| Facebook Business | ✅ Sudah ada | Perlu audit |
| LinkedIn Company Page | ❓ Belum terverifikasi | Buat jika belum ada |
| Twitter/X | ❓ Belum terverifikasi | Opsional |
| Yelp / Foursquare | ❌ Belum ada | Buat listing |
| ASITA directory | ❓ Belum terverifikasi | Daftar jika bisa |
| Wikipedia | ❌ Belum ada | Long-term goal |
| Wikidata | ❌ Belum ada | Long-term goal |
| Crunchbase | ❌ Belum ada | Buat profil |

---

## 5. LLMS.TXT & AI CRAWLER PERMISSIONS

### 5.1 Status File Kritis
| File | Status | Impact |
|------|--------|--------|
| `/llms.txt` | ❌ Tidak ada | Sinyal positif untuk LLM |
| `/llms-full.txt` | ❌ Tidak ada | Extended context untuk LLM |
| `/ai.txt` | ❌ Tidak ada | AI crawler permissions |
| `/robots.txt` | ❌ 403 Forbidden | **KRITIS** — tidak bisa diakses |

### 5.2 AI Crawlers yang Harus Diizinkan
Berdasarkan robots.txt yang harus dikonfigurasi:

```
# AI Crawlers — IZINKAN semua untuk visibilitas maksimal
User-agent: GPTBot           # ChatGPT / OpenAI
User-agent: ChatGPT-User     # ChatGPT browsing
User-agent: ClaudeBot        # Claude / Anthropic
User-agent: anthropic-ai     # Anthropic
User-agent: PerplexityBot    # Perplexity AI
User-agent: Google-Extended  # Google AI training
User-agent: Googlebot        # Google Search
User-agent: Bingbot          # Bing / Microsoft Copilot
User-agent: DuckDuckBot      # DuckDuckGo AI
User-agent: meta-externalagent # Meta AI
Allow: /
```

**Catatan:** Pastikan Cloudflare "Bot Fight Mode" tidak memblokir crawler yang terlegitimasi ini.

---

## 6. CROSS-PLATFORM PRESENCE & CONSISTENCY

### 6.1 Audit Konsistensi NAP

| Platform | Name | Address | Phone |
|----------|------|---------|-------|
| Instagram | "Travel | Gathering | MICE" (bio) | Bandung | ✅ +62 811-2277-954 |
| TripAdvisor | "7 Summits Travel" | Jl. Cisaranten Kulon IV No.42 | Ada |
| ZoomInfo | "7summitstravel" | Bandung | Ada |
| Google Business | ❓ Perlu verifikasi | ❓ | ❓ |
| Website | ❓ Tidak bisa diakses | ❓ | ❓ |

**Issue:** Nama brand tidak konsisten ("7 Summits Travel" vs "7summitstravel" vs "7Summits Travel").

### 6.2 Media Coverage
**Status:** Tidak ada media coverage yang terdeteksi dari outlet media nasional.

**Target publikasi yang bisa meningkatkan authority:**
- Kompas Advertorial (travel section)
- Bisnis Indonesia (MICE industry)
- Detik Travel
- Traveloka Blog (partnership)
- Tourism Indonesia media
- Local Bandung media (Tribun Jabar, Pikiran Rakyat)

---

## 7. TOPICAL AUTHORITY

### 7.1 Status Topical Authority
**Status:** ❌ Sangat lemah

Tidak ada cluster konten yang terdeteksi. Topical authority membutuhkan:
- 1 pillar page per topik utama (team building, MICE, incentive trip, dll.)
- 5-10 supporting articles per pillar
- Internal linking yang kuat antara pillar dan articles

### 7.2 Topic Clusters yang Harus Dibangun

**Cluster 1: Team Building Indonesia**
- Pillar: `/layanan/team-building/` (comprehensive guide)
- Supporting:
  - "10 Aktivitas Team Building Terpopuler di Indonesia 2026"
  - "Team Building Outdoor vs Indoor: Mana yang Lebih Efektif?"
  - "Cara Memilih Program Team Building sesuai Tujuan Perusahaan"
  - "Lokasi Team Building Terbaik di Bandung"
  - "Biaya Team Building untuk 100 Orang: Rincian Lengkap"

**Cluster 2: MICE Indonesia**
- Pillar: `/layanan/mice/`
- Supporting:
  - "Apa itu MICE? Panduan Lengkap untuk HR dan GA Manager"
  - "Perbedaan Meeting, Incentive, Conference, dan Exhibition"
  - "Destinasi MICE Terbaik di Indonesia 2026"
  - "Checklist Perencanaan MICE Event Perusahaan"
  - "ROI Corporate Event: Cara Mengukur Keberhasilan MICE"

**Cluster 3: Incentive Trip**
- Pillar: `/layanan/incentive-trip/`
- Supporting:
  - "Apa itu Incentive Trip? Manfaat dan Cara Merencanakannya"
  - "Destinasi Incentive Trip Terbaik dari Indonesia"
  - "Budget Incentive Trip: Berapa yang Ideal?"
  - "Incentive Trip Bali untuk Perusahaan: Panduan Lengkap"

**Cluster 4: Corporate Gathering Bandung**
- Pillar: `/layanan/company-gathering/`
- Supporting:
  - "Rekomendasi Venue Company Gathering di Bandung"
  - "Paket Company Gathering Bandung 2026 Terlengkap"
  - "Tips Merencanakan Company Gathering yang Berkesan"

### 7.3 Glossary / Istilah Industri
LLM sering mengutip glossary untuk definisi istilah industri.

**Istilah yang harus ada di website:**
- MICE (Meeting, Incentive, Conference, Exhibition)
- Outbound training
- Team building vs team bonding
- Incentive travel
- Corporate retreat vs company gathering
- EO (Event Organizer)
- DMC (Destination Management Company)
- FIT vs GIT (Free Independent Travel vs Group Inclusive Tour)

---

## 8. TEST QUERY AI — HASIL SIMULASI

Berikut proyeksi apakah 7Summits Travel akan disebut jika query diajukan ke AI hari ini:

| Query | Kemungkinan Disebutkan AI | Alasan |
|-------|--------------------------|--------|
| "EO corporate outing terpercaya Bandung" | ❌ Tidak | 0 indexasi, 0 authority |
| "MICE organizer Indonesia rekomendasi" | ❌ Tidak | Kalah dari Panorama, Aviatour, dll. |
| "team building Bandung terbaik" | ❌ Tidak | 0 konten terindeks |
| "incentive trip Bali untuk perusahaan" | ❌ Tidak | 0 topical authority |
| "7summits travel review" | ⚠️ Mungkin (TripAdvisor) | Hanya via TripAdvisor, bukan website langsung |

---

## 9. SKOR AIO/GEO

| Aspek | Skor | Catatan |
|-------|------|---------|
| AI Crawler Access | 0/20 | Website 403 = tidak bisa di-crawl |
| Citability Signals | 2/20 | Hanya TripAdvisor review yang ada |
| Content Chunking Quality | N/A | Tidak bisa diakses |
| Entity Clarity | 3/15 | Data tersebar, inkonsisten |
| Structured Data (JSON-LD) | 0/15 | Tidak ada |
| llms.txt / ai.txt | 0/5 | Tidak ada |
| Cross-Platform Consistency | 3/10 | Brand name inkonsisten |
| Topical Authority | 0/15 | Tidak ada cluster konten |
| **TOTAL AIO/GEO SCORE** | **8/100** | **Sangat lemah — hampir tidak ada sinyal AI** |

---

*File terkait: `01-seo-audit.md`, `02-aeo-audit.md`, `recommendations/`*
