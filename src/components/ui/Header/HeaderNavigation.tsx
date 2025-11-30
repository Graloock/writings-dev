import Link from "next/link";

export default function HeaderNavigation({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`text-2xl space-x-[36px] ${className}`}>
      <Link href="/categories">categories</Link>
      <Link href="/articles">articles</Link>
      <Link href="/about">about</Link>
    </div>
  );
}
