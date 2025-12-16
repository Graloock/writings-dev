import type { Metadata } from "next";
import { Recursive, Poppins, Source_Sans_3 } from "next/font/google";
import "@/css/globals.css";
import Header from "@/components/ui/header/Header";
import Separator from "@/components/layout/Separator";
import React from "react";
import Footer from "@/components/ui/footer/Footer";

const sourceSans = Source_Sans_3({
  weight: ["600"],
  variable: "--font-source-sans",
});

const poppins = Poppins({
  weight: ["400", "600"],
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
        className={`${recursive.variable} ${poppins.variable} ${sourceSans.variable} margin antialiased`}
      >
        <div>
          <Header />
          {children}
          <Separator className={"my-3"} />
          <Footer />
        </div>
      </body>
    </html>
  );
}
