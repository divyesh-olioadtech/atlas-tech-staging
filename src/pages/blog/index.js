import Head from "next/head";
import Link from "next/link";
import { getAllPosts, POSTS_PER_PAGE } from "../../../lib/getAllPosts";
import { useRouter } from "next/router";
import Pagination from "../../../components/others/Pagination";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function BlogHome({ posts, totalPages }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // Update the page based on router query or default to page 1
  useEffect(() => {
    const pageQuery = router.query.page;
    if (pageQuery) {
      setCurrentPage(Number(pageQuery));
    }
  }, [router.query.page]);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/blog/page/${page}`);
  };

  return (
    <>
      <Head>
        <title>
          Construction & Machinery Insights | Atlas Technologies Blog
        </title>
        <meta
          name="description"
          content={`Explore industry insights, guides & updates on road construction equipment, asphalt plants, concrete batching, and more from Atlas Technologies India.`}
        />
      </Head>
      <div className="mt-20 md:mt-28 px-[5%] max-w-screen-2xl mx-auto">
        <h1 className="text-[48px] sm:text-[52px] md:text-[55px] lg:text-[64px] font-bold text-[#1A1D2D]">
          Blogs
        </h1>
        {/* <p className="text-[#606370] text-[16px] mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p> */}
      </div>
      <div className="grid grid-cols-1  py-8 md:py-14 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto justify-end px-[5%]">
        {posts.map((post) => (
          <div
            key={post.slug}
            onClick={() => router.push(`/blog/${post.slug}`)}
            className="flex flex-col p-3 rounded shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.02] transition duration-300 ease-in-out bg-white"
          >
            <Image
              src={post.image}
              alt={post.title}
              height={300}
              width={300}
              className="w-full h-[180px] md:h-[250px] rounded object-cover"
            />
            <p className="text-[#636B7E] mt-2 mb-1 font-semibold">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
            <h2 className="text-[18px] mb-2 sm:text-[18px] md:text-[19px] lg:text-[20px] leading-[1.3] font-bold text-[#1A1D2D]">
              {post.title}
            </h2>
            <p className="text-[#636B7E] mb-2 text-[16px] leading-[1.3]">
              {post.summary.length > 100
                ? post.summary.slice(0, 90) + "..."
                : post.summary}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="block font-semibold text-[#8FD254] hover:underline text-[16px]"
            >
              Read More{" "}
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, POSTS_PER_PAGE);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return {
    props: {
      posts,
      totalPages,
    },
  };
}
