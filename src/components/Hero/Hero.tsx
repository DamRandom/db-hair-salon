import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../Button/Button';

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Tampa, Florida</span>
        <h1 className="animate-fade-in">
          Where Style<br />
          Meets <em>Artistry.</em>
        </h1>
        <p className="animate-fade-in">
          A luxury hair sanctuary in the heart of Tampa. Expert stylists,
          premium products, and an experience crafted entirely for you.
        </p>
        <div className={styles.actions}>
          <Button>Book Appointment</Button>
          <Button variant="ghost">Our Services</Button>
        </div>
      </div>
    </section>
  );
};
