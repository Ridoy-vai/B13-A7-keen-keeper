'use client'
import { TimelineContext } from "@/app/Contex/Contex";
import Link from "next/link";
import { useContext } from "react";

const NavLink = () => {
    const { activenav, setActivenav } = useContext(TimelineContext);
    return (
        <ul className="flex gap-3 menu-horizontal px-1">
            <li onClick={() => setActivenav("home")}><Link className={`${activenav === "home" && 'bg-black text-white'} btn  btn-ghost`} href="/">Home</Link></li>
            <li onClick={() => setActivenav("Timeline")}><Link className={`${activenav === "Timeline" && 'bg-black text-white'}  btn-ghost btn`}  href="/timeline">Timeline</Link></li>
            <li onClick={() => setActivenav("Stats")}><Link className={`${activenav === "Stats" && 'bg-black text-white'} btn btn-ghost`} href="/stats">Stats</Link></li>
        </ul>
    );
};

export default NavLink;