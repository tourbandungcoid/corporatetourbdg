"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowRight } from "@/components/icons/Icons";

/**
 * Resolve a login input to a full email. Allows users to log in with
 * just a username (e.g. "superadmin") — auto-appends "@admin.local"
 * for internal accounts that don't need real email delivery.
 */
function resolveEmail(input: string): string {
  const trimmed = input.trim();
  if (trimmed.includes("@")) return trimmed.toLowerCase();
  return `${trimmed.toLowerCase()}@admin.local`;
}

export function LoginForm() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "signing" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("signing");
    setMessage("");

    const email = resolveEmail(identifier);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="label" htmlFor="identifier">
          Username or email
        </label>
        <input
          id="identifier"
          type="text"
          required
          autoComplete="username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="superadmin atau kamu@perusahaan.com"
          className="input"
          disabled={status === "signing"}
        />
        <p className="mt-1 text-xs text-slate-mute">
          Username pendek (tanpa <code className="font-mono">@</code>) di-resolve sebagai{" "}
          <code className="font-mono">username@admin.local</code>.
        </p>
      </div>

      <div>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="input"
          disabled={status === "signing"}
        />
      </div>

      {status === "error" && (
        <div className="rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
          {message || "Login gagal. Cek username / password."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "signing"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "signing" ? "Signing in…" : "Sign in"}
        <ArrowRight size={14} />
      </button>

      <p className="text-xs text-slate-mute text-center pt-4 border-t border-divider">
        Admin access only. Lupa password? Hubungi super admin.
      </p>
    </form>
  );
}
