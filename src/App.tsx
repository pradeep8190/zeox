import { useState, useEffect } from 'react';
import { Hero } from './hero/Hero';
import { DialFeatures } from './features/DialFeatures';
import { DevicesShowcase } from './devices/DevicesShowcase';
import { PreFooter } from './footer/PreFooter';
import { Footer } from './footer/Footer';
import './App.css';

export function App() {
  const [heroTransform, setHeroTransform] = useState({ scale: 1, opacity: 1 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY <= windowHeight * 1.2) {
        const progress = Math.min(1, Math.max(0, scrollY / windowHeight));
        // Parallax curtain effect: Hero scales down slightly (1 -> 0.93) and fades (1 -> 0.4)
        const scale = 1 - progress * 0.07;
        const opacity = 1 - progress * 0.6;
        setHeroTransform({ scale, opacity });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="app-main">
      {/* Sticky Background Hero Section */}
      <div
        className="hero-curtain-wrapper"
        style={{
          transform: `scale(${heroTransform.scale})`,
          opacity: heroTransform.opacity,
        }}
      >
        <Hero />
      </div>

      {/* Foreground Curtain Reveal Layer (Slides UP over top of Hero) */}
      <div className="curtain-reveal-layer">
        <DevicesShowcase />
        <DialFeatures />
        <PreFooter />
        <Footer />
      </div>
    </main>
  );
}

export default App;
