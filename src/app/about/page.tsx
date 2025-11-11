import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main>
      <Logo title={"About Me"} />
      <p>I am Vadym Terekovskyi, low experience in Web Dev xD</p>
    </main>
  );
}
