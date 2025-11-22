import Logo from "@/components/layout/Logo";
import NavigationCategories from "@/components/ui/Navigation/NavigationCategories";
import { categories } from "@/Categories";

export default function Categories() {
  return (
    <main>
      <Logo title={"Categories"} />
      <NavigationCategories categories={categories} />
    </main>
  );
}
