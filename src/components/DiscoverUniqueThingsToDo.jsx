import React from 'react';

const DiscoverUniqueThingsToDo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-beige">
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
        <div className="relative md:w-1/2">
          <img 
            src="./DiscoverUniqueThings/img1.webp" 
            alt="Discover unique things to do"
            className="rounded-lg"
          />
          
        </div>
        <div className="md:ml-8 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-gray-800">
            Discover unique things to do
          </h2>
          <p className="mt-4 text-gray-600">
            Find, save and share places that match your specific preferences with 60+ filters.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none">
              Explore Pilot App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverUniqueThingsToDo;
