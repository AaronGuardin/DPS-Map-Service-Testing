"use client"

import { useEffect, useRef } from "react"
import { Map, Marker, Popup, StyleSpecification } from "maplibre-gl"
import { createRoot } from "react-dom/client"
import { PlacePopup } from "@/components/map/PlacePopup"
import { usePlaces } from "@/hooks/fetchPlaces"
import { useTheme } from "next-themes" // Next.js Theme ကို ယူသုံးရန်
import "maplibre-gl/dist/maplibre-gl.css"

// Light Mode အတွက် Map Style
const lightStyle: StyleSpecification = {
  version: 8,
  sources: {
    carto: {
      type: "raster",
      tiles: [
        "https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
      ],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors, © CARTO",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "carto-layer",
      type: "raster",
      source: "carto",
    },
  ],
}

// Dark Mode အတွက် Map Style
const darkStyle: StyleSpecification = {
  version: 8,
  sources: {
    carto: {
      type: "raster",
      tiles: ["https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors, © CARTO",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "carto-layer",
      type: "raster",
      source: "carto",
    },
  ],
}

export default function Maps() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map | null>(null)
  const markersRef = useRef<Marker[]>([])
  const { data: places, isLoading, error } = usePlaces()

  // Next.js Theme ဆီမှ လက်ရှိ theme အခြေအနေကို ယူခြင်း
  const { resolvedTheme } = useTheme()

  // 1. Map ကို စတင်တည်ဆောက်ခြင်း
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

    // ပထမဆုံး မြေပုံစဆွဲချိန်မှာ လက်ရှိ theme ကို စစ်ပြီး style ထည့်ခြင်း
    const initialStyle = resolvedTheme === "dark" ? darkStyle : lightStyle

    const map = new Map({
      container: mapContainer.current,
      style: initialStyle,
      center: [96.1561, 16.8053],
      zoom: 12,
    })

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 2. Next.js Theme ပြောင်းသွားတိုင်း Map Style ကို အလိုအလျောက် Update လုပ်ခြင်း
  useEffect(() => {
    if (!mapRef.current) return

    const newStyle = resolvedTheme === "dark" ? darkStyle : lightStyle
    mapRef.current.setStyle(newStyle)
  }, [resolvedTheme]) // resolvedTheme ပြောင်းလဲတိုင်း ဒီ effect က အလုပ်လုပ်ပါမယ်

  // 3. နေရာ (Places) များအတွက် Marker များထည့်သွင်းခြင်း
  useEffect(() => {
    if (!mapRef.current || !places) return

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
        <div className="absolute top-4 left-4 z-10 rounded-lg bg-white p-3 text-black shadow dark:bg-gray-800 dark:text-white">
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
