// TODO: double check if use client is good for use in layout
"use client";

import type { Metadata } from "next";
import { dyslexic, inter } from "./fonts";
import "./globals.css";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Tiller Quest",
//   description: "Tiller Quest: A gamified classroom experience",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chosenFont, setChosenFont] = useState(inter.className);

  const switchFont = () => {
    setChosenFont(
      chosenFont === inter.className ? dyslexic.className : inter.className
    );
  };
  return (
    <html lang="en">
      <body className={chosenFont}>
        <NavBar switchFont={switchFont} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
