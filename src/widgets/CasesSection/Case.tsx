import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  title: string
  description: string
}

export const Case = ({ image, title, description }: Props) => {
  return (
    <div className="inline-flex h-[24rem] w-[16rem] flex-shrink-0 flex-col items-start justify-start gap-4 overflow-hidden rounded-xl bg-[#1f1b3a] pb-6">
      <div className="inline-flex h-[14rem] w-[16rem] items-center justify-center">
        <Image className="w-[16rem]" src={image} alt="case" width={1024} height={1024} />
      </div>
      <div className="flex h-[108px] flex-col items-start justify-start gap-1 self-stretch px-3">
        <h4 className="text-xl font-medium">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
