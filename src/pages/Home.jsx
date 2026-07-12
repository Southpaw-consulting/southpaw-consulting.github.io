import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiArrowUpRight, HiOutlineChartBar, HiOutlineScale,
  HiOutlineBriefcase, HiOutlineShieldCheck,
} from 'react-icons/hi2'
import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import Magnetic from '../components/Magnetic.jsx'
import './Home.css'

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
            <Magnetic><Link to="/contact" className="btn btn-gold">Get in Touch <HiArrowUpRight /></Link></Magnetic>
            <Magnetic><Link to="/solutions" className="btn btn-ghost">Explore Our Solutions</Link></Magnetic>
          </motion.div>
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
    </Page>
  )
}
