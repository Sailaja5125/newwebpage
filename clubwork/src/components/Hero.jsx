import Spline from "@splinetool/react-spline/next";
import { ShootingStarsAndStarsBackgroundDemo } from "./sub/ShootingStarsAndStarsBackgroundDemo";
import NavBar from "./sub/Navbar";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <NavBar />
      <ShootingStarsAndStarsBackgroundDemo />
      <Spline
        scene="https://prod.spline.design/jo9Umq05WylHX5C8/scene.splinecode"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10
        }}
      />

      {/* On mobile, the text is at bottom-right; on md and larger, at bottom-left */}
      
      <h1 className="hero-heading absolute -bottom-2 left-8 z-40 text-blue-75 text-right font-circular-web ">
        Avensis
      </h1>
      
      <h1 className="hero-heading absolute top-20 left-8 z-40 text-blue-75 font-circular-web">
        Join Us 
      </h1>
    </div>
  );
}
