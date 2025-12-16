import Logo from "@/components/ui/Logo";
import NavigationBar from "@/components/ui/navigation/NavigationBar";
import { categories } from "@/Categories";
import findCategoryLabel from "@/lib/util/findCategoryLabel";
import { notFound } from "next/navigation";
import Separator from "@/components/layout/Separator";
import { PostList } from "@/PostList";
import Posts, { PostQuery } from "@/components/layout/post/Posts";

/*export function generateStaticParams() {
  return categories.map(({ href }) => ({
    category: href,
  }));
}*/

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page: number }>;
}) {
  const { category } = await params;
  const page = (await searchParams).page;
  const categoryLabel = findCategoryLabel(category)
    ? findCategoryLabel(category)
    : notFound();

  const posts: PostQuery = {
    posts: PostList,
    page,
    category: categoryLabel,
  };

  return (
    <div className={"w-full"}>
      <Logo title={categoryLabel} />
      <Separator />
      <NavigationBar categories={categories} selectedCategory={category} />
      <Posts {...posts} />
    </div>
  );
}
