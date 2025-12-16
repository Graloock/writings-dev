import HeaderHomepage from "@/components/ui/header/HeaderHomepage";
import HeaderNavigation from "@/components/ui/header/HeaderNavigation";
import HeaderMenu from "@/components/ui/header/HeaderMenu";

export default function Header() {
  return (
    <header className="flex justify-between ">
      <HeaderHomepage />
      <div className={"md:hidden block self-center"}>
        <HeaderMenu />
      </div>
      <div className={"hidden md:block"}>
        <HeaderNavigation className={"space-x-9"} />
      </div>
    </header>
  );
}
