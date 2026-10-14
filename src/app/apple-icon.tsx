import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — same orbit mark as the favicon, rendered as PNG. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#431407" }}>
        <svg width="132" height="132" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="5.5" fill="#F97316" />
          <ellipse cx="16" cy="16" rx="12" ry="5.5" fill="none" stroke="#FED7AA" strokeWidth="1.6" transform="rotate(-28 16 16)" />
          <circle cx="25.8" cy="10.8" r="2" fill="#FED7AA" />
        </svg>
      </div>
    ),
    size,
  );
}
