import { Button } from "@/components/ui/button"
import { Plane, Building2, Car, Info, AlertCircle, Bookmark, Download, Share2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CurrencySymbol } from "@/components/currency-symbol"

export function PriceSidebar() {
  const hasRequiredItems = true // Set to false to show missing items warning

  return (
    <div className="rounded-lg border border-border bg-card shadow-lg">
      {/* Price Section with Breakdown */}
      <div className="border-b border-border bg-primary/5 p-6">
        <div className="mb-1 flex items-center gap-2">
          <div className="text-4xl font-bold text-foreground inline-flex items-baseline gap-1">
            <CurrencySymbol />
            <span>10,997.59</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="size-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-sm">
                  All prices include applicable taxes and fees. Final total is confirmed after traveller details and
                  availability recheck.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mb-4 text-sm text-muted-foreground">All price inclusive</div>

        {/* Price Breakdown */}
        <div className="space-y-2 border-t border-border/50 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Base Price</span>
            <span className="font-medium inline-flex items-baseline gap-1">
              <CurrencySymbol />
              <span>9,767.46</span>
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Taxes</span>
            <span className="font-medium inline-flex items-baseline gap-1">
              <CurrencySymbol />
              <span>1,230.13</span>
            </span>
          </div>
        </div>
      </div>

      {/* Package Includes */}
      <div className="border-b border-border p-6">
        <h3 className="mb-4 text-sm font-semibold text-foreground">Package Includes</h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
              <Plane className="size-5 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Flight</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
              <Car className="size-5 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Transfer</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="size-5 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Hotel</span>
          </div>
        </div>
      </div>

      {/* Missing Items Warning */}
      {!hasRequiredItems && (
        <div className="border-b border-border bg-amber-50 p-4">
          <div className="flex gap-2">
            <AlertCircle className="size-5 shrink-0 text-amber-600" />
            <div>
              <div className="text-sm font-medium text-amber-900">Missing:</div>
              <div className="text-xs text-amber-700">Visa, Hotel in Madinah</div>
            </div>
          </div>
        </div>
      )}

      {/* Actions with improved CTAs */}
      <div className="space-y-3 p-6">
        <Button
          className="w-full bg-primary text-base font-semibold hover:bg-[#166A45]"
          size="lg"
          disabled={!hasRequiredItems}
        >
          Proceed to traveller details
        </Button>
        <div className="text-center text-xs text-muted-foreground">Next step: Traveller details</div>

        {/* Save, Download, Share Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 gap-2 bg-transparent" size="sm">
            <Bookmark className="size-4" />
            Save
          </Button>
          <Button variant="outline" className="flex-1 gap-2 bg-transparent" size="sm">
            <Download className="size-4" />
            Download
          </Button>
          <Button variant="outline" className="flex-1 gap-2 bg-transparent" size="sm">
            <Share2 className="size-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  )
}
