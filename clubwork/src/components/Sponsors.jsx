'use client'
import React from 'react'
import AnimatedTitle from './sub/AnimatedTitle';

function Sponsors() {
  return (
    <div className='bg-transparent w-screen h-auto flex flex-col items-center gap-8 py-8 '>
      {/* <h1 className='text-4xl sm:text-6xl text-center text-white font-circular-web mt-6 p-5'>
        Official Sponsors
      </h1> */}
      <AnimatedTitle 
      title="p<b>a</b>rt<b>ner</b>s"
      containerClass="mt-5 !text-white text-center"
      />
      <div className='flex flex-wrap gap-8 sm:gap-16 w-3/4 sm:w-full justify-center'>
        <div className='text-2xl sm:text-6xl text-white font-sans font-semibold'>
          <img src="/img/Eshway.png" alt="eshway" className='h-16' />
        </div>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          <img src="/img/Algorand.png" alt="eshway" className='relative bottom-12'/>
        </div>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          <img src="/img/zerotocode.png" alt="zero to code" className='relative bottom-20' />
        </div>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          <img src="/img/livestockifylogo.png" alt="livestockify" className='w-24 h-10'/>
        </div>
      </div>
    </div>
  );
}

export default Sponsors