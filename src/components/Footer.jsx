import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { HiArrowUpRight } from 'react-icons/hi2'
import SouthpawLogo from './SouthpawLogo.jsx'
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
          <Link to="/contact" className="btn btn-gold">
            Start the conversation <HiArrowUpRight />
          </Link>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="nav__brand">
              <SouthpawLogo className="footer__brand-logo" />
            </Link>
            <p className="muted footer__blurb">
              A modern advisory firm uniting audit, tax, and management consulting to help
              enterprises measure clearly, decide boldly, and grow with confidence.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="X"><FaXTwitter /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Firm</h4>
            <Link to="/about">About Us</Link>
            <Link to="/solutions">Our Solutions</Link>
            <Link to="/contact">Contact</Link>
            <a href="#">Careers</a>
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
            <p className="muted">200 Southpaw Tower<br />New York, NY 10018</p>
            <p className="muted">One Canary Wharf<br />London, E14 5AB</p>
          </div>
        </div>

        <div className="hairline" />
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Southpaw Financial Services. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Regulatory Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
