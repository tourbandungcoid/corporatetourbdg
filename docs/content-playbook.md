# Content & Tracking Playbook — corporate.tourbandung.co.id

Panduan operasional untuk 3 rutinitas:

1. **Konten rutin** — 2 artikel/minggu (naik ke 3–4 setelah 4 minggu kalau kualitas terjaga)
2. **UTM di semua link keluar** — bio IG, broadcast WA, LinkedIn, Google Business, signature email
3. **Review bulanan "Converting pages"** — perbanyak topik yang menghasilkan lead; perbaiki atau gabungkan yang tidak

> ⚠️ **Dependensi:** kartu *Channel* & *Converting pages* di `/admin` dan short link `/go/...` baru aktif setelah branch tracking ter-deploy. Saat ini build `main` masih gagal (lihat catatan audit). Artikel via CMS **tidak** terpengaruh — bisa publish sekarang.

---

## 1. Konten rutin

### Ritme mingguan

| Hari | Aktivitas | PIC |
|---|---|---|
| Senin | Claude menyiapkan 2 draft (format siap paste CMS) di `docs/content-drafts/` | Claude |
| Senin–Selasa | Review isi: fakta, harga, tone, foto | CEO / tim |
| Selasa | Publish artikel #1 → distribusi (WA, IG story, LinkedIn) | Admin |
| Jumat | Publish artikel #2 → distribusi | Admin |

**Kenapa mulai 2/minggu, bukan 4:** 23 artikel lama punya 3 pasang topik kembar. Artikel ke-4 dalam seminggu biasanya mulai mengulang topik dan saling mengganggu ranking. Naikkan ke 3–4/minggu setelah 4 minggu, kalau Search Console sudah menunjukkan impresi dan ada bahan nyata dari event (cerita, foto, angka).

### Cara publish (tanpa deploy)

1. Login `/admin` → **Content → Insights → New**
2. Salin tiap blok dari file draft ke field dengan nama yang sama
3. Set **status = published** **pada hari publish** (CMS tidak menyembunyikan tanggal masa depan — kalau di-publish lebih awal, artikel langsung tampil)
4. Buka `/insights/<slug>` untuk cek tampilan
5. Kirim link distribusi (ada di bagian bawah setiap draft)

### Kalender 8 minggu (Okt–Des 2026)

Urutan disesuaikan musim: akhir tahun, musim hujan, dan kick-off Januari.

| Minggu | Artikel #1 (Selasa) | Artikel #2 (Jumat) | Money page yang didukung |
|---|---|---|---|
| W43 · 20–23 Okt | ✅ Employee Gathering Akhir Tahun: Konsep & Timeline | ✅ Outing Kantor di Musim Hujan Bandung: Plan B | employee-gathering, outing-kantor |
| W44 · 27–30 Okt | Rundown Gathering 2 Hari 1 Malam — Template | Cara Bikin Proposal Outing ke Direksi (+ template) | corporate-gathering, villa-gathering, /proposal/sample |
| W45 · 3–6 Nov | Annual Kick-off Januari: Format & Rundown | Games Team Building Indoor yang Nggak Cringe | annual-meeting-organizer, team-building |
| W46 · 10–13 Nov | Villa untuk Gathering Kantor: Checklist Sebelum DP | Family Day Perusahaan: Konsep & Rundown | villa-gathering, employee-gathering |
| W47 · 17–20 Nov | Outbound Perusahaan: Checklist Keamanan & Asuransi | Glamping untuk Corporate: Kapan Cocok, Kapan Tidak | outbound-perusahaan, glamping-corporate |
| W48 · 24–27 Nov | Leadership Retreat: Format Sesi yang Dipakai Setelah Pulang | Outing Kantor Ramah Muslim: Ibadah, Halal, Ruang Sholat | leadership-retreat, outing-kantor |
| W49 · 1–4 Des | Team Building untuk Tim Hybrid/Remote | Rombongan Jakarta–Bandung: Bus, Elf, atau Kereta? | team-building, corporate-outing |
| W50 · 8–11 Des | Dokumentasi Event Kantor untuk Employer Branding | Awarding Night Karyawan: Ide Kategori & Alur Acara | services (cross-sell 7summits Project), corporate-gathering |

**Slot 3–4 (setelah W46, kalau kapasitas ada):** recap event nyata (butuh data & foto dari tim), jawaban singkat dari pertanyaan sales call (bagus untuk AEO), update artikel lama yang performanya turun.

**Topik yang dilarang (sudah ada, risiko kanibalisasi):** biaya team building, rundown 1 hari, checklist vendor EO, gathering vs outing, Lembang vs Ciwidey, MICE vs outing, incentive trip, executive offsite, ROI event, timeline 12 minggu.

### Checklist kualitas per artikel

- [ ] 800–1.200 kata, ada TL;DR, minimal 1 list langkah/checklist
- [ ] Satu keyword utama di title, slug, meta description (≤160 karakter), dan paragraf pertama
- [ ] Tidak ada angka/statistik karangan — harga mengacu ke `/pricing` dan `packages-data.ts`
- [ ] 2–3 `relatedSlugs` ke artikel yang relevan
- [ ] Hero image **berbeda** dari artikel lain (jangan `heroMain` lagi)
- [ ] Penutup mengarah ke CTA (proposal 24 jam / WhatsApp)
- [ ] Tone "Corporate Seru": ngobrol, jelas, tidak textbook

> **Keterbatasan CMS saat ini:** artikel CMS belum punya field *internal links* ke money page (artikel repo punya). Usulan perbaikan: tambah kolom `internal_links` di CMS — perlu deploy.

---

## 2. UTM di semua link

### Short link (pakai ini, jangan tulis UTM manual)

Format: `https://corporate.tourbandung.co.id/go/<kode>` — otomatis diarahkan ke website dengan UTM.

| Tempat | Link | Channel di dashboard |
|---|---|---|
| Bio Instagram | `/go/ig` | Social |
| IG story (link sticker) | `/go/ig-story` | Social |
| LinkedIn (profil & post) | `/go/li` | Social |
| Broadcast WhatsApp | `/go/wa` | WhatsApp |
| Status WhatsApp | `/go/wa-status` | WhatsApp |
| Google Business Profile (tombol Website) | `/go/gbp` | Organic Search |
| Signature email tim | `/go/sig` | Email |
| Deskripsi YouTube | `/go/yt` | Social |
| Website grup 7Summits (Camera, Travel, dll) | `/go/7s` | Referral |

**Mengarahkan ke halaman tertentu + memberi label kampanye:**

```
/go/wa?to=/insights/employee-gathering-akhir-tahun&c=w43-gathering
        └── halaman tujuan (harus diawali "/")      └── label (utm_content)
```

Contoh: broadcast promo Desember → `/go/wa?to=/employee-gathering-bandung&c=promo-des-2026`

### Aturan

1. **Setiap link ke website yang kita sebar = short link.** Tidak ada link polos.
2. Label `c=` pakai format `<minggu/bulan>-<topik>`, huruf kecil, tanpa spasi (contoh `w44-proposal-direksi`).
3. Butuh sumber baru (misalnya TikTok, partner hotel)? Minta tambah kode di `src/lib/short-links.ts` — **jangan pakai ulang** kode untuk sumber lain.
4. Iklan berbayar (Google/Meta Ads) **tidak** pakai short link — pakai auto-tagging (gclid/fbclid) + UTM bawaan platform.

### Yang perlu diganti sekarang

- [ ] Bio IG @7summitstravel → `corporate.tourbandung.co.id/go/ig` (kalau bio memakai link-in-bio tool, ganti link corporate di dalamnya)
- [ ] LinkedIn company page → field Website `/go/li`
- [ ] Google Business Profile → field Website `/go/gbp`
- [ ] Signature email semua tim (template sudah diperbarui di `src/lib/email-signature-template.ts`)
- [ ] Template broadcast WA → `/go/wa?to=...&c=...`
- [ ] Footer/link di website grup 7Summits → `/go/7s`

---

## 3. Review bulanan "Converting pages"

**Kapan:** Senin pertama setiap bulan, 30 menit. **Input:** kartu Channel & Converting pages di `/admin` + query di bawah + Google Search Console (Pages, 28 hari).

### Query (paste di Supabase SQL Editor — read-only)

```sql
-- Lead per halaman konversi, bulan lalu
SELECT coalesce(conversion_page, '(untracked)') AS page,
       count(*)                                          AS leads,
       count(*) FILTER (WHERE priority IN ('hot','warm')) AS hot_warm,
       count(*) FILTER (WHERE status = 'won')            AS won
FROM public.leads
WHERE deleted_at IS NULL
  AND created_at >= date_trunc('month', now()) - interval '1 month'
  AND created_at <  date_trunc('month', now())
GROUP BY 1
ORDER BY leads DESC;

-- Lead per channel, bulan lalu
SELECT coalesce(channel, '(untracked)') AS channel,
       count(*) AS leads,
       count(*) FILTER (WHERE status = 'won') AS won
FROM public.leads
WHERE deleted_at IS NULL
  AND created_at >= date_trunc('month', now()) - interval '1 month'
  AND created_at <  date_trunc('month', now())
GROUP BY 1
ORDER BY leads DESC;
```

### Aturan keputusan

| Kondisi artikel (umur ≥ 60 hari) | Tindakan |
|---|---|
| ≥ 2 lead/bulan **atau** ada lead hot/warm | **Perbanyak** — tulis 2 artikel pendukung di topik yang sama, tambahkan link dari money page |
| Klik GSC tinggi, 0 lead | **Perbaiki CTA** — tambah CTA di tengah artikel, tawarkan sample proposal / quick quote |
| Impresi GSC tinggi, CTR < 1% | **Perbaiki judul & meta description** |
| Impresi rendah, 0 lead, topik mirip artikel lain | **Gabungkan** ke artikel yang lebih kuat + redirect 301 |
| Impresi rendah, topik unik | **Tunggu 1 bulan lagi**, lalu update isi (tambah contoh, FAQ) |

### Output review (isi tiap bulan)

| Bulan | Top 3 converting pages | Channel terbesar | Perbanyak | Perbaiki | Gabungkan | Topik baru bulan depan |
|---|---|---|---|---|---|---|
| Nov 2026 | | | | | | |

Hasil review menentukan kalender 4 minggu berikutnya.
