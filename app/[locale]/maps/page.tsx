"use client"

import { useEffect, useRef } from "react"
import { Map, Marker } from "maplibre-gl"

type Place = {
  id: number
  name: string
  category: string | null
  latitude: string | null
  longitude: string | null
  rating: string | null
}

export default function Maps() {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    const map = new Map({
      container: mapContainer.current,

      style: {
        version: 8,

        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors",
            maxzoom: 19,
          },
        },

        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
      },

      center: [96.1561, 16.8053],
      zoom: 12,
    })

    async function loadPlaces() {
      try {
        const response = await fetch("/api/places")

        if (!response.ok) {
          throw new Error("Failed to fetch places")
        }

        const places: Place[] = await response.json()

        places.forEach((place) => {
          if (!place.latitude || !place.longitude) return

          const latitude = Number(place.latitude)
          const longitude = Number(place.longitude)

          if (Number.isNaN(latitude) || Number.isNaN(longitude)) return

          new Marker().setLngLat([longitude, latitude]).addTo(map)
        })
      } catch (error) {
        console.error("Failed to load places:", error)
      }
    }

    loadPlaces()

    return () => {
      map.remove()
    }
  }, [])

  return <div ref={mapContainer} className="h-[calc(100vh-64px)] w-full" />
}
