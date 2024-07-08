import React from 'react';

function Features() {
  return (
    <div className="flex flex-col items-center justify-center  py-16 bg-gray-50">
      <h2 className="text-5xl font-serif italic text-gray-800 mb-4 text-center">Try exclusive new features</h2>
      <p className="text-xl text-gray-600 mb-12 text-center">Enable Pilot Labs to try features in early-stage functionality!</p>

      <div className="flex flex-col lg:flex-row justify-around w-3/4 px-8">
        <div className="bg-orange-100 p-6 rounded-md shadow-md mb-8 lg:mb-0 w-full lg:w-1/3 mx-2">
        
          <img src="./Features/img1.png" alt="Discover" className="w-full h-48 object-cover rounded-md mb-4" />          
          <h3 className="text-2xl font-serif italic text-gray-800 mb-2 text-center">Discover</h3>
          <p className="text-gray-600">Explore the cities that people are traveling to right now and get inspired as you plan.</p>
        </div>

        <div className="bg-orange-100 p-6 rounded-md shadow-md mb-8 lg:mb-0 w-full lg:w-1/3 mx-2">
          <img src="./Features/img2.png" alt="Quick Start" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-2xl font-serif italic text-gray-800 mb-2 text-center">Quick Start</h3>
          <p className="text-gray-600">Build an itinerary quicker than ever using our AI-powered suggestions.</p>
        </div>

        <div className="bg-orange-100 p-6 rounded-md shadow-md mb-8 lg:mb-0 w-full lg:w-1/3 mx-2">
          <img src="./Features/img3.png" alt="Stays" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-2xl font-serif italic text-gray-800 mb-2 text-center">Stays</h3>
          <p className="text-gray-600">Pilot's unique partnerships allow you to see the best options for your trip.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
