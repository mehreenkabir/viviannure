import React from 'react';

export const Star = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a8c3d1" strokeWidth="1.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.82 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" />
  </svg>
);

export const Envelope = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a8c3d1" strokeWidth="1.5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3,7 12,13 21,7" />
  </svg>
);

export const VN = () => (
  <span style={{ fontVariant: 'small-caps', fontWeight: 600, color: '#a8c3d1', fontSize: '1.1em', letterSpacing: '0.08em' }}>vn</span>
);
