"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhyUsSection from "@/components/why-us-section"
import TrustSection from "@/components/trust-section"
import RecentlyRegistered from "@/components/recently-registered"
import ProfileSlider from "@/components/profile-slider"
import CitySection from "@/components/city-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function InvitePage() {
  const params = useParams()
  const inviteCode = params.inviteCode as string

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen relative">
      {/* Background - main page with overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="opacity-20 blur-sm">
          <Navbar />
          <HeroSection />
          <WhyUsSection />
          <TrustSection />
          <RecentlyRegistered />
          <ProfileSlider />
          <CitySection />
          <Footer />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Centered invitation modal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-12 animate-in zoom-in-95 duration-300">
          {/* Avatar/Icon */}
          <div className="mb-6 text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#FF4500] mx-auto mb-4 shadow-lg">
              <Image
                src="/czarne-kabaretki-avatar.png"
                alt="CzarneKabaretki"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-2">
              Kod zaproszenia: {inviteCode}
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#FF4500]">CzarneKabaretki</span> zaprosiła Cię do rozpoczęcia rozmowy
            </h1>

            <p className="text-gray-600 text-lg">
              Aby rozpocząć rozmowę i poznać tę osobę, musisz się zarejestrować lub zalogować.
            </p>
          </div>

          {/* Button */}
          <div className="space-y-3">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-[#FF4500] to-[#E94B3C] hover:from-[#E94B3C] hover:to-[#FF4500] text-white font-bold h-14 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/rejestracja">Przyjmij zaproszenie</Link>
            </Button>

            <p className="text-center text-sm text-gray-500">
              Masz już konto?{" "}
              <Link href="/rejestracja" className="text-[#FF4500] hover:underline font-semibold">
                Zaloguj się
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
