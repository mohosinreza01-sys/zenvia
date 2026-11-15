
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    HeartHandshake,
    House,
    ShieldCheck,
    Target,
    Eye,
    CheckCircle2,
} from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Trust & Transparency",
        description:
            "We believe every successful property journey begins with honesty, transparency and trust.",
    },
    {
        icon: HeartHandshake,
        title: "Customer First",
        description:
            "Your needs come first. We focus on understanding your goals and finding the right solution.",
    },
    {
        icon: Award,
        title: "Excellence",
        description:
            "We aim to deliver a smooth, professional and reliable experience at every step.",
    },
];

const benefits = [
    "Carefully selected property listings",
    "Personalized property recommendations",
    "Professional guidance throughout the process",
    "Transparent communication and support",
];

export default function AboutPage() {
    return (
        <main className="overflow-hidden bg-[#fffaf4]">

            {/* ================= HERO ================= */}
            <section className="px-5 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28 lg:px-16">
                <div className="mx-auto max-w-[1440px]">

                    <div className="mb-8 flex items-center gap-2 text-sm text-[#85858a]">
                        <Link href="/" className="transition-colors hover:text-[#f36b35]">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="font-medium text-[#202127]">About Us</span>
                    </div>

                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

                        <div>
                            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f1dfd2] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#e96b37]">
                                <span className="h-2 w-2 rounded-full bg-[#f36b35]" />
                                About Zenvia
                            </span>

                            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-[#202127] md:text-5xl lg:text-6xl">
                                More Than Properties.
                                <span className="text-[#f36b35]">
                                    {" "}A Place to Belong.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-[#77777d]">
                                At Zenvia, we believe finding a property is about more than
                                choosing a building. It is about discovering a place where
                                your next chapter begins.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-4">
                                <Link
                                    href="/properties"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#f36b35] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#e45b27]"
                                >
                                    Explore Properties
                                    <ArrowUpRight size={18} />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 rounded-full border border-[#e9ded4] px-7 py-4 text-sm font-semibold text-[#202127] transition-all hover:border-[#f36b35] hover:text-[#f36b35]"
                                >
                                    Contact Us
                                    <ArrowRight size={17} />
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[400px] overflow-hidden rounded-[28px] md:h-[520px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1200"
                                    alt="Modern luxury residential interior"
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            <div className="absolute -bottom-7 -left-3 max-w-[220px] rounded-2xl bg-white p-5 shadow-xl md:-left-8 md:p-6">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f36b35]">
                                    <House size={22} />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-[#202127]">
                                    Find Your Place
                                </h3>
                                <p className="mt-2 text-xs leading-5 text-[#85858a]">
                                    Discover spaces that feel like home.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= OUR STORY ================= */}
            <section className="bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16">
                <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    <div className="relative">
                        <div className="relative h-[400px] overflow-hidden rounded-[26px] md:h-[520px]">
                            <Image
                                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1200"
                                alt="Contemporary home interior"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        <div className="absolute -bottom-5 -right-3 rounded-2xl bg-[#f36b35] px-7 py-6 text-white shadow-xl md:-right-7">
                            <p className="text-3xl font-semibold">Your</p>
                            <p className="mt-1 text-sm text-white/80">
                                Property Journey Starts Here
                            </p>
                        </div>
                    </div>

                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f36b35]">
                            Our Story
                        </span>

                        <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#202127] md:text-5xl">
                            Making Property Decisions
                            <span className="text-[#f36b35]"> Feel Simpler.</span>
                        </h2>

                        <p className="mt-7 text-sm leading-8 text-[#77777d] md:text-base">
                            Finding the right property can feel overwhelming. With so many
                            choices, details and decisions, knowing where to begin is not
                            always easy.
                        </p>

                        <p className="mt-5 text-sm leading-8 text-[#77777d] md:text-base">
                            That is where Zenvia comes in. Our goal is to make discovering
                            properties more convenient, organized and accessible. We bring
                            property discovery and helpful guidance together in one place.
                        </p>

                        <p className="mt-5 text-sm leading-8 text-[#77777d] md:text-base">
                            Whether you are searching for your first home, a new place to
                            live or your next investment opportunity, we want to make your
                            journey a little easier.
                        </p>

                        <Link
                            href="/properties"
                            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#f36b35] transition-all hover:gap-5"
                        >
                            Discover Our Properties
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                </div>
            </section>

            {/* ================= MISSION & VISION ================= */}
            <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
                <div className="mx-auto max-w-[1440px]">

                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f36b35]">
                            What Drives Us
                        </span>

                        <h2 className="mt-5 text-3xl font-semibold text-[#202127] md:text-5xl">
                            Our Purpose & Direction
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[#85858a] md:text-base">
                            Every decision we make is guided by a simple idea: property
                            discovery should feel easier and more meaningful.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                        <div className="rounded-[26px] bg-[#202127] p-8 text-white md:p-12">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f36b35]">
                                <Target size={26} />
                            </div>

                            <p className="mt-9 text-xs font-semibold uppercase tracking-[2px] text-[#f58a5d]">
                                Our Mission
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
                                Making every property journey more accessible.
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-white/55">
                                Our mission is to simplify property discovery by bringing
                                useful information, thoughtful recommendations and reliable
                                guidance together.
                            </p>
                        </div>

                        <div className="rounded-[26px] border border-[#f0e3d8] bg-white p-8 md:p-12">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#f36b35]">
                                <Eye size={26} />
                            </div>

                            <p className="mt-9 text-xs font-semibold uppercase tracking-[2px] text-[#f36b35]">
                                Our Vision
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold leading-snug text-[#202127] md:text-3xl">
                                A smarter way to discover the right place.
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#85858a]">
                                We envision a property experience where people can explore
                                opportunities with greater confidence, clarity and
                                convenience.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16">
                <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f36b35]">
                            Why Choose Zenvia
                        </span>

                        <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#202127] md:text-5xl">
                            A Better Experience,
                            <span className="text-[#f36b35]"> Every Step.</span>
                        </h2>

                        <p className="mt-6 text-sm leading-8 text-[#85858a] md:text-base">
                            We focus on making your property search straightforward.
                            From exploring listings to connecting with our team, we aim
                            to make every step feel more organized.
                        </p>

                        <div className="mt-8 space-y-5">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={20}
                                        className="mt-0.5 shrink-0 text-[#f36b35]"
                                    />
                                    <p className="text-sm font-medium text-[#44454a]">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#202127] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#f36b35]"
                        >
                            Talk To Our Team
                            <ArrowUpRight size={17} />
                        </Link>
                    </div>

                    <div className="relative h-[420px] overflow-hidden rounded-[26px] md:h-[540px]">
                        <Image
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1200"
                            alt="Beautiful modern residential property"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                </div>
            </section>

            {/* ================= CORE VALUES ================= */}
            <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
                <div className="mx-auto max-w-[1440px]">

                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f36b35]">
                            Our Core Values
                        </span>

                        <h2 className="mt-5 text-3xl font-semibold text-[#202127] md:text-5xl">
                            What We Stand For
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[#85858a]">
                            The principles that shape how we work and how we serve our
                            customers.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {values.map((value, index) => {
                            const Icon = value.icon;

                            return (
                                <div
                                    key={value.title}
                                    className="group rounded-[24px] border border-[#f0e6dd] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#f36b35]/40 hover:shadow-xl md:p-10"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#f36b35] transition-all duration-300 group-hover:bg-[#f36b35] group-hover:text-white">
                                        <Icon size={25} strokeWidth={1.7} />
                                    </div>

                                    <span className="mt-8 block text-xs font-semibold tracking-[2px] text-[#f36b35]">
                                        0{index + 1}
                                    </span>

                                    <h3 className="mt-3 text-xl font-semibold text-[#202127]">
                                        {value.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#85858a]">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="px-5 pb-24 md:px-10 lg:px-16">
                <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[#202127] px-7 py-16 text-center md:px-16 md:py-20">

                    <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
                    <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full border border-white/10" />

                    <div className="relative z-10 mx-auto max-w-2xl">
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f58a5d]">
                            Your Next Chapter
                        </span>

                        <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
                            Ready to Find Your
                            <span className="text-[#f36b35]"> Dream Place?</span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-white/55 md:text-base">
                            Let’s make your property search easier. Explore our listings
                            or connect with our team to get started.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/properties"
                                className="inline-flex items-center gap-3 rounded-full bg-[#f36b35] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#e45b27]"
                            >
                                Explore Properties
                                <ArrowUpRight size={18} />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#202127]"
                            >
                                Get In Touch
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
