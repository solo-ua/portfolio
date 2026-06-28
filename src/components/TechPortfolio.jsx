import './TechPortfolio.css'

export default function TechPortfolio() {
  const techSkills = {
    "Development": ["React", "Redux", "Node.js", "PHP", "MySQL", "Flutter", "REST APIs", "Socket.IO", "Git/GitHub"],
    "Automation & Operations": ["AI-Assisted Development", "Workflow Automation", "Business Operations", "Process Optimization", "Team Coordination", "Recruitment & Onboarding"],
    "Design": ["Figma", "Graphic Design", "Branding", "Digital Illustration", "Blender", "Adobe Substance Painter", "UI/UX Design", "3D Modeling & Texturing."],
    "Languages": ["Arabic (Native)", "English (Proficient)", "Russian (Proficient)", "Ukrainian (Fluent)"]
  }

  const projects = [
    {
      title: "Ataraxia — Social Hub",
      status: "In Dev",
      tags: ["React", "Node.js", "Socket.IO", "MySQL", "Blender"],
      description: "A full-stack social web app combining 3D virtual workspaces, real-time chat, music streaming, and task management.",
      challenges: "Engineered real-time audio sync across client sessions and managed state for collaborative 3D spaces.",
      github: "https://github.com/solo-ua/ataraxia-web-app"
    },
    {
      title: "RESTful PHP API",
      status: "In Dev",
      tags: ["PHP", "MySQL", "AwardSpace", "REST API"],
      description: "A secure PHP backend API supporting user authentication, sensitive data encryption, and station management.",
      challenges: "Implemented encrypted data channels, secure authentication processing, and CRUD endpoint optimization.",
      github: "https://github.com/solo-ua/ataraxia-api-php"
    },
    {
      title: "Radio Manager Dashboard",
      status: "Completed",
      tags: ["React.js", "REST Client", "Dashboard UI"],
      description: "A web-based admin control panel enabling full CRUD operations for managing radio stations, host schedules, and status.",
      challenges: "Designed responsive state structures for real-time dashboard updates and custom tabular reporting views.",
      github: "https://github.com/solo-ua/ataraxia-admin-radio-managing"
    }
  ]

  return (
    <div className="tech-portfolio-container" id="tech-portfolio">
      <div className="tech-blueprint-grid"></div>
      
      {/* ── Section 1: About ── */}
      <section id="tech-about" className="tech-section">
        <div className="container">
          <span className="section-label">01 / TECHNICAL PROFILE</span>
          <div className="tech-about-grid">
            <div className="tech-about-left fade-in visible">
              <h2 className="tech-italic-title">Engineering logic & automated structures.</h2>
              <p className="tech-lead-p">
                Computer Science graduate with experience in developing full-stack applications, real-time communication systems, and scalable web platforms. Designed and implemented AI-assisted automation solutions for business operations, fundraising outreach, workflow management, and team coordination.
              </p>
            </div>
            <div className="tech-about-right fade-in visible">
              <div className="tech-metric-row">
                <div className="tech-metric-card">
                  <span className="tech-metric-num">3.68</span>
                  <span className="tech-metric-label">GPA (LIU)</span>
                </div>
                <div className="tech-metric-card">
                  <span className="tech-metric-num">4x</span>
                  <span className="tech-metric-label">Dean's List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Experience & Education (Side-by-Side) ── */}
      <section id="tech-experience" className="tech-section tech-border-t">
        <div className="container">
          <div className="tech-double-column-grid">
            
            {/* Left Column: Work Experience */}
            <div className="tech-experience-col fade-in visible">
              <span className="section-label">02 / PROFESSIONAL EXPERIENCE</span>
              <h2 className="tech-italic-title">Work Experience</h2>
              
              <div className="tech-timeline">
                {/* Job 1 */}
                <div className="tech-timeline-item">
                  <div className="tech-timeline-meta">
                    <span className="tech-timeline-date mono">APR 2025 — PRESENT</span>
                    <span className="tech-timeline-loc mono">NEW YORK (REMOTE)</span>
                  </div>
                  <div className="tech-timeline-content">
                    <h3 className="tech-timeline-role">Business Operations & Automation Associate</h3>
                    <h4 className="tech-timeline-org">XRWorkout</h4>
                    <ul className="tech-bullet-list">
                      <li>Developed AI-assisted productivity and automation tools to streamline business operations and team workflows.</li>
                      <li>Built a fundraising outreach agent that improved prospect research and relationship management processes.</li>
                      <li>Contributed to the implementation of business automation systems that improved organizational efficiency & collaboration.</li>
                      <li>Led intern recruitment, onboarding, and team coordination to support project delivery and operational effectiveness.</li>
                      <li>Managed weekly XR fitness content releases, ensuring consistent delivery of high-quality player experiences.</li>
                      <li>Produced marketing, product, and UI design assets to support brand growth and user engagement.</li>
                    </ul>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="tech-timeline-item">
                  <div className="tech-timeline-meta">
                    <span className="tech-timeline-date mono">APR 2025 — SEP 2025</span>
                    <span className="tech-timeline-loc mono">BEIRUT, LEBANON (REMOTE)</span>
                  </div>
                  <div className="tech-timeline-content">
                    <h3 className="tech-timeline-role">Flutter Developer Intern</h3>
                    <h4 className="tech-timeline-org">Mercator</h4>
                    <ul className="tech-bullet-list">
                      <li>Developed responsive cross-platform mobile application features using Flutter.</li>
                      <li>Implemented data models and application structures to support scalable application development.</li>
                      <li>Collaborated with development teams to translate requirements into functional mobile interfaces.</li>
                    </ul>
                  </div>
                </div>

                {/* Job 3 */}
                <div className="tech-timeline-item">
                  <div className="tech-timeline-meta">
                    <span className="tech-timeline-date mono">APR 2024 — JUN 2025</span>
                    <span className="tech-timeline-loc mono">PORTUGAL (REMOTE) | CONTRACT</span>
                  </div>
                  <div className="tech-timeline-content">
                    <h3 className="tech-timeline-role">Graphic Designer & Illustrator</h3>
                    <h4 className="tech-timeline-org">Upwork</h4>
                    <ul className="tech-bullet-list">
                      <li>Designed and delivered 50+ apparel graphics for a Portuguese clothing startup.</li>
                      <li>Led & created the company's visual identity, including logo design and branded marketing assets.</li>
                      <li>Produced print-ready files and developed 2D and 3D product mockups.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Education */}
            <div className="tech-education-col fade-in visible">
              <span className="section-label">03 / ACADEMIC RECORD</span>
              <h2 className="tech-italic-title">Education</h2>
              
              <div className="tech-education-card">
                <div className="tech-edu-meta">
                  <span className="tech-edu-date mono">2022 — 2025</span>
                  <h3 className="tech-edu-degree">B.Sc. Computer Science</h3>
                  <h4 className="tech-edu-school">Lebanese International University</h4>
                </div>
                <p className="tech-edu-desc">
                  GPA: 3.68/4.00 | Dean's Honor List (4x)<br /><br />
                  <strong>Relevant Coursework:</strong> Software Engineering, Machine Learning, Mobile Development, Web Development, Data Structures, Object-Oriented Programming
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Projects & Skills (Side-by-Side) ── */}
      <section id="tech-projects-skills" className="tech-section tech-border-t">
        <div className="container">
          <div className="tech-double-column-grid">
            
            {/* Left Column: Featured Projects */}
            <div className="tech-projects-col fade-in visible">
              <span className="section-label">04 / CODE REPOSITORIES</span>
              <h2 className="tech-italic-title">Featured Projects</h2>
              <div className="tech-projects-list">
                {projects.map((proj, idx) => (
                  <div className="tech-project-card" key={idx}>
                    <div className="tech-project-header">
                      <span className="tech-project-status mono">{proj.status}</span>
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="tech-proj-link">
                        SRC_CODE ↗
                      </a>
                    </div>
                    <h3 className="tech-project-title">{proj.title}</h3>
                    <p className="tech-project-desc">{proj.description}</p>
                    <div className="tech-project-challenges">
                      <strong>Challenge Log:</strong> {proj.challenges}
                    </div>
                    <div className="tech-project-tags">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="tech-tag mono">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Technical Skills */}
            <div className="tech-skills-col fade-in visible">
              <span className="section-label">05 / TECHNICAL SKILLS</span>
              <h2 className="tech-italic-title">Core Competencies & Stack</h2>
              <div className="tech-skills-list-grid">
                {Object.entries(techSkills).map(([category, items], idx) => (
                  <div className="tech-skill-card" key={idx}>
                    <h3 className="tech-skill-cat">{category}</h3>
                    <ul className="tech-skill-list">
                      {items.map((item, i) => (
                        <li key={i} className="tech-skill-item">
                          <span className="skill-dot"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
