import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Runningtext() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false // This line removes the arrows
  };

  return (
    <div className="h-fit grid grid-cols-1 w-full max-w-fit mx-auto bg-blue-400">
      <div className="my-6 xl:my-18 -rotate-1">
        <Slider className="" {...settings}>
          <div className="w-full">
            <h1 className="text-white text-xl xl:text-5xl font-extrabold">Merchant</h1>
          </div>
          <div className="w-full">
            <h1 className="text-white text-xl xl:text-5xl font-extrabold">Branding</h1>
          </div>
          <div className="w-full">
            <h1 className="text-white text-xl xl:text-5xl font-extrabold">POI & POSM</h1>
          </div>
          <div className="w-full">
            <h1 className="text-white text-xl xl:text-5xl font-extrabold">Advertising</h1>
          </div>
        </Slider>
      </div>
    </div>)
}

export default Runningtext
