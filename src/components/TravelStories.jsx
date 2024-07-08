import React from 'react'

function TravelStories() {
  return (
    <div className='flex flex-col items-center py-16 bg-gray-50'>
        <h2 className='text-5xl font-serif italic text-gray-800 mb-4 text-center'>Travel Stories</h2>
        <p className='text-xl text-gray-600 mb-12 text-center'>Discover new places and be inspired by the stories from our traveler community</p>

        <div className='flex flex-col lg:flex-row justify-around  px-8 w-3/4'>
            <div className='p-6  mb-8 lg:mb-0 w-full lg:w-1/3 mx-2'>
                <img src="../public/TravelStories/img1.jpg" alt="" className='w-full h-64 object-cover rounded-xl mb-4'/>
                <p className='text-xl  text-gray-600 '>South America</p>
                <p className='text-2xl'>Is Medellin Safe in 2024? Top Insights From Our Trip!</p>
            </div>

            <div className='p-6 mb-8 lg:mb-0 w-full lg:w-1/3 mx-2'>
                <img src="../public/TravelStories/img2.jpg" alt="" className='w-full h-64  rounded-xl mb-4'/>
                <p className='text-xl  text-gray-600'>North America</p>
                <p className='text-2xl'>Montreal Nightlife: Best Bars, Clubs, and Places to Party</p>
            </div>

            <div className='p-6 mb-8 lg:mb-0 w-full lg:w-1/3 mx-2'>
                <img src="../public/TravelStories/img3.jpeg" alt="" className='w-full h-64 object-cover rounded-xl mb-4' />
                <p className='text-xl  text-gray-600'>Tips,Advice & Reviews</p>
                <p className='text-2xl '>Is AllTrails Plus Worth It? My Experience: Tested & Reviewed</p>
            </div>
        </div>
    </div>
  )
}

export default TravelStories