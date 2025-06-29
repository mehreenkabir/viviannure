'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Header.module.css';
import sacredMenuStyles from '../styles/SacredMenu.module.css';
import Hamburger from './Hamburger';
import SacredOverlay from './SacredOverlay';
import { Star, Envelope, VN } from './SacredSymbols';

const navItems = [
  { name: 'Offerings', path: '/', symbol: <Star /> },
  { name: 'About', path: '/about', symbol: <VN /> },
  { name: 'Contact', path: '/contact', symbol: <Envelope /> },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeSymbol, setActiveSymbol] = useState<string | null>(null);

  React.useEffect(() => {
    // On route change, set the active symbol to the current page
    const found = navItems.find((item) => item.path === router.asPath);
    setActiveSymbol(found ? found.name : null);
    setOpen(false);
  }, [router.asPath]);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Trap focus and close on Escape
  React.useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  const handleMenuClick = (name: string) => {
    setActiveSymbol(name);
    setOpen(false);
  };

  // Only close menu if overlay (not altar) is clicked
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('sacredOverlay')) {
      setOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Vivian Nuré</h1>
      </div>
      <div style={{ marginLeft: 'auto', zIndex: 200, display: 'flex', alignItems: 'center' }}>
        <Hamburger isOpen={open} toggle={() => setOpen((v) => !v)} />
      </div>
      <AnimatePresence>
        {open && (
          <>
            <div className="sacredOverlay">
              <SacredOverlay open={open} onClick={handleOverlayClick} />
            </div>
            <motion.nav
              className={sacredMenuStyles.sacredMenu}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 60, damping: 18 }}
              style={{ pointerEvents: 'auto' }}
            >
              <div className={sacredMenuStyles.menuAltar} tabIndex={-1}>
                <ul className={sacredMenuStyles.menuList}>
                  {navItems.map((item) => (
                    <li key={item.name} className={sacredMenuStyles.menuItem}>
                      <Link
                        href={item.path}
                        className={sacredMenuStyles.menuItem}
                        style={{
                          color: '#333333',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          width: '100%',
                          background: 'none',
                        }}
                        onClick={() => handleMenuClick(item.name)}
                        tabIndex={open ? 0 : -1}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {activeSymbol === item.name ? (
                            <motion.span
                              className={sacredMenuStyles.menuSymbol}
                              key="symbol"
                              initial={{ opacity: 0, scale: 0.7 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.7 }}
                              transition={{ duration: 0.6 }}
                            >
                              {item.symbol}
                            </motion.span>
                          ) : (
                            <motion.span
                              key="text"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.5 }}
                            >
                              {item.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
