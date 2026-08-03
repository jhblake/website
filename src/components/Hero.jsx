import Logo from './Logo.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <Logo size="lg" />
        <p className="hero__tagline">Project Porfolio Solutions for today's challenges.</p>
        <p className="hero__subtext">
          JH Blake Consulting works with project teams to solve complex problems
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
