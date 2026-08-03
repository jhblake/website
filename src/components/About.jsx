const STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '80+', label: 'Engagements Delivered' },
  { value: '100%', label: 'Client-First Approach' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__copy">
          <p className="eyebrow">About Us</p>
          <h2>Independent practical advice, built around your outcomes</h2>
          <p>
            JH Blake Consulting works alongside project leadership teams to bring structure to hard
            decisions — from strategy and operations to growth planning. We keep engagements
            focused, practical, and grounded in what actually moves the business forward.
          </p>
          <p>
            Every recommendation is tailored to the organization in front of us, not a
            generic playbook. That's what keeps clients coming back.
          </p>
        </div>
        <div className="about__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
