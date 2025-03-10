import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import Dignitaries from "@/components/Dignitaries";



export default function Home() {
  return (
    <div className="bg-neutral-900">
    <Hero/>
    <Events/>
    <Schedule/>
    <Sponsors/>
    <Dignitaries/>
    </div>
  );
}
