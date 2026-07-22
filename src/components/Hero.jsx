import Logo from './Logo.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <Logo size="lg" />
        <p className="hero__tagline">Clear thinking. Considered strategy. Measurable results.</p>
        <p className="hero__subtext">
          JH Blake Consulting partners with project teams to solve complex problems
          and build lasting value.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="button button--primary">
            Start a Conversation
          </a>
          <a href="#services" className="button button--ghost">
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
