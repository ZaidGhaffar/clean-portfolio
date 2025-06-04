import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <WhatWeDoSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
