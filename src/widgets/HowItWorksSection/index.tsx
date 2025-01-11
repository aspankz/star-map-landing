import React from 'react'
import Image from 'next/image'
import phoneImg from './images/phone.png'
import emailImg from './images/email.png'
import printImg from './images/print.png'
import { RightArrow } from '@/shared/ui/icons/RightArrow'

const HowItWorksSection = () => {
  return (
    <div id="howItWorks" className="flex flex-col items-center gap-8 px-4 pb-16 pt-10">
      <h2 className="text-center text-xl font-medium">Как это работает?</h2>
      <div className="flex w-full max-w-7xl items-center justify-center gap-6 tablet:flex-col">
        <div className="flex max-w-[16rem] flex-1 flex-col items-center gap-4">
          <Image
            src={phoneImg}
            alt="phone"
            width={1024}
            height={1024}
            className="w-[10rem]"
          />
          <p className="text-center">
            Выберите дату и место вашего события, настройте дизайн
          </p>
        </div>
        <RightArrow className="tablet:rotate-90" />
        <div className="flex max-w-[16rem] flex-1 flex-col items-center gap-4">
          <Image
            src={emailImg}
            alt="email"
            width={1024}
            height={1024}
            className="w-[10rem]"
          />
          <p className="text-center">
            Мгновенно получите файл и рекомендации по печати на e-mail
          </p>
        </div>
        <RightArrow className="tablet:rotate-90" />
        <div className="flex max-w-[16rem] flex-1 flex-col items-center gap-4">
          <Image
            src={printImg}
            alt="print"
            width={1024}
            height={1024}
            className="w-[10rem]"
          />
          <p className="text-center">
            Распечатайте файл в любом копицентре или типографии и оформите в рамку
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection
