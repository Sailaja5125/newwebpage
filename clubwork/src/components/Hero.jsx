"use client";
import React, { useState, useEffect } from "react";
import NavBar from "./sub/Navbar";
import { TextHoverEffectDemo } from "./sub/TextHoverEffect";
import { ShootingStarsAndStarsBackgroundDemo } from "./sub/ShootingStarsAndStarsBackgroundDemo";

export default function Hero() {
  const fullText = "Regional Convention 2025";
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((t) => t + fullText[charIndex]);
        setCharIndex((i) => i + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-transparent">
      {/* Navigation Bar */}
      <ShootingStarsAndStarsBackgroundDemo/>
      <NavBar />
      {/* Centered Content */}
    
{/* add a banner on the top with the content 
     The Registration fee for anurag students is only 500 per person until may 25
*/}
{/* Responsive banner, centered above TextHoverEffectDemo */}
<div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-2/3 md:w-1/2 border-2 border-yellow-400  py-2 text-center  rounded-full shadow-md text-white">
  The Registration fee for Anurag students is only <span className="text-red-500">₹500 only</span> per person until May 25! <span className="text-red-500">Registration Deadline june 5th</span>
</div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
     <TextHoverEffectDemo/>
        
      </div>
    </section>
  );
}
  