// Do not try this shi at home!
// Better use db instead of this crap xD

export interface Post {
  image?: string;
  alt: string;
  title: string;
  description: string;
  date: Date;
  // Subject to change
  category: string;
}

export const Posts = [
  {
    image: "/images/1.png",
    alt: "1",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: new Date(Date.UTC(2022, 6, 24)),
    category: "DevOps",
  },
  {
    image: "/images/2.png",
    alt: "2",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: new Date(Date.UTC(2022, 6, 24)),
    category: "DevOps",
  },
  {
    image: "/images/3.png",
    alt: "3",
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous " +
      "integration and delivery into your applications.",
    date: new Date(Date.UTC(2022, 6, 24)),
    category: "DevOps",
  },
] as const;
