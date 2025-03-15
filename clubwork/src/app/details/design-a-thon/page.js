"use client"
import React from 'react'
import Card from '../../../components/sub/DomainCard'
function page() {
  return (
    <div>
      <div className='bg-neutral-900 h-[100vh] w-screen mt-0'>
      <div className='text-5xl font-zentry font-bold text-white p-6 m-4'>
        <h1>Domains</h1>
        {/* Web/app */}
        <div className="flex w-3/2 gap-6 m-3 p-3 flex-wrap justify-center">
        <Card img={"/img/webdesign1.webp"} title={"Web Design"} description={"🌐 Transform ideas into stunning digital realities—✨ web design is where creativity meets functionality, and every click tells a story! 🎨🚀"}/>
        <Card img={"/img/appdesign.avif"} title={"App Designing"} description={"📱 Bring your ideas to life with innovative app design—✨ where creativity meets functionality to craft seamless and engaging user experiences! 🎨🚀"}/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default page