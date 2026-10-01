"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../../lib/getAllPosts";
import { motion } from "motion/react";

const Blog = () => {
  // get all posts sorted by date descending, as per your getAllPosts function
  const blogData = getAllPosts();

  // take only first 4 posts (freshest 4)
  const latestBlogs = blogData.slice(0, 4);

  return (
    <section className="mx-auto max-w-screen-2xl rm px-[5%] ">
      <div className="flex flex-col mb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="pitag">BLOGS</p>
          <h2 className="text-2xl font-bold h2t">Insights and Updates</h2>
        </div>
        <Link href={"/blog"}>
          <button className="buttons hidden md:inline-block border border-[#8FD254] text-[#12121C] px-4 py-2 hover:bg-[#8FD254] transition-colors">
            View All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 md:gap-8">
        {latestBlogs.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-lg leading-[1.3] cursor-pointer"
            >
              <div className="overflow-hidden rounded-[12px] mb-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[250px] object-fill rounded-[12px]"
                    width={300}
                    height={300}
                  />
                </motion.div>
              </div>

              <h3 className="font-bold text-[18px] md:text-[19px] leading-[1.3] lg:text-[20px] mb-2">
                {blog.title.split(" ").slice(0, 5).join(" ")}...
              </h3>

              <p className="ptag leading-[1.3]">
                {blog.summary.split(" ").slice(0, 10).join(" ")}...
              </p>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="mt-6 md:hidden">
        <button className="buttons w-full border border-[#8FD254] text-[#12121C] px-4 py-2 hover:bg-[#8FD254] transition-colors">
          <Link href={"/blog"}>View All</Link>
        </button>
      </div>
    </section>
  );
};

export default Blog;
