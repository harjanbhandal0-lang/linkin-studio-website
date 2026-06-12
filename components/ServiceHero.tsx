export interface ServiceHeroProps {
  title: string
  description: string
  icon: string
}

export function ServiceHero({ title, description, icon }: ServiceHeroProps) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-cream via-cream to-light-gray px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        <div className="text-6xl mb-8">{icon}</div>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-royal-blue mb-6 text-balance">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-charcoal leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}
