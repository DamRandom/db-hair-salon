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
              Tampa&lsquos destination for premium hair care, modern color, and
              personalized style.
            </p>
          </div>

          <div className={styles.links}>
            <span className={styles.columnTitle}>Navigate</span>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div className={styles.social}>
            <span className={styles.columnTitle}>Follow Us</span>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} DB Hair Salon. All rights
            reserved.
          </p>
          <span className={styles.bottomTagline}>
            Where style meets artistry.
          </span>
        </div>
      </div>
    </footer>
  );
};