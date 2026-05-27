# Laporan Audit AEO (Answer Engine Optimization) — corporate.7summitstravel.com
**Tanggal Audit:** 25 Mei 2026  
**Fokus:** Featured Snippets, People Also Ask, Voice Search, AI-generated answers

---

## DEFINISI AEO

AEO adalah optimasi agar konten website menjadi sumber jawaban yang digunakan oleh:
- **Google Featured Snippets** (kotak jawaban di posisi 0)
- **Google People Also Ask** (accordion pertanyaan)
- **Google AI Overviews** (AI-generated summary di SERP)
- **Voice search** (Siri, Google Assistant, Alexa)
- **Chatbot AI** (ChatGPT, Claude, Perplexity, Gemini)

---

## 🚨 STATUS KRITIS

**Karena website mengembalikan 403 Forbidden, tidak ada SATU PUN konten dari corporate.7summitstravel.com yang bisa muncul di featured snippet, PAA, atau AI Overview Google.** Ini adalah zero-state — tidak ada yang bisa diperbaiki sebelum masalah aksesibilitas diselesaikan.

---

## 1. ANALISIS STRUKTUR Q&A

### 1.1 Keberadaan Halaman FAQ
**Status:** ❌ Tidak terdeteksi

Dari data yang tersedia (TripAdvisor, ZoomInfo, Instagram, Google snippets), tidak ada indikasi bahwa `corporate.7summitstravel.com` memiliki halaman FAQ yang terstruktur.

**Impact:** Website tidak bisa muncul di People Also Ask (PAA) dan AI Overviews untuk pertanyaan-pertanyaan yang paling sering ditanyakan calon klien corporate.

**Pertanyaan yang paling sering dicari (berdasarkan analisis intent):**

```
Kategori GENERAL:
- "apa itu corporate outing?"
- "berapa biaya outing perusahaan?"
- "apa perbedaan MICE dan team building?"
- "bagaimana cara merencanakan corporate gathering?"

Kategori BANDUNG:
- "rekomendasi tempat outing kantor di Bandung"
- "paket team building Bandung berapa harganya?"
- "lokasi outbound terbaik di Bandung untuk perusahaan"

Kategori BALI:
- "paket company gathering Bali berapa harga per orang?"
- "venue MICE terbaik di Bali untuk perusahaan"
- "incentive trip Bali itinerary 3 hari 2 malam"

Kategori PEMILIHAN EO:
- "ciri-ciri EO corporate gathering yang profesional"
- "tips memilih vendor team building yang tepat"
- "apa yang harus dipersiapkan untuk company outing?"
```

### 1.2 Struktur Konten Saat Ini vs. Kebutuhan AEO

**Pola konten AEO-friendly yang HARUS diterapkan:**

```html
<!-- BEFORE — konten marketing umum (tidak AEO-friendly) -->
<p>Kami adalah perusahaan travel terpercaya yang menyediakan 
layanan corporate outing berkualitas tinggi untuk kebutuhan 
tim perusahaan Anda.</p>

<!-- AFTER — AEO-optimized, direct answer format -->
<h2>Berapa Biaya Corporate Outing di Bandung?</h2>
<p>Biaya corporate outing di Bandung berkisar antara Rp 350.000 
hingga Rp 1.500.000 per orang, tergantung jumlah peserta, 
durasi (1 hari atau menginap), dan paket aktivitas yang dipilih. 
7Summits Travel menyediakan paket mulai dari Rp 450.000/pax 
untuk grup minimal 50 orang.</p>
```

---

## 2. SCHEMA MARKUP AUDIT

### 2.1 Schema yang Terdeteksi
**Status:** ❌ Tidak ada schema markup yang terdeteksi

Dari data yang tersedia, tidak ada indikasi penggunaan JSON-LD atau microdata pada website.

### 2.2 Schema yang HARUS Diimplementasikan

| Schema Type | Priority | Benefit AEO |
|-------------|----------|------------|
| `Organization` | ⚡ Immediate | Knowledge panel, entity recognition |
| `TravelAgency` | ⚡ Immediate | Business info di SERP |
| `LocalBusiness` | ⚡ Immediate | Local pack, maps |
| `FAQPage` | ⚡ Immediate | PAA, AI Overviews content |
| `Service` | 🔴 High | Rich snippets layanan |
| `BreadcrumbList` | 🔴 High | SERP breadcrumb display |
| `AggregateRating` | 🔴 High | Star rating di SERP |
| `Article` | 🟡 Medium | Blog indexing, AI citation |
| `HowTo` | 🟡 Medium | How-to rich results |
| `Event` | 🟢 Low | Event listings |

---

## 3. PARAGRAF PEMBUKA (OPENING PARAGRAPH OPTIMIZATION)

**Standar AEO untuk paragraf pembuka:** Jawab pertanyaan utama halaman dalam 40-60 kata, menggunakan bahasa natural.

### Contoh untuk Homepage:
```
BEFORE (tidak AEO-friendly):
"Selamat datang di 7Summits Travel, mitra perjalanan bisnis terpercaya Anda..."

AFTER (AEO-optimized):
"7Summits Travel adalah spesialis corporate outing, MICE, dan incentive trip 
di Indonesia dengan pengalaman 13 tahun. Kami telah melayani 500+ perusahaan 
dari seluruh Indonesia untuk event corporate di Bandung, Bali, Lombok, dan 
destinasi internasional. Hubungi kami untuk konsultasi gratis dan penawaran custom."
```

### Contoh untuk Halaman Team Building:
```
BEFORE:
"Team building adalah kegiatan yang penting untuk mempererat hubungan antar karyawan..."

AFTER:
"Paket team building 7Summits Travel dirancang khusus untuk kebutuhan 
perusahaan di Indonesia — mulai dari outbound adventure di Bandung, 
cooking class di Bali, hingga corporate games di Jakarta. Tersedia 
untuk 20 hingga 5.000 peserta dengan harga mulai Rp 350.000/pax."
```

---

## 4. FORMAT KONTEN UNTUK FEATURED SNIPPET

### 4.1 Paragraph Snippets (40-60 kata)
Cocok untuk pertanyaan "apa itu", "apa perbedaan", "bagaimana cara".

### 4.2 List Snippets
Cocok untuk pertanyaan "apa saja", "rekomendasi", "langkah-langkah".

**Contoh optimasi untuk "apa saja yang termasuk paket company outing":**
```html
<h2>Apa Saja yang Termasuk dalam Paket Corporate Outing 7Summits Travel?</h2>
<ul>
  <li>Transportasi bus pariwisata ber-AC dari titik kumpul</li>
  <li>Akomodasi hotel/resort bintang 3-5 (paket menginap)</li>
  <li>Fasilitator dan MC profesional berpengalaman</li>
  <li>Program team building atau outbound activity</li>
  <li>Makan (sesuai paket: 3x makan/hari)</li>
  <li>Dokumentasi foto dan video profesional</li>
  <li>Co-card, goodie bag, dan perlengkapan peserta</li>
  <li>Asuransi perjalanan untuk semua peserta</li>
</ul>
```

### 4.3 Table Snippets
Cocok untuk perbandingan harga, paket, atau destinasi.

**Contoh tabel perbandingan yang bisa jadi featured snippet:**
```html
<h2>Perbandingan Paket Corporate Outing 7Summits Travel</h2>
<table>
  <thead>
    <tr>
      <th>Paket</th>
      <th>Harga/Pax</th>
      <th>Min. Peserta</th>
      <th>Durasi</th>
      <th>Destinasi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Silver (1 Hari)</td>
      <td>Rp 350.000</td>
      <td>50 orang</td>
      <td>8 jam</td>
      <td>Bandung</td>
    </tr>
    <tr>
      <td>Gold (2H1M)</td>
      <td>Rp 750.000</td>
      <td>50 orang</td>
      <td>2 hari</td>
      <td>Bandung/Lembang</td>
    </tr>
    <tr>
      <td>Platinum (3H2M)</td>
      <td>Rp 1.200.000</td>
      <td>30 orang</td>
      <td>3 hari</td>
      <td>Bali/Lombok</td>
    </tr>
    <tr>
      <td>Custom Executive</td>
      <td>Sesuai kebutuhan</td>
      <td>15 orang</td>
      <td>Custom</td>
      <td>Seluruh Indonesia</td>
    </tr>
  </tbody>
</table>
```

---

## 5. LONG-TAIL CONVERSATIONAL KEYWORDS

Berdasarkan analisis intent pencarian target audience (HR Manager, GA Manager, Marketing Corporate):

### Kategori Pricing (High Intent):
- "berapa harga paket outing perusahaan di Bandung 2026"
- "paket MICE Bali untuk 100 orang berapa biaya"
- "biaya incentive trip ke Bali per orang"
- "harga sewa bus pariwisata Bandung untuk outing kantor"

### Kategori Planning (Medium Intent):
- "cara merencanakan company outing yang sukses"
- "checklist persiapan corporate gathering perusahaan"
- "rekomendasi lokasi team building outdoor Bandung"
- "perbedaan outbound dan team building"
- "berapa lama persiapan ideal untuk company gathering?"

### Kategori Comparison (Medium Intent):
- "7summits travel vs bellva adventure review"
- "EO gathering terbaik Bandung rekomendasi"
- "perbedaan EO dan travel agent untuk outing perusahaan"
- "kenapa pilih professional EO untuk team building?"

### Kategori Voice Search (Natural Language):
- "di mana tempat outing kantor yang bagus di Bandung?"
- "siapa EO gathering terpercaya di Bandung?"
- "apa saja program team building yang populer?"

---

## 6. OPTIMASI VOICE SEARCH

**Pola pertanyaan voice search** biasanya diawali: "apa", "siapa", "di mana", "kapan", "berapa", "bagaimana".

**Struktur konten ideal untuk voice search:**

```html
<!-- Pertanyaan natural, jawaban langsung dalam 1-2 kalimat -->
<div itemscope itemtype="https://schema.org/Question">
  <h3 itemprop="name">Siapa yang cocok menggunakan layanan corporate outing 7Summits Travel?</h3>
  <div itemscope itemtype="https://schema.org/Answer">
    <p itemprop="text">Layanan 7Summits Travel cocok untuk perusahaan dari berbagai skala — 
    startup dengan 20 karyawan hingga BUMN dan perusahaan multinasional dengan 5.000+ peserta. 
    Kami spesialisasi di Bandung, Bali, dan seluruh Indonesia dengan pengalaman 13 tahun.</p>
  </div>
</div>
```

---

## 7. PEOPLE ALSO ASK (PAA) OPTIMIZATION

Berdasarkan query terkait di industri, berikut pertanyaan PAA yang biasa muncul dan harus dijawab di website:

1. Apa perbedaan MICE dan team building?
2. Berapa idealnya budget outing perusahaan per orang?
3. Apa manfaat corporate outing untuk perusahaan?
4. Bagaimana memilih vendor EO yang tepat?
5. Apa saja aktivitas populer dalam program team building?
6. Apakah biaya corporate outing bisa diklaim sebagai biaya perusahaan (tax deductible)?
7. Berapa lama waktu yang dibutuhkan untuk merencanakan company gathering?
8. Apa perbedaan family gathering dan company gathering?

---

## 8. SKOR AEO

| Aspek | Skor | Catatan |
|-------|------|---------|
| FAQ Page | 0/15 | Tidak ada |
| Schema Markup | 0/20 | Tidak ada JSON-LD |
| Opening Paragraph Quality | N/A | Tidak bisa diakses |
| List/Table Formatting | N/A | Tidak bisa diakses |
| Long-tail Coverage | 0/15 | 0 halaman terindeks |
| Voice Search Optimization | 0/10 | Tidak ada |
| PAA Coverage | 0/15 | Tidak ada |
| Featured Snippet Eligibility | 0/25 | Website 403 |
| **TOTAL AEO SCORE** | **0/100** | **Kritis — tidak ada konten yang bisa dikutip** |

---

*File terkait: `01-seo-audit.md`, `03-aio-geo-audit.md`*
