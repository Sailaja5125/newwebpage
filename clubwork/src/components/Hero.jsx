"use client"
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import NavBar from "./sub/Navbar";

export default function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-neutral-900">
      {/* Navigation */}
      <NavBar />

      {/* Video Background with ReactPlayer */}
      <div className="absolute inset-0 z-10">
        <ReactPlayer
          url="/video/herovideo.mp4"
          playing
          loop
          muted
          width="100%"
          height="97%"
          onReady={() => setIsVideoReady(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          config={{
            file: {
              attributes: {
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </div>

      {/* Overlay to darken video slightly and improve text visibility */}
      <div className="absolute inset-0 bg-black/30 z-20"></div>

      {/* Text Overlay - Centered for both mobile and desktop */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        <div className="text-center space-y-4 px-4 md:px-6 max-w-4xl">
          <h1 
            className="text-blue-75 hero-heading1 font-zentry md:text-8xl font-bold tracking-tight mb-2"
            style={{ 
              textShadow: "0 0 20px rgba(147, 197, 253, 0.6)" 
            }}
          >
            Avensis
          </h1>
          
          <h1 
            className="text-blue-75 hero-heading1 text-2xl md:text-4xl font-medium"
            style={{ 
              textShadow: "0 0 15px rgba(147, 197, 253, 0.4)" 
            }}
          >
            Regional Convention 2025
          </h1>
        </div>
      </div> */}
        <h1 className="special-font hero-heading1 absolute bottom-5 right-5 z-40 text-blue-75" style={ {textShadow: "0 0 15px rgba(147, 197, 253, 0.5), 0 0 30px rgba(147, 197, 253, 0.3)" }}>
          REGI<b>O</b>N<b>A</b>L C<b>O</b>NVENTI<b>O</b>N 2<b>0</b>25
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10" style={ {textShadow: "0 0 15px rgba(147, 197, 253, 0.5), 0 0 30px rgba(147, 197, 253, 0.3)" }}>
            <h1 className="special-font hero-heading text-blue-100">
              <b>A</b>VE<b>N</b>SIS
            </h1>
        </div>
        </div>

      {/* Loading state (optional) */}
      {!isVideoReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}