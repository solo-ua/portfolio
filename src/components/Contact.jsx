import './Contact.css'

export default function Contact({ activeSide }) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-blueprint-grid"></div>
      
      <div className="container contact-container">
        <span className="section-label">06 / GET IN TOUCH</span>
        
        <div className="contact-content-grid">
          
          {/* Left Column: Heading and Links */}
          <div className="contact-main-col fade-in visible">
            <h2 className="contact-title">
              Let's craft<br />
              <span className="serif-italic">something memorable.</span>
            </h2>
            <p className="contact-desc">
              Open to contract work, full-time positions, and collaborations at the intersection of engineering and design.
            </p>
            
            <a href="mailto:mariahershi@gmail.com" className="contact-email-link">
              mariahershi@gmail.com
            </a>

            <div className="contact-social-row">
              <a 
                href="https://www.linkedin.com/in/mariia-%D9%8Ekhiershi-4860532a0/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn mono"
              >
                LinkedIn ↗
              </a>
              <a 
                href="https://github.com/solo-ua" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn mono"
              >
                GitHub ↗
              </a>
              <a 
                href="https://wa.me/96181980218" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn mono"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>

          {/* Right Column: CV Downloads */}
          <div className="contact-download-col fade-in visible">
            <h3 className="download-header-title">Curriculum Vitae</h3>
            <p className="download-header-desc">
              Download the specialized resume matching the track you're interested in:
            </p>

            <div className="cv-download-cards">
              
              {/* Technical CV Card */}
              <a 
                href="/portfolio/CS-TECH Mariia Khiershi  CV.pdf" 
                download 
                className={`cv-card ${activeSide === 'tech' ? 'active-highlight' : ''}`}
              >
                <div className="cv-card-num mono">01</div>
                <h4 className="cv-card-title">Technical Resume</h4>
                <p className="cv-card-desc">Software engineering, automation scripts, databases.</p>
                <span className="cv-card-btn mono">DOWNLOAD_PDF ↓</span>
              </a>

              {/* Creative CV Card */}
              <a 
                href="/portfolio/Designer Mariia Khiershi CV.pdf" 
                download 
                className={`cv-card ${activeSide === 'creative' ? 'active-highlight' : ''}`}
              >
                <div className="cv-card-num mono">02</div>
                <h4 className="cv-card-title">Creative Resume</h4>
                <p className="cv-card-desc">Branding, 3D assets, illustration, Figma layouts.</p>
                <span className="cv-card-btn mono">DOWNLOAD_PDF ↓</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
