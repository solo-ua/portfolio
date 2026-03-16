import { useState, useEffect, useRef, useMemo } from 'react'
import Lightbox from './Lightbox'
import { items, categories, subcategories } from '../data/portfolio'
import './Portfolio.css'

export default function Portfolio() {
  const [activeCat, setActiveCat] = useState('All')
  const [activeSub, setActiveSub] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)

  // Filter items
  const filteredItems = useMemo(() => {
    let result = items
    if (activeCat !== 'All') result = result.filter(i => i.cat === activeCat)
    if (activeSub !== 'All') result = result.filter(i => i.subCat === activeSub)
    return result
  }, [activeCat, activeSub])

  const currentSubCats = useMemo(() => {
    if (activeCat === 'All') return []
    return subcategories[activeCat] || []
  }, [activeCat])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    const els = ref.current?.querySelectorAll('.fade-in:not(.visible)')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filteredItems])

  return (
    <section id="portfolio" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Portfolio</p>
        <h2 className="fade-in">Visual Work & Illustrations</h2>

        <div className="filter-wrapper fade-in">
          <div className="filter-tabs">
            <button
              className={`filter-btn${activeCat === 'All' ? ' active' : ''}`}
              onClick={() => { setActiveCat('All'); setActiveSub('All'); }}
            >
              All
            </button>
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn${activeCat === c ? ' active' : ''}`}
                onClick={() => { setActiveCat(c); setActiveSub('All'); }}
              >
                {c}
              </button>
            ))}
          </div>

          {currentSubCats.length > 0 && currentSubCats[0] !== 'General' && (
            <div className="sub-filter-tabs">
              <button
                className={`sub-filter-btn${activeSub === 'All' ? ' active' : ''}`}
                onClick={() => setActiveSub('All')}
              >
                All {activeCat}
              </button>
              {currentSubCats.map(sub => (
                <button
                  key={sub}
                  className={`sub-filter-btn${activeSub === sub ? ' active' : ''}`}
                  onClick={() => setActiveSub(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="portfolio-grid-wrapper fade-in">
          <div className="portfolio-grid">
            {filteredItems.map((item, i) => (
              <article
                key={item.id}
                className="portfolio-item fade-in visible"
                style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
                onClick={() => setLightbox(item)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="portfolio-overlay">
                  <p>{item.subCat !== 'General' ? item.subCat : item.cat}</p>
                  <span>View</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          item={lightbox}
          items={filteredItems}
          onClose={() => setLightbox(null)}
          onNavigate={setLightbox}
        />
      )}
    </section>
  )
}
