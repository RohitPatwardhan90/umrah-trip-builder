"use client"

import { useState } from "react"
import { Eye, Plane, Building2, Car, Activity, FileText } from "lucide-react"

const tabs = [
  { id: "overview", label: "Overview", icon: Eye },
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Building2 },
  { id: "transfers", label: "Transfers", icon: Car },
  { id: "activities", label: "Activities", icon: Activity },
  { id: "policies", label: "Policies", icon: FileText },
]

export function TabNavigation() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="border-b border-border">
      <nav className="flex gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-4" />
              {tab.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
