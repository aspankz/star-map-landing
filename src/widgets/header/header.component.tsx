import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Как это работает?",
    link: "#howItWorks",
  },
  {
    name: "Галерея",
    link: "#gallery",
  },
];

export const Header = () => {
  return (
    <div className="w-full h-[72px] px-[64px] tablet:px-[16px] py-[8px] flex items-center justify-between">
      <Image
        src={"/Cosmosmap_logo.svg"}
        alt="Cosmomap"
        height={56}
        width={127}
        className="tablet:hidden"
        priority
      />
      <Image
        src={"/Cosmosmap_logo_mobile.svg"}
        alt="Cosmomap"
        height={48}
        className="hidden tablet:block"
        width={48}
        priority
      />
      <div className="flex items-center text-[16px] gap-[48px]">
        <div className="flex tablet:hidden items-center gap-[32px]">
          {links.map((link) => (
            <Link key={link.name} href={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          href="https://cosmosmap.ru/constructor"
          className="px-[24px] rounded-[30px] bg-[#363B3F] py-[12px]"
        >
          <p>Создать карту</p>
        </Link>
      </div>
    </div>
  );
};
