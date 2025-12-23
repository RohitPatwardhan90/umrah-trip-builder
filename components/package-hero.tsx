import Image from "next/image"
import { CalendarDays, MapPin, Calendar, Users, Plane, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PackageHero() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex-1">
          <h1 className="mb-2 text-2xl font-semibold text-foreground lg:text-3xl">
            Makkah & Madinah - Luxury Umrah Package
          </h1>
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-4" />
            <span>4 Days / 3 Nights</span>
            <span>•</span>
            <span>Makkah 2N | Madinah 1N</span>
          </div>

          <div className="mb-6 w-full rounded-lg border border-border bg-card px-6 py-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Trip Details</h3>
              <Button variant="ghost" size="sm" className="h-8 gap-2 text-primary">
                <Edit className="size-4" />
                Modify
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-muted-foreground" />
                <div>
                  <div className="text-xs text-muted-foreground">Departure From</div>
                  <div className="text-sm font-medium text-foreground">Mumbai (BOM)</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Plane className="size-4 shrink-0 text-muted-foreground" />
                <div>
                  <div className="text-xs text-muted-foreground">Cabin Class</div>
                  <div className="text-sm font-medium text-foreground">Economy</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="size-4 shrink-0 text-muted-foreground" />
                <div>
                  <div className="text-xs text-muted-foreground">Check In - Check Out</div>
                  <div className="text-sm font-medium text-foreground">Dec 29 - Dec 31, 2025</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="size-4 shrink-0 text-muted-foreground" />
                <div>
                  <div className="text-xs text-muted-foreground">Travelers</div>
                  <div className="text-sm font-medium text-foreground">1 Adult</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        {/* Main Image with Luxury Text */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg lg:aspect-[16/10]">
          <Image
            src="https://d3u375hmbxooc8.cloudfront.net/package-image/1697028343/20251028092914.jpg"
            alt="Masjid al-Haram with Kaaba"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-r from-black/40 to-transparent px-8">
            <h2 className="font-bold text-white" style={{ fontSize: "5rem", lineHeight: 1 }}>
              <span className="text-[#F4A300]">|</span> LUXURY
            </h2>
          </div>
        </div>

        {/* Side Images */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src="https://dnq8w4l2y06rw.cloudfront.net/package/1697028343/00af00d0-0ad9-4c79-9452-b3ed5dd5096b/large.jpg"
              alt="Aerial view of Kaaba"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src="https://dnq8w4l2y06rw.cloudfront.net/package/1697028343/f8bd2f0b-d4df-4599-a8bb-48f576ca4407/original.jpg"
              alt="Interior view"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-2xl font-semibold text-white">+ 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
