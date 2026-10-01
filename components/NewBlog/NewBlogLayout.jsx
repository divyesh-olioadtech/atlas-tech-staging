import Image from "next/image";
import BlogSidebar from "./BlogSidebar";
import BlogContent from "./BlogContent";
import AuthorNote from "./AuthorNote";
import BlogCTA from "./BlogCTA";
import BlogFAQ from "./BlogFAQ";

export default function NewBlogLayout({ post }) {
    return (
        <main>

            {/* Hero Section */}
            <section className="pt-28">

                <div className="max-w-screen-2xl mx-auto px-[5%]">

                    {/* Breadcrumb */}
                    <div className="flex justify-center items-center gap-2 text-sm text-[#606370] mb-8">
                        <span>⌂</span>
                        <span>/</span>
                        <span>Blog</span>
                        <span>/</span>
                        <span>{post.title}</span>
                    </div>


                    {/* Title */}
                    <div className="text-center max-w-5xl mx-auto">

                        <h1 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-[#1A1D2D] mb-5">
                            {post.title}
                        </h1>


                        {/* Meta */}
                        <div className="flex justify-center items-center gap-3 text-[#606370] text-sm md:text-base mb-12">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                        </div>

                    </div>


                    {/* Hero Image */}
                    {/* Hero Image */}

                    <div className="w-full h-[420px] md:h-[650px] rounded-xl overflow-hidden">

                        <Image
                            src={post.image}
                            alt={post.title}
                            width={1400}
                            height={700}
                            className="w-full h-full object-cover"
                        />

                    </div>


                </div>

            </section>


            {/* Blog Content Section */}

            <section className="max-w-screen-2xl mx-auto px-[5%] py-16">

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">


                    {/* LEFT SIDEBAR */}
                    <BlogSidebar
                        toc={post.tableOfContents}
                        summary={post.summary}
                    />


                    {/* ARTICLE CONTENT */}
                    <BlogContent sections={post.sections} />


                </div>
                <AuthorNote />
                <BlogCTA />
                <BlogFAQ faqData={post.faqData} />

            </section>

        </main>
    );
}