import Link from "next/link";
import { getPackages } from "@/lib/packages-data";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "Packages" };

async function getDbSlugs(): Promise<Set<string>> {
  try {
    const sb = createAdminClient();
    const { data } = await sb.from("packages").select("slug");
    return new Set((data ?? []).map((r: { slug: string }) => r.slug));
  } catch {
    return new Set();
  }
}

export default async function AdminPackagesPage() {
  const packages = getPackages();
  const edited = await getDbSlugs();

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-4xl">
        <div className="mb-8">
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            Packages <span className="text-slate-mute tabular">({packages.length})</span>
          </h1>
          <p className="mt-2 text-sm text-slate">
            Edit copywriting dan foto untuk setiap package. Perubahan langsung tampil di halaman publik.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-paper overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                <th className="px-6 py-3 font-medium">Package</th>
                <th className="px-4 py-3 font-medium">Pax</th>
                <th className="px-4 py-3 font-medium">Duration</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.slug} className="border-b border-divider/60 hover:bg-cream/40 transition">
                  <td className="px-6 py-4">
                    <Link href={`/admin/content/packages/${pkg.slug}`}
                      className="font-medium text-ink hover:text-brand-deep block">
                      {pkg.title}
                    </Link>
                    <p className="text-xs text-slate mt-0.5 font-mono">{pkg.slug}</p>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate">{pkg.paxRange}</td>
                  <td className="px-4 py-4 text-sm text-slate">{pkg.duration}</td>
                  <td className="px-4 py-4 text-sm text-slate">{pkg.startingPrice}</td>
                  <td className="px-4 py-4">
                    {edited.has(pkg.slug) ? (
                      <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-2 py-0.5 text-[11px] font-medium">
                        Edited
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-cream text-slate-mute px-2 py-0.5 text-[11px] font-medium">
                        Static
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
