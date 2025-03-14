'use client'
import React from "react";
import AnimatedTitle from "./sub/AnimatedTitle";
import Cards from "./sub/Cards";
import { useRouter } from "next/navigation";

function Events() {
  const router = useRouter();

  const handleClick = ()=>{
   router.push('/register')
  }
  return (
    <div className="min-h-screen w-full flex flex-col items-center sm:p-5">
      <AnimatedTitle
        title="Disc<b>o</b>ver the Inn<b>o</b>vation <br /> within y<b>o</b>u "
        containerClass="mt-5 !text-white text-center"
      />
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center w-full px-4 sm:px-0">
        {/* First Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"HACKATHON"} text1={"INNOVATION"} />
          <div className="w-[300px] text-center text-wrap font-general font-bold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias optio qui
          </div>
          <button className="text-white h-10 w-20 border-2 border-white hover:text-white rounded-md hover:border-none " onClick={handleClick}>Register</button>
        </div>
        {/* Second Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"DESIGN-A-THON"} text1={"CREATIVITY"} />
          <div className="w-[300px] text-center text-wrap font-general font-bold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias optio qui
          </div>
          <button className="text-white h-10 w-20 border-2 border-white hover:text-white rounded-md hover:border-none" onClick={handleClick}>Register</button>
        </div>
        
        {/* Third Card */}
        <div className="w-full sm:w-1/3 h-auto flex items-center mt-9 p-7 flex-col gap-7">
          <Cards text={"PROJECT EXPO"} text1={"INVENTION"} />
          <div className="w-[300px] text-center text-wrap font-general font-bold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias optio qui
          </div>
          <button className="text-white h-10 w-20 border-2 border-white hover:text-white rounded-md hover:border-none" onClick={handleClick}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Events;
