import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand Identity */}
          <div className="footer-brand">
            <div className="footer-logo">ZEOX</div>
            <p className="footer-desc">
              The remote agent bridge protocol connecting your local AI workloads to any device.
            </p>
          </div>

          {/* Minimal Link Columns */}
          <div className="footer-links-grid">
            <div className="footer-col">
              <span className="col-title">PRODUCT</span>
              <ul>
                <li><a href="#hero">Overview</a></li>
                <li><a href="#features">Dial Features</a></li>
                <li><a href="#devices">Device Mesh</a></li>
                <li><a href="#telemetry">Telemetry</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <span className="col-title">PROTOCOL</span>
              <ul>
                <li><a href="#relay">Sub-12ms Relay</a></li>
                <li><a href="#security">Zero-Trust</a></li>
                <li><a href="#crypto">AES-256 Encryption</a></li>
                <li><a href="#specs">Technical Specs</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <span className="col-title">DEVELOPERS</span>
              <ul>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#cli">CLI Daemon</a></li>
                <li><a href="#sdk">TypeScript SDK</a></li>
                <li><a href="#github">GitHub Repository</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <span className="col-title">LEGAL</span>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#security">Security Matrix</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <span className="copyright">© 2026 ZEOX Architecture Inc. All rights reserved.</span>

          <div className="footer-socials">
            <a href="#github" className="social-icon" title="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="#discord" className="social-icon" title="Discord">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 01.079.009c.12.098.246.195.373.288a.077.077 0 01-.006.127c-.598.35-1.22.652-1.873.893a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="#twitter" className="social-icon" title="X / Twitter">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
