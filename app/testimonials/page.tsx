
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    Quote,
    Star,
    MessageCircle,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const testimonials = [
    {
        name: "Michael Anderson",
        role: "Property Buyer",
        location: "Gulshan, Dhaka",
        image: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        date: "March 2026",
        text: "The entire property search experience was smooth and convenient. I could explore different options and get the information I needed without any hassle. The team made the process much easier.",
        property: "Luxury Apartment",
    },
    {
        name: "Emily Johnson",
        role: "Property Renter",
        location: "Banani, Dhaka",
        image: "https://i.pravatar.cc/150?img=47",
        rating: 5,
        date: "February 2026",
        text: "Finding a suitable rental property can be challenging, but the experience here was straightforward. Communication was clear, and I could easily arrange a property visit.",
        property: "Modern Family Apartment",
    },
    {
        name: "David Miller",
        role: "Property Buyer",
        location: "Dhanmondi, Dhaka",
        image: "https://i.pravatar.cc/150?img=13",
        rating: 5,
        date: "January 2026",
        text: "I appreciated how easy it was to browse property listings and connect with a consultant. Having all the important details in one place made comparing options easier.",
        property: "Contemporary Residence",
    },
    {
        name: "Sophia Williams",
        role: "Property Buyer",
        location: "Uttara, Dhaka",
        image: "https://i.pravatar.cc/150?img=44",
        rating: 5,
        date: "December 2025",
        text: "The platform gave me a convenient way to explore different properties. The overall presentation was clear and helped me understand what options were available.",
        property: "Premium City Home",
    },
    {
        name: "Daniel Carter",
        role: "Property Renter",
        location: "Mirpur, Dhaka",
        image: "https://i.pravatar.cc/150?img=60",
        rating: 5,
        date: "November 2025",
        text: "A simple and helpful experience. I was able to find a property that matched my requirements and communicate with the representative about the next steps.",
        property: "City Residence",
    },
    {
        name: "Olivia Bennett",
        role: "Property Buyer",
        location: "Bashundhara, Dhaka",
        image: "https://i.pravatar.cc/150?img=49",
        rating: 5,
        date: "October 2025",
        text: "The property information was easy to explore, and the browsing experience felt organized. It helped me shortlist properties before arranging further discussions.",
        property: "Private Villa",
    },
];

const filters = ["All Reviews", "Property Buyers", "Property Renters"];

export default function TestimonialsPage() {
    const [activeFilter, setActiveFilter] = useState("All Reviews");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredTestimonials = testimonials.filter((item) => {
        if (activeFilter === "Property Buyers") {
            return item.role === "Property Buyer";
        }

        if (activeFilter === "Property Renters") {
            return item.role === "Property Renter";
        }

        return true;
    });

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);

    const visibleTestimonials = filteredTestimonials.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    function changeFilter(filter: string) {
        setActiveFilter(filter);
        setCurrentPage(1);
    }

    return (
        <main className="bg-[#fffaf4] text-[#202127]">

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-[#eee5da]">
                <div className="absolute -right-32 -top-40 h-[450px] w-[450px] rounded-full bg-[#f36b35]/[0.07] blur-3xl" />

                <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
                    <div className="mx-auto max-w-3xl text-center">

                        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f36b35]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f36b35]">
                            <MessageCircle size={14} />
                            Client Experiences
                        </span>

                        <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-7xl">
                            Stories That
                            <span className="block text-[#f36b35]">Build Trust.</span>
                        </h1>

                        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#85858a] sm:text-base">
                            Discover the experiences and stories of people who have explored
                            their property journey with Zenvia.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href="/properties"
                                className="inline-flex items-center gap-2 rounded-full bg-[#f36b35] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#e45b27]"
                            >
                                Explore Properties
                                <ArrowUpRight size={17} />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-[#e8dfd5] bg-white px-7 py-4 text-sm font-semibold text-[#202127] transition hover:border-[#f36b35] hover:text-[#f36b35]"
                            >
                                Contact Us
                                <ArrowRight size={17} />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Rating Overview */}
            <section className="px-5 py-16 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">

                    <div className="rounded-2xl border border-[#eee5da] bg-white p-8">
                        <p className="text-sm text-[#85858a]">Overall Experience</p>

                        <div className="mt-5 flex items-center gap-3">
                            <span className="text-5xl font-semibold tracking-tight">4.9</span>
                            <div>
                                <div className="flex gap-1 text-[#f3a43b]">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={15} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="mt-1 text-xs text-[#999]">Demo rating</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#eee5da] bg-white p-8">
                        <p className="text-sm text-[#85858a]">Client Feedback</p>
                        <h3 className="mt-5 text-4xl font-semibold tracking-tight">
                            06<span className="text-[#f36b35]">+</span>
                        </h3>
                        <p className="mt-2 text-xs text-[#999]">
                            Sample testimonial entries
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#eee5da] bg-white p-8">
                        <p className="text-sm text-[#85858a]">Our Commitment</p>
                        <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                            Client First<span className="text-[#f36b35]">.</span>
                        </h3>
                        <p className="mt-2 text-xs text-[#999]">
                            Focused on a helpful property experience
                        </p>
                    </div>

                </div>
            </section>

            {/* Reviews */}
            <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-28">
                <div className="mx-auto max-w-[1200px]">

                    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f36b35]">
                                Testimonials
                            </span>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                What People Say
                            </h2>

                            <p className="mt-3 text-sm text-[#85858a]">
                                Explore feedback from different property experiences.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => changeFilter(filter)}
                                    className={`rounded-full px-5 py-3 text-xs font-semibold transition ${activeFilter === filter
                                            ? "bg-[#f36b35] text-white"
                                            : "border border-[#e9e0d6] bg-white text-[#77777d] hover:border-[#f36b35] hover:text-[#f36b35]"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {visibleTestimonials.map((item, index) => (
                            <article
                                key={item.name}
                                className="group flex flex-col rounded-2xl border border-[#eee5da] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#f36b35]/40 hover:shadow-[0_20px_50px_rgba(32,33,39,0.06)]"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-1 text-[#f3a43b]">
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" />
                                        ))}
                                    </div>

                                    <Quote
                                        size={30}
                                        className="text-[#f36b35]/20 transition group-hover:text-[#f36b35]"
                                    />
                                </div>

                                <p className="mt-7 flex-1 text-sm leading-7 text-[#77777d]">
                                    “{item.text}”
                                </p>

                                <div className="mt-7 border-t border-[#eee5da] pt-6">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={48}
                                            height={48}
                                            className="h-12 w-12 rounded-full object-cover"
                                        />

                                        <div className="min-w-0 flex-1">
                                            <h3 className="truncate text-sm font-semibold text-[#202127]">
                                                {item.name}
                                            </h3>
                                            <p className="mt-1 text-xs text-[#999]">
                                                {item.role}
                                            </p>
                                        </div>

                                        <span className="text-xs text-[#aaa]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#999]">
                                        <span>{item.property}</span>
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {visibleTestimonials.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-[#e5d9cc] bg-white px-6 py-16 text-center">
                            <h3 className="text-xl font-semibold">No reviews available</h3>
                            <p className="mt-2 text-sm text-[#999]">
                                There are no testimonials in this category yet.
                            </p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex items-center justify-center gap-3">
                            <button
                                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                                disabled={currentPage === 1}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e9e0d6] bg-white text-[#77777d] transition hover:border-[#f36b35] hover:text-[#f36b35] disabled:cursor-not-allowed disabled:opacity-40"
                                aria-label="Previous page"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <span className="text-sm font-medium text-[#77777d]">
                                {currentPage} / {totalPages}
                            </span>

                            <button
                                onClick={() =>
                                    setCurrentPage((page) => Math.min(totalPages, page + 1))
                                }
                                disabled={currentPage === totalPages}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e9e0d6] bg-white text-[#77777d] transition hover:border-[#f36b35] hover:text-[#f36b35] disabled:cursor-not-allowed disabled:opacity-40"
                                aria-label="Next page"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* CTA */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
                <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-[#25262c] px-7 py-16 text-center sm:px-12 lg:py-20">
                    <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#f36b35]/20 blur-3xl" />

                    <div className="relative">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f36b35]">
                            Your Journey Starts Here
                        </span>

                        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                            Ready to Find Your Place?
                        </h2>

                        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/55">
                            Explore our property listings and take the next step toward
                            finding a place that feels like home.
                        </p>

                        <Link
                            href="/properties"
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f36b35] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#e45b27]"
                        >
                            Browse Properties
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
