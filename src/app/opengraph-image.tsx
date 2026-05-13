import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TourBandung Corporate — Specialist B2B corporate outing di Bandung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #FAFAF7 0%, #FFFFFF 60%, #F5F4EE 100%)",
          padding: "72px",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        {/* Top: brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#0F1F1A",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            7
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#6BA239",
                fontWeight: 600,
              }}
            >
              TourBandung Corporate
            </span>
            <span style={{ fontSize: "14px", color: "#4F5E58", marginTop: "2px" }}>
              7Summits Travel · since 2018
            </span>
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: "76px",
              lineHeight: 1.04,
              color: "#0F1F1A",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            B2B corporate outing
            <br />
            di Bandung &amp; Jawa Barat.
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#4F5E58",
              marginTop: "28px",
              maxWidth: "880px",
              lineHeight: 1.4,
            }}
          >
            400+ events delivered · senior planner full-time · transparent pricing line-item.
          </p>
        </div>

        {/* Bottom: stat strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            borderTop: "1px solid #EFF0E8",
          }}
        >
          <div style={{ display: "flex", gap: "48px" }}>
            <Stat value="400+" label="Events delivered" />
            <Stat value="4.9★" label="Google · 105 reviews" />
            <Stat value="92%" label="Repeat booking" />
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#0F1F1A",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            corporate.tourbandung.co.id →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#0F1F1A",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: "14px", color: "#4F5E58", marginTop: "2px" }}>
        {label}
      </span>
    </div>
  );
}
