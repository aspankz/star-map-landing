import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface ConstructorLinkProps {
  className?: string
  label: string
}

const ConstructorLink = ({ className, label }: ConstructorLinkProps) => {
  return (
    <Link
      className={clsx(
        `cursor-pointer rounded-full bg-button-actions2 text-[#090817] duration-300 ease-in-out hover:scale-105 active:scale-95 disabled:cursor-not-allowed`,
        className,
      )}
      href={'https://create.cosmomap.ru/constructor'}
    >
      {label}
    </Link>
  )
}

export default ConstructorLink
