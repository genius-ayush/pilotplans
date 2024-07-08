import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturedIn() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    cssEase: "linear",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-center p-16 text-3xl font-serif italic text-gray-800">
        As featured in
      </div>
      <div className="mx-4">
        <Slider {...settings}>
          <div className="flex justify-center">
            <img src="./Featured/img1.png" alt="img1" className="w-52 h-8" />
          </div>
          <div className="flex justify-center">
            <img src="./Featured/img2.svg" alt="img2" className="w-52 h-8" />
          </div>
          <div className="flex justify-center">
            <img src="./Featured/img3.png" alt="img3" className="w-52 h-8" />
          </div>
          <div className="flex justify-center">
            <img src="./Featured/img4.png" alt="img4" className="w-52 h-8" />
          </div>
          <div className="flex justify-center">
            <img src="./Featured/img5.png" alt="img5" className="w-52 h-8" />
          </div>
          <div className="flex justify-center">
            <img src="./Featured/img6.png" alt="img6" className="w-52 h-8" />
          </div>
          <div className="flex justify-center">
            <img src="./Featured/img7.png" alt="img7" className="w-52 h-8" />
          </div>
          <div className="flex justify-center">
            <img src="./Featured/img8.png" alt="img8" className="w-52 h-8" />
          </div>
          <div className="flex justify-center">
            <img src="./Featured/img9.png" alt="img9" className="w-52 h-8" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedIn;
