"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "./langSelector";
import { useState } from "react";
import { useIsActive } from "@/hooks/useIsActive";
import { Menu, X } from "lucide-react";
import { navList } from "@/constant/constants";

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = useIsActive();

    return (
        <header className="top-0 left-0 right-0 z-40 bg-transparent pt-2 sm:pt-5">
        <div className="w-full">
            <div className="flex justify-between items-center h-14 sm:h-16 mx-auto gap-2">
                <div className="site_logo">
                    <Link
                        href={`/`}
                        className="bg-emerald-400/90 text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-200 hover:bg-emerald-500/90"
                        >
                        logo
                    </Link>
                </div>

                {/* Desktop Navigation - Hidden on mobile and tablet */}
                <nav className="site_navbar_wrap hidden lg:block w-full">
                    <div className="site_navbar w-full" >
                    <ul className="site_navbar_ul flex justify-between items-center">
                        {navList.map((nav, index) => (
                        <li key={index}>
                            <Link
                            href={`/${nav.path}`}
                            className={` ${
                                isActive(nav.path)
                                ? " site_active_link "
                                : " "
                            } `}
                            >
                            {nav.title}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                </nav>

                {/* Tablet Navigation - Hidden on mobile and desktop */}
                <nav className="hidden sm:block lg:hidden">
                    <div className="rounded-lg border border-emerald-700 max-w-lg" style={{ backgroundImage: "url('/images/noise-texture.png')" }}>
                    <ul className="flex items-center bg-no-repeat bg-cover justify-center bg-gradient-to-b from-emerald-600/30 to-emerald-900/40 rounded-lg backdrop-filter backdrop-blur-md">
                        {navList.map((nav, index) => (
                        <li key={index}>
                            <Link
                            href={`/${nav.path}`}
                            className={`transition-colors text-xs font-medium px-3 sm:px-4 py-2 inline-block hover:text-white ${
                                isActive(nav.path)
                                ? "text-emerald-300 underline"
                                : "text-gray-200 hover:bg-gradient-to-r from-emerald-600/60 to-emerald-900/40 hover:to-emerald-500/20"
                            } rounded-lg`}
                            >
                            {nav.title}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                </nav>

                {/* Right section - Desktop and Tablet */}
                <div className="site_lang_login">
                    <LanguageSelector />
                    <Link
                        style={{ backgroundImage: "url('/images/button-background.png')" }}
                        href={`/sign-in`}
                        className={`site_login_btn flex items-center justify-center px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium rounded-lg lg:rounded-xl border ${
                            pathname.includes("/Auth/User_login")
                            ? "text-white "
                            : "text-white "
                        } backdrop-blur-lg hover:to-emerald-500/50 transition-all duration-300 shadow-sm`}
                        >
                        Login
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white hover:bg-emerald-800/50 transition-colors"
                    aria-controls="mobile-menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="sr-only">
                    {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
                    </span>
                    {isMobileMenuOpen ? (
                    <X className="block h-5 w-5" aria-hidden="true" />
                    ) : (
                    <Menu className="block h-5 w-5" aria-hidden="true" />
                    )}
                </button>
            </div>
        </div>

        {/* Mobile menu */}
        <div
            className={`sm:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
                ? "opacity-100 max-h-screen backdrop-filter backdrop-blur-lg"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
            <div className="px-4 py-3 space-y-1 border-b border-t border-emerald-700/50 bg-black/20">
            {navList.map((nav, index) => (
                <Link
                key={index}
                href={`/${nav.path}`}
                className={`block px-4 py-3 text-sm rounded-lg transition-colors cursor-pointer ${
                    isActive(nav.path)
                    ? "text-white bg-emerald-600/80"
                    : "text-gray-200 hover:text-white hover:bg-emerald-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                >
                {nav.title}
                </Link>
            ))}
            <div className="pt-2 pb-1">
                <LanguageSelector />
            </div>
            <Link
                href={`/sign-in`}
                className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                pathname.includes("/Auth/User_login")
                    ? "text-white bg-emerald-600/80"
                    : "text-gray-200 hover:text-white hover:bg-emerald-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Login
            </Link>
            </div>
        </div>
        </header>
    );
}