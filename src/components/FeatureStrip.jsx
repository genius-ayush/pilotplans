import React from 'react';

const FeatureStrip = () => {
  return (
    <div className="bg-beige flex flex-col items-center py-16 px-4">
      <div className="bg-peach-light text-center py-10 px-8 rounded-lg shadow-md w-full max-w-3xl  border-orange-500">
        <h2 className="text-4xl font-semibold text-gray-800">
          Make the most of <em>every</em> trip
        </h2>
        <p className="mt-4 text-gray-600">
          Join 25,000+ travelers using Pilot to create more memories
        </p>
        <div className="mt-6 flex justify-center">
          <input 
            type="email" 
            placeholder="Email address" 
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-r-lg shadow-md hover:bg-orange-600 focus:outline-none">
            Get the app
          </button>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-600 border-t-2 border-b-2 border-grey p-10">
        <p>Pilot is free to use <span className="text-orange-500 pr-5">✓</span> Easily collab with friends <span className="text-orange-500 pr-5">✓</span> Just for you and your travel crew <span className="text-orange-500">✓</span></p>
      </div>
    </div>
  );
}

export default FeatureStrip;
