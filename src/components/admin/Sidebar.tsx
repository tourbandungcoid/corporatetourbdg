"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/Logo";
import { X } from "@/components/Icon";
import type { UserRole } from "@/types/database";

type NavItem = {
  label: string;
  href: string;
  badge?: string;
  roles?: UserRole[];
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Overview",
    items: [{ label: "Dashboard", href: "/admin" }],
  },
  {
    label: "Content",
    items: [
      { label: "Homepage", href: "/admin/content/homepage" },
      { label: "Services", href: "/admin/content/services" },
      { label: "Programs", href: "/admin/content/programs" },
      { label: "Case Studies", href: "/admin/content/case-studies" },
      { label: "Testimonials", href: "/admin/content/testimonials" },
      { label: "Client Logos", href: "/admin/content/client-logos" },
      { label: "FAQ", href: "/admin/content/faqs" },
      { label: "Industries", href: "/admin/content/industries" },
      { label: "Destinations", href: "/admin/content/destinations" },
      { label: "Gallery", href: "/admin/content/gallery" },
      { label: "Blog", href: "/admin/content/blog" },
    ],
  },
  {
    label: "Sales",
    items: [
      {
        label: "Leads",
        href: "/admin/leads",
        roles: ["super_admin", "sales_admin", "marketing_admin"],
      },
      {
        label: "Proposals",
        href: "/admin/proposals",
        roles: ["super_admin", "sales_admin", "marketing_admin"],
      },
      {
        label: "Pipeline",
        href: "/admin/pipeline",
        roles: ["super_admin", "sales_admin"],
      },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        label: "Site Settings",
        href: "/admin/settings/site",
        roles: ["super_admin"],
      },
      {
        label: "Users & Roles",
        href: "/admin/settings/users",
        roles: ["super_admin"],
      },
      {
        label: "Audit Log",
        href: "/admin/settings/audit",
        roles: ["super_admin"],
      },
    ],
  },
];

function canAccess(item: NavItem, role: UserRole): boolean {
  if (!item.roles) return true;
  return item.roles.includes(role);
}

export function Sidebar({
  role,
  open,
  onClose,
}: {
  role: UserRole;
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-[var(--color-ink)] text-[var(--color-bone)] flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-[64px] px-5 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2.5">
            <LogoMark size={26} variant="default" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[15px] text-white">
                7Summits<span className="font-display-italic"> OS</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/40 mt-0.5">
                Admin
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-white/60 hover:text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3">
          {NAV_GROUPS.map((group) => {
            const accessibleItems = group.items.filter((i) => canAccess(i, role));
            if (accessibleItems.length === 0) return null;

            return (
              <div key={group.label} className="mb-6">
                <p className="px-3 mb-2 text-[10px] uppercase tracking-[0.18em] text-white/40 font-medium">
                  {group.label}
                </p>
                <ul className="space-y-0.5">
                  {accessibleItems.map((item) => {
                    const active =
                      item.href === "/admin"
                        ? pathname === "/admin"
                        : pathname.startsWith(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={`flex items-center justify-between px-3 py-2 rounded-md text-[14px] transition-colors ${
                            active
                              ? "bg-white/[0.08] text-white"
                              : "text-white/70 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[11px] px-1.5 py-0.5 rounded bg-[var(--color-brand)] text-white tabular">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>

        <div className="px-5 py-4 border-t border-white/10">
          <Link
            href="/"
            target="_blank"
            className="text-[12px] text-white/50 hover:text-[var(--color-brand)] flex items-center gap-1.5"
          >
            View live site →
          </Link>
        </div>
      </aside>
    </>
  );
}
