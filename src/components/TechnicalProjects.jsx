import { useEffect, useRef } from 'react'
import './TechnicalProjects.css'

const projects = [
  {
    title: "Social Productivity Web-App",
    emoji:'👥',
    tech: ["React", "Redux", "Node.js", "Socket.IO", "MySQL", "Blender"],
    desc: "A web app combining social 3D virtual workspaces with music streaming, real-time chat, task management, and synced audio.",
    link: "https://github.com/solo-ua/ataraxia-web-app"
  },
  {
    title: "RESTful API – PHP-based",
    tech: ["PHP", "MySQL", "AwardSpace"],
    emoji:'📁',
    desc: "A PHP-based RESTful API supporting CRUD operations for managing radio stations, user profiles, and real-time interactions securely.",
    link: "https://github.com/solo-ua/ataraxia-api-php"
  },
  {
    title: "Radio Manager",
    tech: ["React"],
    emoji:'📻',
    desc: "A web-based admin interface enabling CRUD operations for managing radio stations and hosts.",
    link: "https://github.com/solo-ua/ataraxia-admin-radio-managing"
  },
  {
    title: "Ataraxia UI Design",
    tech: ["Figma", "Krita", "Blender"],
    emoji:'💻',
    desc: "Designed the core interface elements and 3D-rendered elements for the Ataraxia web app.",
    link: "https://www.figma.com/design/leQTIpK76TYvxWIGhislFI/Ataraxia-UI-Design?node-id=601-9&t=vIvsERuaQkZMe0zS-1"
  },
  {
    title: "T-Shirt Brand Homepage",
    tech: ["Figma", "Krita", "Photoshop"],
    emoji:'👕',
    desc: "Designed a homepage to showcase custom T-shirt graphics created for a Portuguese startup clothing brand.",
    link: "https://www.figma.com/design/TUbiE0zbaPF8nTcKs7LmIq/Web-design-demonstration?node-id=34-836&p=f&t=hrvgeJ1hQmk81P3i-0"
  }
]

export default function TechnicalProjects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.fade-in')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="technical-projects" ref={ref}>
      <div className="container projects-container">
        <p className="section-label fade-in">Engineering</p>
        <h2 className="fade-in">Technical & Creative Projects</h2>
        
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <a 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={i} 
              className="project-card fade-in"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <span className="project-folder">{proj.emoji}</span>
                  <span className="project-ext">↗</span>
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="project-tech">
                  {proj.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
