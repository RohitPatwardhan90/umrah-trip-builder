import { Button } from "@/components/ui/button"

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground">Total</p>
          <p className="text-xl font-bold text-primary">$4,780</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Button disabled className="bg-muted text-muted-foreground hover:bg-muted">
            Continue
          </Button>
          <button className="text-xs font-medium text-primary hover:underline">View price breakdown</button>
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-destructive">Missing: Visa, Hotel in Madinah</p>
    </div>
  )
}
