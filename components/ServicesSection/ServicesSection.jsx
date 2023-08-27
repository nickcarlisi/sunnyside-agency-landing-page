import Image from "next/image";
import styles from "./ServicesSection.module.scss";

export default function ServicesSection({ content }) {
  return (
    <section id="servicesSection" className={styles.flexContainer}>
      {content.map((child) => {
        return (
          <div className={styles.flexChild} key={child.id}>
            <div className={styles.imgContainer}>
              <Image
                src={child.img}
                alt={child.alt}
                fill
                sizes="(min-width: 992px) 100vw, 50vw"
              />
            </div>
            <div
              className={`${styles.copyContainer} ${
                child.isBlue && styles.blue
              }`}
            >
              <h3>{child.title}</h3>
              <p>{child.copy}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
