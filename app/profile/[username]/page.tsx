"use client"

import { useEffect, useState } from "react"
import {
  ChevronLeft,
  Heart,
  MessageCircle,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Home,
  X,
  Ruler,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LoginRequiredModal from "@/components/login-required-modal"
import { profiles } from "@/lib/profiles-data"
import { notFound } from "next/navigation"

export default function ProfilePage({ params }: { params: { username: string } }) {
  const profileData = profiles.find((p) => p.username === params.username)

  // If profile not found, show 404
  if (!profileData) {
    notFound()
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalAction, setModalAction] = useState("")
  const [showImageModal, setShowImageModal] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleAction = (action: string) => {
    setModalAction(action)
    setShowModal(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profileData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + profileData.images.length) % profileData.images.length)
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

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <ChevronLeft className="w-6 h-6" />
                <span className="font-semibold">Powrót</span>
              </Link>
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(profileData.status)}`} />
                <span className="text-sm font-medium">{getStatusText(profileData.status)}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Layout: Photos left, Info right */}
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8">
              {/* Photo Gallery - Left Side on Desktop */}
              <div className="space-y-4">
                <div className="relative aspect-[3/4] max-h-[500px] rounded-2xl overflow-hidden bg-card shadow-xl">
                  <img
                    src={profileData.images[currentImageIndex] || "/placeholder.svg"}
                    alt={profileData.name}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setShowImageModal(true)}
                  />
                  {/* Navigation Arrows */}
                  {profileData.images.length > 1 && (
                    <>
                      <Button
                        onClick={prevImage}
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        onClick={nextImage}
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                      >
                        <ChevronLeft className="w-6 h-6 rotate-180" />
                      </Button>
                    </>
                  )}
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {profileData.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentImageIndex ? "bg-white w-8" : "bg-white/50 w-1.5"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2">
                  {profileData.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex
                          ? "border-primary scale-105"
                          : "border-gray-700 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${profileData.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Profile Info - Right Side on Desktop */}
              <div className="space-y-6">
                {/* Header Info */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {profileData.name}, {profileData.age}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Polska</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍 {profileData.distance} od Ciebie</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    onClick={() => handleAction("polubić profil")}
                    className="gradient-romantic text-white font-semibold py-6 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                  >
                    <Heart className="w-5 h-5" />
                    <span className="text-xs">Lubię to</span>
                  </Button>
                  <Button
                    onClick={() => handleAction("dodać do ulubionych")}
                    variant="outline"
                    className="border-2 border-gray-600 hover:border-[#FF4500] hover:text-[#FF4500] font-semibold py-6 flex flex-col items-center gap-1 bg-transparent hover:scale-105 transition-transform"
                  >
                    <Star className="w-5 h-5" />
                    <span className="text-xs">Ulubione</span>
                  </Button>
                  <Button
                    onClick={() => handleAction("wysłać wiadomość")}
                    variant="outline"
                    className="border-2 border-gray-600 hover:border-[#FF4500] hover:text-[#FF4500] font-semibold py-6 flex flex-col items-center gap-1 bg-transparent hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xs">Czat</span>
                  </Button>
                </div>

                {/* About Section */}
                <div className="bg-card rounded-xl p-5 space-y-3 border border-gray-800">
                  <h2 className="text-xl font-bold">O mnie</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">{profileData.bio}</p>
                </div>

                {/* Details */}
                <div className="bg-card rounded-xl p-5 space-y-4 border border-gray-800">
                  <h2 className="text-xl font-bold">Szczegóły</h2>
                  <div className="space-y-3">
                    {profileData.occupation && (
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Zawód</div>
                          <div className="font-medium text-sm">{profileData.occupation}</div>
                        </div>
                      </div>
                    )}
                    {profileData.education && (
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Wykształcenie</div>
                          <div className="font-medium text-sm">{profileData.education}</div>
                        </div>
                      </div>
                    )}
                    {profileData.height && (
                      <div className="flex items-center gap-3">
                        <Ruler className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Wzrost</div>
                          <div className="font-medium text-sm">{profileData.height}</div>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-xs text-muted-foreground">Szukam</div>
                        <div className="font-medium text-sm">{profileData.lookingFor}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div className="bg-card rounded-xl p-5 space-y-4 border border-gray-800">
                  <h2 className="text-xl font-bold">Zainteresowania</h2>
                  <div className="flex flex-wrap gap-2">
                    {profileData.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-5 space-y-4 border border-gray-800">
                  <h2 className="text-xl font-bold">Galeria zdjęć ({profileData.photoGallery.length})</h2>
                  <div className="grid grid-cols-3 gap-2">
                    {profileData.photoGallery.slice(0, 3).map((photo, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAction("zobaczyć galerię zdjęć")}
                        className="aspect-square rounded-lg overflow-hidden relative group"
                      >
                        <img
                          src={photo || "/placeholder.svg"}
                          alt={`Zdjęcie ${idx + 1}`}
                          className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      </button>
                    ))}
                  </div>
                  <Button
                    onClick={() => handleAction("zobaczyć galerię zdjęć")}
                    variant="outline"
                    className="w-full border-2 border-gray-600 hover:border-[#FF4500] hover:text-[#FF4500] font-semibold bg-transparent"
                  >
                    Zobacz więcej ({profileData.photoGallery.length} zdjęć)
                  </Button>
                </div>

                {profileData.videoGallery > 0 && (
                  <div className="bg-card rounded-xl p-5 space-y-4 border border-gray-800">
                    <h2 className="text-xl font-bold">Galeria filmów ({profileData.videoGallery})</h2>
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: Math.min(3, profileData.videoGallery) }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAction("zobaczyć galerię filmów")}
                          className="aspect-square rounded-lg overflow-hidden relative group"
                        >
                          <img
                            src={profileData.images[idx % profileData.images.length] || "/placeholder.svg"}
                            alt={`Film ${idx + 1}`}
                            className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all"
                          />
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                              <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    <Button
                      onClick={() => handleAction("zobaczyć galerię filmów")}
                      variant="outline"
                      className="w-full border-2 border-gray-600 hover:border-[#FF4500] hover:text-[#FF4500] font-semibold bg-transparent"
                    >
                      Zobacz więcej ({profileData.videoGallery} filmów)
                    </Button>
                  </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#FF4500] to-[#E94B3C] rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Zainteresowany?</h3>
                  <p className="text-white/90 mb-4 text-sm">Wyślij wiadomość i rozpocznij rozmowę!</p>
                  <Button
                    onClick={() => handleAction("wysłać wiadomość")}
                    className="bg-white text-[#FF4500] hover:bg-gray-100 font-semibold px-8 py-5 text-base"
                  >
                    Napisz do mnie
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={profileData.images[currentImageIndex] || "/placeholder.svg"}
            alt={profileData.name}
            className="max-w-full max-h-full object-contain"
          />
          {profileData.images.length > 1 && (
            <>
              <Button
                onClick={prevImage}
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextImage}
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                <ChevronLeft className="w-6 h-6 rotate-180" />
              </Button>
            </>
          )}
        </div>
      )}

      {/* Login Required Modal */}
      <LoginRequiredModal isOpen={showModal} onClose={() => setShowModal(false)} action={modalAction} />
    </>
  )
}
