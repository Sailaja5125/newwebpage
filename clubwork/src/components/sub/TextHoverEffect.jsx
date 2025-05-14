'use client'
import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
 
export function TextHoverEffectDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center p-6">
      <TextHoverEffect text="AVENSIS" />
    </div>
  );
}