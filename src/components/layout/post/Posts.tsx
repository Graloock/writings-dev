import getPosts from "@/lib/post/getPosts";
import Pages from "@/components/layout/post/Pages";
import { PostProps } from "@/PostList";

export interface PostQuery {
  category?: string;
  page?: number;
  posts: PostProps[];
  postsPerPage?: number;
}

export default function Posts(posts: PostQuery) {
  return (
    <div>
      <div
        className={
          "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[37px] py-24"
        }
      >
        {getPosts(posts)}
      </div>
      <Pages {...posts} />
    </div>
  );
}
