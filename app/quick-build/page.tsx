"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Sparkles } from "lucide-react"

export default function QuickBuildPage() {
  const router = useRouter()

  useEffect(() => {
    // Simulate AI building the plan
    const timer = setTimeout(() => {
      // Save quick-build selections
      sessionStorage.setItem(
        "umrahSelections",
        JSON.stringify({
          source: "quick-build",
          flight: "flight-1",
          makkahHotel: "hotel-makkah-1",
          madinahHotel: "hotel-madinah-1",
          total: 8856,
        }),
      )
      router.push("/trip-builder?source=quick-build")
    }, 2500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center">
        {/* Animated Icon */}
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-[#1B8354] opacity-20" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#1B8354] to-[#166A45]">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Loading Spinner */}
        <Loader2 className="mx-auto mb-6 h-12 w-12 animate-spin text-[#1B8354]" />

        {/* Text Content */}
        <h1 className="mb-3 text-3xl font-semibold text-gray-900">Building your Umrah plan…</h1>
        <p className="max-w-md text-lg text-gray-600">Finding the best packages and recommendations for you</p>

        {/* Progress Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-[#1B8354]"
              style={{
                animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  )
}
