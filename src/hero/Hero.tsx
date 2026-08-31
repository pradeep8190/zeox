import React from 'react';
import { Background } from './Background';
import { Navbar } from './Navbar';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* 1. Direct Minimal Header (Center Logo + 2 Left & 2 Right Links) */}
      <Navbar />

      {/* 2. Background Silk Atmosphere */}
      <Background />

      {/* 3. Hero Content */}
      <div className="hero-content">
        {/* Top Minimal Announcement Badge */}
        <div className="hero-badge" role="button" tabIndex={0}>
          <span className="badge-dot">
            <span className="badge-dot-ping" />
          </span>
          <span className="badge-title">ZEOX PROTOCOL</span>
          <span className="badge-divider" />
          <span className="badge-sub">Remote Agent Bridge</span>
          <span className="badge-action-reveal">
            <span>Explore</span>
            <svg
              className="badge-arrow-icon"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
          <span className="badge-shimmer-beam" />
        </div>

        {/* Clean, Elegant Heading in Ubuntu Sans 400 */}
        <h1 className="hero-title">
          Access your personal agent from everywhere.
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Securely talk to and control the AI agent running on your local machine from any phone, tablet, or browser with real-time hardware telemetry.
        </p>

        {/* CTA Group */}
        <div className="hero-cta-group">
          <button className="btn-primary">
            Connect Agent
          </button>
          <button className="btn-secondary">
            <span>Read Documentation</span>
            <svg
              className="btn-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
