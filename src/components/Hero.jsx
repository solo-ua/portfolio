import { useEffect, useState } from "react";
import "./Hero.css";
import pfpImg from "../assets/photo_2026-03-18_12-03-39.jpg";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Subtle coordinate grid generator
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({
        x: Math.round((e.clientX / window.innerWidth) * 100),
        y: Math.round((e.clientY / window.innerHeight) * 100),
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Editorial Grid Background */}
      <div className="hero-grid-bg">
        <div className="grid-line grid-v-1"></div>
        <div className="grid-line grid-v-2"></div>
        <div className="grid-line grid-h-1"></div>
      </div>

      <div className="hero-coordinates mono">
        LOC [33.8938° N, 35.5018° E] // SEC_SYS_ACTIVATE // X: {coords.x} Y: {coords.y}
      </div>

      <div className="container hero-container">
        <div className="hero-content-grid">
          {/* Main Title & Bio Column */}
          <div className="hero-text-col">
            <span className="hero-intro-tag mono fade-in visible">00 / INTRODUCTION</span>
            <h1 className="hero-title fade-in visible">
              Developer, Designer & 3D Artist
            </h1>
            <h2 className="hero-subtitle fade-in visible">
              Mariia Khiershi
            </h2>
            <p className="hero-description fade-in visible">
              Operating at the intersection of logical software engineering and creative craftsmanship. I build scalable full-stack web platforms, design brand identities, and render atmospheric 3D digital worlds.
            </p>
            <div className="hero-actions fade-in visible">
              <a
                href="#transition-section"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#transition-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Chapters
              </a>
            </div>
          </div>

          {/* Profile Photo Editorial Frame */}
          <div className="hero-image-col">
            <div className={`photo-frame ${isLoaded ? "loaded" : "loading"} fade-in visible`}>
              <div className="frame-corner tc"></div>
              <div className="frame-corner tr"></div>
              <div className="frame-corner bc"></div>
              <div className="frame-corner br"></div>
              <div className="pfp-grid-overlay"></div>
              
              {!isLoaded && (
                <div className="pfp-loader">
                  <span className="mono">LOADING_SYS_ASSET...</span>
                </div>
              )}
              
              <img
                src={pfpImg}
                alt="Mariia Khiershi Portrait"
                onLoad={() => setIsLoaded(true)}
                className="pfp-image"
                style={{ opacity: isLoaded ? 0.9 : 0 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator fade-in visible">
        <div className="scroll-line-container">
          <span className="scroll-text mono">SCROLL DOWN TO CHOICE</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
}
