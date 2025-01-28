import ConstructorLink from '@/shared/ui/constructorLink'
import Image from 'next/image'

import React from 'react'

const ConstructorSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center gap-8 px-2 pb-14">
        <div className="relative h-80 w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/starmap3.jpg"
            alt="constructor"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-medium">
              Звёздная карта вашего особенного момента
            </h2>
            <p className="text-lg">
              Создайте уникальный подарок, который навсегда сохранит память о важном дне
            </p>
          </div>
          <ConstructorLink
            label="Создать звёздную карту "
            className="px-6 py-4 font-medium"
          />
        </div>
      </div>
    </div>
  )
}

export default ConstructorSection
