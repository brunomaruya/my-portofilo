"use client";

import { LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function FindMe() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mb-3">FIND ME ON</h1>
        <h6 className="text-lg">
          Fell free to <span className="text-primary">connect</span> with me
        </h6>
        <ul>
          <li>
            <Link href="#">
              <LinkedinLogo size={32} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
