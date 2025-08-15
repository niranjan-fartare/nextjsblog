import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Niranjan Fartare,
      </h1>
      <p className="mb-4">
        Data Engineer with 3+ years experience in AWS, PySpark & Spark. Built
        scalable ETL pipelines for finance & telecom domains using EMR, Glue and
        Redshift. Expert in big data processing & cloud platforms like AWS.
      </p>
      <h2 className="text-3xl font-semibold tracking-tighter">Latest Posts</h2>
      <div style={{ borderTop: "1px solid #fff " }} className="mb-8 mt-1"></div>
      <BlogPosts />
    </section>
  );
}
