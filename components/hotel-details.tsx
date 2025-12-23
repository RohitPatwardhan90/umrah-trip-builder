import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Star, CalendarIcon as CalendarIcon2 } from "lucide-react"

export function HotelDetails() {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-6 text-xl font-semibold text-foreground">Hotel Details</h2>

      <div className="space-y-4">
        {/* Al Shohada Hotel */}
        <div className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row">
          {/* Hotel Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:w-48">
            <Image src="/al-shohada-hotel-makkah.jpg" alt="Al Shohada Hotel" fill className="object-cover" />
          </div>

          {/* Hotel Info */}
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Makkah • 2 nights
                </div>
                <h3 className="text-lg font-semibold text-foreground">Al Shohada Hotel</h3>
                <div className="mt-1 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="link" size="sm" className="text-primary">
                  Detail
                </Button>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CalendarIcon2 className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Jan 02, 2026 - Jan 04, 2026</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">4490 Ajyad Street, Ajyad, 6415, Makkah</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">0.88 km from Kaaba (Masjid al-Haram)</span>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-2 rounded-lg bg-muted/50 p-3">
                  <Button variant="link" size="sm" className="h-auto p-0 text-sm text-primary">
                    Change nights
                  </Button>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Adjust nights in this city. We'll update dates and total automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Al Rawda Royal Inn */}
        <div className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row">
          {/* Hotel Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:w-48">
            <Image src="/al-rawda-royal-inn-madinah.jpg" alt="Al Rawda Royal Inn" fill className="object-cover" />
          </div>

          {/* Hotel Info */}
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Madinah • 1 night
                </div>
                <h3 className="text-lg font-semibold text-foreground">Al Rawda Royal Inn</h3>
                <div className="mt-1 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="link" size="sm" className="text-primary">
                  Detail
                </Button>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CalendarIcon2 className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Jan 04, 2026 - Jan 05, 2026</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Central Area, Madinah</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">0.43 km from Al-Masjid an-Nabawi</span>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-2 rounded-lg bg-muted/50 p-3">
                  <Button variant="link" size="sm" className="h-auto p-0 text-sm text-primary">
                    Change nights
                  </Button>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Adjust nights in this city. We'll update dates and total automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
