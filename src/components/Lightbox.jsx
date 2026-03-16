import { useEffect, useCallback } from 'react'
import './Lightbox.css'

export default function Lightbox({ item, items, onClose, onNavigate }) {
  const currentIndex = items.findIndex(i => i.id === item.id)

  const prev = useCallback(() => {
    if (currentIndex > 0) onNavigate(items[currentIndex - 1])
  }, [currentIndex, items, onNavigate])

  const next = useCallback(() => {
    if (currentIndex < items.length - 1) onNavigate(items[currentIndex + 1])
  }, [currentIndex, items, onNavigate])

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div className="lb-backdrop" onClick={onClose}>
      <div className="lb-box" onClick={e => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose}>✕</button>
        {currentIndex > 0 && (
          <button className="lb-arrow lb-prev" onClick={prev}>‹</button>
        )}
        <img src={item.src} alt={item.alt} />
        {currentIndex < items.length - 1 && (
          <button className="lb-arrow lb-next" onClick={next}>›</button>
        )}
        <p className="lb-caption">{item.cat} — {item.alt}</p>
      </div>
    </div>
  )
}
