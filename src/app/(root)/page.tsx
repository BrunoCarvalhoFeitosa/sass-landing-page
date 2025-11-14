import { HeroSection } from "@/components/sections/root/hero"
import { FeaturesSection } from "@/components/sections/root/features"
import { PricingSection } from "@/components/sections/root/pricing"
import { FaqSection } from "@/components/sections/root/faq"
import { TestimonialsSection } from "@/components/sections/root/testimonials"
import { DownloadSection } from "@/components/sections/root/download"

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <TestimonialsSection />
      <DownloadSection />
    </main>
  )
}

export default HomePage
