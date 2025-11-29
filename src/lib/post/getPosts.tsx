import { PostProps } from "@/Posts";
import Post from "@/components/ui/Post/Post";

export default function getPosts(Posts: PostProps[], category?: string) {
  return Posts.filter((post) =>
    category ? post.category === category : true,
  ).map(({ image, alt, title, description, date, category }) => (
    <Post
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
