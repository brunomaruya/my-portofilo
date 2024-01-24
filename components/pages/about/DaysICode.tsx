"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function DaysICode() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className=" font-extrabold text-5xl text-center mb-20">
        DAYS I <span className="text-primary">CODE</span>
      </h1>
      <GitHubCalendar username="brunomaruya" color="#5c50dc" />
    </div>
  );
}
