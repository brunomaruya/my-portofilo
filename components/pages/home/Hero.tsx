import React from "react";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-hero mt-[-64px]">
      <div className="  h-screen  backdrop-brightness-[.3] flex flex-col sm:items-start items-center pt-72">
        <div className="margin">
          <h1 className="text-4xl md:text-4xl">Hi There!</h1>
          <h1 className="text-4xl md:text-5xl mt-3">
            I&apos;M <span className=" text-primary ">BRUNO MARUYA</span>
          </h1>
          <h2 className="text-primary mt-5 text-3xl md:text-3xl">
            NOT SURE YET
          </h2>
        </div>
      </div>
    </div>
  );
}
