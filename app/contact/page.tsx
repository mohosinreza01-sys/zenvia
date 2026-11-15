
"use client";

import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    ChevronDown,
    Send,
} from "lucide-react";

const offices = [
    {
        city: "New York, USA",
        address: "4140 Parker New Mexico 31134",
        phone: "(217) 555-0113",
        email: "estate@example.com",
    },
    {
        city: "London, United Kingdom",
        address: "London Business District",
        phone: "+44 20 7946 0958",
        email: "london@example.com",
    },
    {
        city: "Dubai, United Arab Emirates",
        address: "Downtown Dubai, UAE",
        phone: "+971 4 555 0190",
        email: "dubai@example.com",
    },
    {
        city: "Los Angeles, USA",
        address: "Los Angeles, California",
        phone: "(310) 555-0180",
        email: "la@example.com",
    },
];

export default function ContactUs() {
    const [activeOffice, setActiveOffice] = useState(0);

    return (
        <main className="bg-white">

            {/* CONTACT HERO */}
            <section className="relative overflow-hidden bg-[#FFF5EC] px-5 pb-16 pt-12">

                <div className="relative z-10 mx-auto max-w-7xl text-center">
                    <span className="inline-flex rounded-full border border-orange-500 px-5 py-2 text-[11px] font-medium uppercase tracking-wide text-gray-700">
                        Contact Us
                    </span>

                    <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#171923] md:text-6xl">
                        CONTACT US
                    </h1>
                </div>

                {/* CONTACT CARD */}
                <div className="relative z-10 mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 rounded-2xl bg-white p-4 shadow-lg shadow-black/10 lg:grid-cols-2 lg:p-5">

                    {/* FORM */}
                    <div className="rounded-xl bg-[#FFF5EC] p-6 md:p-8">
                        <h2 className="mb-6 text-2xl font-semibold text-[#171923]">
                            Send Us A Message
                        </h2>

                        <form className="space-y-3">

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    required
                                    className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-orange-500"
                                />

                                <input
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    required
                                    className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-orange-500"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                required
                                className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-orange-500"
                            />

                            <input
                                type="text"
                                placeholder="Enter Your Address"
                                className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-orange-500"
                            />

                            <textarea
                                placeholder="Write Your Message"
                                required
                                rows={7}
                                className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 text-sm outline-none transition focus:border-orange-500"
                            />

                            <button
                                type="submit"
                                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 text-sm font-semibold text-white transition hover:bg-gray-900"
                            >
                                Contact Agents
                                <Send size={16} />
                            </button>

                        </form>
                    </div>

                    {/* GOOGLE MAP */}
                    <div className="min-h-[350px] overflow-hidden rounded-xl lg:min-h-[510px]">
                        <iframe
                            title="Our Office Location"
                            src="https://maps.google.com/maps?q=New%20York%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            className="min-h-[350px] border-0 lg:min-h-[510px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </section>

            {/* OFFICE LOCATIONS */}
            <section className="px-5 py-20 md:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">

                    {/* IMAGE */}
                    <div className="h-[420px] overflow-hidden rounded-xl md:h-[520px]">
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=85"
                            alt="Real estate property consultation"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* CONTENT */}
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                            Our Presence
                        </span>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171923] md:text-5xl">
                            The World We Serve
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">
                            Receive tailored property suggestions and professional
                            guidance during your entire buying or renting journey
                            for a seamless experience.
                        </p>

                        {/* ACCORDION */}
                        <div className="mt-7 space-y-3">
                            {offices.map((office, index) => {
                                const isActive = activeOffice === index;

                                return (
                                    <div
                                        key={office.city}
                                        className="overflow-hidden rounded-lg bg-[#FFF5EC]"
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveOffice(isActive ? -1 : index)
                                            }
                                            className="flex w-full items-center justify-between px-5 py-4 text-left"
                                        >
                                            <span className="text-lg font-semibold text-[#171923]">
                                                {office.city}
                                            </span>

                                            <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform ${isActive ? "rotate-180" : ""}`}>
                                                <ChevronDown size={17} />
                                            </span>
                                        </button>

                                        {isActive && (
                                            <div className="space-y-3 px-5 pb-5 text-sm text-gray-600">
                                                <div className="flex items-center gap-3">
                                                    <MapPin size={16} className="shrink-0 text-orange-600" />
                                                    {office.address}
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Phone size={16} className="shrink-0 text-orange-600" />
                                                    {office.phone}
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Mail size={16} className="shrink-0 text-orange-600" />
                                                    {office.email}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
