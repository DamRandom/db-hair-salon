import React from 'react';
import styles from './Testimonials.module.css';

const reviews = [
  { name: 'Sarah J.', text: 'Absolutamente me encanta mi nuevo color. El equipo es increíblemente talentoso y la experiencia en el salón es diferente a cualquier otra cosa en Tampa.', rating: 5 },
  { name: 'Emily R.', text: 'El mejor corte de cabello que he tenido. Realmente escuchan y superan lo que imaginabas.', rating: 5 },
  { name: 'Jessica M.', text: 'El ambiente es lujoso y muy relajante. Me siento como una persona completamente nueva cada vez que salgo.', rating: 5 },
];

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Testimonios</span>
          <h2 className={styles.title}>Clientes <em>Felices</em></h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.quoteMark}>"</span>
              <div className={styles.stars}>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.text}>{review.text}</p>
              <div className={styles.divider}></div>
              <h4 className={styles.name}>{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
