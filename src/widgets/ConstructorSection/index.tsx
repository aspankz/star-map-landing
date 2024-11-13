import ConstructorLink from "@/shared/ui/constructorLink";

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
      <ConstructorLink
        label="Создать карту"
        className="text-[20px] py-[24px] px-[32px]"
      />
    </div>
  );
};

export default ConstructorSection;
