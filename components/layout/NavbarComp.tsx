"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function NavbarComp() {
  const pathname = usePathname();

  const currLanguage = () => {
    return pathname.split("/")[1];
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [language, setLanguage] = useLocalStorage("language", "jp");

  const handleOnClick = () => {
    setLanguage((prev) => (prev == "en" ? "jp" : "en"));
    if (currLanguage() !== language) window.location.assign(`/${language}`);
  };
  useEffect(() => {
    console.log(currLanguage());
  }, []);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: `/${language}/about` },
    { title: "Projects", href: `/${language}/projects` },
    { title: "Resume", href: `/${language}/resume` },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand className="text-primary text-3xl font-bold">
          Bm.
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            isActive={pathname == item.href ? true : false}
          >
            <Link href={item.href} className="text-xl text-text">
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <div className="hover:cursor-pointer" onClick={() => handleOnClick()}>
            {language == "en" ? "jp" : "en"}
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full flex flex-col items-center text-xl ${
                pathname == item.href ? "text-primary" : "text-text"
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
