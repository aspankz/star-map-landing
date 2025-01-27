import React from 'react'
import { ImageSlider } from '../ImageSlider'
import { GalleryItem } from './GalleryItem'

export const feedbacks = [
  {
    name: 'Мария',
    text: 'Парень подарил на годовщину нашей встречи, очень рада такому подарку, этот день действительно для меня особенный 😍',
    image: '/gallery/Photo 1.png',
  },
  {
    name: 'Надежда',
    text: 'Сделали подарок коллеге на день рождения, получилось очень необычно и эксклюзивно. Главное - не рассказывайте зачем вам нужно знать во сколько родился именинник!😉',
    image: '/gallery/Photo 2.png',
  },
  {
    name: 'Анастасия ',
    text: `Шикарная картина,я в восторге ❤❤❤
Спасибо огромное,за эмоции 🤗`,
    image: '/gallery/Photo 3.png',
  },
  {
    name: 'Екатерина ',
    text: 'Заказала на День рождения для подруги звездную карту. Подруга была приятно удивлена такому подарку. Спасибо.☺',
    image: '/gallery/Photo 4.png',
  },
  {
    name: 'Мария ',
    text: `Большое спасибо!!!
Не ожидала такой красоты)
Спасибо за вашу такую чудесную работу 🙏💕🙏💕🙏💕🙏`,
    image: '/gallery/Photo 5.png',
  },
  {
    name: 'Елизавета',
    text: ` Почти что постоянными клиентами являемся) такой подарок всегда оценят и полюбят! Будем обращаться ещё! 
Подарком остались довольны!🥰`,
    image: '/gallery/Photo 6.png',
  },
  {
    name: 'Александра',
    text: `Большое спасибо!!!
Не ожидала такой красоты)
Спасибо за вашу такую чудесную работу  `,
    image: '/gallery/Photo 7.png',
  },
  {
    name: 'Алиса',
    text: `Картина бомба, спасибо большое за такой подарок, в наш прекрасный и радостный день свадьбы вы сделали нас счастливыми🫶`,
    image: '/gallery/Photo 8.png',
  },
  {
    name: 'Владимир  ',
    text: `Большое спасибо❤
Хорошая работа, оперативно, быстро, качество
Рекомендую🔥🔥🔥`,
    image: '/gallery/Photo 9.png',
  },
  {
    name: 'Юлия ',
    text: `Большое спасибо!!!
Не ожидала такой красоты)
Спасибо за вашу такую чудесную работу  `,
    image: '/gallery/Photo 10.png',
  },
]

const GallerySection = () => {
  return (
    <div id="gallery" className="flex flex-col gap-8 px-4 py-16 tablet:px-0">
      <h2 className="text-center text-xl font-medium">Ваши звёздные моменты</h2>
      <div className="laptop:hidden mx-auto max-w-7xl tablet:w-[16rem]">
        <ImageSlider />
      </div>
      <div className="no-scrollbar laptop:flex hidden max-w-full justify-start gap-4 overflow-x-auto ps-4">
        {feedbacks.map((galleryItem) => (
          <GalleryItem key={galleryItem.name} {...galleryItem} />
        ))}
      </div>
    </div>
  )
}

export default GallerySection
