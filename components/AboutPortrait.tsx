import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/AboutPortrait.module.css';

export default function AboutPortrait() {
  return (
    <motion.div
      className={styles.portraitWrapper}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <Image
        src="/about.jpeg"
        alt="Vivian Nuré portrait"
        width={340}
        height={420}
        className={styles.portraitImg}
        placeholder="blur"
        blurDataURL="/about.jpeg"
        priority
      />
    </motion.div>
  );
}
