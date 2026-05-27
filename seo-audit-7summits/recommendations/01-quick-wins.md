# Quick Wins — Action Items Prioritas Tinggi
## corporate.7summitstravel.com
**Format:** [Halaman/Element] | [Masalah] | [Rekomendasi Konkret] | [Effort] | [Impact]

---

## LEGEND
- **Effort:** L=Low (< 2 jam), M=Medium (2-8 jam), H=High (>1 hari)
- **Impact:** L=Low (<5% improvement), M=Medium (5-20%), H=High (>20% improvement)
- **Priority:** 1=Hari ini, 2=Minggu ini, 3=Bulan ini

---

## FASE 0: CRITICAL BLOCKERS (Selesaikan sebelum semua lainnya)

| # | Halaman/Element | Masalah | Rekomendasi Konkret | Effort | Impact |
|---|----------------|---------|---------------------|--------|--------|
| 1 | Server/Cloudflare | HTTP 403 Forbidden — website tidak bisa diakses siapapun | **Cloudflare:** Security → Firewall Rules → Aktifkan "Allow Known Bots". Jika menggunakan WAF custom, revisi rule agar Googlebot (IP range: 66.249.0.0/16) dan bot terlegitimasi lainnya diizinkan. Test via: `curl -A "Googlebot/2.1" https://corporate.7summitstravel.com` | L | H 🔴 |
| 2 | robots.txt | Tidak bisa diakses (403) — Googlebot tidak punya instruksi crawl | Buat file `/public/robots.txt` dengan konten: `User-agent: * \n Allow: / \n Sitemap: https://corporate.7summitstravel.com/sitemap.xml` | L | H |
| 3 | sitemap.xml | Tidak tersedia | Generate sitemap yang mencakup semua URL publik. Submit ke Google Search Console dan Bing Webmaster Tools | L | H |

---

## FASE 1: QUICK WINS (Minggu 1-2)

### Technical

| # | Halaman/Element | Masalah | Rekomendasi Konkret | Effort | Impact |
|---|----------------|---------|---------------------|--------|--------|
| 4 | Google Search Console | Tidak ada property terdaftar (0 data monitoring) | Daftarkan `https://corporate.7summitstravel.com` di GSC. Verifikasi via DNS TXT record. Submit sitemap. Request index untuk 10 halaman utama. | L | H |
| 5 | Google Business Profile | Status tidak terverifikasi | Buka business.google.com, cari "7Summits Travel Bandung", claim listing, verifikasi via postcard/phone. Lengkapi semua field: kategori utama "Travel Agency", tambah "Event Planning Service", "Corporate Event Planner". | M | H |
| 6 | Seluruh website | Kemungkinan tidak ada canonical tag | Tambah `<link rel="canonical" href="[URL halaman saat ini]">` di `<head>` setiap halaman | L | M |
| 7 | Seluruh website | Kemungkinan tidak ada HTTPS redirect | Pastikan semua HTTP redirect 301 ke HTTPS. Tambah HSTS header. | L | M |

### On-Page

| # | Halaman/Element | Masalah | Rekomendasi Konkret | Effort | Impact |
|---|----------------|---------|---------------------|--------|--------|
| 8 | Homepage — `<title>` | Title kemungkinan generik atau terlalu panjang | Ganti dengan: **"Corporate Outing & MICE Bandung Premium — 7Summits Travel"** (58 karakter) | L | H |
| 9 | Homepage — meta description | Kemungkinan kosong atau tidak persuasif | Ganti dengan: **"Spesialis corporate outing, MICE & team building Indonesia. 13 tahun pengalaman, 500+ perusahaan. Bandung · Bali · Jakarta. Konsultasi gratis hari ini."** (156 karakter) | L | H |
| 10 | Homepage — H1 | Kemungkinan H1 berisi nama brand saja | Ganti H1 menjadi: **"Corporate Outing & MICE Profesional untuk Perusahaan Anda"** | L | H |
| 11 | Semua gambar | Alt text kemungkinan kosong atau generik | Audit dan tambah alt text deskriptif pada setiap gambar. Contoh: dari `alt=""` jadi `alt="Team building outdoor di Bandung — peserta melakukan flying fox di Grafika Cikole"` | M | M |
| 12 | Semua halaman | Kemungkinan tidak ada Open Graph tags | Tambah OG tags di setiap halaman: `og:title`, `og:description`, `og:image` (1200x630px), `og:url`, `og:type` | M | M |

---

## FASE 2: QUICK WINS (Minggu 2-4)

### Schema Markup

| # | Halaman/Element | Masalah | Rekomendasi Konkret | Effort | Impact |
|---|----------------|---------|---------------------|--------|--------|
| 13 | Homepage/sitewide | Tidak ada Organization schema | Tambah JSON-LD Organization+TravelAgency schema di `<head>` (lihat template di `02-schema-recommendations.md`) | M | H |
| 14 | Homepage | Tidak ada LocalBusiness schema | Tambah LocalBusiness schema dengan NAP lengkap, geo coordinates, dan openingHours | M | H |
| 15 | Setiap halaman layanan | Tidak ada Service schema | Tambah Service schema untuk: team building, MICE, incentive trip, company gathering | M | M |
| 16 | Homepage | Tidak ada BreadcrumbList | Tambah BreadcrumbList schema untuk semua halaman interior | L | M |

### Content Gaps

| # | Halaman/Element | Masalah | Rekomendasi Konkret | Effort | Impact |
|---|----------------|---------|---------------------|--------|--------|
| 17 | FAQ Page | Tidak ada halaman FAQ | Buat `/faq/` dengan minimum 20 Q&A. Tambah FAQPage JSON-LD schema. Fokus pada: biaya, proses pesan, jenis layanan, destinasi | H | H |
| 18 | About page | Kemungkinan tidak ada data konkret | Tambah: tahun berdiri (2011), jumlah klien (500+), jumlah event (1.000+), area layanan | M | H |
| 19 | Semua halaman | Kemungkinan tidak ada data terstruktur | Pastikan setiap halaman memiliki paragraf pertama yang langsung menjawab "apa yang bisa saya dapatkan di sini?" dalam 50-60 kata | H | H |
| 20 | Contact page | Kemungkinan format kontak tidak optimal | Tambah click-to-call, click-to-WhatsApp, embedded Google Maps, schema ContactPoint | M | M |

### Off-Page

| # | Halaman/Element | Masalah | Rekomendasi Konkret | Effort | Impact |
|---|----------------|---------|---------------------|--------|--------|
| 21 | TripAdvisor listing | Ada listing tapi kemungkinan belum optimal | Lengkapi deskripsi dengan keyword corporate, upload foto, minta klien lama untuk memberikan review | M | M |
| 22 | Instagram @7summitstravel | Bio tidak optimal untuk konversi | Update bio: "🏢 Corporate Outing & MICE Indonesia\n📍 Bandung | Bali | Jakarta\n✅ 13 Tahun | 500+ Klien\n📞 +62 811-2277-954\n🔗 [link in bio]" | L | M |
| 23 | Semua platform | Brand name inkonsisten | Standardisasi semua platform ke "7Summits Travel" | M | M |
| 24 | Email | Menggunakan Gmail untuk komunikasi bisnis | Migrate dari klien7summits@gmail.com ke corporate@7summitstravel.com untuk kesan lebih profesional | L | M |
| 25 | Direktori bisnis | Tidak terdaftar di direktori utama | Daftarkan ke: ASITA directory, TourTravelWorld, IndoTravel, Yellow Pages Indonesia, Foursquare, Yelp Indonesia | M | M |

---

## FASE 3: QUICK WINS (Bulan 2)

### AI/LLM Optimization

| # | Halaman/Element | Masalah | Rekomendasi Konkret | Effort | Impact |
|---|----------------|---------|---------------------|--------|--------|
| 26 | `/llms.txt` | Tidak ada | Buat file llms.txt (lihat template di `04-llms-txt-template.md`) | L | M |
| 27 | Blog/Articles | Tidak ada konten blog | Tulis minimum 5 artikel dengan format AI-friendly (lihat `03-content-strategy.md`) | H | H |
| 28 | Testimonial | Kemungkinan tidak ada nama/jabatan lengkap | Tambah markup testimonial lengkap: nama, jabatan, perusahaan, tanggal, dan schema Review | M | H |
| 29 | Semua konten | Kemungkinan tidak ada datePublished | Tambah tanggal publikasi dan tanggal update di semua halaman dan artikel | L | M |
| 30 | Author bios | Tidak ada | Tambah bio singkat penulis/tim di halaman About dan artikel blog | M | M |

---

## MATRIX PRIORITAS

```
HIGH IMPACT
    │
    │   QW-1 (403)    QW-4 (robots)
    │   QW-2 (GSC)    QW-8 (title)
    │   QW-3 (GBP)    QW-9 (desc)
    │
    │   QW-13 (schema) QW-17 (FAQ)
    │   QW-14 (local)  QW-19 (content)
    │
    │   QW-25 (dir)   QW-27 (blog)
    │   QW-26 (llms)  QW-28 (reviews)
    │
LOW IMPACT
    └──────────────────────────────────
    LOW EFFORT              HIGH EFFORT
```

**Fokus Q1:** Selesaikan semua QW di pojok kiri-atas (high impact, low effort) terlebih dahulu.
