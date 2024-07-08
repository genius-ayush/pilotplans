// src/ScrollFeature.js
import React, { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 1, title: "Create Trip", content : "Nothing to download. Use Pilot from the web and export for offline access." ,  image: "./Started/img1.png" },
  { id: 2, title: "Collaborate and Plan", content : "Invite friends, get trip recommendations and add, delete and drag & drop anything." ,  image: "./Started/img2.png" },
  { id: 3, title: "Share Experience", content : "Secure travel docs and visas, export your itinerary and start traveling!" ,  image: "./Started/img3.png" },
];

const ScrollFeature = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sectionRefs.current.forEach((section, index) => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.clientHeight > scrollPosition) {
        setCurrentSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
        <img src={sections[currentSection].image} alt={sections[currentSection].title} className="transition-opacity duration-500 " />
      </div>
      <div className="w-1/2">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={el => (sectionRefs.current[index] = el)}
            className={`h-screen flex items-center justify-center duration-500 ${currentSection === index ? 'opacity-100 scale-100' : 'opacity-50 scale-90'}`}
          >
            <div className='flex flex-col justify-center contents-center'>
            <div className="text-5xl text-center p-10 ">{section.title}</div>
            <div className='text-center text-2xl text-gray-600 italic'>{section.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollFeature;
