"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ConstructorLink from "@/shared/ui/constructorLink";

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
  const router = useRouter();
  const pathname = usePathname();
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  return (
    <div className="w-full fixed z-50 left-0 top-0 bg-black h-[72px] px-[64px] tablet:px-[16px] py-[8px] flex items-center justify-between">
      <div>
        <Link onClick={scrollToTop} href={"/"}>
          <Image
            src={"/Cosmosmap_logo.svg"}
            alt="Cosmomap"
            height={25}
            width={144}
            className="tablet:hidden"
            priority
          />
        </Link>
        <Link onClick={scrollToTop} href={"/"}>
          <Image
            src={"/Cosmosmap_logo_mobile.svg"}
            alt="Cosmomap"
            height={36}
            className="hidden tablet:block"
            width={30}
            priority
          />
        </Link>
      </div>
      <div className="flex items-center text-[16px] gap-[48px]">
        <div className="flex tablet:hidden items-center gap-[32px]">
          {links.map((link) => (
            <Link
              key={link.name}
              className="cursor-pointer hover:scale-105 active:scale-95 duration-300 ease-in-out"
              href={link.link}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ConstructorLink
          label="Создать карту"
          className="px-[24px] rounded-[30px] text-[16px] py-[12px] "
        />
      </div>
    </div>
  );
};
