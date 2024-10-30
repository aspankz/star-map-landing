import { Button } from "@/shared/ui/button";
import Link from "next/link";
import React from "react";

const ConstructorSection = () => {
  return (
    <div className='bg-[url("/Background.png")] bg-no-repeat space-y-[32px] flex flex-col items-center bg-cover w-full px-[24px] py-[80px] '>
      <div className="space-y-[24px]">
        <div className="text-[40px] leading-none font-bold w-full text-center">
          <h2>Звёздная карта</h2>
          <h2>по вашей дате и месту</h2>
        </div>
        <div className="text-[20px] leading-none text-text-subtitles w-full text-center">
          <p>Сохраните ваш особенный день на звёздной карте —</p>
          <p>будь то свадьба, день рождения или годовщина.</p>
        </div>
      </div>
      <Button className="w-max px-[32px] py-[24px] tablet:py-[16px]" primary>
        <Link href={"https://create.cosmomap.ru/constructor"}>
          Создать карту
        </Link>
      </Button>
    </div>
  );
};

export default ConstructorSection;
