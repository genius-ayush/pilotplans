import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselTripPlan() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1.25,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1280, // Desktop breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 2000, // Desktop breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="flex-col items-center justify-center">
          <img src="./src/assets/TripPlanImages/image1.webp" className="h-80" alt="" />
          <div className="ml-20 mt-5">Add daily activities</div>
        </div>
        <div className="">
          <img src="./src/assets/TripPlanImages/image2.webp" className="h-80" alt="" />
          <div className="ml-12 mt-5">Create beautiful inineraries</div>
        </div>
        <div className="">
          <img src="./src/assets/TripPlanImages/image3.webp" className="h-80" alt="" />
          <div className="ml-8 mt-5">Easily plan days and routes in one view</div>
        </div>
        <div className="">
          <img src="./src/assets/TripPlanImages/image4.webp" className="h-80" alt="" />
          <div className="ml-16 mt-5">Get Travel eVisas in 3 clicks</div>
        </div>
        <div className="">
          <img src="./src/assets/TripPlanImages/image5.webp" className="h-80" alt="" />
          <div className="ml-14 mt-5">Chat and colab at same place</div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselTripPlan;
