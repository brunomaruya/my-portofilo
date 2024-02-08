"use client";
import { LinkedinLogo } from "@phosphor-icons/react";
import React from "react";
import { contacts } from "../../constants/contacts";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="   bg-black mt-32  flex flex-col sm:flex-row gap-3 items-center justify-between px-20 py-3">
      <div className="text-sm sm:text-md">Bruno Maruya</div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div
          onClick={() =>
            (window.location.href = "mailto:brun0yuj1ym02@gmail.com")
          }
        >
          brun0yuj1ym02@gmail.com
        </div>
        <div className="flex gap-3">
          {contacts.map((contact, index) => (
            <div className="text-3xl" key={index}>
              <Link href={contact.link} target="_blank">
                {contact.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
