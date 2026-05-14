import Link from "next/link";
import { AppSettingsForm } from "@/components/admin/AppSettingsForm";
import { getBrandSettings } from "@/lib/brand-settings";
import {
  updateHeroCopy,
  updateServicesCopy,
  updateWhyCopy,
  updateTrustCopy,
  updateLeadCopy,
  updateCtaCopy,
} from "@/lib/actions/homepage-copy-actions";
import { STATS } from "@/lib/site";

export const dynamic = "force-dynamic";
export const metadata = { title: "Homepage copy" };

export default async function HomepageCopyPage() {
  const b = await getBrandSettings();
  const c = b.copy_overrides;
  const g = (key: string, fb: string) => c[key] ?? fb;

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl space-y-6">
        <div className="mb-2">
          <Link href="/admin/settings" className="text-sm text-slate hover:text-ink">← Back to settings</Link>
        </div>
        <div className="mb-6">
          <p className="eyebrow-brand">Settings</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">Homepage copy</h1>
          <p className="mt-2 text-sm text-slate">
            Edit teks yang tampil di homepage — perubahan langsung aktif tanpa rebuild.
          </p>
        </div>

        <AppSettingsForm
          title="Hero section"
          description="Bagian paling atas halaman utama (full-screen dengan foto background)."
          action={updateHeroCopy}
          fields={[
            { name: "home.hero.eyebrow", label: "Trust pill (baris kecil di atas headline)", default: g("home.hero.eyebrow", `⭐ 4.9/5 Google Reviews · ${STATS.companiesTrusted} perusahaan Indonesia · ${STATS.yearsOperating}`) },
            { name: "home.hero.line1", label: "Headline baris 1 (putih)", default: g("home.hero.line1", "Corporate Outing") },
            { name: "home.hero.line2", label: "Headline baris 2 (hijau brand)", default: g("home.hero.line2", "& Gathering Bandung") },
            { name: "home.hero.line3", label: "Headline baris 3 (putih)", default: g("home.hero.line3", "yang benar-benar kerja.") },
            { name: "home.hero.sub", label: "Subheadline", type: "textarea" as const, default: g("home.hero.sub", "Specialist B2B — bukan travel agent, bukan generic EO. Company gathering, team building, executive offsite di Bandung & Jawa Barat. Dari startup unicorn sampai BUMN nasional, untuk tim 20 sampai 2.000 orang.") },
            { name: "home.hero.cta_primary", label: "Tombol CTA utama", default: g("home.hero.cta_primary", "Request Proposal — 24 Jam") },
            { name: "home.hero.cta_secondary", label: "Tombol CTA sekunder", default: g("home.hero.cta_secondary", "Konsultasi Gratis") },
          ]}
        />

        <AppSettingsForm
          title="What we do — Services section"
          description="Section daftar 10 layanan."
          action={updateServicesCopy}
          fields={[
            { name: "home.services.eyebrow", label: "Eyebrow label", default: g("home.services.eyebrow", "What we do") },
            { name: "home.services.headline", label: "Headline", default: g("home.services.headline", "10 program yang siap di-customize untuk tim lo.") },
            { name: "home.services.sub", label: "Sub-teks (kanan)", type: "textarea" as const, default: g("home.services.sub", "Dari intimate retreat sampai mass gathering 2.000 pax — semua di-design dari brief, bukan paket template.") },
          ]}
        />

        <AppSettingsForm
          title="Why choose us — Header"
          description="Section alasan kenapa pilih kami (bagian header saja)."
          action={updateWhyCopy}
          fields={[
            { name: "home.why.eyebrow", label: "Eyebrow label", default: g("home.why.eyebrow", "Why choose us") },
            { name: "home.why.headline", label: "Headline", default: g("home.why.headline", "Kenapa 100+ HR pilih kami.") },
            { name: "home.why.sub", label: "Sub-teks", type: "textarea" as const, default: g("home.why.sub", "Empat hal yang konsisten kami dengar dari client repeat-booker — why they came back, dan kenapa mereka rekomendasikan ke HR-HR lain di industri mereka.") },
            { name: "home.why.p1.title", label: "Poin 01 — Judul", default: g("home.why.p1.title", "Strategic partner, bukan agent forward booking.") },
            { name: "home.why.p1.body", label: "Poin 01 — Isi", type: "textarea" as const, default: g("home.why.p1.body", "Setiap brief lo di-handle senior planner yang ngerti business outcome. Goal bonding pasca-merger di-design beda dengan goal annual celebration.") },
            { name: "home.why.p1.proof", label: "Poin 01 — The proof", default: g("home.why.p1.proof", "100% custom-designed, 0 paket copy-paste") },
            { name: "home.why.p2.title", label: "Poin 02 — Judul", default: g("home.why.p2.title", "Bandung insider network sejak 2018.") },
            { name: "home.why.p2.body", label: "Poin 02 — Isi", type: "textarea" as const, default: g("home.why.p2.body", "Akses langsung ke 60+ venue: villa private, resort premium, glamping site, outdoor ground. Bukan calo, bukan reseller. Tahu mana road yang macet jam berapa.") },
            { name: "home.why.p2.proof", label: "Poin 02 — The proof", default: g("home.why.p2.proof", "60+ venue partnership di Bandung & Jawa Barat") },
            { name: "home.why.p3.title", label: "Poin 03 — Judul", default: g("home.why.p3.title", "Pricing transparan. No surprise markup.") },
            { name: "home.why.p3.body", label: "Poin 03 — Isi", type: "textarea" as const, default: g("home.why.p3.body", "Proposal detailed breakdown — lo bisa lihat exactly margin kami. No admin fee tiba-tiba, no tax muncul mendadak. Finance team lo bakal love this.") },
            { name: "home.why.p3.proof", label: "Poin 03 — The proof", default: g("home.why.p3.proof", "0% hidden fees dalam 6 tahun terakhir") },
            { name: "home.why.p4.title", label: "Poin 04 — Judul", default: g("home.why.p4.title", "Speed yang bikin decision cepat.") },
            { name: "home.why.p4.body", label: "Poin 04 — Isi", type: "textarea" as const, default: g("home.why.p4.body", "Free proposal lengkap dalam 24 jam setelah briefing call. Most vendor butuh 5 hari. Lo bisa update management dalam 1-2 hari, bukan minggu depan.") },
            { name: "home.why.p4.proof", label: "Poin 04 — The proof", default: g("home.why.p4.proof", "Proposal dalam 24 jam · Response awal avg 6 jam") },
          ]}
        />

        <AppSettingsForm
          title="Trusted By — Client section"
          action={updateTrustCopy}
          fields={[
            { name: "home.trust.eyebrow", label: "Eyebrow label", default: g("home.trust.eyebrow", "Trusted By") },
            { name: "home.trust.sub", label: "Sub-teks", default: g("home.trust.sub", "Perusahaan terbaik di Indonesia memilih kami untuk corporate event mereka") },
          ]}
        />

        <AppSettingsForm
          title="Lead magnet — Sample proposal"
          description="Section download sample proposal (kotak gelap)."
          action={updateLeadCopy}
          fields={[
            { name: "home.lead.badge", label: "Badge kecil", default: g("home.lead.badge", "Free download") },
            { name: "home.lead.headline1", label: "Headline baris 1", default: g("home.lead.headline1", "Sample proposal untuk") },
            { name: "home.lead.headline2", label: "Headline baris 2 (brand color)", default: g("home.lead.headline2", "outing kantor 200 pax.") },
            { name: "home.lead.sub", label: "Sub-teks", type: "textarea" as const, default: g("home.lead.sub", "Real proposal yang kami kirim ke klien tech unicorn tahun lalu (data sensitive sudah di-redact). Pakai buat reference internal.") },
            { name: "home.lead.item1", label: "Checklist item 1", default: g("home.lead.item1", "Real sample proposal (bukan template)") },
            { name: "home.lead.item2", label: "Checklist item 2", default: g("home.lead.item2", "Detailed cost breakdown — line-item") },
            { name: "home.lead.item3", label: "Checklist item 3", default: g("home.lead.item3", "Sample itinerary 2D1N untuk 200 pax") },
            { name: "home.lead.item4", label: "Checklist item 4", default: g("home.lead.item4", "Contract clauses + terms checklist") },
            { name: "home.lead.cta", label: "Tombol CTA", default: g("home.lead.cta", "Email me the sample") },
            { name: "home.lead.social_proof", label: "Social proof (bawah tombol)", default: g("home.lead.social_proof", "🔒 800+ HR sudah download. No spam — kami kirim sekali + 1 follow-up 3 hari kemudian.") },
          ]}
        />

        <AppSettingsForm
          title="Final CTA — Penutup halaman"
          description="Section besar di paling bawah sebelum footer."
          action={updateCtaCopy}
          fields={[
            { name: "home.cta.eyebrow", label: "Eyebrow label", default: g("home.cta.eyebrow", "Ready when you are") },
            { name: "home.cta.line1", label: "Headline baris 1 (putih)", default: g("home.cta.line1", "Free proposal.") },
            { name: "home.cta.line2", label: "Headline baris 2 (brand muted)", default: g("home.cta.line2", "No commitment.") },
            { name: "home.cta.line3", label: "Headline baris 3 (putih)", default: g("home.cta.line3", "No pressure.") },
            { name: "home.cta.sub", label: "Sub-teks", type: "textarea" as const, default: g("home.cta.sub", "Briefing call 15 menit. Proposal lengkap dalam 24 jam. Tim lo review & approve internal. Itu workflow-nya — nggak lebih ribet dari itu.") },
            { name: "home.cta.primary", label: "Tombol utama", default: g("home.cta.primary", "Request Proposal") },
            { name: "home.cta.whatsapp", label: "Tombol WhatsApp", default: g("home.cta.whatsapp", "WhatsApp Aja Dulu") },
          ]}
        />
      </div>
    </main>
  );
}
