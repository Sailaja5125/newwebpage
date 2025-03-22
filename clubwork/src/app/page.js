import Hero from "./../components/Hero";
import Events from "./../components/Events";
import Schedule from "./../components/Schedule";
import Sponsors from "./../components/Sponsors";
import Dignitaries from "./../components/Dignitaries";
import FAQAccordion from "./../components/sub/Accordian";
import Footer from "./../components/sub/Footer";



export default function Home() {
  return (
    <div className="bg-neutral-900">
    <Hero/>
    <Events/>
    <Schedule/>
    {/* <Sponsors/> */}
    <Dignitaries/>
    <FAQAccordion/>
    <Footer/>
    </div>
  );
}
