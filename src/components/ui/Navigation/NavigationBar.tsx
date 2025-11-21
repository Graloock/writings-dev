import { Category } from "@/Categories";
import GridIcon from "@/icons/GridIcon";
import ListIcon from "@/icons/ListIcon";
import NavigationCategories from "@/components/ui/Navigation/NavigationCategories";
import React from "react";

interface CategoriesBarProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: Category[];
  highlighted?: string;
}

export default function NavigationBar({
  categories,
  highlighted,
  ...rest
}: CategoriesBarProps) {
  return (
    <div className={"flex place-items-center my-3 pb-24"} {...rest}>
      <div className={"flex space-x-[13px] text-[#909090] shrink-0"}>
        <GridIcon />
        <ListIcon />
      </div>
      <NavigationCategories categories={categories} highlighted={highlighted} />
    </div>
  );
}
