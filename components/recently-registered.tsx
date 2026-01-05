"use client"
import { recentlyRegistered } from "@/lib/profiles-data"
import { useState } from "react"
import LoginRequiredModal from "./login-required-modal"

export default function RecentlyRegistered() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <section className="py-16 bg-background border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Ostatnio zarejestrowani</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nowi użytkownicy w Twojej okolicy
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
            {recentlyRegistered.map((user) => (
              <button
                key={user.username}
                onClick={handleClick}
                className="flex flex-col items-center gap-2 group hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-800 border-2 border-gray-700 group-hover:border-[#FF4500] transition-colors">
                    {user.hasPhoto && user.photo ? (
                      <img
                        src={user.photo || "/placeholder.svg"}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={
                          user.gender === "female"
                            ? "/female-avatar-default-profile-silhouette.jpg"
                            : "/male-avatar-default-profile-silhouette.jpg"
                        }
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  {Math.random() > 0.6 && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-[#FF4500] transition-colors">
                  {user.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <LoginRequiredModal isOpen={showModal} onClose={() => setShowModal(false)} action="zobaczyć profile" />
    </>
  )
}
