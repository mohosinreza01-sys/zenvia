
import Link from "next/link";
import {
    ArrowUpRight,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
} from "lucide-react";

const footerLinks = {
    explore: [
        { name: "Home", href: "/" },
        { name: "Properties", href: "/properties" },
        { name: "About Us", href: "/about" },
        { name: "Our Agents", href: "/agents" },
        { name: "Contact", href: "/contact" },
    ],
    services: [
        { name: "Buy a Property", href: "/properties?type=buy" },
        { name: "Rent a Property", href: "/properties?type=rent" },
        { name: "Sell Your Property", href: "/sell-property" },
        { name: "Property Valuation", href: "/valuation" },
        { name: "Property Consultation", href: "/contact" },
    ],
    resources: [
        { name: "Our Blog", href: "/blog" },
        { name: "FAQs", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms" },
    ],
};

const socialLinks = [
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.6v8h3.4Z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[17px] w-[17px]">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
                <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V9Z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://twitter.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l7.3-8.4L1.9 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#202127] px-5 pt-16 text-white md:px-10 lg:px-16">
            <div className="mx-auto max-w-[1440px]">

                {/* Newsletter */}
                <div className="mb-16 flex flex-col justify-between gap-8 rounded-[24px] bg-[#2b2c33] p-7 md:flex-row md:items-center md:p-10">

                    <div className="max-w-lg">
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f36b35]">
                            Stay Connected
                        </span>

                        <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                            Get the latest property updates.
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-white/50">
                            Subscribe to receive new property listings, market insights and
                            exclusive updates.
                        </p>
                    </div>

                    <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#f36b35]"
                        />

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f36b35] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#e45b27]"
                        >
                            Subscribe
                            <ArrowRight size={17} />
                        </button>
                    </form>
                </div>

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] lg:gap-10">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f36b35] text-xl font-bold text-white">
                                Z
                            </span>

                            <span className="text-2xl font-bold tracking-tight">
                                zenvia<span className="text-[#f36b35]">.</span>
                            </span>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
                            Discover a better way to find your dream property. We connect
                            people with places they love to call home.
                        </p>

                        {/* Social Media */}
                        <div className="mt-7 flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#f36b35] hover:bg-[#f36b35] hover:text-white"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold">Explore</h3>

                        <ul className="space-y-4">
                            {footerLinks.explore.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/50 transition-colors hover:text-[#f36b35]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold">Our Services</h3>

                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/50 transition-colors hover:text-[#f36b35]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold">Resources</h3>

                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/50 transition-colors hover:text-[#f36b35]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold">Get In Touch</h3>

                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 shrink-0 text-[#f36b35]" />
                                <p className="text-sm leading-6 text-white/50">
                                    Dhaka, Bangladesh
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-[#f36b35]" />
                                <a
                                    href="tel:+8801XXXXXXXXX"
                                    className="text-sm text-white/50 transition-colors hover:text-[#f36b35]"
                                >
                                    +880 1XXX-XXXXXX
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0 text-[#f36b35]" />
                                <a
                                    href="mailto:hello@zenvia.com"
                                    className="break-all text-sm text-white/50 transition-colors hover:text-[#f36b35]"
                                >
                                    hello@zenvia.com
                                </a>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#f36b35] transition-all hover:gap-3"
                        >
                            Contact Our Team
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-white/40">
                        © 2026 Zenvia. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-xs text-white/40">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition-colors hover:text-white"
                        >
                            Terms of Service
                        </Link>
                    </div>

                    <p className="text-xs text-white/40">
                        Crafted with care for better living.
                    </p>
                </div>
            </div>
        </footer>
    );
}
