import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <MessageCircle className="w-7 h-7 text-[#FF4500]" />
              <span className="text-[#FF4500]">singlegram.pl</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Dyskretne i anonimowe randki online. Twoja prywatność jest u nas priorytetem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rejestracja" className="text-muted-foreground hover:text-[#FF4500] transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/rejestracja" className="text-muted-foreground hover:text-[#FF4500] transition-colors">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link href="/rejestracja" className="text-muted-foreground hover:text-[#FF4500] transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/rejestracja" className="text-muted-foreground hover:text-[#FF4500] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Dołącz do nas</h3>
            <p className="text-muted-foreground mb-4">Poznawaj ludzi w pełnej anonimowości i bezpieczeństwie!</p>
            <Link
              href="/rejestracja"
              className="inline-flex items-center gap-2 bg-[#FF4500] hover:bg-[#E63E00] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Zarejestruj się
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-muted-foreground">© 2025 singlegram.pl – Dyskretne randki online</p>
        </div>
      </div>
    </footer>
  )
}
