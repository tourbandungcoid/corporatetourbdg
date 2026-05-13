import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { LogoLockup } from "@/components/Logo";

export const metadata = {
  title: "Admin Login",
  description: "Tour Bandung Corporate admin dashboard login.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-bone flex flex-col">
      <header className="container-1280 py-6">
        <Link href="/" aria-label="Home">
          <LogoLockup height={36} />
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-border bg-paper p-8 md:p-10 shadow-[0_24px_56px_rgba(15,31,26,0.06)]">
            <div className="mb-8">
              <span className="eyebrow-brand">Admin</span>
              <h1 className="font-display mt-3 text-3xl md:text-4xl text-ink leading-tight">
                Sign in to dashboard.
              </h1>
              <p className="mt-3 text-sm text-slate">
                Internal team access. Masuk dengan email + password.
              </p>
            </div>

            <LoginForm />
          </div>

          <p className="mt-6 text-center text-xs text-slate">
            ← <Link href="/" className="link-underline">Kembali ke beranda</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
