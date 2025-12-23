"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import { PackageHero } from "@/components/package-hero"
import { TabNavigation } from "@/components/tab-navigation"
import { FlightDetails } from "@/components/flight-details"
import { HotelDetails } from "@/components/hotel-details"
import { TransferDetails } from "@/components/transfer-details"
import { ActivityDetails } from "@/components/activity-details"
import { PackageDescription } from "@/components/package-description"
import { PriceSidebar } from "@/components/price-sidebar"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { CrossSellAddons } from "@/components/cross-sell-addons"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { HaramainTrainSelector } from "@/components/haramain-train-selector"

export default function TripBuilderPage() {
  const searchParams = useSearchParams()
  const source = searchParams?.get("source")
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Show banner for quick-build source
    if (source === "quick-build") {
      setShowBanner(true)
    }
  }, [source])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Quick Build Banner */}
      {showBanner && (
        <div className="border-b bg-[#DFF6E7]">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <Alert className="border-[#1B8354] bg-transparent">
              <Info className="h-4 w-4 text-[#1B8354]" />
              <AlertDescription className="text-sm text-gray-900">
                We've added recommended options for your journey. You can change anything below.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <PackageHero />

            <TabNavigation />

            <div className="mt-6 space-y-6">
              <FlightDetails />
              <HotelDetails />
              <TransferDetails />
              <HaramainTrainSelector />
              <ActivityDetails />
              <CrossSellAddons />
              <PackageDescription />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <PriceSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <MobileStickyBar />
    </div>
  )
}
