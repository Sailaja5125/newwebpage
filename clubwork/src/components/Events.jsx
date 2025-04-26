'use client'
import React from "react";
import AnimatedTitle from "./sub/AnimatedTitle";
import Cards from "./sub/Cards";
import { useRouter } from "next/navigation";

function Events() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center sm:p-5 bg-neutral-900"> {/* Dark Grayish-Black Background */}
      <AnimatedTitle
        title="Igniting  Inn<b>o</b>vati<b>o</b>n ,<br />p<b>o</b>wering  pr<b>o</b>gress "
        containerClass="mt-5 !text-white text-center"
      />
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center w-full px-4 sm:px-0">
        {/* First Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"HACKATHON"} text1={"INNOVATION"} />
          <div className="nav-hover-txt">
            Code 💻, collaborate 🤝, and innovate 💡! Solve real-world challenges, build cutting-edge solutions, and compete for glory in this intense 24-hour ⌛coding marathon.
          </div>
          <a className="text-white h-10 w-20 border-2 border-white hover:text-white rounded-md hover:border-none flex justify-center items-center" href="https://forms.gle/pwPfdLTuKCBMzkFEA">Register</a>
        </div>
        {/* Second Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"DESIGN-A-THON"} text1={"CREATIVITY"} />
          <div className="nav-hover-txt text-center">
            Unleash your creativity 🧠! Craft intuitive user experiences, stunning visuals 🎆, and groundbreaking designs that push the boundaries of innovation 💡.
          </div>
          <a className="text-white h-10 w-20 border-2 border-white hover:text-white rounded-md hover:border-none flex justify-center items-center" href="https://forms.gle/pwPfdLTuKCBMzkFEA" >Register</a>
        </div>
      </div>
    </div>
  );
}

export default Events;
