"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { images } from "@/constant/image";
import { navLinks } from "@/data/navigation";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    const pathname = usePathname();

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-white/90 backdrop-blur-md">
            <div className="container-page flex h-[78px] items-center justify-between">
                <Link href="/" className="relative h-12 w-40">
                    <Image
                        src={images.logo}
                        alt="Mxpertz Infolabs"
                        fill
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hide-mobile items-center gap-2">
                    {navLinks.map((item, index) => (
                        <div key={item.name} className="group relative">
                            <Link
                                href={item.href}
                                className={`btn btn-sm gap-1 ${pathname === item.href
                                        ? "bg-[var(--primary)] text-white shadow-[var(--shadow-primary)]"
                                        : "text-black hover:bg-[var(--primary)] hover:text-white"
                                    }`}
                            >
                                {item.name}
                                {item.dropdown && (
                                    <ChevronDown
                                        size={15}
                                        className="transition group-hover:rotate-180"
                                    />
                                )}
                                
                            </Link>
                         

                            {item.dropdown && (
                                <div className="invisible absolute left-0 top-12 grid w-[520px] grid-cols-2 gap-2 rounded-2xl border border-gray-100 bg-white p-4 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:top-11 group-hover:opacity-100">
                                    {item.dropdown.map((dropItem) => (
                                        <Link
                                            key={dropItem.name}
                                            href={dropItem.href}
                                            className="block rounded-xl px-2 py-1 text-[13px] font-medium text-secondary transition hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                                        >
                                            {dropItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="btn btn-dark btn-sm hidden lg:inline-flex"
                >
                    Contact Us
                </Link>

                <button onClick={() => setMobileMenu(!mobileMenu)} className="show-mobile">
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenu && (
                <div className="max-h-[calc(100vh-78px)] overflow-y-auto border-t border-gray-100 bg-white px-6 py-5 shadow-lg lg:hidden">
                    <div className="flex flex-col gap-3">
                        {navLinks.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setOpenMobileDropdown(
                                                    openMobileDropdown === item.name ? null : item.name
                                                )
                                            }
                                            className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-sm font-semibold text-black"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                size={17}
                                                className={`transition ${openMobileDropdown === item.name ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {openMobileDropdown === item.name && (
                                            <div className="mt-2 space-y-2 rounded-2xl bg-gray-50 p-3">
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMobileMenu(false)}
                                                    className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--primary)]"
                                                >
                                                    View All {item.name}
                                                </Link>

                                                {item.dropdown.map((dropItem) => (
                                                    <Link
                                                        key={dropItem.name}
                                                        href={dropItem.href}
                                                        onClick={() => setMobileMenu(false)}
                                                        className="block rounded-xl px-3 py-2 text-sm font-medium text-secondary"
                                                    >
                                                        {dropItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenu(false)}
                                        className="block rounded-xl px-2 py-2 text-sm font-semibold text-black"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenu(false)}
                            className="btn btn-dark btn-sm mt-3"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
