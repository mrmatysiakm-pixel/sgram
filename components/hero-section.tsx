import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Lock } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/20 to-[#E94B3C]/20" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FF4500]/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#E94B3C]/10 rounded-full blur-2xl animate-pulse delay-300" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#FF4500]/10 rounded-full blur-xl animate-pulse delay-700" />
        <Heart className="absolute top-32 right-1/4 w-12 h-12 text-[#FF4500]/20 animate-pulse" />
        <Sparkles className="absolute bottom-32 right-1/3 w-10 h-10 text-[#E94B3C]/20 animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
            Dyskretne randki. Anonimowe rozmowy. Bez zobowiązań.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto text-pretty">
            Poznawaj nowych ludzi w pełnej dyskrecji. Twoja tożsamość pozostaje chroniona, a rozmowy są prywatne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FF4500] to-[#E94B3C] hover:from-[#E94B3C] hover:to-[#FF4500] text-white text-lg px-8 py-6 font-bold shadow-2xl"
            >
              <Link href="/rejestracja">
                Zacznij anonimowo
                <Lock className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="pt-8 flex items-center justify-center gap-2 text-gray-300">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#FF4500]/20 border-2 border-[#FF4500] flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 fill-[#FF4500] text-[#FF4500]" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">Ponad 150,000+ dyskretnych użytkowników</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="oklch(0.1 0 0)"
          />
        </svg>
      </div>
    </section>
  )
}
