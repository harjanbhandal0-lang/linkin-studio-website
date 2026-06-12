import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceCard } from '@/components/ServiceCard'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function BridalWearPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        title="Exquisite Bridal Wear"
        description="Stunning wedding dresses and bridal attire designed to make you feel confident and beautiful. From classic elegance to modern sophistication, find your perfect gown."
        icon="👗"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-heading text-4xl font-bold text-royal-blue text-center mb-12">
          Our Bridal Collection
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="✨"
            title="Wedding Dresses"
            description="Custom and ready-to-wear gowns in various styles. From romantic lace to sleek modern designs, discover the dress of your dreams."
          />
          <ServiceCard
            icon="🎀"
            title="Designer Consultation"
            description="Personal styling sessions to find your perfect look. Expert guidance on silhouettes, fabrics, and colors that complement your vision."
          />
          <ServiceCard
            icon="👰"
            title="Bridal Alterations"
            description="Professional tailoring and customization services. Ensure your gown fits perfectly and looks absolutely stunning on your special day."
          />
          <ServiceCard
            icon="💍"
            title="Veil & Accessories"
            description="Coordinating veils, wraps, and accessories to complete your bridal look. Curated pieces to enhance your overall style and elegance."
          />
          <ServiceCard
            icon="💄"
            title="Bridal Styling"
            description="Professional makeup and hair styling coordination. Ensure your complete bridal look comes together seamlessly and beautifully."
          />
          <ServiceCard
            icon="🛍️"
            title="Boutique Experience"
            description="Personalized shopping experience in a comfortable, private setting. Take your time finding the perfect gown with expert assistance."
          />
        </div>
      </section>

      <section className="bg-royal-blue/5 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-heading text-3xl font-bold text-royal-blue mb-6">
            Find Your Dream Wedding Dress
          </h3>
          <p className="text-charcoal text-lg mb-8">
            Schedule a private bridal consultation and discover the perfect gown for your special day. Our expert team is ready to help you feel absolutely beautiful.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20schedule%20a%20bridal%20wear%20consultation"
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
