import React from "react";
import NavLink from "../nav-link";
import { links } from "@/app/utils/constants";
import { IoHelpCircleOutline as Help } from "react-icons/io5";
import { LuLogOut as Door } from "react-icons/lu";
import Image from "next/image";
import logo from "../../../../public/logo (1).png";
import { Smooch_Sans } from "next/font/google";

const smooch = Smooch_Sans({
  weight: "900",
  subsets: ["latin"],
});

const SideBar = () => {
  return (
    <aside className="p-5 bg-zinc-800 flex flex-col justify-between">
      <div className="items-center  md:flex md:gap-3 bg-white rounded-full max-md:size-[45px]  ">
        <Image src={logo} alt="logo" width={50} height={50} className=" object-cover  " />
        <span style={smooch.style} className="max-md:hidden text-4xl text-zinc-800 max-md:size-[45px]">
          Tickets
        </span>
      </div>
      <nav className="flex flex-col gap-4  ">
        {links.map((item, key) => (
          <NavLink key={key} href={item.href}>
            <div className="flex items-center gap-2 px-3 py-2 md:pe-8  ">
              <span className="max-md:text-2xl">{item.icon}</span>
              <span className="max-md:hidden"> {item.title} </span>
            </div>
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col gap-4 items-start text-gray-500">
        <button className="flex items-center gap-2 cursor-pointer">
          <Help className="max-md:text-2xl" />
          <span className="max-md:hidden">Yardım Merkezi</span>
        </button>
        <button className="flex items-center gap-2 cursor-pointer">
          <Door className="max-md:text-2xl" /> <span className="max-md:hidden"> Çıkış Yap</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
