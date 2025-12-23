import { Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PlanStatus() {
  const items = [
    { name: "Flights", status: "complete" },
    { name: "Hotels", status: "complete" },
    { name: "Transfers", status: "complete" },
    { name: "Visa", status: "missing" },
  ]

  const missingItems = items.filter((item) => item.status === "missing")
  const hasMissingItems = missingItems.length > 0

  return (
    <div className="space-y-4">
      {/* Status Strip */}
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="mb-3 text-sm font-semibold text-foreground">Plan Status</div>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              {item.status === "complete" ? (
                <Check className="size-4 text-primary" />
              ) : (
                <AlertCircle className="size-4 text-amber-600" />
              )}
              <span className="text-sm text-muted-foreground">
                {item.name} {item.status === "complete" ? "added" : "not added"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Required Banner */}
      {hasMissingItems && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertCircle className="size-5 text-amber-600" />
            <h3 className="font-semibold text-amber-900">Action required</h3>
          </div>
          <p className="mb-3 text-sm text-amber-700">
            Please add the required items to continue: {missingItems.map((item) => item.name).join(", ")}
          </p>
          <Button
            size="sm"
            variant="outline"
            className="border-amber-600 text-amber-900 hover:bg-amber-100 bg-transparent"
          >
            Fix now
          </Button>
        </div>
      )}
    </div>
  )
}
