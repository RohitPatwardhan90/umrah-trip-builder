"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plane, Building2, Car, Star, MapPin } from "lucide-react"
import Image from "next/image"

export default function PackagesPage() {
  const router = useRouter()

  const packages = [
    {
      id: "package-1",
      name: "Makkah & Madinah - Luxury Umrah Package",
      duration: "4 Days / 3 Nights",
      nights: "Makkah 2N | Madinah 1N",
      price: 10997,
      rating: 4.8,
      reviews: 234,
      image: "https://d3u375hmbxooc8.cloudfront.net/package-image/1697028343/20251028092914.jpg",
      badge: "Most Popular",
      includes: {
        flight: true,
        transfer: true,
        hotel: true,
      },
      hotels: ["Al Shohada Hotel (5★)", "Al Rawda Royal Inn (5★)"],
    },
    {
      id: "package-2",
      name: "Premium Makkah & Madinah Package",
      duration: "5 Days / 4 Nights",
      nights: "Makkah 3N | Madinah 1N",
      price: 14500,
      rating: 4.9,
      reviews: 189,
      image: "https://dnq8w4l2y06rw.cloudfront.net/package/1697028343/00af00d0-0ad9-4c79-9452-b3ed5dd5096b/large.jpg",
      badge: "Best Value",
      includes: {
        flight: true,
        transfer: true,
        hotel: true,
      },
      hotels: ["Makkah Clock Royal Tower (5★)", "Hilton Madinah (5★)"],
    },
    {
      id: "package-3",
      name: "Economy Umrah Package",
      duration: "3 Days / 2 Nights",
      nights: "Makkah 2N",
      price: 7800,
      rating: 4.6,
      reviews: 156,
      image:
        "https://dnq8w4l2y06rw.cloudfront.net/package/1697028343/f8bd2f0b-d4df-4599-a8bb-48f576ca4407/original.jpg",
      badge: null,
      includes: {
        flight: true,
        transfer: true,
        hotel: true,
      },
      hotels: ["Elaf Ajyad Hotel (4★)"],
    },
  ]

  const handlePackageClick = (packageId: string) => {
    sessionStorage.setItem("selectedPackage", packageId)
    router.push("/trip-builder?source=package")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Image src="/images/nusuk-umrah-logo.png" alt="Nusuk Logo" width={120} height={40} className="h-10 w-auto" />
          <Button variant="ghost" onClick={() => router.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-gray-900">Recommended Umrah Packages</h1>
          <p className="text-lg text-gray-600">Carefully designed packages for a smooth Umrah journey</p>
        </div>

        {/* Package Grid */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className="group overflow-hidden border-2 border-gray-200 transition-all hover:border-[#1B8354] hover:shadow-xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Package Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {pkg.badge && <Badge className="absolute right-3 top-3 bg-[#1B8354] text-white">{pkg.badge}</Badge>}
                {/* Luxury Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-4xl font-bold text-white opacity-90">LUXURY</div>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                {/* Title & Duration */}
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{pkg.name}</h3>
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                  <span>{pkg.duration}</span>
                  <span>•</span>
                  <span>{pkg.nights}</span>
                </div>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-gray-900">{pkg.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">({pkg.reviews} reviews)</span>
                </div>

                {/* Includes */}
                <div className="mb-4 flex items-center gap-4 border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Plane className="h-4 w-4 text-[#1B8354]" />
                    <span className="text-sm text-gray-700">Flight</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Car className="h-4 w-4 text-[#1B8354]" />
                    <span className="text-sm text-gray-700">Transfer</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-[#1B8354]" />
                    <span className="text-sm text-gray-700">Hotel</span>
                  </div>
                </div>

                {/* Hotels */}
                <div className="mb-4 space-y-1">
                  {pkg.hotels.map((hotel, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                      <span>{hotel}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="text-2xl font-bold text-gray-900">SAR {pkg.price.toLocaleString()}</div>
                  </div>
                  <Button onClick={() => handlePackageClick(pkg.id)} className="bg-[#1B8354] hover:bg-[#166A45]">
                    Book now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
