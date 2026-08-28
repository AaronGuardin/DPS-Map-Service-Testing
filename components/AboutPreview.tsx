import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

export default async function AboutPreview() {
  const translate = await getTranslations("AboutPreview")

  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="mb-2 text-sm font-medium text-primary">
              {translate("eyebrow")}
            </p>

            <h2 className="font-myanmar text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {translate("title")}
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              {translate("description")}
            </p>

            <Button className="mt-8" asChild>
              <Link href="/about">{translate("button")}</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl border bg-background p-6">
              <p className="text-3xl font-bold sm:text-4xl">14</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {translate("stats.regions")}
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-6">
              <p className="text-3xl font-bold sm:text-4xl">100+</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {translate("stats.maps")}
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-6">
              <p className="text-3xl font-bold sm:text-4xl">GIS</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {translate("stats.gis")}
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-6">
              <p className="text-3xl font-bold sm:text-4xl">24/7</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {translate("stats.access")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
