# Technical Roadmap 90 Hari
## corporate.7summitstravel.com
**Start:** Juni 2026

---

## WEEK 1–2: CRITICAL FIXES (Minggu 1–2 Juni)

### Tujuan: Buka aksesibilitas website ke dunia

#### Hari 1-2: Perbaiki 403 Forbidden

**Tugas:**
```
☐ Identifikasi penyebab 403:
   - Cek Cloudflare Dashboard → Security → WAF → Firewall Rules
   - Cek server config (nginx.conf / .htaccess / apache2.conf)
   - Test: curl -I https://corporate.7summitstravel.com
   
☐ Implementasi robots.txt:
   Konten:
   User-agent: *
   Allow: /
   
   User-agent: Googlebot
   Allow: /
   
   User-agent: GPTBot
   Allow: /
   
   User-agent: ClaudeBot
   Allow: /
   
   User-agent: PerplexityBot
   Allow: /
   
   User-agent: Google-Extended
   Allow: /
   
   Sitemap: https://corporate.7summitstravel.com/sitemap.xml

☐ Generate & upload sitemap.xml
☐ Test akses via browser incognito (tanpa cache)
☐ Test via: https://search.google.com/test/mobile-friendly
```

**KPI:** Website bisa diakses → Response 200 OK

---

#### Hari 3-5: Setup Monitoring & Analytics

```
☐ Daftar Google Search Console (GSC)
   - Verifikasi ownership
   - Submit sitemap
   - Request indexing homepage

☐ Setup Google Analytics 4 (jika belum ada)
   - Pasang GA4 tag via Google Tag Manager
   - Konfigurasi conversion goals (form submission, phone click, WhatsApp click)

☐ Setup Bing Webmaster Tools
   - Submit sitemap ke Bing juga

☐ Klaim Google Business Profile
   - Verifikasi listing
   - Lengkapi semua informasi

☐ Daftar Google Search Console untuk 7summitstravel.com dan tourbandung.co.id
   (semua property yang berkaitan)
```

---

#### Hari 5-7: Basic On-Page Fixes

```
☐ Audit semua title tags — pastikan:
   - Panjang 50-60 karakter
   - Unique per halaman  
   - Mengandung primary keyword
   - Diakhiri "– 7Summits Travel"

☐ Audit semua meta descriptions — pastikan:
   - Panjang 140-160 karakter
   - Mengandung CTA
   - Unique per halaman

☐ Tambah canonical tag di semua halaman:
   <link rel="canonical" href="[URL halaman]">

☐ Tambah Open Graph tags di semua halaman:
   <meta property="og:title" content="[title]">
   <meta property="og:description" content="[desc]">
   <meta property="og:image" content="[img 1200x630]">
   <meta property="og:url" content="[url]">
   <meta property="og:type" content="website">

☐ Tambah Twitter Card tags:
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="[title]">
   <meta name="twitter:description" content="[desc]">
   <meta name="twitter:image" content="[img]">
```

---

## MONTH 1: FOUNDATION (Juni 2026)

### Tujuan: Bangun struktur SEO yang kuat

#### Minggu 3-4: Schema Markup Implementation

```
☐ Pasang Organization + TravelAgency schema (sitewide)
   → Gunakan template dari 02-schema-recommendations.md

☐ Pasang LocalBusiness schema (homepage)

☐ Pasang BreadcrumbList schema (semua halaman interior)

☐ Pasang Service schema (semua halaman layanan)

☐ Pasang FAQPage schema (homepage + halaman layanan utama)

☐ Validasi via Google Rich Results Test:
   https://search.google.com/test/rich-results
```

#### Minggu 3: Optimasi Kecepatan

```
☐ Audit kecepatan via Google PageSpeed Insights
   Target: LCP < 2.5s, CLS < 0.1, INP < 200ms

☐ Optimasi gambar:
   - Konversi semua gambar ke WebP
   - Kompresi: max 100KB untuk gambar konten, max 200KB untuk hero
   - Tambah dimensi (width/height) di semua <img>
   - Pastikan hero image di-preload:
     <link rel="preload" as="image" href="/hero.webp">
   - Tambah loading="lazy" untuk gambar below-the-fold

☐ Optimasi web fonts:
   - Preconnect ke font CDN:
     <link rel="preconnect" href="https://fonts.googleapis.com">
   - Font-display: swap

☐ Minifikasi CSS & JavaScript

☐ Enable Gzip/Brotli compression di server

☐ Implementasi caching headers (Cache-Control)
```

#### Minggu 4: Content Structure

```
☐ Audit semua H1 — pastikan:
   - Satu H1 per halaman
   - H1 mengandung keyword utama
   - H1 menarik dan human-friendly

☐ Perbaiki heading hierarchy:
   H1 → H2 → H3 (tidak ada lompatan)

☐ Tambah internal links:
   - Homepage → semua halaman layanan (min 6 link)
   - Setiap layanan → paket terkait
   - Footer sitemap mencakup semua layanan

☐ Perbaiki alt text semua gambar:
   - Deskriptif dan mengandung keyword natural
   - Tidak keyword stuffing

☐ Buat halaman 404 custom yang user-friendly
   dengan link ke homepage dan layanan utama
```

---

## MONTH 2: OPTIMIZATION (Juli 2026)

### Tujuan: Bangun topical authority dan mulai muncul di SERP

#### Content Development (Prioritas)

```
☐ Buat 4 Pillar Pages (masing-masing 3.000+ kata):
   Week 1: /layanan/team-building/
   Week 2: /layanan/mice/
   Week 3: /layanan/incentive-trip/
   Week 4: /layanan/company-gathering/

☐ Buat Halaman FAQ komprehensif:
   - Minimum 30 pertanyaan (gunakan list di 03-content-strategy.md)
   - Implementasi FAQPage schema
   - Kelompokkan per kategori (biaya, layanan, proses, destinasi)

☐ Buat 8 Supporting Articles (2 per cluster):
   - Setiap artikel 1.000–2.000 kata
   - Format AI-friendly (gunakan template di 03-content-strategy.md)
   - Masing-masing dengan schema Article

☐ Update halaman About dengan:
   - Angka konkret: 13 tahun, 500+ klien, X+ event
   - Timeline/history singkat perusahaan
   - Foto tim (dengan nama & jabatan)
   - Author bio team senior
```

#### AIO/GEO Optimization

```
☐ Buat dan upload /llms.txt
   (gunakan template dari 04-llms-txt-template.md)

☐ Buat dan upload /llms-full.txt

☐ Tambah datePublished & dateModified di semua konten

☐ Tambah author bio di semua artikel

☐ Perbaiki testimonial — pastikan ada:
   - Nama lengkap
   - Jabatan
   - Nama perusahaan
   - Tanggal event
   - Foto (jika izin)
   - Schema Review

☐ Tambah data konkret di semua halaman layanan:
   - Jumlah klien yang dilayani
   - Kapasitas minimum/maksimum
   - Harga range
   - Durasi event
```

#### Off-Page (Bulan 2)

```
☐ Daftarkan ke direktori bisnis:
   - ASITA (Asosiasi Perusahaan Perjalanan Wisata Indonesia)
   - GIATA (Global Integrated Airline Travel Agent)
   - Foursquare Business
   - Yelp Indonesia
   - IndoTravel directory
   - TourTravelWorld.com
   - Crunchbase

☐ Optimasi TripAdvisor listing:
   - Perbarui deskripsi dengan keyword
   - Upload minimum 20 foto berkualitas
   - Hubungi klien lama untuk minta review
   - Respond semua review yang ada

☐ Optimasi Google Business Profile:
   - Update semua informasi
   - Tambah produk/layanan
   - Upload foto secara rutin (weekly)
   - Aktifkan Google Posts untuk promosi

☐ LinkedIn Company Page:
   - Buat/klaim halaman perusahaan
   - Update semua informasi
   - Mulai posting konten mingguan
```

---

## MONTH 3: AUTHORITY BUILDING (Agustus 2026)

### Tujuan: Bangun backlinks berkualitas dan presence di AI

#### Content Authority

```
☐ Selesaikan 16 supporting articles total
   (8 dari bulan 2 + 8 baru di bulan 3)

☐ Buat Glossary Page (/glossary/):
   - 30+ istilah industri
   - Setiap istilah: nama, definisi, konteks, contoh
   
☐ Buat Destination Pages:
   /destinasi/bandung/
   /destinasi/bali/
   /destinasi/lombok/
   /destinasi/jakarta/

☐ Buat Portfolio/Case Study Page:
   - Minimum 5 case study dengan nama perusahaan (jika diizinkan)
   - Format: Challenge → Solution → Result
   - Include foto event
```

#### Link Building

```
☐ Guest Post Campaign:
   - Pitch 10 artikel ke media travel/bisnis Indonesia:
     * Detik Travel
     * Kompas Travel
     * Tribun Jabar
     * MICE Indonesia magazine
     * HR Indonesia media
   - Topik: "Tren Corporate Outing 2026", "Panduan MICE untuk HR", dll.

☐ Partnership Content:
   - Dinas Pariwisata Jawa Barat (konten destinasi Bandung)
   - Venue/hotel Bandung (cross-link)
   - Vendor partner (fotografi, katering, AV)

☐ Press Release:
   - "7Summits Travel Rayakan 15 Tahun Melayani Corporate Indonesia"
   - "7Summits Travel Luncurkan Layanan Incentive Trip International 2026"
   - Distribusi ke: Antara, Bisnis.com, Kontan

☐ Minta Backlink dari:
   - Klien yang punya website (dengan ijin)
   - Vendor/partner yang sudah ada hubungan bisnis
   - Asosiasi industri (ASITA, HPI)
```

#### AI Optimization (Final)

```
☐ Monitor AI mentions:
   - Test query di ChatGPT, Claude, Perplexity mingguan
   - Target: muncul dalam jawaban untuk 3+ query brand
   
☐ Update llms.txt dengan konten yang sudah ada

☐ Verifikasi semua schema valid via GSC → Rich Results Report

☐ Monitor Google Search Console:
   - Impressions, clicks, CTR, average position
   - Identifikasi keyword yang mulai muncul
   - Optimasi halaman yang punya impression tapi CTR rendah

☐ Review dan iterasi semua konten berdasarkan data GSC
```

---

## KPI & TARGETS

| Metrik | Baseline (Juni W1) | Target (Agustus W4) |
|--------|-------------------|---------------------|
| Halaman terindeks Google | 0 | 50+ |
| Organic impressions/bulan | 0 | 10.000+ |
| Organic clicks/bulan | 0 | 500+ |
| Average position | - | < 30 untuk target keyword |
| Core Web Vitals | Tidak terukur | LCP <2.5s, CLS <0.1 |
| Schema markup | 0 | 100% halaman utama |
| Backlinks baru | 0 | 30+ |
| Review Google/TripAdvisor | Ada tapi belum dioptimasi | 50+ review |
| AI mentions | 0 | 3+ query menghasilkan mention |

---

## TOOLING YANG DIBUTUHKAN

| Tool | Kegunaan | Biaya |
|------|---------|-------|
| Google Search Console | Monitor indexing & performance | Gratis |
| Google Analytics 4 | Traffic analytics | Gratis |
| Google PageSpeed Insights | Core Web Vitals | Gratis |
| Google Rich Results Test | Validasi schema | Gratis |
| Bing Webmaster Tools | Bing indexing | Gratis |
| Ahrefs / Semrush | Keyword research, backlink | ~$99-129/bulan |
| Screaming Frog | Technical SEO crawl | £149/tahun |
| Canva Pro | Buat gambar blog 1200x630 | ~$13/bulan |

**Total estimasi tools berbayar: ~Rp 1.800.000–2.500.000/bulan**

---

## SIAPA YANG MENGERJAKAN?

| Task | PIC | Waktu/Minggu |
|------|-----|-------------|
| Technical fixes (403, schema, speed) | Developer | 10 jam |
| Konten artikel | Content Writer | 15 jam |
| Google Business Profile | Marketing | 2 jam |
| Monitoring & reporting | SEO Analyst | 3 jam |
| Link building outreach | Marketing | 5 jam |

**Alternatif:** Jika tidak ada tim internal, outsource ke agensi SEO lokal Bandung dengan budget Rp 5–15 juta/bulan tergantung scope.
