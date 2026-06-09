export function ServicesGrid() {
  const services = [
    {
      title: 'Wedding Films',
      description: 'Professional cinematic videos that capture the emotion and beauty of your wedding day. From ceremony to reception, we create films you\'ll treasure forever.',
      icon: '🎬',
    },
    {
      title: 'Wedding Photography',
      description: 'Timeless portraits and candid moments. Our photographers blend photojournalism with artistic direction to create a stunning visual narrative.',
      icon: '📷',
    },
    {
      title: 'Bridal Wear',
      description: 'Exquisite wedding dresses and bridal attire. Discover our curated collection of gowns that make you feel beautiful and confident.',
      icon: '👗',
    },
    {
      title: 'Accessories',
      description: 'Beautiful jewelry, veils, and wedding accessories that complete your bridal look. Each piece is carefully selected for quality and elegance.',
      icon: '✨',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-royal-blue mb-4">
            Our Services
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Complete wedding and event solutions from photography to accessories. We handle every detail with professionalism and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 border border-border-gray hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-playfair text-2xl font-bold text-royal-blue mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-border-gray">
                <a
                  href="#contact"
                  className="text-royal-blue font-semibold hover:text-royal-blue/80 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
