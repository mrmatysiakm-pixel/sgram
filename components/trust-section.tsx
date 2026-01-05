"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

export default function TrustSection() {
  const [count, setCount] = useState(0)
  const targetCount = 150000

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = targetCount / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetCount) {
        setCount(targetCount)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 gradient-romantic rounded-full mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">Zaufali nam</h2>

          <div className="text-6xl md:text-7xl font-bold text-white mb-4">{count.toLocaleString("pl-PL")}+</div>

          <p className="text-2xl md:text-3xl font-semibold text-white">osób zaufało naszej społeczności!</p>

          {/* Decorative profile avatars */}
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full gradient-romantic opacity-20 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
