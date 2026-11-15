
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Search,
    MapPin,
    BedDouble,
    Bath,
    Maximize,
    Heart,
    ArrowUpRight,
    SlidersHorizontal,
    ChevronDown,
    House,
} from "lucide-react";

import { properties } from "../data/properties";
import type { Property } from "../data/properties";

const categories = ["All", "Apartment", "House", "Villa"] as const;

export default function PropertiesPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [maxPrice, setMaxPrice] = useState("all");
    const [favorites, setFavorites] = useState<number[]>([]);

    const filteredProperties = useMemo(() => {
        return properties.filter((property) => {
            const matchesTab =
                activeTab === "All" || property.category === activeTab;

            const matchesCategory =
                activeCategory === "All" || property.type === activeCategory;

            const matchesSearch =
                property.title.toLowerCase().includes(search.toLowerCase()) ||
                property.location.toLowerCase().includes(search.toLowerCase());

            const matchesPrice =
                maxPrice === "all" || property.price <= Number(maxPrice);

            return (
                matchesTab &&
                matchesCategory &&
                matchesSearch &&
                matchesPrice
            );
        });
    }, [activeTab, activeCategory, search, maxPrice]);

    const toggleFavorite = (id: number) => {
        setFavorites((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        );
    };

    return (
        <main className="min-h-screen bg-[#fffaf4]">

            {/* ================= HERO ================= */}
            <section className="px-5 pb-12 pt-20 md:px-10 md:pb-16 md:pt-24 lg:px-16">
                <div className="mx-auto max-w-[1440px]">

                    <div className="mb-8 flex items-center gap-2 text-sm text-[#85858a]">
                        <Link href="/" className="hover:text-[#f36b35]">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="font-medium text-[#202127]">
                            Properties
                        </span>
                    </div>

                    <div className="grid items-end gap-8 md:grid-cols-2">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#f1dfd2] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#e96b37]">
                                <span className="h-2 w-2 rounded-full bg-[#f36b35]" />
                                Discover Properties
                            </span>

                            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#202127] md:text-5xl lg:text-6xl">
                                Find a Place
                                <br />
                                <span className="text-[#f36b35]">You'll Love.</span>
                            </h1>
                        </div>

                        <p className="max-w-lg text-sm leading-8 text-[#85858a] md:ml-auto md:text-base">
                            Explore thoughtfully selected properties designed around your
                            lifestyle. Find apartments, houses and villas that feel like
                            the perfect fit.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= SEARCH BAR ================= */}
            <section className="px-5 md:px-10 lg:px-16">
                <div className="mx-auto max-w-[1440px]">
                    <div className="rounded-[22px] border border-[#f0e6dd] bg-white p-5 shadow-[0_15px_50px_rgba(40,30,20,0.04)] md:p-7">

                        <div className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr_auto]">

                            <div className="relative">
                                <label
                                    htmlFor="property-search"
                                    className="mb-2 block text-xs font-semibold text-[#55555a]"
                                >
                                    Location or Keyword
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-[#eee7e0] bg-[#fffdfb] px-4">
                                    <Search size={18} className="shrink-0 text-[#f36b35]" />

                                    <input
                                        id="property-search"
                                        type="search"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search location or property..."
                                        className="h-12 w-full bg-transparent text-sm text-[#202127] outline-none placeholder:text-[#aaa]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="property-category"
                                    className="mb-2 block text-xs font-semibold text-[#55555a]"
                                >
                                    Property Type
                                </label>

                                <div className="relative">
                                    <select
                                        id="property-category"
                                        value={activeCategory}
                                        onChange={(e) => setActiveCategory(e.target.value)}
                                        className="h-12 w-full appearance-none rounded-xl border border-[#eee7e0] bg-[#fffdfb] px-4 pr-10 text-sm text-[#55555a] outline-none focus:border-[#f36b35]"
                                    >
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category === "All" ? "All Types" : category}
                                            </option>
                                        ))}
                                    </select>

                                    <ChevronDown
                                        size={16}
                                        className="pointer-events-none absolute right-4 top-4 text-[#85858a]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="property-price"
                                    className="mb-2 block text-xs font-semibold text-[#55555a]"
                                >
                                    Maximum Price
                                </label>

                                <div className="relative">
                                    <select
                                        id="property-price"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        className="h-12 w-full appearance-none rounded-xl border border-[#eee7e0] bg-[#fffdfb] px-4 pr-10 text-sm text-[#55555a] outline-none focus:border-[#f36b35]"
                                    >
                                        <option value="all">Any Price</option>
                                        <option value="100000">Up to ৳1 Lac</option>
                                        <option value="500000">Up to ৳5 Lac</option>
                                        <option value="20000000">Up to ৳2 Crore</option>
                                        <option value="30000000">Up to ৳3 Crore</option>
                                    </select>

                                    <ChevronDown
                                        size={16}
                                        className="pointer-events-none absolute right-4 top-4 text-[#85858a]"
                                    />
                                </div>
                            </div>

                            <div className="flex items-end">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearch("");
                                        setActiveCategory("All");
                                        setMaxPrice("all");
                                        setActiveTab("All");
                                    }}
                                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#f36b35] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e45b27] md:w-auto"
                                >
                                    <SlidersHorizontal size={17} />
                                    Reset
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PROPERTY LISTINGS ================= */}
            <section className="px-5 py-20 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-[1440px]">

                    {/* Heading and Filters */}
                    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f36b35]">
                                Our Collection
                            </span>

                            <h2 className="mt-3 text-3xl font-semibold text-[#202127] md:text-4xl">
                                Explore Properties
                            </h2>

                            <p className="mt-3 text-sm text-[#85858a]">
                                Showing {filteredProperties.length} properties
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["All", "Sale", "Rent"].map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${activeTab === tab
                                        ? "bg-[#202127] text-white"
                                        : "border border-[#e9ded4] bg-white text-[#77777d] hover:border-[#f36b35] hover:text-[#f36b35]"
                                        }`}
                                >
                                    {tab === "All"
                                        ? "All Properties"
                                        : tab === "Sale"
                                            ? "For Sale"
                                            : "For Rent"}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* Cards */}
                    {filteredProperties.length > 0 ? (
                        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProperties.map((property) => (
                                <article
                                    key={property.id}
                                    className="group overflow-hidden rounded-[22px] border border-[#f0e6dd] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(40,30,20,0.09)]"
                                >

                                    {/* Image */}
                                    <div className="relative h-[260px] overflow-hidden">
                                        <Image
                                            src={property.image}
                                            alt={property.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        <div className="absolute left-5 top-5 flex gap-2">
                                            <span className="rounded-full bg-[#f36b35] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white">
                                                For {property.category}
                                            </span>

                                            {property.featured && (
                                                <span className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#202127]">
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => toggleFavorite(property.id)}
                                            aria-label={
                                                favorites.includes(property.id)
                                                    ? "Remove from favorites"
                                                    : "Add to favorites"
                                            }
                                            aria-pressed={favorites.includes(property.id)}
                                            className={`absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all ${favorites.includes(property.id)
                                                ? "bg-[#f36b35] text-white"
                                                : "bg-white text-[#202127] hover:bg-[#f36b35] hover:text-white"
                                                }`}
                                        >
                                            <Heart
                                                size={18}
                                                fill={
                                                    favorites.includes(property.id)
                                                        ? "currentColor"
                                                        : "none"
                                                }
                                            />
                                        </button>

                                        <div className="absolute bottom-5 left-5 rounded-lg bg-white/95 px-4 py-2 text-sm font-bold text-[#202127]">
                                            {property.priceLabel}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-6">

                                        <div className="mb-3 flex items-center gap-2 text-xs text-[#85858a]">
                                            <MapPin size={14} className="text-[#f36b35]" />
                                            {property.location}
                                        </div>

                                        <h3 className="text-xl font-semibold text-[#202127] transition-colors group-hover:text-[#f36b35]">
                                            {property.title}
                                        </h3>

                                        <div className="mt-5 flex items-center justify-between border-t border-[#f1ece7] pt-5">

                                            <div className="flex items-center gap-2 text-xs text-[#77777d]">
                                                <BedDouble size={16} className="text-[#f36b35]" />
                                                {property.beds} Beds
                                            </div>

                                            <div className="flex items-center gap-2 text-xs text-[#77777d]">
                                                <Bath size={16} className="text-[#f36b35]" />
                                                {property.baths} Baths
                                            </div>

                                            <div className="flex items-center gap-2 text-xs text-[#77777d]">
                                                <Maximize size={16} className="text-[#f36b35]" />
                                                {property.area} sqft
                                            </div>

                                        </div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-xs font-medium text-[#85858a]">
                                                <House size={15} />
                                                {property.type}
                                            </span>

                                            <Link
                                                href={`/properties/${property.id}`}
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f36b35] transition-all hover:gap-3"
                                            >
                                                View Details
                                                <ArrowUpRight size={17} />
                                            </Link>
                                        </div>

                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-[24px] border border-[#f0e6dd] bg-white px-6 py-20 text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#f36b35]">
                                <Search size={28} />
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-[#202127]">
                                No Properties Found
                            </h3>

                            <p className="mt-3 text-sm text-[#85858a]">
                                Try changing your search or filter options.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setActiveCategory("All");
                                    setMaxPrice("all");
                                    setActiveTab("All");
                                }}
                                className="mt-7 rounded-full bg-[#f36b35] px-7 py-3 text-sm font-semibold text-white hover:bg-[#e45b27]"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="px-5 pb-24 md:px-10 lg:px-16">
                <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 rounded-[26px] bg-[#202127] p-8 md:flex-row md:p-12">

                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f58a5d]">
                            Need Assistance?
                        </span>

                        <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                            Can't Find What You're Looking For?
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                            Tell us what you need. Our team can help you explore your
                            property options.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#f36b35] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#e45b27]"
                    >
                        Talk To Our Team
                        <ArrowUpRight size={18} />
                    </Link>

                </div>
            </section>

        </main>
    );
}
