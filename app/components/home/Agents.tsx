
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const agents = [
    {
        number: "01",
        name: "James Wilson",
        role: "Senior Property Advisor",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
    },
    {
        number: "02",
        name: "Sophia Martin",
        role: "Real Estate Consultant",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
    },
    {
        number: "03",
        name: "Daniel Carter",
        role: "Property Investment Expert",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85",
    },
    {
        number: "04",
        name: "Olivia Bennett",
        role: "Client Relationship Manager",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
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
            staggerChildren: 0.15,
        },
    },
};

export default function Agents() {
    return (
        <section className="overflow-hidden bg-[#F8F7F4] py-20 lg:py-28">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* Section Heading */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                >
                    <div className="max-w-2xl">
                        <motion.span
                            variants={fadeUp}
                            className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#F36B35]"
                        >
                            <span className="h-2 w-2 rounded-full bg-[#F36B35]" />
                            Our Professional Team
                        </motion.span>

                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl font-semibold leading-tight tracking-tight text-[#202127] sm:text-4xl lg:text-5xl"
                        >
                            Meet The People Behind{" "}
                            <span className="text-[#F36B35]">
                                Your Next Move.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div variants={fadeUp} className="max-w-md">
                        <p className="text-sm leading-7 text-gray-500 sm:text-base">
                            Our experienced property specialists are here to make your real
                            estate journey simple, smooth and successful.
                        </p>

                        <Link
                            href="#agents"
                            className="mt-4 inline-flex items-center gap-2 font-semibold text-[#202127] transition hover:text-[#F36B35]"
                        >
                            Meet All Agents
                            <ArrowUpRight size={20} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Agent Cards */}
                <motion.div
                    id="agents"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {agents.map((agent) => (
                        <motion.div
                            key={agent.number}
                            variants={fadeUp}
                            whileHover={{
                                y: -7,
                                transition: { duration: 0.3 },
                            }}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative mb-5 h-[340px] overflow-hidden rounded-2xl bg-[#E9E5DF]">
                                <Image
                                    src={agent.image}
                                    alt={`Portrait of ${agent.name}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#202127] shadow-lg transition duration-300 group-hover:bg-[#F36B35] group-hover:text-white">
                                    <ArrowUpRight size={21} />
                                </div>
                            </div>

                            {/* Agent Details */}
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#202127]">
                                        {agent.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {agent.role}
                                    </p>
                                </div>

                                <span className="text-sm font-medium text-[#F36B35]">
                                    {agent.number}
                                </span>
                            </div>
                        </motion.div>
                    ))}
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
                    className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#202127] px-7 py-9 sm:px-10 lg:flex-row lg:px-14"
                >
                    <div>
                        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                            Need Help Finding The Right Property?
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Talk to our experts and get personalized property recommendations.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#F36B35] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#202127]"
                    >
                        Talk To An Expert

                        <ArrowUpRight
                            size={19}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
