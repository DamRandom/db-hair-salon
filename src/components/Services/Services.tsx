import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: 'Cortes de Cabello',
    price: 'Consulta',
    desc: 'Cortes personalizados que se adaptan a tu estilo, tipo de cabello y preferencias.'
  },
  {
    title: 'Balayage',
    price: 'Consulta',
    desc: 'Técnica de iluminación personalizada para lograr un resultado natural, luminoso y sofisticado.'
  },
  {
    title: 'Highlights',
    price: 'Consulta',
    desc: 'Mechas cuidadosamente diseñadas para aportar dimensión, luminosidad y profundidad al cabello.'
  },
  {
    title: 'Coloración',
    price: 'Consulta',
    desc: 'Color personalizado con técnicas profesionales para realzar tu estilo y mantener un acabado uniforme.'
  },
  {
    title: 'Alisado Capilar',
    price: 'Consulta',
    desc: 'Tratamientos profesionales para lograr un cabello más suave, manejable y con un acabado liso.'
  },
  {
    title: 'Tratamientos Capilares',
    price: 'Consulta',
    desc: 'Tratamientos de hidratación, botox y reparación para mejorar la apariencia, suavidad y vitalidad del cabello.'
  },
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