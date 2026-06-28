import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TransitionSection from './components/TransitionSection'
import TechPortfolio from './components/TechPortfolio'
import CreativePortfolio from './components/CreativePortfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSide, setActiveSide] = useState(null) // 'tech' | 'creative' | null
  const [lightMode, setLightMode] = useState(true) // light mode state (default to true)

  // Update body theme attribute when active side changes
  useEffect(() => {
    if (activeSide) {
      document.body.setAttribute('data-theme', activeSide)
    } else {
      document.body.removeAttribute('data-theme')
    }
  }, [activeSide])

  // Update body light mode attribute
  useEffect(() => {
    if (lightMode) {
      document.body.setAttribute('data-light', 'true')
    } else {
      document.body.removeAttribute('data-light')
    }
  }, [lightMode])

  // Simple global intersection observer for reveal effects on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeSide]);

  return (
    <>
      <Navbar 
        activeSide={activeSide} 
        setActiveSide={setActiveSide} 
        lightMode={lightMode} 
        setLightMode={setLightMode} 
      />
      <main>
        <Hero />
        <TransitionSection activeSide={activeSide} setActiveSide={setActiveSide} />
        
        {/* Render portfolio dynamically depending on choice */}
        {activeSide === 'tech' && <TechPortfolio />}
        {activeSide === 'creative' && <CreativePortfolio />}
        
        <Contact activeSide={activeSide} />
      </main>
      <FolderClean />
      <Footer />
    </>
  )
}

// Dummy helper to resolve structural layout if needed
function FolderClean() {
  return null
}

export default App
