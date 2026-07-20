const SERVICES = [
  {
    title: 'Strategic Advisory',
    description:
      'Clarity on where to compete and how to win — grounded in your market, your data, and your constraints.',
  },
  {
    title: 'Business Planning',
    description:
      'Actionable plans that connect long-term vision to near-term execution, with accountability built in.',
  },
  {
    title: 'Operations & Growth',
    description:
      'Practical improvements to process, structure, and performance that compound over time.',
  },
  {
    title: 'Risk & Governance',
    description:
      'Frameworks that help leadership teams make sound decisions with confidence, not guesswork.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="eyebrow eyebrow--center">What We Do</p>
        <h2 className="section__heading">Services</h2>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
