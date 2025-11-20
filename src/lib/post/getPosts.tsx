import { Post } from "@/Posts";
import PostElement from "@/components/ui/PostElement";

export default function getPosts(Posts: Post[]) {
  return Posts.map(({ image, alt, title, description, date, category }) => (
    <PostElement
      image={image}
      key={alt}
      alt={alt}
      title={title}
      description={description}
      date={date}
      category={category}
    />
  ));
}

export function getPostsByCategory(
  Posts: Post[],
  category: string | undefined,
) {
  return Posts.filter((post) => post.category === category).map(
    ({ image, alt, title, description, date, category }) => (
      <PostElement
        image={image}
        key={alt}
        alt={alt}
        title={title}
        description={description}
        date={date}
        category={category}
      />
    ),
  );
}
