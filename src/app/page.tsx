import Logo from "@/components/layout/Logo";
import CategoriesBar from "@/components/layout/CategoriesBar";
import { categories } from "@/Categories";
import Separator from "@/components/decorator/Separator";
import { Posts } from "@/Posts";
import PostElement from "@/components/ui/PostElement";

export default function Home() {
  return (
    <main className="w-full">
      <Logo
        title={"Writings for Developers"}
        subtitle={"Curated collection of articles for busy developers"}
      />
      <Separator />
      <CategoriesBar categories={categories} />
      <div
        className={
          "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[37px]"
        }
      >
        {Posts.map(({ image, alt, title, description, date, category }) => (
          <PostElement
            image={image}
            key={alt}
            alt={alt}
            title={title}
            description={description}
            date={date}
            category={category}
          />
        ))}
      </div>
    </main>
  );
}
