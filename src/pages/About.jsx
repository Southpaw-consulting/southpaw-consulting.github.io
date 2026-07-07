import { Link } from 'react-router-dom'
import { HiArrowUpRight, HiOutlineSparkles, HiOutlineHandRaised, HiOutlineEye } from 'react-icons/hi2'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import './About.css'

const values = [
  { icon: <HiOutlineEye />, title: 'Clarity', text: 'We turn complexity into a clear, decision-ready picture. No jargon, no fog — just the truth your numbers are telling.' },
  { icon: <HiOutlineHandRaised />, title: 'Integrity', text: 'Independent, objective, and unafraid to say the hard thing. Your trust is the only asset we can never rebuild.' },
  { icon: <HiOutlineSparkles />, title: 'Craft', text: 'We treat every model, memo, and audit as a piece of craftsmanship — precise, rigorous, and quietly elegant.' },
]

const milestones = [
  { year: '2008', text: 'Founded in New York by three partners from global assurance and strategy backgrounds.' },
  { year: '2013', text: 'Opened London office; launched dedicated management consulting practice.' },
  { year: '2018', text: 'Surpassed 500 enterprise clients and $10B in assets under advisory.' },
  { year: '2022', text: 'Built proprietary financial analytics platform, Southpaw Lens.' },
  { year: '2026', text: 'Operating across 34 countries with a 98% client retention rate.' },
]

const leaders = [
  { name: 'Jonathan Reyes', role: 'Founding Partner & CEO', initials: 'JR' },
  { name: 'Priya Nair', role: 'Head of Assurance', initials: 'PN' },
  { name: 'Marcus Brandt', role: 'Head of Consulting', initials: 'MB' },
  { name: 'Sofia Alvarez', role: 'Head of Tax Advisory', initials: 'SA' },
]

export default function About() {
  return (
    <Page>
      <PageHero
        eyebrow="About the firm"
        title="We are the partner behind the <span class='serif-italic gold-text'>numbers</span>."
        subtitle="Southpaw Financial Services was built on a simple conviction: enterprises deserve advisors who combine the rigor of audit, the foresight of strategy, and the discretion of a trusted confidant."
      />

      {/* STORY */}
      <section className="section">
        <div className="container about__story">
          <Reveal className="section-head">
            <p className="eyebrow">Our story</p>
            <h2>A modern firm, built for how business actually works.</h2>
          </Reveal>
          <Reveal delay={0.1} className="about__story-body muted">
            <p>
              We started Southpaw because the traditional advisory model was broken. Clients were
              sold by senior partners and served by rotating juniors. Audit, tax, and strategy sat
              in silos that rarely spoke. And reports told you what happened — never what to do next.
            </p>
            <p>
              So we built something different: a firm where senior practitioners stay in the room,
              where every discipline shares one view of your financial reality, and where insight is
              the deliverable — not just documentation. Today, that philosophy guides more than 1,200
              enterprises across the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section about__values-sec bg-grain">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">What we stand for</p>
            <h2>Three values, non-negotiable.</h2>
          </Reveal>
          <div className="about__values">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <article className="card about__value">
                  <div className="about__value-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p className="muted">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">The journey</p>
            <h2>Milestones that shaped Southpaw.</h2>
          </Reveal>
          <div className="timeline">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06} className="timeline__item">
                <div className="timeline__dot" />
                <span className="timeline__year gold-text">{m.year}</span>
                <p className="muted">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section about__team-sec bg-grain">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">Leadership</p>
            <h2>The partners you'll actually work with.</h2>
          </Reveal>
          <div className="about__team">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <article className="card about__member">
                  <div className="about__avatar">{l.initials}</div>
                  <h3>{l.name}</h3>
                  <p className="muted">{l.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="about__cta">
            <Link to="/contact" className="btn btn-gold">Work with our team <HiArrowUpRight /></Link>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
