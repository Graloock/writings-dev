// Do not try this shi at home!
// Better use db instead of this crap xD

export interface PostProps {
  image?: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  // Subject to change
  category: string;
}

export const Posts: PostProps[] = [
  {
    alt: "build-ci-pipelines-github-actions",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/2.png",
    alt: "python-for-absolute-beginners",
    title: "Python for the Absolute beginners",
    description:
      "Python is the most popular programming language out there and it is used for so many different industries.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/1.png",
    alt: "mastering-async-patterns-modern-js",
    title: "Mastering Async Patterns in Modern JavaScript",
    description:
      "A deep dive into async/await, Promises, and the event loop to help you write cleaner, more reliable asynchronous code.",
    date: "March 12, 2023",
    category: "JavaScript",
  },
  {
    image: "/images/2.png",
    alt: "optimizing-ci-cd-for-faster-delivery",
    title: "Optimizing CI/CD Pipelines for Faster Delivery",
    description:
      "Explore caching, parallelization, and workflow strategies that significantly reduce build and deployment times.",
    date: "August 5, 2022",
    category: "DevOps",
  },
  {
    image: "/images/3.png",
    alt: "deploying-workloads-on-aws",
    title: "A Practical Guide to Deploying Workloads on AWS",
    description:
      "Learn how to deploy scalable, secure cloud applications using core AWS services and best practices.",
    date: "January 18, 2023",
    category: "Cloud",
  },
  {
    image: "/images/4.png",
    alt: "reusable-terraform-modules",
    title: "Infrastructure as Code: Writing Reusable Terraform Modules",
    description:
      "Understand module design patterns and how reusable IaC components improve consistency and reduce duplication.",
    date: "April 3, 2023",
    category: "Terraform",
  },
  {
    image: "/images/5.png",
    alt: "resilient-microservices-architectures",
    title: "Designing Resilient Microservices Architectures",
    description:
      "Discover architectural patterns that help distributed systems handle failure gracefully.",
    date: "November 22, 2022",
    category: "Architecture",
  },
  {
    image: "/images/6.png",
    alt: "scaling-web-apps-millions-users",
    title: "Scaling Web Applications to Millions of Users",
    description:
      "Learn core scaling strategies including load balancing, caching, queueing, and database sharding.",
    date: "July 14, 2023",
    category: "Scalability",
  },
  {
    image: "/images/7.png",
    alt: "event-driven-systems-explained",
    title: "What Are Event-Driven Systems? A Simple Explanation",
    description:
      "A beginner-friendly explanation of event-driven design, message queues, and asynchronous system behavior.",
    date: "October 2, 2022",
    category: "Explainers",
  },
  {
    image: "/images/8.png",
    alt: "understanding-serverless-pros-cons",
    title: "Understanding Serverless: When to Use It and When Not To",
    description:
      "Serverless can drastically simplify architecture — but only when used in the right scenarios.",
    date: "February 11, 2023",
    category: "Cloud",
  },
  {
    image: "/images/9.png",
    alt: "hidden-power-of-js-proxies",
    title: "The Hidden Power of JavaScript Proxies",
    description:
      "Proxies unlock advanced metaprogramming features that allow you to intercept and control JS operations.",
    date: "May 28, 2023",
    category: "JavaScript",
  },
  {
    image: "/images/3.png",
    alt: "docker-from-zero-to-hero",
    title: "Docker from Zero to Hero",
    description:
      "Learn what is Docker and how Docker is used in the whole software development process.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/1.png",
    alt: "zero-trust-secure-infrastructure",
    title: "Building Secure Infrastructure with Zero Trust Principles",
    description:
      "Zero Trust is becoming the new security standard. Learn how to apply it across cloud and on-prem systems.",
    date: "June 2, 2023",
    category: "Architecture",
  },
  {
    image: "/images/2.png",
    alt: "terraform-workspaces-multi-env",
    title: "Managing Multi-Environment Deployments with Terraform Workspaces",
    description:
      "Learn how Terraform Workspaces simplify managing dev, staging, and production infrastructure.",
    date: "September 19, 2023",
    category: "Terraform",
  },
  {
    image: "/images/3.png",
    alt: "future-of-javascript-ecmascript",
    title: "The Future of JavaScript: ECMAScript Features You Should Know",
    description:
      "Upcoming ECMAScript proposals that will transform how you write JavaScript in the next few years.",
    date: "December 4, 2023",
    category: "JavaScript",
  },
  {
    image: "/images/4.png",
    alt: "multi-region-cloud-architectures",
    title: "Improving Reliability with Multi-Region Cloud Architectures",
    description:
      "Learn how multi-region deployments prevent outages and improve global performance.",
    date: "March 10, 2024",
    category: "Cloud",
  },
  {
    image: "/images/5.png",
    alt: "devops-anti-patterns",
    title: "DevOps Anti-Patterns: What Teams Must Avoid",
    description:
      "Avoid the most common pitfalls that slow teams down and create bottlenecks in delivery pipelines.",
    date: "January 30, 2024",
    category: "DevOps",
  },
  {
    image: "/images/6.png",
    alt: "horizontal-vs-vertical-scaling",
    title: "Horizontal vs Vertical Scaling: When to Use Each Strategy",
    description:
      "A clear breakdown of scaling techniques and how to choose the right approach for your application.",
    date: "April 14, 2024",
    category: "Scalability",
  },
  {
    image: "/images/7.png",
    alt: "why-distributed-systems-are-hard",
    title: "Why Distributed Systems Are So Hard — Explained Simply",
    description:
      "Concepts like consensus, partitions, and clock drift explained without complex math or jargon.",
    date: "February 21, 2024",
    category: "Explainers",
  },
  {
    image: "/images/8.png",
    alt: "ddd-modular-microservices",
    title: "Creating Modular Microservices with Domain-Driven Design",
    description:
      "DDD helps teams create loosely coupled microservices with clear boundaries and ownership.",
    date: "October 12, 2023",
    category: "Architecture",
  },
  {
    image: "/images/9.png",
    alt: "terraform-version-control-safely",
    title: "How to Version Control Infrastructure Safely in Terraform",
    description:
      "Learn patterns for structuring Terraform repositories, separating environments, and preventing drift.",
    date: "November 6, 2023",
    category: "Terraform",
  },
  {
    image: "/images/4.png",
    alt: "build-ci-pipelines-github-actions-2",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/5.png",
    alt: "build-ci-pipelines-github-actions-3",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/6.png",
    alt: "build-ci-pipelines-github-actions-4",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/7.png",
    alt: "build-ci-pipelines-github-actions-5",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/8.png",
    alt: "build-ci-pipelines-github-actions-6",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
  {
    image: "/images/9.png",
    alt: "build-ci-pipelines-github-actions-7",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
    date: "June 24, 2022",
    category: "DevOps",
  },
] as const;
