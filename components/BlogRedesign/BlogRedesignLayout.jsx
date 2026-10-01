"use client";

import React from "react";
import BlogSidebar from "./BlogSidebar";
import BlogBreadcrumb from "./BlogBreadcrumb";
import BlogContent from "./BlogContent";
import BlogAuthor from "./BlogAuthor";
import BlogCTA from "./BlogCTA";
import BlogFAQ from "./BlogFAQ";

export default function BlogRedesignLayout({ post }) {

    return (
        <main>


            {/* Hero */}

            <section className="pt-28">

                <div className="max-w-screen-2xl mx-auto px-[5%]">


                    <div className="text-center max-w-5xl mx-auto">

                        <BlogBreadcrumb title={post.title} />


                        <h1 className="text-[28px] md:text-[40px] lg:text-[40px] font-bold leading-[1.15] text-[#1A1D2D]">
                            {post.title}
                        </h1>


                        <div className="flex justify-center gap-3 mt-6 text-[#606370]">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                        </div>


                    </div>



                    {/* Hero Image */}

                    <div className="mt-12 rounded-xl overflow-hidden max-w-[1400px] mx-auto">

                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto rounded-xl"
                        />

                    </div>


                </div>

            </section>


            <section className="max-w-screen-2xl mx-auto px-[5%] py-16">


                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">


                    <BlogSidebar
                        summary={post.summary}
                        toc={post.tableOfContents}
                    />


                    <BlogContent
                        content={post.content}
                        ctas={post.ctas}
                    />


                </div>


            </section>

            {post.author && (
                <BlogAuthor author={post.author} />
            )}


            {post.ctas && (
                post.ctas
                    .filter(item => item.position === "bottom")
                    .map((item, index) => (
                        <BlogCTA
                            key={index}
                            cta={item}
                        />
                    ))
            )}

            {post.hasFAQ && (
                <BlogFAQ faqData={post.faqData} />
            )}


        </main>
    );
}