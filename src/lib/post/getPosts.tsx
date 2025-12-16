import Post from "@/components/ui/post/Post";
import { PostQuery } from "@/components/layout/post/Posts";

export default function getPosts({
  posts,
  page = 1,
  postsPerPage = 9,
  category,
}: PostQuery) {
  return posts
    .filter((post) => (category ? post.category === category : true))
    .splice((page - 1) * postsPerPage, postsPerPage)
    .map(({ image, alt, title, description, date, category }) => (
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
