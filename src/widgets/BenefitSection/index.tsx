import React from 'react'
import { Benefit } from './Benefit'

const benefits = [
  {
    image: '/images/benefits/image1.png',
    title: 'Создание за 5 минут',
    description: 'Настройте свою звездную карту со смартфона или компьютера',
  },
  {
    image: '/images/benefits/image2.png',
    title: 'Уникальный дизайн',
    description: 'Выберите стиль, цвета и добавьте персональное послание',
  },
  {
    image: '/images/benefits/image3.png',
    title: 'Мгновенный доступ',
    description: 'Получите файл с картой сразу после заказа на email',
  },
  {
    image: '/images/benefits/image4.png',
    title: 'Просто распечатать',
    description:
      'Распечатайте карту в любом копицентре и оформите в рамку из магазинов декора или на маркетплейсах',
  },
  {
    image: '/images/benefits/image5.png',
    title: 'Астрономическая точность',
    description:
      'Используем данные Йельского каталога, чтобы звёзды на карте точно отражали их положение в выбранный момент',
  },
]

export const BenefitSection = () => {
  return (
    <div className="flex w-full justify-center bg-[#1f1b3a] px-4 py-10">
      <div className="flex w-full max-w-7xl flex-col items-center gap-8">
        <h2 className="text-2xl font-medium">Ваши звёзды — наша забота</h2>
        <div className="grid grid-cols-2 gap-10 tablet:grid-cols-1">
          {benefits.map((benefit) => (
            <Benefit key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  )
}
