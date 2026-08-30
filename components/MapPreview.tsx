import Image from "next/image"

export default function MapPreview() {
  return (
    <div className="relative h-[1100px] w-full max-w-lg overflow-hidden rounded-2xl border shadow-sm">
      <Image
        src="/maps/myanmar-map-mm.jpg"
        alt="Myanmar map preview"
        fill
        className="object-cover"
      />
    </div>
  )
}
