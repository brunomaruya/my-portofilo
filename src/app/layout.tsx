import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MainProvider from "../../providers/MainProvider";
import NavbarComp from "../../components/layout/NavbarComp";
import Footer from "../../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <MainProvider>
          <NavbarComp />
          <main className="margin  ">{children}</main>
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
