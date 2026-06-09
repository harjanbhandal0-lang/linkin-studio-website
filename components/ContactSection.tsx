import { StoreHoursTable } from './StoreHoursTable'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-royal-blue mb-12 text-center">
          Visit or Contact the Studio
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            {/* Phone 1 */}
            <div>
              <p className="text-sm font-semibold text-royal-blue/70 uppercase tracking-wide mb-2">
                Voice Call
              </p>
              <a
                href="tel:604-864-4999"
                className="text-3xl font-bold text-royal-blue hover:text-royal-blue/80 transition-colors"
              >
                604-864-4999
              </a>
              <p className="text-charcoal/60 text-sm mt-1">Call us to discuss your wedding plans</p>
            </div>

            {/* Phone 2 */}
            <div>
              <p className="text-sm font-semibold text-royal-blue/70 uppercase tracking-wide mb-2">
                WhatsApp / Text Message
              </p>
              <a
                href="https://wa.me/17785397039"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-semibold"
              >
                Message 778-539-7039
              </a>
              <p className="text-charcoal/60 text-sm mt-2">Quick messages and WhatsApp inquiries welcome</p>
            </div>

            {/* Address */}
            <div>
              <p className="text-sm font-semibold text-royal-blue/70 uppercase tracking-wide mb-2">
                Location
              </p>
              <p className="text-lg text-charcoal font-medium">
                112-2580 Cedar Park Pl<br />
                Abbotsford, BC V2T 3S5<br />
                Canada
              </p>
              <p className="text-charcoal/60 text-sm mt-2">Located in Metro Vancouver</p>
            </div>

            {/* Store Hours */}
            <StoreHoursTable />
          </div>

          {/* Right Column: Google Maps Container */}
          <div className="flex items-stretch">
            <div className="w-full bg-white rounded-lg overflow-hidden border-[0.5px] border-royal-blue shadow-lg">
              {/* 16:9 Aspect Ratio Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 flex items-center justify-center bg-light-gray">
                  <div className="text-center p-8">
                    <p className="text-charcoal/60 text-lg font-medium">
                      Google Maps Embed
                    </p>
                    <p className="text-charcoal/40 text-sm mt-2">
                      112-2580 Cedar Park Pl, Abbotsford, BC V2T 3S5
                    </p>
                    <p className="text-charcoal/30 text-xs mt-4">
                      (Your custom Google Maps iframe will be embedded here)
                    </p>
                  </div>
                </div>
                {/* 
                  User can replace the above div content with their own Google Maps embed iframe:
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=..." 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowFullScreen="" 
                    loading="lazy"
                  ></iframe>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
