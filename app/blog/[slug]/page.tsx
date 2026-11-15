
import Image from "next/image";
import Link from "next/link";
import {
    CalendarDays,
    Clock3,
    UserRound,
    ArrowLeft,
    ArrowUpRight,
} from "lucide-react";

const relatedPosts = [
    {
        title: "How to Find the Perfect Home for Your Family",
        category: "Lifestyle",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85",
        slug: "perfect-home",
    },
    {
        title: "Is Real Estate Still a Good Investment in 2026?",
        category: "Investment",
        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=85",
        slug: "real-estate-investment",
    },
];

export default function BlogDetailsPage() {
    return (
        <main className="bg-white">

            {/* PAGE HEADER */}
            <section className="bg-[#FFF5EC] px-5 py-16 md:py-20">
                <div className="mx-auto max-w-5xl text-center">

                    <span className="rounded-full border border-orange-500 px-5 py-2 text-xs uppercase tracking-wider text-gray-700">
                        Real Estate
                    </span>

                    <h1 className="mx-auto mt-7 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#171923] md:text-5xl lg:text-6xl">
                        10 Things to Consider Before Buying Your First Home
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
                        Everything you need to know before making one of
                        the biggest investments of your life.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-500">
                        <span className="flex items-center gap-2">
                            <UserRound size={15} /> Admin
                        </span>
                        <span className="flex items-center gap-2">
                            <CalendarDays size={15} /> November 12, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock3 size={15} /> 6 min read
                        </span>
                    </div>
                </div>
            </section>

            {/* FEATURED IMAGE */}
            <section className="mx-auto max-w-7xl px-5">
                <div className="relative -mt-3 aspect-[16/8] overflow-hidden rounded-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=90"
                        alt="Beautiful modern residential property"
                        fill
                        priority
                        unoptimized
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ARTICLE CONTENT */}
            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 lg:grid-cols-[1fr_300px] lg:gap-20">

                {/* MAIN ARTICLE */}
                <article className="min-w-0">

                    <Link
                        href="/blog"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-black"
                    >
                        <ArrowLeft size={16} />
                        Back to Blog
                    </Link>

                    <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-[#171923] prose-p:text-gray-600 prose-p:leading-8 prose-a:text-orange-600">

                        <p className="text-lg leading-8 text-gray-600">
                            Buying your first home is an exciting milestone.
                            However, it also comes with important decisions
                            that can affect your financial future. Taking the
                            time to understand the process will help you make
                            a confident and informed decision.
                        </p>

                        <h2>1. Understand Your Budget</h2>
                        <p>
                            Before starting your property search, determine
                            how much you can comfortably afford. Consider
                            your savings, monthly income, existing expenses
                            and additional property costs.
                        </p>

                        <h2>2. Choose the Right Location</h2>
                        <p>
                            Location plays an important role in your everyday
                            lifestyle and future property value. Look for
                            convenient transportation, schools, hospitals,
                            shopping areas and other essential facilities.
                        </p>

                        <h2>3. Check the Property Condition</h2>
                        <p>
                            Carefully inspect the building structure,
                            electrical systems, plumbing, ventilation and
                            overall maintenance before making a commitment.
                        </p>

                        <h2>4. Research the Real Estate Market</h2>
                        <p>
                            Compare similar properties in your preferred
                            location. Understanding current market prices
                            can help you avoid overpaying and negotiate
                            more effectively.
                        </p>

                        <h2>5. Review Legal Documents</h2>
                        <p>
                            Verify ownership records, property documents,
                            approvals and other necessary legal information.
                            Consult a qualified professional when needed.
                        </p>

                        <blockquote className="border-l-4 border-orange-500 bg-[#FFF5EC] px-6 py-5 text-xl font-medium text-[#171923]">
                            A good home is more than a property. It is an
                            investment in your future and lifestyle.
                        </blockquote>

                        <h2>Final Thoughts</h2>
                        <p>
                            Finding your first home requires patience,
                            research and proper planning. Take your time,
                            explore your options and work with experienced
                            real estate professionals to make the right choice.
                        </p>

                    </div>

                    {/* SHARE */}
                    <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-y border-gray-100 py-6">
                        <span className="font-semibold text-[#171923]">
                            Share This Article
                        </span>

                    </div>

                </article>

                {/* SIDEBAR */}
                <aside className="space-y-8">

                    {/* ABOUT */}
                    <div className="rounded-xl bg-[#FFF5EC] p-6">
                        <h3 className="text-xl font-semibold text-[#171923]">
                            About Us
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            We help people discover exceptional properties
                            with professional guidance and trusted real
                            estate services.
                        </p>

                        <Link
                            href="/about"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600"
                        >
                            Learn More <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    {/* RECENT POSTS */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-[#171923]">
                            Recent Articles
                        </h3>

                        <div className="space-y-5">
                            {relatedPosts.map((post) => (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    key={post.slug}
                                    className="group flex gap-4"
                                >
                                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition group-hover:scale-105"
                                        />
                                    </div>

                                    <div>
                                        <span className="text-xs text-orange-600">
                                            {post.category}
                                        </span>
                                        <h4 className="mt-1 text-sm font-semibold leading-5 text-[#171923] group-hover:text-orange-600">
                                            {post.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CONTACT CTA */}
                    <div className="rounded-xl bg-[#171923] p-6 text-white">
                        <h3 className="text-xl font-semibold">
                            Looking for a Property?
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-300">
                            Let our experts help you find your perfect home.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700"
                        >
                            Contact Us <ArrowUpRight size={16} />
                        </Link>
                    </div>

                </aside>
            </section>

            {/* RELATED ARTICLES */}
            <section className="bg-[#FFF5EC] px-5 py-20">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
                                Keep Exploring
                            </span>
                            <h2 className="mt-3 text-3xl font-semibold text-[#171923] md:text-4xl">
                                Related Articles
                            </h2>
                        </div>

                        <Link
                            href="/blog"
                            className="hidden items-center gap-2 text-sm font-semibold text-orange-600 sm:flex"
                        >
                            View All <ArrowUpRight size={17} />
                        </Link>
                    </div>

                    <div className="grid gap-7 sm:grid-cols-2">
                        {relatedPosts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.slug}
                                className="group overflow-hidden rounded-xl bg-white"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-6">
                                    <span className="text-xs font-medium text-orange-600">
                                        {post.category}
                                    </span>
                                    <h3 className="mt-3 text-xl font-semibold text-[#171923] group-hover:text-orange-600">
                                        {post.title}
                                    </h3>
                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                                        Read Article <ArrowUpRight size={17} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}
