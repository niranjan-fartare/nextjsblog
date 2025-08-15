export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface Skill {
  category: string;
  items: string;
}

export const experiences: Experience[] = [
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

export const skills: Skill[] = [
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
  {
    category: "Project Management Tools",
    items: "Confluence, Jira",
  },
  {
    category: "Soft Skills",
    items: "Adaptability, Attention to Detail, Problem Solving, Quick Learner",
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
