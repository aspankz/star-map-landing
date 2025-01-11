import Link from 'next/link'
import React from 'react'
import { Separator } from '@/shared/ui/separator'
import { TelegramIcon } from '@/shared/ui/icons/TelegramIcon'
import { InstagramIcon } from '@/shared/ui/icons/InstagramIcon'

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-8">
      <p className="text-center text-text-subtitles">Контакты для связи</p>
      <Link
        href="mailto:helpcosmomap@gmail.com?subject=Вопрос&body=Текст"
        className="cursor-pointer duration-300 hover:scale-105 active:scale-95"
      >
        <p className="text-xl font-medium">helpcosmomap@gmail.com</p>
      </Link>
      <div className="flex justify-center gap-4">
        <Link
          className="flex cursor-pointer items-center gap-2 rounded bg-white/20 p-2 ps-4 duration-150 ease-in-out hover:scale-105"
          target="_blank"
          href="https://t.me/cosmomapsupp"
        >
          <p>Телеграм</p>
          <TelegramIcon />
        </Link>
        <Link
          className="flex cursor-pointer items-center gap-2 rounded bg-white/20 p-2 ps-4 duration-150 ease-in-out hover:scale-105"
          target="_blank"
          href="https://www.instagram.com/cosmo.map"
        >
          <p>Инстаграм</p>
          <InstagramIcon />
        </Link>
        <Separator />
      </div>
      <div className="text-center font-medium">
        <p>Чепурина Дарья Анатольевна</p>
        <p>425300104691</p>
      </div>
      <Link href={'/user-agreement'} className="cursor-pointer">
        <p className="text-center font-medium underline">Пользовательское соглашение</p>
      </Link>
    </div>
  )
}

export default Footer
