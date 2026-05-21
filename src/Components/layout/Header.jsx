"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { images } from "@/constant/image";
import { navLinks } from "@/data/navigation";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    const pathname = usePathname();

    useEffect(() => {
        const hero = document.querySelector("#hero");

        if (!hero) {
            setIsHeroVisible(false);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeroVisible(entry.isIntersecting);
            },
            {
                threshold: 0.4,
            }
        );

        observer.observe(hero);

        return () => observer.disconnect();
    }, []);

    // SAFE LOGO
    const currentLogo =
        isHeroVisible
            ? images?.whitelogo || images?.logo
            : images?.logo || images?.whitelogo;

    return (
        <header
            className={`
                fixed left-0 top-0 z-50 w-full
                transition-all duration-500 ease-in-out
                ${isHeroVisible
                    ? "bg-transparent"
                    : "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-black/5"
                }
            `}
        >
            <div className="container-page flex h-[74px] items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="relative h-12 w-44 shrink-0">
                    {currentLogo && (
                        <Image
                            src={currentLogo}
                            alt="Mxpertz Infolabs"
                            fill
                            priority
                            className="object-contain transition-all duration-300"
                        />
                    )}
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center gap-2">
                    {navLinks.map((item) => (
                        <div key={item.name} className="group relative">
                            <Link
                                href={item.href}
                                className={`
                                    flex items-center gap-1
                                    rounded-full px-5 py-2.5
                                    text-[15px] font-medium
                                    transition-all duration-300
                                    ${pathname === item.href
                                        ? "bg-[#A572CF] text-white shadow-lg shadow-[#A572CF]/20"
                                        : isHeroVisible
                                            ? "text-white hover:bg-white hover:text-black"
                                            : "text-[#111] hover:bg-[#A572CF] hover:text-white"
                                    }
                                `}
                            >
                                {item.name}

                                {item.dropdown && (
                                    <ChevronDown
                                        size={15}
                                        className="transition-transform duration-300 group-hover:rotate-180"
                                    />
                                )}
                            </Link>
                        </div>
                    ))}
                </nav>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">

                    {/* CONTACT BUTTON */}
                    <Link
                        href="/contact"
                        className="
                            hidden sm:flex
                            items-center justify-center
                            rounded-full
                            bg-gradient-to-r
                            from-[#A572CF]
                            to-[#E87779]
                            px-6 py-3
                            text-sm font-semibold text-white
                            shadow-lg shadow-[#A572CF]/20
                            transition-all duration-300
                            hover:scale-105
                        "
                    >
                        Contact Us
                    </Link>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className={`
                            lg:hidden transition-colors duration-300
                            ${isHeroVisible ? "text-white" : "text-black"}
                        `}
                    >
                        {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE NAV */}
            {mobileMenu && (
                <div className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl px-6 py-6 shadow-xl">
                    <div className="flex flex-col gap-3">

                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenu(false)}
                                className={`
                                    flex items-center justify-between
                                    rounded-2xl px-4 py-3
                                    text-[15px] font-medium
                                    transition-all duration-300
                                    ${pathname === item.href
                                        ? "bg-[#A572CF] text-white"
                                        : "text-black hover:bg-zinc-100"
                                    }
                                `}
                            >
                                {item.name}

                                {item.dropdown && (
                                    <ChevronDown size={16} />
                                )}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenu(false)}
                            className="
                                mt-2 flex items-center justify-center
                                rounded-2xl
                                bg-gradient-to-r
                                from-[#A572CF]
                                to-[#E87779]
                                px-5 py-3
                                font-semibold text-white
                            "
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}