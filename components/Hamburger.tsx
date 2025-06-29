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
    }}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
      <line x1="6" y1="10" x2="26" y2="10" opacity={isOpen ? 0 : 1} />
      <line x1="6" y1="16" x2="26" y2="16" opacity={isOpen ? 0 : 1} />
      <line x1="6" y1="22" x2="26" y2="22" opacity={isOpen ? 0 : 1} />
    </svg>
  </button>
);

export default Hamburger;
