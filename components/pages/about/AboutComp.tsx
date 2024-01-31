import Image from "next/image";
import React from "react";

export default function AboutComp() {
  return (
    <div className="mt-[64px] flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-9 lg:gap-20 items-center justify-between">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-8">
            Know Who <span className="text-primary">I am</span>
          </h1>
          <p>
            Hello! I&apos;m Bruno Maruya, a programmer enthusiast with a passion
            for Web Development.
          </p>
          <p>
            My journey in Web Development has equipped me with a strong
            foundation in JavaScript.
          </p>
          <p>
            I thrive on being a better programmer and am always eager to learn
            new skills.
          </p>
        </div>
        <Image
          width={500}
          height={500}
          alt="image"
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}
