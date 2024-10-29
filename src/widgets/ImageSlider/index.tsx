"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

export const ImageSlider = () => {
  const images = ["/gallery/photo1.png", "/gallery/photo2.png"];

  return (
    <div className="relative max-w-[1100px] mx-auto px-[32px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-nextt",
          prevEl: ".swiper-button-prevv",
        }}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center  items-center"
          >
            <Image
              className="tablet:hidden object-cover"
              src={src}
              alt={`Slide ${index}`}
              width={505}
              height={404}
            />
            <Image
              className="tablet:block hidden object-cover"
              src={src}
              alt={`Slide ${index}`}
              width={224}
              height={280}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`swiper-button-prevv ${styles.alwaysVisible} cursor-pointer absolute top-1/2 -translate-y-1/2 left-0`}
      >
        <Image src="/icons/leftArrow.svg" alt="arrow" width={18} height={30} />
      </div>
      <div
        className={`swiper-button-nextt ${styles.alwaysVisible} cursor-pointer absolute top-1/2 -translate-y-1/2 right-0`}
      >
        <Image src="/icons/rightArrow.svg" alt="arrow" width={18} height={30} />
      </div>
    </div>
  );
};
