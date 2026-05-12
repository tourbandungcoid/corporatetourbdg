"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Check } from "@/components/Icon";
import type { SiteSettings } from "@/types/database";

type TabId = "contact" | "branding" | "stats" | "social" | "seo" | "analytics";

const TABS: { id: TabId; label: string }[] = [
  { id: "contact", label: "Contact" },
  { id: "branding", label: "Branding" },
  { id: "stats", label: "Stats" },
  { id: "social", label: "Social" },
  { id: "seo", label: "SEO" },
  { id: "analytics", label: "Analytics" },
];

export function SiteSettingsForm({ initial }: { initial: SiteSettings }) {
  const router = useRouter();
  const [tab, setTab] = useState<TabId>("contact");
  const [data, setData] = useState<SiteSettings>(initial);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = <K extends keyof SiteSettings>(
    key: K,
    value: SiteSettings[K]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSaved(false);

    const supabase = createClient();
    const { error: updateError } = await supabase
      .from("site_settings")
      .update({
        contact: data.contact,
        branding: data.branding,
        stats: data.stats,
        social: data.social,
        seo_defaults: data.seo_defaults,
        analytics: data.analytics,
      })
      .eq("id", 1);

    setSaving(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setSaved(true);
    router.refresh();
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Tab nav */}
      <div className="flex flex-wrap gap-1 border-b border-[var(--color-border)] mb-8">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`px-4 py-3 text-[14px] font-medium transition-colors relative ${
              tab === t.id
                ? "text-[var(--color-ink)]"
                : "text-[var(--color-slate)] hover:text-[var(--color-ink)]"
            }`}
          >
            {t.label}
            {tab === t.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand)]" />
            )}
          </button>
        ))}
      </div>

      <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-7 lg:p-9 space-y-5">
        {tab === "contact" && (
          <>
            <FieldGrid>
              <Field
                label="Phone (display)"
                value={data.contact.phone}
                onChange={(v) =>
                  updateField("contact", { ...data.contact, phone: v })
                }
              />
              <Field
                label="Phone (raw, E.164)"
                value={data.contact.phone_raw}
                onChange={(v) =>
                  updateField("contact", { ...data.contact, phone_raw: v })
                }
                helper="Format: +6281xxxxxxxxx (untuk tel: link)"
              />
            </FieldGrid>
            <FieldGrid>
              <Field
                label="WhatsApp number"
                value={data.contact.whatsapp}
                onChange={(v) =>
                  updateField("contact", { ...data.contact, whatsapp: v })
                }
              />
              <Field
                label="WhatsApp URL"
                value={data.contact.whatsapp_url}
                onChange={(v) =>
                  updateField("contact", { ...data.contact, whatsapp_url: v })
                }
                helper="wa.me/... dengan pre-filled message"
              />
            </FieldGrid>
            <Field
              label="Email"
              type="email"
              value={data.contact.email}
              onChange={(v) =>
                updateField("contact", { ...data.contact, email: v })
              }
            />
            <FieldGrid>
              <Field
                label="Street address"
                value={data.contact.address.street}
                onChange={(v) =>
                  updateField("contact", {
                    ...data.contact,
                    address: { ...data.contact.address, street: v },
                  })
                }
              />
              <Field
                label="City"
                value={data.contact.address.city}
                onChange={(v) =>
                  updateField("contact", {
                    ...data.contact,
                    address: { ...data.contact.address, city: v },
                  })
                }
              />
            </FieldGrid>
            <FieldGrid>
              <Field
                label="Region / Province"
                value={data.contact.address.region}
                onChange={(v) =>
                  updateField("contact", {
                    ...data.contact,
                    address: { ...data.contact.address, region: v },
                  })
                }
              />
              <Field
                label="Postal code"
                value={data.contact.address.postal_code}
                onChange={(v) =>
                  updateField("contact", {
                    ...data.contact,
                    address: { ...data.contact.address, postal_code: v },
                  })
                }
              />
            </FieldGrid>
          </>
        )}

        {tab === "branding" && (
          <>
            <FieldGrid>
              <Field
                label="Brand name"
                value={data.branding.brand_name}
                onChange={(v) =>
                  updateField("branding", { ...data.branding, brand_name: v })
                }
              />
              <Field
                label="Parent brand"
                value={data.branding.parent_brand}
                onChange={(v) =>
                  updateField("branding", { ...data.branding, parent_brand: v })
                }
              />
            </FieldGrid>
            <Field
              label="Legal name"
              value={data.branding.legal_name}
              onChange={(v) =>
                updateField("branding", { ...data.branding, legal_name: v })
              }
            />
            <Textarea
              label="Tagline"
              value={data.branding.tagline}
              onChange={(v) =>
                updateField("branding", { ...data.branding, tagline: v })
              }
              helper="Tampil di hero subline + meta description"
            />
            <FieldGrid>
              <Field
                label="Established year"
                type="number"
                value={String(data.branding.established_year)}
                onChange={(v) =>
                  updateField("branding", {
                    ...data.branding,
                    established_year: parseInt(v) || 2012,
                  })
                }
              />
              <Field
                label="Logo URL"
                value={data.branding.logo_url ?? ""}
                onChange={(v) =>
                  updateField("branding", {
                    ...data.branding,
                    logo_url: v || null,
                  })
                }
                helper="Optional — override SVG logo dengan custom URL"
              />
            </FieldGrid>
            <ColorRow
              colors={data.branding.colors}
              onChange={(colors) =>
                updateField("branding", { ...data.branding, colors })
              }
            />
          </>
        )}

        {tab === "stats" && (
          <>
            <p className="text-[13px] text-[var(--color-slate)] mb-2">
              Angka yang tampil di Hero, Footer, dan section trust.
            </p>
            <FieldGrid>
              <Field
                label="Programs delivered"
                value={data.stats.programs}
                onChange={(v) =>
                  updateField("stats", { ...data.stats, programs: v })
                }
              />
              <Field
                label="Enterprise clients"
                value={data.stats.clients}
                onChange={(v) =>
                  updateField("stats", { ...data.stats, clients: v })
                }
              />
            </FieldGrid>
            <FieldGrid>
              <Field
                label="Total pax served"
                value={data.stats.pax}
                onChange={(v) => updateField("stats", { ...data.stats, pax: v })}
              />
              <Field
                label="Years operating"
                value={data.stats.years}
                onChange={(v) =>
                  updateField("stats", { ...data.stats, years: v })
                }
              />
            </FieldGrid>
          </>
        )}

        {tab === "social" && (
          <>
            <Field
              label="LinkedIn URL"
              value={data.social.linkedin ?? ""}
              onChange={(v) =>
                updateField("social", { ...data.social, linkedin: v || null })
              }
            />
            <Field
              label="Instagram URL"
              value={data.social.instagram ?? ""}
              onChange={(v) =>
                updateField("social", { ...data.social, instagram: v || null })
              }
            />
            <Field
              label="YouTube URL"
              value={data.social.youtube ?? ""}
              onChange={(v) =>
                updateField("social", { ...data.social, youtube: v || null })
              }
            />
          </>
        )}

        {tab === "seo" && (
          <>
            <Field
              label="Default title"
              value={data.seo_defaults.default_title}
              onChange={(v) =>
                updateField("seo_defaults", {
                  ...data.seo_defaults,
                  default_title: v,
                })
              }
              helper="Page title untuk halaman tanpa override"
            />
            <Textarea
              label="Default meta description"
              value={data.seo_defaults.default_description}
              onChange={(v) =>
                updateField("seo_defaults", {
                  ...data.seo_defaults,
                  default_description: v,
                })
              }
              helper="150–160 karakter optimal"
            />
            <Field
              label="Default Open Graph image URL"
              value={data.seo_defaults.default_og_image ?? ""}
              onChange={(v) =>
                updateField("seo_defaults", {
                  ...data.seo_defaults,
                  default_og_image: v || null,
                })
              }
              helper="1200x630px, fallback untuk semua halaman"
            />
            <Textarea
              label="Primary keywords (comma-separated)"
              value={data.seo_defaults.keywords.join(", ")}
              onChange={(v) =>
                updateField("seo_defaults", {
                  ...data.seo_defaults,
                  keywords: v
                    .split(",")
                    .map((k) => k.trim())
                    .filter(Boolean),
                })
              }
            />
          </>
        )}

        {tab === "analytics" && (
          <>
            <Field
              label="Google Analytics 4 ID"
              value={data.analytics.ga4_id ?? ""}
              onChange={(v) =>
                updateField("analytics", { ...data.analytics, ga4_id: v || null })
              }
              helper="G-XXXXXXXXXX"
            />
            <Field
              label="Meta Pixel ID"
              value={data.analytics.meta_pixel_id ?? ""}
              onChange={(v) =>
                updateField("analytics", {
                  ...data.analytics,
                  meta_pixel_id: v || null,
                })
              }
              helper="Numeric pixel ID dari Meta Business Manager"
            />
            <Field
              label="Google Tag Manager ID"
              value={data.analytics.gtag_id ?? ""}
              onChange={(v) =>
                updateField("analytics", { ...data.analytics, gtag_id: v || null })
              }
              helper="GTM-XXXXXXX"
            />
            <Field
              label="Hotjar ID"
              value={data.analytics.hotjar_id ?? ""}
              onChange={(v) =>
                updateField("analytics", {
                  ...data.analytics,
                  hotjar_id: v || null,
                })
              }
            />
            <Field
              label="LinkedIn Insight ID"
              value={data.analytics.linkedin_insight_id ?? ""}
              onChange={(v) =>
                updateField("analytics", {
                  ...data.analytics,
                  linkedin_insight_id: v || null,
                })
              }
            />
          </>
        )}
      </div>

      {/* Sticky save bar */}
      <div className="sticky bottom-4 mt-6 flex items-center justify-between gap-4 bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md px-5 py-4 shadow-[0_8px_24px_rgba(15,31,26,0.08)]">
        <div className="text-[13px] text-[var(--color-slate)]">
          {error ? (
            <span className="text-[var(--color-error)]">⚠ {error}</span>
          ) : saved ? (
            <span className="text-[var(--color-success)] inline-flex items-center gap-1.5">
              <Check size={14} /> Saved · live di semua halaman
            </span>
          ) : (
            <span>Changes auto-apply ke seluruh website saat di-save.</span>
          )}
        </div>
        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save changes"}
        </button>
      </div>
    </form>
  );
}

function FieldGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-5">{children}</div>;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  helper,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  helper?: string;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input"
      />
      {helper && <span className="helper">{helper}</span>}
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  helper,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  helper?: string;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="textarea"
      />
      {helper && <span className="helper">{helper}</span>}
    </div>
  );
}

function ColorRow({
  colors,
  onChange,
}: {
  colors: { brand: string; brand_deep: string; forest: string };
  onChange: (c: { brand: string; brand_deep: string; forest: string }) => void;
}) {
  return (
    <div>
      <label className="label">Brand colors</label>
      <div className="grid sm:grid-cols-3 gap-3">
        {(["brand", "brand_deep", "forest"] as const).map((k) => (
          <div key={k} className="flex items-center gap-3">
            <input
              type="color"
              value={colors[k]}
              onChange={(e) => onChange({ ...colors, [k]: e.target.value })}
              className="w-12 h-12 rounded-md border border-[var(--color-border)] cursor-pointer"
            />
            <div className="flex-1">
              <div className="text-[11px] uppercase tracking-wider text-[var(--color-slate)]">
                {k.replace("_", " ")}
              </div>
              <input
                type="text"
                value={colors[k]}
                onChange={(e) => onChange({ ...colors, [k]: e.target.value })}
                className="w-full text-[13px] font-mono tabular bg-transparent outline-none"
              />
            </div>
          </div>
        ))}
      </div>
      <span className="helper">
        Catatan: brand color sudah hardcoded di Tailwind tokens. Edit di sini untuk
        save preference, integrasi ke design system di next iteration.
      </span>
    </div>
  );
}
