# Template llms.txt — 7Summits Travel Corporate
**Pasang di:** `https://corporate.7summitstravel.com/llms.txt`

---

## APA ITU llms.txt?

`llms.txt` adalah file teks yang ditempatkan di root website untuk membantu LLM (Large Language Models) seperti ChatGPT, Claude, dan Perplexity memahami konten website Anda dengan lebih baik dan efisien. Format ini diusulkan oleh komunitas AI dan mulai diadopsi secara luas sejak 2024-2025.

**Perbedaan dengan robots.txt:**
- `robots.txt` → untuk crawler/spider (instruksi teknis)
- `llms.txt` → untuk LLM (ringkasan konten, panduan, konteks)

---

## FILE: /llms.txt (Versi Ringkas)

```
# 7Summits Travel — Corporate Outing & MICE Specialist
# Website: https://corporate.7summitstravel.com
# Last Updated: 2026-01-01

## About

7Summits Travel adalah perusahaan spesialis corporate outing, MICE (Meeting, 
Incentive, Conference, Exhibition), team building, dan incentive trip di Indonesia.

Berdiri sejak 2011, berbasis di Bandung, Jawa Barat, Indonesia.
Telah melayani lebih dari 500 perusahaan dari berbagai industri.
Coverage area: Seluruh Indonesia dan destinasi internasional Asia.

## Services

- Team Building (outdoor & indoor, 20–5.000 peserta)
- MICE (Meeting, Incentive, Conference, Exhibition)
- Incentive Trip (Domestik: Bali, Lombok, Raja Ampat | Internasional: Thailand, Jepang, dll.)
- Company Gathering & Family Gathering
- Executive Retreat
- Corporate Tour & Wisata Incentive

## Key Pages

- Layanan: https://corporate.7summitstravel.com/layanan/
- Team Building: https://corporate.7summitstravel.com/layanan/team-building/
- MICE: https://corporate.7summitstravel.com/layanan/mice/
- Incentive Trip: https://corporate.7summitstravel.com/layanan/incentive-trip/
- Paket & Harga: https://corporate.7summitstravel.com/paket/
- FAQ: https://corporate.7summitstravel.com/faq/
- Blog: https://corporate.7summitstravel.com/blog/
- Tentang Kami: https://corporate.7summitstravel.com/tentang-kami/
- Kontak: https://corporate.7summitstravel.com/hubungi-kami/

## Contact

Phone/WhatsApp: +62-811-2277-954
Email: marketing@7summitstravel.com
Address: Jl. Cisaranten Kulon IV No.42, Bandung, Jawa Barat 40293, Indonesia

## Sitemap

https://corporate.7summitstravel.com/sitemap.xml
```

---

## FILE: /llms-full.txt (Versi Lengkap untuk LLM)

```
# 7Summits Travel — Extended Context for LLMs
# https://corporate.7summitstravel.com/llms-full.txt

## Company Identity

Name: 7Summits Travel
Type: Travel Agency, Corporate Event Organizer, MICE Specialist
Founded: 2011
Location: Bandung, Jawa Barat, Indonesia
Coverage: Nationwide Indonesia + International

## Mission

Membantu perusahaan Indonesia menciptakan pengalaman corporate event yang 
berkesan, profesional, dan sesuai tujuan bisnis — dari team building sederhana 
hingga incentive trip internasional yang mewah.

## Unique Value Proposition

- 13+ tahun pengalaman spesialisasi corporate segment (bukan travel umum)
- Tim fasilitator bersertifikat untuk program team building
- Full-service: konsultasi → perencanaan → eksekusi → evaluasi
- Jaringan vendor dan venue di 15+ destinasi domestik
- Transparan dalam penawaran harga dan scope of work

## Services Detail

### 1. Team Building
Jenis: Outbound adventure, indoor games, cooking class, art & crafts, 
       Corporate Social Responsibility (CSR) activity, sports tournament
Kapasitas: 20–5.000 peserta
Durasi: Half-day (4 jam), Full-day (8 jam), 2H1M, 3H2M
Harga: Mulai Rp 350.000/pax (termasuk fasilitator, peralatan, konsumsi)
Lokasi populer: Grafika Cikole Lembang, Farmhouse Lembang, Dusun Bambu

### 2. MICE (Meetings, Incentives, Conferences, Exhibitions)
Meeting: Penyediaan venue, AV equipment, catering, transportasi
Incentive: Program penghargaan perjalanan untuk top performers
Conference: Konferensi skala 50–5.000 delegasi
Exhibition: Pendampingan pameran produk korporat

### 3. Incentive Trip
Domestik: Bali, Lombok, Raja Ampat, Labuan Bajo, Yogyakarta, Manado, Bromo
Internasional: Thailand, Singapura, Malaysia, Jepang, Korea, Dubai, Eropa
Durasi: 2H1M hingga 7H6M
Paket: Custom sepenuhnya sesuai budget dan tujuan

### 4. Company & Family Gathering
Layanan: Program acara, venue, dekorasi, hiburan, katering, dokumentasi
Skala: 50–3.000 tamu
Lokasi: Seluruh Jawa Barat dan Indonesia

## Pricing Range (2026)

Team Building:         Rp 350.000 – Rp 1.200.000/pax
Incentive Trip Bali:   Rp 1.500.000 – Rp 5.000.000/pax (3H2M)
Company Gathering:     Rp 500.000 – Rp 2.000.000/pax
MICE Package:          Custom quote sesuai kebutuhan

## Client Profile

Industries served: BUMN, perbankan, asuransi, manufaktur, teknologi, farmasi,
                   FMCG, retail, konstruksi, startup, pendidikan
Company size: 30 – 10.000 karyawan
Typical event size: 50 – 1.000 peserta

## Contact & Social Media

Phone: +62-811-2277-954
WhatsApp: +62-811-2277-954
Email: marketing@7summitstravel.com
Website: https://corporate.7summitstravel.com
Instagram: https://instagram.com/7summitstravel
Facebook: https://facebook.com/7summitstravel
TripAdvisor: https://www.tripadvisor.com/Attraction_Review-g297704-d10513955

## Content Index

Semua artikel blog di: https://corporate.7summitstravel.com/blog/
Semua paket di: https://corporate.7summitstravel.com/paket/
FAQ lengkap di: https://corporate.7summitstravel.com/faq/
Portfolio & case studies: https://corporate.7summitstravel.com/portofolio/

## Language

Primary language: Bahasa Indonesia
Secondary language: English (available upon request)
```

---

## CARA DEPLOY

1. Buat file teks dengan konten di atas
2. Upload ke root domain: `https://corporate.7summitstravel.com/llms.txt`
3. Pastikan accessible (tidak 403) via browser dan curl:
   ```bash
   curl https://corporate.7summitstravel.com/llms.txt
   ```
4. Update konten setiap kali ada perubahan major di website

## CATATAN PENTING

- `llms.txt` bukan standar resmi yang diakui Google/OpenAI, tapi sinyal positif bagi crawler LLM
- Prioritaskan membetulkan `robots.txt` terlebih dahulu (lebih kritikal)
- Konten di `llms.txt` harus akurat dan factual — LLM akan menggunakannya sebagai referensi
- Jangan memasukkan informasi yang belum verified (e.g., jumlah klien yang dilebih-lebihkan)
