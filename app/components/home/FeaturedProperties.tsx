
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    MapPin,
    BedDouble,
    Bath,
    Ruler,
    Heart,
    ArrowRight,
} from "lucide-react";

type Property = {
    id: number;
    title: string;
    location: string;
    description: string;
    image: string;
    category: string;
    status: "For Sale" | "For Rent";
    beds: number;
    baths: number;
    area: string;
    price: string;
    priceLabel: string;
    slug: string;
};

const properties: Property[] = [
    {
        id: 1,
        title: "Modern Luxury Villa",
        location: "Beverly Hills, California",
        description:
            "Beautifully designed villa with spacious interiors and stunning architectural details.",
        image:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
        category: "Villas",
        status: "For Sale",
        beds: 4,
        baths: 3,
        area: "2,400 sqft",
        price: "$850,000",
        priceLabel: "Starting Price",
        slug: "modern-villa",
    },
    {
        id: 2,
        title: "Contemporary Apartment",
        location: "Manhattan, New York",
        description:
            "Elegant urban living with beautiful interiors and convenient access to city life.",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
        category: "Apartments",
        status: "For Rent",
        beds: 3,
        baths: 2,
        area: "1,800 sqft",
        price: "$3,500/mo",
        priceLabel: "Monthly Rent",
        slug: "apartment",
    },
    {
        id: 3,
        title: "Premium Family Home",
        location: "Austin, Texas",
        description:
            "A thoughtfully planned residence with a relaxing outdoor space and modern facilities.",
        image:
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
        category: "Villas",
        status: "For Sale",
        beds: 5,
        baths: 4,
        area: "3,100 sqft",
        price: "$920,000",
        priceLabel: "Starting Price",
        slug: "family-home",
    },
];

const filters = [
    "All Properties",
    "For Sale",
    "For Rent",
    "Apartments",
    "Villas",
];

export default function FeaturedProperties() {
    const [activeFilter, setActiveFilter] =
        useState("All Properties");

    const [favorites, setFavorites] = useState<number[]>([]);

    const filteredProperties = properties.filter((property) => {
        if (activeFilter === "All Properties") return true;

        if (activeFilter === "For Sale" || activeFilter === "For Rent") {
            return property.status === activeFilter;
        }

        return property.category === activeFilter;
    });

    const toggleFavorite = (id: number) => {
        setFavorites((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="bg-[#fffaf5] px-6 py-24 md:px-12 lg:px-16">
            <div className="mx-auto max-w-[1440px]">

                {/* Section Header */}
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                    <div>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f1dfd2] px-4 py-2 text-xs font-semibold tracking-[1.5px] text-[#f36b35]">
                            <span className="h-2 w-2 rounded-full bg-[#f36b35]" />
                            EXPLORE OUR COLLECTION
                        </span>

                        <h2 className="max-w-[600px] text-4xl font-semibold leading-tight tracking-tight text-[#202127] md:text-5xl lg:text-[58px]">
                            Discover Our{" "}
                            <span className="text-[#f36b35]">Featured</span>{" "}
                            Properties
                        </h2>

                        <p className="mt-5 max-w-[520px] text-base leading-7 text-[#858585]">
                            Explore carefully selected properties designed to
                            match your lifestyle, preferences and investment goals.
                        </p>
                    </div>

                    <Link
                        href="/properties"
                        className="group inline-flex h-14 shrink-0 items-center gap-4 self-start rounded-full border border-[#e8dcd1] bg-white px-6 text-sm font-semibold text-[#202127] transition hover:border-[#f36b35] hover:text-[#f36b35] md:self-auto"
                    >
                        View All Properties
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Filter Navigation */}
                <div className="mt-12 flex flex-wrap items-center gap-3 border-b border-[#eee5dc] pb-6">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            className={`rounded-full px-6 py-3 text-sm font-medium transition duration-300 ${activeFilter === filter
                                    ? "bg-[#f36b35] font-semibold text-white shadow-md shadow-[#f36b35]/15"
                                    : "border border-[#e9dfd5] bg-white text-[#55555b] hover:border-[#f36b35] hover:text-[#f36b35]"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Property Cards */}
                <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">

                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property) => (
                            <article
                                key={property.id}
                                className="group overflow-hidden rounded-2xl border border-[#eee8e0] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]"
                            >
                                {/* Image */}
                                <div className="relative h-[270px] overflow-hidden">

                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* Status */}
                                    <span
                                        className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold text-white ${property.status === "For Sale"
                                                ? "bg-[#f36b35]"
                                                : "bg-[#202127]"
                                            }`}
                                    >
                                        {property.status}
                                    </span>

                                    {/* Favorite */}
                                    <button
                                        type="button"
                                        aria-label={
                                            favorites.includes(property.id)
                                                ? "Remove from favorites"
                                                : "Add to favorites"
                                        }
                                        aria-pressed={favorites.includes(property.id)}
                                        onClick={() => toggleFavorite(property.id)}
                                        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#25252b] transition hover:text-[#f36b35]"
                                    >
                                        <Heart
                                            className={`h-5 w-5 ${favorites.includes(property.id)
                                                    ? "fill-[#f36b35] text-[#f36b35]"
                                                    : ""
                                                }`}
                                        />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-6">

                                    {/* Location */}
                                    <div className="flex items-center gap-2 text-xs text-[#929292]">
                                        <MapPin className="h-3.5 w-3.5 text-[#f36b35]" />
                                        {property.location}
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-3 text-xl font-semibold text-[#202127]">
                                        {property.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-sm leading-6 text-[#929292]">
                                        {property.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-[#eee8e0] pb-5 text-xs text-[#66666b]">
                                        <span className="flex items-center gap-1.5">
                                            <BedDouble className="h-4 w-4 text-[#f36b35]" />
                                            {property.beds} Beds
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <Bath className="h-4 w-4 text-[#f36b35]" />
                                            {property.baths} Baths
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <Ruler className="h-4 w-4 text-[#f36b35]" />
                                            {property.area}
                                        </span>
                                    </div>

                                    {/* Price & Details */}
                                    <div className="flex items-center justify-between pt-5">
                                        <div>
                                            <p className="text-xs text-[#999]">
                                                {property.priceLabel}
                                            </p>

                                            <p className="mt-1 text-xl font-bold text-[#f36b35]">
                                                {property.price}
                                            </p>
                                        </div>

                                        <Link
                                            href={`/properties/${property.slug}`}
                                            aria-label={`View ${property.title}`}
                                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#202127] text-white transition hover:bg-[#f36b35]"
                                        >
                                            <ArrowUpRight className="h-5 w-5" />
                                        </Link>
                                    </div>

                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full rounded-2xl border border-dashed border-[#e8dcd1] bg-white py-16 text-center">
                            <p className="text-lg font-semibold text-[#202127]">
                                No properties found
                            </p>
                            <p className="mt-2 text-sm text-[#929292]">
                                Try selecting another category.
                            </p>
                        </div>
                    )}

                </div>

                {/* Bottom CTA */}
                <div className="mt-14 flex justify-center">
                    <Link
                        href="/properties"
                        className="inline-flex items-center gap-3 rounded-full border border-[#e8dcd1] px-8 py-4 text-sm font-semibold text-[#202127] transition hover:border-[#f36b35] hover:bg-[#f36b35] hover:text-white"
                    >
                        Explore All Properties
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
