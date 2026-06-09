import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LegacySection } from '@/components/LegacySection'
import { MarqueeShowcase } from '@/components/MarqueeShowcase'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ContactSection } from '@/components/ContactSection'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <LegacySection />
      <MarqueeShowcase />
      <ServicesGrid />
      <ContactSection />
      <GlassmorphismFooter />
    </main>
  )
}
