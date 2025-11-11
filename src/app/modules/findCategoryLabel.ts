import { categories } from "@/Categories";

export default function findCategoryLabel(category: string) {
  return categories
    .map((item) => item.label)
    .find((item) => item.toLowerCase() === category);
}
