import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import MapPreview from "./MapPreview"

export default async function HomeHero() {
  const translate = await getTranslations("Home")

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {translate("title")}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {translate("description")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/map">{translate("exploreMaps")}</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/about">{translate("learnMore")}</Link>
            </Button>
          </div>
        </div>

        {/* Map Visual */}
        <div className="flex justify-center">
          <MapPreview />
        </div>
      </div>
    </section>
  )
}
