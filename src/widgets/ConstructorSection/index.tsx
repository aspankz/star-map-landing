import Link from "next/link";
import React from "react";

const ConstructorSection = () => {
  return (
    <div className='bg-[url("/Background.png")] bg-no-repeat space-y-[32px] flex flex-col items-center bg-cover w-full px-[24px] py-[80px] '>
      <div className="space-y-[24px]">
        <div className="text-[40px] leading-none font-bold w-full text-center">
          <h2>Звёздная карта вашего </h2>
          <h2>особенного момента</h2>
        </div>
        <div className="text-[20px] leading-none text-text-subtitles w-full text-center">
          <p>Зафиксируйте вселенную в день, который вам дорог —</p>
          <p>будь то свадьба, день рождения или годовщина.</p>
        </div>
      </div>
      <Link
        className="px-[32px] rounded-full text-[20px] py-[24px]  cursor-pointer duration-300 disabled:cursor-not-allowed hover:scale-105 active:scale-95 ease-in-out bg-button-action "
        href={"https://create.cosmomap.ru/constructor"}
      >
        Создать карту
      </Link>
    </div>
  );
};

export default ConstructorSection;
