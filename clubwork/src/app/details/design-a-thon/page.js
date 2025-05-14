"use client"
import React from 'react'
import Card from '../../../components/sub/DomainCard'
import { ShootingStarsAndStarsBackgroundDemo } from '@/components/sub/ShootingStarsAndStarsBackgroundDemo'

function page() {
  return (
    <div className='bg-neutral-900 min-h-screen w-screen'>
      <div>
        <h1 className='text-5xl font-zentry font-bold text-white p-6 m-4'>Domains</h1>
        
        {/* Web/app */}
        <div className="flex w-3/2 gap-6 m-3 p-3 flex-wrap justify-center">
          <Card img={"/img/webdesign1.webp"} title={"Web Design"} description={"🌐 Transform ideas into stunning digital realities—✨ web design is where creativity meets functionality, and every click tells a story! 🎨🚀"}/>
          <Card img={"/img/appdesign.avif"} title={"App Designing"} description={"📱 Bring your ideas to life with innovative app design—✨ where creativity meets functionality to craft seamless and engaging user experiences! 🎨🚀"}/>
        </div>
        
        {/* Design-a-Thon Rules Section */}
        <div className="mt-16 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🎨</span>
            Design-a-Thon Rules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rule Card 1 */}
            <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">1</span>
                <h3 className="text-xl font-bold text-white">Team Size</h3>
              </div>
              <p className="text-white/80">2-4 members per team. No exceptions will be made for teams outside this size requirement.</p>
            </div>
            
            {/* Rule Card 2 */}
            <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">2</span>
                <h3 className="text-xl font-bold text-white">Design Scope</h3>
              </div>
              <p className="text-white/80">UI/UX, graphic design, or branding solutions based on given themes. Teams must choose one area to focus on.</p>
            </div>
            
            {/* Rule Card 3 */}
            <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">3</span>
                <h3 className="text-xl font-bold text-white">Time Limit</h3>
              </div>
              <p className="text-white/80">24-hour challenge. All work must be completed and submitted within this timeframe.</p>
            </div>
            
            {/* Rule Card 4 */}
            <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">4</span>
                <h3 className="text-xl font-bold text-white">Tool Usage</h3>
              </div>
              <p className="text-white/80">Any design software is allowed (Figma, Adobe XD, Photoshop, etc.). Participants must have their own licenses.</p>
            </div>
            
            {/* Rule Card 5 */}
            <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">5</span>
                <h3 className="text-xl font-bold text-white">Presentation</h3>
              </div>
              <p className="text-white/80">Final designs must be presented with a short concept explanation. Maximum 5 minutes per team.</p>
            </div>
            
            {/* Rule Card 6 */}
            <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">6</span>
                <h3 className="text-xl font-bold text-white">Creativity & Feasibility</h3>
              </div>
              <p className="text-white/80">Designs should be innovative yet practical. Judges will evaluate based on originality and implementation potential.</p>
            </div>
            
            {/* Rule Card 7 */}
            <div className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all md:col-span-2 lg:col-span-3">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-white text-neutral-900 rounded-full font-bold mr-3">7</span>
                <h3 className="text-xl font-bold text-white">Original Work</h3>
              </div>
              <p className="text-white/80">No pre-made templates; plagiarism leads to disqualification. All submitted work must be created during the competition timeframe.</p>
            </div>
          </div>
          
          {/* Judging Criteria */}
          <div className="mt-10 mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Judging Criteria</h3>
            <div className="bg-neutral-800 rounded-lg p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-700/50 p-4 rounded">
                  <h4 className="font-bold text-lg mb-1 text-white">Visual Appeal (30%)</h4>
                  <p className="text-white/70">Aesthetics, color theory, and overall design quality</p>
                </div>
                
                <div className="bg-neutral-700/50 p-4 rounded">
                  <h4 className="font-bold text-lg mb-1 text-white">User Experience (30%)</h4>
                  <p className="text-white/70">Intuitive navigation, accessibility, and user flow</p>
                </div>
                
                <div className="bg-neutral-700/50 p-4 rounded">
                  <h4 className="font-bold text-lg mb-1 text-white">Creativity (20%)</h4>
                  <p className="text-white/70">Innovative approaches and unique solutions</p>
                </div>
                
                <div className="bg-neutral-700/50 p-4 rounded">
                  <h4 className="font-bold text-lg mb-1 text-white">Technical Feasibility (20%)</h4>
                  <p className="text-white/70">Practicality and potential for implementation</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Important Note */}
          <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-lg p-6 mt-6 mb-8 text-center">
            <p className="font-bold text-xl text-white">IMPORTANT: All decisions made by the judging panel are final. Any violation of these rules may result in disqualification.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page