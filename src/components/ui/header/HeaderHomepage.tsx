import Link from "next/link";

export default function HeaderHomepage() {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center">
      <div>
        <Link href="/" className="text-3xl nav-btn">
          writings.dev
        </Link>
      </div>
    </div>
  );
}
