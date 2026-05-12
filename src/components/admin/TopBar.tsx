"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, ChevronDown } from "@/components/Icon";
import { createClient } from "@/lib/supabase/client";
import type { Profile } from "@/types/database";

const ROLE_LABEL: Record<string, string> = {
  super_admin: "Super Admin",
  content_admin: "Content Admin",
  sales_admin: "Sales Admin",
  marketing_admin: "Marketing Admin",
  viewer: "Viewer",
};

export function TopBar({
  profile,
  onMenuClick,
}: {
  profile: Profile;
  onMenuClick: () => void;
}) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const initials =
    profile.full_name
      ?.split(" ")
      .slice(0, 2)
      .map((s) => s[0])
      .join("")
      .toUpperCase() ||
    profile.email[0].toUpperCase();

  return (
    <header className="h-[64px] bg-[var(--color-paper)] border-b border-[var(--color-border)] flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-2 text-[var(--color-ink)]"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="hidden lg:flex items-center gap-2 text-[13px] text-[var(--color-slate)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
        <span>Database connected</span>
        <span className="text-[var(--color-slate-mute)]">·</span>
        <span className="tabular">{process.env.NEXT_PUBLIC_SUPABASE_URL?.replace("https://", "").replace(".supabase.co", "")}</span>
      </div>

      <div className="relative">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center gap-2.5 hover:bg-[var(--color-cream)] rounded-md px-2.5 py-1.5 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-[var(--color-brand)]/15 text-[var(--color-brand-deep)] flex items-center justify-center text-[12px] font-medium">
            {initials}
          </div>
          <div className="hidden sm:flex flex-col items-start leading-tight">
            <span className="text-[13px] font-medium text-[var(--color-ink)]">
              {profile.full_name || profile.email}
            </span>
            <span className="text-[11px] text-[var(--color-slate)]">
              {ROLE_LABEL[profile.role]}
            </span>
          </div>
          <ChevronDown size={14} className="text-[var(--color-slate)]" />
        </button>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-64 bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md shadow-lg z-50 py-2">
              <div className="px-4 py-3 border-b border-[var(--color-divider)]">
                <p className="text-[13px] font-medium text-[var(--color-ink)]">
                  {profile.full_name || "—"}
                </p>
                <p className="text-[12px] text-[var(--color-slate)] truncate">
                  {profile.email}
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2.5 text-[13px] text-[var(--color-error)] hover:bg-[var(--color-cream)]"
              >
                Sign out
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
