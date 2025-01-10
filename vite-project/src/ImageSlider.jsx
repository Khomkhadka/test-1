import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick slider styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles
import "./ImageSlider.css"; // Custom slider styles


// for local image

import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";

function ImageSlider() {
  const sliderImages = [
    {
      id: 1,
      url: image1,
      alt: "Slide 1",
    },
    {
      id: 2,
      url:image2,
      alt: "Slide 2",
    },
    {
      id: 3,
      url: image3,
      alt: "Slide 3",
    },
  ];

  const settings = {
    dots: true, // Enable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable previous/next arrows
  };

  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        {sliderImages.map((image) => (
          <div key={image.id} className="slider-item">
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
