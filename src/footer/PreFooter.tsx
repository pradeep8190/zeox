import React, { useState } from 'react';
import './PreFooter.css';

export const PreFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('npx zeox-daemon@latest start');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="prefooter-section">
      <div className="prefooter-content">
        <h2 className="prefooter-title">
          Start controlling your local AI today.
        </h2>
        <p className="prefooter-subtitle">
          Connect your workstation daemon to any device in seconds. Zero infrastructure required.
        </p>

        {/* Minimal Code Pill */}
        <div className="prefooter-code-pill">
          <code className="code-text">npx zeox-daemon@latest start</code>
          <button className="code-copy-btn" onClick={copyCommand}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        {/* Action Group */}
        <div className="prefooter-actions">
          <button className="btn-primary">
            Connect Agent
          </button>
          <button className="btn-secondary">
            <span>Documentation</span>
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
