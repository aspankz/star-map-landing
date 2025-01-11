import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  text: string;
}

export const GalleryItem = ({ image, name, text }: Props) => {
  return (
    <div className="inline-flex h-[30.5rem] w-[16rem] flex-shrink-0 flex-col items-start justify-start gap-4 overflow-hidden rounded-xl bg-[#1f1b3a] pb-6">
      <Image
        className="w-full object-cover"
        src={image}
        alt={name}
        width={224}
        height={224}
      />
      <div className="space-y-1 px-3 font-medium">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="line-clamp-7 whitespace-pre-wrap break-words leading-5">
          {text}
        </p>
      </div>
    </div>
  );
};
