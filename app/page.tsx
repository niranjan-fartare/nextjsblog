import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Niranjan Fartare,
      </h1>
      <p className="mb-4">
        Upcoming SDE. Highly motivated individual and a quick learner. Currently learning Java. Aspiring to be a Full Stack Developer.
      </p>
      <h2 className="text-3xl font-semibold tracking-tighter">Latest Posts</h2>
      <div style={{ borderTop: "1px solid #fff "}} className="mb-8 mt-1"></div>
      <BlogPosts />      
    </section>
  );
}
