
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ChevronDown,
    Search,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

const categories = [
    "All Questions",
    "Buying",
    "Selling",
    "Renting",
    "Payments",
];

const faqs = [
    {
        category: "Buying",
        question: "How do I start buying a property?",
        answer:
            "Start by exploring available properties, selecting one that matches your requirements and budget, and contacting our property agents. Our team will guide you through property visits, documentation and the purchasing process.",
    },
    {
        category: "Buying",
        question: "Can I schedule a property viewing?",
        answer:
            "Yes! You can contact our team through the contact page or property details page to arrange a convenient viewing appointment.",
    },
    {
        category: "Buying",
        question: "What documents are required to buy a property?",
        answer:
            "Requirements vary depending on the property and location. Generally, buyers may need valid identification, financial documents and relevant transaction paperwork. Our team can guide you through the requirements.",
    },
    {
        category: "Selling",
        question: "How can I list my property for sale?",
        answer:
            "Contact our team with your property details, location, photographs and expected price. Our representatives will help you understand the listing process.",
    },
    {
        category: "Selling",
        question: "How do you determine property value?",
        answer:
            "Property value is influenced by location, size, condition, amenities and current market trends. Our team can help you understand these factors.",
    },
    {
        category: "Renting",
        question: "Can I find rental properties through your website?",
        answer:
            "Yes. Explore our available rental listings and contact our agents for property information, availability and viewing appointments.",
    },
    {
        category: "Renting",
        question: "Can I schedule a rental property visit?",
        answer:
            "Absolutely. Contact our property team to arrange a suitable viewing time.",
    },
    {
        category: "Payments",
        question: "What payment methods are accepted?",
        answer:
            "Payment arrangements depend on the property and transaction agreement. Our team will explain the available payment options before you proceed.",
    },
    {
        category: "Payments",
        question: "Are there any additional property costs?",
        answer:
            "Additional costs may include taxes, registration, legal fees, maintenance and other transaction-related expenses. These vary depending on the property and location.",
    },
];

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState("All Questions");
    const [activeFAQ, setActiveFAQ] = useState<number | null>(0);
    const [search, setSearch] = useState("");

    const filteredFAQs = faqs.filter((faq) => {
        const matchesCategory =
            activeCategory === "All Questions" ||
            faq.category === activeCategory;

        const matchesSearch =
            faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <main className="bg-white">

            {/* HERO */}
            <section className="bg-[#FFF5EC] px-5 py-20 text-center md:py-28">

                <span className="rounded-full border border-orange-500 px-5 py-2 text-xs uppercase tracking-wider text-gray-700">
                    Help Center
                </span>

                <h1 className="mt-7 text-4xl font-semibold tracking-tight text-[#171923] md:text-6xl">
                    Frequently Asked Questions
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
                    Find answers to common questions about buying, selling
                    and renting properties. We're here to help.
                </p>

                {/* SEARCH */}
                <div className="mx-auto mt-9 flex max-w-xl items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm">
                    <Search size={19} className="shrink-0 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search your question..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setActiveFAQ(null);
                        }}
                        className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />
                </div>

            </section>

            {/* FAQ CONTENT */}
            <section className="mx-auto max-w-5xl px-5 py-20">

                <div className="mb-10 text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                        Got Questions?
                    </span>

                    <h2 className="mt-3 text-3xl font-semibold text-[#171923] md:text-4xl">
                        Everything You Need to Know
                    </h2>
                </div>

                {/* CATEGORY FILTER */}
                <div className="mb-10 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setActiveFAQ(null);
                            }}
                            className={`rounded-full px-5 py-3 text-sm font-medium transition ${activeCategory === category
                                ? "bg-orange-600 text-white"
                                : "bg-[#FFF5EC] text-gray-700 hover:bg-orange-100"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* ACCORDION */}
                <div className="space-y-4">
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((faq, index) => {
                            const isOpen = activeFAQ === index;

                            return (
                                <div
                                    key={faq.question}
                                    className={`overflow-hidden rounded-xl border transition-colors ${isOpen
                                        ? "border-orange-200 bg-[#FFF9F4]"
                                        : "border-gray-100 bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() =>
                                            setActiveFAQ(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                                    >
                                        <span className="text-base font-semibold text-[#171923] md:text-lg">
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen
                                                ? "rotate-180 bg-orange-600 text-white"
                                                : "bg-[#FFF5EC] text-gray-700"
                                                }`}
                                        >
                                            <ChevronDown size={19} />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-6">
                                            <div className="border-t border-orange-100 pt-5">
                                                <p className="text-sm leading-7 text-gray-500">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <div className="py-14 text-center">
                            <Search className="mx-auto text-gray-300" size={35} />
                            <h3 className="mt-4 text-lg font-semibold text-gray-800">
                                No questions found
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Try searching with a different keyword.
                            </p>
                        </div>
                    )}
                </div>

            </section>

            {/* CONTACT CTA */}
            <section className="px-5 pb-20">
                <div className="mx-auto max-w-7xl rounded-2xl bg-[#171923] px-7 py-16 text-center md:py-20">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-orange-500">
                        <MessageCircle size={27} />
                    </div>

                    <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                        Still Have Questions?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
                        Can't find the answer you're looking for?
                        Our friendly team is ready to help you.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
                    >
                        Contact Our Team
                        <ArrowUpRight size={18} />
                    </Link>

                </div>
            </section>

        </main>
    );
}
