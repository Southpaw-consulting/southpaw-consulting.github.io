import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin,
  HiOutlineCheckCircle, HiOutlineClock, HiOutlineExclamationTriangle,
} from 'react-icons/hi2'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import './Contact.css'

const services = ['Assurance & Audit', 'Tax Advisory', 'Management Consulting', 'Deal Advisory', 'Book Keeping', 'Internal Audit', 'Not sure yet']

// Submissions are emailed here via FormSubmit (free, unlimited, no account).
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/southpawfinancials@gmail.com'

const EMPTY = { name: '', email: '', phone: '', company: '', service: services[0], message: '' }

// Field-level validation — returns a map of { field: errorMessage }
function validate(f) {
  const e = {}
  const name = f.name.trim()
  const email = f.email.trim()
  const phone = f.phone.trim()
  const company = f.company.trim()
  const message = f.message.trim()

  if (!name) e.name = 'Please enter your full name.'
  else if (name.length < 2) e.name = 'That name looks too short.'
  else if (name.length > 80) e.name = 'That name looks too long.'

  if (!email) e.email = 'Please enter your email.'
  else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) || /\.\./.test(email))
    e.email = 'Enter a valid email address.'

  if (phone && phone.length !== 10) e.phone = 'Enter a 10-digit phone number.'

  if (company && company.length > 100) e.company = 'Company name is too long.'

  if (!message) e.message = 'Please tell us a little about your needs.'
  else if (message.length < 10) e.message = 'Please add a bit more detail (10+ characters).'
  else if (message.length > 2000) e.message = 'Message is too long (2000 characters max).'

  return e
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errMsg, setErrMsg] = useState('')
  const [errors, setErrors] = useState({})
  const hpRef = useRef(null) // honeypot anti-spam trap

  const update = (e) => {
    const { name, value } = e.target
    // Phone: digits only, capped at 10 — strips letters, emojis, symbols, spaces as typed.
    const clean = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value
    setForm((f) => ({ ...f, [name]: clean }))
    // clear a field's error as the user corrects it
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  const submit = async (e) => {
    e.preventDefault()

    // Bot filled the hidden honeypot → silently drop (pretend success).
    if (hpRef.current && hpRef.current.value) {
      setStatus('sent')
      setForm(EMPTY)
      setTimeout(() => setStatus('idle'), 6000)
      return
    }

    // Validate before sending.
    const found = validate(form)
    if (Object.keys(found).length) {
      setErrors(found)
      setStatus('idle')
      return
    }
    setErrors({})

    setStatus('sending')
    setErrMsg('')
    try {
      // FormData avoids a CORS preflight (more reliable than JSON with FormSubmit)
      const fd = new FormData()
      fd.append('name', form.name.trim())
      fd.append('email', form.email.trim())
      fd.append('phone', form.phone.trim())
      fd.append('company', form.company.trim())
      fd.append('service', form.service)
      fd.append('message', form.message.trim())
      fd.append('_subject', `New enquiry from ${form.name.trim() || 'website'} — Southpaw`)
      fd.append('_template', 'table')
      fd.append('_captcha', 'false')
      fd.append('_honey', hpRef.current ? hpRef.current.value : '')

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })

      let data = {}
      try { data = await res.json() } catch { /* non-JSON response */ }
      const ok = res.ok && data.success !== false && data.success !== 'false'

      if (ok) {
        setStatus('sent')
        setForm(EMPTY)
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setErrMsg(data.message || `Request failed (HTTP ${res.status})`)
        setStatus('error')
      }
    } catch (err) {
      setErrMsg(err.message || 'Network error')
      setStatus('error')
    }
  }

  return (
    <Page>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about <span class='serif-italic gold-text'>your</span> next move."
        subtitle="Whether you're preparing for an audit, planning a transaction, or rethinking strategy — a Southpaw partner is ready to listen. Reach out and we'll respond within one business day."
      />

      <section className="section" id="enquiry">
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
                <div><strong>Email</strong><p className="muted">southpawfinancials@gmail.com</p></div>
              </div>
              <div className="contact__item">
                <span className="contact__ic"><HiOutlinePhone /></span>
                <div><strong>Phone</strong><p className="muted">8825954843</p></div>
              </div>
              <div className="contact__item">
                <span className="contact__ic"><HiOutlineMapPin /></span>
                <div><strong>Bengaluru Office</strong><p className="muted"></p></div>
              </div>
              <div className="contact__item">
                <span className="contact__ic"><HiOutlineClock /></span>
                <div><strong>Hours</strong><p className="muted">Mon – Fri, 8:00 AM – 6:00 PM </p></div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.12} className="contact__form-wrap">
            <form className="card contact__form" onSubmit={submit} noValidate>
              {/* honeypot — hidden from humans, bots tend to fill it */}
              <input
                ref={hpRef}
                type="text"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                className="hp-field"
              />

              <div className="field-row">
                <label className="field">
                  <span>Full name</span>
                  <input name="name" value={form.name} onChange={update} maxLength={80}
                    aria-invalid={!!errors.name} className={errors.name ? 'is-invalid' : ''} placeholder="Jane Doe" />
                  {errors.name && <span className="field-err">{errors.name}</span>}
                </label>
                <label className="field">
                  <span>Work email</span>
                  <input name="email" type="email" value={form.email} onChange={update} maxLength={120}
                    aria-invalid={!!errors.email} className={errors.email ? 'is-invalid' : ''} placeholder="jane@company.com" />
                  {errors.email && <span className="field-err">{errors.email}</span>}
                </label>
              </div>

              <div className="field-row">
                <label className="field">
                  <span>Phone</span>
                  <input name="phone" type="tel" inputMode="numeric" value={form.phone} onChange={update} maxLength={10}
                    aria-invalid={!!errors.phone} className={errors.phone ? 'is-invalid' : ''} placeholder="9876543210" />
                  {errors.phone && <span className="field-err">{errors.phone}</span>}
                </label>
                <label className="field">
                  <span>Company</span>
                  <input name="company" value={form.company} onChange={update} maxLength={100}
                    aria-invalid={!!errors.company} className={errors.company ? 'is-invalid' : ''} placeholder="Company name" />
                  {errors.company && <span className="field-err">{errors.company}</span>}
                </label>
              </div>

              <label className="field">
                <span>How can we help?</span>
                <select name="service" value={form.service} onChange={update}>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>

              <label className="field">
                <span>Tell us more</span>
                <textarea name="message" rows="4" value={form.message} onChange={update} maxLength={2000}
                  aria-invalid={!!errors.message} className={errors.message ? 'is-invalid' : ''}
                  placeholder="A few lines about your goals or challenge…" />
                {errors.message && <span className="field-err">{errors.message}</span>}
              </label>

              <button type="submit" className="btn btn-gold contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Send enquiry <HiArrowUpRight /></>}
              </button>

              <AnimatePresence>
                {status === 'sent' && (
                  <motion.div
                    className="contact__success"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  >
                    <HiOutlineCheckCircle /> Thank you — your enquiry is in. A partner will be in touch within one business day.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    className="contact__error"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  >
                    <HiOutlineExclamationTriangle /> {errMsg || 'Something went wrong. Please try again in a moment.'}
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
            <h2>Rooted in India, close to your business.</h2>
          </Reveal>
          <div className="contact__offices">
            {[
              { city: 'Bengaluru', addr: '', tz: 'Headquarters' },
              { city: 'Chennai', addr: '', tz: 'Branch Office' },
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
