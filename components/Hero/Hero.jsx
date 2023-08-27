import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.heroImg}
        src="/images/desktop/image-header.jpg"
        alt="hero"
        fill
        sizes="100vw"
        priority
      />
      <div className={styles.heroText}>
        <h1>We are creatives</h1>
        <div className={styles.arrowContainer}>
          <a href="#aboutSection">
            <Image
              src="/images/icon-arrow-down.svg"
              alt="arrow icon"
              width={50}
              height={100}
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}
