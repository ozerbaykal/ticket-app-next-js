"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  style?: string;
  children: string;
};
const NavLink = ({ href, style, children }: Props) => {
  const path = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={
          href === path
            ? style || "bg-zinc-600 rounded-md p-2 text-white items-center  "
            : "p-2 items-center "
        }
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
