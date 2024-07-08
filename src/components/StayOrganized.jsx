import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StayOrganized = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="py-16 bg-orange-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif italic text-gray-800 mb-4">Stay organized on the move</h2>
        <p className="text-gray-600">Traveling creates a lot of paperwork! Use Pilot to store and share flight times, itineraries and expenses.</p>
      </div>

      <Slider {...settings} className="px-8">
        <div className="flex flex-col items-center">
          <img src="./StayOrganized/img1.webp" alt="Slide 1" className="rounded-lg mb-4" />
          <p className="text-center text-gray-600">Drag & drop to flexibly reorder your plans</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./StayOrganized/img2.webp" alt="Slide 2" className="rounded-lg mb-4" />
          <p className="text-center text-gray-600">Decide & vote on different activities</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./StayOrganized/img2.webp" alt="Slide 3" className="rounded-lg mb-4" />
          <p className="text-center text-gray-600">Add expenses, files, links, and dates to anything</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="./StayOrganized/img5.webp" alt="Slide 3" className="rounded-lg mb-4" />
          <p className="text-center text-gray-600">Add expenses, files, links, and dates to anything</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./StayOrganized/img6.webp" alt="Slide 3" className="rounded-lg mb-4" />
          <p className="text-center text-gray-600">Add expenses, files, links, and dates to anything</p>
        </div>
      </Slider>
    </div>
  );
};

export default StayOrganized;
