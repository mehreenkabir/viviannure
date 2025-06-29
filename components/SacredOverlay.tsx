import React from 'react';

const SacredOverlay: React.FC<{ open: boolean; onClick?: (e: React.MouseEvent<HTMLDivElement>) => void }> = ({ open, onClick }) => (
  <div
    aria-hidden={!open}
    onClick={onClick}
    style={{
      pointerEvents: open ? 'auto' : 'none',
      opacity: open ? 1 : 0,
      transition: 'opacity 0.5s cubic-bezier(0.42,0,0.58,1)',
      background: 'rgba(253,250,245,0.92)',
      position: 'fixed',
      inset: 0,
      zIndex: 150,
      backdropFilter: 'blur(2.5px)',
      willChange: 'opacity',
    }}
  />
);

export default SacredOverlay;
