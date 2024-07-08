import React from 'react'

function Started2() {
  return (
    <div className='lg:h-screen'>
        <div className='flex justify-center text-4xl mt-10 pb-20'>Let's get started</div>
        <div className='flex flex-col-reverse md:flex-row justify-center content-center'>
        <div className='flex-row justify-center content-center'>
            <div className='p-10'>
            <li className='font-medium text-2xl font-mono '>Create a trip</li>
            <p className='text-gray-800 pl-8 w-90 lg:w-96 text-lg italic'>Nothing to download. Use Pilot from the web and export for offline access.</p>
            </div>

            <div className='p-10'>
            <li className='font-medium text-2xl font-mono'>Collab and plan</li>
            <p className='text-gray-800 pl-8 w-90 lg:w-96 text-lg italic'>Invite friends, get trip recommendations and add, delete and drag & drop anything.</p>
            </div>

            <div className='p-10'>
            <li className='font-medium text-2xl font-mono'>Share experiences</li>
            <p className='text-gray-800 pl-8 w-90 lg:w-96  text-lg italic'>Secure travel docs and visas, export your itinerary and start traveling!</p>
            </div>
        
        </div>

        <div>
            <img src="./Started/img1.png" alt=""/>
        </div>

        </div>
    </div>
  )
}

export default Started2