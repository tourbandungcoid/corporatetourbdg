"use client";

import { useState, useRef, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import type { Profile } from "@/lib/auth/getCurrentProfile";

type Props = { profile: Profile };

const ROLE_LABEL: Record<Profile["role"], string> = {
  super_admin: "Super Admin",
  content_admin: "Content Admin",
  sales_admin: "Sales Admin",
  marketing_admin: "Marketing Admin",
  viewer: "Viewer",
};

export function TopBar({ profile }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  const initials = (profile.full_name ?? profile.email)
    .split(/[\s@.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  return (
    <header className="h-16 border-b border-divider bg-paper flex items-center justify-end px-6 gap-3 relative">
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 rounded-full px-2 py-1.5 pr-4 hover:bg-cream transition"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-paper text-xs font-medium">
            {initials || "??"}
          </span>
          <span className="hidden md:flex flex-col items-start leading-tight">
            <span className="text-sm font-medium text-ink">
              {profile.full_name ?? profile.email.split("@")[0]}
            </span>
            <span className="text-xs text-slate">
              {ROLE_LABEL[profile.role]}
            </span>
          </span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-border bg-paper shadow-[0_16px_48px_rgba(15,31,26,0.12)] overflow-hidden">
            <div className="p-4 border-b border-divider">
              <p className="text-sm font-medium text-ink truncate">
                {profile.full_name ?? "—"}
              </p>
              <p className="text-xs text-slate mt-0.5 truncate">
                {profile.email}
              </p>
              <span className="inline-block mt-3 rounded-full bg-brand-light/70 px-2.5 py-0.5 text-[11px] font-medium text-brand-deep">
                {ROLE_LABEL[profile.role]}
              </span>
            </div>
            <button
              type="button"
              onClick={signOut}
              className="block w-full text-left px-4 py-3 text-sm text-ink hover:bg-cream transition"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
