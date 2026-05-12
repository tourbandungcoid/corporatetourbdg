import { Suspense } from "react";
import { LoginForm } from "./LoginForm";
import { LogoMark } from "@/components/Logo";

export const metadata = {
  title: "Sign in — 7Summits OS",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bone)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[440px]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <LogoMark size={36} />
            <span className="font-display text-[22px] text-[var(--color-ink)]">
              7Summits<span className="font-display-italic"> OS</span>
            </span>
          </div>
          <h1 className="font-display text-[32px] lg:text-[40px] leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
            Sign in
          </h1>
          <p className="mt-3 text-[15px] text-[var(--color-slate)]">
            Akses admin panel 7Summits OS
          </p>
        </div>

        <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-7 lg:p-9">
          <Suspense fallback={<div className="h-[220px]" />}>
            <LoginForm />
          </Suspense>
        </div>

        <p className="text-center mt-8 text-[12px] text-[var(--color-slate)]">
          Lupa password? Hubungi super admin.
        </p>
      </div>
    </div>
  );
}
