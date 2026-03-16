import { useEffect, useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    )
    const els = ref.current?.querySelectorAll('.fade-in')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref}>
      <div className="container contact-wrap">
        <p className="section-label fade-in">Contact</p>
        <h2 className="fade-in">Let's create<br /><em>something beautiful.</em></h2>
        <p className="contact-sub fade-in">
          Open to freelance projects, collaborations, and creative conversations.
        </p>
        <a
          href="mailto:mariahershi@gmail.com"
          className="contact-email fade-in"
        >
          mariahershi@gmail.com
        </a>
        <div className="contact-links fade-in">
          <a
            href="https://www.linkedin.com/in/mariia-%D9%8Ekhiershi-4860532a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/solo-ua"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub ↗
          </a>
          <a
            href="https://wa.me/96181980218"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
          <svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 24 24" 
     width="18" 
     height="18" 
     fill="currentColor">
  <path d="M12 2C6.48 2 2 6.25 2 11.5c0 1.85.55 3.56 1.5 5.01L2 22l5.63-1.47A10.2 10.2 0 0 0 12 21c5.52 0 10-4.25 10-9.5S17.52 2 12 2zm0 17.2c-1.5 0-2.96-.4-4.24-1.14l-.3-.18-3.34.87.9-3.25-.2-.32A7.54 7.54 0 0 1 4.2 11.5C4.2 7.36 7.7 4 12 4s7.8 3.36 7.8 7.5-3.5 7.7-7.8 7.7zm4.36-5.53c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.17-1.38-1.3-1.62-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
</svg>
            WhatsApp ↗
          </a>
        </div>
      </div>
    </section>
  )
}
