"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[global error]", error);
  }, [error]);

  return (
    <html lang="id">
      <body
        style={{
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', sans-serif",
          background: "#FAFAF7",
          color: "#0F1F1A",
          minHeight: "100vh",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 560, textAlign: "left" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: "#B91C1C",
              margin: 0,
            }}
          >
            500 · Critical error
          </p>
          <h1
            style={{
              fontSize: "2.5rem",
              lineHeight: 1.1,
              marginTop: 12,
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Something went very wrong.
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#4B5563",
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            Aplikasi kena error fundamental. Coba reload. Kalau persistent, hubungi tim di +62 811-2277-954.
          </p>
          {error.digest && (
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 12,
                color: "#9CA3AF",
                marginBottom: 24,
              }}
            >
              Error ID: {error.digest}
            </p>
          )}
          <button
            onClick={() => reset()}
            style={{
              background: "#0F1F1A",
              color: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: 9999,
              border: "none",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Reload page
          </button>
        </div>
      </body>
    </html>
  );
}
