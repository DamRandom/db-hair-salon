import React from 'react';
import styles from './Services.module.css';

const services = [
  { title: "Corte de Mujer", price: 'desde $65', desc: 'Corte de precisión adaptado a la forma de tu rostro y estilo de vida.' },
  { title: "Corte de Hombre", price: 'desde $40', desc: 'Estilo moderno y arreglo para un aspecto elegante y definido.' },
  { title: 'Balayage Completo', price: 'desde $200', desc: 'Reflejos pintados a mano para un efecto natural y besado por el sol.' },
  { title: 'Retoque de Color', price: 'desde $85', desc: 'Retoque de raíces para mantener tu color fresco y vibrante.' },
  { title: 'Tratamiento de Queratina', price: 'desde $250', desc: 'Cabello suave y sin frizz que dura meses.' },
  { title: 'Extensiones de Cabello', price: 'Consulta', desc: 'Extensiones de calidad premium para mayor longitud y volumen.' },
];

export const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>Lo que ofrecemos</span>
            <h2 className={styles.title}>
              Servicios<br /><em>Premium</em>
            </h2>
          </div>
          <p className={styles.subtitle}>
            Cada servicio está diseñado pensando en ti: tu cabello, tu estilo de vida, 
            tu visión.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <span className={styles.price}>{service.price}</span>
              </div>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
