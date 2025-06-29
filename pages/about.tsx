
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AboutPage.module.css';
import { Star } from '../components/SacredSymbols';

const aboutText = [
  "My path is rooted in resonance; in music, in healing, in presence. Classically trained from childhood, I performed across Europe before I turned 18. Life then drew me into a nonlinear path of discovery, immersing me in ancient healing arts and the science of transformation.",
  "Over the past decade I have cultivated a rare, high-touch skill set for deep recalibration. I weaving vibrational medicine, voice, somatic attunement, and neuroplasticity into experiences where sacred meets science. Clients describe the work as bold, intuitive, and otherworldly. Some clients witness chromatic visions and profound shifts in awareness. These sessions are not treatments; they are rewiring rituals.",
  "Today I work privately with executives, artists, and visionaries ready to remember who they are and live from that place. The experiences are intimate, precise, and available by personal introduction or direct inquiry only.",
  "I call this work Resonant Rewiring: a return to the body’s innate intelligence and a remembering of wholeness."
];


export default function About() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>About — Vivian Nuré</title>
        <meta name="description" content="About Vivian Nuré — sacred, poetic, and luxurious experiences." />
      </Head>
      <nav className={styles.navBar}>{/* Navigation will be handled globally or here if needed */}</nav>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        <Star />
      </div>
      <motion.div
        className={styles.tagline}
        initial={{ opacity: 0, y: 10 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.42, 0, 0.58, 1] }}
      >
        <em>Where Cathedral Meets Temple. Where Science Meets Sacred.</em>
      </motion.div>
      <motion.div
        className={styles.aboutBody}
        initial={{ opacity: 0, y: 10 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
      >
        {aboutText.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <div style={{ marginTop: '2.5rem', textAlign: 'right', fontFamily: 'Cormorant Garamond, serif', color: '#d6c1b1', fontSize: '1.1rem', fontStyle: 'italic', letterSpacing: '0.04em' }}>
          – Vivian Nuré
        </div>
      </motion.div>
      <footer className={styles.footer}>
        <div>Thank you for arriving here. May your path be radiant.</div>
        <div>© 2025 Vivian Nuré.</div>
      </footer>
    </div>
  );
}
