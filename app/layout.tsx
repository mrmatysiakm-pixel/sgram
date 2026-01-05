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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "singlegram.pl - Dyskretny portal randkowy",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "singlegram.pl - Dyskretne Randki Online",
    description: "Poznaj nowych ludzi w 100% dyskretnie i anonimowo. Portal randkowy z naciskiem na prywatność.",
    images: ["/og-image.jpg"],
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.jpg",
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
