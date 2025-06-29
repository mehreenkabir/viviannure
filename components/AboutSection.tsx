import { motion } from 'framer-motion';
import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        About Vivian Nuré
      </motion.h1>
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
      >
        <p>
          Vivian Nuré is a sacred space for those seeking poetic transformation, gentle presence, and the luxury of true attention. Every offering, every ritual, and every moment is crafted with reverence for the soul’s journey.
        </p>
        <p>
          Here, science softens into spirit. Ceremony becomes art. The ordinary is made luminous through intention, sound, and touch.
        </p>
        <p className={styles.signature}>
          — Vivian Nuré
        </p>
      </motion.div>
    </section>
  );
}
