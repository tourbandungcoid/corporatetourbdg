# Perbaikan 8 Artikel Lama di CMS — Judul, Meta & Angka

> Delapan artikel ini tersimpan di database (CMS). Versi CMS yang tampil di website, jadi perubahan di repo tidak berpengaruh.
> Cara pakai: login `/admin` → **Content → Insights** → buka artikel → ganti field sesuai tabel → **Save**. Tidak perlu buka Supabase atau Vercel.
> Estimasi: ±10 menit per artikel.

## 1. Judul & meta description

Target: judul ≤ 60 karakter dengan keyword bahasa Indonesia di depan, meta description ≤ 155 karakter. Slug **jangan diubah** supaya link lama tidak rusak.

| Slug | Judul baru (`title`) | Meta description baru (`metaDescription`) |
|---|---|---|
| `5-pillar-corporate-outing-design` | 5-Pillar Corporate Outing Design: Framework Event Kantor | Framework 5 pilar untuk merancang outing kantor yang berdampak: tujuan, profil peserta, venue, aktivitas, dan cara mengukur hasilnya. |
| `bandung-outing-tier-system` | Bandung Outing Tier System: 4 Tier Harga Outing Kantor | *(tetap)* |
| `justify-outing-budget-to-finance` | Cara Justify Budget Outing Kantor ke Finance (Framework ROI) | Cara mengajukan budget outing kantor ke Finance/CFO: ubah dampak engagement dan retensi jadi angka penghematan. Panduan praktis untuk HR. |
| `cross-generational-team-building` | Team Building Lintas Generasi: Gen Z, Milenial & Gen X | Cara merancang team building untuk tim lintas generasi (Gen Z, milenial, Gen X): jalur aktivitas paralel dan cara mengakomodasi preferensi. |
| `post-merger-cultural-bonding` | Gathering Pasca-Merger: Panduan Integrasi Budaya 3 Hari | Panduan event 3 hari untuk menyatukan budaya tim setelah merger atau akuisisi: struktur sesi, aktivitas pembaur, dan hal yang wajib dihindari. |
| `force-majeure-contingency-corporate-outing` | Manajemen Risiko Outing Kantor: Force Majeure & Asuransi | Manajemen risiko outing kantor di Bandung: risk register, plan B indoor, protokol evakuasi, dan apa yang biasanya tidak ditanggung asuransi. |
| `indoor-vs-outdoor-corporate-outing` | Outing Kantor Indoor vs Outdoor: Cara Memilih yang Tepat | Indoor atau outdoor untuk outing kantor di Bandung? 6 faktor penentu: tujuan, kebugaran peserta, cuaca, budget, citra brand, dan risiko. |
| `corporate-outing-theme-selection` | Tema Outing Kantor: Ide yang Tidak Cringe & Sesuai Brand | Cara memilih tema outing kantor yang relevan dengan brand dan tujuan acara: 4 jenis tema, contoh penerapan, dan 5 tema yang sebaiknya dihindari. |

> Judul artikel risiko sengaja **tidak** memakai kata "musim hujan / plan B" supaya tidak berebut ranking dengan artikel W43 *Outing Kantor di Musim Hujan Bandung*.

## 2. Angka yang perlu dicek atau dilunakkan

Angka di bawah tidak punya sumber yang bisa ditunjukkan. **Kalau angkanya berasal dari data klien nyata, biarkan** dan cukup centang. Kalau tidak, ganti teksnya (cari dengan Ctrl+F di editor CMS).

| Artikel | Teks sekarang (cari) | Ganti dengan |
|---|---|---|
| 5-pillar | "70% perusahaan book vendor tanpa clear goal definition." (TL;DR) | "Banyak perusahaan book vendor tanpa tujuan yang jelas." |
| 5-pillar | "70% perusahaan yang kami brief pertama kali tidak punya specific objective." | "Sebagian besar perusahaan yang kami brief pertama kali belum punya tujuan yang spesifik." |
| tier-system | "60% dari portfolio kami di tier ini" | "porsi terbesar portfolio kami ada di tier ini" |
| justify-budget | "typical improvement 15-30% pada engagement metric, 10-20% pada retention intent" | "bandingkan selisihnya — angka inilah yang Anda bawa ke Finance" |
| justify-budget | "Sample data dari 100 peserta event: eNPS naik dari 32 ke 58 …" | Awali dengan "**Contoh ilustrasi:**" kalau bukan data klien nyata |
| justify-budget | "peserta event attrition turun 5-15% vs non-peserta" | "bandingkan tingkat attrition peserta vs non-peserta" |
| justify-budget | "8-15% productivity improvement" dan "20-30% improvement dalam cross-team initiative count" | Hapus angkanya; cukup jelaskan cara mengukurnya |
| cross-generational | "engagement metric improvement 15-25% vs single-stream format" | "engagement yang lebih baik dibanding format satu jalur" |
| post-merger | Case "Tech unicorn … 800 pax … 95% … turun 40%" | **Cocokkan dengan case study `post-merger-bonding-800-pax`.** Kalau angkanya beda, samakan. |
| force-majeure | "probabilitas hujan deras … 60–80% setiap sore" | "hujan deras hampir pasti turun di sore hari" |
| force-majeure | "probabilitas terjadi >30%", "5–20% per event", "<2% per event" | "sering terjadi", "kadang terjadi", "jarang tapi berdampak besar" |
| indoor-vs-outdoor | "probabilitas hujan sore >60%" | "hujan sore sangat sering" |

## 3. Setelah selesai

- [ ] Buka tiap artikel di `/insights/<slug>` untuk cek tampilannya
- [ ] Search Console → URL Inspection → **Request indexing** untuk 8 URL ini (supaya judul baru cepat terbaca Google)
