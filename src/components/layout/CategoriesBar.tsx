import Link from "next/link";
import { Category } from "@/Categories";
import GridIcon from "@/icons/GridIcon";
import ListIcon from "@/icons/ListIcon";

export default function CategoriesBar({
  categories,
  highlighted,
}: {
  categories: Category[];
  highlighted?: string;
}) {
  return (
    <div className={"flex place-items-center my-3 relative"}>
      <div className={"flex space-x-[13px] text-[#909090] shrink-0 pr-10"}>
        <GridIcon />
        <ListIcon />
      </div>
      <div
        className={"space-x-9 text-[27px] font-recursive overflow-x-auto pr-20"}
      >
        {categories.map((category) => (
          <Link
            href={category.href}
            key={category.label}
            className={
              category.label.toLowerCase() === highlighted
                ? "text-[#DCDCDC]"
                : "text-[#909090]"
            }
          >
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
