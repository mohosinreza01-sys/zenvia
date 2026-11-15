
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Michael Anderson",
        role: "First-time Home Buyer",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        title: "A Smooth Experience!",
        review:
            "The entire process was incredibly smooth. The team understood what I was looking for and helped me explore properties that matched my needs.",
    },
    {
        name: "Emily Johnson",
        role: "Property Investor",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        title: "Professional & Reliable.",
        review:
            "I really appreciated the communication and attention to detail. Every question was answered clearly, making my property search much easier.",
    },
    {
        name: "David Miller",
        role: "Homeowner",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
        title: "Found My Dream Home.",
        review:
            "From the first consultation to the final decision, the team made everything feel straightforward. I couldn't be happier with my experience.",
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

export default function Testimonials() {
    return (
        <section className="overflow-hidden bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* Heading */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <motion.span
                        variants={fadeUp}
                        className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#F36B35]"
                    >
                        <span className="h-2 w-2 rounded-full bg-[#F36B35]" />
                        Client Testimonials
                    </motion.span>

                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl font-semibold leading-tight tracking-tight text-[#202127] sm:text-4xl lg:text-5xl"
                    >
                        Real Stories From{" "}
                        <span className="text-[#F36B35]">
                            Happy Clients.
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base"
                    >
                        Discover what our clients say about their experience finding the
                        perfect property with Zenvia.
                    </motion.p>
                </motion.div>

                {/* Rating Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8"
                >
                    <div className="text-center">
                        <h3 className="text-4xl font-semibold text-[#202127]">
                            4.9<span className="text-[#F36B35]">/5</span>
                        </h3>

                        <div className="mt-2 flex justify-center gap-1 text-[#F5A623]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    size={19}
                                    fill="currentColor"
                                    strokeWidth={0}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="hidden h-14 w-px bg-gray-200 sm:block" />

                    <p className="max-w-xs text-center text-sm leading-6 text-gray-500 sm:text-left">
                        Based on customer feedback and property buying experiences.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            variants={fadeUp}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.25 },
                            }}
                            className="rounded-3xl border border-gray-100 bg-[#FAF9F7] p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-200/50 sm:p-9"
                        >
                            {/* Rating and Quote */}
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1 text-[#F5A623]">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={18}
                                            fill="currentColor"
                                            strokeWidth={0}
                                        />
                                    ))}
                                </div>

                                <span className="font-serif text-4xl leading-none text-[#F36B35]">
                                    “
                                </span>
                            </div>

                            {/* Review */}
                            <h3 className="mt-5 text-xl font-semibold text-[#202127]">
                                {testimonial.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                {testimonial.review}
                            </p>

                            <div className="my-7 h-px bg-gray-200" />

                            {/* Client Profile */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                                    <Image
                                        src={testimonial.image}
                                        alt={`Portrait of ${testimonial.name}`}
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-[#202127]">
                                        {testimonial.name}
                                    </h4>

                                    <p className="mt-1 text-xs text-gray-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 rounded-full border border-gray-200 px-7 py-4 text-sm font-semibold text-[#202127] transition duration-300 hover:border-[#F36B35] hover:bg-[#F36B35] hover:text-white"
                    >
                        Share Your Experience

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
