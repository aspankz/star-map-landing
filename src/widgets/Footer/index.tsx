import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Separator } from "@/shared/ui/button/separator";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-[32px] py-[32px] px-[16px]">
      <p className="text-[16px] text-text-subtitles text-center">
        По вопросам о возврате или внесении изменений в заказ
      </p>
      <div className="flex gap-[16px] justify-center items-center">
        <Link
          href="mailto:help@cosmomap.ru?subject=Вопрос&body=Текст"
          className="cursor-pointer hover:scale-105 active:scale-95 duration-300"
        >
          <p className="text-[20px] font-medium">help@cosmomap.ru</p>
        </Link>
        <Link
          className="cursor-pointer"
          target="_blank"
          href="https://t.me/cosmosmap"
        >
          <Image src="/icons/TG.svg" alt="telegram" width={40} height={40} />
        </Link>
      </div>
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
