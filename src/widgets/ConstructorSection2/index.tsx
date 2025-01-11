import ConstructorLink from '@/shared/ui/constructorLink'
import image from './images/bg.png'

import React from 'react'

const ConstructorSection2 = () => {
  return (
    <div className="flex w-full justify-center px-4">
      <div
        style={{ backgroundImage: `url(${image.src})` }}
        className="flex w-full max-w-[50rem] flex-col items-center gap-8 rounded-xl bg-[#021327] px-4 py-10"
      >
        <div className="flex max-w-[34rem] flex-col items-center gap-4">
          <h2 className="text-center text-2xl font-medium">
            Создайте звёздную карту прямо сейчас
          </h2>
          <p className="text-center text-lg">
            Сохраните звёздный момент навсегда или подарите уникальную память близкому
            человеку
          </p>
        </div>
        <ConstructorLink className="px-14 py-4 font-medium" label="Создать карту" />
      </div>
    </div>
  )
}

export default ConstructorSection2
