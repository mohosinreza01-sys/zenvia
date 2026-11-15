
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    House,
    Search,
} from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-[85vh] items-center justify-center bg-[#FFF5EC] px-5 py-20">

            <div className="mx-auto w-full max-w-3xl text-center">

                {/* ICON */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                    <House size={36} strokeWidth={1.5} />
                </div>

                {/* 404 */}
                <h1 className="mt-8 text-[120px] font-bold leading-none tracking-tighter text-[#171923] sm:text-[180px]">
                    4<span className="text-orange-600">0</span>4
                </h1>

                {/* TEXT */}
                <h2 className="mt-6 text-2xl font-semibold text-[#171923] sm:text-4xl">
                    Oops! Page Not Found
                </h2>

                <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                    Looks like you've wandered into an empty property.
                    The page you're looking for may have been moved,
                    removed or is temporarily unavailable.
                </p>

                {/* BUTTONS */}
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-7 text-sm font-semibold text-white transition hover:bg-gray-900"
                    >
                        <House size={17} />
                        Back to Home
                    </Link>

                    <Link
                        href="/properties"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 text-sm font-semibold text-[#171923] transition hover:border-orange-500 hover:text-orange-600"
                    >
                        Explore Properties
                        <ArrowUpRight size={17} />
                    </Link>

                </div>

                {/* FOOTER TEXT */}
                <div className="mt-16 border-t border-orange-200 pt-6">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                        Need Assistance?
                    </p>

                    <Link
                        href="/contact"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-gray-900"
                    >
                        Contact Our Team
                        <ArrowUpRight size={15} />
                    </Link>
                </div>

            </div>
        </main>
    );
}
