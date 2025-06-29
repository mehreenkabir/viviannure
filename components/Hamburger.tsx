import React from 'react';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}



const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => (
  <button
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    onClick={toggle}
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      margin: 0,
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 200,
      transition: 'color 0.5s cubic-bezier(0.42,0,0.58,1)',
    }}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
      {/* Hamburger icon */}
      <line x1="6" y1="10" x2="26" y2="10" opacity={isOpen ? 0 : 1} />
      <line x1="6" y1="16" x2="26" y2="16" opacity={isOpen ? 0 : 1} />
      <line x1="6" y1="22" x2="26" y2="22" opacity={isOpen ? 0 : 1} />
      {/* Moon icon */}
      {isOpen && (
        <g>
          <circle cx="16" cy="16" r="10" fill="#fdfaf5" stroke="#a8c3d1" strokeWidth="2" />
          <path d="M22 16c0 3.3-2.5 6-6 6 2.4-1.2 4-3.6 4-6s-1.6-4.8-4-6c3.5 0 6 2.7 6 6z" fill="#fdfaf5" stroke="#a8c3d1" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  </button>
);

export default Hamburger;
