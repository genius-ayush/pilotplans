import React from 'react';

function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-orange-200 to-orange-300 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-md ">
      <p className="text-lg md:text-xl font-semibold mb-4 md:mb-0  mr-8">
        Join 23,000+ travelers and Pilot your next adventure!
      </p>
      <div className="flex flex-col md:flex-row items-center">
        <input 
          type="email" 
          placeholder="Email address" 
          className="p-2 border rounded mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-yellow-500" 
        />
        <button className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600">
          Get the app
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
