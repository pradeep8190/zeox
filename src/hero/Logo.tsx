import React from 'react';
import './Logo.css';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'default' | 'nav';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  style,
  variant = 'default',
}) => {
  const isNav = variant === 'nav';

  return (
    <div className={`logo-wrapper ${isNav ? 'nav-size' : ''} ${className}`} style={style}>
      <div className="logo-container">
        {/* Ambient center atmospheric glow */}
        <div className="ambient-glow" />

        {/* Planetary curved horizon light beam */}
        <svg
          className="horizon-arc"
          viewBox="0 0 400 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arcGlowGradNav" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="48%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="52%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id="softGlowNav" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Tapered curved planetary crescent path */}
          <path
            d="M 10,62 Q 200,8 390,62 Q 200,12 10,62 Z"
            fill="url(#arcGlowGradNav)"
            filter="url(#softGlowNav)"
          />

          {/* Core crisp light beam center line with soft opacity */}
          <path
            d="M 28,60 Q 200,10 372,60"
            stroke="url(#arcGlowGradNav)"
            strokeWidth="1.0"
            strokeLinecap="round"
          />
        </svg>

        {/* Logo Text */}
        <div className="logo-text">
          zeo<span className="x-char">X</span>
        </div>
      </div>
    </div>
  );
};
