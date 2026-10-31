# Content Inbox — bahan nyata untuk posting mingguan

Tempat CEO/tim menaruh bahan mentah. Setiap Kamis, jadwal otomatis Claude membaca file ini untuk menyusun 6 posting minggu depan.

**Cara isi:** tambahkan baris baru di bagian yang sesuai — boleh singkat, boleh bahasa chat. Edit langsung di GitHub (buka file ini → ikon pensil → Commit changes ke `main`).
Claude memindahkan bahan yang sudah dipakai ke bagian **Sudah dipakai** lewat PR mingguan.

---

## 1. Pertanyaan klien (untuk slot Tanya Jawab, Selasa & Jumat)

Format: `- [tanggal] pertanyaan — konteks singkat (opsional: jawaban yang biasa kita berikan)`

<!-- contoh: - [2026-11-02] Bisa bayar pakai termin 3x nggak? — HR perusahaan FMCG, 120 pax, biasanya kita jawab bisa asal pelunasan H-7 -->

## 2. Cerita event (untuk slot Rabu)

Format per event:
```
- Tanggal & lokasi:
- Jenis acara & jumlah peserta:
- Industri klien (nama boleh disamarkan):
- Tujuan acara:
- Satu kendala + cara kita mengatasinya:
- Hasil / komentar klien (kutipan kalau ada):
- Foto: link Google Drive (folder yang bisa dilihat publik, atau ID file)
```

## 3. Foto baru

Stok foto di `src/lib/drive-images.ts` baru 7, jadi banyak artikel memakai foto yang sama. Taruh link Drive di sini dan keterangan singkatnya.

<!-- contoh: - https://drive.google.com/file/d/<ID>/view — sesi games indoor, villa Lembang, Okt 2026 -->

## 4. Catatan / larangan dari CEO

Topik yang tidak boleh dibahas, angka yang tidak boleh dipakai, klien yang tidak boleh disebut, dll.

---

## Sudah dipakai

| Bahan | Dipakai di | Tanggal tayang |
|---|---|---|
