import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0F1F1A 0%, #2E5C3E 60%, #4E7E2A 100%)",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 120,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        7
      </div>
    ),
    { ...size }
  );
}
