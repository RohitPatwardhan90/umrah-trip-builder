import { Check, AlertCircle, Info } from "lucide-react"

export function TripHealthCheck() {
  const checks = [
    { message: "Hotel dates align with flights", status: "valid" },
    { message: "Transfers match arrival time", status: "valid" },
    { message: "Early arrival – consider early check-in", status: "warning" },
    { message: "Visa not added", status: "warning" },
  ]

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex items-center gap-2">
        <Info className="size-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">Smart checks for a smoother Umrah journey</h3>
      </div>
      <div className="space-y-2">
        {checks.slice(0, 4).map((check, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            {check.status === "valid" ? (
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            ) : (
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-amber-600" />
            )}
            <span className={check.status === "valid" ? "text-muted-foreground" : "text-amber-700"}>
              {check.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
