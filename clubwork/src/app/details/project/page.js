"use client"
import React from 'react';

const page = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block border-b-2 border-white/20 pb-3">
            <span className="text-3xl">★</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2">PROJECT EXPO</h1>
            <h2 className="text-xl sm:text-2xl font-semibold mt-2 text-white/80">RULES & REGULATIONS</h2>
            <span className="text-3xl">★</span>
          </div>
        </header>

        {/* General Guidelines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-white/20">
            GENERAL GUIDELINES
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-neutral-800 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">1</span>
                <h3 className="text-xl font-bold">Team Composition</h3>
              </div>
              <p className="text-white/80">Each participating team must consist of 2-4 members. No exceptions will be made for teams outside this size requirement.</p>
            </div>
            
            <div className="bg-neutral-800 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">2</span>
                <h3 className="text-xl font-bold">Project Categories</h3>
              </div>
              <p className="text-white/80 mb-2">Projects may fall under any of the following categories:</p>
              <ul className="list-disc ml-5 text-white/70 space-y-1">
                <li>Hardware Solutions</li>
                <li>Software Applications</li>
                <li>AI/Machine Learning</li>
                <li>Internet of Things (IoT)</li>
                <li>Other Innovative Tech Solutions</li>
              </ul>
            </div>
            
            <div className="bg-neutral-800 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 transition-all md:col-span-2">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">3</span>
                <h3 className="text-xl font-bold">Prototype Requirement</h3>
              </div>
              <p className="text-white/80">All submitted projects must be functional or have a working prototype. Conceptual projects without any implementation will not be considered for evaluation.</p>
            </div>
          </div>
        </section>

        {/* Exhibition Protocol */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-white/20">
            EXHIBITION PROTOCOL
          </h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-800 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">4</span>
                <h3 className="text-xl font-bold">Setup Time</h3>
              </div>
              <p className="text-white/80">Participants must complete their booth setup at least 30 minutes before the official start time of the expo. Late setup may result in disqualification.</p>
            </div>
            
            <div className="bg-neutral-800 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">5</span>
                <h3 className="text-xl font-bold">Presentation Format</h3>
              </div>
              <p className="text-white/80 mb-2">Each team will be allocated 5-7 minutes to present their project to the judging panel. This includes:</p>
              <ul className="list-disc ml-5 text-white/70 space-y-1">
                <li>Problem statement (1 minute)</li>
                <li>Solution demonstration (3-4 minutes)</li>
                <li>Q&A with judges (1-2 minutes)</li>
              </ul>
              <p className="text-white/70 mt-2 italic">Presentations exceeding the time limit will be stopped.</p>
            </div>
            
            <div className="bg-neutral-800 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">6</span>
                <h3 className="text-xl font-bold">Documentation</h3>
              </div>
              <p className="text-white/80 mb-2">Teams must provide the following documentation:</p>
              <ul className="list-disc ml-5 text-white/70 space-y-1">
                <li>One-page project summary (printed copies for judges)</li>
                <li>Project poster (standard size 36" × 48")</li>
                <li>Digital copy of presentation materials</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Judging Criteria */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-white/20">
            JUDGING CRITERIA
          </h2>
          
          <div className="bg-neutral-800 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 transition-all">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">7</span>
              <h3 className="text-xl font-bold">Evaluation Parameters</h3>
            </div>
            <p className="text-white/80 mb-4">Projects will be evaluated based on the following criteria:</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-neutral-700/50 p-4 rounded">
                <h4 className="font-bold text-lg mb-1">Innovation (25%)</h4>
                <p className="text-white/70">Uniqueness and creativity of the solution</p>
              </div>
              
              <div className="bg-neutral-700/50 p-4 rounded">
                <h4 className="font-bold text-lg mb-1">Impact (25%)</h4>
                <p className="text-white/70">Potential benefit to users and society</p>
              </div>
              
              <div className="bg-neutral-700/50 p-4 rounded">
                <h4 className="font-bold text-lg mb-1">Technical Feasibility (25%)</h4>
                <p className="text-white/70">Implementation quality and technical soundness</p>
              </div>
              
              <div className="bg-neutral-700/50 p-4 rounded">
                <h4 className="font-bold text-lg mb-1">Presentation Quality (25%)</h4>
                <p className="text-white/70">Clarity, organization, and engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Note */}
        <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-lg p-6 mb-16 text-center">
          <p className="font-bold text-xl">IMPORTANT: All decisions made by the judging panel are final. Any violation of these rules may result in disqualification.</p>
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/20">
          <p className="text-white/60">For any queries or clarifications, please contact the organizing committee.</p>
          <p className="text-white/60 mt-2">© 2025 Project Expo. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default page;