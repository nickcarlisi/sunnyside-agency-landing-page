"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav>
          <div className={`container ${styles.headerFlex}`}>
            <div className={styles.logoContainer}>
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={150}
                  height={30}
                  priority
                />
              </Link>
            </div>
            <div className={styles.hamburgerContainer} onClick={toggleMenu}>
              <Image
                src="/images/icon-hamburger.svg"
                alt="logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={styles.linksContainer}>
              <ul>
                <li>
                  <a href="#aboutSection">About</a>
                </li>
                <li>
                  <a href="#servicesSection">Services</a>
                </li>
                <li>
                  <a href="#testimonialsSection">Projects</a>
                </li>
                <li>
                  <a href="#">
                    <button className={styles.contactBtn}>Contact</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className={`${styles.mobileMenu} ${isMenuOpen && styles.active}`}>
          <div className={styles.mobileLinksContainer}>
            <ul>
              <li>
                <a href="#aboutSection" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#servicesSection" onClick={toggleMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonialsSection" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#">
                  <button
                    className={`${styles.mobileContactBtn} ${styles.contactBtn}`}
                    onClick={toggleMenu}
                  >
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
