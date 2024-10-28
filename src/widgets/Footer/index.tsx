import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Separator } from "@/shared/ui/button/separator";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-[32px] py-[32px] px-[16px]">
      <p className="text-[16px] text-text-subtitles text-center">
        По вопросам о возвратеили внесении изменений в заказ
      </p>
      <div className="flex gap-[16px] justify-center items-center">
        <p className="text-[20px]">help@cosmomap.ru</p>
        <Link href="https://t.me/">
          <Image src="/icons/TG.svg" alt="telegram" width={24} height={24} />
        </Link>
      </div>
      <Separator />
      <div className="text-[16px] text-text-subtitles text-center">
        <p>Чепурина Дарья Анатольевна</p>
        <p>425300104691</p>
      </div>
    </div>
  );
};

export default Footer;
