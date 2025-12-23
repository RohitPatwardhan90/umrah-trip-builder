import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Car } from "lucide-react"

export function ActivityDetails() {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-6 text-xl font-semibold text-foreground">Activity Details</h2>

      <div className="space-y-6">
        {/* Activities in Makkah Section */}
        <div className="rounded-lg bg-muted/30 p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Activities in Makkah (1)</h3>
        </div>

        {/* Makkah Ziarah Today Activity */}
        <div className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row">
          {/* Activity Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:w-48">
            <Image src="/makkah-ziarah-mountain.jpg" alt="Makkah Ziarah Today" fill className="object-cover" />
          </div>

          {/* Activity Info */}
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Makkah Ziarah Today</h3>
              </div>
              <div className="flex gap-2">
                <Button variant="link" size="sm" className="text-primary">
                  Detail
                </Button>
                <Button variant="outline" size="sm">
                  Change
                </Button>
                <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                  Delete
                </Button>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Makkah, Saudi Arabia</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Jan 03, 13h 00m</span>
              </div>

              <div className="flex items-start gap-2">
                <Car className="mt-0.5 size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Private Driver</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add more Activities in Makkah */}
        <div className="flex items-center justify-between rounded-lg border border-dashed border-primary/30 bg-primary/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <PlusIcon className="size-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Add more Activities in Makkah</h3>
              <p className="text-sm text-muted-foreground">
                You can add your activity in Makkah with an additional charge.
              </p>
            </div>
          </div>
          <Button variant="outline">Add activity</Button>
        </div>

        {/* Activity isn't included for Madinah */}
        <div className="flex items-center justify-between rounded-lg border border-dashed border-primary/30 bg-primary/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <PlusIcon className="size-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Activity isn't included for Madinah</h3>
              <p className="text-sm text-muted-foreground">
                You can add your activity in Madinah with an additional charge.
              </p>
            </div>
          </div>
          <Button variant="outline">Add activity</Button>
        </div>
      </div>
    </section>
  )
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
