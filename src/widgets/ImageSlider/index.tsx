'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import styles from './ImageSlider.module.css'
import { GalleryItem } from '../GallerySection/GalleryItem'
import { feedbacks } from '../GallerySection'

export const ImageSlider = () => {
  return (
    <div className="relative mx-auto w-[72rem] min-w-[18rem] px-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={{
          nextEl: '.swiper-button-nextt',
          prevEl: '.swiper-button-prevv',
        }}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {feedbacks.map((fb, index) => (
          <SwiperSlide key={index}>
            <GalleryItem {...fb} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`swiper-button-prevv ${styles.alwaysVisible} absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer`}
      >
        <Image src="/icons/leftArrow.svg" alt="arrow" width={18} height={30} />
      </div>
      <div
        className={`swiper-button-nextt ${styles.alwaysVisible} absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer`}
      >
        <Image src="/icons/rightArrow.svg" alt="arrow" width={18} height={30} />
      </div>
    </div>
  )
}
