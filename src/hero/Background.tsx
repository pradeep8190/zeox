import React from 'react';
import './Background.css';

export const Background: React.FC = () => {
  return (
    <div className="gradient-canvas">
      {/* Ambient Deep Space Base */}
      <div className="ambient-layer" />

      {/* Premium Spatial Grid Mesh */}
      <div className="grid-mesh-layer" />

      {/* Vector Silk Atmospheric Wave - Pure Studio Neutral Zinc (Zero Warmth, Zero Blue) */}
      <svg
        className="silk-sweep-svg"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Longitudinal Flow Gradient along the Ridge - Crisp Zinc Titanium */}
          <linearGradient id="ridgeColorGrad" x1="0%" y1="87%" x2="100%" y2="63%">
            <stop offset="0%" stopColor="#e4e4e7" />
            <stop offset="15%" stopColor="#d4d4d8" />
            <stop offset="30%" stopColor="#a1a1aa" />
            <stop offset="45%" stopColor="#71717a" />
            <stop offset="60%" stopColor="#52525b" />
            <stop offset="75%" stopColor="#3f3f46" />
            <stop offset="90%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>

          {/* Primary Liquid Satin Sheen - Crisp Neutral Cold White (No Warmth, No Blue) */}
          <linearGradient id="liquidSatinGrad1" x1="0%" y1="90%" x2="100%" y2="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="25%" stopColor="#f4f4f5" stopOpacity="0.68" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#e4e4e7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#71717a" stopOpacity="0.08" />
          </linearGradient>

          {/* Secondary Harmonic Satin Sheen - Specular Neutral Highlight */}
          <linearGradient id="liquidSatinGrad2" x1="5%" y1="95%" x2="95%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="35%" stopColor="#fafafa" stopOpacity="0.65" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="75%" stopColor="#e4e4e7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3f3f46" stopOpacity="0" />
          </linearGradient>

          {/* Upper Sky Atmosphere Dissolve - Pure Obsidian to Neutral Silver Haze */}
          <linearGradient id="upperSkyHazeGrad" x1="18%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="10%" stopColor="#09090b" stopOpacity="0.05" />
            <stop offset="25%" stopColor="#18181b" stopOpacity="0.12" />
            <stop offset="45%" stopColor="#27272a" stopOpacity="0.28" />
            <stop offset="65%" stopColor="#3f3f46" stopOpacity="0.65" />
            <stop offset="85%" stopColor="#71717a" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#a1a1aa" stopOpacity="1" />
          </linearGradient>

          {/* Full Bidirectional Silk Gradient - Neutral Zinc Spine */}
          <linearGradient id="crossSectionGradSmooth" x1="12%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="15%" stopColor="#09090b" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#18181b" stopOpacity="0.3" />
            <stop offset="45%" stopColor="#27272a" stopOpacity="0.58" />
            <stop offset="60%" stopColor="#3f3f46" stopOpacity="0.88" />
            <stop offset="68%" stopColor="#71717a" stopOpacity="0.98" />
            <stop offset="70%" stopColor="#a1a1aa" stopOpacity="1" />
            <stop offset="75%" stopColor="#71717a" stopOpacity="0.92" />
            <stop offset="85%" stopColor="#27272a" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Ultra-Wide Gaussian Blur Diffusers */}
          <filter id="softDiffuserSky" x="-70%" y="-90%" width="240%" height="280%" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="200" />
          </filter>

          <filter id="softDiffuserLarge" x="-50%" y="-70%" width="200%" height="240%" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="95" />
          </filter>

          <filter id="softDiffuserMid" x="-40%" y="-60%" width="180%" height="220%" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="45" />
          </filter>

          <filter id="satinGlowDiffuser" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="50" />
          </filter>

          <filter id="satinCoreDiffuser" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        {/* 1. Upper Sky Ambient Feather */}
        <path
          className="silk-layer-ambient"
          d="M -350,-150 Q 450,260 1300,100 L 1300,750 Q 450,900 -350,1100 Z"
          fill="url(#upperSkyHazeGrad)"
          opacity="0.9"
          filter="url(#softDiffuserSky)"
        />

        {/* 2. Broad Silk Uplift Body */}
        <path
          className="silk-layer-body"
          d="M -200,340 Q 480,500 1200,260 L 1200,820 Q 480,980 -200,1100 Z"
          fill="url(#crossSectionGradSmooth)"
          opacity="0.95"
          filter="url(#softDiffuserLarge)"
        />

        {/* 3. Soft Core Ridge Light Base Sweep */}
        <path
          className="silk-layer-ridge"
          d="M -100,880 Q 490,795 1100,625"
          stroke="url(#ridgeColorGrad)"
          strokeWidth="110"
          strokeLinecap="round"
          opacity="0.88"
          filter="url(#softDiffuserMid)"
        />

        {/* 4. Primary Liquid Satin Sheen Wave */}
        <path
          className="silk-satin-sheen-primary"
          d="M -100,880 Q 490,795 1100,625"
          stroke="url(#liquidSatinGrad1)"
          strokeWidth="85"
          strokeLinecap="round"
          filter="url(#satinGlowDiffuser)"
        />

        {/* 5. Secondary Satin Light Crest */}
        <path
          className="silk-satin-sheen-secondary"
          d="M -100,880 Q 490,795 1100,625"
          stroke="url(#liquidSatinGrad2)"
          strokeWidth="45"
          strokeLinecap="round"
          filter="url(#satinCoreDiffuser)"
        />
      </svg>

      {/* Velvety Smooth Atmospheric Noise Overlay */}
      <div className="targeted-noise-overlay" />
    </div>
  );
};
