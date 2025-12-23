import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, CarIcon, MoreVertical, AlertCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function TransferDetails() {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Transfer Details</h2>
      </div>

      <div className="space-y-4">
        {/* Arrival Transfer */}
        <div>
          <div className="mb-2 text-sm font-medium text-muted-foreground">Arrival Transfer</div>
          <div className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row">
            {/* Car Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:w-48">
              <Image src="/luxury-sedan-car-side-view-black.jpg" alt="Sedan Car" fill className="object-cover" />
            </div>

            {/* Transfer Info */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Airport → Makkah Hotel</h3>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="size-4" />
                      <span>3 Passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CarIcon className="size-4" />
                      <span>Sedan Car</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                  <AlertDialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Change</DropdownMenuItem>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                        </AlertDialogTrigger>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Remove this item?</AlertDialogTitle>
                        <AlertDialogDescription>
                          You can add it again later. Prices may change due to availability.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Keep</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive hover:bg-destructive/90">Remove</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <div className="mb-2 text-xs font-medium text-muted-foreground">Dec 29</div>
                <div className="mb-1 text-sm font-medium">Jeddah (HBT) Airport</div>
                <div className="text-xs text-muted-foreground">1h 51m, 108 km</div>
                <div className="mt-2 text-xs text-muted-foreground">To</div>
                <div className="text-sm font-medium">Makkah Hotel</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertCircle className="size-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Recommended</span>
          </div>
          <p className="mb-3 text-sm text-amber-700">Add travel between Makkah & Madinah (Train or Transfer)</p>
          <Button size="sm" variant="link" className="h-auto p-0 text-sm text-amber-900">
            Compare options
          </Button>
        </div>

        {/* Departure Transfer */}
        <div>
          <div className="mb-2 text-sm font-medium text-muted-foreground">Departure Transfer</div>
          <div className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row">
            {/* Transfer Info */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Hotel → Jeddah Airport</h3>
                  <div className="mt-2 text-sm text-muted-foreground">Sedan Car</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                  <AlertDialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Change</DropdownMenuItem>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                        </AlertDialogTrigger>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Remove this item?</AlertDialogTitle>
                        <AlertDialogDescription>
                          You can add it again later. Prices may change due to availability.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Keep</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive hover:bg-destructive/90">Remove</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <div className="mb-2 text-xs font-medium text-muted-foreground">Dec 31</div>
                <div className="mb-1 text-sm font-medium">Makkah Hotel</div>
                <div className="text-xs text-muted-foreground">1h 57m, 108 km</div>
                <div className="mt-2 text-xs text-muted-foreground">To</div>
                <div className="text-sm font-medium">Jeddah (HBT) Airport</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
