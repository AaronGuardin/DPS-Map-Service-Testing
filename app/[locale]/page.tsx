import HomeHero from "@/components/HomeHero"
import { useTranslations } from "next-intl"

export default function HomePage() {
  const translate = useTranslations("Home")
  return (
    <main>
      <HomeHero />
    </main>
  )
}
