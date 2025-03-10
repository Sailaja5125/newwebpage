'use client'
import React from 'react'

function Sponsors() {
  return (
    <div className='bg-neutral-900 w-screen h-auto flex flex-col items-center gap-8 py-8'>
      <h1 className='text-4xl sm:text-6xl text-center text-white font-circular-web mt-6 p-5'>
        Official Sponsors
      </h1>
      
      <h1 className='text-xl sm:text-2xl text-orange-400 font-bold'>
        Golden Sponsors
      </h1>
      <div className='flex flex-wrap gap-8 sm:gap-16 w-3/4 sm:w-full justify-center'>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          Logo1
        </div>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          Logo1
        </div>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          Logo1
        </div>
      </div>

      <h1 className='text-xl sm:text-2xl text-gray-400 font-bold'>
        Silver Sponsors
      </h1>
      <div className='flex flex-wrap gap-8 sm:gap-16 w-3/4 sm:w-full justify-center'>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          Logo1
        </div>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          Logo1
        </div>
        <div className='text-3xl sm:text-6xl text-gray-700 font-mono font-bold'>
          Logo1
        </div>
      </div>
    </div>
  )
}

export default Sponsors
