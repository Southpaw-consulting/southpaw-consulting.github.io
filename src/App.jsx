import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Solutions from './pages/Solutions.jsx'
import Contact from './pages/Contact.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // If there's a hash (e.g. /contact#enquiry), scroll to that section once it mounts.
    if (hash) {
      let tries = 0
      const id = setInterval(() => {
        const el = document.querySelector(hash)
        if (el) {
          if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 })
          else el.scrollIntoView({ behavior: 'smooth' })
          clearInterval(id)
        } else if (tries++ > 25) {
          clearInterval(id)
        }
      }, 40)
      return () => clearInterval(id)
    }
    // Otherwise jump to top on route change.
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

// Buttery smooth scrolling via Lenis (respects reduced-motion preference)
function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    window.__lenis = lenis
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])
}

// Cursor-follow spotlight + subtle 3D tilt on feature cards
function useCardInteractions(pathname) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const selector = '.pillar, .sol__card, .about__value, .contact__office'
    const cards = Array.from(document.querySelectorAll(selector))
    const cleanups = cards.map((card) => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        card.style.setProperty('--mx', `${x}px`)
        card.style.setProperty('--my', `${y}px`)
        const rx = ((y / r.height) - 0.5) * -11
        const ry = ((x / r.width) - 0.5) * 11
        card.style.transform = `translateY(-10px) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`
      }
      const onLeave = () => {
        card.style.transform = ''
        card.style.removeProperty('--mx')
        card.style.removeProperty('--my')
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      return () => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [pathname])
}

export default function App() {
  const location = useLocation()
  useSmoothScroll()
  useCardInteractions(location.pathname)
  return (
    <>
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
