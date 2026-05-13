"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowRight } from "@/components/icons/Icons";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "signing" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("signing");
    setMessage("");

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
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@7summitstravel.com"
          className="input"
          disabled={status === "signing"}
        />
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
          {message || "Login gagal. Cek email & password."}
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
