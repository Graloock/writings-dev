import GradientAccent from "@/components/layout/GradientAccent";
import Link from "next/link";
import { Category } from "@/Categories";

interface NavigationCategoriesProps extends React.HTMLProps<HTMLDivElement> {
  categories: Category[];
  highlighted?: string;
}

export default function NavigationCategories({
  categories,
  highlighted,
}: NavigationCategoriesProps) {
  return (
    <div className={"overflow-x-clip relative"}>
      <GradientAccent direction={"left"} />
      <div
        className={
          "space-x-9 text-[27px] overflow-x-auto font-recursive pr-20 pl-10"
        }
      >
        {categories.map((category) => (
          <Link
            href={`/${category.href}`}
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
      <GradientAccent direction={"right"} />
    </div>
  );
}
