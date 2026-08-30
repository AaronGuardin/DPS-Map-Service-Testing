import type { Place } from "@/types/places"
import { MapPin, Star, ExternalLink } from "lucide-react"

type PlacePopupProps = {
  place: Place
}

export function PlacePopup({ place }: PlacePopupProps) {
  return (
    <div className="w-[240px] overflow-hidden rounded-lg bg-background text-foreground shadow-lg sm:w-[280px]">
      {place.image_url && (
        <img
          src={place.image_url}
          alt={place.name}
          className="h-28 w-full object-cover"
        />
      )}

      <div className="p-3">
        <h3 className="truncate text-sm font-semibold">{place.name}</h3>

        {place.category && (
          <p className="mt-1 text-xs text-muted-foreground">{place.category}</p>
        )}

        {place.reviews_count !== null && (
          <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5" />
            <span>{place.reviews_count} reviews</span>
          </div>
        )}

        {place.address && (
          <div className="mt-2 flex gap-1.5 text-xs text-muted-foreground">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <p className="line-clamp-2">{place.address}</p>
          </div>
        )}

        {place.google_maps_url && (
          <a
            href={place.google_maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Open in Google Maps
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}
