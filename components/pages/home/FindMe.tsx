"use client";

import { LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
import { contacts } from "../../../constants/contacts";

export default function FindMe() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mb-3">FIND ME ON</h1>
        <h6 className="text-lg">
          Feel free to <span className="text-primary">connect</span> with me
        </h6>
        <ul className="mt-8 flex gap-3">
          {contacts.map((contact, index) => (
            <div className="text-3xl" key={index}>
              <Link href={contact.link} target="_blank">
                {contact.icon}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
