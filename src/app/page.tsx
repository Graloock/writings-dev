import Logo from "@/components/ui/Logo";
import NavigationBar from "@/components/ui/Navigation/NavigationBar";
import { categories } from "@/Categories";
import Separator from "@/components/layout/Separator";
import { Posts } from "@/Posts";
import getPosts from "@/lib/post/getPosts";

export default function Home() {
  return (
    <main className="w-full">
      <Logo
        title={"Writings for Developers"}
        subtitle={"Curated collection of articles for busy developers"}
      />
      <Separator />
      <NavigationBar categories={categories} />
      <div
        className={
          "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[37px]"
        }
      >
        {getPosts(Posts)}
      </div>
    </main>
  );
}
