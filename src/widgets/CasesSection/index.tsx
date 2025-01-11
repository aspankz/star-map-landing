import React from 'react'
import { Case } from './Case'

const cases = [
  {
    image: '/images/cases/image1.jpg',
    title: 'Годовщина',
    description:
      'Звёзды над вами в день вашей годовщины — символ вечной любви и гармонии',
  },
  {
    image: '/images/cases/image2.jpg',
    title: 'День рождения',
    description: 'Звёздная карта как отражение дня, когда началась ваша история',
  },
  {
    image: '/images/cases/image3.jpg',
    title: 'Свадьба',
    description: 'Звёзды в момент, когда вы сказали друг другу «да»',
  },
  {
    image: '/images/cases/image4.jpg',
    title: 'Личные успехи',
    description: 'Звёзды вашего триумфа — от покупки дома до новых достижений',
  },
]

export const CasesSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center gap-8 pb-16 pt-10">
        <h2 className="px-4 text-center text-xl font-medium">
          Сохраняйте звёзды для ваших памятных событий
        </h2>
        <div className="no-scrollbar flex max-w-full justify-start gap-6 overflow-x-auto ps-4">
          {cases.map((caseItem) => (
            <Case key={caseItem.title} {...caseItem} />
          ))}
        </div>
      </div>
    </div>
  )
}
