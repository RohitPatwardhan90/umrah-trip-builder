import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HelpStrip() {
  return (
    <div className="rounded-lg border border-border bg-accent/50 p-6">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Need help?</h3>
        <p className="text-sm text-muted-foreground">Chat with us on WhatsApp or call support for quick assistance.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="gap-2 bg-transparent">
          <MessageCircle className="size-4" />
          Chat on WhatsApp
        </Button>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Phone className="size-4" />
          Call support
        </Button>
      </div>
    </div>
  )
}
