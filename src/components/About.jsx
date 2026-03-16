import { useEffect, useRef } from 'react'
import './About.css'

const skills = [
  'React / Vite', 'JavaScript / TypeScript', 'Node.js / Socket.IO', 
  'Flutter / Dart', 'PHP / MySQL', 'Java / C#',
  'UI/UX (Figma)', '3D (Blender)', 
  'Illustration (Krita)', 'Adobe Substance Painter'
]

export default function About() {
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
    <section id="about" ref={ref}>
      <div className="container about-grid">
        <div className="about-left fade-in">
          <p className="section-label">About</p>
          <h2>Bridging the gap between<br /><em>design and engineering</em></h2>
          <p className="about-bio">
            Self-motivated and multidisciplinary individual with a strong foundation in computer science and a passion for creative design. I am a Full-Stack Developer and 3D Artist with a rich background in Graphic / UI Design. My unique intersection of skills allows me to adapt quickly, work analytically, and craft highly immersive digital experiences—from custom database architectures to hand-drawn illustrations and interactive 3D web applications.
          </p>
          <a
            href="/MariiaKhiershi/resume.docx"
            download
            className="btn-primary about-dl"
          >
            Download Resume ↓
          </a>
        </div>
        <div className="about-right fade-in">
          <p className="skills-label">Tech Stack & Tools</p>
          <div className="skills-grid">
            {skills.map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
