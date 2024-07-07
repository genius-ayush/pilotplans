import CallToAction from './CallToAction';
import React from 'react';

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="../public/HeroVideo.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white z-10 p-4">
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">The Social Trip Planning Tool</h1>
        <p className="text-center text-lg md:text-2xl">to make the most of every trip.</p>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 mb-4 z-20">
        <CallToAction />
      </div>
    </div>
  );
}

export default Hero;
