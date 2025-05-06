"use client";
import { navbarData, copyRightIcon } from "@/assets";
import Link from "next/link";

const Navbar = ({ id }) => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 xl:py-6 z-10">
      <Link href="/#home">
        <span className="text-3xl font-semibold text-red-400">K</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold dark:text-white">
          Khedkar
        </span>
      </Link>
      <div className="flex flex-col gap-y-8 xl:gap-y-6 sm:gap-y-5 xs:gap-y-4">
        {navbarData.map((item, i) => (
          <Link
            href={`/#${item.id}`}
            key={i}
            className="group relative flex flex-col items-center"
          >
            <span
              className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 xs:group-hover:scale-100 transition-all ${
                item.id === id
                  ? "text-red-500 scale-110 xl:scale-100 xs:scale-80"
                  : "text-yellow-600 scale-100 xl:scale-90 xs:scale-70"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white absolute left-1/2 -translate-x-1/2 top-full mt-1 ${
                item.id === id ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="relative h-20 flex items-center justify-center">
        <p className="absolute left-1/2 -translate-x-1/2 w-max flex items-center -rotate-90 origin-center text-[13px] xs:text-[11px] text-gray-500 tracking-wider dark:text-gray-200 transition-colors">
          {copyRightIcon} 2023 - {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
