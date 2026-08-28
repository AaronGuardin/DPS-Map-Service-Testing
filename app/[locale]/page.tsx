import AboutPreview from "@/components/AboutPreview"
import FeaturedMaps from "@/components/FeatureMaps"
import Footer from "@/components/Footer"
import HomeCTA from "@/components/HomeCTA"
import HomeHero from "@/components/HomeHero"
import Regions from "@/components/Regions"
import Services from "@/components/Services"

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <FeaturedMaps />
      <Regions />
      <AboutPreview />
      <Services />
      <HomeCTA />
      <Footer />
    </main>
  )
}
