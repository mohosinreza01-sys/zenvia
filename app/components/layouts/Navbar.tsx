
"use client";

import Link from "next/link";
import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    Search,
    Menu,
    X,
} from "lucide-react";

const dropdowns = [
    {
        label: "Properties",
        links: [
            { label: "All Properties", href: "/properties" },
            { label: "Buy a Property", href: "/buy" },
            { label: "Rent a Property", href: "/rent" },
        ],
    },
    {
        label: "Blog",
        links: [
            { label: "Latest Articles", href: "/blog" },
            { label: "Property News", href: "/news" },
        ],
    },
    {
        label: "Pages",
        links: [
            { label: "Our Team", href: "/team" },
            { label: "FAQ", href: "/faq" },
            { label: "Testimonials", href: "/testimonials" },
        ],
    },
];

const mainLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#eee6dc] bg-[#fffaf4]/95 backdrop-blur-xl">
            <div className="mx-auto flex h-[92px] max-w-[1600px] items-center justify-between px-5 md:px-10 xl:px-16">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-1.5">
                    <span className="text-[36px] font-bold tracking-[-2px] text-[#202127]">
                        Zenvia<span className="text-[#F36B35]">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 xl:flex">

                    {mainLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-full px-6 py-3 text-[16px] font-medium transition ${index === 0
                                    ? "bg-[#fff0e5] font-semibold text-[#ee6935]"
                                    : "text-[#393940] hover:bg-white hover:text-[#ee6935]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {dropdowns.map((dropdown) => (
                        <div key={dropdown.label} className="group relative">
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded-full px-5 py-3 text-[16px] font-medium text-[#393940] transition hover:bg-white hover:text-[#ee6935]"
                            >
                                {dropdown.label}
                                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            <div className="invisible absolute left-0 top-full w-[240px] pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                                <div className="rounded-2xl border border-[#eee8df] bg-white p-3 shadow-[0_15px_45px_rgba(0,0,0,0.08)]">

                                    {dropdown.label === "Properties" && (
                                        <p className="px-4 pb-2 pt-2 text-[11px] font-bold uppercase tracking-[2px] text-[#aaa19a]">
                                            Explore Properties
                                        </p>
                                    )}

                                    {dropdown.links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="block rounded-xl px-4 py-3 text-sm font-medium text-[#303038] transition hover:bg-[#fff5ed] hover:text-[#ed6935]"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden items-center gap-4 xl:flex">

                    <Link
                        href="/search"
                        aria-label="Search"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e8ded3] text-[#292a30] transition hover:border-[#ef713f] hover:bg-white hover:text-[#ef713f]"
                    >
                        <Search className="h-5 w-5" />
                    </Link>

                    <Link
                        href="/contact"
                        className="group flex h-12 items-center gap-3 rounded-full bg-[#f36b35] px-6 text-[15px] font-semibold text-white shadow-[0_5px_15px_rgba(243,107,53,0.15)] transition hover:-translate-y-0.5 hover:bg-[#df5927]"
                    >
                        Contact Us
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ded3] text-[#25252b] xl:hidden"
                >
                    {mobileOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

            </div>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <div className="absolute left-0 top-full w-full border-b border-[#eee6dc] bg-white px-5 py-5 shadow-xl xl:hidden">
                    <nav className="mx-auto max-w-[1600px] space-y-1">

                        {mainLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block rounded-xl px-4 py-3 font-medium ${index === 0
                                        ? "bg-[#fff3e9] font-semibold text-[#ef6935]"
                                        : "text-[#303038] hover:bg-[#fff5ed]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {dropdowns.map((dropdown) => (
                            <details key={dropdown.label} className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 font-medium text-[#303038] hover:bg-[#fff5ed] [&::-webkit-details-marker]:hidden">
                                    {dropdown.label}
                                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                                </summary>

                                <div className="ml-3 border-l border-[#eee6dc] pl-3">
                                    {dropdown.links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block rounded-lg px-4 py-3 text-sm text-[#55545a] hover:bg-[#fff5ed] hover:text-[#ed6935]"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                        ))}

                        <div className="mt-4 border-t border-[#eee6dc] pt-4">
                            <Link
                                href="/search"
                                onClick={() => setMobileOpen(false)}
                                className="mb-3 flex items-center gap-2 rounded-xl border border-[#eee6dc] px-4 py-3 text-sm font-medium text-[#303038]"
                            >
                                <Search className="h-4 w-4" />
                                Search Properties
                            </Link>

                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="flex h-12 items-center justify-center rounded-full bg-[#f36b35] font-semibold text-white transition hover:bg-[#df5927]"
                            >
                                Contact Us
                            </Link>
                        </div>

                    </nav>
                </div>
            )}
        </header>
    );
}
