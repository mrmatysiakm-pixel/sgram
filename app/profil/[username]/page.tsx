"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Heart, X, Star, MessageCircle, MapPin, Briefcase, GraduationCap, Home, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Mock profile data - in real app this would come from API
const profileData = {
  emilkaa_ree: {
    username: "emilkaa_ree",
    name: "Emilia",
    age: 24,
    location: "Warszawa",
    distance: "2 km od Ciebie",
    verified: true,
    photos: [
      "/attractive-young-woman-smiling-portrait.jpg",
      "/woman-casual-style-outdoor.jpg",
      "/woman-elegant-evening-dress.jpg",
      "/woman-fitness-gym.jpg",
      "/woman-beach-vacation.jpg",
    ],
    bio: "Kocham życie, podróże i nowe przygody! 🌍✨ Szukam kogoś, kto podziela moją pasję do odkrywania świata. Uwielbiam spontaniczne wyjazdy, dobre wino i długie rozmowy do rana.",
    interests: ["Podróże", "Fotografia", "Joga", "Gotowanie", "Muzyka na żywo", "Kino", "Taniec", "Fitness"],
    lookingFor: "Związek",
    education: "Wyższe",
    work: "Marketing Manager",
    height: "168 cm",
    languages: ["Polski", "Angielski", "Hiszpański"],
  },
}

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const username = params.username as string
  const profile = profileData[username as keyof typeof profileData]

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [liked, setLiked] = useState(false)

  if (!profile) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Profil nie został znaleziony</h1>
          <Button onClick={() => router.push("/")} className="bg-[#FF4500] hover:bg-[#E94B3C]">
            Wróć do strony głównej
          </Button>
        </div>
      </div>
    )
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % profile.photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + profile.photos.length) % profile.photos.length)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-white hover:text-[#FF4500] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="font-semibold">Powrót</span>
          </button>
          <h1 className="text-xl font-bold text-white">Profil</h1>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Photo Gallery */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-gray-900">
            <Image
              src={profile.photos[currentPhotoIndex] || "/placeholder.svg"}
              alt={`${profile.name} - zdjęcie ${currentPhotoIndex + 1}`}
              fill
              className="object-cover"
            />

            {/* Photo navigation */}
            <div className="absolute inset-0 flex">
              <button onClick={prevPhoto} className="flex-1 cursor-w-resize" aria-label="Poprzednie zdjęcie" />
              <button onClick={nextPhoto} className="flex-1 cursor-e-resize" aria-label="Następne zdjęcie" />
            </div>

            {/* Photo indicators */}
            <div className="absolute top-4 left-0 right-0 flex gap-2 px-4">
              {profile.photos.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-1 rounded-full transition-all ${
                    index === currentPhotoIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Verified badge */}
            {profile.verified && (
              <div className="absolute top-4 right-4 bg-blue-500 rounded-full p-2">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
            )}

            {/* Profile info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl font-bold text-white">
                  {profile.name}, {profile.age}
                </h2>
                {profile.verified && <Star className="w-6 h-6 text-blue-500 fill-blue-500" />}
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
                <span className="text-white/60">• {profile.distance}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              className="w-16 h-16 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Pomiń"
            >
              <X className="w-8 h-8 text-gray-400" />
            </button>

            <button
              onClick={() => setLiked(!liked)}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                liked
                  ? "bg-gradient-to-br from-[#FF4500] to-[#E94B3C]"
                  : "bg-gray-800 hover:bg-gradient-to-br hover:from-[#FF4500] hover:to-[#E94B3C]"
              }`}
              aria-label="Polub"
            >
              <Heart className={`w-10 h-10 ${liked ? "text-white fill-white" : "text-[#FF4500]"}`} />
            </button>

            <button
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF4500] to-[#E94B3C] hover:opacity-90 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Wyślij wiadomość"
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            {/* Bio */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">O mnie</h3>
              <p className="text-gray-300 leading-relaxed">{profile.bio}</p>
            </div>

            {/* Interests */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Zainteresowania</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-gray-800 hover:bg-[#FF4500] text-white rounded-full text-sm font-medium transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Looking For */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Czego szukam</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FF4500]/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#FF4500]" />
                </div>
                <span className="text-lg text-white font-medium">{profile.lookingFor}</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Informacje</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-[#FF4500]" />
                  <span className="text-gray-300">{profile.work}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-[#FF4500]" />
                  <span className="text-gray-300">{profile.education}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-[#FF4500]" />
                  <span className="text-gray-300">Mieszka w {profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#FF4500]" />
                  <span className="text-gray-300">{profile.height}</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Języki</h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((language) => (
                  <span key={language} className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-full h-14 bg-gradient-to-r from-[#FF4500] to-[#E94B3C] hover:from-[#E94B3C] hover:to-[#FF4500] text-white font-bold text-lg rounded-2xl"
              onClick={() => router.push("/rejestracja")}
            >
              Rozpocznij rozmowę
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
