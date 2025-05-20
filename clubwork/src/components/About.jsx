'use client'
import React from 'react';
import AnimatedTitle from './sub/AnimatedTitle';
import CSIEvents from './sub/CSIEvents';
export default function About() {
  return (
    <section className="bg-transparent text-white py-8 md:py-16">
      <div className='m-4'>
       <AnimatedTitle
        title={`About${" "}us`}
        containerClass="mt-5 !text-white text-center"
      />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Heading - Full Width */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to the CSI Student Chapter at Anurag University!
          </h1>
        </div>
        
        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <p className="text-lg">
              Driven by a shared passion for computing, we were founded by dedicated students and faculty
              to create a vibrant tech hub on campus. Our aim is to bridge the gap between academic learning
              and industry trends, offering a platform for students to explore, learn, and innovate in computer science.
            </p>
            
            <p className="text-lg">
              We believe collaborative, hands-on experiences are key to unlocking potential and fostering future tech leaders.
            </p>
            
            <div className="pt-4">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">
                From novice explorers to seasoned experts, we welcome every Anurag University student passionate
                about computing. Through interactive workshops, insightful webinars, and engaging competitions in
                diverse tech fields, we offer a distinctive platform for skill development, industry knowledge, and networking.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-auto flex flex-col items-center gap-4">
            <img 
              src="/img/AU1.png" 
              alt="Anurag University" 
              className="w-full max-w-sm md:w-80 h-auto rounded-lg shadow-lg" 
            />
            <img 
              src="/img/AU2.png" 
              alt="Anurag University" 
              className="w-full max-w-sm md:w-80 h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
        <CSIEvents />
      </div>
    </section>
  );
}