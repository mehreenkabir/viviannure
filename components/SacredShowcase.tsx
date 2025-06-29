import React from 'react';
import styles from '../styles/SacredShowcase.module.css';

const SacredShowcase: React.FC = () => (
  <div className={styles.showcaseWrapper}>
    <svg className={styles.showcaseSvg} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main arch */}
      <path d="M 50 120 Q 200 10 350 120" stroke="#d6c1b1" strokeWidth="2" fill="none" opacity="0.18" />
      {/* Inner arch */}
      <path d="M 90 120 Q 200 40 310 120" stroke="#a8c3d1" strokeWidth="1.2" fill="none" opacity="0.13" />
      {/* Vertical dividers */}
      <line x1="200" y1="30" x2="200" y2="120" stroke="#333333" strokeWidth="0.7" opacity="0.10" />
      <line x1="120" y1="60" x2="120" y2="120" stroke="#a8c3d1" strokeWidth="0.7" opacity="0.10" />
      <line x1="280" y1="60" x2="280" y2="120" stroke="#a8c3d1" strokeWidth="0.7" opacity="0.10" />
      {/* Mandala lines */}
      <circle cx="200" cy="80" r="18" stroke="#d6c1b1" strokeWidth="0.7" fill="none" opacity="0.09" />
      <circle cx="200" cy="80" r="32" stroke="#a8c3d1" strokeWidth="0.7" fill="none" opacity="0.07" />
    </svg>
  </div>
);

export default SacredShowcase;
