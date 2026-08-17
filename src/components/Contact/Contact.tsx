"use client";
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Button } from '../Button/Button';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Ingresa un correo válido.';
      valid = false;
    }

    if (!message.trim()) {
      newErrors.message = 'El mensaje es obligatorio.';
      valid = false;
    } else if (message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const text = `Hola, mi nombre es ${name}. Mi email es ${email}. Mensaje: ${message}`;
      window.open(`https://wa.me/19412502208?text=${encodeURIComponent(text)}`, '_blank');
    }
  };
  
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.eyebrow}>Contáctanos</span>
          <h2 className={styles.title}>
            Visítan<em>os</em>
          </h2>
          <div className={styles.accentLine}></div>
          <p className={styles.desc}>
            Estamos ubicados en el centro de Tampa. Ven sin cita o reserva en línea 
            — nos encantaría verte.
          </p>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Teléfono</span>
              <p>+1 941-250-2208</p>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Horario</span>
              <p>
                Lun – Vie: 9am – 8pm<br />
                Sáb: 10am – 6pm<br />
                Dom: Cerrado
              </p>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Enviar un Mensaje</h3>

          <div className={styles.inputGroup}>
            <label htmlFor="contact-name">Nombre Completo</label>
            <input 
              id="contact-name" 
              type="text" 
              placeholder="Jane Doe" 
              className={errors.name ? styles.inputError : ''}
              value={name} 
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
              }} 
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="contact-email">Correo Electrónico</label>
            <input 
              id="contact-email" 
              type="text" 
              placeholder="jane@example.com" 
              className={errors.email ? styles.inputError : ''}
              value={email} 
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
              }} 
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="contact-message">Mensaje</label>
            <textarea 
              id="contact-message" 
              placeholder="Cuéntanos sobre tu cita..." 
              rows={4} 
              className={errors.message ? styles.inputError : ''}
              value={message} 
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
              }}
            ></textarea>
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
          </div>

          <Button type="submit" style={{ width: '100%' }}>
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};