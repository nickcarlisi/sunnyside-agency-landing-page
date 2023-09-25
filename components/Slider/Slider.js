"use client";

import styles from "./Slider.module.scss";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Navigation, A11y, EffectFade, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

function Slider({ slides }) {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const swiperRef = useRef();

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   // tl.current = gsap.timeline({ paused: true }); //timeline syntax

  //   gsap.fromTo(
  //     swiperRef.current,
  //     {
  //       autoAlpha: 0,
  //       scale: 1.1,
  //     },
  //     {
  //       scale: 1,
  //       autoAlpha: 1,
  //       duration: 2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         //scrolltrigger if needed.
  //         trigger: swiperRef.current,
  //         start: "top 80%",
  //         end: "bottom 0%",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section>
      <div className={styles.sliderWrapper}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y, EffectFade, Autoplay, Pagination]}
          slidesPerView={4}
          // effect="fade"
          spaceBetween={30}
          speed={800}
          autoplay={{
            delay: 4000,
          }}
          loop={true}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className={styles.swiper}
          ref={swiperRef}
        >
          {slides.map((item) => {
            const { img, index } = item;
            return (
              <SwiperSlide key={item.id} className={styles.slideContainer}>
                <a href={item.permalink} target="_blank">
                  {item.media_type === "VIDEO" ? (
                    <video className={styles.sliderImg} muted>
                      <source src={item.media_url} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      className={styles.sliderImg}
                      // src={`${item.media_url.toString()}`}
                      src={item.media_url}
                      alt={""}
                      fill
                      priority={true}
                      rel="preload"
                    />
                  )}
                </a>
              </SwiperSlide>
            );
          })}

          <div
            className={`${styles.swiperNav} ${styles.swiperNavPrev}`}
            ref={swiperNavPrevRef}
          ></div>
          <div
            className={`${styles.swiperNav} ${styles.swiperNavNext}`}
            ref={swiperNavNextRef}
          ></div>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
