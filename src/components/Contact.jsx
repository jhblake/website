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
        <p><!--
    PeoplePerHour Profile Widget
    The div#pph-hire me is the element
    where the iframe will be inserted.
    You may move this element wherever
    you need to display the widget
-->
<div id="pph-hireme"></div>
<script type="text/javascript">
(function(d, s) {
    var useSSL = 'https:' == document.location.protocol;
    var js, where = d.getElementsByTagName(s)[0],
    js = d.createElement(s);
    js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/2430130562/13508338.js?width=245&height=320&orientation=vertical&theme=light&rnd='+parseInt(Math.random()*10000, 10);
    try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }
}(document, 'script'));
</script></p>
        
        <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  )
}
