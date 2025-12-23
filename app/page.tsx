"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plane, Building2, Car, Star, Shield, Clock } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()

  const features = [
    {
      icon: Star,
      title: "Premium Selection",
      description: "Carefully curated hotels near Haram with verified ratings",
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Official Nusuk-authorized packages with full transparency",
    },
    {
      icon: Clock,
      title: "Flexible Planning",
      description: "Change any component before checkout at no extra cost",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#DFF6E7]/20 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Image src="/images/nusuk-umrah-logo.png" alt="Nusuk Logo" width={120} height={40} className="h-10 w-auto" />
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl">
            Plan Your Perfect
            <span className="block text-[#1B8354]">Umrah Journey</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 leading-relaxed">
            Create a personalized Umrah experience with flexible packages, premium hotels, and transparent pricing. Your
            sacred journey, your way.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => router.push("/start")}
              size="lg"
              className="h-14 bg-[#1B8354] px-8 text-lg font-semibold hover:bg-[#166A45]"
            >
              Start Planning
            </Button>
            <Button
              onClick={() => router.push("/packages")}
              size="lg"
              variant="outline"
              className="h-14 border-2 border-[#1B8354] px-8 text-lg font-semibold text-[#1B8354] hover:bg-[#DFF6E7]"
            >
              View Packages
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-8 sm:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border-2 border-gray-100 p-8 text-center transition-all hover:border-[#1B8354] hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#DFF6E7]">
                  <Icon className="h-8 w-8 text-[#1B8354]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        {/* What's Included */}
        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-semibold text-gray-900">
            Everything You Need for Your Journey
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Plane, title: "Flights", description: "Direct and connecting flights from major cities" },
              { icon: Building2, title: "Hotels", description: "5-star accommodations near Haram in Makkah & Madinah" },
              { icon: Car, title: "Transfers", description: "Private sedan transfers between cities and airports" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#DFF6E7]">
                    <Icon className="h-6 w-6 text-[#1B8354]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 rounded-2xl bg-gradient-to-br from-[#1B8354] to-[#166A45] p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-semibold">Ready to Begin Your Spiritual Journey?</h2>
          <p className="mb-8 text-lg text-white/90">Start planning your Umrah in just a few simple steps</p>
          <Button
            onClick={() => router.push("/start")}
            size="lg"
            className="h-14 bg-white px-8 text-lg font-semibold text-[#1B8354] hover:bg-gray-100"
          >
            Get Started Now
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">© 2025 Nusuk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
