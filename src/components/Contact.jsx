const CONTACT_EMAIL = 'joe@jhblake.com'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <p className="eyebrow eyebrow--center">Get In Touch</p>
        <h2 className="section__heading">Let's talk about your next step</h2>
        <p className="contact__subtext">
          Tell us a bit about what you're working on and we'll follow up to schedule an
          introductory call.
        </p>
        <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  )
}
