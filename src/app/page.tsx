import Logo from "@/components/layout/Logo";
import CategoriesBar from "@/components/layout/CategoriesBar";
import { categories } from "@/Categories";
import Separator from "@/components/decorator/Separator";

export default function Home() {
  return (
    <main className="">
      <Logo
        title={"Writings for Developers"}
        subtitle={"Curated collection of articles for busy developers"}
      />
      <Separator />
      <CategoriesBar categories={categories} />
      Hi!
    </main>
  );
}
