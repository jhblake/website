const PARTNERS = [
  {
    title: 'Apps4Rent - Project Server SE Hosting',
    description:
      'Host your Project Server SE environment with Apps4Rent. ',
  },
  {
    title: 'Microsoft Partner',
    description:
      'Microsoft Certified Partner with expertise in Project Server solutions.',
  },
  {
    title: 'Project Management Institue (PMI)',
    description:
      'Certified Project Management Professional.',
  },
  {
    title: 'MPUG (Microsoft Project User Group)',
    description:
      'MPUG is a global community of project managers and Microsoft Project users.',
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
