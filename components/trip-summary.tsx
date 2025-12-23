import { Calendar, Users, MapPin, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TripSummary() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-4 flex items-start justify-between">
        <h2 className="text-lg font-semibold">Trip summary</h2>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Pencil className="size-4" />
          Edit trip details
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-accent">
            <MapPin className="size-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">From</p>
            <p className="font-medium">New York (JFK)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-accent">
            <Calendar className="size-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Travel dates</p>
            <p className="font-medium">Jan 15 - 30, 2025</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-accent">
            <Users className="size-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Pilgrims</p>
            <p className="font-medium">2 adults</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-accent">
            <MapPin className="size-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cities & nights</p>
            <p className="font-medium">Makkah (10), Madinah (5)</p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Update dates, pilgrims, or nights. We'll refresh availability and pricing.
      </p>
    </div>
  )
}
