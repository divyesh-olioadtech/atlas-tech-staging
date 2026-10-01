import { allPosts } from "../data/blogs";

export function getAllPosts() {
  return allPosts
    .filter((post) => post && post.slug)
    .map((post) => ({
      slug: post.slug || "",
      title: post.title || "",
      date: post.date || "",
      summary: post.summary || "",
      seoTitle: post.seoTitle || "",
      seoDescription: post.seoDescription || "",
      image: post.image || "",
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const POSTS_PER_PAGE = 9;
