import { ImageResponse } from "next/og";

export const alt = "Anvaddya Orbit — From Curiosity to Capability. From Capability to Evidence.";
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
          justifyContent: "space-between",
          background: "#431407",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            border: "2px solid rgba(253,186,116,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 230,
            width: 140,
            height: 140,
            borderRadius: 9999,
            background: "#F97316",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#FDBA74", fontFamily: "sans-serif" }}>
          Anvaddya Orbit · School Innovation Ecosystem
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05, maxWidth: 960 }}>
          <span>From Curiosity to Capability.</span>
          <span style={{ color: "#FB923C", fontStyle: "italic" }}>From Capability to Evidence.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif" }}>
          Applied STEM, robotics, IoT, AI and research for Classes 1–12
        </div>
      </div>
    ),
    size,
  );
}
