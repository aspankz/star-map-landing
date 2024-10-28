import React from "react";
import Image from "next/image";
import phoneImg from "./images/phone.png";
import emailImg from "./images/email.png";
import printImg from "./images/print.png";

const HowItWorksSection = () => {
  return (
    <div
      id="howItWorks"
      className="flex flex-col pt-[64px] pb-[80px] px-[24px] gap-[32px]"
    >
      <h2 className="text-[24px] font-bold text-center">
        Как напечатать звездную карту?
      </h2>
      <div className="flex tablet:flex-col max-w-[1000px] items-center mx-auto   gap-[24px] w-full">
        <div className="flex flex-1 flex-col items-center">
          <Image src={phoneImg} alt="phone" width={124} height={124} />
          <p className="text-center text-[16px]">
            Выберите дату и место вашего события, настройте дизайн
          </p>
        </div>
        <Image
          className="tablet:hidden"
          src="/icons/arrow.svg"
          alt="arrow"
          width={80}
          height={1}
        />
        <div className="flex flex-1 flex-col items-center">
          <Image src={emailImg} alt="email" width={124} height={124} />
          <p className="text-center text-[16px]">
            Мгновенно получите файли рекомендации по печати на e-mail
          </p>
        </div>
        <Image
          className="tablet:hidden"
          src="/icons/arrow.svg"
          alt="arrow"
          width={80}
          height={1}
        />
        <div className="flex flex-1 flex-col items-center">
          <Image src={printImg} alt="print" width={124} height={124} />
          <p className="text-center text-[16px]">
            Распечатайте файл в любом копицентре или типографии и оформите
            в рамку
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
