"use client"

import type React from "react"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import LoginRequiredModal from "./login-required-modal"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalAction, setModalAction] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent, action: string) => {
    e.preventDefault()
    setModalAction(action)
    setShowModal(true)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-[#FF4500]/10" : "bg-black"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <Heart className="w-7 h-7 text-[#FF4500] fill-[#FF4500]" />
              <span className="text-[#FF4500]">singlegram.pl</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={(e) => handleLinkClick(e, "przeglądać profile")}
                className="text-gray-300 hover:text-[#FF4500] transition-colors font-medium"
              >
                Profile
              </button>
              <button
                onClick={(e) => handleLinkClick(e, "zobaczyć kto jest online")}
                className="text-gray-300 hover:text-[#FF4500] transition-colors font-medium"
              >
                Teraz Online
              </button>
              <button
                onClick={(e) => handleLinkClick(e, "oglądać kamerki")}
                className="text-gray-300 hover:text-[#FF4500] transition-colors font-medium"
              >
                Kamerki
              </button>
              <button
                onClick={(e) => handleLinkClick(e, "zalogować się")}
                className="text-gray-300 hover:text-[#FF4500] transition-colors font-medium"
              >
                Zaloguj się
              </button>
              <Button
                asChild
                className="bg-gradient-to-r from-[#FF4500] to-[#E94B3C] hover:from-[#E94B3C] hover:to-[#FF4500] text-white font-semibold"
              >
                <Link href="/rejestracja">Zarejestruj się</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button asChild className="md:hidden bg-gradient-to-r from-[#FF4500] to-[#E94B3C] text-white" size="sm">
              <Link href="/rejestracja">Dołącz</Link>
            </Button>
          </div>
        </div>
      </nav>

      <LoginRequiredModal isOpen={showModal} onClose={() => setShowModal(false)} action={modalAction} />
    </>
  )
}
