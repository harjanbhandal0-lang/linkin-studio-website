export interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="border border-royal-blue/30 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-heading text-2xl font-semibold text-royal-blue mb-4">
        {title}
      </h3>
      <p className="text-charcoal leading-relaxed text-base">
        {description}
      </p>
    </div>
  )
}
