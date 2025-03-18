import Link from "next/link";
import React from "react";
import NavLink from "../nav-link";

const SideBar = () => {
  return (
    <aside className="p-5 bg-zinc-800 flex flex-col justify-between">
      <div>Logo</div>
      <nav className="flex flex-col gap-5 ">
        <NavLink href="/">Dashboard</NavLink>
        <NavLink href="/tickets">Tickets</NavLink>
      </nav>
      <div className="flex flex-col gap-4">
        <button>Yardım Merkezi</button>
        <button> Çıkış yap</button>
      </div>
    </aside>
  );
};

export default SideBar;
