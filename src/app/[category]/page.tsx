import Logo from "@/components/layout/Logo";
import CategoriesBar from "@/components/layout/CategoriesBar";
import { categories } from "@/Categories";
import findCategoryLabel from "@/utils/findCategoryLabel";
import { notFound } from "next/navigation";

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
    <div>
      <Logo title={categoryLabel} />
      <CategoriesBar categories={categories} highlighted={category} />
    </div>
  );
}
