import { Link } from 'react-router-dom'
import {
  HiArrowUpRight, HiOutlineShieldCheck, HiOutlineScale, HiOutlineChartBar,
  HiOutlineBriefcase, HiOutlineCpuChip, HiOutlineBanknotes,
} from 'react-icons/hi2'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import './Solutions.css'

const solutions = [
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Assurance & Audit',
    text: 'Independent audits and assurance that give boards, investors, and regulators total confidence in your reporting.',
    points: ['Statutory & financial statement audits', 'Internal controls & SOX readiness', 'Risk assurance & compliance reviews'],
  },
  {
    icon: <HiOutlineScale />,
    title: 'Tax Advisory',
    text: 'Proactive tax strategy that protects margin, manages exposure, and keeps you compliant across every jurisdiction.',
    points: ['Corporate & international tax planning', 'Transfer pricing & structuring', 'Tax controversy & compliance'],
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Management Consulting',
    text: 'Strategy, operating models, and cost transformation engineered around measurable financial outcomes.',
    points: ['Growth & corporate strategy', 'Operating model & cost transformation', 'Performance & KPI frameworks'],
  },
  {
    icon: <HiOutlineBriefcase />,
    title: 'Deal Advisory',
    text: 'End-to-end transaction support that de-risks deals and unlocks value — from thesis to integration.',
    points: ['M&A advisory & due diligence', 'Business valuations', 'Post-merger integration'],
  },
  {
    icon: <HiOutlineBanknotes />,
    title: 'CFO & Finance Advisory',
    text: 'Fractional CFO leadership and finance transformation for companies scaling through complexity.',
    points: ['Fractional & interim CFO', 'FP&A and cash-flow modeling', 'Finance function build-out'],
  },
  {
    icon: <HiOutlineCpuChip />,
    title: 'Data & Analytics',
    text: 'Our Southpaw Lens platform turns your financial data into forward-looking, decision-ready intelligence.',
    points: ['Financial dashboards & KPIs', 'Scenario & sensitivity modeling', 'Predictive forecasting'],
  },
]

const industries = ['Financial Services', 'Technology & SaaS', 'Energy & Utilities', 'Industrials', 'Healthcare', 'Consumer & Retail', 'Real Estate', 'Private Equity']

export default function Solutions() {
  return (
    <Page>
      <PageHero
        eyebrow="Our solutions"
        title="Advisory that spans the <span class='serif-italic gold-text'>whole</span> financial picture."
        subtitle="Six integrated practices, one coordinated team. Whatever the challenge — assurance, tax, strategy, or a transaction — Southpaw brings a single, connected point of view."
      />

      {/* SOLUTIONS GRID */}
      <section className="section">
        <div className="container">
          <div className="sol__grid">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <article className="card sol__card">
                  <div className="sol__icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.text}</p>
                  <ul className="sol__points">
                    {s.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH BANNER */}
      <section className="section sol__banner-sec bg-grain">
        <div className="glow glow-gold" style={{ width: 380, height: 380, top: '10%', left: -140 }} />
        <div className="container">
          <Reveal className="card sol__banner">
            <div>
              <p className="eyebrow">Southpaw Lens</p>
              <h2>Your numbers, <span className="gold-text">alive.</span></h2>
              <p className="muted">
                Every engagement plugs into Southpaw Lens — our proprietary analytics platform that
                consolidates your financials into a single, always-current view. Model scenarios,
                track KPIs, and see the impact of every decision before you make it.
              </p>
              <Link to="/contact" className="btn btn-gold">Request a demo <HiArrowUpRight /></Link>
            </div>
            <div className="sol__lens">
              <div className="sol__lens-row"><span>Revenue</span><em className="gold-text">+18.4%</em></div>
              <div className="sol__lens-bar"><i style={{ width: '82%' }} /></div>
              <div className="sol__lens-row"><span>Operating margin</span><em className="gold-text">24.1%</em></div>
              <div className="sol__lens-bar"><i style={{ width: '64%' }} /></div>
              <div className="sol__lens-row"><span>Free cash flow</span><em className="gold-text">$312M</em></div>
              <div className="sol__lens-bar"><i style={{ width: '71%' }} /></div>
              <div className="sol__lens-row"><span>Effective tax rate</span><em className="gold-text">19.2%</em></div>
              <div className="sol__lens-bar"><i style={{ width: '48%' }} /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">Sector expertise</p>
            <h2>Depth where it counts.</h2>
            <p className="muted">We pair advisory rigor with genuine sector fluency across the industries that define the modern economy.</p>
          </Reveal>
          <div className="sol__industries">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={(i % 4) * 0.06}>
                <span className="sol__chip">{ind}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  )
}
