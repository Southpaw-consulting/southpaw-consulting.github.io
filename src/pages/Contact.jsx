import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <Page>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about <span class='serif-italic gold-text'>your</span> next move."
        subtitle="Whether you're preparing for an audit, planning a transaction, or rethinking strategy — a Southpaw partner is ready to listen. Reach out and we'll respond within one business day."
      />

      {/* OFFICES */}
      <section className="section contact__offices-sec bg-grain">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">Our offices</p>
            <h2>Global reach, local presence.</h2>
          </Reveal>
          <div className="contact__offices">
            {[
              { city: 'New York', addr: '200 Southpaw Tower, NY 10018', tz: 'Headquarters' },
              { city: 'London', addr: 'One Canary Wharf, E14 5AB', tz: 'EMEA Hub' },
              { city: 'Singapore', addr: '9 Marina Boulevard, 018989', tz: 'APAC Hub' },
              { city: 'Dubai', addr: 'DIFC Gate District, PO 507101', tz: 'Middle East' },
            ].map((o, i) => (
              <Reveal key={o.city} delay={i * 0.08}>
                <article className="card contact__office">
                  <span className="contact__office-tz gold-text">{o.tz}</span>
                  <h3>{o.city}</h3>
                  <p className="muted">{o.addr}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  )
}
