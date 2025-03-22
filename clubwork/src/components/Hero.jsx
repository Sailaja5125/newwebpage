
import Spline from "@splinetool/react-spline/next";
import { ShootingStarsAndStarsBackgroundDemo } from "./sub/ShootingStarsAndStarsBackgroundDemo";
import NavBar from "./sub/Navbar";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <NavBar/>
      <ShootingStarsAndStarsBackgroundDemo />
      <Spline
        scene="https://prod.spline.design/jo9Umq05WylHX5C8/scene.splinecode"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      />

      {/* For mobile devices: both texts centered */}
      <div className="flex flex-col items-center justify-center absolute inset-0 z-40 lg:hidden">
        <h1 className="text-blue-75 hero-heading mb-4">Avensis</h1>
        <h1 className="text-blue-75 hero-heading1 text-center">Regional Convention 2025</h1>
      </div>

      {/* For large devices: Avensis at top left and Regional Convention 2025 at bottom right */}
      <div className="hidden lg:block absolute inset-0 z-40">
        <h1 className="absolute top-20 left-2 text-blue-75 hero-heading">
          Avensis
        </h1>
        <h1 className="absolute bottom-2 right-2 text-blue-75 hero-heading1">
          Regional Convention 2025
        </h1>
      </div>
    </div>
  );
}
