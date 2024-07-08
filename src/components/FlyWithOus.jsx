import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
function FlyWithOus() {
    const settings = {
        infinite: true,
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        cssEase: "linear",
        slidesToScroll: 100,
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
              slidesToShow: 1.5,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      return (
        <div className="pb-10">
          <div className="text-center flex justify-center p-16 text-4xl font-serif text-gray-800">
          Fly with us at @PilotPlans!
          </div>
          <div className="mx-4">
            <Slider {...settings}>
              <div className="flex justify-center">
                <img src="../public/FlyWithOus/img1.jpeg" alt="img1" className="w-64 h-full rounded-md" />
              </div>
              <div className="flex justify-center">
                <img src="../public/FlyWithOus/img2.jpeg" alt="img2" className="w-64 h-full rounded-md" />
              </div>
              <div className="flex justify-center">
                <img src="../public/FlyWithOus/img3.jpg" alt="img3" className="w-64 h-full rounded-md" />
              </div>
              <div className="flex justify-center">
                <img src="../public/FlyWithOus/img4.jpeg" alt="img4" className="w-64 h-full rounded-md" />
              </div>
              <div className="flex justify-center">
                <img src="../public/FlyWithOus/img5.jpg" alt="img5" className="w-64 h-full rounded-md" />
              </div>
              <div className="flex justify-center">
                <img src="../public/FlyWithOus/img6.webp" alt="img6" className="w-64 h-full rounded-md" />
              </div>
            </Slider>
          </div>
        </div>
      );
}

export default FlyWithOus