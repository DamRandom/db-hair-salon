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
          Donde el Estilo<br />
          se une con el <em>Arte.</em>
        </h1>
        <p className="animate-fade-in">
          Un santuario de lujo para tu cabello en el corazón de Tampa. Estilistas expertos,
          productos premium y una experiencia creada exclusivamente para ti.
        </p>
        <div className={styles.actions}>
          <Button>Reservar Cita</Button>
          <Button variant="ghost">Nuestros Servicios</Button>
        </div>
      </div>
    </section>
  );
};
