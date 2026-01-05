import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "singlegram.pl - Dyskretne Randki Online | Anonimowe Rozmowy",
  description:
    "Poznaj nowych ludzi w 100% dyskretnie i anonimowo. singlegram.pl to portal randkowy, który gwarantuje pełną prywatność i bezpieczeństwo Twoich rozmów. Dołącz już dziś!",
  keywords: [
    "randki online",
    "dyskretne randki",
    "anonimowe rozmowy",
    "portal randkowy",
    "singlegram",
    "znajomi",
    "czat",
    "prywatność",
    "dyskrecja",
  ],
  authors: [{ name: "singlegram.pl" }],
  creator: "singlegram.pl",
  publisher: "singlegram.pl",
  metadataBase: new URL("https://singlegram.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "singlegram.pl - Dyskretne Randki Online | Anonimowe Rozmowy",
    description:
      "Poznaj nowych ludzi w 100% dyskretnie i anonimowo. Portal randkowy z naciskiem na prywatność i bezpieczeństwo.",
    url: "https://singlegram.pl",
    siteName: "singlegram.pl",
    images: [
      {
        url: "https://singlegram.pl/og-image.png",
        width: 1200,
        height: 630,
        alt: "singlegram.pl - Dyskretny portal randkowy",
        type: "image/png",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "singlegram.pl - Dyskretne Randki Online",
    description: "Poznaj nowych ludzi w 100% dyskretnie i anonimowo. Portal randkowy z naciskiem na prywatność.",
    images: ["https://singlegram.pl/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ff6b35",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
