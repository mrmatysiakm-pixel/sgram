import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Zostałeś zaproszony do rozmowy na singlegram.pl"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        position: "relative",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background:
            "radial-gradient(circle at 30% 50%, #ff6b35 0%, transparent 50%), radial-gradient(circle at 70% 50%, #ff8c42 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          zIndex: 1,
        }}
      >
        {/* Envelope/Message Icon */}
        <div
          style={{
            fontSize: 120,
          }}
        >
          💌
        </div>

        {/* Main Message */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.3,
          }}
        >
          Zostałeś zaproszony do rozmowy
        </div>

        {/* Brand */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginTop: "16px",
          }}
        >
          singlegram.pl
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#d1d5db",
            textAlign: "center",
          }}
        >
          Dyskretne randki online • 100% anonimowość
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
