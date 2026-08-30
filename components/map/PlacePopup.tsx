import type { Place } from "@/types/place"

type PlacePopupProps = {
  place: Place
}

export function PlacePopup({ place }: PlacePopupProps) {
  return (
    <div className="w-[calc(100vw-32px)] max-w-[340px] bg-white">
      {place.image_url && (
        <img
          src={place.image_url}
          alt={place.name}
          className="h-44 w-full object-cover"
        />
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold text-slate-800">{place.name}</h3>

        {place.category && (
          <p className="mt-1 text-base text-slate-500">{place.category}</p>
        )}

        {place.reviews_count !== null && (
          <p className="mt-2 text-base text-slate-500">
            {place.reviews_count} reviews
          </p>
        )}

        {place.address && (
          <div className="mt-5 border-t border-slate-200 pt-4">
            <p className="text-base leading-6 break-words text-slate-600">
              📍 {place.address}
            </p>
          </div>
        )}

        {place.google_maps_url && (
          <a
            href={place.google_maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center rounded-xl bg-slate-800 px-4 py-3 text-base font-medium text-white transition hover:bg-slate-700"
          >
            View on Google Maps
          </a>
        )}
      </div>
    </div>
  )
}
