import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import InteractiveOfferings from '../components/InteractiveOfferings';
import TestimonialRiver from '../components/TestimonialRiver';
import SacredShowcase from '../components/SacredShowcase';
import ArchitecturalBreath from '../components/ArchitecturalBreath';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <>
      <Head>
        <title>Vivian Nuré</title>
        <meta name="description" content="A sacred, poetic, and luxurious online experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{ width: '100%' }}
      >
        <div className={styles.main}>
          <div style={{ width: '100%' }}>
            <SacredShowcase />
          </div>
          <motion.section className={styles.offeringsSection} variants={sectionVariants}>
            <h2 className={styles.sectionTitle}>Offerings</h2>
            <InteractiveOfferings />
          </motion.section>
          <motion.section className={styles.testimonialSection} variants={sectionVariants}>
            <h2 className={styles.sectionTitle}>Whispers</h2>
            <TestimonialRiver />
          </motion.section>
          <div style={{ width: '100%' }}>
            <ArchitecturalBreath />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
