'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/SacredVisuals.module.css';

import type { Variants } from 'framer-motion';

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: 'spring', duration: 2, bounce: 0 },
      opacity: { duration: 0.1 },
    },
  },
};

// A more profound, architectural visual for before the footer
export const ArchitecturalBreath: React.FC = () => (
  <motion.svg
    className={styles.architecturalSvg}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
  >
    {/* Central Arch */}
    <motion.path
      d="M 100 180 A 100 100 0 0 1 300 180"
      custom={0}
      variants={draw}
    />
    {/* Inner Rays */}
    <motion.path d="M 200 80 L 150 160" custom={1} variants={draw} />
    <motion.path d="M 200 80 L 250 160" custom={1.2} variants={draw} />
    {/* Outer Stained Glass Lines */}
    <motion.path d="M 200 80 L 50 120" custom={1.5} variants={draw} />
    <motion.path d="M 200 80 L 350 120" custom={1.7} variants={draw} />
  </motion.svg>
);

const SacredVisuals: React.FC = () => (
  <>
    {/* <DaintyShowcase /> Removed as requested */}
    <ArchitecturalBreath />
  </>
);

export default SacredVisuals;
