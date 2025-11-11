import Logo from "@/components/Logo";
import CategoriesBar from "@/components/CategoriesBar";
import { categories } from "@/Categories";
import findCategoryLabel from "@/app/modules/findCategoryLabel";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryLabel =
    findCategoryLabel(category) !== undefined
      ? findCategoryLabel(category)
      : notFound();

  return (
    <div>
      <Logo title={categoryLabel} />
      <CategoriesBar categories={categories} />
    </div>
  );
}
