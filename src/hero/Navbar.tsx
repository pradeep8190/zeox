import React from 'react';
import { Logo } from './Logo';
import './Navbar.css';

const ArrowIcon = () => (
  <span className="nav-link-arrow" aria-hidden="true">
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </span>
);

export const Navbar: React.FC = () => {
  return (
    <header className="navbar-header">
      {/* Left Group: Logo + Interactive Expanding Links */}
      <div className="nav-left-group">
        <Logo variant="nav" />
        <nav className="nav-links">
          <a href="#protocol" className="nav-link">
            <span>Protocol</span>
            <ArrowIcon />
          </a>
          <a href="#telemetry" className="nav-link">
            <span>Telemetry</span>
            <ArrowIcon />
          </a>
          <a href="#docs" className="nav-link">
            <span>Docs</span>
            <ArrowIcon />
          </a>
          <a href="#changelog" className="nav-link">
            <span>Changelog</span>
            <ArrowIcon />
          </a>
        </nav>
      </div>

      {/* Right Group: 2 Buttons */}
      <div className="nav-right-group">
        <a href="#github" className="nav-btn-ghost">
          GitHub
        </a>
        <a href="#connect" className="nav-btn-primary">
          Connect
        </a>
      </div>
    </header>
  );
};
