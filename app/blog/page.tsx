import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Latest blog Posts from Niranjan Fartare.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-5 text-3xl font-semibold tracking-tighter">Latest Posts</h1>
      <BlogPosts />
    </section>
  )
}
