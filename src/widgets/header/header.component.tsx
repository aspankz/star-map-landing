'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { StarIcon } from '@/shared/ui/icons/Star'

// const links = [
//   {
//     name: "Как это работает?",
//     link: "#howItWorks",
//   },
//   {
//     name: "Галерея",
//     link: "#gallery",
//   },
// ];

export const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()

    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-surface px-3 py-4">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <Link onClick={scrollToTop} href={'/'}>
          <Image
            src={'/Cosmosmap_logo.svg'}
            alt="Cosmomap"
            height={25}
            width={144}
            priority
          />
        </Link>

        <Link
          href={'https://create.cosmomap.ru/constructor'}
          className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-white/20 px-6 py-2 tablet:px-2"
        >
          <StarIcon />
          <p className="tablet:hidden">Создать карту</p>
        </Link>
      </div>
    </div>
  )
}
