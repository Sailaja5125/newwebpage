import React, { useState, useEffect } from 'react';

export default function TeamSlider() {
  // Team member data with images, names, and positions
  const teamMembers = [
    {
      id: 1,
      name: "Varshini Shettipalli",
      position: "President",
      image: "/img/teamCSI/Varshini.jpg" // Replace with actual image path
    },
    {
      id: 2,
      name: "Bharath",
      position: "Vice President",
      image: "/img/teamCSI/Bharathh.jpg" // Replace with actual image path
    },
    {
      id: 3,
      name: "Pavani",
      position: "Vice President (Membership)",
      image: "/img/teamCSI/Pavani.jpg" // Replace with actual image path

    },
    {
      id: 4,
      name: "Thanu Shree",
      position: "Vice President (Public Relations)",
      image: "/img/teamCSI/ThanuShree.jpg" // Replace with actual image path
    },
    {
      id: 5,
      name: "Harika",
      position: "Treasurer",
      image: "/img/teamCSI/Harika.jpg" // Replace with actual image path
      
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(interval);
  }, [teamMembers.length]);
  
  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
      
      {/* Slider container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg w-72 h-80 mx-auto bg-gray-900">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="min-w-full h-full relative">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-fit bg-black opacity-[2px]"
              />
              {/* Caption with name and position */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-700  text-white p-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button 
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={nextSlide}
        >
          &#10095;
        </button>
        
        {/* Dot indicators */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
          {teamMembers.map((_, index) => (
            <button 
              key={index} 
              className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}