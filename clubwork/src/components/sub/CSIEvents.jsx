import React from "react";
import TeamSlider from "./Testimonials3";


function CSIEvents() {
  const events = [
    {
      title: "AWS Cloud Workshop",
      description: "A hands-on session introducing the fundamentals of AWS.",
      id: "aws-workshop"
    },
    {
      title: "Webinar on Cloud Insights: Unveiling Real-World Applications",
      description: "An insightful webinar exploring the practical applications of cloud technologies.",
      id: "cloud-insights"
    },
    {
      title: "Cloud Voyage: Navigating the Skies of Cloud Computing",
      description: "An engaging event diving deeper into various aspects of cloud computing.",
      id: "cloud-voyage"
    },
    {
      title: "Tech-n-o'-logical",
      description: "A platform for showcasing technical skills and fostering healthy competition.",
      id: "tech-logical"
    },
    {
      title: "InterviewEdge",
      description: "A workshop focused on honing interview skills and preparing students for placements.",
      id: "interview-edge"
    },
    {
      title: "Pixel Perfect",
      description: "An event centered around front end development in the digital realm.",
      id: "pixel-perfect"
    },
    {
      title: "TechXeccelerate",
      description: "An initiative aimed at accelerating technical learning and innovation.",
      id: "tech-accelerate"
    },
    {
      title: "CSI State Convention - VJIT",
      description: "Participation in a larger forum, connecting with other student chapters and industry professionals.",
      id: "csi-convention"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Events</h2>
      
      {/* Flex container for side-by-side layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Events List */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4 h-full">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-transparent border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-gray-300 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image Gallery Grid */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {/* Row 1: Two images with equal height */}
            <div className="aspect-square">
              <img 
                src="/img/Audience.png" 
                alt="Event audience" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src="/img/Square.png" 
                alt="Event highlight" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Row 2: Two images with equal height */}
            <div className="aspect-square">
              <img 
                src="/img/AwsPoster.png" 
                alt="AWS Workshop poster" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src="/img/CloudPoster.png" 
                alt="Cloud event poster" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full h-fit">
                <TeamSlider/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSIEvents;