# Schema / JSON-LD Templates — Siap Copy-Paste
## corporate.7summitstravel.com

---

## SCHEMA 1: Organization + TravelAgency (Sitewide — Pasang di semua halaman)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "TravelAgency", "LocalBusiness"],
      "@id": "https://corporate.7summitstravel.com/#organization",
      "name": "7Summits Travel",
      "alternateName": ["7 Summits Travel", "7summitstravel"],
      "legalName": "PT. [Nama Legal Perusahaan]",
      "description": "Spesialis corporate outing, MICE, team building, dan incentive trip di Indonesia. Berbasis di Bandung dengan pengalaman 13 tahun melayani lebih dari 500 perusahaan dari seluruh Indonesia.",
      "url": "https://corporate.7summitstravel.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://corporate.7summitstravel.com/images/logo-7summits-travel.png",
        "width": "200",
        "height": "60"
      },
      "image": "https://corporate.7summitstravel.com/images/7summits-travel-office-bandung.jpg",
      "foundingDate": "2011",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "20"
      },
      "telephone": "+62-811-2277-954",
      "email": "marketing@7summitstravel.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Cisaranten Kulon IV No.42",
        "addressLocality": "Bandung",
        "addressRegion": "Jawa Barat",
        "postalCode": "40293",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -6.9339,
        "longitude": 107.6977
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+62-811-2277-954",
          "contactType": "customer service",
          "availableLanguage": ["Indonesian", "English"],
          "contactOption": "TollFree"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+62-811-2277-954",
          "contactType": "sales",
          "availableLanguage": "Indonesian"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/7summitstravel/",
        "https://www.facebook.com/7summitstravel/",
        "https://www.tripadvisor.com/Attraction_Review-g297704-d10513955-Reviews-7_Summits_Travel-Bandung_West_Java_Java.html",
        "https://www.linkedin.com/company/7summits-travel/",
        "https://www.7summitstravel.com"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Layanan Corporate Outing & MICE",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Team Building",
              "description": "Program team building profesional outdoor dan indoor untuk perusahaan"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MICE",
              "description": "Meeting, Incentive, Conference, Exhibition planning dan execution"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Incentive Trip",
              "description": "Perjalanan insentif eksklusif ke Bali, Lombok, Raja Ampat, dan destinasi internasional"
            }
          }
        ]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Indonesia",
        "@id": "https://www.wikidata.org/wiki/Q252"
      },
      "priceRange": "Rp350.000 – Rp5.000.000 per pax"
    }
  ]
}
</script>
```

---

## SCHEMA 2: Service — Team Building (Halaman `/layanan/team-building/`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://corporate.7summitstravel.com/layanan/team-building/#service",
  "name": "Paket Team Building Profesional — 7Summits Travel",
  "description": "Program team building outdoor dan indoor untuk perusahaan di Bandung, Bali, dan seluruh Indonesia. Tersedia untuk 20–5.000 peserta dengan fasilitator berpengalaman.",
  "provider": {
    "@id": "https://corporate.7summitstravel.com/#organization"
  },
  "serviceType": "Team Building",
  "category": "Corporate Event Service",
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "lowPrice": "350000",
    "highPrice": "2000000",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "350000",
      "priceCurrency": "IDR",
      "unitText": "per orang",
      "minPrice": "350000"
    }
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Corporate HR Manager, General Affairs Manager"
  }
}
</script>
```

---

## SCHEMA 3: FAQPage (Halaman `/faq/` atau di halaman layanan)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa biaya paket corporate outing di Bandung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya corporate outing di Bandung bersama 7Summits Travel berkisar antara Rp 350.000 hingga Rp 1.500.000 per orang, tergantung durasi (1 hari atau menginap), jumlah peserta, dan paket aktivitas yang dipilih. Harga sudah termasuk transportasi, fasilitator, dan konsumsi sesuai paket. Hubungi kami untuk penawaran custom gratis."
      }
    },
    {
      "@type": "Question",
      "name": "Apa perbedaan MICE dan team building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MICE adalah singkatan dari Meeting, Incentive, Conference, dan Exhibition — mencakup seluruh spektrum event bisnis formal. Team building adalah salah satu format program dalam kategori Incentive yang fokus pada pengembangan kerjasama tim melalui aktivitas fisik maupun non-fisik. 7Summits Travel menyediakan keduanya sebagai layanan terpisah maupun terintegrasi."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa minimal peserta untuk menggunakan layanan corporate outing 7Summits Travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimal peserta untuk paket corporate outing adalah 30 orang. Untuk executive retreat atau incentive trip eksklusif, 7Summits Travel dapat melayani kelompok kecil mulai dari 15 orang. Tidak ada batas maksimal — kami telah mengelola event untuk 3.000+ peserta."
      }
    },
    {
      "@type": "Question",
      "name": "Destinasi apa saja yang tersedia untuk incentive trip perusahaan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "7Summits Travel menyediakan incentive trip ke destinasi domestik (Bandung, Bali, Lombok, Raja Ampat, Labuan Bajo, Yogyakarta, Manado) maupun internasional (Thailand, Jepang, Korea Selatan, Eropa, Dubai). Semua paket bisa dikustomisasi sesuai budget dan tujuan perusahaan."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama waktu yang dibutuhkan untuk merencanakan company gathering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Idealnya, perencanaan company gathering dimulai 2–3 bulan sebelum tanggal pelaksanaan untuk memastikan ketersediaan venue, akomodasi, dan vendor. Untuk event besar (500+ orang) atau destinasi internasional, kami menyarankan 4–6 bulan persiapan. Namun 7Summits Travel juga menerima fast-track booking untuk kebutuhan mendadak dengan biaya tambahan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah biaya corporate outing bisa dijadikan biaya perusahaan (tax deductible)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, biaya corporate outing umumnya dapat dibebankan sebagai biaya perusahaan yang mengurangi pajak (deductible expense) di Indonesia jika terkait dengan kegiatan bisnis, pelatihan karyawan, atau program penghargaan. 7Summits Travel menyediakan invoice dan dokumen resmi yang diperlukan untuk keperluan administrasi keuangan perusahaan. Konsultasikan dengan akuntan atau konsultan pajak Anda untuk detail lebih lanjut."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah 7Summits Travel menyediakan asuransi untuk peserta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, semua paket premium 7Summits Travel sudah termasuk asuransi perjalanan dan kecelakaan untuk seluruh peserta selama program berlangsung. Untuk paket dasar, asuransi dapat ditambahkan dengan biaya terpisah. Kami bekerja sama dengan perusahaan asuransi terkemuka di Indonesia."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara memesan paket corporate outing di 7Summits Travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proses pemesanan di 7Summits Travel sangat mudah: (1) Hubungi kami via WhatsApp +62 811-2277-954 atau email marketing@7summitstravel.com, (2) Diskusikan kebutuhan, tanggal, jumlah peserta, dan budget, (3) Kami siapkan proposal custom dalam 1x24 jam, (4) Setujui proposal dan tanda tangani MOU, (5) Bayar DP 30%, (6) Kami mulai proses persiapan. Gratis konsultasi tanpa komitmen."
      }
    }
  ]
}
</script>
```

---

## SCHEMA 4: BreadcrumbList (Semua halaman interior)

```html
<!-- Contoh untuk halaman /layanan/team-building/ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": "https://corporate.7summitstravel.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Layanan",
      "item": "https://corporate.7summitstravel.com/layanan/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Team Building",
      "item": "https://corporate.7summitstravel.com/layanan/team-building/"
    }
  ]
}
</script>
```

---

## SCHEMA 5: Article (Untuk setiap blog post)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://corporate.7summitstravel.com/blog/tips-memilih-eo-team-building/#article",
  "headline": "5 Tips Memilih EO Team Building yang Tepat untuk Perusahaan Anda",
  "description": "Panduan lengkap memilih vendor team building profesional di Indonesia. Checklist, red flags, dan pertanyaan penting yang harus diajukan.",
  "image": {
    "@type": "ImageObject",
    "url": "https://corporate.7summitstravel.com/images/tips-memilih-eo-team-building.jpg",
    "width": 1200,
    "height": 630
  },
  "datePublished": "2026-01-15T08:00:00+07:00",
  "dateModified": "2026-03-20T10:00:00+07:00",
  "author": {
    "@type": "Person",
    "name": "[Nama Penulis]",
    "jobTitle": "Senior Corporate Travel Consultant",
    "worksFor": {
      "@id": "https://corporate.7summitstravel.com/#organization"
    }
  },
  "publisher": {
    "@id": "https://corporate.7summitstravel.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://corporate.7summitstravel.com/blog/tips-memilih-eo-team-building/"
  },
  "articleSection": "Corporate Outing Guide",
  "keywords": ["team building", "EO gathering", "corporate outing", "MICE Indonesia"],
  "inLanguage": "id-ID",
  "about": {
    "@type": "Thing",
    "name": "Team Building"
  }
}
</script>
```

---

## SCHEMA 6: AggregateRating (Setelah kumpulkan ulasan)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://corporate.7summitstravel.com/#organization",
  "name": "7Summits Travel",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>
```

---

## CARA VALIDASI SCHEMA

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema.org Validator:** https://validator.schema.org/
3. **Structured Data Testing Tool:** Paste URL setelah website live

## URUTAN IMPLEMENTASI

1. Schema Organization (sitewide) — pasang di `<head>` semua halaman
2. BreadcrumbList — semua halaman interior
3. FAQPage — homepage dan halaman layanan
4. Service — setiap halaman layanan
5. Article — setiap blog post
6. AggregateRating — setelah ada minimal 10 review
