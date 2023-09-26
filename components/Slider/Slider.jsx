"use client";

import styles from "./Slider.module.scss";
import { useRef } from "react";
import Image from "next/image";
import { Navigation, A11y, EffectFade, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Slider({ slides }) {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const swiperRef = useRef();

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, EffectFade, Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
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
          return (
            <SwiperSlide key={item.id} className={styles.slideContainer}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.sliderImg}
                  src={item.img}
                  alt={item.name}
                  fill
                  priority={true}
                  rel="preload"
                />
              </div>
              <p className={styles.quote}>{item.quote}</p>
              <h5 className={styles.name}>{item.name}</h5>
              <p className={styles.title}>{item.title}</p>
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
  );
}

export default Slider;
