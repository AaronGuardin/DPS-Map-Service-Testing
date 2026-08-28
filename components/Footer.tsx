import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"

export default async function Footer() {
  const translate = await getTranslations("Footer")

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold">DPS Map</h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              {translate("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold">{translate("navigation")}</h3>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {translate("links.home")}
              </Link>

              <Link
                href="/map"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {translate("links.maps")}
              </Link>

              <Link
                href="/gis"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {translate("links.gis")}
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold">{translate("resources")}</h3>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/downloads"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {translate("links.downloads")}
              </Link>

              <Link
                href="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {translate("links.about")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">{translate("contact")}</h3>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {translate("contactDescription")}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DPS Map. {translate("rights")}</p>

          <p>{translate("madeForMyanmar")}</p>
        </div>
      </div>
    </footer>
  )
}
