import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Datacarousel } from "./Data";
function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <h3 className="carousel-header">You Might Also Like</h3>
      <Slider {...settings}>
        {Datacarousel.map((item) => (
          <div className="card ">
            <div className="card-top">
              <img
                className="carousel-img"
                alt={`Shoe-${item.id}`}
                src={item.link}
              ></img>
              <h1 className="title">{item.title}</h1>
            </div>
            <div className="card-bottom">
              <span className="category">{item.category}</span>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Carousel;
