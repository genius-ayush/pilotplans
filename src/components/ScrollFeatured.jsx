import ScrollCarousel from 'scroll-carousel';
function ScrollFeatured() {
    new ScrollCarousel(".my-carousel", {
        autoplay: true ,
        direction: 'ltr'
      });
  return (
    <div>
      <div className="flex gap-10">
          <div>
            <img
              src="./Featured/img1.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./Featured/img2.svg"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./Featured/img3.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./Featured/img4.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./Featured/img5.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./Featured/img6.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./Featured/img7.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./Featured/img8.png"
              alt=""
              className="w-60 h-10"
            />
          </div>
          <div>
            <img
              src="./Featured/img9.png"
              alt=""
              className="w-60 h-10"
            />
          </div>
      </div>
    </div>
  );
}

export default ScrollFeatured;
