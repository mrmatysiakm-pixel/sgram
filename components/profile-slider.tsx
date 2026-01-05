"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart, UserPlus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoginRequiredModal from "./login-required-modal"
import Link from "next/link"
import { profiles } from "@/lib/profiles-data"

export default function ProfileSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProfile, setSelectedProfile] = useState<(typeof profiles)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalAction, setModalAction] = useState("")

  const nextProfile = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length)
  }

  const prevProfile = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "active":
        return "bg-yellow-500"
      default:
        return "bg-gray-400"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online"
      case "active":
        return "Aktywny 10 min temu"
      default:
        return "Nieaktywny"
    }
  }

  const visibleProfiles = [
    profiles[(currentIndex - 1 + profiles.length) % profiles.length],
    profiles[currentIndex],
    profiles[(currentIndex + 1) % profiles.length],
  ]

  const handleAction = (action: string) => {
    setModalAction(action)
    setShowModal(true)
  }

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Poznaj naszych użytkowników</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Zobacz, kto jest teraz dostępny w Twojej okolicy
            </p>
          </div>

          {/* Desktop Slider */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-6">
              <Button
                onClick={prevProfile}
                size="icon"
                className="gradient-romantic text-white rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-6 items-center">
                {visibleProfiles.map((profile, idx) => (
                  <Link
                    key={profile.id}
                    href={`/profile/${profile.username}`}
                    className={`transition-all duration-300 ${
                      idx === 1 ? "scale-100 opacity-100" : "scale-90 opacity-50"
                    }`}
                  >
                    <div className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer w-80">
                      <div className="relative h-96">
                        <img
                          src={profile.images[0] || "/placeholder.svg"}
                          alt={profile.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(profile.status)}`} />
                          <span className="text-sm font-medium text-gray-900">{getStatusText(profile.status)}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">
                          {profile.name}, {profile.age}
                        </h3>
                        <p className="text-muted-foreground flex items-center gap-1">📍 {profile.distance} od Ciebie</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Button
                onClick={nextProfile}
                size="icon"
                className="gradient-romantic text-white rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="max-w-sm mx-auto">
              <Link
                href={`/profile/${profiles[currentIndex].username}`}
                className="bg-card rounded-2xl overflow-hidden shadow-xl cursor-pointer block"
              >
                <div className="relative h-96">
                  <img
                    src={profiles[currentIndex].images[0] || "/placeholder.svg"}
                    alt={profiles[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(profiles[currentIndex].status)}`} />
                    <span className="text-sm font-medium text-gray-900">
                      {getStatusText(profiles[currentIndex].status)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {profiles[currentIndex].name}, {profiles[currentIndex].age}
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-1">
                    📍 {profiles[currentIndex].distance} od Ciebie
                  </p>
                </div>
              </Link>

              <div className="flex justify-center gap-4 mt-6">
                <Button
                  onClick={prevProfile}
                  size="icon"
                  className="gradient-romantic text-white rounded-full w-12 h-12"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={nextProfile}
                  size="icon"
                  className="gradient-romantic text-white rounded-full w-12 h-12"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Modal */}
          {selectedProfile && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Image Gallery */}
                <div className="sticky top-0 bg-card border-b border-gray-200 p-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">
                    {selectedProfile.name}, {selectedProfile.age}
                  </h3>
                  <Button onClick={() => setSelectedProfile(null)} size="icon" variant="ghost" className="rounded-full">
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Image Gallery */}
                  <div className="relative">
                    <div className="relative h-96 rounded-xl overflow-hidden">
                      <img
                        src={selectedProfile.images[currentImageIndex] || "/placeholder.svg"}
                        alt={selectedProfile.name}
                        className="w-full h-full object-cover"
                      />
                      {selectedProfile.images.length > 1 && (
                        <>
                          <Button
                            onClick={() =>
                              setCurrentImageIndex(
                                (prev) => (prev - 1 + selectedProfile.images.length) % selectedProfile.images.length,
                              )
                            }
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-foreground hover:bg-white rounded-full"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </Button>
                          <Button
                            onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedProfile.images.length)}
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-foreground hover:bg-white rounded-full"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </Button>
                        </>
                      )}
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      {selectedProfile.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(selectedProfile.status)}`} />
                      <span className="font-medium">{getStatusText(selectedProfile.status)}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      📍 <span>{selectedProfile.distance} od Ciebie</span>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">O mnie</h4>
                      <p className="text-muted-foreground leading-relaxed">{selectedProfile.bio}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      onClick={() => handleAction("polubić ten profil")}
                      className="flex-1 bg-gradient-to-r from-[#FF4500] to-[#E94B3C] hover:from-[#E94B3C] hover:to-[#FF4500] text-white font-semibold py-6"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Lubię to
                    </Button>
                    <Button
                      onClick={() => handleAction("dodać do znajomych")}
                      variant="outline"
                      className="flex-1 border-2 border-gray-600 hover:border-[#FF4500] hover:text-[#FF4500] font-semibold py-6 bg-transparent"
                    >
                      <UserPlus className="w-5 h-5 mr-2" />
                      Dodaj do znajomych
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Login Required Modal */}
      <LoginRequiredModal isOpen={showModal} onClose={() => setShowModal(false)} action={modalAction} />
    </>
  )
}
