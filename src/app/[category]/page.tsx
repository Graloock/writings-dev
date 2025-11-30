import Logo from "@/components/ui/Logo";
import NavigationBar from "@/components/ui/Navigation/NavigationBar";
import { categories } from "@/Categories";
import findCategoryLabel from "@/lib/util/findCategoryLabel";
import { notFound } from "next/navigation";
import Separator from "@/components/layout/Separator";
import getPosts from "@/lib/post/getPosts";
import { Posts } from "@/Posts";

export function generateStaticParams() {
  return categories.map(({ href }) => ({
    category: href,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryLabel = findCategoryLabel(category)
    ? findCategoryLabel(category)
    : notFound();
  return (
    <div className={"w-full"}>
      <Logo title={categoryLabel} />
      <Separator />
      <NavigationBar categories={categories} highlighted={category} />
      <div
        className={
          "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[37px]"
        }
      >
        {getPosts(Posts, categoryLabel)}
      </div>
    </div>
  );
}
