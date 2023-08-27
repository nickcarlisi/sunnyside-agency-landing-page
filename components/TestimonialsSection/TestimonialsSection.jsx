import Image from "next/image";
import styles from "./TestimonialsSection.module.scss";

export default function TestimonialsSection({ content }) {
  return (
    <section id="testimonialsSection" className={styles.testimonialsSection}>
      <h4>Client Testimonials</h4>

      <div className={styles.flexContainer}>
        {content.map((child) => {
          return (
            <div className={styles.flexChild} key={child.id}>
              <div className={styles.imgContainer}>
                <Image
                  src={child.img}
                  alt="client image"
                  height={72}
                  width={72}
                />
              </div>
              <div className={styles.copyContainer}>
                <p className={styles.quote}>{child.copy}</p>
                <h5>{child.name}</h5>
                <p className={styles.title}>{child.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
