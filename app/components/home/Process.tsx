
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
    Search,
    CalendarDays,
    House,
    ArrowRight,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discover Properties",
        description:
            "Browse our carefully selected property listings. Explore different locations, compare options and discover the right property for your lifestyle.",
        link: "/properties",
        linkText: "Explore Properties",
        icon: Search,
    },
    {
        number: "02",
        title: "Schedule a Visit",
        description:
            "Found something you love? Arrange a property visit at a convenient time and experience the space before making your decision.",
        link: "/contact",
        linkText: "Book a Visit",
        icon: CalendarDays,
    },
    {
        number: "03",
        title: "Find Your Dream Home",
        description:
            "Make your choice with confidence. Get the guidance you need and move forward towards your new property with peace of mind.",
        link: "/contact",
        linkText: "Get Started",
        icon: House,
    },
];

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

export default function Process() {
    return (
        <section className="overflow-hidden bg-[#fffaf5] px-6 py-24 md:px-12 lg:px-16">
            <div className="mx-auto max-w-[1440px]">

                {/* Section Heading */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mx-auto max-w-[680px] text-center"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-[#f1dfd2] px-4 py-2 text-xs font-semibold tracking-[1.5px] text-[#f36b35]"
                    >
                        <span className="h-2 w-2 rounded-full bg-[#f36b35]" />
                        SIMPLE PROCESS
                    </motion.span>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#202127] md:text-5xl lg:text-[58px]"
                    >
                        Find Your Dream Home{" "}
                        <span className="text-[#f36b35]">
                            In 3 Easy Steps
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-5 max-w-[550px] text-base leading-8 text-[#858585]"
                    >
                        We've made finding your perfect property simple.
                        Follow our straightforward process and take the next
                        step towards your dream home.
                    </motion.p>
                </motion.div>

                {/* Process Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.article
                                key={step.number}
                                variants={fadeUp}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.25 },
                                }}
                                className={`group relative rounded-2xl border border-[#eee5dc] bg-white p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] md:p-10 ${index === 1 ? "md:mt-10" : ""
                                    }`}
                            >
                                {/* Card Header */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold tracking-[2px] text-[#f36b35]">
                                        STEP {step.number}
                                    </span>

                                    <span className="text-5xl font-light tracking-tight text-[#eee9e3] transition-colors duration-300 group-hover:text-[#f36b35]">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: -6, scale: 1.08 }}
                                    transition={{ duration: 0.25 }}
                                    className="mt-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f36b35] transition-colors duration-300 group-hover:bg-[#f36b35] group-hover:text-white"
                                >
                                    <Icon size={36} strokeWidth={1.5} />
                                </motion.div>

                                {/* Content */}
                                <h3 className="mt-8 text-2xl font-semibold text-[#202127]">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-sm leading-8 text-[#858585]">
                                    {step.description}
                                </p>

                                {/* Link */}
                                <Link
                                    href={step.link}
                                    className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#f36b35] transition-all duration-300 group-hover:gap-5"
                                >
                                    {step.linkText}
                                    <ArrowRight size={19} />
                                </Link>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#202127] px-8 py-10 md:flex-row md:px-12"
                >
                    <div>
                        <h3 className="text-2xl font-semibold text-white md:text-3xl">
                            Ready to Find Your Next Home?
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/60">
                            Let us help you discover a place you'll love.
                        </p>
                    </div>

                    <Link
                        href="/properties"
                        className="group inline-flex h-14 shrink-0 items-center gap-5 rounded-full bg-[#f36b35] pl-7 pr-2 text-sm font-semibold text-white transition-colors hover:bg-[#e45b27]"
                    >
                        Explore Properties

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#202127] transition-transform group-hover:translate-x-1">
                            <ArrowRight size={19} />
                        </span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
