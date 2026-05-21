import React, { useState, useEffect, useRef } from "react";

const SoftwareHeroScroller = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Revert back smoothly 200ms after scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        /* --- CORE PAGE STYLING --- */
        .hero-container {
          background-color: #060508; 
          color: #ffffff;
          min-height: 250vh; 
          font-family: 'Inter', system-ui, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* Fixed viewport container for background elements */
        .visual-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* --- THE GLOW LAYER --- */
        .glow-element {
          position: absolute;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                      width 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                      height 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                      border-radius 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                      background 0.8s ease,
                      filter 0.8s ease;
          
          /* IDLE STATE: Concentrated, perfect vibrant circle */
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: #A572CF;
          transform: translate(0, 0);
          filter: blur(50px);
          box-shadow: 0 0 100px rgba(165, 114, 207, 0.6);
          opacity: 0.85;
          animation: idleOrbit 8s infinite ease-in-out;
        }

        /* SCROLLING STATE: Decreased height for a sleek, thin wave laser string */
        .glow-element.is-scrolling {
          width: 850px;
          height: 8px; /* DECREASED HEIGHT: Gives a razor-sharp fluid line effect */
          border-radius: 100px; 
          background: #E87779; 
          transform: translateX(180px) rotate(-3deg); 
          filter: blur(20px); /* Lower blur keeps the thin line piercing and highly visible */
          box-shadow: 0 0 50px rgba(232, 119, 121, 0.9);
          opacity: 1;
          animation-play-state: paused;
        }

        /* Ambient subtle movement when the user isn't scrolling */
        @keyframes idleOrbit {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-15px, 10px) scale(1.03); }
        }

        /* --- HERO TEXT CONTENT LAYER --- */
        .hero-content {
          position: relative;
          z-index: 2; 
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 24px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
          max-width: 800px;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #a1a1aa;
          max-width: 600px;
          font-weight: 400;
        }
      `}</style>

      <div className="hero-container">
        {/* Background Visual Layer */}
        <div className="visual-canvas">
          <div
            className={`glow-element ${isScrolling ? "is-scrolling" : ""}`}
          />
        </div>

        {/* Foreground Content Sections */}
        <div className="hero-content">
          <h1 className="hero-title">
            We create software solutions that help businesses grow faster.
          </h1>
          <p className="hero-subtitle">
            Scroll down to explore our services, case studies, and modern tech
            stacks.
          </p>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Next-Gen AI Integrations & Scalable Architecture
          </h1>
          <p className="hero-subtitle">
            Reliable software architecture tailored for long-term business
            acceleration.
          </p>
        </div>
      </div>
    </>
  );
};

export default SoftwareHeroScroller;
