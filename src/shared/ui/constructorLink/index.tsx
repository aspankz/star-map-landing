import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface ConstructorLinkProps {
  className?: string;
  label: string;
}

const ConstructorLink = ({ className, label }: ConstructorLinkProps) => {
  return (
    <Link
      className={clsx(
        ` rounded-full   cursor-pointer duration-300 disabled:cursor-not-allowed hover:scale-105 active:scale-95 ease-in-out bg-button-action `,
        className
      )}
      href={"https://create.cosmomap.ru/constructor"}
    >
      {label}
    </Link>
  );
};

export default ConstructorLink;
