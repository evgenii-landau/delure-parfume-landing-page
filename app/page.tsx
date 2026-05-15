import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BrandStorySection } from "@/components/brand-story-section"
import { FragranceNotesSection } from "@/components/fragrance-notes-section"
import { BestsellersSection } from "@/components/bestsellers-section"
import { ImmersiveVisualSection } from "@/components/immersive-visual-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ExperienceSection } from "@/components/experience-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandStorySection />
      <FragranceNotesSection />
      <BestsellersSection />
      <ImmersiveVisualSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ExperienceSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
