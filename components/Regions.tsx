import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { regions } from "@/config/regions"

export default async function Regions() {
  const translate = await getTranslations("Regions")

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-medium text-primary">
          {translate("eyebrow")}
        </p>

        <h2 className="font-myanmar text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {translate("title")}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {translate("description")}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {regions.map((region) => (
          <Link
            key={region.key}
            href={region.href}
            className="group rounded-xl border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
          >
            <span className="font-myanmar text-sm font-medium transition-colors group-hover:text-primary">
              {translate(`items.${region.key}`)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
