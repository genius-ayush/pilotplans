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
              src="./src/assets/Featured/img1.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./src/assets/Featured/img2.svg"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./src/assets/Featured/img3.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./src/assets/Featured/img4.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./src/assets/Featured/img5.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./src/assets/Featured/img6.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./src/assets/Featured/img7.png"
              alt=""
              className="w-60 h-10"
            />
          </div>

          <div>
            <img
              src="./src/assets/Featured/img8.png"
              alt=""
              className="w-60 h-10"
            />
          </div>
          <div>
            <img
              src="./src/assets/Featured/img9.png"
              alt=""
              className="w-60 h-10"
            />
          </div>
      </div>
    </div>
  );
}

export default ScrollFeatured;
