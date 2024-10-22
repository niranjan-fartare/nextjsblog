import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  const sortedBlogs = allBlogs.sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div>
      {sortedBlogs.map((post) => (
        <div key={post.slug} className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 w-auto tabular-nums">
            {formatDate(post.metadata.publishedAt, false)}
          </p>
          <Link href={`/blog/${post.slug}`} className="flex flex-col space-y-1">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
