import Link from "next/link";

export default function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto] items-center font-poppins">
      <div>
        <Link href="/" className="text-3xl nav-btn">
          writings.dev
        </Link>
      </div>
      <div className="text-2xl space-x-[36px]">
        <Link href="/categories">categories</Link>
        <Link href="/articles">articles</Link>
        <Link href="/about">about</Link>
      </div>
    </header>
  );
}
