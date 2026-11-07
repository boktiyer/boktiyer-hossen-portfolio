import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

// The preview image shown when your link is shared on Facebook, LinkedIn, WhatsApp, etc.
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 80% 20%, #651C32 0%, #4A0E20 35%, #100B0E 75%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "linear-gradient(135deg, #800020, #4A0E20)",
            border: "3px solid #C08091",
            fontSize: 56,
            fontWeight: 800,
            marginBottom: 48,
          }}
        >
          {siteConfig.initials}
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 38, color: "#C08091", marginTop: 16 }}>
          {siteConfig.shortRole}
        </div>
        <div style={{ fontSize: 26, color: "#B9A8AE", marginTop: 28 }}>
          Next.js · React · Tailwind CSS · Canva · Microsoft Office
        </div>
      </div>
    ),
    size,
  );
}
