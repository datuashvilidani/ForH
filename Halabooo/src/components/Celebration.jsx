import React from "react";
import sandro1 from "../assets/sandro1.mp4"
import sandro2 from "../assets/sandro2.mp4"

export default function Celebration() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0 text-4xl opacity-20 leading-10 break-words select-none pointer-events-none">
        {Array(500).fill("🎉").join(" ")}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">

        <h1 className="text-4xl font-bold">
          OOP OPP LET'S GO🎉
        </h1>
                <video
          autoPlay
          loop
          muted
          className="w-80 sm:w-[500px] rounded-2xl"
        >
          <source src={sandro2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}