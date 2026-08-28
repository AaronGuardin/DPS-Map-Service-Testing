import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

export default async function HomeCTA() {
  const translate = await getTranslations("HomeCTA")

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
      <div className="overflow-hidden rounded-3xl border bg-muted/40 px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-20">
        <p className="mb-3 text-sm font-medium text-primary">
          {translate("eyebrow")}
        </p>

        <h2 className="font-myanmar text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {translate("title")}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          {translate("description")}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/map">{translate("exploreMaps")}</Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/about">{translate("contact")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
