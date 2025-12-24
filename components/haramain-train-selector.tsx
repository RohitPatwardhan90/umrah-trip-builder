"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Train, Clock, Check, X } from "lucide-react"
import { CurrencySymbol } from "@/components/currency-symbol"

interface TrainOption {
  id: string
  trainNumber: string
  departure: string
  arrival: string
  departureTime: string
  arrivalTime: string
  duration: string
  class: string
  price: number
}

const trainOptions: TrainOption[] = [
  {
    id: "1",
    trainNumber: "HT 201",
    departure: "Makkah",
    arrival: "Madinah",
    departureTime: "08:00 AM",
    arrivalTime: "10:30 AM",
    duration: "2h 30m",
    class: "Business Class",
    price: 250,
  },
  {
    id: "2",
    trainNumber: "HT 203",
    departure: "Makkah",
    arrival: "Madinah",
    departureTime: "12:00 PM",
    arrivalTime: "02:30 PM",
    duration: "2h 30m",
    class: "Business Class",
    price: 250,
  },
  {
    id: "3",
    trainNumber: "HT 205",
    departure: "Makkah",
    arrival: "Madinah",
    departureTime: "05:00 PM",
    arrivalTime: "07:30 PM",
    duration: "2h 30m",
    class: "Business Class",
    price: 250,
  },
  {
    id: "4",
    trainNumber: "HT 301",
    departure: "Makkah",
    arrival: "Madinah",
    departureTime: "09:00 AM",
    arrivalTime: "11:30 AM",
    duration: "2h 30m",
    class: "Economy Class",
    price: 150,
  },
  {
    id: "5",
    trainNumber: "HT 303",
    departure: "Makkah",
    arrival: "Madinah",
    departureTime: "03:00 PM",
    arrivalTime: "05:30 PM",
    duration: "2h 30m",
    class: "Economy Class",
    price: 150,
  },
]

interface HaramainTrainSelectorProps {
  onTrainAdded?: (train: TrainOption) => void
  selectedTrainId?: string
}

export function HaramainTrainSelector({ onTrainAdded, selectedTrainId }: HaramainTrainSelectorProps) {
  const [open, setOpen] = useState(false)
  const [selectedTrain, setSelectedTrain] = useState<TrainOption | null>(
    selectedTrainId ? trainOptions.find((t) => t.id === selectedTrainId) || null : null,
  )

  const handleSelectTrain = (train: TrainOption) => {
    setSelectedTrain(train)
    onTrainAdded?.(train)
    setOpen(false)
  }

  const handleRemoveTrain = () => {
    setSelectedTrain(null)
  }

  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#DFF6E7]">
              <Train className="size-5 text-[#1B8354]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Haramain High-Speed Train</h3>
              <p className="text-sm text-muted-foreground">Travel between Makkah and Madinah</p>
            </div>
          </div>
        </div>

        {selectedTrain ? (
          <div className="space-y-4">
            <div className="rounded-lg border border-[#1B8354] bg-[#DFF6E7] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="size-5 text-[#1B8354]" />
                  <span className="font-semibold text-[#1B8354]">Train Selected</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleRemoveTrain} className="h-8 text-red-600">
                  <X className="size-4" />
                  Remove
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <div className="text-xs text-muted-foreground">Train Number</div>
                  <div className="font-medium text-foreground">{selectedTrain.trainNumber}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Class</div>
                  <div className="font-medium text-foreground">{selectedTrain.class}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Departure</div>
                  <div className="font-medium text-foreground">
                    {selectedTrain.departure} - {selectedTrain.departureTime}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Arrival</div>
                  <div className="font-medium text-foreground">
                    {selectedTrain.arrival} - {selectedTrain.arrivalTime}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[#1B8354]/20 pt-3">
                <span className="text-sm text-muted-foreground">Price per traveler</span>
                <span className="text-lg font-semibold text-foreground inline-flex items-baseline gap-1">
                  <CurrencySymbol />
                  <span>{selectedTrain.price}</span>
                </span>
              </div>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full bg-transparent">
                  Change Train
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-xl">
                <SheetHeader>
                  <SheetTitle>Select Haramain Train</SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-4">
                  {trainOptions.map((train) => (
                    <div
                      key={train.id}
                      className="cursor-pointer rounded-lg border border-border bg-card p-4 transition-colors hover:border-[#1B8354]"
                      onClick={() => handleSelectTrain(train)}
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-semibold text-foreground">{train.trainNumber}</span>
                        <span className="rounded-full bg-[#DFF6E7] px-3 py-1 text-sm font-medium text-[#1B8354]">
                          {train.class}
                        </span>
                      </div>

                      <div className="mb-3 flex items-center justify-between text-sm">
                        <div>
                          <div className="font-medium text-foreground">{train.departureTime}</div>
                          <div className="text-muted-foreground">{train.departure}</div>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="size-4" />
                          <span>{train.duration}</span>
                        </div>

                        <div>
                          <div className="font-medium text-foreground">{train.arrivalTime}</div>
                          <div className="text-muted-foreground">{train.arrival}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-border pt-3">
                        <span className="text-sm text-muted-foreground">Price per traveler</span>
                        <span className="text-lg font-semibold text-foreground inline-flex items-baseline gap-1">
                          <CurrencySymbol />
                          <span>{train.price}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button className="w-full bg-[#1B8354] hover:bg-[#156843]">
                <Train className="mr-2 size-4" />
                Add Haramain Train
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-xl">
              <SheetHeader>
                <SheetTitle>Select Haramain Train</SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-4">
                {trainOptions.map((train) => (
                  <div
                    key={train.id}
                    className="cursor-pointer rounded-lg border border-border bg-card p-4 transition-colors hover:border-[#1B8354]"
                    onClick={() => handleSelectTrain(train)}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-semibold text-foreground">{train.trainNumber}</span>
                      <span className="rounded-full bg-[#DFF6E7] px-3 py-1 text-sm font-medium text-[#1B8354]">
                        {train.class}
                      </span>
                    </div>

                    <div className="mb-3 flex items-center justify-between text-sm">
                      <div>
                        <div className="font-medium text-foreground">{train.departureTime}</div>
                        <div className="text-muted-foreground">{train.departure}</div>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="size-4" />
                        <span>{train.duration}</span>
                      </div>

                      <div>
                        <div className="font-medium text-foreground">{train.arrivalTime}</div>
                        <div className="text-muted-foreground">{train.arrival}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-border pt-3">
                      <span className="text-sm text-muted-foreground">Price per traveler</span>
                      <span className="text-lg font-semibold text-foreground inline-flex items-baseline gap-1">
                        <CurrencySymbol />
                        <span>{train.price}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  )
}
