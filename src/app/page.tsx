import Logo from "@/components/ui/Logo";
import NavigationBar from "@/components/ui/navigation/NavigationBar";
import { categories } from "@/Categories";
import Separator from "@/components/layout/Separator";
import { PostList } from "@/PostList";
import Posts, { PostQuery } from "@/components/layout/post/Posts";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: number }>;
}) {
  const page = (await searchParams).page;

  const posts: PostQuery = {
    posts: PostList,
    page: page,
  };

  return (
    <main className="w-full">
      <Logo
        title={"Writings for Developers"}
        subtitle={"Curated collection of articles for busy developers"}
      />
      <Separator />
      <NavigationBar categories={categories} />
      <Posts {...posts} />
    </main>
  );
}
