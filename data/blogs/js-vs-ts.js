import Blog from "../../components/homepage/blog";
const post = {
  title: "JavaScript vs TypeScript: What to Choose?",
  slug: "js-vs-ts",
  date: "2025-03-25",
  summary: "A simple breakdown of JavaScript and TypeScript pros and cons.",
  seoTitle: "JavaScript vs TypeScript Comparison",
  seoDescription:
    "Compare JavaScript and TypeScript for web development. Find out which one suits your project.",
  image: "/images/comman/blog.png",
  content: (
    <>
      <p>
        Choosing between JavaScript and TypeScript can be confusing. Let’s
        explore the major differences.
      </p>
      <Blog />

      <h3 className="mt-4 mb-2 text-xl font-semibold">JavaScript</h3>
      <ul className="list-disc list-inside">
        <li>Dynamically typed</li>
        <li>Flexible and fast to write</li>
        <li>More forgiving for beginners</li>
      </ul>

      <h3 className="mt-4 mb-2 text-xl font-semibold">TypeScript</h3>
      <ul className="list-disc list-inside">
        <li>Statically typed</li>
        <li>Better tooling and autocomplete</li>
        <li>Great for large-scale apps</li>
      </ul>
    </>
  ),
};

export default post;
