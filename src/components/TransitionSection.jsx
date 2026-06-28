import { useEffect, useRef, useState } from 'react'
import './TransitionSection.css'

export default function TransitionSection({ activeSide, setActiveSide }) {
  const wrapperRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalHeight = rect.height - windowHeight
      
      if (totalHeight <= 0) return
      
      // Calculate how much has scrolled past the top of viewport
      const scrolled = -rect.top
      const p = Math.min(Math.max(scrolled / totalHeight, 0), 1)
      setProgress(p)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Map progress (0 to 0.8 for curl sweep, 0.8 to 1.0 for fade out)
  const foldProgress = Math.min(progress / 0.8, 1)
  const peelX = (1 - foldProgress) * 100
  const peelY = (1 - foldProgress) * 100
  
  const opacity = progress > 0.8 ? 1 - (progress - 0.8) / 0.2 : 1

  // Handle path selection
  const selectPath = (side) => {
    setActiveSide(side)
    // Scroll smoothly to the corresponding portfolio container
    setTimeout(() => {
      const targetId = side === 'tech' ? '#tech-portfolio' : '#creative-portfolio'
      const el = document.querySelector(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <section 
      className="transition-section-wrapper" 
      id="transition-section" 
      ref={wrapperRef}
    >
      <div className="transition-sticky">
        
        {/* UNDERLAY: The Choice Page (Hidden under the page peel) */}
        <div className="choice-underlay">
          <div className="choice-grid">
            
            {/* Left Column: Technical Portfolio */}
            <div 
              className={`choice-col tech-col ${activeSide === 'tech' ? 'selected' : ''}`}
              onClick={() => selectPath('tech')}
            >
              <div className="choice-col-bg grid-pattern"></div>
              <div className="choice-col-content">
                <span className="mono choice-num">01 / LOGIC</span>
                <h3 className="choice-heading">Technical<br /><span className="serif-italic">Portfolio</span></h3>
                <p className="choice-desc">
                  Focused on computer science architecture, database design, REST APIs, and business operations automation.
                </p>
                <button className="btn btn-secondary choice-btn">
                  I'm interested in your
                </button>
              </div>
            </div>

            {/* Right Column: Creative Portfolio */}
            <div 
              className={`choice-col creative-col ${activeSide === 'creative' ? 'selected' : ''}`}
              onClick={() => selectPath('creative')}
            >
              <div className="choice-col-bg glow-pattern"></div>
              <div className="choice-col-content">
                <span className="mono choice-num">02 / CRAFT</span>
                <h3 className="choice-heading">Creative<br /><span className="serif-italic">Portfolio</span></h3>
                <p className="choice-desc">
                  Focused on graphic branding, 3D modelling/texturing, digital illustration, and immersive UI/UX experiences.
                </p>
                <button className="btn btn-secondary choice-btn">
                  Let's explore your creative career
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* OVERLAY: The Cover Page (Clipped and peeled away) */}
        <div 
          className="peel-overlay-page"
          style={{
            clipPath: `polygon(0% 0%, 100% 0%, 100% ${peelY}%, ${peelX}% 100%, 0% 100%)`,
            opacity: opacity,
            pointerEvents: progress >= 0.85 ? 'none' : 'auto',
            visibility: progress >= 0.85 ? 'hidden' : 'visible'
          }}
        >
          <div className="overlay-page-grid">
            <div className="overlay-line-v"></div>
            <div className="overlay-page-content">
              <span className="mono overlay-label">THE TRANSITION</span>
              <h2 className="overlay-heading">One Creator.<br />Two Dual Realities.</h2>
              <p className="overlay-p">
                A professional career divided into two halves. Scroll down to peel back the page and select which chapter you want to read.
              </p>
              <div className="peel-scroll-hint">
                <span className="mono animate-pulse">KEEP SCROLLING TO PEEL PAGE ↓</span>
              </div>
            </div>
          </div>
        </div>

        {/* THE FOLDED BACK PAGE CORNER (The curling physical page flap) */}
        <div 
          className="peel-corner-flap"
          style={{
            clipPath: `polygon(${peelX}% 100%, 100% ${peelY}%, ${peelX}% ${peelY}%)`,
            opacity: opacity,
            pointerEvents: 'none',
            visibility: (progress > 0 && progress < 0.85) ? 'visible' : 'hidden'
          }}
        >
          <div className="peel-corner-inner">
            <div className="peel-reflection-line"></div>
          </div>
        </div>

      </div>
    </section>
  )
}
