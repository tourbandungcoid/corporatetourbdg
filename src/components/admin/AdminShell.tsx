"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import type { Profile } from "@/types/database";

export function AdminShell({
  children,
  profile,
}: {
  children: React.ReactNode;
  profile: Profile;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bone)] flex">
      <Sidebar
        role={profile.role}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 lg:pl-[260px] flex flex-col min-h-screen">
        <TopBar profile={profile} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 px-6 lg:px-10 py-8 lg:py-12">{children}</main>
      </div>
    </div>
  );
}
