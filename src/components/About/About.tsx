import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/daly.png" 
            alt="DB Hair Salon Styling" 
            width={500} 
            height={600} 
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Our story</span>
          <h2 className={styles.title}>
            A Sanctuary of<br /><em>Style & Luxury</em>
          </h2>
          <div className={styles.accentLine}></div>
          <p className={styles.text}>
            Located in the heart of Tampa, FL, DB Hair Salon is a destination 
            for those who appreciate the art of beauty. Our expert stylists 
            are dedicated to providing a personalized experience that enhances 
            your natural radiance.
          </p>
          <p className={styles.text}>
            Using only premium products and the latest techniques, we ensure 
            that every client leaves feeling confident, polished, and entirely 
            themselves.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5k+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
