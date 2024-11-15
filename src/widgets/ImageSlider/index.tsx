"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

const feedbacks = [
  {
    name: "Мария",
    text: "Парень подарил на годовщину нашей встречи, очень рада такому подарку, этот день действительно для меня особенный 😍",
    image: "/gallery/Photo 1.png",
  },
  {
    name: "Надежда",
    text: "Сделали подарок коллеге на день рождения, получилось очень необычно и эксклюзивно. Главное - не рассказывайте зачем вам нужно знать во сколько родился именинник!😉",
    image: "/gallery/Photo 2.png",
  },
  {
    name: "Анастасия ",
    text: `Шикарная картина,я в восторге ❤❤❤
Спасибо огромное,за эмоции 🤗`,
    image: "/gallery/Photo 3.png",
  },
  {
    name: "Екатерина ",
    text: "Заказала на День рождения для подруги звездную карту. Подруга была приятно удивлена такому подарку. Спасибо.☺",
    image: "/gallery/Photo 4.png",
  },
  {
    name: "Мария ",
    text: `Большое спасибо!!!
Не ожидала такой красоты)
Спасибо за вашу такую чудесную работу 🙏💕🙏💕🙏💕🙏`,
    image: "/gallery/Photo 5.png",
  },
  {
    name: "Елизавета",
    text: ` Почти что постоянными клиентами являемся) такой подарок всегда оценят и полюбят! Будем обращаться ещё! 
Подарком остались довольны!🥰`,
    image: "/gallery/Photo 6.png",
  },
  {
    name: "Александра",
    text: `Большое спасибо!!!
Не ожидала такой красоты)
Спасибо за вашу такую чудесную работу  `,
    image: "/gallery/Photo 7.png",
  },
  {
    name: "Алиса",
    text: `Картина бомба, спасибо большое за такой подарок, в наш прекрасный и радостный день свадьбы вы сделали нас счастливыми🫶`,
    image: "/gallery/Photo 8.png",
  },
  {
    name: "Владимир  ",
    text: `Большое спасибо❤
Хорошая работа, оперативно, быстро, качество
Рекомендую🔥🔥🔥`,
    image: "/gallery/Photo 9.png",
  },
  {
    name: "Юлия ",
    text: `Большое спасибо!!!
Не ожидала такой красоты)
Спасибо за вашу такую чудесную работу  `,
    image: "/gallery/Photo 10.png",
  },
];

export const ImageSlider = () => {
  return (
    <div className="relative max-w-[1100px] min-w-[290px] mx-auto px-[32px] ">
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
            slidesPerView: 4,
          },
        }}
      >
        {feedbacks.map((fb, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center  items-center"
          >
            <Image
              className=" object-cover"
              src={fb.image}
              alt={`Slide ${index}`}
              width={224}
              height={224}
            />
            <div className="h-[168px]   w-[224px]  bg-[#26292A] p-[12px]   space-y-[8px] font-medium ">
              <h3 className="text-[16px] ">{fb.name}</h3>
              <p className="text-[12px] line-clamp-7    leading-[16px] whitespace-pre-wrap break-words">
                {fb.text}
              </p>
            </div>
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
