import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      {/* Logo Mark */}
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute inset-0 rounded-xl border border-border transition-all duration-300 group-hover:border-primary/50" />

        <div className="absolute inset-1 rounded-lg bg-muted/50 transition-all duration-300 group-hover:bg-primary/5" />

        <div className="relative flex flex-col items-center justify-center">
          <Image
            src="/logo-Photoroom.png"
            alt="DPS Map Logo"
            width={34}
            height={34}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Brand */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-black tracking-tight">DPS</span>

          <span className="text-xl font-light tracking-[0.18em] text-primary">
            MAP
          </span>
        </div>

        <div className="mt-0.5 flex items-center gap-2">
          <span className="h-px w-5 bg-primary/60" />

          <span className="text-[9px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Precision Cartography
          </span>
        </div>
      </div>
    </Link>
  )
}
