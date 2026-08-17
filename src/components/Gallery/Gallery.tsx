import React from 'react';
import styles from './Gallery.module.css';
import Image from 'next/image';

export const Gallery = () => {
  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Portafolio</span>
          <h2 className={styles.title}>Nuestro <em>Trabajo</em></h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image src="/images/1.jpg" alt="Precision Hair Style" fill className={styles.image} sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/images/2.jpg" alt="Color Treatment" fill className={styles.image} sizes="(max-width: 768px) 50vw, 27vw" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/images/3.jpg" alt="Styling Services" fill className={styles.image} sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        </div>
      </div>
    </section>
  );
};
