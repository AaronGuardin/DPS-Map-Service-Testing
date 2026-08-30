"use client"

import { useEffect, useState } from "react"

type Place = {
  id: number
  name: string
  category: string | null
  address: string | null
  city: string | null
  latitude: string | null
  longitude: string | null
  rating: string | null
  reviews_count: number | null
  image_url: string | null
}

export default function TestPlacesPage() {
  const [places, setPlaces] = useState<Place[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await fetch("/api/places")

        if (!response.ok) {
          throw new Error("Failed to fetch places")
        }

        const data = await response.json()

        setPlaces(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPlaces()
  }, [])

  if (loading) {
    return <div>Loading places...</div>
  }

  return (
    <main className="p-10">
      <h1 className="mb-6 text-3xl font-bold">Places</h1>

      <div className="grid gap-4">
        {places.map((place) => (
          <div key={place.id} className="rounded-lg border p-4">
            <h2 className="text-xl font-bold">{place.name}</h2>

            <p>Category: {place.category}</p>

            <p>Rating: {place.rating}</p>

            <p>{place.address}</p>

            <p>Latitude: {place.latitude}</p>

            <p>Longitude: {place.longitude}</p>

            {place.image_url && (
              <img
                src={place.image_url}
                alt={place.name}
                className="mt-3 w-48 rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
