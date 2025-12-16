import { PostList } from "@/PostList";

export function generateStaticParams() {
  return PostList.map((post) => ({
    id: post.alt,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <div className={"text-7xl"}>Post {id}</div>;
}
