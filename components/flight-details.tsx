import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
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

export function FlightDetails() {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Flight Details</h2>
        {/* Replaced visible delete button with kebab menu and added safe delete confirmation modal */}
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

      <div className="space-y-6">
        {/* Outbound Flight */}
        <div className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
              <Image src="/saudia-airlines-logo.jpg" alt="Saudia" width={32} height={32} className="size-8" />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Saudia</div>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold">02:30</div>
              <div className="text-xs text-muted-foreground">Dec 29, Mumbai</div>
            </div>

            <div className="flex flex-1 flex-col items-center">
              <div className="text-xs text-muted-foreground">5h 20m</div>
              <div className="my-2 h-px w-full bg-border"></div>
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full border-2 border-border"></div>
                <div className="size-2 rounded-full border-2 border-border"></div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg font-semibold">05:20</div>
              <div className="text-xs text-muted-foreground">Dec 29, Jeddah</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Flight Detail
            </Button>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>
        </div>

        {/* Return Flight */}
        <div className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
              <Image src="/saudia-airlines-logo.jpg" alt="Saudia" width={32} height={32} className="size-8" />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Saudia</div>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold">02:35</div>
              <div className="text-xs text-muted-foreground">Dec 31, Jeddah</div>
            </div>

            <div className="flex flex-1 flex-col items-center">
              <div className="text-xs text-muted-foreground">4h 20m</div>
              <div className="my-2 h-px w-full bg-border"></div>
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full border-2 border-border"></div>
                <div className="size-2 rounded-full border-2 border-border"></div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg font-semibold">09:25</div>
              <div className="text-xs text-muted-foreground">Dec 31, Mumbai</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Flight Detail
            </Button>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
