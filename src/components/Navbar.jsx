import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ activeSide, setActiveSide, lightMode, setLightMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Determine links based on active side
  const navLinks = []
  if (activeSide === 'tech') {
    navLinks.push(
      { label: 'Home', action: () => { setActiveSide(null); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
      { label: 'About', href: '#tech-about' },
      { label: 'Experience & Edu', href: '#tech-experience' },
      { label: 'Projects & Skills', href: '#tech-projects-skills' },
      { label: 'Contact', href: '#contact' }
    )
  } else if (activeSide === 'creative') {
    navLinks.push(
      { label: 'Home', action: () => { setActiveSide(null); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
      { label: 'About', href: '#creative-about' },
      { label: 'Experience & Skills', href: '#creative-experience' },
      { label: 'Gallery', href: '#creative-gallery' },
      { label: 'Education & Services', href: '#creative-skills' },
      { label: 'Contact', href: '#contact' }
    )
  } else {
    // Landing state
    navLinks.push(
      { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
      { label: 'Technical', action: () => { setActiveSide('tech'); setTimeout(() => { document.querySelector('#tech-portfolio')?.scrollIntoView({ behavior: 'smooth' }); }, 100); } },
      { label: 'Creative', action: () => { setActiveSide('creative'); setTimeout(() => { document.querySelector('#creative-portfolio')?.scrollIntoView({ behavior: 'smooth' }); }, 100); } },
      { label: 'Contact', href: '#contact' }
    )
  }

  const handleNavClick = (e, link) => {
    e.preventDefault()
    setMenuOpen(false)
    if (link.action) {
      link.action()
    } else if (link.href) {
      const el = document.querySelector(link.href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Get CV File details
  const cvPath = activeSide === 'creative' 
    ? '/portfolio/Designer Mariia Khiershi CV.pdf'
    : '/portfolio/CS-TECH Mariia Khiershi  CV.pdf'

  const cvLabel = activeSide === 'creative'
    ? 'Creative CV ↓'
    : activeSide === 'tech'
      ? 'Technical CV ↓'
      : 'CV ↓'

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${activeSide ? `theme-${activeSide}` : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); setActiveSide(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Mariia Khiershi<span className="logo-dot">.</span>
        </a>
        
        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href || '#'} 
              onClick={(e) => handleNavClick(e, link)}
              className="nav-link-item"
            >
              {link.label}
            </a>
          ))}
          
          {/* Theme Toggle Button */}
          <button 
            className="navbar-theme-toggle mono"
            onClick={() => setLightMode(prev => !prev)}
            aria-label="Toggle visual theme"
          >
            {lightMode ? '☾ Dark' : '☀ Light'}
          </button>

          <a
            className="navbar-cta"
            href={cvPath}
            download
          >
            {cvLabel}
          </a>
        </nav>

        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
