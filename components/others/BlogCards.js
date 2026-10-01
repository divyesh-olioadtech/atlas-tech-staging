import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="overflow-hidden transition border rounded-md shadow hover:shadow-md">
      <img
        src={post.image}
        alt={post.title}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="mt-1 text-sm text-gray-600">{post.summary}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block mt-4 font-medium text-blue-600 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
