"use client"

import { useEffect, useRef } from "react"
import { Map, Marker, Popup } from "maplibre-gl"
import { createRoot } from "react-dom/client"
import { PlacePopup } from "@/components/map/PlacePopup"
import { usePlaces } from "@/hooks/fetchPlaces"

export default function Maps() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map | null>(null)
  const markersRef = useRef<Marker[]>([])
  const { data: places, isLoading, error } = usePlaces()

  // Create the map once
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

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

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current || !places) return

    // Remove old markers
    markersRef.current.forEach((marker) => marker.remove())
    markersRef.current = []

    places.forEach((place) => {
      if (!place.latitude || !place.longitude) return

      const latitude = Number(place.latitude)
      const longitude = Number(place.longitude)

      if (Number.isNaN(latitude) || Number.isNaN(longitude)) return

      const popupNode = document.createElement("div")

      const root = createRoot(popupNode)

      root.render(<PlacePopup place={place} />)

      const popup = new Popup({
        offset: 25,
      }).setDOMContent(popupNode)

      const marker = new Marker()
        .setLngLat([longitude, latitude])
        .setPopup(popup)
        .addTo(mapRef.current!)

      markersRef.current.push(marker)
    })
  }, [places])

  return (
    <div className="relative h-[calc(100vh-64px)] w-full">
      {isLoading && (
        <div className="absolute top-4 left-4 z-10 rounded-lg bg-white p-3 shadow">
          Loading places...
        </div>
      )}

      {error && (
        <div className="absolute top-4 left-4 z-10 rounded-lg bg-red-500 p-3 text-white shadow">
          Failed to load places
        </div>
      )}

      <div ref={mapContainer} className="h-full w-full" />
    </div>
  )
}
