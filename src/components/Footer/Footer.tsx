import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <Image
                src="/images/whitelogo.png"
                alt="DB Hair Salon"
                width={140}
                height={0}
                style={{
                  width: "140px",
                  height: "auto",
                }}
              />
            </div>

            <p>
              El destino en Tampa para el cuidado premium del cabello, color moderno y
              estilo personalizado.
            </p>
          </div>

          <div className={styles.links}>
            <span className={styles.columnTitle}>Navegar</span>
            <a href="#home">Inicio</a>
            <a href="#about">Nosotros</a>
            <a href="#services">Servicios</a>
            <a href="#gallery">Galería</a>
          </div>

          <div className={styles.social}>
            <span className={styles.columnTitle}>Síguenos</span>
            <a
              href="https://www.instagram.com/barreradalianny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/dalianny.barrera.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@daliannybarrera"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} DB Hair Salon. Todos los derechos
            reservados.
          </p>
          <span className={styles.bottomTagline}>
            Donde el estilo se une con el arte.
          </span>
        </div>
      </div>
    </footer>
  );
};