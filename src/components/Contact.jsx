import { useEffect, useRef } from 'react'

const CONTACT_EMAIL = 'joe@jhblake.com'

export default function Contact() {
  const widgetRef = useRef(null)

  useEffect(() => {
    if (!widgetRef.current || widgetRef.current.dataset.loaded) return
    widgetRef.current.dataset.loaded = 'true'

    const useSSL = 'https:' === window.location.protocol
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      (useSSL ? 'https:' : 'http:') +
      '//www.peopleperhour.com/hire/2430130562/13508338.js?width=245&height=320&orientation=vertical&theme=light&rnd=' +
      parseInt(Math.random() * 10000, 10)
    widgetRef.current.appendChild(script)
  }, [])

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
        <br></br>
        <div id="pph-hireme" ref={widgetRef}></div>
      </div>
    </section>
  )
}
