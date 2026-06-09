import { StoreHoursTable } from './StoreHoursTable'

export function GlassmorphismFooter() {
  return (
    <footer className="bg-cream border-t border-royal-blue/15">
      {/* Glass Wrapper Container */}
      <div
        className="glass-frosted py-12 md:py-16 px-4 md:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(rgba(27, 58, 140, 0.04), rgba(27, 58, 140, 0.04)), rgba(250, 247, 242, 0.65)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Left Column: Address & Location */}
            <div className="text-center md:text-left">
              <h3 className="font-playfair text-xl font-bold text-royal-blue mb-4">
                Visit Us
              </h3>
              <div className="space-y-2 text-charcoal text-base leading-relaxed">
                <p className="font-semibold">Linkin Studio</p>
                <p>112-2580 Cedar Park Pl</p>
                <p>Abbotsford, BC V2T 3S5</p>
                <p>Canada</p>
                <p className="text-charcoal/60 text-sm mt-4">
                  Serving Metro Vancouver and surrounding areas
                </p>
              </div>
            </div>

            {/* Center Column: Store Hours */}
            <div className="flex justify-center">
              <StoreHoursTable />
            </div>

            {/* Right Column: Contact Methods */}
            <div className="text-center md:text-right">
              <h3 className="font-playfair text-xl font-bold text-royal-blue mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-1">Voice</p>
                  <a
                    href="tel:604-864-4999"
                    className="text-lg font-semibold text-royal-blue hover:text-royal-blue/80 transition-colors block"
                  >
                    604-864-4999
                  </a>
                </div>
                <div>
                  <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-1">WhatsApp / Text</p>
                  <a
                    href="https://wa.me/17785397039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors text-sm font-semibold"
                  >
                    778-539-7039
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="border-t border-royal-blue/15 pt-8">
            {/* Copyright */}
            <div className="text-center">
              <p className="text-charcoal/70 text-sm">
                &copy; {new Date().getFullYear()} Linkin Studio. All rights reserved.
              </p>
              <p className="text-charcoal/50 text-xs mt-2">
                Specializing in wedding films, photography, bridal wear, and accessories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
