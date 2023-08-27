import Image from "next/image";
import styles from "./AboutSection.module.scss";

export default function AboutSection({ content }) {
  return (
    <section id="aboutSection" className={styles.grid}>
      {content.map((child) => {
        return (
          <div className={styles.gridChild} key={child.id}>
            {child.isImage ? (
              <div className={styles.gridChildImgContainer}>
                <Image
                  src={child.img}
                  alt={child.alt}
                  fill
                  sizes="(min-width: 992px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className={styles.gridChildCopyContainer}>
                <h2>{child.title}</h2>
                <p>{child.copy}</p>
                <button
                  className={`${styles.btn} ${child.isPink && styles.pink}`}
                >
                  Learn More
                </button>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
