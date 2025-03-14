import Spline from "@splinetool/react-spline/next";
import { ShootingStarsAndStarsBackgroundDemo } from "./sub/ShootingStarsAndStarsBackgroundDemo";

import NavBar from "./sub/Navbar";


export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <NavBar/>
      <ShootingStarsAndStarsBackgroundDemo />
      <Spline
        scene="https://prod.spline.design/jo9Umq05WylHX5C8/scene.splinecode"
        style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0 , zIndex:10 }}
      />

      {/* Title for Larger Screens */}
      <h1 className="special-font hero-heading absolute bottom-24 right-25 z-40 text-blue-75 md:bottom-2 lg:right-20 sm:text-center">
         BV Hacks
      </h1>

      {/* Subtitle for Small Devices */}
      <div className="absolute left-0 top-0 w-full flex items-center justify-center sm:justify-start sm:mt-24 sm:px-10">
        <div className="w-full sm:w-auto text-center sm:text-left px-5">
          <h1 className="special-font hero-heading text-blue-100">
            BV Hacks
          </h1>
        </div>
      </div>
    </div>
  );
}
