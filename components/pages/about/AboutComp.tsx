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
            Hello! I&apos;m [Your Full Name], a [Your Program or Field of Study]
            enthusiast with a passion for [Specific Interest or Focus].
          </p>
          <p>
            My journey in [Field of Study] has equipped me with a strong
            foundation in [Key Program Skills].
          </p>
          <p>
            I thrive on [Describe What Motivates You or Your Key Strengths] and
            am always eager to [Your Career Aspirations or Learning Goals].
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
