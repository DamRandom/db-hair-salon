import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import { Button } from "../Button/Button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="DB Hair Salon"
              width={140}
              height={0}
              style={{
                width: "140px",
                height: "auto",
              }}
              priority
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className={styles.cta}>
          <Button>Book Now</Button>
        </div>
      </div>
    </header>
  );
};