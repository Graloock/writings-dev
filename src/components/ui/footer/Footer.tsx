import { Button } from "@headlessui/react";
import Link from "next/link";
import NextIcon from "@/icons/NextIcon";
import GithubIcon from "@/icons/GithubIcon";

export default function Footer() {
  return (
    <footer
      className={
        "flex flex-col sm:flex-row place-items-center justify-between align-middle font-source-sans py-7"
      }
    >
      <div
        className={
          "flex w-full justify-center sm:justify-start place-items-center gap-4 text-3xl"
        }
      >
        <p>
          <Link href={"/"}>writings.dev</Link>
        </p>
        <p>&</p>
        <NextIcon className={"w-40"} />
      </div>

      <div className={"flex items-center"}>
        <Link
          href={"https://github.com/Graloock"}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          <Button
            className={"cursor-pointer bg-black px-2 rounded-md flex gap-2"}
          >
            <GithubIcon width={16} />
            Graloock
          </Button>
        </Link>
      </div>
    </footer>
  );
}
