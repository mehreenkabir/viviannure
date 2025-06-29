import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const iconStyles = {
  width: '24px',
  height: '24px',
  stroke: '#333333',
  strokeWidth: 1,
  fill: 'none',
  transition: 'stroke 0.3s ease',
};

export const Star = () => (
  <svg style={iconStyles} viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.82 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const Envelope = () => (
  <svg style={iconStyles} viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

interface NavIconProps {
  name: string;
  isActive: boolean;
}

const NavIcons: React.FC<NavIconProps> = ({ name, isActive }) => {
  const getIcon = () => {
    switch (name) {
      case 'Offerings':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2 L14.09 8.26 L20.5 9.27 L15.5 13.97 L17.18 20.24 L12 17.27 L6.82 20.24 L8.5 13.97 L3.5 9.27 L9.91 8.26 L12 2 Z" />
          </svg>
        );
      case 'About':
        return <span style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>vn</span>;
      case 'Contact':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.8 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div variants={iconVariants} initial="hidden" animate="visible" exit="hidden">
          {getIcon()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavIcons;
