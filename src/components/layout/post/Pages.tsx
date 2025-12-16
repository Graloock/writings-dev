import { PostQuery } from "@/components/layout/post/Posts";
import Link from "next/link";
import Page from "@/components/ui/page/Page";

export default function Pages({
  posts,
  category,
  page = 1,
  postsPerPage = 9,
}: PostQuery) {
  const postCount = posts.filter((post) =>
    category ? post.category === category : true,
  ).length;
  const pageCount = Math.ceil(postCount / postsPerPage);

  const pageElement = [];
  for (let i = 1; i <= pageCount; i++) {
    pageElement.push(
      <Link href={"?page=" + i} key={i}>
        <Page selectedPage={page}>{i}</Page>
      </Link>,
    );
  }
  return (
    pageElement.length > 1 && (
      <div className={"flex flex-row justify-center"}>{pageElement}</div>
    )
  );
}
