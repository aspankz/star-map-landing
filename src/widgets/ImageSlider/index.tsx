"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export const ImageSlider = () => {
  const images = ["/galery/photo1.png", "/galery/photo2.png"];

  return (
    <div className="relative px-[32px] max-w-[1100px] flex   justify-center ">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
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
          <SwiperSlide key={index}>
            <Image
              className="tablet:w-[200px] w-[404px]"
              src={src}
              alt={`Slide ${index}`}
              width={476}
              height={404}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prevv cursor-pointer absolute top-1/2 -translate-y-1/2 left-0">
        <Image src="/icons/leftArrow.svg" alt="arrow" width={18} height={30} />
      </div>
      <div className="swiper-button-nextt cursor-pointer absolute top-1/2 -translate-y-1/2 right-0">
        <Image src="/icons/rightArrow.svg" alt="arrow" width={18} height={30} />
      </div>
    </div>
  );
};
