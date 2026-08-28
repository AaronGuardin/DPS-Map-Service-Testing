import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import MapPreview from "./MapPreview"

export default async function HomeHero() {
  const translate = await getTranslations("Home")

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="max-w-2xl">
          <h1 className="font-myanmar text-3xl leading-[1.5] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl">
            {translate("title")}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {translate("description")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/map">{translate("exploreMaps")}</Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/about">{translate("learnMore")}</Link>
            </Button>
          </div>
        </div>

        {/* Map */}
        <div className="flex justify-center lg:justify-end">
          <MapPreview />
        </div>
      </div>
    </section>
  )
}
