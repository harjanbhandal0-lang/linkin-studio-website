export function LegacySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-royal-blue mb-6">
            Why Choose Linkin Studio
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            We understand that your wedding day is one of the most important moments of your life. Our dedicated team brings creativity, professionalism, and passion to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-light-gray rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-playfair text-xl font-bold text-royal-blue mb-3">Expert Artistry</h3>
            <p className="text-charcoal/70">
              Years of experience capturing the perfect moments that matter most.
            </p>
          </div>

          <div className="bg-light-gray rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-playfair text-xl font-bold text-royal-blue mb-3">Creative Vision</h3>
            <p className="text-charcoal/70">
              Personalized storytelling that reflects your unique love story.
            </p>
          </div>

          <div className="bg-light-gray rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-playfair text-xl font-bold text-royal-blue mb-3">Professional Quality</h3>
            <p className="text-charcoal/70">
              Premium production standards for films, photos, and accessories.
            </p>
          </div>

          <div className="bg-light-gray rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-playfair text-xl font-bold text-royal-blue mb-3">Dedicated Support</h3>
            <p className="text-charcoal/70">
              From planning to delivery, we're with you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
