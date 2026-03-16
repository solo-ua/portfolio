import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer fade-in">
      <div className="container footer-inner">
        <p>© {year} Mariia Khiershi. All rights reserved.</p>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  )
}
