"use client"

import { AlertCircle, Info, CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AlertBannerProps {
  variant: "error" | "warning" | "info"
  title: string
  description: string
  primaryAction?: string
  secondaryAction?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  onDismiss?: () => void
}

export function AlertBanner({
  variant,
  title,
  description,
  primaryAction,
  secondaryAction,
  onPrimaryClick,
  onSecondaryClick,
  onDismiss,
}: AlertBannerProps) {
  const variantStyles = {
    error: "bg-destructive/10 border-destructive/20",
    warning: "bg-amber-50 border-amber-200",
    info: "bg-blue-50 border-blue-200",
  }

  const iconStyles = {
    error: "text-destructive",
    warning: "text-amber-600",
    info: "text-blue-600",
  }

  const Icon = variant === "error" ? AlertCircle : variant === "warning" ? Info : CheckCircle2

  return (
    <div className={`rounded-lg border p-4 ${variantStyles[variant]}`}>
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 size-5 shrink-0 ${iconStyles[variant]}`} />
        <div className="flex-1">
          <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
          <p className="mb-3 text-sm text-foreground/80">{description}</p>
          <div className="flex flex-wrap items-center gap-3">
            {primaryAction && (
              <Button
                onClick={onPrimaryClick}
                size="sm"
                className="h-8 bg-primary text-primary-foreground hover:bg-primary-hover"
              >
                {primaryAction}
              </Button>
            )}
            {secondaryAction && (
              <button onClick={onSecondaryClick} className="text-sm font-medium text-primary hover:underline">
                {secondaryAction}
              </button>
            )}
          </div>
        </div>
        {onDismiss && (
          <button onClick={onDismiss} className="text-muted-foreground hover:text-foreground">
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  )
}
