"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LoginRequiredModalProps {
  isOpen: boolean
  onClose: () => void
  action: string
}

export default function LoginRequiredModal({ isOpen, onClose, action }: LoginRequiredModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FF4500] to-[#E94B3C] rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">Musisz być zalogowany</h3>

          <p className="text-gray-600 mb-6">
            Aby {action}, musisz posiadać konto. Zarejestruj się za darmo lub zaloguj się, jeśli już masz konto.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-[#FF4500] to-[#E94B3C] hover:from-[#E94B3C] hover:to-[#FF4500] text-white font-semibold h-12 text-base"
            >
              <Link href="/rejestracja">Zarejestruj się</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full border-2 border-gray-300 hover:border-[#FF4500] hover:text-[#FF4500] text-white font-semibold h-12 text-base bg-gray-900"
            >
              <Link href="/logowanie">Zaloguj się</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
