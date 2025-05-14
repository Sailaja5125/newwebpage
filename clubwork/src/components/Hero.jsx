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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
     <TextHoverEffectDemo/>
        
      </div>
    </section>
  );
}
  