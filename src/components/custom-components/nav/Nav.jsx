"use client";

import { ExternalLinkIcon } from "@/assets/svgs/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/utlis/utils";
import Image from "next/image";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex h-14 w-full items-center justify-between justify-self-center px-2 py-2">
      <div className="flex items-end text-2xl">
        Yash
        <span className="mb-1 ml-1 h-1 w-4 bg-tertiary"></span>
      </div>
      <div className="flex">
        <ul className="flex gap-10">
          {links.map((l, i) => (
            <li
              key={i}
              className={cn(
                "flex cursor-pointer gap-2 px-3 py-1 text-lg capitalize hover:text-tertiary",
                pathname === l.href && "text-tertiary",
                l.type === "filled" &&
                  "rounded-full border border-primary bg-tertiary font-semibold text-primary hover:border-tertiary hover:bg-primary hover:text-tertiary",
              )}
            >
              <Link href={l.href} className="">
                {l.label}
              </Link>
            </li>
          ))}
          <li
            className={
              "flex cursor-pointer gap-2 rounded-full border border-primary bg-tertiary px-3 py-1 text-lg font-semibold capitalize text-primary hover:border-tertiary hover:bg-primary hover:text-tertiary"
            }
          >
            <Link href={"mailto:sahuyash1103@gmail.com"} className="flex gap-2">
              E-Mail
              <sup className="mt-2">
                <ExternalLinkIcon className="w-4" />
              </sup>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
