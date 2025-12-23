"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plane, Building2, Check, MapPin, Calendar, Users, Hotel } from "lucide-react"
import Image from "next/image"

export default function BuildStepByStepPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null)
  const [flightSkipped, setFlightSkipped] = useState(false)
  const [selectedMakkahHotel, setSelectedMakkahHotel] = useState<string | null>(null)
  const [selectedMadinahHotel, setSelectedMadinahHotel] = useState<string | null>(null)
  const [estimatedTotal, setEstimatedTotal] = useState(0)

  const [customerInput, setCustomerInput] = useState<any>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem("umrahInput")
    if (stored) {
      setCustomerInput(JSON.parse(stored))
    }
  }, [])

  const flights = [
    {
      id: "flight-1",
      airline: "Saudia",
      departureTime: "02:30",
      arrivalTime: "05:20",
      duration: "5h 20m",
      price: 2856,
      badge: "Recommended",
    },
    {
      id: "flight-2",
      airline: "Flynas",
      departureTime: "08:15",
      arrivalTime: "11:30",
      duration: "5h 15m",
      price: 2456,
    },
    {
      id: "flight-3",
      airline: "Saudia",
      departureTime: "14:45",
      arrivalTime: "18:00",
      duration: "5h 15m",
      price: 2756,
    },
  ]

  const makkahHotels = [
    {
      id: "hotel-makkah-1",
      name: "Al Shohada Hotel",
      rating: 5,
      distance: "0.88 km from Kaaba",
      roomType: "TRIPLE STANDARD",
      price: 3200,
      badge: "Recommended",
    },
    {
      id: "hotel-makkah-2",
      name: "Makkah Clock Royal Tower",
      rating: 5,
      distance: "0.1 km from Kaaba",
      roomType: "DELUXE TWIN",
      price: 5800,
    },
    {
      id: "hotel-makkah-3",
      name: "Dar Al Tawhid InterContinental",
      rating: 5,
      distance: "0.45 km from Kaaba",
      roomType: "STANDARD TWIN",
      price: 4200,
    },
  ]

  const madinahHotels = [
    {
      id: "hotel-madinah-1",
      name: "Al Rawda Royal Inn",
      rating: 5,
      distance: "0.43 km from Al-Masjid an-Nabawi",
      roomType: "Executive Suite Haram View",
      price: 2800,
      badge: "Recommended",
    },
    {
      id: "hotel-madinah-2",
      name: "Hilton Madinah",
      rating: 5,
      distance: "0.35 km from Al-Masjid an-Nabawi",
      roomType: "DELUXE ROOM",
      price: 3400,
    },
    {
      id: "hotel-madinah-3",
      name: "Dar Al Eiman Royal",
      rating: 4,
      distance: "0.75 km from Al-Masjid an-Nabawi",
      roomType: "STANDARD TWIN",
      price: 2200,
    },
  ]

  const handleFlightSelect = (flightId: string, price: number) => {
    setSelectedFlight(flightId)
    setEstimatedTotal(price)
    setFlightSkipped(false)
  }

  const handleSkipFlights = () => {
    setSelectedFlight(null)
    setEstimatedTotal(0)
    setFlightSkipped(true)
    setCurrentStep(2)
  }

  const handleMakkahHotelSelect = (hotelId: string, price: number) => {
    setSelectedMakkahHotel(hotelId)
    setEstimatedTotal((prev) => prev + price)
  }

  const handleMadinahHotelSelect = (hotelId: string, price: number) => {
    setSelectedMadinahHotel(hotelId)
    setEstimatedTotal((prev) => prev + price)
  }

  const handleContinue = () => {
    if (currentStep === 1 && (selectedFlight || flightSkipped)) {
      setCurrentStep(2)
    } else if (currentStep === 2 && selectedMakkahHotel) {
      setCurrentStep(3)
    } else if (currentStep === 3 && selectedMadinahHotel) {
      sessionStorage.setItem(
        "umrahSelections",
        JSON.stringify({
          flight: flightSkipped ? null : selectedFlight,
          makkahHotel: selectedMakkahHotel,
          madinahHotel: selectedMadinahHotel,
          total: estimatedTotal,
          flightIncluded: !flightSkipped,
        }),
      )
      router.push("/trip-builder")
    }
  }

  const steps = [
    { number: 1, label: "Flights", icon: Plane },
    { number: 2, label: "Makkah Hotel", icon: Building2 },
    { number: 3, label: "Madinah Hotel", icon: Building2 },
  ]

  const selectedFlightDetails = flights.find((f) => f.id === selectedFlight)
  const selectedMakkahHotelDetails = makkahHotels.find((h) => h.id === selectedMakkahHotel)
  const selectedMadinahHotelDetails = madinahHotels.find((h) => h.id === selectedMadinahHotel)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Image src="/images/nusuk-umrah-logo.png" alt="Nusuk Logo" width={120} height={40} className="h-10 w-auto" />
          <Button variant="ghost" onClick={() => router.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </header>

      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number
              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        isCompleted
                          ? "bg-[#1B8354] text-white"
                          : isActive
                            ? "bg-[#1B8354] text-white"
                            : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                    </div>
                    <span className={`font-medium ${isActive || isCompleted ? "text-gray-900" : "text-gray-500"}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`mx-4 h-0.5 w-16 ${currentStep > step.number ? "bg-[#1B8354]" : "bg-gray-300"}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-gray-900">Select your flights</h2>
                  <p className="mt-2 text-gray-600">Choose a flight or skip this step to book hotels only</p>
                </div>
                <div className="space-y-4">
                  {flights.map((flight) => (
                    <Card
                      key={flight.id}
                      onClick={() => handleFlightSelect(flight.id, flight.price)}
                      className={`cursor-pointer p-6 transition-all ${
                        selectedFlight === flight.id
                          ? "border-2 border-[#1B8354] bg-[#DFF6E7]"
                          : "border-2 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <Image
                            src="/saudia-airlines-logo.jpg"
                            alt={flight.airline}
                            width={60}
                            height={60}
                            className="h-12 w-12 rounded object-cover"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{flight.airline}</div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>{flight.departureTime}</span>
                              <span>→</span>
                              <span>{flight.arrivalTime}</span>
                              <span className="text-gray-500">({flight.duration})</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {flight.badge && <Badge className="bg-[#1B8354] text-white">{flight.badge}</Badge>}
                          <div className="text-right">
                            <div className="text-2xl font-semibold text-gray-900">
                              SAR {flight.price.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Card
                    onClick={handleSkipFlights}
                    className={`cursor-pointer p-6 transition-all ${
                      flightSkipped
                        ? "border-2 border-[#1B8354] bg-[#DFF6E7]"
                        : "border-2 border-dashed border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                          <Building2 className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Hotels only</div>
                          <div className="text-sm text-gray-600">Skip flights and book accommodation only</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-xs">
                          Optional
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="mb-6 text-3xl font-semibold text-gray-900">Choose your hotel in Makkah</h2>
                <div className="space-y-4">
                  {makkahHotels.map((hotel) => (
                    <Card
                      key={hotel.id}
                      onClick={() => handleMakkahHotelSelect(hotel.id, hotel.price)}
                      className={`cursor-pointer p-6 transition-all ${
                        selectedMakkahHotel === hotel.id
                          ? "border-2 border-[#1B8354] bg-[#DFF6E7]"
                          : "border-2 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex gap-6">
                          <Image
                            src="/al-shohada-hotel-makkah.jpg"
                            alt={hotel.name}
                            width={120}
                            height={90}
                            className="h-24 w-32 rounded-lg object-cover"
                          />
                          <div>
                            <div className="mb-1 font-semibold text-gray-900">{hotel.name}</div>
                            <div className="mb-2 flex items-center gap-1">
                              {Array.from({ length: hotel.rating }).map((_, i) => (
                                <span key={i} className="text-amber-500">
                                  ★
                                </span>
                              ))}
                            </div>
                            <div className="text-sm text-gray-600">{hotel.distance}</div>
                            <div className="text-sm text-gray-600">{hotel.roomType}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {hotel.badge && <Badge className="bg-[#1B8354] text-white">{hotel.badge}</Badge>}
                          <div className="text-right">
                            <div className="text-2xl font-semibold text-gray-900">
                              SAR {hotel.price.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">2 nights</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="mb-6 text-3xl font-semibold text-gray-900">Choose your hotel in Madinah</h2>
                <div className="space-y-4">
                  {madinahHotels.map((hotel) => (
                    <Card
                      key={hotel.id}
                      onClick={() => handleMadinahHotelSelect(hotel.id, hotel.price)}
                      className={`cursor-pointer p-6 transition-all ${
                        selectedMadinahHotel === hotel.id
                          ? "border-2 border-[#1B8354] bg-[#DFF6E7]"
                          : "border-2 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex gap-6">
                          <Image
                            src="/al-rawda-royal-inn-madinah.jpg"
                            alt={hotel.name}
                            width={120}
                            height={90}
                            className="h-24 w-32 rounded-lg object-cover"
                          />
                          <div>
                            <div className="mb-1 font-semibold text-gray-900">{hotel.name}</div>
                            <div className="mb-2 flex items-center gap-1">
                              {Array.from({ length: hotel.rating }).map((_, i) => (
                                <span key={i} className="text-amber-500">
                                  ★
                                </span>
                              ))}
                            </div>
                            <div className="text-sm text-gray-600">{hotel.distance}</div>
                            <div className="text-sm text-gray-600">{hotel.roomType}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {hotel.badge && <Badge className="bg-[#1B8354] text-white">{hotel.badge}</Badge>}
                          <div className="text-right">
                            <div className="text-2xl font-semibold text-gray-900">
                              SAR {hotel.price.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">1 night</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Selections</h3>

                {/* Customer Input Summary */}
                {customerInput && (
                  <div className="space-y-4 mb-6 pb-6 border-b">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <div className="text-gray-500">Journey</div>
                        <div className="font-medium text-gray-900">
                          {customerInput.cities?.map((c: any) => `${c.name} ${c.nights}N`).join(" → ")}
                        </div>
                      </div>
                    </div>

                    {customerInput.departure && (
                      <div className="flex items-start gap-3 text-sm">
                        <Plane className="h-4 w-4 text-gray-500 mt-0.5" />
                        <div>
                          <div className="text-gray-500">Departure From</div>
                          <div className="font-medium text-gray-900">{customerInput.departure}</div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <div className="text-gray-500">Departure Date</div>
                        <div className="font-medium text-gray-900">
                          {customerInput.date
                            ? new Date(customerInput.date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : "Not selected"}
                        </div>
                      </div>
                    </div>

                    {customerInput.hotelCategory && (
                      <div className="flex items-start gap-3 text-sm">
                        <Hotel className="h-4 w-4 text-gray-500 mt-0.5" />
                        <div>
                          <div className="text-gray-500">Hotel Category</div>
                          <div className="font-medium text-gray-900">{customerInput.hotelCategory}</div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3 text-sm">
                      <Users className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <div className="text-gray-500">Travelers</div>
                        <div className="font-medium text-gray-900">
                          {customerInput.rooms?.reduce((acc: number, r: any) => acc + r.adults + r.children, 0)}{" "}
                          travelers, {customerInput.rooms?.length} room(s)
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Selected Options */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-700">Package Components</h4>

                  {/* Flight */}
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Plane className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">Flight</span>
                      </div>
                      {selectedFlightDetails ? (
                        <span className="text-sm font-semibold text-gray-900">
                          SAR {selectedFlightDetails.price.toLocaleString()}
                        </span>
                      ) : flightSkipped ? (
                        <Badge variant="outline" className="text-xs">
                          Skipped
                        </Badge>
                      ) : (
                        <span className="text-xs text-gray-500">Not selected</span>
                      )}
                    </div>
                    {selectedFlightDetails && (
                      <div className="mt-1 text-xs text-gray-600">
                        {selectedFlightDetails.airline} • {selectedFlightDetails.departureTime} -{" "}
                        {selectedFlightDetails.arrivalTime}
                      </div>
                    )}
                  </div>

                  {/* Makkah Hotel */}
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">Makkah Hotel</span>
                      </div>
                      {selectedMakkahHotelDetails ? (
                        <span className="text-sm font-semibold text-gray-900">
                          SAR {selectedMakkahHotelDetails.price.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-500">Not selected</span>
                      )}
                    </div>
                    {selectedMakkahHotelDetails && (
                      <div className="mt-1 text-xs text-gray-600">
                        {selectedMakkahHotelDetails.name} • {selectedMakkahHotelDetails.roomType}
                      </div>
                    )}
                  </div>

                  {/* Madinah Hotel */}
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">Madinah Hotel</span>
                      </div>
                      {selectedMadinahHotelDetails ? (
                        <span className="text-sm font-semibold text-gray-900">
                          SAR {selectedMadinahHotelDetails.price.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-500">Not selected</span>
                      )}
                    </div>
                    {selectedMadinahHotelDetails && (
                      <div className="mt-1 text-xs text-gray-600">
                        {selectedMadinahHotelDetails.name} • {selectedMadinahHotelDetails.roomType}
                      </div>
                    )}
                  </div>
                </div>

                {/* Total */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Estimated Total</span>
                    <span className="text-2xl font-semibold text-gray-900">SAR {estimatedTotal.toLocaleString()}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">All prices inclusive</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 border-t bg-white p-4 shadow-lg">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">{flightSkipped ? "Hotels only estimate" : "Estimated total"}</div>
            <div className="text-2xl font-semibold text-gray-900">SAR {estimatedTotal.toLocaleString()}</div>
          </div>
          <div className="flex items-center gap-3">
            {currentStep === 1 && !flightSkipped && (
              <Button
                variant="outline"
                onClick={handleSkipFlights}
                className="h-12 px-6 border-gray-300 bg-transparent"
              >
                Skip Flights
              </Button>
            )}
            <Button
              onClick={handleContinue}
              disabled={
                (currentStep === 1 && !selectedFlight && !flightSkipped) ||
                (currentStep === 2 && !selectedMakkahHotel) ||
                (currentStep === 3 && !selectedMadinahHotel)
              }
              className="h-12 bg-[#1B8354] px-8 hover:bg-[#166A45] disabled:bg-gray-300"
            >
              {currentStep === 3 ? "Review my plan" : "Continue"}
            </Button>
          </div>
        </div>
      </div>

      <div className="h-24" />
    </div>
  )
}
