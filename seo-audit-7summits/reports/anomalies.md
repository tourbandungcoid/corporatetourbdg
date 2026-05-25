# Anomali & Temuan Tidak Normal — corporate.7summitstravel.com
**Tanggal:** 25 Mei 2026

---

## ANOMALI KRITIS

### ANOMALI-001: HTTP 403 Forbidden — Seluruh Website
**Severity:** 🔴 KRITIS  
**Ditemukan:** Semua request ke `corporate.7summitstravel.com` mengembalikan HTTP 403  
**Dampak:** Website tidak bisa dikunjungi oleh siapapun termasuk Googlebot, semua bot AI crawler  
**Verifikasi:** 
- `https://corporate.7summitstravel.com` → 403
- `https://corporate.7summitstravel.com/robots.txt` → 403
- `https://corporate.7summitstravel.com/sitemap.xml` → 403

**Kemungkinan penyebab:**
1. Cloudflare WAF dengan aturan terlalu ketat yang memblokir semua non-browser request
2. Server dikonfigurasi dengan `deny from all` tanpa exception
3. Website dalam mode maintenance/staging yang salah
4. Cloudflare "I'm Under Attack Mode" aktif tanpa alasan yang jelas
5. IP allowlist yang tidak mencakup Googlebot ranges

**Aksi segera:** Periksa Cloudflare dashboard → Security → Firewall Rules. Pastikan "Allow Known Bots" dicentang.

---

### ANOMALI-002: Zero Google Indexation
**Severity:** 🔴 KRITIS  
**Ditemukan:** `site:corporate.7summitstravel.com` mengembalikan 0 hasil di Google  
**Dampak:** Website tidak ada di Google — zero organic traffic  
**Verifikasi:** Google Search `site:corporate.7summitstravel.com` dilakukan 25 Mei 2026  
**Catatan:** Ini adalah konsekuensi langsung dari Anomali-001

---

### ANOMALI-003: Zero AI Presence
**Severity:** 🔴 KRITIS  
**Ditemukan:** Tidak ada referensi ke `corporate.7summitstravel.com` di platform AI manapun  
**Dampak:** Tidak muncul dalam rekomendasi ChatGPT, Claude, Perplexity, Gemini untuk query MICE/corporate Indonesia  
**Catatan:** Konsekuensi langsung dari Anomali-001 dan Anomali-002

---

### ANOMALI-004: Brand Name Inkonsistensi
**Severity:** 🟡 MEDIUM  
**Ditemukan:** Nama brand berbeda-beda di setiap platform:
- Instagram: `@7summitstravel` → Bio: "Travel | Gathering | MICE"
- TripAdvisor: "7 Summits Travel" (dengan spasi)
- ZoomInfo: "7summitstravel" (lowercase, tanpa spasi)
- Google Snippets: "7summits Travel" (lowercase 7summits, kapital Travel)
- Diasumsikan website: "7Summits Travel"

**Dampak:** LLM gagal mengidentifikasi ini sebagai entitas yang sama; Google Business Profile mismatch; Knowledge panel tidak optimal

---

### ANOMALI-005: Sister Sites Tidak Terhubung Secara Optimal
**Severity:** 🟡 MEDIUM  
**Ditemukan:** 
- `7summitstravel.com` — website utama travel
- `tourbandung.co.id` — website tour Bandung
- `corporate.7summitstravel.com` — website corporate (tidak bisa diakses)

Ketiga website ini tidak saling terhubung dengan jelas di konten publik, membuat mesin pencari dan LLM sulit memahami hubungan antar entitas.

**Dampak:** Authority tidak terkonsolidasi, backlink tersebar

---

### ANOMALI-006: Tidak Ada Presence di Media/Press
**Severity:** 🟡 MEDIUM  
**Ditemukan:** Pencarian ekstensif tidak menemukan coverage media nasional (Kompas, Tempo, Detik, Bisnis Indonesia) tentang 7Summits Travel  
**Dampak:** Lemahnya sinyal authority untuk LLM; brand tidak dikenal di luar circle organik sendiri

---

### ANOMALI-007: Main Website Juga Memblokir Crawler
**Severity:** 🔴 KRITIS  
**Ditemukan:** `www.7summitstravel.com` juga mengembalikan 403 untuk semua request  
**Dampak:** Seluruh ekosistem digital 7Summits Travel tidak bisa dikrawl  
**Catatan:** Kemungkinan konfigurasi Cloudflare yang sama diterapkan ke seluruh domain

---

### ANOMALI-008: tourbandung.co.id Juga 403
**Severity:** 🔴 KRITIS  
**Ditemukan:** `tourbandung.co.id` (sister site) juga 403  
**Dampak:** Seluruh digital footprint 7Summits Travel tidak bisa diakses secara programatik  
**Catatan:** Google Search masih menampilkan beberapa snippet dari tourbandung.co.id (blog posts), mengindikasikan Googlebot pernah berhasil mengakses di masa lalu tetapi sekarang diblokir

---

## ANOMALI MINOR

### ANOMALI-009: Email Ganda yang Membingungkan
**Ditemukan di publik:**
- `marketing@7summitstravel.com` (email formal)
- `klien7summits@gmail.com` (Gmail — kurang profesional untuk B2B corporate)
- `klien7summitstravel@gmail.com` (variasi lain dari Gmail)

**Rekomendasi:** Standardisasi ke `marketing@7summitstravel.com` dan `corporate@7summitstravel.com`

---

### ANOMALI-010: Nomor Telepon Ganda
**Ditemukan di publik:**
- +62 811-2277-954
- +62 813-2237-9153

**Rekomendasi:** Tentukan satu nomor primer untuk corporate, konsistensikan di semua platform

---

## RINGKASAN ANOMALI

| ID | Severity | Status |
|----|----------|--------|
| ANOMALI-001 | 🔴 KRITIS | Harus diperbaiki HARI INI |
| ANOMALI-002 | 🔴 KRITIS | Akan otomatis terselesaikan setelah 001 |
| ANOMALI-003 | 🔴 KRITIS | Akan terselesaikan setelah 001+002 |
| ANOMALI-004 | 🟡 MEDIUM | Perbaiki dalam 2 minggu |
| ANOMALI-005 | 🟡 MEDIUM | Perbaiki dalam 1 bulan |
| ANOMALI-006 | 🟡 MEDIUM | Perbaiki dalam 3 bulan |
| ANOMALI-007 | 🔴 KRITIS | Harus diperbaiki bersamaan dengan 001 |
| ANOMALI-008 | 🔴 KRITIS | Harus diperbaiki bersamaan dengan 001 |
| ANOMALI-009 | 🟢 MINOR | Perbaiki dalam 1 bulan |
| ANOMALI-010 | 🟢 MINOR | Perbaiki dalam 1 bulan |
