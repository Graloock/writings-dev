import GridIcon from "@/icons/GridIcon";
import ListIcon from "@/icons/ListIcon";
import NavigationCategories, {
  NavigationProps,
} from "@/components/ui/navigation/NavigationCategories";
import React from "react";

export default function NavigationBar({
  categories,
  selectedCategory,
  ...rest
}: NavigationProps) {
  return (
    <div className={"flex place-items-center my-3"} {...rest}>
      <div className={"flex space-x-[13px] text-[#909090] shrink-0"}>
        <GridIcon />
        <ListIcon />
      </div>
      <NavigationCategories
        categories={categories}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
