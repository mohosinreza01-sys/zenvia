
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowUpRight,
    Bath,
    BedDouble,
    Check,
    ChevronRight,
    Heart,
    MapPin,
    Maximize,
    Phone,
    Share2,
    ShieldCheck,
} from "lucide-react";

import InquiryForm from "../../components/others/InquiryForm";
import { properties } from "../../data/properties";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function PropertyDetailsPage({ params }: PageProps) {
    const { id } = await params;

    const property = properties.find(
        (item) => item.id === Number(id)
    );

    if (!property) {
        notFound();
    }

    const gallery =
        property.images?.length > 0
            ? property.images
            : [property.image];

    return (
        <main className="min-h-screen bg-[#fffaf4] pb-20">
            {/* Breadcrumb */}
            <section className="border-b border-[#eee8df] bg-white">
                <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-12">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#85858a]">
                        <Link href="/" className="hover:text-[#f36b35]">
                            Home
                        </Link>
                        <ChevronRight size={14} />
                        <Link
                            href="/properties"
                            className="hover:text-[#f36b35]"
                        >
                            Properties
                        </Link>
                        <ChevronRight size={14} />
                        <span className="font-medium text-[#202127]">
                            {property.title}
                        </span>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* Top Actions */}
                <div className="flex items-center justify-between py-7">
                    <Link
                        href="/properties"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#55555b] transition hover:text-[#f36b35]"
                    >
                        <ArrowLeft size={17} />
                        Back to Properties
                    </Link>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            aria-label="Share property"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e9e3dc] bg-white text-[#55555b] hover:border-[#f36b35] hover:text-[#f36b35]"
                        >
                            <Share2 size={17} />
                        </button>

                        <button
                            type="button"
                            aria-label="Save property"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e9e3dc] bg-white text-[#55555b] hover:border-[#f36b35] hover:text-[#f36b35]"
                        >
                            <Heart size={17} />
                        </button>
                    </div>
                </div>

                {/* Property Heading */}
                <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                    <div>
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-[#fff0e8] px-4 py-1.5 text-xs font-semibold text-[#f36b35]">
                                For {property.category}
                            </span>

                            {property.featured && (
                                <span className="rounded-full bg-[#202127] px-4 py-1.5 text-xs font-medium text-white">
                                    Featured Property
                                </span>
                            )}

                            <span className="rounded-full border border-[#e9e3dc] px-4 py-1.5 text-xs font-medium text-[#77777d]">
                                {property.type}
                            </span>
                        </div>

                        <h1 className="text-3xl font-semibold tracking-tight text-[#202127] sm:text-4xl lg:text-5xl">
                            {property.title}
                        </h1>

                        <p className="mt-3 flex items-center gap-2 text-sm text-[#85858a] sm:text-base">
                            <MapPin size={17} className="text-[#f36b35]" />
                            {property.address}
                        </p>
                    </div>

                    <div className="lg:text-right">
                        <p className="mb-1 text-sm text-[#85858a]">
                            {property.category === "Rent"
                                ? "Monthly Rent"
                                : "Asking Price"}
                        </p>

                        <p className="text-3xl font-semibold text-[#f36b35] sm:text-4xl">
                            {property.priceLabel}
                        </p>
                    </div>
                </div>

                {/* Image Gallery */}
                <section className="grid gap-3 overflow-hidden rounded-2xl lg:grid-cols-2">
                    <div className="relative min-h-[280px] overflow-hidden sm:min-h-[430px]">
                        <Image
                            src={gallery[0]}
                            alt={property.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition duration-700 hover:scale-105"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {gallery.slice(1, 5).map((image, index) => (
                            <div
                                key={`${image}-${index}`}
                                className="relative min-h-[135px] overflow-hidden sm:min-h-[208px]"
                            >
                                <Image
                                    src={image}
                                    alt={`${property.title} view ${index + 2}`}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition duration-700 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Main Layout */}
                <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_370px]">

                    {/* Left Content */}
                    <div>

                        {/* Highlights */}
                        <section className="border-b border-[#eae3da] pb-9">
                            <div className="mb-6">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f36b35]">
                                    Property Overview
                                </p>

                                <h2 className="text-2xl font-semibold text-[#202127] sm:text-3xl">
                                    Property Highlights
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {[
                                    {
                                        label: "Bedrooms",
                                        value: property.beds,
                                        icon: BedDouble,
                                    },
                                    {
                                        label: "Bathrooms",
                                        value: property.baths,
                                        icon: Bath,
                                    },
                                    {
                                        label: "Sq. Ft.",
                                        value: property.area.toLocaleString(),
                                        icon: Maximize,
                                    },
                                    {
                                        label: "Year Built",
                                        value: property.yearBuilt,
                                        icon: ShieldCheck,
                                    },
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className="rounded-xl border border-[#eee8df] bg-white p-5"
                                        >
                                            <Icon
                                                className="mb-4 text-[#f36b35]"
                                                size={23}
                                            />

                                            <p className="text-2xl font-semibold text-[#202127]">
                                                {item.value}
                                            </p>

                                            <p className="mt-1 text-sm text-[#85858a]">
                                                {item.label}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Description */}
                        <section className="border-b border-[#eae3da] py-9">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f36b35]">
                                About This Property
                            </p>

                            <h2 className="mb-5 text-2xl font-semibold text-[#202127]">
                                A Place to Call Home
                            </h2>

                            <p className="max-w-3xl text-[15px] leading-8 text-[#77777d]">
                                {property.description}
                            </p>
                        </section>

                        {/* Features */}
                        <section className="border-b border-[#eae3da] py-9">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f36b35]">
                                What You Get
                            </p>

                            <h2 className="mb-7 text-2xl font-semibold text-[#202127]">
                                Property Features
                            </h2>

                            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                                {property.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3 text-sm text-[#55555b]"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff0e8] text-[#f36b35]">
                                            <Check size={15} />
                                        </span>

                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Property Details */}
                        <section className="py-9">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f36b35]">
                                More Information
                            </p>

                            <h2 className="mb-6 text-2xl font-semibold text-[#202127]">
                                Property Details
                            </h2>

                            <div className="overflow-hidden rounded-xl border border-[#eee8df] bg-white">
                                {[
                                    ["Property ID", property.propertyId],
                                    ["Property Type", property.type],
                                    ["Listing Type", `For ${property.category}`],
                                    ["Year Built", String(property.yearBuilt)],
                                    [
                                        "Property Size",
                                        `${property.area.toLocaleString()} Sq. Ft.`,
                                    ],
                                    ["Location", property.location],
                                ].map(([label, value], index) => (
                                    <div
                                        key={label}
                                        className={`flex flex-wrap justify-between gap-3 px-5 py-4 text-sm ${index !== 5
                                            ? "border-b border-[#f0ebe5]"
                                            : ""
                                            }`}
                                    >
                                        <span className="text-[#85858a]">
                                            {label}
                                        </span>

                                        <span className="font-medium text-[#303037]">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Agent Sidebar */}

                    <aside className="self-start">
                        <div className="lg:sticky lg:top-8">
                            <InquiryForm
                                propertyTitle={property.title}
                                propertyId={property.propertyId}
                                agentName={property.agent.name}
                                agentPhone={property.agent.phone}
                                agentEmail={property.agent.email}
                            />
                        </div>
                    </aside>

                </div>

                {/* Bottom CTA */}
                <section className="mt-16 overflow-hidden rounded-2xl bg-[#202127] px-7 py-12 text-center sm:px-12 sm:py-16">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#f36b35]">
                        Find Your Perfect Place
                    </p>

                    <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                        Still Exploring? Your Dream Property Might Be Next.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">
                        Explore more properties and discover a place that feels
                        right for you.
                    </p>

                    <Link
                        href="/properties"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f36b35] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#e45b27]"
                    >
                        Explore Properties
                        <ArrowUpRight size={17} />
                    </Link>
                </section>
            </div>
        </main>
    );
}
