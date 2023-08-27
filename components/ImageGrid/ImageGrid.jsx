import Image from "next/image";
import styles from "./ImageGrid.module.scss";

export default function ImageGrid({ content }) {
  return (
    <section className={styles.imageGrid}>
      <div className={styles.gridContainer}>
        {content.map((child) => {
          return (
            <div className={styles.imgContainer} key={child.id}>
              <Image
                src={child.img}
                alt={child.alt}
                fill
                sizes="(min-width: 992px) 25vw, 50vw"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
