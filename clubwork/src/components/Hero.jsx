"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import NavBar from "./sub/Navbar";

export default function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

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
          height="100%" // Full height for the video
          onReady={() => setIsVideoReady(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover", // Ensures the video covers the entire section
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
      <div className="absolute inset-0 flex items-center justify-center z-40 text-center">
        <div className="text-white">
          <h1
            className="special-font hero-heading1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{
              textShadow:
                "0 0 15px rgba(147, 197, 253, 0.5), 0 0 30px rgba(147, 197, 253, 0.3)",
            }}
          >
            <b>A</b>VE<b>N</b>SIS
          </h1>
          <h2
            className="special-font hero-heading text-blue-100 text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{
              textShadow:
                "0 0 15px rgba(147, 197, 253, 0.5), 0 0 30px rgba(147, 197, 253, 0.3)",
            }}
          >
            {/* Break the word "REGIONAL" and "CONVENTION" for medium screens */}
            <span className="block sm:inline">REGI<b>O</b>N<b>A</b>L</span>{" "}
            <span className="block sm:inline">C<b>O</b>NVENTI<b>O</b>N 2<b>0</b>25</span>
          </h2>
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
