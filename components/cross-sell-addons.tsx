import { Button } from "@/components/ui/button"
import { Train, Smartphone, Shield, User, Plus, ShoppingCart } from "lucide-react"
import { Card } from "@/components/ui/card"

export function CrossSellAddons() {
  const addons = [
    {
      id: "haramain-train",
      icon: Train,
      title: "Haramain High-Speed Train",
      description: "Travel between Makkah & Madinah in comfort. Fast & convenient.",
      price: "1,200",
      duration: "2h 30m journey",
      popular: true,
    },
    {
      id: "esim",
      icon: Smartphone,
      title: "Saudi Arabia eSIM",
      description: "Stay connected with unlimited data throughout your journey.",
      price: "800",
      duration: "Valid 7 days",
      popular: false,
    },
    {
      id: "insurance",
      icon: Shield,
      title: "Travel Insurance",
      description: "Complete protection for your Umrah journey. Medical & trip coverage.",
      price: "1,500",
      duration: "Full trip coverage",
      popular: true,
    },
    {
      id: "guide",
      icon: User,
      title: "Private Tour Guide",
      description: "Expert guide for Ziyarat & historical sites. Available in multiple languages.",
      price: "2,500",
      duration: "Per day",
      popular: false,
    },
  ]

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Enhance Your Journey</h2>
          <p className="text-sm text-muted-foreground">Add these optional services to complete your Umrah experience</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {addons.map((addon) => {
          const Icon = addon.icon
          return (
            <Card
              key={addon.id}
              className="group relative overflow-hidden border border-border bg-card transition-all hover:shadow-md"
            >
              {addon.popular && (
                <div className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
              )}

              <div className="p-5">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-foreground">{addon.title}</h3>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                </div>

                <div className="mb-4 flex items-baseline justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-2xl font-bold text-foreground">SAR {addon.price}</div>
                    <div className="text-xs text-muted-foreground">{addon.duration}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                    <ShoppingCart className="mr-2 size-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Custom Service Request */}
      <div className="mt-6 flex items-center justify-between rounded-lg border border-dashed border-primary/30 bg-primary/5 p-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
            <Plus className="size-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Need something else?</h3>
            <p className="text-sm text-muted-foreground">
              Contact us for custom services like wheelchair assistance, extra luggage, etc.
            </p>
          </div>
        </div>
        <Button variant="outline">Contact Support</Button>
      </div>
    </section>
  )
}
