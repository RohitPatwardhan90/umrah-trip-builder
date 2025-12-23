"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  Zap,
  Check,
  MapPin,
  Calendar,
  Users,
  Bed,
  Plane,
  Building2,
  ArrowRight,
  Star,
  Filter,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function PlanningChoicePage() {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState("all")

  // Mock data from wizard (would come from state/URL params in production)
  const planData = {
    departure: "Mumbai (BOM)",
    date: "Dec 29, 2025",
    makkahNights: 2,
    madinahNights: 1,
    travelers: "1 Adult",
    rooms: "1 Room",
  }

  // Mock package data
  const packages = [
    {
      id: 1,
      name: "Sanctity of Makkah & Madinah - Luxury",
      category: "premium",
      makkahNights: 2,
      madinahNights: 1,
      inclusions: ["Flight", "Hotel", "Transfer"],
      price: 2856.36,
      rating: 5,
      distance: "0.5 km to Haram",
      image: "https://d3u375hmbxooc8.cloudfront.net/package-image/1697028343/20251028092914.jpg",
    },
    {
      id: 2,
      name: "Essential Umrah Journey",
      category: "economy",
      makkahNights: 2,
      madinahNights: 1,
      inclusions: ["Flight", "Hotel", "Transfer"],
      price: 1899.0,
      rating: 4,
      distance: "1.2 km to Haram",
      image: "https://d3u375hmbxooc8.cloudfront.net/package-image/1761550874/20251118071808.jpg",
    },
    {
      id: 3,
      name: "Comfort Umrah Package",
      category: "comfort",
      makkahNights: 2,
      madinahNights: 1,
      inclusions: ["Flight", "Hotel", "Transfer"],
      price: 2299.5,
      rating: 4,
      distance: "0.8 km to Haram",
      image: "https://d3fadk0u9nu74o.cloudfront.net/package-image/1761550874/20251028094045.jpg",
    },
  ]

  const filteredPackages =
    selectedFilter === "all" ? packages : packages.filter((pkg) => pkg.category === selectedFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <Image src="/images/nusuk-umrah-logo.png" alt="Nusuk Logo" width={120} height={40} className="h-10 w-auto" />
        </div>
      </header>

      <div className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
              <span className="font-medium text-gray-900">Your plan:</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gray-500" />
                {planData.departure}
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gray-500" />
                {planData.date}
              </span>
              <span className="text-gray-300">•</span>
              <span>Makkah {planData.makkahNights}N</span>
              <span className="text-gray-300">•</span>
              <span>Madinah {planData.madinahNights}N</span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-gray-500" />
                {planData.travelers}
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <Bed className="h-4 w-4 text-gray-500" />
                {planData.rooms}
              </span>
            </div>
            <Button variant="outline" size="sm" onClick={() => router.push("/start")}>
              Edit details
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-gray-900">Choose how to build your Umrah</h1>
          <p className="text-gray-600">Select the planning approach that fits your needs</p>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          {/* Build Your Own */}
          <Card className="border-2 border-gray-200 p-6 transition-all hover:border-[#1B8354] hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <Badge variant="outline" className="border-blue-200 text-blue-700">
                Most flexible
              </Badge>
            </div>

            <h2 className="mb-2 text-xl font-semibold text-gray-900">Build your own Umrah</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Choose flights, hotels, and transfers step by step. Ideal if you want full control over every detail.
            </p>

            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1B8354]" />
                <span>Select your preferred airlines and timings</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1B8354]" />
                <span>Pick hotels by distance to Haram and budget</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1B8354]" />
                <span>Add transfers, train, eSIM, and activities anytime</span>
              </li>
            </ul>

            <Button
              onClick={() => router.push("/build-step-by-step")}
              className="w-full bg-gray-900 text-white hover:bg-gray-800"
            >
              Build step by step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          {/* Quick Build */}
          <Card className="border-2 border-[#1B8354] bg-gradient-to-br from-[#DFF6E7]/30 to-white p-6 shadow-md transition-all hover:shadow-xl">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B8354]/10">
                <Zap className="h-6 w-6 text-[#1B8354]" />
              </div>
              <Badge className="bg-[#1B8354] text-white hover:bg-[#166A45]">Recommended by experts</Badge>
            </div>

            <h2 className="mb-2 text-xl font-semibold text-gray-900">Quick Build</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We'll create a complete Umrah plan using the best value options for your request. You can review and
              change anything.
            </p>

            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1B8354]" />
                <span>Expert-picked hotels and flights</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1B8354]" />
                <span>Balanced comfort, location, and value</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1B8354]" />
                <span>Fastest way to reach checkout</span>
              </li>
            </ul>

            <Button
              onClick={() => router.push("/quick-build")}
              className="w-full bg-[#1B8354] text-white hover:bg-[#166A45]"
            >
              Quick build my Umrah
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">Or select a Tailormade Package</h2>
            <p className="text-gray-600">
              Curated Umrah packages that match your cities, nights, and travellers. Select one to continue.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filter:</span>
            </div>
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("all")}
              className={selectedFilter === "all" ? "bg-[#1B8354] hover:bg-[#166A45]" : ""}
            >
              All packages
            </Button>
            <Button
              variant={selectedFilter === "economy" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("economy")}
              className={selectedFilter === "economy" ? "bg-[#1B8354] hover:bg-[#166A45]" : ""}
            >
              Economy
            </Button>
            <Button
              variant={selectedFilter === "comfort" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("comfort")}
              className={selectedFilter === "comfort" ? "bg-[#1B8354] hover:bg-[#166A45]" : ""}
            >
              Comfort
            </Button>
            <Button
              variant={selectedFilter === "premium" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("premium")}
              className={selectedFilter === "premium" ? "bg-[#1B8354] hover:bg-[#166A45]" : ""}
            >
              Premium
            </Button>
          </div>

          {/* Package Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden border-2 border-gray-200 transition-all hover:border-[#1B8354] hover:shadow-lg"
              >
                {/* Package Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-white/95 text-gray-900 hover:bg-white">
                      <Star className="mr-1 h-3 w-3 fill-amber-400 text-amber-400" />
                      {pkg.rating}
                    </Badge>
                  </div>
                </div>

                {/* Package Details */}
                <div className="p-5">
                  <h3 className="mb-2 font-semibold text-gray-900 line-clamp-2">{pkg.name}</h3>

                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Makkah {pkg.makkahNights}N, Madinah {pkg.madinahNights}N
                    </span>
                  </div>

                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{pkg.distance}</span>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-4 flex gap-2">
                    {pkg.inclusions.includes("Flight") && (
                      <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs text-green-700">
                        <Plane className="h-3 w-3" />
                        Flight
                      </div>
                    )}
                    {pkg.inclusions.includes("Hotel") && (
                      <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs text-green-700">
                        <Building2 className="h-3 w-3" />
                        Hotel
                      </div>
                    )}
                    {pkg.inclusions.includes("Transfer") && (
                      <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs text-green-700">
                        <ArrowRight className="h-3 w-3" />
                        Transfer
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-sm text-gray-600">From</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-gray-900">
                        SAR {pkg.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => router.push("/trip-builder")}
                      className="flex-1 bg-[#1B8354] text-white hover:bg-[#166A45]"
                    >
                      Select package
                    </Button>
                    <Button variant="outline" onClick={() => router.push("/trip-builder")} className="flex-shrink-0">
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
