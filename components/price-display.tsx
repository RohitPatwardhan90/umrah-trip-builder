import { CurrencySymbol } from "./currency-symbol"

interface PriceDisplayProps {
  amount: number
  className?: string
  showDecimals?: boolean
}

export function PriceDisplay({ amount, className = "", showDecimals = false }: PriceDisplayProps) {
  const formattedAmount = showDecimals
    ? amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : amount.toLocaleString("en-US")

  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      <CurrencySymbol />
      <span>{formattedAmount}</span>
    </span>
  )
}
