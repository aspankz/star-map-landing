import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Separator } from "@/shared/ui/button/separator";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-[16px] py-[32px] px-[16px]">
      <p className="text-[16px] text-text-subtitles text-center">
        Контакты для связи
      </p>
      <Link
        href="mailto:helpcosmomap@gmail.com?subject=Вопрос&body=Текст"
        className="cursor-pointer hover:scale-105 active:scale-95 duration-300"
      >
        <p className="text-[20px] font-medium">helpcosmomap@gmail.com</p>
      </Link>
      <Link
        className="cursor-pointer"
        target="_blank"
        href="https://t.me/cosmomapsupp"
      >
        <Image src="/icons/TG.svg" alt="telegram" width={136} height={40} />
      </Link>
      <Separator />
      <div className="text-[16px] text-text-subtitles text-center">
        <p>Чепурина Дарья Анатольевна</p>
        <p>425300104691</p>
      </div>
      <Link href={"/user-agreement"} className="cursor-pointer">
        <p className="text-[16px] underline text-text-subtitles text-center">
          Пользовтельское соглашение
        </p>
      </Link>
    </div>
  );
};

export default Footer;
