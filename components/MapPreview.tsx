"use client"

export default function MapPreview() {
  return (
    <div className="aspect-square w-full max-w-lg overflow-hidden rounded-2xl border bg-muted/40 shadow-sm">
      <div className="flex h-full items-center justify-center">
        <span className="text-sm text-muted-foreground">Map Preview</span>
      </div>
    </div>
  )
}
