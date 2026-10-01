const post = {
  title: "SEO Best Practices in Next.js",
  slug: "next-seo",
  date: "2025-04-05",
  summary:
    "How to make your Next.js site SEO-friendly using Head tags and structured content.",
  seoTitle: "Next.js SEO Guide for Developers",
  seoDescription:
    "Boost your website's search engine ranking with these SEO tips in Next.js.",
  image: "/images/comman/blog.png",
  content: (
    <>
      <h2 className="mb-2 text-2xl font-semibold">Use the Head Component</h2>
      <p>
        Always include meta titles and descriptions in your pages using{" "}
        <code>next/head</code>.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Semantic HTML</h2>
      <p>
        Use semantic elements like <code>&lt;article&gt;</code>,{" "}
        <code>&lt;header&gt;</code>, and
        <code>&lt;footer&gt;</code> to help search engines understand your
        content.
      </p>
    </>
  ),
};

export default post;
