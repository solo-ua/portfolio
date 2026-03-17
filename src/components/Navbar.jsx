import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Engineering', href: '#technical-projects' },
  { label: 'Education', href: '#education' },
  { label: 'Design Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={e => handleNav(e, '#hero')}>
          Mariia Khiershi.
        </a>
        <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={e => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a
            className="navbar-cta"
            href={`${import.meta.env.BASE_URL}resume.docx`}
            download
          >
            Resume ↓
          </a>
        </nav>
        <button
          className={`burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
