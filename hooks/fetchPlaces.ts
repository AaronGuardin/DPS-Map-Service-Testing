import { useQuery } from "@tanstack/react-query"
import type { Place } from "@/types/places"

async function fetchPlaces(): Promise<Place[]> {
  const response = await fetch("/api/places")

  if (!response.ok) {
    throw new Error("Failed to fetch places")
  }

  return response.json()
}

export function usePlaces() {
  return useQuery({
    queryKey: ["places"],
    queryFn: fetchPlaces,
  })
}
