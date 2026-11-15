
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    Play,
    House,
    Building2,
    Star,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="mx-auto grid min-h-[700px] max-w-[1600px] items-center gap-12 px-6 py-16 md:px-12 lg:grid-cols-2 lg:gap-8 lg:px-16 lg:py-20">

                {/* LEFT CONTENT */}
                <div className="relative z-10 max-w-[620px]">

                    {/* Badge */}
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e6e2dd] px-5 py-3">
                        <span className="h-2 w-2 rounded-full bg-[#ff6500]" />
                        <span className="text-xs font-semibold tracking-[1.5px] text-[#35363b]">
                            PROPERTY SOLUTIONS FOR ALL
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-[54px] font-medium leading-[1.08] tracking-[-2.5px] text-[#171923] sm:text-[68px] lg:text-[76px] xl:text-[84px]">
                        Discover Your
                        <span className="block font-bold italic text-[#ff6500]">
                            Dream Home
                        </span>
                        With Zenvia.
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-[520px] text-base leading-8 text-[#77777d] sm:text-lg">
                        Explore exceptional properties in the most desirable
                        locations. Our expert team is here to help you find a
                        home that perfectly matches your lifestyle and budget.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap items-center gap-4">

                        {/* Primary Button */}
                        <Link
                            href="/properties"
                            className="group inline-flex h-[58px] items-center gap-5 rounded-full bg-[#ff6500] pl-7 pr-2 text-[15px] font-semibold text-white transition duration-300 hover:bg-[#e95700]"
                        >
                            Explore Properties

                            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-[#171923] transition-transform duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="h-5 w-5" />
                            </span>
                        </Link>

                        {/* Secondary Button */}
                        <Link
                            href="/about"
                            className="group inline-flex h-[58px] items-center gap-4 rounded-full border border-[#ff6500] px-6 text-[15px] font-semibold text-[#202127] transition duration-300 hover:bg-[#fff4eb]"
                        >
                            Discover More

                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171923] text-white transition-transform group-hover:scale-110">
                                <Play className="ml-0.5 h-4 w-4 fill-current" />
                            </span>
                        </Link>

                    </div>

                    {/* Trust Text */}
                    <div className="mt-12 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <Image
                                src="https://i.pravatar.cc/80?img=12"
                                width={40}
                                height={40}
                                alt="Client"
                                className="h-10 w-10 rounded-full border-[3px] border-white object-cover"
                            />
                            <Image
                                src="https://i.pravatar.cc/80?img=32"
                                width={40}
                                height={40}
                                alt="Client"
                                className="h-10 w-10 rounded-full border-[3px] border-white object-cover"
                            />
                            <Image
                                src="https://i.pravatar.cc/80?img=47"
                                width={40}
                                height={40}
                                alt="Client"
                                className="h-10 w-10 rounded-full border-[3px] border-white object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-bold text-[#202127]">
                                Your Trusted Property Partner
                            </p>
                            <p className="mt-0.5 text-xs text-[#898989]">
                                Making property decisions easier.
                            </p>
                        </div>
                    </div>

                </div>

                {/* RIGHT IMAGE AREA */}
                <div className="relative mx-auto w-full max-w-[650px]">

                    {/* Decorative Circles */}
                    <div className="absolute -left-5 top-8 z-0 h-40 w-40 rounded-full border border-dashed border-[#ead8ca] sm:-left-8 sm:h-52 sm:w-52" />

                    <div className="absolute -left-1 top-12 z-0 h-32 w-32 rounded-full border border-dashed border-[#ead8ca] sm:h-44 sm:w-44" />

                    {/* Main Image */}
                    <div
                        className="relative z-10 h-[430px] w-full overflow-hidden sm:h-[560px] lg:h-[600px]"
                        style={{
                            clipPath:
                                "polygon(15% 8%, 74% 8%, 83% 0%, 100% 0%, 81% 50%, 100% 100%, 57% 100%, 43% 72%, 24% 100%, 0% 100%, 13% 66%, 0% 50%)",
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
                            alt="Modern luxury residential property"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Floating Property Icon */}
                    <div className="absolute left-[5%] top-[12%] z-20 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white shadow-[0_8px_35px_rgba(0,0,0,0.12)] sm:h-[92px] sm:w-[92px]">
                        <House className="h-10 w-10 text-[#171923]" strokeWidth={1.5} />

                        <span className="absolute right-5 top-4 h-2.5 w-2.5 rounded-full bg-[#ff6500]" />
                    </div>

                    {/* Floating Property Label */}
                    <div className="absolute bottom-7 right-0 z-20 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:bottom-12 sm:right-[-10px] sm:p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0e5] text-[#ff6500]">
                                <Building2 className="h-6 w-6" />
                            </div>

                            <div>
                                <p className="text-sm font-bold text-[#171923]">
                                    Find Your Place
                                </p>
                                <p className="mt-1 text-xs text-[#858585]">
                                    A home made for you
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Decorative Star */}
                    <div className="absolute -bottom-5 left-[42%] z-20 flex h-[75px] w-[75px] items-center justify-center rounded-full border border-[#dedbd6] bg-white">
                        <div className="flex h-[61px] w-[61px] items-center justify-center rounded-full border border-dashed border-[#dedbd6]">
                            <Star className="h-7 w-7 fill-[#ff6500] text-[#ff6500]" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
