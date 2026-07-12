import { Link } from 'react-router-dom'
import { HiArrowUpRight } from 'react-icons/hi2'
import Magnetic from './Magnetic.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer bg-grain">
      <div className="glow glow-gold" style={{ width: 360, height: 360, bottom: -120, left: -80 }} />
      <div className="container footer__inner">
        <div className="footer__cta card">
          <div>
            <p className="eyebrow">Let's begin</p>
            <h2>Ready to sharpen your financial edge?</h2>
            <p className="muted">Partner with advisors who treat your ambition as their mandate.</p>
          </div>
          <Magnetic>
            <Link to="/contact" className="btn btn-gold">
              Start the conversation <HiArrowUpRight />
            </Link>
          </Magnetic>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="nav__brand">
              <img src="/logo-wordmark.png" alt="Southpaw Financial Services" className="footer__brand-logo" />
            </Link>
            <p className="muted footer__blurb">
              A modern advisory firm uniting audit, tax, and management consulting to help
              enterprises measure clearly, decide boldly, and grow with confidence.
            </p>
          </div>

          <div className="footer__col">
            <h4>Firm</h4>
            <Link to="/about">About Us</Link>
            <Link to="/solutions">Our Solutions</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__col">
            <h4>Practices</h4>
            <Link to="/solutions">Assurance & Audit</Link>
            <Link to="/solutions">Tax Advisory</Link>
            <Link to="/solutions">Management Consulting</Link>
            <Link to="/solutions">Deal Advisory</Link>
          </div>

          <div className="footer__col">
            <h4>Offices</h4>
            <p className="muted">Bengaluru</p>
            <p className="muted">Chennai</p>
          </div>
        </div>

        <div className="hairline" />
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Southpaw Financial Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
