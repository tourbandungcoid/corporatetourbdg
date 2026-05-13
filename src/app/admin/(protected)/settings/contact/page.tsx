import Link from "next/link";
import { AppSettingsForm } from "@/components/admin/AppSettingsForm";
import { updateContact } from "@/lib/actions/app-settings-actions";
import { getAppSettings } from "@/lib/app-settings";

export const dynamic = "force-dynamic";
export const metadata = { title: "Contact settings" };

export default async function ContactSettingsPage() {
  const settings = await getAppSettings();
  const c = settings.contact;

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6">
          <Link href="/admin/settings" className="text-sm text-slate hover:text-ink">
            ← Back to settings
          </Link>
        </div>
        <div className="mb-8">
          <p className="eyebrow-brand">Settings</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">Contact info</h1>
          <p className="mt-2 text-sm text-slate">
            Source of truth untuk WhatsApp, email, address yang muncul di
            seluruh site. Update di sini → revalidate ke semua page otomatis.
          </p>
        </div>

        <AppSettingsForm
          title="Contact details"
          action={updateContact}
          fields={[
            {
              name: "whatsapp",
              label: "WhatsApp (E.164, no +) *",
              hint: "e.g. 628112277954",
              default: c.whatsapp,
            },
            {
              name: "phone_display",
              label: "Phone display *",
              hint: "e.g. 0811 2277 954",
              default: c.phone_display,
            },
            {
              name: "email",
              label: "Email *",
              type: "email",
              default: c.email,
            },
            {
              name: "office_hours",
              label: "Office hours *",
              hint: 'e.g. "Senin–Jumat · 08.00–17.00 WIB"',
              default: c.office_hours,
            },
            { name: "address_street", label: "Address street *", default: c.address_street },
            { name: "address_city", label: "City *", default: c.address_city },
            { name: "address_region", label: "Region *", default: c.address_region },
            { name: "address_postal", label: "Postal code *", default: c.address_postal },
            {
              name: "address_country",
              label: "Country ISO code *",
              hint: 'e.g. "ID"',
              default: c.address_country,
            },
            {
              name: "address_full",
              label: "Address (full) *",
              type: "textarea",
              hint: "Single-line full address used in schema + footer",
              default: c.address_full,
            },
            {
              name: "maps_url",
              label: "Google Maps URL",
              type: "url",
              default: c.maps_url,
            },
          ]}
        />
      </div>
    </main>
  );
}
