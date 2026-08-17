import React from 'react';
import styles from './Contact.module.css';
import { Button } from '../Button/Button';

export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.eyebrow}>Get in touch</span>
          <h2 className={styles.title}>
            Visit <em>Us</em>
          </h2>
          <div className={styles.accentLine}></div>
          <p className={styles.desc}>
            We're located in downtown Tampa. Walk in or book your appointment 
            online — we'd love to see you.
          </p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Address</span>
              <p>123 Luxury Ave, Tampa, FL 33602</p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Phone</span>
              <p>(813) 555-0199</p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Hours</span>
              <p>Mon – Fri: 9am – 8pm<br />Sat: 10am – 6pm<br />Sun: Closed</p>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <h3 className={styles.formTitle}>Send a Message</h3>
          <div className={styles.inputGroup}>
            <label htmlFor="contact-name">Full Name</label>
            <input id="contact-name" type="text" placeholder="Jane Doe" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="jane@example.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" placeholder="Tell us about your appointment..." rows={4} required></textarea>
          </div>
          <Button type="submit" style={{ width: '100%' }}>Send Message</Button>
        </form>
      </div>
    </section>
  );
};
