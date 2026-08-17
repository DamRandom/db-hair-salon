import React from 'react';
import styles from './Testimonials.module.css';

const reviews = [
  { name: 'Sarah J.', text: 'Absolutely love my new color. The team is incredibly talented and the salon experience is unlike anything else in Tampa.', rating: 5 },
  { name: 'Emily R.', text: 'Best haircut I\'ve ever had. They really listen and deliver beyond what you imagined.', rating: 5 },
  { name: 'Jessica M.', text: 'The atmosphere is luxurious and so relaxing. I feel like a completely new person every time I leave.', rating: 5 },
];

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>Client <em>Love</em></h2>
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
