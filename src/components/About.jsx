const STATS = [
  { value: '20+', label: 'Years of Experience' },
  { value: '50+', label: 'Engagements Delivered' },
  { value: '100%', label: 'Process Integration Approach' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__copy">
          <p className="eyebrow">About Us</p>
          <h2>Expert Microsoft PPM Solutions For Better Outcomes</h2>
          <p>
            I help organizations turn complex project portfolios into clear, actionable insight. 
            With more than 20 years of experience in enterprise project portfolio management, 
            I specialize in Microsoft Project, Project Online, Project Server, Microsoft Planner, 
            SharePoint, Power BI, and related Microsoft 365 tools. 
            </p>
          <p>
            My work focuses on helping PMOs and business leaders improve project intake, 
            governance, scheduling, resource planning, portfolio reporting, risk visibility, 
            and executive decision-making through practical systems, reliable data, 
            and well-designed reporting frameworks.
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
