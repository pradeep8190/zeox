import React from 'react';
import { DevicesCluster } from './DevicesCluster';
import './DevicesShowcase.css';

export const DevicesShowcase: React.FC = () => {
  return (
    <section className="devices-section">
      {/* 1. Section Header - Direct Full-Width Headline */}
      <div className="devices-header">
        <h2 className="devices-title">
          One Host Daemon. Every Screen You Own.
        </h2>
        <p className="devices-subtitle">
          Stream, command, and control your local AI agent from any device in sub-12ms real time.
        </p>
      </div>

      {/* 2. Devices Stage & Spatial Container */}
      <div className="devices-stage-container">
        <div className="stage-ambient-glow" />
        <div className="stage-grid-plane" />
        
        {/* Render Device Cluster Component */}
        <DevicesCluster />
      </div>
    </section>
  );
};
