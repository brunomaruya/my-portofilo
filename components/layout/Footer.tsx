"use client";
import { LinkedinLogo } from "@phosphor-icons/react";
import React from "react";

export default function Footer() {
  return (
    <div className="   bg-black mt-32  flex flex-col sm:flex-row gap-3 items-center justify-between px-20 py-3">
      <div className="text-sm sm:text-md">
        Design inspired by Soumyajit Behera
      </div>
      <div>
        <ul>
          <li>
            <LinkedinLogo size={32} />
          </li>
        </ul>
      </div>
    </div>
  );
}
