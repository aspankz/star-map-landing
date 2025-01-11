import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  title: string
  description: string
}

export const Benefit = ({ image, title, description }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="h-14 w-14 rounded-lg"
        src={image}
        alt="benefit"
        width={1024}
        height={1024}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold leading-tight">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
