import Link from "next/link";

interface HeaderNavigationProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

export default function HeaderNavigation({
  className,
  ...rest
}: HeaderNavigationProps) {
  return (
    <div className={`text-2xl ${className}`} {...rest}>
      <Link href="/categories">categories</Link>
      <Link href="/articles">articles</Link>
      <Link href="/about">about</Link>
    </div>
  );
}
