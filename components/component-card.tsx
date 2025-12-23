"use client"

import { type ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"
import { MoreVertical, Info } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ComponentCardProps {
  icon: ReactNode
  title: string
  status: "included" | "missing" | "required" | "recommended" | "optional"
  description?: string
  details?: Array<{ label: string; value: string; tooltip?: string }>
  primaryAction?: string
  menuActions?: string[]
  menuActionHelpers?: Record<string, string>
  emptyState?: {
    title?: string
    description?: string
    primaryAction?: string
    secondaryAction?: string
    link?: { text: string; href: string }
    note?: string
    helper?: string
  }
}

export function ComponentCard({
  icon,
  title,
  status,
  description,
  details,
  primaryAction,
  menuActions,
  menuActionHelpers,
  emptyState,
}: ComponentCardProps) {
  const [showHelper, setShowHelper] = useState<string | null>(null)

  const statusConfig = {
    included: { text: "Included", className: "bg-accent text-accent-foreground" },
    missing: { text: "Missing", className: "bg-muted text-muted-foreground" },
    required: { text: "Required", className: "bg-destructive/10 text-destructive border border-destructive/20" },
    recommended: { text: "Recommended", className: "bg-accent text-accent-foreground" },
    optional: { text: "Optional", className: "bg-muted text-muted-foreground" },
  }

  const isIncluded = status === "included"
  const showEmptyState = !isIncluded && emptyState

  return (
    <div className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className={`mt-1 ${isIncluded ? "text-primary" : "text-muted-foreground"}`}>{icon}</div>
          <div>
            <div className="mb-2 flex items-center gap-2">
              <h3 className="font-semibold">{showEmptyState && emptyState.title ? emptyState.title : title}</h3>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusConfig[status].className}`}>
                {statusConfig[status].text}
              </span>
            </div>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
        </div>
        {isIncluded && menuActions && menuActions.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {menuActions.map((action) => (
                <DropdownMenuItem
                  key={action}
                  onSelect={() => {
                    if (menuActionHelpers?.[action]) {
                      setShowHelper(action)
                    }
                  }}
                >
                  {action}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {showHelper && menuActionHelpers?.[showHelper] && (
        <div className="mb-4 rounded-lg bg-accent/50 p-3 text-sm text-foreground">{menuActionHelpers[showHelper]}</div>
      )}

      {isIncluded && details && (
        <div className="mb-4 space-y-2 border-t border-border pt-4">
          {details.map((detail, idx) => (
            <div key={idx} className="flex items-start justify-between text-sm">
              <span className="flex items-center gap-1 text-muted-foreground">
                {detail.label}
                {detail.tooltip && (
                  <button
                    className="group relative"
                    onMouseEnter={(e) => {
                      const tooltip = e.currentTarget.querySelector(".tooltip")
                      if (tooltip) {
                        ;(tooltip as HTMLElement).classList.remove("hidden")
                      }
                    }}
                    onMouseLeave={(e) => {
                      const tooltip = e.currentTarget.querySelector(".tooltip")
                      if (tooltip) {
                        ;(tooltip as HTMLElement).classList.add("hidden")
                      }
                    }}
                  >
                    <Info className="size-3" />
                    <span className="tooltip absolute bottom-full left-1/2 z-10 mb-2 hidden w-48 -translate-x-1/2 rounded-lg bg-foreground px-3 py-2 text-xs text-background shadow-lg">
                      {detail.tooltip}
                    </span>
                  </button>
                )}
              </span>
              <span className="font-medium text-foreground">{detail.value}</span>
            </div>
          ))}
        </div>
      )}

      {showEmptyState && (
        <div className="mb-4 border-t border-border pt-4">
          <p className="mb-4 text-sm text-muted-foreground">{emptyState.description}</p>
          {emptyState.helper && <p className="mb-4 text-xs text-muted-foreground">{emptyState.helper}</p>}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {(primaryAction || emptyState?.primaryAction) && (
          <Button
            className={`${
              status === "required"
                ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                : "bg-primary text-primary-foreground hover:bg-primary-hover"
            }`}
          >
            {primaryAction || emptyState?.primaryAction}
          </Button>
        )}
        {emptyState?.secondaryAction && (
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            {emptyState.secondaryAction}
          </Button>
        )}
        {emptyState?.link && (
          <a href={emptyState.link.href} className="text-sm font-medium text-primary hover:underline">
            {emptyState.link.text}
          </a>
        )}
      </div>

      {emptyState?.note && <p className="mt-3 text-xs text-muted-foreground">{emptyState.note}</p>}
    </div>
  )
}
