"use client"

import { useEffect, useRef } from "react"

import { Map } from "maplibre-gl"

export default function MapPreview() {
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

      center: [96.0, 19.5],
      zoom: 6,
    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      className="h-[500px] w-full max-w-lg overflow-hidden rounded-2xl border shadow-sm"
    />
  )
}
