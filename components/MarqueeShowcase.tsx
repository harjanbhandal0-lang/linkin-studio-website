export function MarqueeShowcase() {
  const showcaseItems = [
    'Wedding Films',
    'Cinematic Productions',
    'Bride & Groom Portraits',
    'Guest Celebrations',
    'Reception Highlights',
    'Engagement Sessions',
    'Bridal Photography',
    'Accessory Showcase',
  ]

  return (
    <section className="py-12 md:py-16 bg-royal-blue overflow-hidden">
      <div className="space-y-8">
        {/* Marquee 1 */}
        <div className="flex gap-8 animate-scroll">
          {[...showcaseItems, ...showcaseItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 flex-shrink-0">
              <span className="text-2xl text-champagne font-playfair font-bold whitespace-nowrap">
                {item}
              </span>
              <span className="text-champagne text-2xl">•</span>
            </div>
          ))}
        </div>

        {/* Marquee 2 */}
        <div className="flex gap-8 animate-scroll-reverse">
          {[...showcaseItems.reverse(), ...showcaseItems.reverse()].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 flex-shrink-0">
              <span className="text-2xl text-cream font-playfair font-bold whitespace-nowrap">
                {item}
              </span>
              <span className="text-cream text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
