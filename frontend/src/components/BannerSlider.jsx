import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";         // 👈 required CSS
import "slick-carousel/slick/slick-theme.css";   // 👈 required theme
import { assets } from '../assets/assets';


const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="h-48 md:h-56 lg:h-64 overflow-hidden bg-[#FFF2F2]">

  <Slider {...settings}>
    {/* Slide 1 */}
    <div className="w-full h-full">
        <img
          src={assets.banner1}
          alt="Banner 1"
          className="h-56 md:h-56 lg:h-64 w-50 object-contain mx-auto"
        />
      </div>

  


    {/* Slide 2 */}
   <div className="w-full h-full">
        <img
          src={assets.banner2}
          alt="Banner 2"
          className="h-56 md:h-56 lg:h-64 w-50 object-contain mx-auto"
        />
      </div>

    {/* Slide 3 */}
    <div className="w-full h-full">
        <img
          src={assets.banner3}
          alt="Banner 3"
          className="h-56 md:h-56 lg:h-64 w-50 object-contain mx-auto"
        />
      </div>
  </Slider>
</div>

  );
};

export default BannerSlider;



