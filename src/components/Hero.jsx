import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const taglineRef = useRef(null)

  useEffect(() => {
    const el = taglineRef.current
    if (!el) return
    const text = el.dataset.text
    let i = 0
    el.textContent = ''
    const interval = setInterval(() => {
      el.textContent += text[i]
      i++
      if (i >= text.length) clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="hero-pre">Developer, Visual Designer & 3D Artist</p>
        <h1 className="hero-name">
          Mariia
          Khiershi
        </h1>
        <p
          className="hero-tagline"
          ref={taglineRef}
          data-text="Combining technical precision with creative vision."
        />
        <div className="hero-actions">
          <a href="#technical-projects" className="btn-primary" onClick={e => {
            e.preventDefault()
            document.querySelector('#technical-projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View Code Projects
          </a>
          <a href="#portfolio" className="btn-ghost" onClick={e => {
            e.preventDefault()
            document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View Design Work
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span />
        <p>Scroll</p>
      </div>
    </section>
  )
}
