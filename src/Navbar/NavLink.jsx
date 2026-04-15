'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DiGoogleAnalytics } from "react-icons/di";
import { IoHomeOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";

const NavLink = () => {
    const pathname = usePathname();
    const navItems = [
        {
            name: "Home",
            pathname: "/",
            icon: <IoHomeOutline />
        },
        {
            name: "Timeline",
            pathname: "/timeline",
            icon: <TfiTimer />
        },
        {
            name: "Stats",
            pathname: "/stats",
            icon: <DiGoogleAnalytics />
        }
    ]
    return (
        navItems.map((navItem, index) => (
            <li key={index}>
                <Link
                    href={navItem.pathname}
                    className={`${pathname === navItem.pathname ? "bg-amber-500 text-white" : ""} btn btn-ghost flex justify-center items-center`}
                >
                    {navItem?.icon}{navItem.name}
                </Link>
            </li>
        ))
    );
};

export default NavLink;