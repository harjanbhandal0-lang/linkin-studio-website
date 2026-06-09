export function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-light-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Wedding Services */}
          <div className="space-y-6">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-royal-blue mb-4">
                Your Special Day,
                <br />
                Beautifully Captured
              </h1>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                At Linkin Studio, we specialize in creating stunning wedding films and photography that tell your love story with elegance and emotion.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-medium text-lg"
              >
                See Our Work
              </a>
              <p className="text-sm text-charcoal/60">
                Based in Abbotsford, BC • Serving all of Metro Vancouver
              </p>
            </div>
          </div>

          {/* Right: Utility Services */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-border-gray">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-royal-blue mb-6">
              Our Services
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Wedding Films</h3>
                  <p className="text-charcoal/70 text-sm">
                    Professional cinematic videos capturing every precious moment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📷</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Photography</h3>
                  <p className="text-charcoal/70 text-sm">
                    Timeless portraits and candid moments that last forever
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👗</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Bridal Wear</h3>
                  <p className="text-charcoal/70 text-sm">
                    Exquisite wedding dresses and bridal attire
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Accessories</h3>
                  <p className="text-charcoal/70 text-sm">
                    Beautiful jewelry and wedding accessories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
