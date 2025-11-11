import Image from "next/image";
import Link from "next/link";

export interface Categories {
  href: string;
  label: string;
}

export default function CategoriesBar({
  categories,
}: {
  categories: Categories[];
}) {
  return (
    <div className={"flex place-items-center my-3 relative"}>
      <div className={"flex space-x-[13px] shrink-0 pr-10"}>
        <Image src={"/grid.svg"} alt={"Grid"} width={24} height={24} />
        <Image src={"/list.svg"} alt={"Grid"} width={24} height={24} />
      </div>
      <div
        className={
          "space-x-9 text-[27px] text-[#909090] font-recursive overflow-x-auto pr-20"
        }
      >
        {categories.map((category) => (
          <Link href={category.href} key={category.label}>
            {category.label}
          </Link>
        ))}
      </div>
      <div
        className={
          "absolute pointer-events-none right-0 w-29 h-full bg-gradient-to-r to-[#232830]"
        }
      ></div>
    </div>
  );
}
