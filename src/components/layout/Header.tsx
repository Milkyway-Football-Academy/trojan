import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/assets/PNG/white.png";
import useScrollPosition from "@/hooks/useScroll";
import classnames from "classnames";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import {gsap} from "gsap";
import {useParams} from "next/navigation";
import {useRouter} from "next/router";


export const Header: React.FC<{}> = () => {
    const headerRef = useRef<HTMLElement | null>(null);
    const { yPosition } = useScrollPosition();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const {pathname} = useRouter()

    const isHome = pathname === '/'

    const inScroll = yPosition < Number(headerRef?.current?.offsetHeight) ;

    const headerClasses = classnames(
        "fixed z-50 top-0 left-0 w-full transition-all ease-in duration-700 text-3xl font-bold",
        {
            "bg-transparent": inScroll && isHome,
            "bg-app-primary": !inScroll || !isHome,
        }
    );

    const logoClasses = classnames(
        "flex justify-center transition-all ease-out duration-700"
    );

    const mobileMenuClasses = classnames(
        "fixed top-0 mobile-menu-overlay z-[999] left-0 h-full w-full bg-app-accent transform transition-transform ease-in duration-500",
        {
            "translate-x-0": isMobileMenuOpen,
            "-translate-x-full": !isMobileMenuOpen,
        }
    );

    return (
        <>
            <header ref={headerRef} className={headerClasses}>
                <div>
                    <div className="container">
                        <nav className="flex items-center justify-between md:justify-start space-x-6 py-2 md:py-4">
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        loading={"eager"}
                                        className={logoClasses}
                                        width={50}
                                        height={50}
                                        src={LOGO}
                                        alt="Milkyway football academy"
                                    />
                                </Link>
                            </div>
                            <ul className="hidden md:flex items-center space-x-5">
                                <li>
                                    <NavLink href="/players" label="Players" />
                                </li>
                                <li>
                                    <NavLink href="/news" label="News" />
                                </li>
                                <li>
                                    <NavLink href="/information/programs" label="Programs" />
                                </li>
                                <li>
                                    <NavLink href="/information" label="Academy Info" />
                                </li>
                                <li>
                                    <NavLink href="/matches" label="Matches" />
                                </li>
                            </ul>
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <IoMenuOutline
                                        className="text-white text-3xl cursor-pointer"
                                    />
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {isMobileMenuOpen && (
                <div className={mobileMenuClasses} >
                    <div className="container h-full flex flex-col py-16 px-10 space-y-4">
                        <div className="flex mb-10 -py-10 flex-row justify-center w-full">
                            <Link href="/">
                                <Image
                                    className={logoClasses}
                                    width={75}
                                    height={75}
                                    src={LOGO}
                                    alt="Milkyway football academy"
                                />
                            </Link>
                        </div>
                        <button
                            className="absolute top-5 right-5"
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <IoCloseOutline
                                className="text-white text-3xl cursor-pointer"
                            />
                        </button>
                        <MobileNavLink href="/players" label="Players" />
                        <MobileNavLink href="/news" label="News" />
                        <MobileNavLink href="/information/programs" label="Programs" />
                        <MobileNavLink href="/information" label="Academy Info" />
                        <MobileNavLink href="/matches" label="Matches" />
                    </div>
                </div>
            )}
        </>
    );
};

const NavLink: React.FC<{ href: string; isExternal?: boolean; label: string }> = ({
                                                                                      href,
                                                                                      isExternal = false,
                                                                                      label,
                                                                                  }) => {
    return (
        <div className="font-bold uppercase text-3xl font-light text-white hover:text-app-secondary hover:opacity-30">
            <Link href={href}>{label}</Link>
        </div>
    );
};

const MobileNavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
    return (
        <div className="font-bold uppercase text-5xl font-light text-white hover:text-app-secondary hover:opacity-30">
            <Link href={href}>{label}</Link>
        </div>
    );
};
