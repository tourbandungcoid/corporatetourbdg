"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ArrowRight } from "@/components/icons/Icons";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const supabase = createClient();
    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth/callback`
        : undefined;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
        shouldCreateUser: true,
      },
    });

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    setStatus("sent");
    setMessage(
      `Magic link sudah dikirim ke ${email}. Cek inbox (atau spam) dan klik link di email.`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="label" htmlFor="email">
          Work email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="kamu@perusahaan.com"
          className="input"
          disabled={status === "sending" || status === "sent"}
        />
        <p className="helper">
          Magic link akan dikirim ke email ini. Tidak perlu password.
        </p>
      </div>

      {status === "sent" && (
        <div className="rounded-2xl border border-brand/30 bg-brand-light/50 p-4 text-sm text-brand-darker">
          ✓ {message}
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
          {message}
        </div>
      )}

      {status !== "sent" && (
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending magic link…" : "Kirim Magic Link"}
          <ArrowRight size={14} />
        </button>
      )}

      <p className="text-xs text-slate-mute text-center pt-4 border-t border-divider">
        Admin access only. Hubungi super admin kalau email lo belum punya
        akses ke dashboard.
      </p>
    </form>
  );
}
