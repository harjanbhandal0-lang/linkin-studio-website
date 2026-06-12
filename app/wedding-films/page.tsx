import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceCard } from '@/components/ServiceCard'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function WeddingFilmsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        title="Professional Wedding Films"
        description="Cinematic videos capturing every precious moment of your special day. From emotional vows to joyful celebrations, we craft timeless films you'll cherish forever."
        icon="🎬"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-heading text-4xl font-bold text-royal-blue text-center mb-12">
          Our Wedding Film Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="🎥"
            title="Full Day Coverage"
            description="Complete documentation from getting ready through the reception. Capture every meaningful moment and detail of your wedding day."
          />
          <ServiceCard
            icon="✨"
            title="Cinematic Editing"
            description="Professional color grading, transitions, and music synchronization. Your film is crafted like a Hollywood production designed just for you."
          />
          <ServiceCard
            icon="🎞️"
            title="Highlight Reel"
            description="A beautifully edited 3–5 minute highlight video. Perfect for sharing with family and friends who couldn't attend your celebration."
          />
          <ServiceCard
            icon="📹"
            title="Aerial Shots"
            description="Stunning drone footage showcasing your venue and celebration from unique perspectives. Add cinematic scale to your wedding story."
          />
          <ServiceCard
            icon="🎵"
            title="Music Curation"
            description="Personalized soundtrack selection that perfectly complements your film. Every beat enhances the emotional journey of your day."
          />
          <ServiceCard
            icon="💿"
            title="Final Delivery"
            description="Your finished wedding film delivered in multiple formats. Enjoy unlimited copies, digital sharing, and forever preservation."
          />
        </div>
      </section>

      <section className="bg-royal-blue/5 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-heading text-3xl font-bold text-royal-blue mb-6">
            Ready to Preserve Your Wedding Story?
          </h3>
          <p className="text-charcoal text-lg mb-8">
            Contact us today to discuss your wedding film package and create something truly unforgettable.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20book%20wedding%20films%20for%20my%20special%20day"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-medium"
          >
            Get in Touch via WhatsApp
          </a>
        </div>
      </section>

      <GlassmorphismFooter />
    </main>
  )
}
