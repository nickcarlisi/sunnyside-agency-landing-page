import styles from "./TestimonialsSection.module.scss";
import Slider from "../Slider/Slider";

export default function TestimonialsSection({ content }) {
  return (
    <section id="testimonialsSection" className={styles.testimonialsSection}>
      <h4>Client Testimonials</h4>
      <Slider slides={content} />
    </section>
  );
}
