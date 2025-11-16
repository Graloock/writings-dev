// Do not try this shi at home!
// Better use db instead of this crap xD

export interface Post {
  image?: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  // Subject to change
  category: string;
}

export const Posts: Post[] = [
  {
    image: "/images/1.png",
    alt: "1",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/2.png",
    alt: "2",
    title: "Python for the Absolute beginners",
    description:
      "Python is the most popular programming language out there and " +
      "it is used for so many different industries.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/1.png",
    alt: "Mastering Async Patterns in Modern JavaScript",
    title: "Mastering Async Patterns in Modern JavaScript",
    description:
      "A deep dive into async/await, Promises, and the event loop to help you write cleaner, more reliable asynchronous code.",
    date: "March 12, 2023",
    category: "JavaScript",
  },
  {
    image: "/images/2.png",
    alt: "Optimizing CI/CD Pipelines for Faster Delivery",
    title: "Optimizing CI/CD Pipelines for Faster Delivery",
    description:
      "Explore caching, parallelization, and workflow strategies that significantly reduce build and deployment times.",
    date: "August 5, 2022",
    category: "DevOps",
  },
  {
    image: "/images/3.png",
    alt: "A Practical Guide to Deploying Workloads on AWS",
    title: "A Practical Guide to Deploying Workloads on AWS",
    description:
      "Learn how to deploy scalable, secure cloud applications using core AWS services and best practices.",
    date: "January 18, 2023",
    category: "Cloud",
  },
  {
    image: "/images/4.png",
    alt: "Infrastructure as Code: Writing Reusable Terraform Modules",
    title: "Infrastructure as Code: Writing Reusable Terraform Modules",
    description:
      "Understand module design patterns and how reusable IaC components improve consistency and reduce duplication.",
    date: "April 3, 2023",
    category: "Terraform",
  },
  {
    image: "/images/5.png",
    alt: "Designing Resilient Microservices Architectures",
    title: "Designing Resilient Microservices Architectures",
    description:
      "Discover architectural patterns that help distributed systems handle failure gracefully.",
    date: "November 22, 2022",
    category: "Architecture",
  },
  {
    image: "/images/6.png",
    alt: "Scaling Web Applications to Millions of Users",
    title: "Scaling Web Applications to Millions of Users",
    description:
      "Learn core scaling strategies including load balancing, caching, queueing, and database sharding.",
    date: "July 14, 2023",
    category: "Scalability",
  },
  {
    image: "/images/7.png",
    alt: "What Are Event-Driven Systems? A Simple Explanation",
    title: "What Are Event-Driven Systems? A Simple Explanation",
    description:
      "A beginner-friendly explanation of event-driven design, message queues, and asynchronous system behavior.",
    date: "October 2, 2022",
    category: "Explainers",
  },
  {
    image: "/images/8.png",
    alt: "Understanding Serverless: When to Use It and When Not To",
    title: "Understanding Serverless: When to Use It and When Not To",
    description:
      "Serverless can drastically simplify architecture — but only when used in the right scenarios.",
    date: "February 11, 2023",
    category: "Cloud",
  },
  {
    image: "/images/9.png",
    alt: "The Hidden Power of JavaScript Proxies",
    title: "The Hidden Power of JavaScript Proxies",
    description:
      "Proxies unlock advanced metaprogramming features that allow you to intercept and control JS operations.",
    date: "May 28, 2023",
    category: "JavaScript",
  },
  {
    image: "/images/3.png",
    alt: "3",
    title: "Docker from Zero to Hero",
    description:
      "Learn what is Docker and  how Docker is used in the whole software " +
      "development process.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/1.png",
    alt: "Building Secure Infrastructure with Zero Trust Principles",
    title: "Building Secure Infrastructure with Zero Trust Principles",
    description:
      "Zero Trust is becoming the new security standard. Learn how to apply it across cloud and on-prem systems.",
    date: "June 2, 2023",
    category: "Architecture",
  },
  {
    image: "/images/2.png",
    alt: "Managing Multi-Environment Deployments with Terraform Workspaces",
    title: "Managing Multi-Environment Deployments with Terraform Workspaces",
    description:
      "Learn how Terraform Workspaces simplify managing dev, staging, and production infrastructure.",
    date: "September 19, 2023",
    category: "Terraform",
  },
  {
    image: "/images/3.png",
    alt: "The Future of JavaScript: ECMAScript Features You Should Know",
    title: "The Future of JavaScript: ECMAScript Features You Should Know",
    description:
      "Upcoming ECMAScript proposals that will transform how you write JavaScript in the next few years.",
    date: "December 4, 2023",
    category: "JavaScript",
  },
  {
    image: "/images/4.png",
    alt: "Improving Reliability with Multi-Region Cloud Architectures",
    title: "Improving Reliability with Multi-Region Cloud Architectures",
    description:
      "Learn how multi-region deployments prevent outages and improve global performance.",
    date: "March 10, 2024",
    category: "Cloud",
  },
  {
    image: "/images/5.png",
    alt: "DevOps Anti-Patterns: What Teams Must Avoid",
    title: "DevOps Anti-Patterns: What Teams Must Avoid",
    description:
      "Avoid the most common pitfalls that slow teams down and create bottlenecks in delivery pipelines.",
    date: "January 30, 2024",
    category: "DevOps",
  },
  {
    image: "/images/6.png",
    alt: "Horizontal vs Vertical Scaling: When to Use Each Strategy",
    title: "Horizontal vs Vertical Scaling: When to Use Each Strategy",
    description:
      "A clear breakdown of scaling techniques and how to choose the right approach for your application.",
    date: "April 14, 2024",
    category: "Scalability",
  },
  {
    image: "/images/7.png",
    alt: "Why Distributed Systems Are So Hard — Explained Simply",
    title: "Why Distributed Systems Are So Hard — Explained Simply",
    description:
      "Concepts like consensus, partitions, and clock drift explained without complex math or jargon.",
    date: "February 21, 2024",
    category: "Explainers",
  },
  {
    image: "/images/8.png",
    alt: "Creating Modular Microservices with Domain-Driven Design",
    title: "Creating Modular Microservices with Domain-Driven Design",
    description:
      "DDD helps teams create loosely coupled microservices with clear boundaries and ownership.",
    date: "October 12, 2023",
    category: "Architecture",
  },
  {
    image: "/images/9.png",
    alt: "How to Version Control Infrastructure Safely in Terraform",
    title: "How to Version Control Infrastructure Safely in Terraform",
    description:
      "Learn patterns for structuring Terraform repositories, separating environments, and preventing drift.",
    date: "November 6, 2023",
    category: "Terraform",
  },
  {
    image: "/images/4.png",
    alt: "4",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/5.png",
    alt: "5",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/6.png",
    alt: "6",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/7.png",
    alt: "7",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/8.png",
    alt: "8",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/9.png",
    alt: "9",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
] as const;
