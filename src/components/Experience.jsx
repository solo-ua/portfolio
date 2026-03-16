import { useEffect, useRef } from 'react'
import './Timeline.css' // We will share this css between timeline components

const experiences = [
  {
    role: "Virtual Assistant | Graphic Designer | Developer",
    company: "XRWorkout (Remote)",
    duration: "April 2025 - Present",
    desc: "Led creative production and visual design, supported product development, managed interns and recruitment, and handled scheduling and team coordination."
  },
  {
    role: "Flutter Developer (Internship)",
    company: "Mercator (Remote)",
    duration: "April 2025 - September 2025",
    desc: "Developing the front end using Flutter's framework and implementing data modeling."
  },
  {
    role: "Graphic Designer | Illustrator",
    company: "Freelance (Upwork)",
    duration: "April 2024 - June 2025",
    desc: "Designed logos and 50+ t-shirt design prints for a Portuguese clothing brand. Optimized files for printing and created 2D and 3D mock-ups."
  }
]

export default function Experience() {
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
    <section id="experience" ref={ref}>
      <div className="container timeline-container">
        <p className="section-label fade-in">Experience</p>
        <h2 className="fade-in">Professional Journey</h2>
        
        <div className="timeline-grid">
          {experiences.map((exp, i) => (
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
