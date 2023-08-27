import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      alt: "facebook logo",
      url: "https://www.facebook.com/",
      img: "/images/icon-facebook.svg",
    },
    {
      id: 2,
      alt: "instagram logo",
      url: "https://www.instagram.com/",
      img: "/images/icon-instagram.svg",
    },
    {
      id: 3,
      alt: "twitter logo",
      url: "https://twitter.com/",
      img: "/images/icon-twitter.svg",
    },
    {
      id: 4,
      alt: "pinterest logo",
      url: "https://www.pinterest.com/",
      img: "/images/icon-pinterest.svg",
    },
  ];

  return (
    <footer className={styles.footer}>
      <nav>
        <div className={`container ${styles.footerFlex}`}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/images/footer_logo.svg"
                alt="logo"
                width={150}
                height={30}
              />
            </Link>
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
            </ul>
          </div>
          <div className={styles.socialLinksContainer}>
            {socialLinks.map((link) => {
              return (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.id}
                >
                  <Image
                    className={styles.socialLogo}
                    src={link.img}
                    alt={link.alt}
                    width={30}
                    height={30}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </footer>
  );
}
