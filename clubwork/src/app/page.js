import Hero from "./../components/Hero";
import Events from "./../components/Events";
import Schedule from "./../components/Schedule";
import Sponsors from "./../components/Sponsors";
import Dignitaries from "./../components/Dignitaries";
import FAQAccordion from "./../components/sub/Accordian";
import About from "./../components/About";
import Footer from "./../components/sub/Footer";



export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 1) Background at z-0 */}
      <img
        src="/img/pageback1.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* 2) All your components live in a z-10 wrapper */}
      <div className="relative z-10">
        <Hero />
        <Events />
        <Dignitaries />
        <About/>
        <FAQAccordion />
        <Footer />
      </div>
    </div>
  );
}
