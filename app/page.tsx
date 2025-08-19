import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  const experiences = [
    {
      company: "ERP Consulting",
      position: "Data Engineer",
      duration: "July 2023 – Present",
      location: "Pune",
      responsibilities: [
        "Built scalable ETL pipelines using PySpark and Spark to process thousands of daily credit card transactions from AWS S3",
        "Ingested and enriched raw transaction data from S3 using distributed Spark jobs on EMR",
        "Deployed Spark applications on AWS EMR for high-performance processing of large datasets",
        "Extracted reference data from RDS to enhance transaction datasets",
        "Implemented validation and quality checks for accuracy",
        "Optimized Spark jobs to cut processing time and costs",
        "Automated workflows with Apache Airflow for scheduling and monitoring",
        "Managed version control with Git (GitHub/Bitbucket)",
        "Skills: Airflow, EMR, Git, Hive, PySpark, Python, RDS, Spark, S3",
      ],
    },
    {
      company: "ERP Consulting",
      position: "Data Engineer Intern",
      duration: "June 2022 – June 2023",
      location: "Pune",
      responsibilities: [
        "Built centralized data warehouse in AWS Redshift for telecom customer data",
        "Processed usage, billing, and service data from AWS S3",
        "Developed automated ETL pipelines with AWS Glue",
        "Managed schemas with AWS Glue Data Catalog",
        "Queried data with AWS Athena for analytics",
        "Set up CloudWatch monitoring and alerts",
        "Optimized Redshift table design and query performance",
        "Skills: Athena, CloudWatch, Glue, RDS, Redshift, S3",
      ],
    },
  ];

  const skills = [
    {
      category: "Big Data Processing",
      items: "Apache Spark, Databricks, Hadoop, HDFS, Hive, PySpark, Snowflake",
    },
    {
      category: "Cloud Services",
      items: "Athena, EC2, EMR, Glue, Quicksight, RDS, Redshift, S3",
    },
    {
      category: "Programming Languages",
      items: "Bash, HQL, Java, Python, SQL",
    },
    { category: "Project Management Tools", items: "Confluence, Jira" },
    {
      category: "Soft Skills",
      items:
        "Adaptability, Attention to Detail, Problem Solving, Quick Learner",
    },
    {
      category: "System & Infrastructure",
      items:
        "Cloud infrastructure management, Distributed computing environments, Linux administration, Shell Scripting",
    },
    {
      category: "Tools",
      items:
        "Jupyter Notebooks, MySQL Workbench, PowerBI, PyCharm, Putty, VSCode",
    },
    {
      category: "Version Control & Code Management",
      items: "Bitbucket, Git, GitHub",
    },
    {
      category: "Workflow & Orchestration",
      items: "Apache Airflow, AWS Glue, Databricks Lakeflow Jobs",
    },
  ];

  return (
    <section>
      {/* Header */}
      <h1 className="mb-4 text-4xl font-bold tracking-tight">
        Niranjan Fartare
      </h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
        Data Engineer with 3+ years’ experience in AWS, PySpark & Spark. Built
        scalable ETL pipelines for finance & telecom domains using EMR, Glue,
        and Redshift. Skilled in big data processing and cloud platforms.
      </p>

      {/* Experience */}
      <h2 className="text-2xl font-semibold mb-2">Experience</h2>
      <div className="border-t border-gray-300 dark:border-gray-600 mb-6"></div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <div>
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.company}, {exp.location}
                </p>
              </div>
              <div className="text-sm text-gray-500 md:text-right">
                <div>{exp.duration}</div>
                <div></div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-4">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 className="text-2xl font-semibold mt-12 mb-2">Skills</h2>
      <div className="border-t border-gray-300 dark:border-gray-600 mb-6"></div>
      <div className="space-y-1 text-sm">
        {skills.map((skill, index) => (
          <p key={index}>
            <span className="font-semibold">{skill.category}:</span>{" "}
            {skill.items}
          </p>
        ))}
      </div>

      {/* Blog */}
      <h2 className="text-2xl font-semibold mt-12 mb-2">Latest Posts</h2>
      <div className="border-t border-gray-300 dark:border-gray-600 mb-6"></div>
      <BlogPosts />
      <Link
        href="https://mastodon.social/@niranjan0"
        className="hidden"
        rel="me"
      >
        Mastodon
      </Link>
      <Link href="https://mas.to/@niranjan1" className="hidden" rel="me">
        Mastodon
      </Link>
      <Link
        href="https://social.vivaldi.net/@niranjan0"
        className="hidden"
        rel="me"
      >
        Mastodon
      </Link>
      <Link href="https://defcon.social/@niranjan" className="hidden" rel="me">
        Mastodon
      </Link>
      <Link href="https://ioc.exchange/@niranjan" className="hidden" rel="me">
        Mastodon
      </Link>
      <Link
        href="https://cyberplace.social/@niranjan"
        className="hidden"
        rel="me"
      >
        Mastodon
      </Link>
      <Link href="https://mstdn.party/@niranjan" className="hidden" rel="me">
        Mastodon
      </Link>
      <Link href="https://fosstodon.org/@niranjan" className="hidden" rel="me">
        Mastodon
      </Link>
    </section>
  );
}
