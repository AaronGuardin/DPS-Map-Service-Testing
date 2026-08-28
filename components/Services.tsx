import { getTranslations } from "next-intl/server"

import { services } from "@/config/services"

export default async function Services() {
  const translate = await getTranslations("Services")

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-medium text-primary">
          {translate("eyebrow")}
        </p>

        <h2 className="font-myanmar text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {translate("title")}
        </h2>

        <p className="mt-4 leading-7 text-muted-foreground">
          {translate("description")}
        </p>
      </div>

      {/* Services */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <div
              key={service.key}
              className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="font-myanmar text-lg font-semibold">
                {translate(`items.${service.key}.title`)}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {translate(`items.${service.key}.description`)}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
