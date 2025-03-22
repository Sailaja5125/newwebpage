"use client";
import React from "react";
import Card from "../../components/sub/DomainCard";

function Page() {
  return (
    <div className="bg-neutral-900 min-h-screen w-full mt-0 mb-0">
      <div className="max-w-7xl mx-auto">
        {/* Hackathon Domains Section */}
        <section className="p-6 m-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-zentry font-bold text-white mb-6">
            Hackathon Domains
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card 
                img="/img/webdomain.png" 
                title="Web/App" 
                description="🌐 Web: Craft seamless, futuristic digital experiences that captivate and innovate." 
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card 
                img="/img/Aimldomain.png" 
                title="Artificial Intelligence and Machine Learning" 
                description="🤖 Artificial Intelligence and Machine Learning: Unleash the power of intelligence—where machines learn, and ideas evolve." 
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card 
                img="/img/iotdomain.png" 
                title="IoT" 
                description={"Bridge the physical and digital realms with smart, connected innovations"}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card 
                img="/img/bandsdomain.png" 
                title="Blockchain & Security" 
                description="🔐 Blockchain & Security: Fortify the digital frontier with trust, transparency, and resilience." 
              />
            </div>
          </div>
        </section>

        {/* Design-a-thon Domains Section */}
        <section className="p-6 m-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-zentry font-bold text-white mb-6">
            Design-a-thon Domains
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card 
                img="/img/webdesign1.webp" 
                title="Web Design" 
                description="🌐 Transform ideas into stunning digital realities—✨ web design is where creativity meets functionality, and every click tells a story! 🎨🚀" 
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card 
                img="/img/appdesign.avif" 
                title="App Designing" 
                description="📱 Bring your ideas to life with innovative app design—✨ where creativity meets functionality to craft seamless and engaging user experiences! 🎨🚀" 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
