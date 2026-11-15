
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
    ArrowRight,
    House,
    Clock3,
    DollarSign,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        number: "01",
        title: "Wide Property Selection",
        description:
            "Explore a diverse collection of properties to find the perfect match for your needs.",
        icon: House,
        background: "bg-[#fffaf5]",
    },
    {
        number: "02",
        title: "Expert Guidance",
        description:
            "Get helpful insights and professional assistance to make confident property decisions.",
        icon: Clock3,
        background: "bg-white",
    },
    {
        number: "03",
        title: "Transparent Pricing",
        description:
            "Clear property information and straightforward pricing to help you plan with confidence.",
        icon: DollarSign,
        background: "bg-white",
    },
    {
        number: "04",
        title: "Trusted Experience",
        description:
            "Enjoy a reliable and customer-focused experience from your first search to your final decision.",
        icon: ShieldCheck,
        background: "bg-[#fffaf5]",
    },
];

const statistics = [
    { value: "500", suffix: "+", label: "Properties Listed" },
    { value: "300", suffix: "+", label: "Happy Clients" },
    { value: "50", suffix: "+", label: "Expert Agents" },
    { value: "10", suffix: "+", label: "Years Experience" },
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
            staggerChildren: 0.15,
        },
    },
};

export default function WhyChooseUs() {
    return (
        <section className="overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-16">
            <div className="mx-auto max-w-[1440px]">

                {/* Main Content */}
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.span
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-[#f1dfd2] px-4 py-2 text-xs font-semibold tracking-[1.5px] text-[#f36b35]"
                        >
                            <span className="h-2 w-2 rounded-full bg-[#f36b35]" />
                            WHY CHOOSE ZENVIA
                        </motion.span>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-7 max-w-[600px] text-4xl font-semibold leading-[1.2] tracking-tight text-[#202127] md:text-5xl lg:text-[58px]"
                        >
                            Making Your{" "}
                            <span className="text-[#f36b35]">
                                Property Journey
                            </span>{" "}
                            Simple & Better.
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-[510px] text-base leading-8 text-[#858585]"
                        >
                            Finding the right property should feel exciting, not
                            complicated. We bring everything together to make your
                            real estate experience easier, smarter and more rewarding.
                        </motion.p>

                        <motion.div variants={fadeUp}>
                            <Link
                                href="/about"
                                className="group mt-9 inline-flex h-14 items-center gap-5 rounded-full bg-[#f36b35] py-1 pl-7 pr-2 text-sm font-semibold text-white transition-colors hover:bg-[#df5927]"
                            >
                                Learn More About Us

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#202127] transition-transform group-hover:translate-x-1">
                                    <ArrowRight size={19} />
                                </span>
                            </Link>
                        </motion.div>

                        {/* Trust Note */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-12 flex items-center gap-4 border-t border-[#eee8e0] pt-7"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff1e8] text-[#f36b35]">
                                <ShieldCheck size={25} strokeWidth={1.6} />
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-[#202127]">
                                    Your Trust, Our Priority
                                </h4>
                                <p className="mt-1 text-xs text-[#929292]">
                                    Dedicated support throughout your journey.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Feature Cards */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                    >
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={feature.number}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.25 },
                                    }}
                                    className={`group rounded-2xl border border-[#eee8e0] ${feature.background} p-7 transition-colors duration-300 hover:border-[#f36b35]/40 hover:shadow-xl ${feature.number === "02" || feature.number === "04"
                                            ? "sm:mt-10"
                                            : ""
                                        }`}
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#f36b35] shadow-sm transition-colors duration-300 group-hover:bg-[#f36b35] group-hover:text-white">
                                        <Icon size={27} strokeWidth={1.6} />
                                    </div>

                                    <h3 className="mt-7 text-xl font-semibold text-[#202127]">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#858585]">
                                        {feature.description}
                                    </p>

                                    <div className="mt-6 text-2xl font-light text-[#f36b35]">
                                        {feature.number}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Statistics */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-24 grid grid-cols-2 gap-8 border-t border-[#eee8e0] pt-12 md:grid-cols-4"
                >
                    {statistics.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeUp}
                        >
                            <h3 className="text-4xl font-semibold tracking-tight text-[#202127] md:text-5xl">
                                {stat.value}
                                <span className="text-[#f36b35]">{stat.suffix}</span>
                            </h3>

                            <p className="mt-3 text-sm text-[#858585]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
