import Head from "next/head";
import { allPosts } from "../../../data/blogs";
import CustomBlogWrapper from "../../../components/CustomBlogWrapper";
import { useRouter } from "next/router";
import Blog_heading from "../../../components/others/blog_heading";
import Blog from "../../../components/homepage/blog";
import FAQSection2 from "../../../components/category/faq2";
import NewBlogLayout from "../../../components/NewBlog/NewBlogLayout";
import BlogRedesignLayout from "../../../components/BlogRedesign/BlogRedesignLayout";

export default function BlogDetail({ slug }) {
  const router = useRouter();
  const post = allPosts.find((p) => p.slug === slug);
  const hasFAQ = post.faqData && post.faqData.length > 0;
  const faqSchema = post.faqSchema || (hasFAQ
    ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqData.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.content,
        },
      })),
    }
    : null);

  return (
    <>
      <Head>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <link
          rel="canonical"
          href={`https://www.atlastechnologiesindia.com/blog/${slug}`}
        />
        {post.blogSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(post.blogSchema) }}
            key="blog-schema"
          />
        )}
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            key="faq-schema"
          />
        )}
      </Head>

      <article className="">
        {/* <div
          className="w-full h-[600px] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/comman/hero.png')" }}
        >
          <div className="flex flex-col h-full max-w-screen-2xl mx-auto justify-end px-[5%]">
            <div className="flex flex-col gap-5 mb-16">
              <div className="flex flex-col gap-2">
                <h1 className="h1t leading-[1.1]">{post.title}</h1>
                <p className="textpara">{post.date}</p>
              </div>
            </div>
          </div>
        </div> */}

        {post.newDesign === "redesign" ? (
          <BlogRedesignLayout post={post} />
        ) : post.newDesign ? (
          <NewBlogLayout post={post} />
        ) : (
          <CustomBlogWrapper>
            <Blog_heading title={post.title} date={post.date} />
            <div className="">
              {post.content}
            </div>
          </CustomBlogWrapper>
        )}

        {post.hasFAQ && !post.newDesign && (
          <FAQSection2
            faqData={post.faqData}
            bg={"#E7F1E9"}
          />
        )}
        <Blog />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = allPosts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
