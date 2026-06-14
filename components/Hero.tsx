export function Hero() {
  return (
    <section className="py-8 md:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 md:gap-0 items-stretch min-h-[600px] md:min-h-[700px]">
          {/* Left Column: Main Headline & Info */}
          <div className="bg-cream p-8 md:p-12 lg:p-16 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Studio Tagline */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-champagne"></div>
                <div className="text-sm font-semibold text-champagne tracking-widest">
                  LINKIN STUDIO
                </div>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight mb-4">
                  Your Wedding,
                  <br />
                  <span className="text-champagne">Beautifully Told.</span>
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-lg">
                Professional wedding films, photography, bridal wear, and accessories—everything you need for your perfect day, all in one studio.
              </p>

              {/* Key Info */}
              <div className="space-y-3 pt-4 border-t border-border-gray">
                <div className="flex items-center gap-3">
                  <span className="text-champagne font-semibold">📍</span>
                  <p className="text-charcoal text-sm">112-2580 Cedar Park Pl, Abbotsford, BC</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-champagne font-semibold">🕐</span>
                  <p className="text-charcoal text-sm">Mon–Fri 10am–7pm • Sat–Sun 11am–6:30pm</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:604-864-4999"
                  className="px-8 py-4 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-semibold text-center"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/17785397039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-royal-blue text-royal-blue rounded-lg hover:bg-royal-blue hover:text-cream transition-colors font-semibold text-center"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Services Panel */}
          <div className="bg-royal-blue p-8 md:p-12 lg:p-16 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Section Header */}
              <div>
                <h2 className="text-sm font-bold text-champagne tracking-widest mb-2">
                  WHAT WE OFFER
                </h2>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cream">
                  Complete Wedding Services
                </h3>
              </div>

              {/* Service Cards */}
              <div className="space-y-5">
                {/* Wedding Films */}
                <a
                  href="/wedding-films"
                  className="group block p-5 bg-white/10 hover:bg-white/15 rounded-lg border border-cream/20 transition-all hover:border-champagne"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-cream mb-2 group-hover:text-champagne transition-colors">
                        Wedding Films
                      </h4>
                      <p className="text-cream/80 text-sm">
                        Cinematic videos capturing your moments
                      </p>
                    </div>
                    <span className="text-champagne text-xl flex-shrink-0">🎬</span>
                  </div>
                </a>

                {/* Photography */}
                <a
                  href="/photography"
                  className="group block p-5 bg-white/10 hover:bg-white/15 rounded-lg border border-cream/20 transition-all hover:border-champagne"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-cream mb-2 group-hover:text-champagne transition-colors">
                        Photography
                      </h4>
                      <p className="text-cream/80 text-sm">
                        Timeless portraits and candid moments
                      </p>
                    </div>
                    <span className="text-champagne text-xl flex-shrink-0">📷</span>
                  </div>
                </a>

                {/* Bridal Wear */}
                <a
                  href="/bridal-wear"
                  className="group block p-5 bg-white/10 hover:bg-white/15 rounded-lg border border-cream/20 transition-all hover:border-champagne"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-cream mb-2 group-hover:text-champagne transition-colors">
                        Bridal Wear
                      </h4>
                      <p className="text-cream/80 text-sm">
                        Exquisite wedding dresses
                      </p>
                    </div>
                    <span className="text-champagne text-xl flex-shrink-0">👗</span>
                  </div>
                </a>

                {/* Accessories */}
                <a
                  href="/accessories"
                  className="group block p-5 bg-white/10 hover:bg-white/15 rounded-lg border border-cream/20 transition-all hover:border-champagne"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-cream mb-2 group-hover:text-champagne transition-colors">
                        Accessories
                      </h4>
                      <p className="text-cream/80 text-sm">
                        Jewelry and wedding accessories
                      </p>
                    </div>
                    <span className="text-champagne text-xl flex-shrink-0">✨</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom CTA */}
            <a
              href="#gallery"
              className="text-champagne hover:text-cream transition-colors flex items-center gap-2 pt-8 border-t border-cream/20 font-semibold text-sm"
            >
              See Our Gallery
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
