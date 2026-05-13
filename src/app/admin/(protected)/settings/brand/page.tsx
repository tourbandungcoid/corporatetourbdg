import Link from "next/link";
import { AppSettingsForm } from "@/components/admin/AppSettingsForm";
import { BrandCopyForm } from "@/components/admin/BrandCopyForm";
import {
  updateBrandColors,
  updateBrandTypography,
  updateBrandLogos,
} from "@/lib/actions/brand-actions";
import { getBrandSettings } from "@/lib/brand-settings";

export const dynamic = "force-dynamic";
export const metadata = { title: "Brand settings" };

export default async function BrandSettingsPage() {
  const b = await getBrandSettings();

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl space-y-6">
        <div className="mb-2">
          <Link href="/admin/settings" className="text-sm text-slate hover:text-ink">
            ← Back to settings
          </Link>
        </div>
        <div className="mb-6">
          <p className="eyebrow-brand">Settings</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            Brand visual control
          </h1>
          <p className="mt-2 text-sm text-slate">
            Colors, typography, logo URLs, dan editable text snippets.
            Perubahan visual instant — gak perlu rebuild.
          </p>
        </div>

        {/* Preview swatch row */}
        <section className="rounded-2xl border border-border bg-paper p-5">
          <p className="text-xs uppercase tracking-wider text-slate-mute font-medium mb-3">
            Preview current colors
          </p>
          <div className="grid grid-cols-5 gap-3">
            {[
              ["Ink", b.color_ink],
              ["Brand", b.color_brand],
              ["Brand deep", b.color_brand_deep],
              ["Forest", b.color_forest],
              ["Warm", b.color_warm],
              ["Bone", b.color_bone],
              ["Cream", b.color_cream],
              ["Paper", b.color_paper],
              ["Brand light", b.color_brand_light],
              ["Brand darker", b.color_brand_darker],
            ].map(([label, hex]) => (
              <div key={label} className="text-center">
                <div
                  className="aspect-square w-full rounded-lg border border-divider"
                  style={{ background: hex }}
                />
                <p className="mt-1.5 text-[10px] text-slate-mute leading-tight">{label}</p>
                <p className="text-[10px] font-mono text-slate">{hex}</p>
              </div>
            ))}
          </div>
        </section>

        <AppSettingsForm
          title="Colors (hex)"
          description="Setiap warna pakai format hex (#RRGGBB). Tailwind utilities (bg-brand, text-ink, dll) langsung consume."
          action={updateBrandColors}
          fields={[
            { name: "color_ink", label: "Ink (primary text)", default: b.color_ink },
            { name: "color_brand", label: "Brand", default: b.color_brand },
            { name: "color_brand_deep", label: "Brand deep (hover)", default: b.color_brand_deep },
            { name: "color_brand_darker", label: "Brand darker", default: b.color_brand_darker },
            { name: "color_brand_light", label: "Brand light", default: b.color_brand_light },
            { name: "color_forest", label: "Forest", default: b.color_forest },
            { name: "color_warm", label: "Warm accent", default: b.color_warm },
            { name: "color_bone", label: "Bone (background)", default: b.color_bone },
            { name: "color_cream", label: "Cream", default: b.color_cream },
            { name: "color_paper", label: "Paper (cards)", default: b.color_paper },
          ]}
        />

        <AppSettingsForm
          title="Typography"
          description="Google Fonts family name. Untuk apply full, font juga harus di-import di src/app/layout.tsx — saat ini Inter dan Fraunces. Hubungi developer kalau mau ganti font family baru."
          action={updateBrandTypography}
          fields={[
            { name: "font_sans", label: "Body font", default: b.font_sans, placeholder: "Inter" },
            {
              name: "font_display",
              label: "Display font (headlines)",
              default: b.font_display,
              placeholder: "Inter",
            },
          ]}
        />

        <AppSettingsForm
          title="Logos"
          description="Logo URL (Drive thumbnail, Supabase Storage, atau absolute URL). Kosongkan untuk pakai default LogoLockup component."
          action={updateBrandLogos}
          fields={[
            {
              name: "logo_primary_url",
              label: "Primary logo URL",
              type: "url",
              default: b.logo_primary_url ?? "",
              hint: "Used in navbar, footer pada light backgrounds",
            },
            {
              name: "logo_dark_url",
              label: "Dark variant URL",
              type: "url",
              default: b.logo_dark_url ?? "",
              hint: "For dark backgrounds (e.g. footer dark mode)",
            },
            {
              name: "logo_favicon_url",
              label: "Favicon URL",
              type: "url",
              default: b.logo_favicon_url ?? "",
              hint: "Browser tab icon (256x256 PNG/SVG)",
            },
          ]}
        />

        <BrandCopyForm initial={b.copy_overrides} />

        <div className="rounded-2xl border border-warm/30 bg-warm/5 p-4 text-xs text-slate">
          <p className="font-medium text-ink mb-1">📖 Copy override keys</p>
          <p className="leading-relaxed">
            Override snippets per page section. Gunakan dotted-key
            convention: <code className="font-mono">hero.headline</code>,{" "}
            <code className="font-mono">hero.subheadline</code>,{" "}
            <code className="font-mono">cta.primary</code>,{" "}
            <code className="font-mono">footer.tagline</code>, dll.
            Components yang sudah wired ke <code className="font-mono">getCopy()</code>{" "}
            akan auto-pick up override. Kalau key gak diset, fallback ke text di kode.
          </p>
        </div>
      </div>
    </main>
  );
}
