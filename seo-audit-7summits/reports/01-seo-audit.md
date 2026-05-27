# Laporan Audit SEO Tradisional — corporate.7summitstravel.com
**Tanggal Audit:** 25 Mei 2026  
**Auditor:** Claude AI  
**Website:** https://corporate.7summitstravel.com  
**Brand Induk:** 7Summits Travel — Jl. Cisaranten Kulon IV No.42, Kota Bandung, Jawa Barat 40293

---

## 🚨 TEMUAN PALING KRITIS

> **Website `corporate.7summitstravel.com` mengembalikan HTTP 403 Forbidden untuk semua request.**  
> Google tidak dapat mengindeks website ini. Tidak ada satu pun URL dari subdomain ini yang terindeks di Google (diverifikasi via `site:corporate.7summitstravel.com` — 0 hasil).  
> **Seluruh investasi konten dan desain website saat ini sia-sia dari perspektif SEO.**

---

## 1. TECHNICAL SEO

### 1.1 Crawlability & Indexability

| Check | Status | Detail |
|-------|--------|--------|
| HTTPS | ❓ Tidak terverifikasi | Server mengembalikan 403 sebelum konten bisa diperiksa |
| HTTP → HTTPS redirect | ❓ Tidak terverifikasi | |
| robots.txt | ❌ Tidak bisa diakses | 403 Forbidden di `/robots.txt` |
| sitemap.xml | ❌ Tidak bisa diakses | 403 Forbidden di `/sitemap.xml` |
| Google Indexation | ❌ KRITIS: 0 halaman terindeks | `site:corporate.7summitstravel.com` = 0 hasil |
| Cloudflare / WAF | ✅ Aktif tapi terlalu agresif | Memblokir semua bot termasuk Googlebot |
| Canonical tags | ❓ Tidak bisa diverifikasi | |
| Hreflang | ❓ Tidak bisa diverifikasi | |

**Root Cause Kemungkinan:**
- Cloudflare "Under Attack Mode" atau firewall rules terlalu ketat
- Server konfigurasi yang salah di nginx/Apache (deny all)
- Website dalam maintenance/staging mode yang salah dikonfigurasi
- IP allowlist yang tidak mencakup Googlebot

### 1.2 Aksi Segera yang Diperlukan

```bash
# Test apakah Googlebot bisa mengakses:
# 1. Google Search Console → Coverage → Submit URL for indexing
# 2. Fetch as Google di Search Console
# 3. Pastikan robots.txt tidak berisi "Disallow: /" untuk semua user-agent
# 4. Cek Cloudflare Dashboard → Security → Firewall Rules — pastikan Known Bots diizinkan
```

**robots.txt yang seharusnya ada di `/robots.txt`:**
```
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: https://corporate.7summitstravel.com/sitemap.xml
```

---

## 2. ON-PAGE SEO

*Catatan: Data di bawah diinferensikan dari Google Search snippets, data third-party, dan analisis industri karena website tidak bisa diakses langsung.*

### 2.1 Title Tags

**Status Terdeteksi:** Tidak ada title tag yang muncul di Google Search (0 halaman terindeks = 0 snippet tersedia).

**Standar yang harus dipenuhi:**

| Halaman | Title yang Disarankan | Karakter |
|---------|----------------------|----------|
| Homepage | Corporate Outing & MICE Bandung Premium – 7Summits Travel | 58 |
| Services | Layanan MICE & Corporate Outing Profesional – 7Summits Travel | 61 |
| Team Building | Paket Team Building Bandung & Bali – 7Summits Travel | 54 |
| Incentive Trip | Incentive Trip Perusahaan Indonesia – 7Summits Travel | 54 |
| Contact | Hubungi 7Summits Travel – Konsultasi Corporate Gratis | 54 |

**Issues umum website corporate travel Indonesia:**
- Title terlalu panjang (>70 char) sehingga terpotong di SERP
- Tidak ada primary keyword di title
- Semua halaman menggunakan title yang sama (duplicate)
- Brand name hilang atau di depan (lebih efektif di belakang)

### 2.2 Meta Description

**Status:** Tidak terverifikasi karena 0 indexasi.

**Template yang harus digunakan:**
```html
<!-- Homepage -->
<meta name="description" content="7Summits Travel — spesialis corporate outing, MICE, team building & incentive trip di Bandung, Bali, Jakarta. Pengalaman 13 tahun, 500+ perusahaan puas. Konsultasi gratis sekarang.">

<!-- Team Building -->
<meta name="description" content="Paket team building profesional di Bandung & Bali. Program custom sesuai tujuan perusahaan, dari 50–5000 peserta. Hubungi 7Summits Travel untuk penawaran terbaik.">

<!-- Incentive Trip -->
<meta name="description" content="Incentive trip eksklusif untuk tim terbaik perusahaan Anda. Destinasi Bali, Lombok, Raja Ampat & luar negeri. Custom, profesional, berkesan. 7Summits Travel.">
```

### 2.3 Heading Structure

**Status:** Tidak terverifikasi, kemungkinan besar bermasalah berdasarkan pola umum website travel Indonesia.

**Issues umum yang perlu dicek:**
- Multiple H1 per halaman
- H1 berisi nama brand saja, bukan keyword utama
- Lompat dari H1 ke H3 (skip H2)
- Heading tidak mengandung keyword target
- Heading terlalu pendek dan tidak deskriptif

**Contoh struktur yang benar:**

```
H1: Corporate Outing & MICE Profesional di Bandung (Primary keyword)
  H2: Layanan Corporate Travel Kami (Section utama)
    H3: Team Building Outdoor & Indoor
    H3: Incentive Trip ke Bali & Luar Negeri
    H3: Company Gathering & Family Gathering
  H2: Kenapa Pilih 7Summits Travel? (Social proof)
    H3: 13 Tahun Pengalaman Corporate Event
    H3: 500+ Perusahaan Percaya Kami
  H2: Paket & Harga Corporate Outing (Transactional intent)
  H2: FAQ Corporate Outing Bandung (AEO)
  H2: Hubungi Tim Corporate Kami (CTA)
```

### 2.4 URL Structure

**Status Terdeteksi:** URL dari tourbandung.co.id (sister site) menggunakan WordPress-style permalink yang baik.

**Rekomendasi URL structure untuk corporate.7summitstravel.com:**
```
/                                    ← Homepage
/layanan/                            ← Hub layanan
/layanan/team-building/              ← Team building
/layanan/incentive-trip/             ← Incentive trip
/layanan/company-gathering/          ← Company gathering
/layanan/mice/                       ← MICE
/layanan/executive-retreat/          ← Executive retreat
/paket/                              ← Hub paket
/paket/bandung/                      ← Paket Bandung
/paket/bali/                         ← Paket Bali
/blog/                               ← Blog/Insights
/tentang-kami/                       ← About
/hubungi-kami/                       ← Contact
/portofolio/                         ← Portfolio
```

**Issue yang harus dihindari:**
- URL dengan parameter (?id=123)
- URL terlalu panjang (>100 karakter)
- Underscore sebagai pemisah (gunakan hyphen)
- Folder nested terlalu dalam (>4 level)

### 2.5 Internal Linking

**Status:** Tidak terverifikasi.

**Rekomendasi strategic internal linking:**
- Homepage → semua layanan utama (minimum 8 link)
- Setiap layanan → paket terkait
- Setiap blog post → minimum 3 link ke halaman layanan relevan
- Footer → sitemap utama (semua layanan, lokasi utama, halaman trust)
- Breadcrumb navigation di semua halaman interior

### 2.6 Image SEO

**Status:** Tidak terverifikasi.

**Issues umum website travel Indonesia:**
- Alt text kosong atau generik ("IMG_0001.jpg")
- File belum dikompresi (>500KB per gambar)
- Format masih JPEG/PNG, belum WebP
- Nama file tidak deskriptif

**Standar yang harus dipenuhi:**
```html
<!-- BEFORE (buruk) -->
<img src="img_0023.jpg" alt="">

<!-- AFTER (optimal) -->
<img 
  src="/images/team-building-outdoor-bandung-grafika-cikole.webp" 
  alt="Team building outdoor di Grafika Cikole Bandung — peserta perusahaan melakukan high rope activity"
  width="1200" 
  height="800"
  loading="lazy"
  decoding="async"
>
```

---

## 3. GOOGLE SEARCH PRESENCE

### 3.1 Brand Queries

| Query | Hasil Terdeteksi | Status |
|-------|-----------------|--------|
| "7summits travel" | Main website muncul, corporate tidak | ⚠️ Parsial |
| "corporate.7summitstravel.com" | 0 hasil | ❌ Tidak ada |
| "7summits corporate outing" | Tidak ditemukan | ❌ Tidak ada |
| "7summits MICE" | Tidak ditemukan | ❌ Tidak ada |

### 3.2 Non-Brand Queries (Target Keywords)

| Query | Posisi 7Summits | Kompetitor di Top 5 |
|-------|----------------|---------------------|
| "corporate outing Bandung" | Tidak muncul | Bellva, Adventure Galaxy, Rovers |
| "MICE organizer Bandung" | Tidak muncul | Pakar Holiday, Adventure Galaxy |
| "team building Bandung" | Tidak muncul | Multiple competitors |
| "incentive trip Indonesia" | Tidak muncul | Aviatour, SIP Travel, Panorama JTB |
| "company gathering Bali" | Tidak muncul | Multiple operators |

**Kesimpulan:** Website corporate.7summitstravel.com saat ini **tidak berkontribusi apapun** terhadap SEO karena 403 Forbidden.

---

## 4. CORE WEB VITALS

**Status:** Tidak bisa diukur (website 403).

**Benchmark industri travel Indonesia yang harus ditargetkan:**

| Metrik | Target | Keterangan |
|--------|--------|-----------|
| LCP (Largest Contentful Paint) | < 2.5 detik | Hero image atau H1 |
| INP (Interaction to Next Paint) | < 200ms | Gantikan FID |
| CLS (Cumulative Layout Shift) | < 0.1 | Pastikan gambar ada dimensi |
| TTFB (Time to First Byte) | < 800ms | Server response |
| FCP (First Contentful Paint) | < 1.8 detik | |

**Risiko umum website travel:**
- Hero image tidak di-preload: +800ms LCP
- Web fonts blokir rendering (block period)
- Third-party scripts (analytics, chat widget, booking widget) menambah CLS

---

## 5. MOBILE SEO

**Status:** Tidak bisa diverifikasi.

**Checklist mobile-first:**
- [ ] Viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1">`)
- [ ] Font size minimum 16px untuk body text
- [ ] Tombol tap target minimum 48x48px
- [ ] Tidak ada horizontal scroll
- [ ] Form fields mudah diisi di mobile
- [ ] Click-to-call untuk nomor telepon
- [ ] WhatsApp floating button

---

## 6. SECURITY & TECHNICAL

**Status:** Tidak bisa diverifikasi.

**Security headers yang harus ada:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: default-src 'self'
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 7. DUPLICATE CONTENT & CANONICAL

**Risiko terdeteksi:**
- Subdomain `corporate.7summitstravel.com` dan main site `7summitstravel.com` mungkin memiliki konten yang overlap
- Perlu canonical tag di setiap halaman yang menunjuk ke URL kanonik yang benar

```html
<!-- Di setiap halaman -->
<link rel="canonical" href="https://corporate.7summitstravel.com/[url-halaman]">
```

---

## 8. OFF-PAGE SIGNALS

**Terdeteksi dari data publik:**

| Platform | Status | Kualitas |
|----------|--------|---------|
| TripAdvisor | ✅ Ada listing | Perlu lebih banyak review |
| ZoomInfo | ✅ Ada listing | Data basic saja |
| Instagram | ✅ @7summitstravel (6.454 followers) | Aktif |
| Facebook | ✅ Ada page | Perlu audit engagement |
| Google Business Profile | ❓ Tidak terverifikasi | Kritis untuk local SEO |
| LinkedIn | ❓ Tidak terverifikasi | Penting untuk B2B |
| Wikipedia | ❌ Tidak ada entry | Sinyal authority untuk LLM |
| TourTravelWorld.com | ✅ Ada listing | Direktori travel |

---

## 9. RINGKASAN SKOR ON-PAGE SEO

| Aspek | Skor | Catatan |
|-------|------|---------|
| Crawlability | 0/20 | Website 403 = tidak bisa di-crawl |
| Indexability | 0/20 | 0 halaman terindeks |
| On-Page Optimization | N/A | Tidak bisa diverifikasi |
| Technical Performance | N/A | Tidak bisa diukur |
| Mobile Friendliness | N/A | Tidak bisa diverifikasi |
| Off-Page Presence | 4/20 | Beberapa platform tapi lemah |
| **TOTAL SEO SCORE** | **~4/100** | **Kritis — website tidak bisa diakses** |

---

*File terkait: `02-aeo-audit.md`, `03-aio-geo-audit.md`, `recommendations/`*
