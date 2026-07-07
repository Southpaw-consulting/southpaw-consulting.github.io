import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi'
import SouthpawLogo from './SouthpawLogo.jsx'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Our Solutions' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <SouthpawLogo className="nav__brand-logo" />
        </Link>

        <nav className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-gold nav__cta">Book a Consultation</Link>

        <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <HiX /> : <HiOutlineMenuAlt4 />}
        </button>
      </div>
    </header>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => `nav__mobile-link ${isActive ? 'is-active' : ''}`}
            onClick={() => setOpen(false)}
            end={l.to === '/'}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-gold" onClick={() => setOpen(false)}>
          Book a Consultation
        </Link>
      </div>
    </>
  )
}
