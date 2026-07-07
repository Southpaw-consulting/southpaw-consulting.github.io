import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiArrowUpRight, HiOutlineChartBar, HiOutlineScale,
  HiOutlineBriefcase, HiOutlineShieldCheck, HiOutlineGlobeAlt, HiOutlineLightBulb,
} from 'react-icons/hi2'
import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import './Home.css'

const stats = [
  { value: '$42B+', label: 'Assets under advisory' },
  { value: '1,200+', label: 'Enterprises served' },
  { value: '34', label: 'Countries of operation' },
  { value: '98%', label: 'Client retention' },
]

const pillars = [
  { icon: <HiOutlineShieldCheck />, title: 'Assurance & Audit', text: 'Rigorous, independent assurance that turns your numbers into a source of trust for boards, lenders, and regulators.' },
  { icon: <HiOutlineScale />, title: 'Tax Advisory', text: 'Forward-looking tax strategy that protects margin, navigates jurisdictions, and keeps you fully compliant.' },
  { icon: <HiOutlineChartBar />, title: 'Management Consulting', text: 'Operating models, cost transformation, and growth strategy engineered around measurable financial outcomes.' },
  { icon: <HiOutlineBriefcase />, title: 'Deal Advisory', text: 'M&A, valuations, and due diligence that de-risk transactions and unlock durable enterprise value.' },
]

const process = [
  { no: '01', title: 'Diagnose', text: 'We immerse in your financials, operations, and market to surface the constraints that truly move value.' },
  { no: '02', title: 'Design', text: 'A tailored roadmap — modeled, stress-tested, and sequenced for impact from quarter one.' },
  { no: '03', title: 'Deliver', text: 'Senior practitioners embed alongside your team to execute, transfer capability, and hold the line on results.' },
]

export default function Home() {
  return (
    <Page>
      {/* ---------------- HERO ---------------- */}
      <section className="hero bg-grain">
        <div className="glow glow-gold" style={{ width: 480, height: 480, top: -120, right: -120 }} />
        <div className="glow glow-blue" style={{ width: 520, height: 520, bottom: -200, left: -160 }} />
        <div className="container hero__inner">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Management Consulting & Advisory
          </motion.p>

          <motion.h1
            className="display hero__title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Clarity in numbers.<br />
            <span className="serif-italic gold-text">Confidence</span> in decisions.
          </motion.h1>

          <motion.p
            className="hero__sub muted"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Southpaw Financial Services unites audit, tax, and management consulting under one roof —
            helping ambitious enterprises measure precisely, decide boldly, and compound value
            for the long term.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-gold">Book a Consultation <HiArrowUpRight /></Link>
            <Link to="/solutions" className="btn btn-ghost">Explore Our Solutions</Link>
          </motion.div>

          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span>Trusted by finance leaders at</span>
            <div className="hero__logos">
              {['NORTHWIND', 'AXIOM', 'VERTEX', 'HELIOS', 'CALDERA'].map((n) => (
                <span key={n} className="hero__logo">{n}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="stat">
                <span className="stat__value gold-text">{s.value}</span>
                <span className="stat__label muted">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PILLARS ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Four practices, one integrated point of view.</h2>
            <p className="muted">
              Most firms hand you fragments. We connect assurance, tax, strategy, and deals into
              a single financial narrative — so every recommendation ladders up to enterprise value.
            </p>
          </Reveal>

          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="card pillar">
                  <div className="pillar__icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.text}</p>
                  <Link to="/solutions" className="pillar__link">
                    Learn more <HiArrowUpRight />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURE / VALUE ---------------- */}
      <section className="section feature bg-grain">
        <div className="glow glow-blue" style={{ width: 400, height: 400, top: '20%', right: -160 }} />
        <div className="container feature__inner">
          <Reveal className="feature__text">
            <p className="eyebrow">Why Southpaw</p>
            <h2>Senior partners in the room. <span className="gold-text">Every engagement.</span></h2>
            <p className="muted">
              You don't hire a logo — you hire the people who show up. At Southpaw, the partner who
              wins your trust is the partner who does the work. No hand-offs to junior teams, no
              diluted attention.
            </p>
            <ul className="feature__list">
              {[
                'Partner-led teams from diagnosis to delivery',
                'Board-ready reporting and financial modeling',
                'Sector depth across finance, tech, energy & industrials',
                'Global reach with local regulatory fluency',
              ].map((f) => (
                <li key={f}><span className="check"><HiOutlineShieldCheck /></span>{f}</li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-ghost">More about the firm <HiArrowUpRight /></Link>
          </Reveal>

          <Reveal delay={0.15} className="feature__panel">
            <div className="card feature__card">
              <div className="feature__card-row">
                <HiOutlineGlobeAlt />
                <div>
                  <strong>Global advisory desk</strong>
                  <p className="muted">Coordinated support across 34 countries and every major reporting standard.</p>
                </div>
              </div>
              <div className="hairline" />
              <div className="feature__card-row">
                <HiOutlineLightBulb />
                <div>
                  <strong>Insight, not just reporting</strong>
                  <p className="muted">Data-driven analysis that tells you what to do next — not only what happened.</p>
                </div>
              </div>
              <div className="hairline" />
              <div className="feature__card-row">
                <HiOutlineScale />
                <div>
                  <strong>Independence you can bank on</strong>
                  <p className="muted">Objective, conflict-free counsel that holds up under any scrutiny.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">How we work</p>
            <h2>A disciplined path from question to result.</h2>
          </Reveal>
          <div className="process">
            {process.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.1} className="process__step">
                <span className="process__no gold-text">{p.no}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- QUOTE ---------------- */}
      <section className="section quote-section">
        <div className="container">
          <Reveal className="quote card">
            <p className="quote__mark gold-text">“</p>
            <blockquote>
              Southpaw didn't just audit our books — they reframed how we think about capital.
              Within two quarters we had a clearer balance sheet, a sharper strategy, and a board
              that finally spoke one language.
            </blockquote>
            <div className="quote__author">
              <div className="quote__avatar">EM</div>
              <div>
                <strong>Elena Marchetti</strong>
                <span className="muted">CFO, Northwind Industries</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
