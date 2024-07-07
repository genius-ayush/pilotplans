import React from "react";

function AboutApp() {
  return (
    <div className="flex justify-center mt-32 mb-10">
      <div className="w-3/4 flex flex-col lg:flex-row items-center bg-orange-100 p-8 lg:p-16 rounded-md relative">
        <div className="flex flex-col items-start lg:items-start lg:w-1/2">
          <h1 className="text-5xl font-serif italic text-gray-800 mb-4">
            All-in-one app
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Online, offline, desktop and mobile, Pilot saves you time making the
            most of every trip
          </p>
          <ul className="text-lg text-gray-700 mb-6">
            <li className="mb-2">
              Get hyped <span className="text-orange-600">✓</span>
            </li>
            <li className="mb-2">
              Stay organized <span className="text-orange-600">✓</span>
            </li>
            <li className="mb-2">
              Have more fun <span className="text-orange-600">✓</span>
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md">
            Unpack the features
          </button>
        </div>
        <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0 relative">
          <img
            src="./src/assets/AboutApp/image1.webp"
            alt="App Screenshot"
            className="max-w-full h-auto"
          />
          <img
            src="./src/assets/AboutApp/image2.webp"
            alt="App Screenshot"
            className="absolute bottom-0 left-0 w-1/2  h-auto"
          />

          <img
            src="./src/assets/AboutApp/image3.webp"
            alt="App Screenshot"
            className="absolute  left-10 w-1/2  h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutApp;
