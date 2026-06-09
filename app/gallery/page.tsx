import { Header } from '@/components/Header'
import { GalleryGrid } from '@/components/GalleryGrid'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-royal-blue mb-4">
              Our Work
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Explore our portfolio of stunning wedding films, photography, and bridal creations.
            </p>
          </div>
        </div>
      </section>
      <GalleryGrid />
      <GlassmorphismFooter />
    </main>
  )
}
