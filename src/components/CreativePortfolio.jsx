import { useState, useEffect, useMemo } from 'react'
import { items, categories, subcategories } from '../data/portfolio'
import Lightbox from './Lightbox'
import './CreativePortfolio.css'

export default function CreativePortfolio() {
  const [activeCat, setActiveCat] = useState('All')
  const [activeSub, setActiveSub] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})

  // Track window resizing to distribute masonry columns dynamically
  const [colCount, setColCount] = useState(3)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) setColCount(1)
      else if (window.innerWidth <= 960) setColCount(2)
      else setColCount(3)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Filter gallery items based on selected category and subcategory
  const filteredItems = useMemo(() => {
    let result = items
    if (activeCat !== 'All') {
      result = result.filter(i => i.cat === activeCat)
    }
    if (activeSub !== 'All') {
      result = result.filter(i => i.subCat === activeSub)
    }
    return result
  }, [activeCat, activeSub])

  // Get active subcategories list
  const currentSubCats = useMemo(() => {
    if (activeCat === 'All') return []
    return subcategories[activeCat] || []
  }, [activeCat])

  // Reset subcategory filter when category changes
  const handleCatChange = (cat) => {
    setActiveCat(cat)
    setActiveSub('All')
  }

  // Distribute filtered items into columns for masonry layout
  const columns = useMemo(() => {
    const cols = Array.from({ length: colCount }, () => [])
    filteredItems.forEach((item, idx) => {
      cols[idx % colCount].push(item)
    })
    return cols
  }, [filteredItems, colCount])

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }))
  }

  const creativeSkills = {
    "Design": ["Figma", "Graphic Design", "Branding", "Digital Illustration", "Blender", "Adobe Substance Painter", "UI/UX Design", "3D Modeling & Texturing."],
    "Development": ["React", "Redux", "Node.js", "PHP", "MySQL", "Flutter", "REST APIs", "Socket.IO", "Git/GitHub"],
    "Automation & Operations": ["AI-Assisted Development", "Workflow Automation", "Business Operations", "Process Optimization", "Team Coordination", "Recruitment & Onboarding"],
    "Languages": ["Arabic (Native)", "English (Proficient)", "Russian (Proficient)", "Ukrainian (Fluent)"]
  }

  const creativeServices = [
    {
      title: "Branding & Visual Identity",
      desc: "Creating logo marks, guidelines, print assets, and visual style guides."
    },
    {
      title: "3D Art & Modeling",
      desc: "Creating atmospheric 3D renders, product visuals, and textured assets in Blender."
    },
    {
      title: "Digital Illustration",
      desc: "Drawing detailed vector graphics, clothing print vectors, and posters."
    },
    {
      title: "UI/UX Interface Design",
      desc: "Designing user interfaces and interactive app templates in Figma."
    }
  ]

  return (
    <div className="creative-portfolio-container" id="creative-portfolio">
      
      {/* ── Section 1: About ── */}
      <section id="creative-about" className="creative-section">
        <div className="container">
          <span className="section-label">01 / CREATIVE BIO</span>
          <div className="creative-about-grid">
            <div className="creative-about-left fade-in visible">
              <h2 className="creative-editorial-title">Artistic vision meets systematic execution.</h2>
              <p className="creative-lead-p">
                Freelance Graphic Designer, Illustrator, and 3D Artist with experience creating brand identities, apparel graphics, marketing assets, UI designs, and product visualizations for startups and digital products.
              </p>
            </div>
            <div className="creative-about-right fade-in visible">
              <div className="creative-summary-card">
                <h3>The Creative Advantage</h3>
                <p>
                  Experienced in translating business goals into compelling visual solutions across digital and print media. Skilled in branding, digital illustration, 3D modeling, texturing, and user interface design, with a Computer Science background that strengthens problem-solving, workflow efficiency, and collaboration within multidisciplinary teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Experience & Skills (Side-by-Side) ── */}
      <section id="creative-experience" className="creative-section creative-border-t">
        <div className="container">
          <div className="creative-double-column-grid">
            
            {/* Left Column: Work Experience */}
            <div className="creative-experience-col fade-in visible">
              <span className="section-label">02 / DESIGN EXPERIENCE</span>
              <h2 className="creative-editorial-title">Work Experience</h2>
              
              <div className="creative-timeline">
                {/* Design Job 1 */}
                <div className="creative-timeline-item">
                  <div className="creative-timeline-meta">
                    <span className="creative-date mono">APR 2025 — PRESENT</span>
                    <span className="creative-loc mono">NEW YORK (REMOTE)</span>
                  </div>
                  <div className="creative-timeline-content">
                    <h3 className="creative-role">Graphic Designer & Creative Operations Associate</h3>
                    <h4 className="creative-company">XRWorkout</h4>
                    <ul className="creative-bullets">
                      <li>Led creative production for marketing, product, and user-facing digital assets across multiple company initiatives.</li>
                      <li>Designed visual materials that supported brand consistency, user engagement, and product communication.</li>
                      <li>Created interface concepts and design assets for internal and external business needs.</li>
                      <li>Collaborated with product and development teams to align visual design with business objectives.</li>
                      <li>Supported recruitment, onboarding, scheduling, and operational coordination across distributed teams.</li>
                      <li>Contributed to content production pipelines for weekly XR fitness experiences.</li>
                    </ul>
                  </div>
                </div>

                {/* Design Job 2 */}
                <div className="creative-timeline-item">
                  <div className="creative-timeline-meta">
                    <span className="creative-date mono">APR 2024 — JUN 2025</span>
                    <span className="creative-loc mono">PORTUGAL (REMOTE) | CONTRACT</span>
                  </div>
                  <div className="creative-timeline-content">
                    <h3 className="creative-role">Graphic Designer & Illustrator</h3>
                    <h4 className="creative-company">Upwork</h4>
                    <ul className="creative-bullets">
                      <li>Designed and delivered over 50 apparel graphics for a Portuguese clothing startup.</li>
                      <li>Developed the company's visual identity, including logo design and branding assets.</li>
                      <li>Created print-ready artwork optimized for commercial production workflows.</li>
                      <li>Collaborated directly with stakeholders to transform concepts into market-ready visual products.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Creative Skills list */}
            <div className="creative-skills-col fade-in visible">
              <span className="section-label">03 / CREATIVE TOOLKIT</span>
              <h2 className="creative-editorial-title">Toolkit & Competencies</h2>
              
              <div className="creative-skills-list-grid">
                {Object.entries(creativeSkills).map(([category, items], idx) => (
                  <div className="creative-skill-card" key={idx}>
                    <h3 className="creative-skill-cat">{category}</h3>
                    <ul className="creative-skill-list">
                      {items.map((item, i) => (
                        <li key={i} className="creative-skill-item">
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

      {/* ── Section 3: Visual Gallery ── */}
      <section id="creative-gallery" className="creative-section creative-border-t">
        <div className="container">
          <span className="section-label">04 / VISUAL ARCHIVE</span>
          <h2 className="creative-editorial-title">Selected Visual Portfolios</h2>
          
          {/* Categories and Subcategories filtering pills */}
          <div className="gallery-filter-panel fade-in visible">
            <div className="cat-filter-row">
              <button 
                className={`cat-pill ${activeCat === 'All' ? 'active' : ''}`}
                onClick={() => handleCatChange('All')}
              >
                All Works
              </button>
              {categories.map((cat, i) => (
                <button 
                  key={i}
                  className={`cat-pill ${activeCat === cat ? 'active' : ''}`}
                  onClick={() => handleCatChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {currentSubCats.length > 0 && currentSubCats[0] !== 'General' && (
              <div className="subcat-filter-row">
                <button 
                  className={`subcat-pill ${activeSub === 'All' ? 'active' : ''}`}
                  onClick={() => setActiveSub('All')}
                >
                  All {activeCat}
                </button>
                {currentSubCats.map((sub, i) => (
                  <button 
                    key={i}
                    className={`subcat-pill ${activeSub === sub ? 'active' : ''}`}
                    onClick={() => setActiveSub(sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Masonry gallery container */}
          <div className="gallery-masonry-grid" style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
            {columns.map((col, colIdx) => (
              <div className="gallery-masonry-col" key={colIdx}>
                {col.map((item) => {
                  const isImgLoaded = loadedImages[item.id]
                  return (
                    <article 
                      className={`gallery-item-card ${isImgLoaded ? 'image-ready' : 'image-loading'}`} 
                      key={item.id}
                      onClick={() => setLightboxItem(item)}
                    >
                      {/* Image Shimmer skeleton */}
                      {!isImgLoaded && <div className="gallery-item-skeleton"></div>}
                      
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        loading="lazy"
                        onLoad={() => handleImageLoad(item.id)}
                        className="gallery-item-img"
                      />
                      
                      <div className="gallery-item-info">
                        <span className="mono gallery-item-category">
                          {item.subCat !== 'General' ? item.subCat : item.cat}
                        </span>
                        <h4 className="gallery-item-title">{item.alt}</h4>
                        <span className="gallery-item-view mono">VIEW_IMAGE ↗</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Education & Services (Side-by-Side) ── */}
      <section id="creative-skills" className="creative-section creative-border-t">
        <div className="container">
          <div className="creative-double-column-grid">
            
            {/* Left Column: Education */}
            <div className="creative-education-col fade-in visible">
              <span className="section-label">05 / ACADEMIC RECORD</span>
              <h2 className="creative-editorial-title">Education</h2>
              
              <div className="creative-education-card">
                <div className="creative-edu-meta">
                  <span className="creative-edu-date mono">2022 — 2025</span>
                  <h3 className="creative-edu-degree">B.Sc. Computer Science</h3>
                  <h4 className="creative-edu-school">Lebanese International University</h4>
                </div>
                <p className="creative-edu-desc">
                  GPA: 3.68/4.00 | Dean's Honor List (4x)<br /><br />
                  <strong>Relevant Coursework:</strong> Human-Computer Interaction, Software Engineering, Web Development, Digital Systems, Machine Learning
                </p>
              </div>
            </div>

            {/* Right Column: Services list */}
            <div className="creative-services-col fade-in visible">
              <span className="section-label">06 / SERVICES</span>
              <h2 className="creative-editorial-title">Visual Deliverables</h2>
              <div className="creative-services-list">
                {creativeServices.map((service, idx) => (
                  <div className="creative-service-compact-card" key={idx}>
                    <span className="service-number mono">0{idx + 1}</span>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Lightbox Preview Portal */}
      {lightboxItem && (
        <Lightbox 
          item={lightboxItem}
          items={filteredItems}
          onClose={() => setLightboxItem(null)}
          onNavigate={setLightboxItem}
        />
      )}
    </div>
  )
}
