
import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent('Vivian Nuré Invitation Request');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:hello@viviannure.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.inviteLabel}>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.inviteLabel}>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.inviteLabel}>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </label>
      <button type="submit" className={styles.inviteButton}>
        Send Invitation Request
      </button>
    </form>
  );
}
