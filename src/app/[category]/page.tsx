import Logo from "@/components/layout/Logo";
import NavigationBar from "@/components/ui/Navigation/NavigationBar";
import { categories } from "@/Categories";
import { getPostsByCategory } from "@/lib/post/getPostElements";
import { Posts } from "@/Posts";
import Separator from "@/components/layout/Separator";

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
  const categoryLabel = category;
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
        {getPostsByCategory(Posts, categoryLabel)}
      </div>
    </div>
  );
}
