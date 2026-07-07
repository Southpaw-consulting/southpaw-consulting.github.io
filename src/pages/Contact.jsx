import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin,
  HiOutlineCheckCircle, HiOutlineClock,
} from 'react-icons/hi2'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import './Contact.css'

const services = ['Assurance & Audit', 'Tax Advisory', 'Management Consulting', 'Deal Advisory', 'CFO & Finance Advisory', 'Data & Analytics', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: services[0], message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    // Front-end only demo: simulate submission
    setSent(true)
    setForm({ name: '', email: '', company: '', service: services[0], message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <Page>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about <span class='serif-italic gold-text'>your</span> next move."
        subtitle="Whether you're preparing for an audit, planning a transaction, or rethinking strategy — a Southpaw partner is ready to listen. Reach out and we'll respond within one business day."
      />

      <section className="section">
        <div className="container contact__layout">
          {/* INFO */}
          <Reveal className="contact__info">
            <p className="eyebrow">Get in touch</p>
            <h2>Speak directly with a partner.</h2>
            <p className="muted">
              No call centers, no gatekeepers. Every enquiry is reviewed by a senior member of our
              team so your first conversation is a substantive one.
            </p>

            <div className="contact__cards">
              <div className="contact__item">
                <span className="contact__ic"><HiOutlineEnvelope /></span>
                <div><strong>Email</strong><p className="muted">partners@southpawfinancial.com</p></div>
              </div>
              <div className="contact__item">
                <span className="contact__ic"><HiOutlinePhone /></span>
                <div><strong>Phone</strong><p className="muted">+1 (212) 555-0184</p></div>
              </div>
              <div className="contact__item">
                <span className="contact__ic"><HiOutlineMapPin /></span>
                <div><strong>New York HQ</strong><p className="muted">200 Southpaw Tower, New York, NY 10018</p></div>
              </div>
              <div className="contact__item">
                <span className="contact__ic"><HiOutlineClock /></span>
                <div><strong>Hours</strong><p className="muted">Mon – Fri, 8:00 AM – 6:00 PM ET</p></div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.12} className="contact__form-wrap">
            <form className="card contact__form" onSubmit={submit}>
              <div className="field-row">
                <label className="field">
                  <span>Full name</span>
                  <input name="name" value={form.name} onChange={update} required placeholder="Jane Doe" />
                </label>
                <label className="field">
                  <span>Work email</span>
                  <input name="email" type="email" value={form.email} onChange={update} required placeholder="jane@company.com" />
                </label>
              </div>

              <label className="field">
                <span>Company</span>
                <input name="company" value={form.company} onChange={update} placeholder="Company name" />
              </label>

              <label className="field">
                <span>How can we help?</span>
                <select name="service" value={form.service} onChange={update}>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>

              <label className="field">
                <span>Tell us more</span>
                <textarea name="message" rows="4" value={form.message} onChange={update} required placeholder="A few lines about your goals or challenge…" />
              </label>

              <button type="submit" className="btn btn-gold contact__submit">
                Send enquiry <HiArrowUpRight />
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    className="contact__success"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  >
                    <HiOutlineCheckCircle /> Thank you — your enquiry is in. A partner will be in touch within one business day.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>

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
