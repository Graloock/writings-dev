import Logo from "@/components/ui/Logo";
import NavigationCategories from "@/components/ui/navigation/NavigationCategories";
import { categories } from "@/Categories";

export default function Categories() {
  return (
    <main>
      <Logo title={"Categories"} />
      <NavigationCategories categories={categories} />
    </main>
  );
}
