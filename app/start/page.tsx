"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Plane, ArrowRight, ArrowLeft, Minus, Plus, GripVertical, Star } from "lucide-react"
import { format, addDays } from "date-fns"
import Image from "next/image"
import { cn } from "@/lib/utils"

const CITIES = [
  { name: "Makkah", image: "https://media-distribution.traveazy.com/city/235565/thumbnail.jpg", description: "The holy city of Kaaba", required: false },
  { name: "Madinah", image: "https://media-distribution.traveazy.com/city/233924/thumbnail.jpg", description: "The city of Prophet Muhammad (PBUH)", required: false },
  { name: "Jeddah", image: "https://media-distribution.traveazy.com/city/230799/thumbnail.jpg", description: "Gateway city by the Red Sea", required: false },
  // { name: "Red Sea", image: "/images/red-sea.jpg", description: "Coastal resort destination", required: false },
  { name: "Riyadh", image: "https://media-distribution.traveazy.com/city/270900/thumbnail.jpg", description: "Modern capital city", required: false },
]

const POPULAR_AIRPORTS = [
  // UAE (Default)
  { code: "DXB", city: "Dubai", country: "UAE", full: "Dubai International Airport (DXB)" },
  { code: "AUH", city: "Abu Dhabi", country: "UAE", full: "Abu Dhabi International Airport (AUH)" },
  { code: "SHJ", city: "Sharjah", country: "UAE", full: "Sharjah International Airport (SHJ)" },
  // KSA
  { code: "JED", city: "Jeddah", country: "Saudi Arabia", full: "King Abdulaziz International Airport (JED)" },
  { code: "RUH", city: "Riyadh", country: "Saudi Arabia", full: "King Khalid International Airport (RUH)" },
  { code: "DMM", city: "Dammam", country: "Saudi Arabia", full: "King Fahd International Airport (DMM)" },
  // USA
  { code: "JFK", city: "New York", country: "USA", full: "John F Kennedy International Airport (JFK)" },
  { code: "LAX", city: "Los Angeles", country: "USA", full: "Los Angeles International Airport (LAX)" },
  { code: "ORD", city: "Chicago", country: "USA", full: "O'Hare International Airport (ORD)" },
  { code: "IAH", city: "Houston", country: "USA", full: "George Bush Intercontinental Airport (IAH)" },
  { code: "MIA", city: "Miami", country: "USA", full: "Miami International Airport (MIA)" },
  // UK
  { code: "LHR", city: "London", country: "UK", full: "London Heathrow Airport (LHR)" },
  { code: "MAN", city: "Manchester", country: "UK", full: "Manchester Airport (MAN)" },
  { code: "LGW", city: "London Gatwick", country: "UK", full: "London Gatwick Airport (LGW)" },
  // India
  { code: "BOM", city: "Mumbai", country: "India", full: "Mumbai (Bombay), Chhatrapati Shivaji Maharaj Airport (BOM)" },
  { code: "DEL", city: "New Delhi", country: "India", full: "Indira Gandhi International Airport (DEL)" },
  { code: "HYD", city: "Hyderabad", country: "India", full: "Rajiv Gandhi International Airport (HYD)" },
  { code: "BLR", city: "Bangalore", country: "India", full: "Kempegowda International Airport (BLR)" },
  // Other Top Airports
  { code: "IST", city: "Istanbul", country: "Turkey", full: "Istanbul Airport (IST)" },
  { code: "KUL", city: "Kuala Lumpur", country: "Malaysia", full: "Kuala Lumpur International Airport (KUL)" },
  { code: "SIN", city: "Singapore", country: "Singapore", full: "Singapore Changi Airport (SIN)" },
  { code: "CAI", city: "Cairo", country: "Egypt", full: "Cairo International Airport (CAI)" },
  { code: "CDG", city: "Paris", country: "France", full: "Paris Charles de Gaulle Airport (CDG)" },
  { code: "FRA", city: "Frankfurt", country: "Germany", full: "Frankfurt Airport (FRA)" },
  { code: "SYD", city: "Sydney", country: "Australia", full: "Sydney Kingsford Smith Airport (SYD)" },
  { code: "JNB", city: "Johannesburg", country: "South Africa", full: "O.R. Tambo International Airport (JNB)" },
]

const HOTEL_CATEGORIES = [
  { id: "3-star", name: "3 Star", description: "Budget-friendly comfort", icon: "⭐⭐⭐" },
  { id: "4-star", name: "4 Star", description: "Premium amenities", icon: "⭐⭐⭐⭐" },
  { id: "5-star", name: "5 Star", description: "Luxury experience", icon: "⭐⭐⭐⭐⭐" },
]

export default function StartPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5 // Increased to 5 steps to include hotel category

  const [selectedCities, setSelectedCities] = useState<{ name: string; nights: number; order: number }[]>([
    { name: "Makkah", nights: 2, order: 1 },
  ])

  const [departureSearch, setDepartureSearch] = useState("")
  const [selectedDeparture, setSelectedDeparture] = useState("")
  const [showAirportSuggestions, setShowAirportSuggestions] = useState(false)
  const [departureDate, setDepartureDate] = useState<Date>(addDays(new Date(), 7))
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }])
  const [selectedHotelCategory, setSelectedHotelCategory] = useState<string>("") // Added hotel category state

  const filteredAirports = POPULAR_AIRPORTS.filter(
    (airport) =>
      airport.city.toLowerCase().includes(departureSearch.toLowerCase()) ||
      airport.code.toLowerCase().includes(departureSearch.toLowerCase()) ||
      airport.country.toLowerCase().includes(departureSearch.toLowerCase()),
  )

  const airportsByCountry = filteredAirports.reduce(
    (acc, airport) => {
      if (!acc[airport.country]) acc[airport.country] = []
      acc[airport.country].push(airport)
      return acc
    },
    {} as Record<string, typeof POPULAR_AIRPORTS>,
  )

  const totalNights = selectedCities.reduce((sum, city) => sum + city.nights, 0)
  const totalTravelers = rooms.reduce((sum, room) => sum + room.adults + room.children, 0)

  useEffect(() => {
    if (currentStep === 2 && selectedDeparture.length > 0) {
      const timer = setTimeout(() => {
        setCurrentStep(3)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [selectedDeparture, currentStep])

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedCities.length >= 1 && selectedCities.every((city) => city.nights >= 1)
      case 2:
        return true // Always valid since flight is optional
      case 3:
        return departureDate !== undefined
      case 4:
        return selectedHotelCategory.length > 0 // Validate hotel category
      case 5:
        return rooms.length >= 1 && rooms.every((room) => room.adults >= 1)
      default:
        return false
    }
  }

  const handleNext = () => {
    if (isStepValid() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleContinue = () => {
    sessionStorage.setItem(
      "umrahPreferences",
      JSON.stringify({
        cities: selectedCities,
        departure: selectedDeparture || "No flight required",
        departureDate,
        hotelCategory: selectedHotelCategory, // Added hotel category to preferences
        rooms,
        totalTravelers,
        totalNights,
      }),
    )
    router.push("/planning-choice")
  }

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }])
  }

  const updateRoom = (index: number, field: "adults" | "children", value: number) => {
    const newRooms = [...rooms]
    newRooms[index][field] = Math.max(field === "adults" ? 1 : 0, value)
    setRooms(newRooms)
  }

  const removeRoom = (index: number) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((_, i) => i !== index))
    }
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setDepartureDate(date)
    }
  }

  const toggleCity = (cityName: string) => {
    const exists = selectedCities.find((c) => c.name === cityName)
    if (exists) {
      // Remove city and reorder remaining cities
      const filtered = selectedCities.filter((c) => c.name !== cityName)
      setSelectedCities(filtered.map((city, index) => ({ ...city, order: index + 1 })))
    } else {
      // Add city with next order number
      const nextOrder = selectedCities.length + 1
      setSelectedCities([...selectedCities, { name: cityName, nights: 1, order: nextOrder }])
    }
  }

  const updateCityNights = (cityName: string, nights: number) => {
    setSelectedCities(
      selectedCities.map((city) => (city.name === cityName ? { ...city, nights: Math.max(1, nights) } : city)),
    )
  }

  const moveCityUp = (cityName: string) => {
    const index = selectedCities.findIndex((c) => c.name === cityName)
    if (index > 0) {
      const newCities = [...selectedCities]
      ;[newCities[index - 1], newCities[index]] = [newCities[index], newCities[index - 1]]
      setSelectedCities(newCities.map((city, idx) => ({ ...city, order: idx + 1 })))
    }
  }

  const moveCityDown = (cityName: string) => {
    const index = selectedCities.findIndex((c) => c.name === cityName)
    if (index < selectedCities.length - 1) {
      const newCities = [...selectedCities]
      ;[newCities[index], newCities[index + 1]] = [newCities[index + 1], newCities[index]]
      setSelectedCities(newCities.map((city, idx) => ({ ...city, order: idx + 1 })))
    }
  }

  const skipFlightStep = () => {
    setSelectedDeparture("")
    setCurrentStep(3)
  }

  const sortedCities = [...selectedCities].sort((a, b) => a.order - b.order)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <Image src="/images/nusuk-umrah-logo.png" alt="Nusuk Logo" width={120} height={40} className="h-10 w-auto" />
        </div>
      </header>

      {/* Progress Bar */}
      <div className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={cn(
                  "h-2 flex-1 rounded-full transition-all duration-500",
                  i + 1 < currentStep
                    ? "bg-[#1B8354]"
                    : i + 1 === currentStep
                      ? "scale-105 bg-[#1B8354]"
                      : "bg-gray-200",
                )}
              />
            ))}
          </div>
          <div className="mt-2 text-center text-sm text-gray-600">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
      </div>

      <main className="mx-auto flex flex-1 w-full max-w-5xl flex-col px-4 py-8 sm:px-6">
        <div className="flex flex-1 flex-col justify-center">
          {/* Step 1: Select Cities & Nights - Now with sequence/order */}
          {currentStep === 1 && (
            <div className="animate-in fade-in-0 slide-in-from-right-4 duration-500">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Select Cities & Nights</h2>
              <p className="mb-6 text-lg text-gray-600">Choose cities and set your travel sequence</p>

              {/* Selected Cities with Order */}
              {sortedCities.length > 0 && (
                <div className="mb-6 rounded-sm border-2 border-[#1B8354] bg-[#DFF6E7] p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <GripVertical className="h-4 w-4" />
                    Your Journey Sequence
                  </div>
                  <div className="space-y-2">
                    {sortedCities.map((city, index) => (
                      <div key={city.name} className="flex items-center gap-3 rounded-lg bg-white p-3">
                        
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B8354] text-sm font-bold text-white">
                          {city.order}
                        </div>
                        <div className="flex-1 font-semibold text-gray-900">{city.name}</div>
                        <div className="text-sm text-gray-600">{city.nights}N</div>
                        <button
                          onClick={() => toggleCity(city.name)}
                          className="text-sm text-red-600 hover:text-red-700 cursor-pointer font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
                    <CalendarIcon className="h-4 w-4 text-[#1B8354]" />
                    Total: {totalNights} Nights
                  </div>
                </div>
              )}

              {/* Available Cities */}
              <div className="grid gap-4 sm:grid-cols-2">
                {CITIES.map((city) => {
                  const isSelected = selectedCities.find((c) => c.name === city.name)
                  const nights = isSelected?.nights || 1

                  return (
                    <div
                      key={city.name}
                      className={cn(
                        "rounded-sm border-2 p-5 transition-all",
                        isSelected ? "border-[#1B8354] bg-[#DFF6E7]/50" : "border-gray-200 bg-white",
                      )}
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-sm">
                            <Image
                              src={city.image}
                              alt={city.name}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{city.name}</h3>
                            <p className="text-xs text-gray-600">{city.description}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleCity(city.name)}
                          className={cn(
                            "rounded-full px-4 py-1.5 text-xs font-semibold transition-all",
                            isSelected ? "bg-[#1B8354] text-white" : "border-2 border-gray-300 text-gray-700",
                          )}
                        >
                          {isSelected ? "Added" : "Add"}
                        </button>
                      </div>

                      {isSelected && (
                        <div className="flex items-center justify-between rounded-lg bg-white p-3">
                          <div className="text-sm font-medium text-gray-700">Nights</div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateCityNights(city.name, nights - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-gray-300 text-gray-700 transition-all hover:border-[#1B8354]"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-10 text-center text-xl font-bold text-gray-900">{nights}</span>
                            <button
                              onClick={() => updateCityNights(city.name, nights + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B8354] text-white transition-all hover:bg-[#166A45]"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Departure From - Only UAE default, all others in autocomplete */}
          {currentStep === 2 && (
            <div className="animate-in fade-in-0 slide-in-from-right-4 duration-500">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Departure From (Optional)</h2>
              <p className="mb-4 text-lg text-gray-600">Select your departure airport or skip for hotel-only package</p>

              <div className="mb-4 flex justify-end">
                <button
                  onClick={skipFlightStep}
                  className="text-sm font-medium text-[#1B8354] underline decoration-2 underline-offset-4 hover:text-[#166A45]"
                >
                  Skip - Hotel only package
                </button>
              </div>

              <div className="relative">
                <div className="relative">
                  <Plane className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search for your departure airport..."
                    value={departureSearch}
                    onChange={(e) => {
                      setDepartureSearch(e.target.value)
                      setShowAirportSuggestions(true)
                    }}
                    onFocus={() => setShowAirportSuggestions(true)}
                    className="h-16 bg-white pl-14 pr-4 text-lg focus-visible:ring-2 focus-visible:ring-[#1B8354]"
                    autoFocus
                  />
                </div>

                {/* Autocomplete Dropdown */}
                {showAirportSuggestions && departureSearch.length > 0 && Object.keys(airportsByCountry).length > 0 && (
                  <div className="absolute z-50 mt-2 max-h-96 w-full overflow-auto rounded-sm border-2 border-gray-100 bg-white shadow-2xl">
                    {Object.entries(airportsByCountry).map(([country, airports]) => (
                      <div key={country}>
                        <div className="sticky top-0 bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-700">
                          {country}
                        </div>
                        {airports.map((airport) => (
                          <button
                            key={airport.code}
                            onClick={() => {
                              setSelectedDeparture(airport.full)
                              setDepartureSearch(airport.full)
                              setShowAirportSuggestions(false)
                            }}
                            className="w-full border-b border-gray-100 px-6 py-3 text-left transition-colors last:border-b-0 hover:bg-[#DFF6E7]"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-gray-900">{airport.city}</div>
                                <div className="text-sm text-gray-600">{airport.full}</div>
                              </div>
                              <div className="rounded-lg bg-[#1B8354] px-3 py-1 text-sm font-bold text-white">
                                {airport.code}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Popular UAE Airports Only */}
                {(!departureSearch || !showAirportSuggestions) && (
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-700">Popular - UAE</p>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {POPULAR_AIRPORTS.filter((a) => a.country === "UAE").map((airport) => (
                        <button
                          key={airport.code}
                          onClick={() => {
                            setSelectedDeparture(airport.full)
                            setDepartureSearch(airport.full)
                          }}
                          className={cn(
                            "rounded-sm border-2 p-4 text-left transition-all hover:border-[#1B8354] hover:bg-[#DFF6E7]",
                            selectedDeparture === airport.full
                              ? "border-[#1B8354] bg-[#DFF6E7]"
                              : "border-gray-200 bg-white",
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900">{airport.city}</div>
                              <div className="text-sm text-gray-600">{airport.code}</div>
                            </div>
                            <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-bold text-gray-700">
                              {airport.code}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-600">
                      Search above to find airports from USA, UK, India, Saudi Arabia, and more
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Departure Date */}
          {currentStep === 3 && (
            <div className="animate-in fade-in-0 slide-in-from-right-4 duration-500">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Departure Date</h2>
              <p className="mb-6 text-lg text-gray-600">When would you like to begin your journey?</p>

              <div className="rounded-sm border-2 border-gray-100 bg-white p-6 shadow-sm">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-16 w-full justify-start border-2 bg-white text-left text-lg font-normal hover:bg-gray-50"
                    >
                      <CalendarIcon className="mr-3 h-6 w-6 text-[#1B8354]" />
                      {departureDate ? format(departureDate, "PPP") : "Select your departure date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="center">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={handleDateSelect}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>

                {departureDate && (
                  <div className="animate-in fade-in-0 slide-in-from-top-2 mt-6 rounded-sm bg-[#DFF6E7] p-4">
                    <div className="flex items-start gap-3">
                      <CalendarIcon className="mt-0.5 h-5 w-5 text-[#1B8354]" />
                      <div>
                        <div className="font-semibold text-gray-900">Your Umrah Journey</div>
                        <div className="mt-1 text-sm text-gray-700">
                          Departure: {format(departureDate, "PPP")}
                          <br />
                          Duration: {totalNights} nights
                          <br />
                          Estimated Return: {format(addDays(departureDate, totalNights), "PPP")}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Hotel Category Selection */}
          {currentStep === 4 && (
            <div className="animate-in fade-in-0 slide-in-from-right-4 duration-500">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Select Hotel Category</h2>
              <p className="mb-6 text-lg text-gray-600">Choose your preferred accommodation level</p>

              <div className="grid gap-4 sm:grid-cols-3">
                {HOTEL_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedHotelCategory(category.id)}
                    className={cn(
                      "rounded-sm border-2 p-6 text-center transition-all hover:border-[#1B8354] hover:shadow-lg",
                      selectedHotelCategory === category.id
                        ? "border-[#1B8354] bg-[#DFF6E7] shadow-lg"
                        : "border-gray-200 bg-white",
                    )}
                  >
                    <div className="mb-3 text-4xl">{category.icon}</div>
                    <div className="mb-1 text-xl font-bold text-gray-900">{category.name}</div>
                    <div className="text-sm text-gray-600">{category.description}</div>
                  </button>
                ))}
              </div>

              {selectedHotelCategory && (
                <div className="mt-6 rounded-sm border-2 border-[#1B8354]/20 bg-[#DFF6E7] p-4 text-center">
                  <Star className="mx-auto mb-2 h-6 w-6 text-[#1B8354]" />
                  <div className="font-semibold text-gray-900">
                    {HOTEL_CATEGORIES.find((c) => c.id === selectedHotelCategory)?.name} hotels selected
                  </div>
                  <div className="text-sm text-gray-600">
                    We'll show you the best{" "}
                    {HOTEL_CATEGORIES.find((c) => c.id === selectedHotelCategory)?.name.toLowerCase()} options
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Travelers & Rooms */}
          {currentStep === 5 && (
            <div className="animate-in fade-in-0 slide-in-from-right-4 duration-500">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Select Travelers</h2>
              <p className="mb-6 text-lg text-gray-600">
                Add the number of adults, children, and rooms so we can personalize your package
              </p>

              <div className="space-y-4">
                {rooms.map((room, index) => (
                  <div key={index} className="rounded-sm border-2 border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900">Room {index + 1}</h3>
                      {rooms.length > 1 && (
                        <button
                          onClick={() => removeRoom(index)}
                          className="text-sm font-medium text-red-600 hover:text-red-700"
                        >
                          Remove Room
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">Adults</div>
                          <div className="text-sm text-gray-600">Ages 12 or above</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateRoom(index, "adults", room.adults - 1)}
                            disabled={room.adults <= 1}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-300 text-gray-700 transition-all hover:border-[#1B8354] disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center text-2xl font-bold text-gray-900">{room.adults}</span>
                          <button
                            onClick={() => updateRoom(index, "adults", room.adults + 1)}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B8354] text-white transition-all hover:bg-[#166A45]"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">Children</div>
                          <div className="text-sm text-gray-600">Ages 0 - 11</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateRoom(index, "children", room.children - 1)}
                            disabled={room.children <= 0}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-300 text-gray-700 transition-all hover:border-[#1B8354] disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center text-2xl font-bold text-gray-900">{room.children}</span>
                          <button
                            onClick={() => updateRoom(index, "children", room.children + 1)}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B8354] text-white transition-all hover:bg-[#166A45]"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={addRoom}
                  className="w-full rounded-sm border-2 border-dashed border-gray-300 bg-gray-50 py-4 text-sm font-semibold text-gray-700 transition-all hover:border-[#1B8354] hover:bg-[#DFF6E7] hover:text-[#1B8354]"
                >
                  + Add another room
                </button>
              </div>

              <div className="mt-6 rounded-sm border-2 border-[#1B8354]/20 bg-[#DFF6E7] p-4">
                <div className="text-center font-semibold text-gray-900">
                  Total: {totalTravelers} Traveler{totalTravelers !== 1 ? "s" : ""} • {rooms.length} Room
                  {rooms.length !== 1 ? "s" : ""}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer with Navigation */}
        <div className="sticky bottom-0 mt-8 border-t bg-white/90 backdrop-blur-sm py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 text-sm text-gray-600">
              {sortedCities.length > 0 && (
                <span>
                  {sortedCities.map((c) => c.name).join(" → ")} • {totalNights}N
                  {selectedDeparture && ` • ${selectedDeparture.split("(")[0].trim()}`}
                  {selectedHotelCategory && ` • ${HOTEL_CATEGORIES.find((c) => c.id === selectedHotelCategory)?.name}`}
                </span>
              )}
            </div>
            <div className="flex gap-3">
              {currentStep > 1 && (
                <Button onClick={handleBack} variant="outline" size="lg" className="gap-2 bg-transparent">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              )}
              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  size="lg"
                  className="gap-2 bg-[#1B8354] hover:bg-[#166A45]"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleContinue}
                  disabled={!isStepValid()}
                  size="lg"
                  className="gap-2 bg-[#1B8354] hover:bg-[#166A45]"
                >
                  View Options
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
