import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceCard } from '@/components/ServiceCard'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        title="Timeless Wedding Photography"
        description="Stunning portraits and candid moments that capture the essence of your love story. Artistic compositions and authentic emotions preserved forever."
        icon="📷"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-heading text-4xl font-bold text-royal-blue text-center mb-12">
          Our Photography Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="👰"
            title="Bridal Portraits"
            description="Elegant and flattering portraits showcasing your beauty. Professional styling, lighting, and posing for stunning images you'll treasure."
          />
          <ServiceCard
            icon="💒"
            title="Ceremony Coverage"
            description="Emotional moments from the first look through the final kiss. Every tear, smile, and embrace documented with artistic precision."
          />
          <ServiceCard
            icon="🎊"
            title="Reception Candids"
            description="Genuine celebrations, laughter, and joy captured throughout the evening. Spontaneous moments that tell the real story of your day."
          />
          <ServiceCard
            icon="👫"
            title="Couple Sessions"
            description="Romantic couple portraits in your favorite locations. Intimate shots that celebrate your connection and create lasting memories."
          />
          <ServiceCard
            icon="🎨"
            title="Artistic Editing"
            description="Professional color correction, retouching, and enhancement. Your photos receive a timeless, polished look that stands the test of time."
          />
          <ServiceCard
            icon="📚"
            title="Album Design"
            description="Custom-designed albums with premium printing. Display your favorite moments in a beautifully bound keepsake for your home."
          />
        </div>
      </section>

      <section className="bg-royal-blue/5 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-heading text-3xl font-bold text-royal-blue mb-6">
            Capture Your Beautiful Moments
          </h3>
          <p className="text-charcoal text-lg mb-8">
            Let us create timeless photographs that tell your unique love story. Contact us to book your photography session today.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20book%20wedding%20photography%20for%20my%20special%20day"
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
