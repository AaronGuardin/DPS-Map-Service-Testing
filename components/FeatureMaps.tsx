import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { maps } from "@/config/maps"

export default async function FeaturedMaps() {
  const translate = await getTranslations("FeaturedMaps")

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
      {/* Section heading */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-primary">
            {translate("eyebrow")}
          </p>

          <h2 className="font-myanmar text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {translate("title")}
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            {translate("description")}
          </p>
        </div>

        <Button variant="outline" asChild className="hidden sm:flex">
          <Link href="/map">{translate("viewAll")}</Link>
        </Button>
      </div>

      {/* Map cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {maps.map((map) => (
          <Link
            key={map.key}
            href={map.href}
            className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={map.image}
                alt={translate(`maps.${map.key}.title`)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-myanmar text-lg font-semibold">
                {translate(`maps.${map.key}.title`)}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {translate(`maps.${map.key}.description`)}
              </p>

              <div className="mt-4 text-sm font-medium text-primary">
                {translate("explore")} →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile view all */}
      <div className="mt-6 sm:hidden">
        <Button variant="outline" asChild className="w-full">
          <Link href="/map">{translate("viewAll")}</Link>
        </Button>
      </div>
    </section>
  )
}
