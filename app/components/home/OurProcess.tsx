
import {
    House,
    Handshake,
    KeyRound,
    ChartNoAxesCombined,
    ArrowUpRight,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Select a Property",
        description: "Explore our collection and find a property that matches your needs.",
        button: "Explore Properties",
        icon: House,
        href: "/properties",
    },
    {
        number: "02",
        title: "Connect With an Agent",
        description: "Talk with our experienced agents to discuss your requirements.",
        button: "Contact Agent",
        icon: Handshake,
        href: "/contact",
    },
    {
        number: "03",
        title: "Secure Your Financing",
        description: "Get expert guidance to find the right financing option.",
        button: "Explore Financing",
        icon: KeyRound,
        href: "/financing",
    },
    {
        number: "04",
        title: "Get Your Dream Home",
        description: "Complete the process and receive the keys to your new home.",
        button: "Get Started",
        icon: ChartNoAxesCombined,
        href: "/contact",
    },
];

export default function OurProcess() {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-5">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                        Simple & Seamless
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Our Process
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-gray-500">
                        Four simple steps to help you find and own your perfect property.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="group flex min-h-[410px] flex-col items-center rounded-[24px] bg-[#FFF5EC] px-6 py-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/70"
                            >
                                {/* Icon */}
                                <div className="mb-9 flex h-32 w-32 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-105">
                                    <Icon
                                        size={49}
                                        strokeWidth={1.6}
                                        className="text-orange-600"
                                    />
                                </div>

                                {/* Number */}
                                <h3 className="mb-5 text-5xl font-bold tracking-tight text-gray-900">
                                    {step.number}
                                </h3>

                                {/* Content */}
                                <h4 className="mb-3 text-xl font-semibold text-gray-900">
                                    {step.title}
                                </h4>

                                <p className="mb-7 max-w-[240px] text-sm leading-6 text-gray-600">
                                    {step.description}
                                </p>

                                {/* Button */}
                                <a
                                    href={step.href}
                                    className="mt-auto inline-flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-600 hover:text-white"
                                >
                                    {step.button}
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white transition-colors group-hover:bg-white group-hover:text-orange-600">
                                        <ArrowUpRight size={19} />
                                    </span>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
