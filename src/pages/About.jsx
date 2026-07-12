import {
  HiOutlineSparkles, HiOutlineHandRaised, HiOutlineEye,
  HiOutlinePuzzlePiece, HiOutlineUserGroup, HiOutlineCube,
} from 'react-icons/hi2'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import './About.css'

const values = [
  { icon: <HiOutlineEye />, title: 'Clarity', text: 'We turn complexity into a clear, decision-ready picture. No jargon, no fog — just the truth your numbers are telling.' },
  { icon: <HiOutlineHandRaised />, title: 'Integrity', text: 'Independent, objective, and unafraid to say the hard thing. Your trust is the only asset we can never rebuild.' },
  { icon: <HiOutlineSparkles />, title: 'Craft', text: 'We treat every model, memo, and audit as a piece of craftsmanship — precise, rigorous, and quietly elegant.' },
]

const propositions = [
  {
    icon: <HiOutlinePuzzlePiece />,
    title: 'Comprehensive Problem-Solving',
    text: 'A 360° approach that unites audit, tax, and financial advisory — strengthening internal controls, sharpening financial reporting, and protecting value across your balance sheet.',
  },
  {
    icon: <HiOutlineUserGroup />,
    title: 'Collaborative Synergy',
    text: 'Our blend of audit, tax, consulting, and finance expertise delivers tailored solutions that align statutory compliance with the strategic financial outcomes your business needs.',
  },
  {
    icon: <HiOutlineCube />,
    title: 'Source-Centric Solutions',
    text: 'We trace every issue to its financial root — reinforcing the accuracy and integrity of your numbers so risks are caught and corrected before they reach your statements.',
  },
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
              In an increasingly competitive and fast-changing business environment, organizations
              must stay agile, make informed decisions, and continuously sharpen their operations to
              achieve sustainable growth. From entering new markets and improving operational
              efficiency to embracing digital transformation and strengthening financial performance,
              businesses need strategic guidance to stay ahead.
            </p>
            <p>
              At Southpaw, we help organizations meet these challenges with practical, result-oriented
              advisory solutions. We work closely with our clients to improve business performance,
              optimize financial and operational processes, manage risk effectively, and drive
              strategic growth initiatives.
            </p>
            <p>
              With expertise spanning finance, operations, technology, governance, and business
              strategy, we deliver tailored solutions that help organizations improve efficiency,
              enhance profitability, and create lasting long-term value.
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

      {/* VALUE PROPOSITIONS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">Why clients choose us</p>
            <h2>Key value we bring to every engagement.</h2>
            <p className="muted">
              Three principles that shape how we partner with clients and deliver results that last.
            </p>
          </Reveal>
          <div className="about__values">
            {propositions.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="card about__value">
                  <div className="about__value-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  )
}
