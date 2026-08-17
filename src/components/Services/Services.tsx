import React from 'react';
import styles from './Services.module.css';

const services = [
  { title: "Women's Haircut", price: 'from $65', desc: 'Precision cut tailored to your face shape and lifestyle.' },
  { title: "Men's Haircut", price: 'from $40', desc: 'Modern styling and grooming for a sharp, polished look.' },
  { title: 'Full Balayage', price: 'from $200', desc: 'Hand-painted highlights for a natural, sun-kissed effect.' },
  { title: 'Color Retouch', price: 'from $85', desc: 'Root touch-up to keep your color fresh and vibrant.' },
  { title: 'Keratin Treatment', price: 'from $250', desc: 'Smooth, frizz-free hair that lasts for months.' },
  { title: 'Hair Extensions', price: 'Consultation', desc: 'Premium quality extensions for added length and volume.' },
];

export const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>What we offer</span>
            <h2 className={styles.title}>
              Premium<br /><em>Services</em>
            </h2>
          </div>
          <p className={styles.subtitle}>
            Every service is designed around you — your hair, your lifestyle, 
            your vision.
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
