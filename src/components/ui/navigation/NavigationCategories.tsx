import GradientAccent from "@/components/layout/GradientAccent";
import Link from "next/link";
import { Category } from "@/Categories";

export interface NavigationProps extends React.HTMLProps<HTMLDivElement> {
  categories: Category[];
  selectedCategory?: string;
}

export default function NavigationCategories({
  categories,
  selectedCategory,
}: NavigationProps) {
  return (
    <div className={"min-w-0 relative"}>
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
              category.label.toLowerCase() === selectedCategory
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
