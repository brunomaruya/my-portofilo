import Image from "next/image";
import React from "react";

export default function Introduce() {
  return (
    <div className="mt-32 flex flex-col sm:flex-row items-center gap-8">
      <div>
        <h1 className="text-4xl mb-6">
          LET ME <span className="text-primary">INTRODUCE</span> MYSELF
        </h1>
        <p className="mb-3">
          Hello! I'm a skilled programmer with a focus on{" "}
          <span className="text-primary">front-end development</span>.
        </p>
        <p className="mb-3">
          My expertise lies in using technologies such as{" "}
          <span className="text-primary">JavaScript and TypeScript</span>J to
          create dynamic and interactive user interfaces.
        </p>
        <p className="mb-3">
          I'm well-versed in frameworks like{" "}
          <span className="text-primary">Next.js</span> , which allows for
          efficient and server-side rendering, enhancing the overall performance
          of web applications.
        </p>
      </div>
      <div className="rounded-md overflow-hidden">
        <Image
          width={500}
          height={500}
          alt="image"
          src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
        />
      </div>
    </div>
  );
}
