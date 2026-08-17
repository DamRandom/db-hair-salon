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
          <span className={styles.eyebrow}>Nuestra historia</span>
          <h2 className={styles.title}>
            Un Santuario de<br /><em>Estilo y Lujo</em>
          </h2>
          <div className={styles.accentLine}></div>
          <p className={styles.text}>
            Ubicado en el corazón de Tampa, FL, DB Hair Salon es un destino para 
            quienes aprecian el arte de la belleza. Nuestros estilistas expertos 
            están dedicados a brindar una experiencia personalizada que resalte 
            tu resplandor natural.
          </p>
          <p className={styles.text}>
            Utilizando solo productos premium y las últimas técnicas, nos aseguramos 
            de que cada cliente se vaya sintiéndose seguro, elegante y completamente 
            él mismo.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Años de Experiencia</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5k+</span>
              <span className={styles.statLabel}>Clientes Felices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
