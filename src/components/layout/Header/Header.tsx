import HeaderHomepage from "@/components/layout/Header/HeaderHomepage";
import HeaderNavigation from "@/components/layout/Header/HeaderNavigation";
import HeaderMenu from "@/components/layout/Header/HeaderMenu";

export default function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto] items-center">
      <HeaderHomepage />
      <div className={"md:hidden block"}>
        <HeaderMenu />
      </div>
      <div className={"hidden md:block"}>
        <HeaderNavigation />
      </div>
    </header>
  );
}
