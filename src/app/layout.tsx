import type { Metadata } from "next";
import { Recursive, Poppins } from "next/font/google";
import "@/css/globals.css";
import NavBar from "@/components/NavBar";
import Separator from "@/components/Separator";

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

const recursive = Recursive({
  variable: "--font-recursive",
  axes: ["slnt"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Writings.dev",
  description: "A pet-project created to test frontend skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${recursive.variable} ${poppins.variable} margin antialiased`}
      >
        <NavBar />
        {children}
        <Separator className={"my-3"} />
      </body>
    </html>
  );
}
