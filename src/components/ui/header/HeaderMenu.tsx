import ListIcon from "@/icons/ListIcon";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import HeaderNavigation from "@/components/ui/header/HeaderNavigation";

export default function HeaderMenu() {
  return (
    <Popover className={"h-6 aspect-square"}>
      <PopoverButton>
        <ListIcon cursor={"pointer"} />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor={"bottom end"}
        className={
          "bg-[#232830] border border-[#4D4D4D] rounded-[22px] shadow-[-8px_8px_20px_rgba(0,0,0,0.35)] transition duration-200 ease-in-out data-closed:-translate-y-10 data-closed:translate-x-3 data-closed:opacity-0 [--anchor-gap:--spacing(3)]"
        }
      >
        <HeaderNavigation
          className={"flex flex-col text-center capitalize p-4 gap-2"}
        />
      </PopoverPanel>
    </Popover>
  );
}
