"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoLockup } from "@/components/Logo";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/content/services", label: "Services" },
  { href: "/admin/content/packages", label: "Packages" },
  { href: "/admin/content/case-studies", label: "Case Studies" },
  { href: "/admin/content/insights", label: "Insights" },
  { href: "/admin/content/faq", label: "FAQ" },
  { href: "/admin/content/testimonials", label: "Testimonials" },
  { href: "/admin/content/clients", label: "Clients" },
  { href: "/admin/media", label: "Media" },
  { href: "/admin/settings", label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-60 flex-col border-r border-divider bg-paper">
      <div className="h-16 flex items-center px-6 border-b border-divider">
        <Link href="/admin" aria-label="Admin home">
          <LogoLockup height={28} showCorporateLabel={false} />
        </Link>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <p className="px-3 mt-1 mb-2 text-[10px] tracking-[0.16em] uppercase text-slate-mute">
          Overview
        </p>
        {NAV.slice(0, 2).map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            active={pathname === item.href || pathname.startsWith(item.href + "/")}
          />
        ))}

        <p className="px-3 mt-6 mb-2 text-[10px] tracking-[0.16em] uppercase text-slate-mute">
          Content
        </p>
        {NAV.slice(2, 9).map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            active={pathname === item.href || pathname.startsWith(item.href + "/")}
          />
        ))}

        <p className="px-3 mt-6 mb-2 text-[10px] tracking-[0.16em] uppercase text-slate-mute">
          Library & Settings
        </p>
        {NAV.slice(9).map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            active={pathname === item.href || pathname.startsWith(item.href + "/")}
          />
        ))}
      </nav>
    </aside>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "block rounded-lg px-3 py-2 text-sm font-medium mb-0.5 transition-colors",
        active
          ? "bg-ink text-paper"
          : "text-ink/70 hover:bg-cream hover:text-ink",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
