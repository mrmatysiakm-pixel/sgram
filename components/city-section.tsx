"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import LoginRequiredModal from "./login-required-modal"

const cities = [
  { name: "Warszawa", users: "45,000+" },
  { name: "Kraków", users: "28,000+" },
  { name: "Łódź", users: "18,000+" },
  { name: "Wrocław", users: "22,000+" },
  { name: "Poznań", users: "19,000+" },
  { name: "Gdańsk", users: "16,000+" },
  { name: "Szczecin", users: "12,000+" },
  { name: "Bydgoszcz", users: "10,000+" },
  { name: "Lublin", users: "11,000+" },
  { name: "Katowice", users: "15,000+" },
]

export default function CitySection() {
  const [showModal, setShowModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState("")

  const handleCityClick = (cityName: string) => {
    setSelectedCity(cityName)
    setShowModal(true)
  }

  return (
    <>
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Wybierz swoje miasto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Poznawaj osoby z Twojego miasta i okolic
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {cities.map((city) => (
              <button
                key={city.name}
                onClick={() => handleCityClick(city.name)}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 group"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF4500] to-[#E94B3C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{city.name}</h3>
                    <p className="text-sm text-muted-foreground">{city.users} użytkowników</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <LoginRequiredModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        action={`zobaczyć profile z miasta ${selectedCity}`}
      />
    </>
  )
}
