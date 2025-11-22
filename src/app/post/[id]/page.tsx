import { Posts } from "@/Posts";

export function generateStaticParams() {
  return Posts.map((post) => post.alt);
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <div className={"text-7xl"}>Post {id}</div>;
}
