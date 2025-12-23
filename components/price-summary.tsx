"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Clock, CheckCircle2 } from "lucide-react"

export function PriceSummary() {
  const [promoCode, setPromoCode] = useState("")

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-6 text-xl font-semibold">Price summary</h2>

      <div className="mb-6 space-y-3 border-b border-border pb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Flights</span>
          <span className="font-medium">$1,240</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Hotels</span>
          <span className="font-medium">$3,200</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Transfers</span>
          <span className="font-medium">—</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Visa</span>
          <span className="font-medium">—</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Add-ons</span>
          <span className="font-medium">—</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Taxes & fees</span>
          <span className="font-medium">$340</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-2">
          <Input
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1"
          />
          <Button variant="outline">Apply</Button>
        </div>
      </div>

      <div className="mb-6 flex items-baseline justify-between border-t border-border pt-4">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-2xl font-bold text-primary">$4,780</span>
      </div>

      <p className="mb-6 text-xs text-muted-foreground">
        Final total may change until travellers are confirmed and availability is rechecked.
      </p>

      <Button disabled className="mb-3 w-full bg-muted text-muted-foreground hover:bg-muted">
        Add required items to continue
      </Button>
      <p className="mb-6 text-center text-xs text-destructive">Missing: Visa, Hotel in Madinah</p>

      <Button variant="outline" className="mb-6 w-full border-primary text-primary hover:bg-accent bg-transparent">
        Save & share plan
      </Button>

      <div className="flex items-center justify-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Shield className="size-3" />
          Secure payment
        </span>
        <span className="flex items-center gap-1">
          <Clock className="size-3" />
          24/7 support
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="size-3" />
          Trusted partners
        </span>
      </div>
    </div>
  )
}
