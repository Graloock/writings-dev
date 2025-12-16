import { Button } from "@headlessui/react";
import Link from "next/link";
import NextIcon from "@/icons/NextIcon";
import GithubIcon from "@/icons/GithubIcon";

export default function Footer() {
  return (
    <footer className={"flex justify-between align-middle py-7"}>
      <div className={"flex items-center gap-4 font-source-sans text-3xl"}>
        <p>writings.dev</p>
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
            className={
              "font-source-sans cursor-pointer bg-black px-2 rounded-md flex gap-2"
            }
          >
            <GithubIcon width={16} />
            Graloock
          </Button>
        </Link>
      </div>
    </footer>
  );
}
