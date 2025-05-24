"use client";
import React from "react";
import AnimatedTitle from "./sub/AnimatedTitle";
import Cards from "./sub/Cards";


function Events() {
// TODO pura redefine karna hai
  return (
    <div id="Events" className="min-h-screen w-full flex flex-col items-center bg-transparent ">
      {" "}
      {/* Dark Grayish-Black Background */}
      <AnimatedTitle
        title="Igniting  Inn<b>o</b>vati<b>o</b>n ,<br />p<b>o</b>wering  pr<b>o</b>gress "
        containerClass="mt-5 !text-white text-center"
      />
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center w-full px-4 sm:px-0">
        {/* First Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"HACKATHON"} text1={"INNOVATION"} />
          <div className="text-white text-center">
            Code , collaborate , and innovate ! Solve real-world
            challenges, build cutting-edge solutions, and compete for glory in
            this intense 24-hour coding marathon.
          </div>
          <div className="flex gap-5">
          <a
            className="text-white h-10 w-20 border-2 border-white rounded-md hover:border-none hover:bg-white hover:text-black flex justify-center items-center"
            href="/details/hackathon"
          >
            Info
          </a>
          <a
            className="text-white h-10 w-20 border-2 border-white rounded-md hover:border-none hover:bg-white hover:text-black flex justify-center items-center"
            href="https://forms.gle/pwPfdLTuKCBMzkFEA"
          >
            Register
          </a>
          </div>
        </div>
        {/* Second Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"DESIGN-A-THON"} text1={"CREATIVITY"} />
          <div className="text-white text-center">
            Unleash your creativity ! Craft intuitive user experiences,
            stunning visuals , and groundbreaking designs that push the
            boundaries of innovation .
          </div>
          <div className="flex gap-5 ">
          <a
            className="text-white h-10 w-20 border-2 border-white rounded-md hover:border-none hover:bg-white hover:text-black flex justify-center items-center"
            href="/details/design-a-thon"
          >
            Info
          </a>
          <a
            className="text-white h-10 w-20 border-2 border-white rounded-md hover:border-none hover:bg-white hover:text-black flex justify-center items-center"
            href="https://forms.gle/pwPfdLTuKCBMzkFEA"
          >
            Register
          </a>
          </div>

        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center w-full px-4 sm:px-0">
        {/* First Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"TECH TALKS"} text1={"CAREER"} />
          <div className="text-white text-center">
          </div>
        </div>
        {/* Second Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"AWARD CEREMONY"} text1={"PRIDE"} />
          <div className="text-white text-center">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
