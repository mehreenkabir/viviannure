
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import SacredShowcase from '../components/SacredShowcase';
import styles from '../styles/Home.module.css';
import ContactForm from '../components/ContactForm';
import contactStyles from '../styles/ContactForm.module.css';

const ContactPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact – Vivian Nuré</title>
        <meta name="description" content="Contact Vivian Nuré – a sacred, poetic, and luxurious threshold. All sessions by invitation only." />
      </Head>
      <main className={styles.main}>
        <div style={{ width: '100%' }}>
          <SacredShowcase />
        </div>
        <motion.div
          className={contactStyles.invitationBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{ display: 'block', marginBottom: '2.2rem', fontSize: '1.18rem', color: '#a8c3d1', fontStyle: 'normal', letterSpacing: '0.03em' }}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{ display: 'block', margin: '0 auto 1.2rem auto' }}><circle cx="19" cy="19" r="18" stroke="#d6c1b1" strokeWidth="1.2" opacity="0.18" /><circle cx="19" cy="19" r="10" stroke="#a8c3d1" strokeWidth="1" opacity="0.13" /></svg>
            The threshold is sacred.
          </span>
          This is not a formality. Every invitation is received with presence and care.<br /><br />
        </motion.div>
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactPage;
