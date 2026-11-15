
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    MapPin,
    Phone,
    Mail,
    Clock3,
    Send,
    MessageCircle,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const contactInfo = [
    {
        icon: MapPin,
        label: "Our Location",
        value: "Dhaka, Bangladesh",
        href: "https://maps.google.com/?q=Dhaka+Bangladesh",
    },
    {
        icon: Phone,
        label: "Phone Number",
        value: "+880 1XXX-XXXXXX",
        href: "tel:+8801XXXXXXXXX",
    },
    {
        icon: Mail,
        label: "Email Address",
        value: "hello@zenvia.com",
        href: "mailto:hello@zenvia.com",
    },
    {
        icon: Clock3,
        label: "Working Hours",
        value: "Sat – Thu, 9:00 AM – 6:00 PM",
        href: undefined,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#fffaf4] px-5 py-24 md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-[1440px]">
                {/* Section Heading */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f1dfd2] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#e96b37]">
                        <span className="h-2 w-2 rounded-full bg-[#f36b35]" />
                        Get In Touch
                    </span>

                    <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#202127] md:text-5xl lg:text-6xl">
                        Let’s Find Your
                        <span className="text-[#f36b35]"> Perfect Place.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#77777d]">
                        Have questions about buying, selling, or renting? Our team is here
                        to help you make your next move with confidence.
                    </p>
                </motion.div>

                {/* Contact Layout */}
                <div className="grid overflow-hidden rounded-[28px] border border-[#f0e6dd] bg-white shadow-[0_20px_70px_rgba(40,30,20,0.05)] lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Left Side */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative overflow-hidden bg-[#202127] p-8 text-white md:p-12"
                    >
                        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
                        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

                        <div className="relative z-10">
                            <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f58a5d]">
                                Contact Information
                            </span>

                            <h3 className="mt-5 max-w-sm text-3xl font-semibold leading-snug md:text-4xl">
                                We’d love to hear from you.
                            </h3>

                            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                                Whether you have a question or need expert guidance, reach out
                                to us. We’re always happy to help.
                            </p>

                            <div className="mt-12 space-y-8">
                                {contactInfo.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={item.label} className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f58a5d]">
                                                <Icon size={20} strokeWidth={1.7} />
                                            </div>

                                            <div>
                                                <p className="text-xs font-medium text-white/45">
                                                    {item.label}
                                                </p>

                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="mt-1 inline-block text-sm font-medium text-white transition-colors hover:text-[#f58a5d]"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="mt-1 text-sm font-medium text-white">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-14 border-t border-white/10 pt-7">
                                <p className="mb-4 text-sm text-white/50">
                                    Prefer a quick conversation?
                                </p>

                                <a
                                    href="https://wa.me/8801XXXXXXXXX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#f36b35] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#e45b27]"
                                >
                                    <MessageCircle size={18} />
                                    Chat With Us
                                    <ArrowUpRight size={17} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-8 md:p-12"
                    >
                        <div className="mb-9">
                            <h3 className="text-2xl font-semibold text-[#202127]">
                                Send Us a Message
                            </h3>
                            <p className="mt-2 text-sm text-[#85858a]">
                                Fill out the form below and we’ll get back to you.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-[#33343a]"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full rounded-xl border border-[#eee7e0] bg-[#fffdfb] px-4 py-4 text-sm text-[#202127] outline-none transition-all placeholder:text-[#aaa] focus:border-[#f36b35] focus:ring-4 focus:ring-[#f36b35]/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-[#33343a]"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-xl border border-[#eee7e0] bg-[#fffdfb] px-4 py-4 text-sm text-[#202127] outline-none transition-all placeholder:text-[#aaa] focus:border-[#f36b35] focus:ring-4 focus:ring-[#f36b35]/10"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-medium text-[#33343a]"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+880 1XXX-XXXXXX"
                                        className="w-full rounded-xl border border-[#eee7e0] bg-[#fffdfb] px-4 py-4 text-sm text-[#202127] outline-none transition-all placeholder:text-[#aaa] focus:border-[#f36b35] focus:ring-4 focus:ring-[#f36b35]/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-sm font-medium text-[#33343a]"
                                    >
                                        Interested In
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        defaultValue=""
                                        required
                                        className="w-full rounded-xl border border-[#eee7e0] bg-[#fffdfb] px-4 py-4 text-sm text-[#77777d] outline-none transition-all focus:border-[#f36b35] focus:ring-4 focus:ring-[#f36b35]/10"
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        <option value="buy">Buying a Property</option>
                                        <option value="sell">Selling a Property</option>
                                        <option value="rent">Renting a Property</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-[#33343a]"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us how we can help you..."
                                    required
                                    className="w-full resize-none rounded-xl border border-[#eee7e0] bg-[#fffdfb] px-4 py-4 text-sm text-[#202127] outline-none transition-all placeholder:text-[#aaa] focus:border-[#f36b35] focus:ring-4 focus:ring-[#f36b35]/10"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#f36b35] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e45b27] sm:w-auto"
                            >
                                Send Message
                                <Send
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </button>

                            <p className="text-xs leading-5 text-[#99999e]">
                                By submitting this form, you agree to be contacted by our team
                                regarding your inquiry.
                            </p>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#f0e6dd] bg-[#fff5ec] px-7 py-7 md:flex-row md:px-10"
                >
                    <div>
                        <h4 className="text-xl font-semibold text-[#202127]">
                            Ready to explore your options?
                        </h4>
                        <p className="mt-1 text-sm text-[#85858a]">
                            Discover properties that match your lifestyle.
                        </p>
                    </div>

                    <Link
                        href="/properties"
                        className="inline-flex items-center gap-2 rounded-full bg-[#202127] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#f36b35]"
                    >
                        Explore Properties
                        <ArrowUpRight size={17} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
