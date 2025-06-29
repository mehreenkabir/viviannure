import React from 'react';
import styles from '../styles/ArchitecturalBreath.module.css';

const ArchitecturalBreath: React.FC = () => (
  <div className={styles.breathWrapper}>
    <svg className={styles.breathSvg} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Layered arches */}
      <path d="M 40 120 Q 200 10 360 120" stroke="#d6c1b1" strokeWidth="2" fill="none" opacity="0.13" />
      <path d="M 80 120 Q 200 40 320 120" stroke="#a8c3d1" strokeWidth="1.2" fill="none" opacity="0.10" />
      {/* Rose window/mandala */}
      <circle cx="200" cy="80" r="24" stroke="#d6c1b1" strokeWidth="0.7" fill="none" opacity="0.09" />
      <circle cx="200" cy="80" r="38" stroke="#a8c3d1" strokeWidth="0.7" fill="none" opacity="0.07" />
      {/* Vertical lines with gradient opacity */}
      <linearGradient id="fadeLine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333333" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#333333" stopOpacity="0.01" />
      </linearGradient>
      <line x1="200" y1="30" x2="200" y2="120" stroke="url(#fadeLine)" strokeWidth="1" />
      <line x1="150" y1="60" x2="150" y2="120" stroke="url(#fadeLine)" strokeWidth="1" />
      <line x1="250" y1="60" x2="250" y2="120" stroke="url(#fadeLine)" strokeWidth="1" />
    </svg>
  </div>
);

export default ArchitecturalBreath;
