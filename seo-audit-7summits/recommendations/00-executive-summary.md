# Executive Summary — Audit SEO/AEO/AIO/GEO
## corporate.7summitstravel.com
**Tanggal:** 25 Mei 2026 | **Untuk:** Decision Maker 7Summits Travel

---

## SKOR KESELURUHAN

```
┌─────────────────────────────────────────────────────────────┐
│                    SKOR AUDIT DIGITAL                       │
│                                                             │
│  SEO Tradisional    ░░░░░░░░░░░░░░░░░░░░   4/100  🔴       │
│  AEO (Answer Eng.)  ░░░░░░░░░░░░░░░░░░░░   0/100  🔴       │
│  AIO (AI Optim.)    █░░░░░░░░░░░░░░░░░░░   8/100  🔴       │
│  GEO (Gen. Eng.)    █░░░░░░░░░░░░░░░░░░░   8/100  🔴       │
│                                                             │
│  SKOR TOTAL         ░░░░░░░░░░░░░░░░░░░░   5/100  🔴       │
│                                                             │
│  Status: KRITIS — Website tidak bisa diakses               │
└─────────────────────────────────────────────────────────────┘
```

---

## TEMUAN UTAMA DALAM 30 DETIK

**Masalah #1 — The Only Problem That Matters Right Now:**

> Website `corporate.7summitstravel.com` mengembalikan **HTTP 403 Forbidden** untuk semua pengunjung — termasuk Google, Bing, dan semua AI crawler (GPTBot, ClaudeBot, PerplexityBot).
>
> Hasil: **Google tidak mengindeks SATU PUN halaman dari website ini.** Verifikasi: `site:corporate.7summitstravel.com` = 0 hasil.
>
> Artinya: Semua investasi dalam design, konten, dan fitur website saat ini **tidak menghasilkan traffic organik apapun.**

---

## 5 QUICK WINS (Bisa Eksekusi Minggu Ini)

### QW-1 ⚡ Perbaiki HTTP 403 (Hari Ini — 2 Jam)
**Tindakan:** Buka Cloudflare Dashboard → Security → Firewall Rules
- Aktifkan "Allow Known Bots" (pastikan Googlebot, Bingbot tidak terblokir)
- Jika ada aturan custom yang mem-block semua request, hapus atau revisi
- Test dengan Google Search Console: Fetch as Google

**Impact:** Ini adalah satu-satunya hal yang paling menentukan keberhasilan semua upaya lain. **Tanpa ini, tidak ada yang bisa dilakukan.**

---

### QW-2 ⚡ Daftarkan ke Google Search Console (Hari 1 — 30 Menit)
**Tindakan:**
1. Buka search.google.com/search-console
2. Add property → URL prefix → `https://corporate.7summitstravel.com`
3. Verifikasi ownership via DNS TXT record atau HTML tag
4. Submit sitemap: `https://corporate.7summitstravel.com/sitemap.xml`
5. Request indexing untuk homepage

**Impact:** Mulai mendapatkan data traffic, crawl errors, dan indexing status

---

### QW-3 ⚡ Klaim & Optimasi Google Business Profile (Hari 2-3 — 1 Jam)
**Tindakan:**
1. Buka business.google.com
2. Cari "7Summits Travel" → Claim listing atau buat baru
3. Isi lengkap: nama, kategori (Travel Agency + Event Management Company), alamat, nomor telepon, website, jam kerja
4. Upload minimal 10 foto berkualitas tinggi
5. Tambahkan deskripsi bisnis dengan keyword corporate outing, MICE, team building

**Impact:** Muncul di Google Maps, local pack, dan sinyal entity untuk LLM

---

### QW-4 ⚡ Buat & Upload robots.txt dan sitemap.xml (Hari 1-2 — 2 Jam)
```
# /robots.txt
User-agent: *
Allow: /
Sitemap: https://corporate.7summitstravel.com/sitemap.xml
```
**Impact:** Memberikan sinyal crawlability yang jelas ke semua mesin pencari

---

### QW-5 ⚡ Standardisasi Brand Name di Semua Platform (Minggu 1 — 3 Jam)
Update nama jadi `7Summits Travel` (konsisten) di:
- TripAdvisor, ZoomInfo, Instagram bio, Facebook, semua listing direktori
- Pastikan NAP (Name, Address, Phone) identik di semua platform

**Impact:** Membangun entity recognition yang kuat di LLM dan Google Knowledge Graph

---

## 3 STRATEGIC PRIORITIES (3-6 Bulan)

### PRIORITY 1: Bangun Content Infrastructure (Bulan 1-2)
Buat minimum 15 halaman berkualitas tinggi yang menjawab pertanyaan spesifik calon klien:
- 1 pillar page per layanan utama (team building, MICE, incentive trip, company gathering)
- 5 blog article per pillar (topic cluster)
- 1 halaman FAQ komprehensif (minimum 30 pertanyaan)
- Semua dengan schema markup JSON-LD yang benar

**Target:** 50+ halaman terindeks, muncul di 100+ keyword long-tail

---

### PRIORITY 2: Bangun AI/LLM Authority (Bulan 2-3)
Setelah konten ada, optimalkan untuk dikutip AI:
- Implementasi schema Organization, TravelAgency, FAQPage, Service
- Tambahkan data konkret (angka, statistik, tahun)
- Tambahkan testimonial dengan nama lengkap & jabatan
- Buat llms.txt
- Mulai content PR: pitching ke media travel Indonesia

**Target:** Muncul dalam rekomendasi Perplexity dan ChatGPT untuk 3+ query brand

---

### PRIORITY 3: Off-Page Authority Building (Bulan 3-6)
Bangun backlinks dan citations berkualitas:
- Daftar di direktori ASITA, GIATA, dan direktori travel profesional
- Guest post di media travel/bisnis Indonesia
- Partnership content dengan destinasi Bandung, Bali (dinas pariwisata)
- Minta review dari klien di Google, TripAdvisor
- Press release tentang milestone (500 klien, 13 tahun, dll.)

**Target:** Domain Rating naik dari ~10 ke ~25, muncul di AI Overview Google

---

## ESTIMASI DAMPAK

| Timeline | Ekspektasi Realistis |
|----------|---------------------|
| Minggu 1 (setelah fix 403) | Google mulai re-crawl, indexasi dimulai |
| Bulan 1 | 20-50 halaman terindeks, mulai ada impression |
| Bulan 3 | 500-2.000 organic visits/bulan |
| Bulan 6 | 3.000-10.000 organic visits/bulan |
| Bulan 12 | 10.000-30.000 organic visits/bulan + AI citations |
| Bulan 18 | Muncul rutin di AI Overviews untuk query utama |

*Catatan: Estimasi konservatif dengan implementasi konsisten dan konten berkualitas*

---

## PESAN KUNCI UNTUK DECISION MAKER

Saat ini, setiap rupiah yang diinvestasikan ke website — design, konten, hosting — **menghasilkan nol return** dari sisi SEO karena website tidak bisa diakses oleh Google.

Prioritas pertama bukan membuat konten baru. Prioritas pertama adalah **membuka aksesibilitas website** (perbaiki 403), baru kemudian semua investasi konten dan optimasi akan memberikan hasil.

Kabar baiknya: kompetitor Anda juga tidak dalam posisi yang dominan di AI (hanya beberapa yang mulai muncul). **Window of opportunity untuk menjadi yang pertama di AI-driven search masih terbuka lebar.**

---

*Dokumen lengkap: `reports/01-seo-audit.md` · `reports/02-aeo-audit.md` · `reports/03-aio-geo-audit.md` · `reports/anomalies.md`*
