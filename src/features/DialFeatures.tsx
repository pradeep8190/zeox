import React, { useState, useEffect, useRef } from 'react';
import './DialFeatures.css';

interface FeaturePillar {
  icon: React.ReactNode;
  label: string;
}

interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  pillars: FeaturePillar[];
}

const FEATURES: FeatureItem[] = [
  {
    id: 'feature-1',
    number: '01',
    title: 'Sub-12ms Neural Relay',
    description: 'Direct host-to-client encrypted tunnel bypassing intermediate cloud servers for real-time prompt feedback and hardware telemetry across all paired screens.',
    category: 'Core Engine // Protocol v2.4',
    pillars: [
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
        label: 'Sub-12ms Latency',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        label: 'End-to-End P2P',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
        label: 'Real-time Telemetry',
      },
    ],
  },
  {
    id: 'feature-2',
    number: '02',
    title: 'Connectivity through emotions',
    description: 'A timer for people who have trouble controlling their productive and free time because of poor time management and a lack of self-control.',
    category: 'Individual Project',
    pillars: [
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
        label: 'Story Boarding',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        ),
        label: 'Concept Ideation',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        ),
        label: 'Prototyping',
      },
    ],
  },
  {
    id: 'feature-3',
    number: '03',
    title: 'Zero-Knowledge Privacy',
    description: 'Every voice command, terminal execution, and active buffer is protected with AES-256 GCM encryption. Your model weights and conversation history never touch external servers.',
    category: 'Security Infrastructure // Zero-Trust',
    pillars: [
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
        label: 'AES-256 GCM',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        ),
        label: 'Local Only Logs',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="7.5" cy="15.5" r="5.5" />
            <path d="m21 2-9.6 9.6" />
            <path d="m15.5 7.5 3 3" />
          </svg>
        ),
        label: 'Ephemeral Tokens',
      },
    ],
  },
  {
    id: 'feature-4',
    number: '04',
    title: 'Omni-Screen Control Hub',
    description: 'Command your local AI workspace seamlessly. Switch between terminal SSH commands on MacBook, voice synthesis on mobile, and prompt canvas on tablet instantly.',
    category: 'User Experience // Multi-Display',
    pillars: [
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
        label: 'Multi-Screen Sync',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        ),
        label: 'Voice Stream',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        ),
        label: 'Daemon CLI',
      },
    ],
  },
];

export const DialFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto-advance step feature index unless user selects manually
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentFeature = FEATURES[activeIndex];

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="dial-features-track">
      <div className="dial-features-sticky">
        {/* RIGHT SIDE: Static Metallic Dial Image */}
        <div className="feature-right-dial">
          <img
            src="/dial.png"
            alt="ZEOX Dial"
            className="dial-img-static"
          />
        </div>

        {/* LEFT SIDE: Feature Card with Reference Grid Layout */}
        <div className="dial-features-container">
          <div className="feature-left-card">
            {/* Vertical Crosshair Line */}
            <div className="crosshair-v-line" />

            {/* 1. Giant Step Number */}
            <div className="feature-number-container">
              <span className="feature-number" key={`num-${currentFeature.id}`}>
                {currentFeature.number}
              </span>
            </div>

            {/* Top Horizontal Line */}
            <div className="crosshair-h-line-top" />

            {/* 2. Content Block */}
            <div className="feature-content-body" key={`content-${currentFeature.id}`}>
              <h2 className="feature-title">{currentFeature.title}</h2>
              <p className="feature-description">{currentFeature.description}</p>
              
              <div className="feature-category-row">
                <span className="feature-category-label">{currentFeature.category}</span>
              </div>
            </div>

            {/* Bottom Horizontal Line */}
            <div className="crosshair-h-line-bottom" />

            {/* 3. Bottom 3 Icon Pillars */}
            <div className="feature-pillars-grid">
              {currentFeature.pillars.map((pillar, idx) => (
                <div className="pillar-item" key={idx}>
                  <div className="pillar-icon-badge">{pillar.icon}</div>
                  <span className="pillar-label">{pillar.label}</span>
                </div>
              ))}
            </div>

            {/* 4. Step Navigation Bar */}
            <div className="step-navigation-bar">
              {FEATURES.map((feat, idx) => (
                <button
                  key={feat.id}
                  className={`step-nav-btn ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => handleStepClick(idx)}
                  title={`Go to feature ${feat.number}`}
                >
                  <span className="step-nav-num">{feat.number}</span>
                  <span className="step-nav-line" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
