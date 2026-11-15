
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const blogs = [
    {
        id: 1,
        category: "Real Estate",
        title: "10 Things to Consider Before Buying Your First Home",
        description:
            "Discover the essential factors to consider before investing in your dream home.",
        date: "November 12, 2026",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
    },
    {
        id: 2,
        category: "Investment",
        title: "Is Real Estate Still a Good Investment in 2026?",
        description:
            "Explore market trends and smart strategies for making better property investments.",
        date: "November 08, 2026",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900&q=85",
    },
    {
        id: 3,
        category: "Lifestyle",
        title: "How to Find the Perfect Home for Your Family",
        description:
            "Learn how to choose a comfortable home that fits your lifestyle and future needs.",
        date: "November 04, 2026",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    },
    {
        id: 4,
        category: "Buying Guide",
        title: "A Complete Guide to the Home Buying Process",
        description:
            "From property searching to closing the deal, understand every important step.",
        date: "October 29, 2026",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85",
    },
    {
        id: 5,
        category: "Architecture",
        title: "Modern Architecture Trends Shaping Today's Homes",
        description:
            "Explore beautiful architectural ideas and modern home design inspiration.",
        date: "October 24, 2026",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
    },
    {
        id: 6,
        category: "Property Tips",
        title: "Simple Ways to Increase Your Property Value",
        description:
            "Small improvements that can make a meaningful difference to your property.",
        date: "October 18, 2026",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
    },
];

export default function BlogPage() {
    return (
        <main className="bg-white">

            {/* Header */}
            <section className="bg-[#FFF5EC] px-5 py-20 text-center md:py-28">
                <span className="rounded-full border border-orange-500 px-5 py-2 text-xs uppercase tracking-wider text-gray-700">
                    Our Blog
                </span>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#171923] md:text-6xl">
                    Latest Insights & Stories
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
                    Explore expert advice, property insights and inspiration
                    to help you make smarter real estate decisions.
                </p>
            </section>

            {/* Blog Grid */}
            <section className="mx-auto max-w-7xl px-5 py-20">

                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-[#171923]">
                            Latest Articles
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Discover our latest news and updates.
                        </p>
                    </div>
                </div>

                <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="group">

                            {/* Image */}
                            <Link
                                href={`/blog/${blog.id}`}
                                className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100"
                            >
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-600">
                                    {blog.category}
                                </span>
                            </Link>

                            {/* Content */}
                            <div className="pt-5">
                                <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                                    <CalendarDays size={14} />
                                    {blog.date}
                                </div>

                                <Link href={`/blog/${blog.id}`}>
                                    <h3 className="text-xl font-semibold leading-snug text-[#171923] transition-colors group-hover:text-orange-600">
                                        {blog.title}
                                    </h3>
                                </Link>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {blog.description}
                                </p>

                                <Link
                                    href={`/blog/${blog.id}`}
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600"
                                >
                                    Read Article
                                    <ArrowUpRight size={17} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center gap-3">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-sm text-white">
                        1
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm hover:border-orange-500">
                        2
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm hover:border-orange-500">
                        3
                    </button>
                </div>

            </section>
        </main>
    );
}
