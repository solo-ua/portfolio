import { useEffect, useRef } from 'react'
import './Timeline.css' // We will share this css between timeline components

const education = [
  {
    role: "Bachelor in Computer Science (3.68 GPA)",
    company: "Lebanese International University",
    duration: "2022 - 2025",
    desc: "Awarded Dean’s Honor List 4 times. Achieved a full understanding of programming basics (OOP, data structures) and courses associated with software engineering, machine learning, mobile programming, and web development."
  }
]

export default function Education() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.fade-in')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={ref}>
      <div className="container timeline-container">
        <p className="section-label fade-in">Education</p>
        <h2 className="fade-in">Academic Background</h2>
        
        <div className="timeline-grid">
          {education.map((exp, i) => (
            <div key={i} className="timeline-item fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="timeline-line"></div>
              <div className="timeline-content">
                <span className="timeline-duration">{exp.duration}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
