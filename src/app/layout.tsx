import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Play from "./components/play/Play";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import { Suspense } from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project 5",
  description: "Project5 : Du an nghe nhac",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929]`}>
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px] ">
              <Sider></Sider>
            </div>
            <div className="flex-1 ml-[20px] ">
              <Suspense>
                <Search></Search>
              </Suspense>
              <main className="mb-[120px] mt-[30px] ">{children}</main>
            </div>
          </div>
        </div>
        <Play></Play>
      </body>
    </html>
  );
}
