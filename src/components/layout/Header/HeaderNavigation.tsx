import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <div className="text-2xl space-x-[36px]">
      <Link href="/categories">categories</Link>
      <Link href="/articles">articles</Link>
      <Link href="/about">about</Link>
    </div>
  );
}
