import { Check } from "lucide-react"

const steps = [
  { id: 1, name: "Plan & Review", status: "current" },
  { id: 2, name: "Travellers", status: "upcoming" },
  { id: 3, name: "Payment", status: "upcoming" },
]

export function Stepper() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <nav aria-label="Progress" className="flex items-center justify-center">
          <ol className="flex items-center gap-8 py-4">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="relative flex items-center">
                {stepIdx !== 0 && <div className="absolute right-full mr-8 hidden h-0.5 w-16 bg-border md:block" />}
                <div className="group flex items-center">
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                        step.status === "complete"
                          ? "border-primary bg-primary"
                          : step.status === "current"
                            ? "border-primary bg-primary"
                            : "border-border bg-background"
                      }`}
                    >
                      {step.status === "complete" ? (
                        <Check className="size-4 text-primary-foreground" />
                      ) : step.status === "current" ? (
                        <span className="size-2 rounded-full bg-primary-foreground" />
                      ) : (
                        <span className="text-sm font-medium text-muted-foreground">{step.id}</span>
                      )}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        step.status === "current"
                          ? "text-primary"
                          : step.status === "complete"
                            ? "text-foreground"
                            : "text-muted-foreground"
                      }`}
                    >
                      {step.name}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}
