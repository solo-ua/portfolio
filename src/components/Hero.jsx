import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Fireflies from "./fireflies";

import pfpImg from "../assets/photo_2026-03-18_12-03-39.jpg";

export default function Hero() {
  const taglineRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = taglineRef.current;
    if (!el) return;
    const text = el.dataset.text;
    let i = 0;
    el.textContent = "";
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <Fireflies />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Developer, Visual Designer & 3D Artist</h1>
          <p
            className="hero-tagline"
            ref={taglineRef}
            data-text="Combining technical precision with creative vision."
          />
          <div className="hero-actions">
            <a
              href="#technical-projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#technical-projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Code Projects
            </a>
            <a
              href="#portfolio"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Design Work
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className={`blob-container ${isLoaded ? "loaded" : "loading"}`}>
            {!isLoaded && (
              <div className="pfp-skeleton">
                <div className="spinner"></div>
              </div>
            )}
            <img
              src={pfpImg}
              alt="Mariia Khiershi"
              onLoad={() => setIsLoaded(true)}
              style={{ opacity: isLoaded ? 1 : 0 }}
            />
            <div className="blob-bg"></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span />
        <p>Scroll</p>
      </div>
    </section>
  );
}
