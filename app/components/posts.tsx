import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  const sortedBlogs = allBlogs.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <div className="space-y-3">
      {sortedBlogs.map((post) => (
        <div
          key={post.slug}
          className="flex flex-col md:flex-row md:items-center md:space-x-4"
        >
          {/* Date */}
          <p className="text-neutral-600 dark:text-neutral-400 min-w-max md:w-36">
            {formatDate(post.metadata.publishedAt, false)}
          </p>

          {/* Title */}
          <Link
            href={`/blog/${post.slug}`}
            className="flex-1 text-neutral-900 dark:text-neutral-100 tracking-tight"
          >
            {post.metadata.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
