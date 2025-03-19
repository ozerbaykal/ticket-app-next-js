import React from "react";
import NavLink from "../nav-link";
import { links } from "@/app/utils/constants";
import { IoHelpCircleOutline as Help } from "react-icons/io5";
import { LuLogOut as Door } from "react-icons/lu";

const SideBar = () => {
  return (
    <aside className="p-5 bg-zinc-800 flex flex-col justify-between">
      <div>Logo</div>
      <nav className="flex flex-col  ">
        {links.map((item, key) => (
          <NavLink key={key} href={item.href}>
            <div className="flex items-center gap-2 px-3 py-2 md:pe-8 rounded-md">
              <span className="max-md:text-xl">{item.icon}</span>
              <span className="max-md:hidden"> {item.title} </span>
            </div>
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col gap-4 items-start text-gray-500">
        <button className="flex items-center gap-2 cursor-pointer">
          <Help className="max-md:text-xl" />
          <span className="max-md:hidden">Yardım Merkezi</span>
        </button>
        <button className="flex items-center gap-2 cursor-pointer">
          <Door className="max-md:text-xl" /> <span className="max-md:hidden"> Çıkış Yap</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
