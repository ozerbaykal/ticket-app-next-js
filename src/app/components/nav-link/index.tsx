"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  style?: string;
  children: string | React.JSX.Element;
};
const NavLink = ({ children, href, style }: Props) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${href === path ? style || "bg-zinc-600 text-white" : "text-gray-500"} rounded-md `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
