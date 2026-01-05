import { Shield, Lock, EyeOff, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Pełna dyskrecja",
    description: "Twoje dane osobowe są chronione. Nikt nie dowie się o Twoich rozmowach.",
  },
  {
    icon: Lock,
    title: "Anonimowe rozmowy",
    description: "Decydujesz, kiedy ujawnić swoją tożsamość. Rozmawiaj bez zobowiązań.",
  },
  {
    icon: EyeOff,
    title: "Prywatność przede wszystkim",
    description: "Kontrolujesz, kto widzi Twój profil i zdjęcia. Bez niespodzianek.",
  },
  {
    icon: MessageSquare,
    title: "Bezpieczny kontakt",
    description: "Czatuj bez podawania numeru telefonu czy mediów społecznościowych.",
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Dlaczego singlegram.pl?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Twoja prywatność i dyskrecja są naszym priorytetem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF4500] to-[#E94B3C] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
