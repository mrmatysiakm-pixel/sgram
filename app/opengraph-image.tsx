import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "singlegram.pl - Dyskretny portal randkowy"
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
          gap: "24px",
          zIndex: 1,
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-2px",
          }}
        >
          singlegram.pl
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Dyskretne Randki Online | Anonimowe Rozmowy
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#d1d5db",
              fontSize: 24,
            }}
          >
            🔒 100% Dyskrecja
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#d1d5db",
              fontSize: 24,
            }}
          >
            👤 Anonimowość
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#d1d5db",
              fontSize: 24,
            }}
          >
            💬 Bezpieczny Czat
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
