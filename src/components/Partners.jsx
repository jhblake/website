const PARTNERS = [
  {
    title: 'Project Consulting',
    description:
      'Project Management process review and recommendations in Agile or Predictive environments.',
  },
  {
    title: 'Project Portfolio Tool Implementation',
    description:
      'Upgrade your current project portfolio tools to more modern user driven tools.',
  },
  {
    title: 'Project Portfolio Strategy & Governance',
    description:
      'Practical improvements to strategic project processes, structure, and performance that compound over time.',
  },
  {
    title: 'Project Scheduling ',
    description:
      'Senior Microsoft Project scheduling consultant.',
  },
]

export default function Partners() {
  return (
    <section id="partners" className="section services">
      <div className="container">
        <p className="eyebrow eyebrow--center">What We Do</p>
        <h2 className="section__heading">Partners</h2>
        <div className="services__grid">
          {PARTNERS.map((partner) => (
            <div key={partner.title} className="service-card">
              <h3>{partner.title}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
