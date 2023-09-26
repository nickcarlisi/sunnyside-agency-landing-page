import styles from "./TestimonialsSection.module.scss";
import Slider from "../Slider/Slider";

export default function TestimonialsSection({ content }) {
  return (
    <section id="testimonialsSection" className={styles.testimonialsSection}>
      <h2>Client Testimonials</h2>
      <Slider slides={content} />
    </section>
  );
}
