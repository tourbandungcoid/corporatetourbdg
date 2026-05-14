"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoLockup } from "@/components/Logo";

const NAV = [
  { href: "/admin", label: "Dashboard", group: "overview" },
  { href: "/admin/tasks", label: "Tasks", group: "overview" },
  { href: "/admin/leads", label: "Leads", group: "overview" },
  { href: "/admin/activity", label: "Activity log", group: "overview" },
  { href: "/admin/content/insights", label: "Insights", group: "content" },
  { href: "/admin/content/case-studies", label: "Case studies", group: "content" },
  { href: "/admin/content/testimonials", label: "Testimonials", group: "content" },
  { href: "/admin/content/clients", label: "Client logos", group: "content" },
  { href: "/admin/content/videos", label: "Videos", group: "content" },
  { href: "/admin/content/faq", label: "FAQ", group: "content" },
  { href: "/admin/users", label: "Users", group: "settings" },
  { href: "/admin/settings", label: "Settings", group: "settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const overview = NAV.filter((n) => n.group === "overview");
  const content = NAV.filter((n) => n.group === "content");
  const settings = NAV.filter((n) => n.group === "settings");

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
        {overview.map((item) => (
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
        {content.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            active={pathname === item.href || pathname.startsWith(item.href + "/")}
          />
        ))}
        <p className="mt-2 px-3 text-[10px] text-slate-mute leading-relaxed">
          Services, packages, glossary &amp; team tetap di{" "}
          <code className="font-mono text-[11px]">src/lib/*-data.ts</code>.
        </p>

        <p className="px-3 mt-6 mb-2 text-[10px] tracking-[0.16em] uppercase text-slate-mute">
          Settings
        </p>
        {settings.map((item) => (
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
